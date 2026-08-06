---
title: "Build, Upload, and Publish a Modern Addon"
pagetitle: "Build, Upload, and Publish a Modern Addon"
metadesc: "Validate, build, and upload your addon, then publish it and manage versions across updates."
noindex: false
order: 18.96
page_id: "Build, Upload, and Publish a Modern Addon"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Validate Before Building"
  url: "#validate-before-building"
- type: link
  name: "Build the Bundle"
  url: "#build-the-bundle"
- type: link
  name: "What the Build Produces"
  url: "#what-the-build-produces"
- type: link
  name: "Upload the Zip"
  url: "#upload-the-zip"
- type: link
  name: "Bundle Rules"
  url: "#bundle-rules"
- type: link
  name: "When an Upload Fails"
  url: "#when-an-upload-fails"
- type: link
  name: "Where Each Status Runs"
  url: "#where-each-status-runs"
- type: link
  name: "Publish the Addon"
  url: "#publish-the-addon"
- type: link
  name: "Update an Existing Addon"
  url: "#update-an-existing-addon"
- type: link
  name: "Keep Names Stable"
  url: "#keep-names-stable"
---

---

Validate your declarations, build the bundle, and upload the generated zip. The build also generates the manifest from your code, so the source file stays the only thing you maintain.

---

> <p id="prerequisites">Prerequisites</p>
>
> - Dependencies are installed with **pnpm install**.
> - At least one capability is exported from **src/index.ts**.

---

## **Validate Before Building**

```bash
pnpm run check
```

The check flags authoring mistakes and gives a concrete fix for each. It catches an input never referenced in **actionText**, a **${placeholder}** with no matching field, and an empty dropdown.

It exits with a non-zero status, so it works in a pre-commit hook or in CI.

---

## **Build the Bundle**

```bash
pnpm run build
```

The build runs three stages:

1. The bundler compiles **src/index.ts** into **dist/index.js**, a self-contained ESM file with every dependency inlined.
2. **testsigma-addon manifest .** reads your code and generates **manifest.json**.
3. The pack script zips the manifest and the bundle into **<name>-<version>.zip**.

---

## **What the Build Produces**

The manifest is the static contract the platform reads to register your steps, test data functions, and hooks. You do not write it.

[[info | **NOTE**:]]
| **testsigma-addon manifest** derives every key from your Zod schemas and declaration maps. If a key looks wrong, fix the schema in **src/index.ts** and rebuild. Any hand-edit is overwritten on the next build.

Run **testsigma-addon check .** to validate without writing. The uploaded zip contains exactly two things: the generated **manifest.json** and your built bundle.

```json
{
  "manifestVersion": 1,
  "entry": "dist/index.js",
  "version": "1.0.0",
  "addons": [
    {
      "kind": "addon",
      "name": "dom.fill",
      "description": "Fill a form input with a value",
      "actionText": "Fill ${target} with ${value}",
      "applicationType": ["WEB", "MOBILE_WEB"],
      "testDataKeys": ["value"],
      "elementKeys": ["target"],
      "envKeys": [],
      "outputKeys": [],
      "permissions": {},
      "testDataDescriptions": { "value": "Text to fill into the input" }
    },
    {
      "kind": "testDataFunction",
      "name": "random.email",
      "description": "Generate a unique email address",
      "testDataKeys": ["domain"],
      "elementKeys": [], "envKeys": [], "outputKeys": []
    },
    {
      "kind": "hook",
      "name": "qtest.afterPlan",
      "description": "Push run results to qTest",
      "hookType": "AFTER",
      "cicdCredentials": true,
      "permissions": { "net": ["qtest.example.com"] },
      "testDataKeys": [], "elementKeys": [], "envKeys": [], "outputKeys": []
    }
  ]
}
```

The top-level **version** is copied from your **package.json**. Bump it for every upload so the platform can tell versions apart.

| Field | **addon** | **testDataFunction** | **hook** |
|---|---|---|---|
| **name, description** | Required | Required | Required |
| **actionText** | Required | — | — |
| **applicationType** | Required, non-empty | — | — |
| **hookType** | — | — | **"AFTER"** |
| **testDataKeys** | **testData** schema keys | Parameter names | **testData** schema keys |
| **elementKeys** | Element declaration keys | **[]** | **[]** |
| **envKeys** | **environment** schema keys | **[]** | **environment** schema keys |
| **outputKeys** | Output declaration keys | **[]** | **[]** |
| **stepActionType** | Optional | — | — |
| **permissions** | Optional | Optional | Optional |
| **cicdCredentials** | — | — | **true** when opted in |
| **useCustomScreenshot** | Optional boolean | — | — |

**testDataDescriptions** and **envDescriptions** are optional maps of key to description, shown in the authoring UI. Each entry's **name** and **description** must match the export's declaration.

Dropdown options declared with **z.enum([...])** are recorded as **testDataAllowedValues**.

---

## **Upload the Zip**

1. Open your addon's detail page in the Addons UI.
2. Click **Upload Zip File**.
3. Select the generated **.zip** file.

Testsigma reads the manifest and registers the steps, test data functions, and hooks it declares.

[[info | **NOTE**:]]
| Rebuild and re-upload after every code change. A running test uses the last uploaded bundle, not your working copy.

---

## **Bundle Rules**

- The zip must contain **manifest.json** at its root.
- The bundle must sit at the path the manifest's **entry** field points to.
- Every capability is a named export. No default export, no arrays.
- Names must be unique within the bundle.
- Maximum upload size is 50 MB.

The scaffold's pack script produces this layout, so these rules only matter if you replace it.

---

## **When an Upload Fails**

An upload is rejected, or the version is marked Failed, when the manifest is invalid. The common causes are an addon entry with an empty **applicationType**, and an **entry** path that does not point at the bundle inside the zip.

For a full list of build and upload errors, see [Troubleshooting](https://testsigma.com/docs/addons/modern/troubleshooting/).

---

## **Where Each Status Runs**

A newly uploaded addon stays in Draft. Draft addons run on local and hybrid agents, so you can iterate without publishing. Cloud executions require a published addon.

| Status | Local and hybrid agents | Cloud executions |
|---|---|---|
| **Draft** | Runs | Not shipped |
| **Published** | Runs | Runs |

Draft status gives you a tight feedback loop. Build, upload, and run against a local agent until the behavior is right, then publish.

---

## **Publish the Addon**

1. Open the addon's detail page.
2. Select **Publish** from the dropdown.

---

## **Update an Existing Addon**

Re-uploading replaces the bundle behind your registered names. Bump the **version** field in **package.json** before every upload, because the manifest copies its top-level **version** from it.

Without a version bump, the platform cannot tell two uploads apart.

---

## **Keep Names Stable**

The **name** of each capability is how the platform identifies your step. It is your contract with every test that already uses it.

[[info | **NOTE**:]]
| Renaming or removing an export is a breaking change for existing tests. Add a new name instead, and mark the old one as deprecated in its description.
