---
title: "Create a Modern Condition Addon"
pagetitle: "Create Custom IF and WHILE Conditions with Addons"
metadesc: "Build a custom condition that drives an IF branch or a WHILE loop by returning a boolean verdict."
noindex: false
order: 18.93
page_id: "Create a Modern Condition Addon"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Declare the Condition"
  url: "#declare-the-condition"
- type: link
  name: "Return a Verdict"
  url: "#return-a-verdict"
- type: link
  name: "Read Outputs After a Loop"
  url: "#read-outputs-after-a-loop"
- type: link
  name: "Use conditionMet in Ordinary Actions"
  url: "#use-conditionmet-in-ordinary-actions"
---

---

An action passes or fails. A condition instead answers a yes or no question that drives control flow: which branch an IF step takes, or whether a WHILE loop runs again.

---

> <p id="prerequisites">Prerequisites</p>
>
> - A Modern addon exists and its scaffold is downloaded.
> - You have read [Create an action addon](https://testsigma.com/docs/addons/modern/create-an-action-addon/).

---

## **Declare the Condition**

Set **stepActionType** on an ordinary action declaration.

| **stepActionType** | Where it appears |
|---|---|
| **"IF_CONDITION"** | The condition picker of an IF step |
| **"WHILE_LOOP"** | The condition picker of a WHILE step |

A condition addon is hidden from the ordinary action list and shows up only in the matching picker.

```ts
export const countAbove = defineAddonTemplate({
  name: "cond.countAbove",
  description: "Loop while the count of matched elements exceeds a threshold",
  actionText: "While count of ${target} is greater than ${threshold}",
  applicationType: ["WEB", "MOBILE_WEB"],
  stepActionType: "WHILE_LOOP",
  testData: z.object({ threshold: z.string().describe("Count to compare against") }),
  elements: { target: { description: "Element whose match count drives the loop" } },
  outputs: { count: { type: "runtimeVar", description: "Match count at the last evaluation" } },
  async execute({ testData, elements }, ctx) {
    if (ctx.ui.kind !== "web") throw new Error("requires a web platform");
    const count = await ctx.ui.browser.locate(elements.target).count();
    return {
      message: {
        success: `Count of '${elements.target.name}' is ${count}`,
        failure: `Count is ${count} — not above ${testData.threshold}`,
      },
      outputs: { count },
      conditionMet: count > Number(testData.threshold),
    };
  },
});
```

---

## **Return a Verdict**

When **stepActionType** is set, **execute()** must return a boolean **conditionMet**. The worker rejects the result otherwise.

[[info | **NOTE**:]]
| Returning **false** is not an error. It reads as "condition not met", so the loop exits or the IF takes its other branch, and the step is not a failure.

Reserve **throw** for something genuinely going wrong, such as a malformed threshold or an element that could not be queried. A thrown error records its message on the condition step and produces the same control-flow outcome as a built-in condition step.

---

## **Read Outputs After a Loop**

Declared outputs are written on every evaluation, including the final one that ends a loop. A runtime variable bound to **count** therefore holds the value that stopped the loop.

---

## **Use conditionMet in Ordinary Actions**

**conditionMet** also works on actions that declare no **stepActionType**. There it is an explicit pass or fail verdict, and **false** fails the step with **message.failure**.
