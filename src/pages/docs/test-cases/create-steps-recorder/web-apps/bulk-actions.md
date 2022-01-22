---
title: "Test Recorder - Bulk Actions in a Web Project"
metadesc: "Bulk actions you can take on recorded test steps in Testsigma’s test recorder UI for a web project."
order: 4.5191
page_id: "Test Recorder - Bulk Actions in a Web Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Bulk actions on recorded test steps in Testsigma’s test recorder UI"
  url: "#bulk-actions-on-recorded-test-steps-in-testsigmas-test-recorder-ui"
---

---

When test steps are recorded via Testsigma test recorder, Testsigma gives you the option to select multiple test steps at a time and then perform bulk actions on your selection. In this document, we will discuss those actions and how to perform them.

&emsp;

## **Pre-requisites:**

You should already know how-to, or have:

1. [Testsigma step recorder chrome extension.](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/)
2. [record test steps via the Testsigma test recorder.](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/overview/)

&emsp;

## **Bulk actions on recorded test steps in Testsigma’s test recorder UI:**

 1. Create a Test Case using Testsigma recorder with multiple test steps.
 2. To select a step, hover over the test step number. The number will change into a checkbox:

![the UI change when a hover is done over a test step UI in Testsigma recorder](https://docs.testsigma.com/images/bulk-actions/hover-over-test-step-ui-change-bulk-actions-testsigma-recorder.png)

 3. Click the checkbox.
 4. Repeat 2. and 3. to select more test steps. Bulk actions option appears when you’ve selected at least two test steps.

![bulk actions menu in testsigma recorder](https://docs.testsigma.com/images/bulk-actions/bulk-actions-menu-testsigma-recorder.png)

 5. Bulk actions available are:
    * **Select all** - to select/deselect all test steps
    * **Delete** - to delete the test steps
    * **Update** - to update the test steps according to the options shown in the screenshot below:

![bulk-update-ui-bulk-actions-testsigma-recorder](https://docs.testsigma.com/images/bulk-actions/bulk-update-ui-bulk-actions-testsigma-recorder.png)

&emsp;

The options are:
 1. **Max. wait time** - Maximum duration for which a test step will wait before it is considered failed.
 2. **Stop Test case execution on Test Step failure**- whether the test case execution should stop if the test step fails.
 3. **Is this Test Step Mandatory?** - Should the selected test steps be executed every time the test case is executed?
 4. **Disable Step** - disable the selected test steps for test execution.






