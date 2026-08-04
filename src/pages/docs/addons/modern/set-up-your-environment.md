---
title: "Set Up a Modern Addon Environment"
pagetitle: "Set Up Your Modern Addon Development Environment"
metadesc: "Install the toolchain, create a Modern addon in Testsigma, and download the generated scaffold project."
noindex: false
order: 18.91
page_id: "Set Up a Modern Addon Environment"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create the Addon"
  url: "#create-the-addon"
- type: link
  name: "What the Scaffold Contains"
  url: "#what-the-scaffold-contains"
- type: link
  name: "Install Dependencies"
  url: "#install-dependencies"
- type: link
  name: "Next Steps"
  url: "#next-steps"
---

---

Install the toolchain, create the addon in Testsigma, and download the scaffold. The scaffold is a ready-to-build TypeScript project with the SDK already declared as a dependency.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Node.js 22 or later is installed.
> - pnpm or npm is available.
> - Modern addon features are enabled for your Testsigma account.
> - You are familiar with TypeScript.

---

## **Create the Addon**

1. In the left navigation bar, click the **Addons** icon, then select **Addons**.
2. Click **+ New Addon**.
3. Select the **Modern (TypeScript)** runtime.
4. Enter a **Name** and a **Description**.
5. Click **Create & Proceed**.
6. On the addon's detail page, click the **Download** icon.

---

## **What the Scaffold Contains**

```
my-addon/
├── package.json        # build scripts + SDK dependency
├── tsconfig.json
├── tsup.config.ts      # bundler configuration
├── scripts/pack.mjs    # zips the build output for upload
└── src/index.ts        # your code — one named export per capability
```

Write every capability as a named export in **src/index.ts**. Default exports and arrays are not supported, and names must be unique within the bundle.

[[info | **NOTE**:]]
| The scaffold has no **manifest.json**. The build generates it from **src/index.ts**, so your code is the single source of truth. Never hand-edit a generated manifest — the next build overwrites it.

---

## **Install Dependencies**

```bash
pnpm install
```

To use an npm package, add it with **pnpm add <package>** and import it. The bundler inlines every dependency, so choose pure JavaScript packages. Native and binary modules do not load.

---

## **Next Steps**

Pick the capability you want to build, then return to [Build, upload, and publish](https://testsigma.com/docs/addons/modern/build-upload-and-publish/) when your code is ready.
