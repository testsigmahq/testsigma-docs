---
title: "Create a Modern Test Data Function"
pagetitle: "Create Custom Test Data Generators in TypeScript"
metadesc: "Build a custom data generator that returns a string for step test data, loop bounds, and parameter overrides."
noindex: false
order: 18.94
page_id: "Create a Modern Test Data Function"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Declare the Function"
  url: "#declare-the-function"
- type: link
  name: "Declaration Fields"
  url: "#declaration-fields"
- type: link
  name: "What the Context Provides"
  url: "#what-the-context-provides"
- type: link
  name: "Where Test Authors Use It"
  url: "#where-test-authors-use-it"
- type: link
  name: "Write for Idempotence"
  url: "#write-for-idempotence"
---

---

A test data function is a pure generator. It receives a parameter map and returns a single string. It has no UI adapters and cannot modify runtime variables, and that purity is what lets the platform call it anywhere a value is needed.

---

> <p id="prerequisites">Prerequisites</p>
>
> - A Modern addon exists and its scaffold is downloaded.

---

## **Declare the Function**

```ts
import { defineTestDataFunction } from "@testsigma/addon-sdk";
import { z } from "zod";

export const randomEmail = defineTestDataFunction({
  name: "random.email",
  description: "Generate a unique email address",
  parameters: z.object({
    domain: z.string().default("example.com").describe("Mail domain to use"),
  }),
  async generate({ domain }, ctx) {
    const local = `user-${Math.random().toString(36).slice(2, 10)}`;
    ctx.logger.info("generated email", { domain });
    return `${local}@${domain}`;
  },
});
```

---

## **Declaration Fields**

| Field | Meaning |
|---|---|
| **name** | Globally unique name. Use the dotted convention. |
| **description** | Shown in the data generator picker. |
| **parameters** | Optional Zod schema for arguments the test author fills in. |
| **permissions** | Optional allowlists. Only **fs**, **net**, and **env** apply. |
| **generate(args, ctx)** | Returns a **Promise<string>**. |

A function that calls an external API declares the host it contacts, for example **permissions: { net: ["erp.example.com"] }**.

---

## **What the Context Provides**

**ctx** gives you **tmpDir**, **signal**, **logger**, and **execution**. There is no UI adapter and no runtime variable store.

[[info | **NOTE**:]]
| **ai** and **ocr** permissions are honored for action addons only. A test data function context never exposes **ctx.ai** or **ctx.ocr**.

---

## **Where Test Authors Use It**

- Step test data, in any field that accepts a data generator
- For-loop conditions, as the left or right bound
- Step group parameter overrides

---

## **Write for Idempotence**

The platform may cache a result within a run when the function is invoked with identical parameters. A loop bound, for example, is computed once per loop rather than once per iteration.

[[info | **NOTE**:]]
| Do not rely on the function being re-invoked for every reference with the same arguments. If each call must produce a fresh value, vary a parameter.
