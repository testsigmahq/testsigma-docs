---
title: "Test Recorder - Bulk Actions in an Android Project"
metadesc: "Bulk actions you can take on recorded test steps in Testsigma’s Test Recorder UI for an android project"
order: 4.5291
page_id: "Test Recorder - Bulk Actions in an Android Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Doing bulk actions on recorded test steps"
  url: "#doing-bulk-actions-on-recorded-test-steps"
---

---

When test steps are created via the Test Recorder in Testsigma for an android project, you can do some actions on multiple steps at once. In this document, we will see how.

&emsp;
---

## **Pre-requisites:**

This document assumes that you are familiar with Testsigma’s [Test Recorder.](https://testsigma.com/docs/elements/android-apps/record-multiple-elements/)

&emsp;
---

## **Doing bulk actions on recorded test steps:**

 1. Create a Test Case using Testsigma Test Recorder with multiple test steps.
 2. Select multiple test steps from the test steps section on the Test Recorder UI. The actions that will become available on selecting multiple test steps will be called bulk actions. 

	The bulk actions as they appear on the Test Recorder UI are highlighted in the screenshot below:

![available bulk actions on testsigma Test Recorder for an Android Project in Testsigma](https://docs.testsigma.com/images/bulk-actions/bulk-actions-testsigma-Recorder-android-testsigma.png)

Bulk actions available are:

  * **Bulk Update**: Update the test steps according to the options highlighted in the screenshot below:

![bulk update options from Testsigma Test Recorder UI for Android](https://docs.testsigma.com/images/bulk-actions/bulk-update-options-testsigma-Recorder-android.png)

&emsp;

The options for the bulk update are:
 1. **Max. wait time**: Maximum time that a test step should wait before it fails.
 2. **Stop Test case execution on Test Step failure**: whether the test case execution should stop if the test step fails.
 3. **Is this Test Step Mandatory?** Should the selected test steps be executed every time the test case is executed.
 4. **Disable Step**: disable the selected test steps for test execution.

&emsp;

 * **Reorder**:[Reorder the test steps.](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/reorder/)
 * **Delete**: Delete the test steps.




