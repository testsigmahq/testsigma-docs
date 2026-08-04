---
title: "Modern Addons in Testsigma"
pagetitle: "Modern TypeScript Addons: Extend Testsigma with Custom Steps"
metadesc: "Build custom steps, conditions, data generators, and hooks in TypeScript for applications running on the Modern engine."
noindex: false
order: 18.9
page_id: "Modern Addons in Testsigma"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Engine Requirement"
  url: "#engine-requirement"
- type: link
  name: "What You Can Build"
  url: "#what-you-can-build"
- type: link
  name: "How Your Addon Reaches Test Authors"
  url: "#how-your-addon-reaches-test-authors"
---

---

Modern addons are TypeScript packages that extend Testsigma with your own functionality. You write async TypeScript against a typed SDK, build one bundle, and upload a single zip file. Testsigma handles distribution and execution.

---

## **Engine Requirement**

Modern addons appear only in applications created on the Modern engine. Classic applications offer Java addons instead.

[[info | **NOTE**:]]
| An application's engine is fixed at creation and cannot be changed later. Confirm which engine your test authors work in before you build. See [Execution engines](https://testsigma.com/docs/projects/overview/#execution-engines).

---

## **What You Can Build**

One package can ship any mix of four capability types. Each is a named export of a single entry module, wrapped in a define helper from the SDK.

| Capability | SDK helper | Where test authors find it |
|---|---|---|
| **Action** | **defineAddonTemplate()** | A step in the test step editor |
| **Condition** | **defineAddonTemplate()** with **stepActionType** | A condition in an IF or WHILE step |
| **Test data function** | **defineTestDataFunction()** | A data generator in test data fields |
| **Hook** | **defineHook()** | A post-run callback on a test plan |

Each helper validates your declaration and gives **execute()** full type inference. Mistakes surface at build time instead of during a test run.

### **Actions**

An action becomes a step with a grammar you define, such as **Fill ${target} with ${value}**. Actions drive the page or app under test, take test data and element inputs, and write results into runtime variables.

### **Conditions**

A condition answers a yes or no question that drives control flow. It decides which branch an IF step takes, or whether a WHILE loop runs again. Conditions are hidden from the ordinary action list.

### **Test Data Functions**

A test data function returns a single string, such as a random email address or a signed token. It has no access to the page under test and cannot write runtime variables. That restriction is what lets the platform call it anywhere a value is needed.

### **Hooks**

A hook runs after a test plan finishes. It receives the run result, the JUnit report, and optional CI/CD credentials. Use one to push results to an external system.

[[info | **NOTE**:]]
| Only AFTER hooks run today. **hookType: "BEFORE"** exists in the SDK types but is reserved for a future release.

---

## **How Your Addon Reaches Test Authors**

Actions appear in the step editor for the platforms you declare in **applicationType**. The test author fills your placeholders with test data and elements, then names a runtime variable for each output.

Test data functions appear wherever generated data is accepted: step test data, for-loop bounds, and step group parameter overrides. Hooks are configured on a test plan and run automatically.

Unified workspaces see addons declared for **ANDROID**, **IOS**, or both. Web-only addons are not offered there.
