---
title: "Modern Execution Context Reference"
pagetitle: "Execution Context Reference: ctx for Modern Addons"
metadesc: "The ctx object passed to execute: browser and mobile adapters, runtime variables, AI, OCR, and direct Playwright or WebdriverIO access."
noindex: false
order: 18.98
page_id: "Modern Execution Context Reference"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Context Fields"
  url: "#context-fields"
- type: link
  name: "Browser Adapter"
  url: "#browser-adapter"
- type: link
  name: "Mobile Adapter"
  url: "#mobile-adapter"
- type: link
  name: "What Is Exposed"
  url: "#what-is-exposed"
- type: link
  name: "Three Rules That Differ from a Normal Test"
  url: "#three-rules-that-differ-from-a-normal-test"
- type: link
  name: "Structural Validation with Aria Snapshots"
  url: "#structural-validation-with-aria-snapshots"
- type: link
  name: "Waiting on Mobile"
  url: "#waiting-on-mobile"
- type: link
  name: "What Is Refused"
  url: "#what-is-refused"
- type: link
  name: "Runtime Variables"
  url: "#runtime-variables"
- type: link
  name: "AI"
  url: "#ai"
- type: link
  name: "OCR"
  url: "#ocr"
---

---

**execute()** receives a context object as its second argument. Which fields are present depends on the platforms you declare in **applicationType** and the permissions you request. Requesting nothing gives you logging, a scratch directory, runtime variables, and an abort signal.

---

## **Context Fields**

| Field | Available | Purpose |
|---|---|---|
| **ctx.ui.browser** | Platforms include **WEB** or **MOBILE_WEB** | Drive the page under test |
| **ctx.ui.mobile** | Platforms include **ANDROID** or **IOS** | Drive the app under test |
| **ctx.runtime** | Always | Read and write runtime variables by name |
| **ctx.logger** | Always | Structured logging: **debug**, **info**, **warn**, **error** |
| **ctx.tmpDir** | Always | Per-step scratch directory, auto-cleaned, always readable and writable |
| **ctx.signal** | Always | **AbortSignal** that fires if the run is cancelled |
| **ctx.execution** | Always | Read-only metadata: **sessionId**, **applicationType**, result identifiers |
| **ctx.ai** | With **permissions.ai** | Platform-brokered LLM generation |
| **ctx.ocr** | With **permissions.ocr** | Platform-brokered OCR and image finding |
| **ctx.spawn** | With **permissions.spawn** | Host-brokered subprocess, local agent only |

Honor **ctx.signal** in loops and long waits so cancelled runs stop promptly.

---

## **Browser Adapter**

| Method | Notes |
|---|---|
| **locate(elementRef \| selector)** | Returns a locator handle for a declared element or an ad-hoc selector |
| **goto(url, opts?)** | **waitUntil: "load" \| "domcontentloaded" \| "networkidle"** |
| **screenshot(opts?)** | **{ fullPage?: boolean }**, returns a Buffer |
| **title() / url()** | Current page title and URL |
| **evaluate(scriptString, args?)** | Must be a string. Function values cannot be transferred. |
| **waitForSelector(sel, opts?)** | **{ state?: "attached" \| "visible" \| "hidden", timeout? }** |

Locator handles support **click()**, **fill(text)**, **textContent()**, **getAttribute(name)**, **isVisible()**, **count()**, **boundingBox()**, and string-based **evaluate()**.

---

## **Mobile Adapter**

**locate()** accepts a declared **ElementRef** or an ad-hoc **{ strategy, value }** literal. Supported strategies are **accessibilityId**, **id**, **xpath**, **className**, **androidUiAutomator** for Android, and **iosPredicate** or **iosClassChain** for iOS.

| Surface | Methods |
|---|---|
| **Element handle** | **tap()**, **longPress({ms?})**, **fill(text)**, **clear()**, **text()**, **getAttribute(name)**, **isVisible()**, **boundingBox()**, **swipe(direction)**, **count()** |
| **Device** | **screenshot()**, **getContexts()**, **getCurrentContext()**, **switchContext(name)**, **getOrientation()**, **setOrientation(...)**, **hideKeyboard()** |

[[info | **NOTE**:]]
| Using a platform-specific strategy on the other platform fails at run time. Coordinates from **boundingBox()** are device pixels, so divide by the device pixel ratio for density-independent units.

---

## **What Is Exposed**

**ctx.ui.browser** and **ctx.ui.browser.page** are the same object at two levels of abstraction. The adapter above covers common cases; when it does not reach far enough, every session also exposes the real automation object and the real assertion library.

