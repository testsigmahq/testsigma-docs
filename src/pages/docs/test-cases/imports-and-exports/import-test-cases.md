---
title: "Import Test Cases"
page_title: "Import Test Cases"
metadesc: "Import test cases between Testsigma projects by matching application types in both source and target projects to ensure full compatibility and smooth transfer process."
noindex: false
order: 4.71
page_id: "import-test-cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Interactive Demo"
  url: "#interactive-demo"
- type: link
  name: "Steps to Import Test Cases"
  url: "#steps-to-import-test-cases"
---

---

You can use test case import to move test cases from one project to another within Testsigma. Test cases can only be imported from one application type to the same application type in the target project. This article explains how to import test cases between projects in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating projects](https://testsigma.com/docs/projects/overview/).

---

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(50.81% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/s7exwjyz2fqt?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Steps to Import Test Cases**

1. From the left navigation bar, navigate to **Create Tests > Test Cases**.

2. In the **Test Cases Explorer** section, click the ellipse icon and click **Import**.

3. In the **Import Artefacts** screen, under the **Select Source** tab:
    
    - Choose the source **Project**.
    - Choose the **Application Name**.
    - Choose the **Version**.

4. Click **Next**.

[[info | **NOTE**:]]
| - When importing test cases from a web application in the current project, they can only be moved to a web application in the destination project. Moving them to a different application type is not supported.

5. In the **Select Artefacts** tab, choose the test cases, step groups, elements, test data profiles, environment variables, and uploads you want to import.

[[info | **NOTE**:]]
| - When you select a test case, all associated step groups, elements, test data profiles, environment variables, and uploads are automatically selected.

6. To include artefacts not linked to the selected test cases, go to the relevant tab (e.g., Elements, Step Groups), enable the **Show unlinked (artefact)** toggle, and select the required ones. 

7. You can enable the **Show selected** toggle to review your selections in each artefact tab.

8. Click **Proceed to Import**.

9. In the **Start Import** tab, all selected artefacts will be listed.

[[info | **NOTE**:]]
| - If the test case doesn’t exist in the destination project, it will be marked with a New status.
| - If the test case already exists with no changes, it will show as No Change.
| - If the test case exists but has been modified, it will show as an Override.

10. Click **Confirm**.

11. In the **Create a Save Point?** dialog, enter a name, and click **Start Importing**.

[[info | **NOTE**:]]
| - Before starting the import, a save point will be created to help you easily revert to the current version if needed.
| - Please wait until the import process is complete. Interrupting it may lead to data loss.
| - It’s recommended to import a smaller amount of data at a time, as larger imports may take longer to complete.
| - A maximum of 10 save points can be stored at any given time.

12. Click **Done**. 

---
