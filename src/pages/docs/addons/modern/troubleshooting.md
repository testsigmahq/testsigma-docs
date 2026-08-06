---
title: "Troubleshoot Modern Addons"
pagetitle: "Troubleshoot Modern Addon Build, Upload, and Run Errors"
metadesc: "Fixes for build failures, rejected uploads, missing steps, permission errors, and unset runtime variables."
noindex: false
order: 18.99
page_id: "Troubleshoot Modern Addons"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Build and Upload Failures"
  url: "#build-and-upload-failures"
- type: link
  name: "Your Step Does Not Appear"
  url: "#your-step-does-not-appear"
- type: link
  name: "Permission Errors at Run Time"
  url: "#permission-errors-at-run-time"
- type: link
  name: "Other Run-Time Symptoms"
  url: "#other-run-time-symptoms"
- type: link
  name: "Practices That Prevent Most of These"
  url: "#practices-that-prevent-most-of-these"
---

---

Build failures, rejected uploads, and missing steps almost always trace to a declaration mismatch between your code and what the platform expects. Run **pnpm run check** first, because it catches most authoring mistakes and names a concrete fix for each one.

---

## **Build and Upload Failures**

| Symptom | Cause and fix |
|---|---|
| **"Input X is declared but never referenced in actionText"** | Every **testData**, **elements**, and **environment** key must appear in **actionText** as **${X}**. Add the placeholder, or remove the unused field. |
| **"actionText references ${X} but no input field X is declared"** | A placeholder has no matching key, usually a typo. The CLI suggests the closest match. Output keys must not appear in **actionText**. |
| **Upload rejected** | Zip over 50 MB, **manifest.json** missing from the zip root, **entry** not pointing at the bundle inside the zip, or an empty **applicationType**. |
| **Bundle fails to load after upload** | A top-level import of an always-blocked module, duplicate export names, or non-ESM output. |

Blocked modules are **child_process**, **worker_threads**, and raw **node:http**, **node:https**, and **node:net**. Use **fetch** and **ctx.spawn** instead.

---

## **Your Step Does Not Appear**

Check these in order:

1. The application runs on the Classic engine, which offers only Java addons.
2. The manifest entry is missing, or its **applicationType** excludes the workspace platform.
3. The addon is still in Draft and the run is a cloud execution.

---

## **Permission Errors at Run Time**

A "not in **permissions.net**" error means the hostname, path, or environment key is absent from your allowlist. Add it to **permissions** in the definition, rebuild, and re-upload. The manifest regenerates for you.

Hooks and test data functions enforce the same sandbox. Declare **permissions** on **defineHook()** and **defineTestDataFunction()** too.

[[info | **NOTE**:]]
| Addons built before the SDK supported hook and test data function permissions must update **@testsigma/addon-sdk**, add the declaration, bump the package version, rebuild, and re-upload. **junitXml()** needs no allowlist entry.

---

## **Other Run-Time Symptoms**

| Symptom | Cause and fix |
|---|---|
| **Output never lands in a runtime variable** | The key returned in **outputs** does not match the declaration, or the test author did not map a variable name. |
| **Mobile locator fails with a strategy error** | **androidUiAutomator** is Android only; **iosPredicate** and **iosClassChain** are iOS only. Branch on the platform, or use **accessibilityId**, **id**, **xpath**, or **className**. |
| **Hook never fires** | Only AFTER hooks run today. Confirm the hook is attached to the test plan and the manifest entry has **"hookType": "AFTER"**. |
| **Zod validation error on execute** | The test author's input does not satisfy your schema. Improve field descriptions and defaults so valid input is the easy path. |
| **ctx.spawn.run() rejects with "local agent only"** | Subprocess execution is unavailable on cloud executions. Run on a local or hybrid agent. |

---

## **Practices That Prevent Most of These**

- Write both **message.success** and **message.failure**, and make them specific.
- Log liberally with **ctx.logger**. Logs are captured with the step result and are your main debugging tool in cloud runs. Never log secrets.
- Honor **ctx.signal** in loops and long waits.
- Use **ctx.tmpDir** for files, since it needs no permissions and is cleaned up for you.
- Describe every field, because those strings become the inline help.
- Validate with Zod constraints rather than checks inside **execute()**.
- Branch on **ctx.ui.kind** in cross-platform addons.