| Platform | Automation | Assertions |
|---|---|---|
| **Web** | **ctx.ui.browser.page** — Playwright **Page** | **ctx.ui.browser.expect** |
| **Mobile** | **ctx.ui.mobile.driver** — WebdriverIO driver | **ctx.ui.mobile.expect** |

No permission declaration is required for any of them. These are the genuine libraries rather than a curated subset, so every matcher, **.not**, **.soft**, and the generic value matchers work as documented.

Reach for these for frames, keyboard and mouse, dialogs, downloads, and accessibility snapshots on web, or raw Appium commands on mobile.

---

## **Three Rules That Differ from a Normal Test**

Your addon runs in a worker while the browser lives in the host process. That has three consequences.

1. **Await everything**, including calls that are synchronous in Playwright such as **page.url()**. Composing without awaiting is still free, so **page.getByRole("form").locator("input")** reaches the host only once, when you finally await it.
2. **Await every assertion.** Generic matchers return a promise here. An un-awaited failing assertion becomes an unhandled rejection, and your step passes when it should not.
3. **No closures.** Function arguments are rejected. Anything that evaluates in the browser or on the device takes a string instead, including **evaluate("el => el.textContent")**, **waitForFunction**, **$$eval**, and WebdriverIO's **execute**.

---

## **Structural Validation with Aria Snapshots**

Asserting the shape of a form or menu in one call beats a pile of per-element checks. Matching is a subset check, so unrelated markup can change freely, and it auto-retries like any Playwright assertion.

```ts
const page = ctx.ui.browser.page;
const expect = ctx.ui.browser.expect;

await expect(page.getByRole("form", { name: "Filters" })).toMatchAriaSnapshot(`
  - heading "Filters"
  - textbox "Search"
  - button "Apply"
`);

const snapshot = await page.getByRole("form", { name: "Filters" }).ariaSnapshot();
```

---

## **Waiting on Mobile**

WebdriverIO's **waitUntil** is unavailable, because its condition callback runs in Node and no string form can replace it. Use **ctx.ui.mobile.waitUntil**, which re-evaluates a driver expression on the device each interval.

```ts
await ctx.ui.mobile.waitUntil(driver.$("~ok").isDisplayed(), { timeout: 10_000 });
```

Pass the expression without awaiting it. Awaiting first would check it once, and is refused with an explanation. Options are WebdriverIO's **timeout**, **interval**, and **timeoutMsg**.

---

## **What Is Refused**

Your addon is one step inside someone else's session, so anything that outlives the step or hands over credentials is refused with a clear error.

| Group | Members |
|---|---|
| **Persistent callbacks** | **on**, **once**, **route**, **exposeFunction**, **addInitScript** |
| **Session lifecycle** | **close**, **pause**, **setDefaultTimeout**, **deleteSession**, **reloadSession**, **addCommand** |
| **Escapes that outlive the step** | **newPage**, **newCDPSession**, **tracing**, **browser** |
| **Credentials, mobile** | **options**, **requestedCapabilities** |

One-shot **waitForEvent(...)** is available and covers dialogs, downloads, and popups. **capabilities** stays available, so you can branch on **platformVersion**.

**page.context()** and **page.request** are available, so cookies, **storageState()**, and API calls all work. Only the dangerous members inside them are refused.

[[info | **NOTE**:]]
| File paths passed to **screenshot({ path })**, **Download.saveAs()**, **setInputFiles()**, or WebdriverIO's savers must sit under **ctx.tmpDir**. Anywhere else is refused.

On mobile, prefer **ctx.ui.mobile.locate(...)** over **driver.$(...)** where it suffices. **locate()** applies UiAutomator **resourceId** wrapping, the iOS class-name predicate workaround, and xpath normalization that the raw driver does not.

---

## **Runtime Variables**

```ts
const v = await ctx.runtime.get("orderId");   // undefined when unset
await ctx.runtime.set("orderId", "ORD-1042");
await ctx.runtime.set("token", jwt, { isEncrypted: true });
```

---

## **AI**

```ts
const answer = await ctx.ai.invoke("Summarize this receipt", {
  files: ["receipt.png"],
});
```

File paths are relative to **ctx.tmpDir**, or within your **fs** allowlist.

---

## **OCR**

| Method | Returns |
|---|---|
| **extractTextFromPage()** | Recognized text spans with bounding boxes for the current page |
| **extractTextFromImage(path)** | The same, for an image file you supply |
| **extractTextFromElement(elementRef)** | The same, for one element. Web only. |
| **findImage(refImage, opts?)** | **{ isFound, x1, y1, x2, y2 }** |

**findImage** accepts **threshold**, **scale**, and **occurrence** options.
