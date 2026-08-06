---
title: "Create a Modern Test Plan Hook"
pagetitle: "Push Test Plan Results to External Systems with Hooks"
metadesc: "Run code after a test plan completes, with access to the run result, JUnit report, and CI/CD credentials."
noindex: false
order: 18.95
page_id: "Create a Modern Test Plan Hook"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Declare the Hook"
  url: "#declare-the-hook"
- type: link
  name: "What the Context Provides"
  url: "#what-the-context-provides"
- type: link
  name: "Declare the Hosts You Contact"
  url: "#declare-the-hosts-you-contact"
- type: link
  name: "Accept Configuration from the Plan"
  url: "#accept-configuration-from-the-plan"
- type: link
  name: "Return a Message"
  url: "#return-a-message"
---

---

A hook reacts to test plan lifecycle events. AFTER hooks fire once a test plan run completes, which makes them suitable for pushing results to an external system such as qTest or TestRail.

---

> <p id="prerequisites">Prerequisites</p>
>
> - A Modern addon exists and its scaffold is downloaded.

---

## **Declare the Hook**

```ts
import { defineHook } from "@testsigma/addon-sdk";

export const pushToQTest = defineHook({
  name: "qtest.afterPlan",
  description: "Push run results to qTest after the plan finishes",
  hookType: "AFTER",
  cicdCredentials: true,
  permissions: { net: ["qtest.example.com"] },
  async execute(_input, ctx) {
    const rr = ctx.runResult;
    const junit = await rr.junitXml();
    const creds = ctx.cicdCredentials;
    return { message: `Pushed run ${rr.id} (${rr.result}) to qTest` };
  },
});
```

[[info | **NOTE**:]]
| Only **hookType: "AFTER"** runs today. **"BEFORE"** exists in the SDK types but is reserved for a future release.

---

## **What the Context Provides**

| Field | Contents |
|---|---|
| **ctx.runResult** | **id**, **result**, **startTime**, **endTime**, **duration**, **testPlanResultId**, **reRunParentId**, and **junitXml()** |
| **ctx.cicdCredentials** | **url**, **username**, **password**, **executionName**, **outputUploadUrl** |
| **ctx.runtime** | The plan's runtime variables, readable and writable |
| **ctx.logger, ctx.tmpDir, ctx.signal, ctx.execution** | Same as action addons |

**result** is one of **SUCCESS**, **FAILURE**, **ABORTED**, or **STOPPED**. **junitXml()** fetches the run's JUnit report on demand and memoizes it.

**ctx.cicdCredentials** is populated only when you declare **cicdCredentials: true** and a CI/CD integration is connected to the plan.

---

## **Declare the Hosts You Contact**

Hooks run in the same sandbox as everything else. Every host your hook contacts must appear in **permissions.net**, or the request is blocked.

The one exception is **ctx.runResult.junitXml()**. Its download URL comes from the platform rather than your code, so it needs no allowlist entry.

---

## **Accept Configuration from the Plan**

Hooks may declare **testData** and **environment** Zod schemas, exactly like actions. Values the test plan configurator fills in arrive as **input.testData** and **input.environment**.

---

## **Return a Message**

Return **{ message }**, or nothing. The message appears in the test plan result panel. A thrown error marks the hook invocation failed and surfaces the error message.

[[info | **NOTE**:]]
| **cicdCredentials.password** is typed as a branded secret, so logging it is a compile-time error. Never write credentials to logs, runtime variables, or hook messages.
