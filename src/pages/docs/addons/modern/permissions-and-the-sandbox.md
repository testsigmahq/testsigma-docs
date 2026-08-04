---
title: "Modern Addon Permissions and Sandbox"
pagetitle: "Permissions and the Sandbox for Modern Addons"
metadesc: "Addon code runs deny-all by default. Declare filesystem, network, environment, subprocess, AI, and OCR access."
noindex: false
order: 18.97
page_id: "Modern Addon Permissions and Sandbox"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Declaring Permissions"
  url: "#declaring-permissions"
- type: link
  name: "What Each Permission Unlocks"
  url: "#what-each-permission-unlocks"
- type: link
  name: "Subprocess Execution Is Local Only"
  url: "#subprocess-execution-is-local-only"
- type: link
  name: "What Is Always Blocked"
  url: "#what-is-always-blocked"
- type: link
  name: "Request Only What You Need"
  url: "#request-only-what-you-need"
---

---

Addon code runs in a locked-down sandbox where everything is denied by default. You opt in to each capability with explicit allowlists on the definition, which the build mirrors into the manifest.

---

## **Declaring Permissions**

```ts
permissions: {
  fs: ["/data/exports/**"],   // filesystem globs
  net: ["api.example.com"],   // outbound hostnames
  env: ["MY_API_TOKEN"],      // readable process.env keys
  spawn: true,                // ctx.spawn, local agent only
  ai: true,                   // ctx.ai
  ocr: true,                  // ctx.ocr
}
```

---

## **What Each Permission Unlocks**

| Permission | Default | Unlocks | On violation |
|---|---|---|---|
| **fs** | **tmpDir** only | Reading and writing the listed globs | Filesystem call throws |
| **net** | No network | **fetch** to the listed hostnames | Request rejected |
| **env** | No access | Reading the listed **process.env** keys | Key reads as **undefined** |
| **spawn** | **false** | **ctx.spawn.run()** | On cloud, every call rejects |
| **ai** | **false** | **ctx.ai** | Field absent |
| **ocr** | **false** | **ctx.ocr** | Field absent |

**fs**, **net**, and **env** apply to actions, test data functions, and hooks alike. **spawn**, **ai**, and **ocr** are honored for action addons only, so hook and test data function contexts never expose them.

**ctx.tmpDir** is always readable and writable without an **fs** entry.

---

## **Subprocess Execution Is Local Only**

[[info | **NOTE**:]]
| **ctx.spawn** works only on a local or hybrid agent. On cloud executions the broker is not attached and every **ctx.spawn.run()** rejects. Design your addon to surface that failure clearly rather than hanging.

Subprocess execution is host-brokered. The command runs in the agent process using **execFile**, taking a command and an argument vector with no shell, so raw **child_process** imports stay blocked.

```ts
const { stdout, exitCode } = await ctx.spawn.run("node", ["-e", "console.log('hi')"]);
```

The result is **{ stdout, stderr, exitCode, signal, truncated }**. The child inherits the agent's environment, including **PATH**, **HOME**, and credentials, so real CLIs resolve. Output is buffered and capped, and each run has a timeout.

---

## **What Is Always Blocked**

Dynamic code evaluation is blocked, including **eval** and the raw **Function** constructor.

Raw **child_process**, **worker_threads**, and the raw **node:http**, **node:https**, and **node:net** modules are always blocked. No permission unlocks a direct import, and a top-level import of one prevents the bundle from loading at all.

Make outbound calls with the global **fetch**, gated by **permissions.net**. Run local commands with **ctx.spawn**, gated by **permissions.spawn**.

---

## **Request Only What You Need**

Reviewers and test authors see your declared permissions. A tight allowlist makes your addon easier to trust and approve, which matters when a security team reviews third-party code.
