---
title: "Create a Modern Action Addon"
pagetitle: "Create Custom Test Steps with Modern Action Addons"
metadesc: "Add a custom step to the test step editor by exporting an action addon from your entry module."
noindex: false
order: 18.92
page_id: "Create a Modern Action Addon"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Declare the Action"
  url: "#declare-the-action"
- type: link
  name: "Write the Step Grammar"
  url: "#write-the-step-grammar"
- type: link
  name: "Handle Inputs"
  url: "#handle-inputs"
- type: link
  name: "Return a Result"
  url: "#return-a-result"
- type: link
  name: "Target the Right Platforms"
  url: "#target-the-right-platforms"
---

---

Add a custom step to the step editor by exporting an action from your entry module. You define the step's grammar, its inputs, and its outputs, then write the automation logic in **execute()**.

---

> <p id="prerequisites">Prerequisites</p>
>
> - A Modern addon exists and its scaffold is downloaded.
> - Node.js 22 or later is installed.

---

## **Declare the Action**

```ts
import { defineAddonTemplate } from "@testsigma/addon-sdk";

export const readText = defineAddonTemplate({
  name: "myaddon.readText",
  description: "Read the text content of a located element.",
  actionText: "Read text from ${target}",
  applicationType: ["WEB"],
  elements: {
    target: { description: "Element to read text from" },
  },
  outputs: {
    value: { type: "runtimeVar", description: "The element's text content" },
  },
  async execute(input, ctx) {
    const text = (await ctx.ui.browser.locate(input.elements.target).textContent()) ?? "";
    return {
      message: {
        success: `Read ${text.length} character(s)`,
        failure: `Could not read text`,
      },
      outputs: { value: text },
    };
  },
});
```

Every field **defineAddonTemplate()** accepts:

| Field | Required | Meaning |
|---|---|---|
| **name** | Yes | Globally unique name, dotted convention with your prefix, such as **sftp.upload**. Keep it stable across versions. |
| **description** | Yes | Short description shown in the authoring UI. |
| **actionText** | Yes | Step grammar shown to test authors. Each **${placeholder}** maps to a **testData** or **elements** key. |
| **applicationType** | Yes | Non-empty list of **WEB**, **MOBILE_WEB**, **ANDROID**, **IOS**. Determines which adapter **ctx.ui** exposes. |
| **permissions** | No | Sandbox allowlists. Defaults to deny-all. |
| **testData** | No | Zod schema for plain-value inputs. Inferred types flow into **execute()**. |
| **elements** | No | Map of element-typed inputs bound to recorded elements. |
| **environment** | No | Zod schema for inputs read from the test environment. |
| **outputs** | No | Named outputs, each **{ type: "runtimeVar" }**. |
| **stepActionType** | No | **"IF_CONDITION"** or **"WHILE_LOOP"**, making this a condition addon. |
| **useCustomScreenshot** | No | Set **true** when your addon takes its own screenshot and the automatic one should be suppressed. |

An empty **applicationType** is a compile error. At least one platform is required.

These names are reserved and cannot be used as test data, element, environment, or output keys: **name**, **resolvedAuth**, **id**, **xmlLine**, **textContent**, **_addonBundle**.

---

## **Write the Step Grammar**

**actionText** is what test authors read in the editor. Each **${placeholder}** maps to a **testData** or **elements** key.

Every input key must appear in **actionText**, and every placeholder must have a matching key. The build fails otherwise.

[[info | **NOTE**:]]
| Output keys must not appear in **actionText**. The test author binds each output to a runtime variable using a chip in the step editor.

---

## **Handle Inputs**

**input.testData** holds values typed by your Zod schema, already validated. **input.elements** holds one opaque **ElementRef** per declared element, which you pass to **locate()**. **input.environment** holds values read from the test environment.

Describe every field. A **.describe()** text on a Zod field becomes the inline help test authors rely on.

Type a **testData** field as **z.enum([...])** to render a fixed-option dropdown instead of a free-text field:

```ts
testData: z.object({
  priority: z.enum(["Low", "Medium", "High"]).describe("Ticket priority"),
}),
```

The build records the options as **testDataAllowedValues** in the manifest, and the same enum validates the submitted value at run time.

When a test author supplies an uploaded file as test data, your addon receives a local file path staged into **ctx.tmpDir**. The platform downloads the file before **execute()** runs. Read it with **node:fs**. No **fs** permission is needed, because **ctx.tmpDir** is always allowed.

---

## **Return a Result**

```ts
return {
  message: {
    success: "Shown in the step result on success",
    failure: "Shown if the step is treated as failed",
  },
  outputs: { value: text },
};
```

Both message fields are mandatory, so both outcomes are addressed up front. Make them specific: "Read 42 characters from Order total" tells a test author more than "Success".

A thrown **Error** fails the step and surfaces its message verbatim. Returning **conditionMet: false** is an alternative that fails the step with **message.failure**, which is often clearer than throwing.

---

## **Target the Right Platforms**

The **applicationType** list determines which adapter **ctx.ui** exposes.

| **applicationType** | **ctx.ui** |
|---|---|
| **["WEB"]** | **ctx.ui.browser** |
| **["ANDROID"] or ["IOS"]** | **ctx.ui.mobile** |
| **["WEB", "ANDROID"]** | A union — narrow with **ctx.ui.kind** |

For cross-platform addons, branch on **ctx.ui.kind** rather than shipping one bundle per platform.
