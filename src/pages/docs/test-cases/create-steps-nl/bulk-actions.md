---
title: "Bulk Actions"
metadesc: "What actions can be taken on multiple test steps at once"
noindex: false
order: 4.49
page_id: "Bulk Actions"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to bulk edit multiple test steps"
  url: "#how-to-bulk-edit-multiple-test-steps"
- type: link
  name: "1. Bulk Update"
  url: "#1-bulk-update"
- type: link
  name: "2. Create Step Group:"
  url: "#2-create-step-group"
- type: link
  name: "3. Delete:"
  url: "#3-delete"
---

---

When test steps are created, Testsigma gives you the option to select multiple test steps at a time and then perform bulk actions on your selection. In this document, we will discuss those actions and how to perform them.

&emsp;

---
##**Pre-requisites:**

You should know how to 

 1. [create a test case.](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
 2. [create test steps.](https://testsigma.com/docs/test-cases/create-steps-nl/overview/)

&emsp;

---
##**How to bulk edit multiple test steps:**

 1. Create a test case. And then go to the created test steps.
 2. To select a step, hover over the test step number. The number will change into a checkbox:

![checkbox to select a test step in a test case in Testsigma](https://docs.testsigma.com/images/bulk-actions/check-box-select-test-step-in-test-case-testsigma.png)

 3. Click the checkbox
 4. Repeat 2. and 3. to select more test steps. Bulk actions option appears when you’ve selected at least two test steps.

![bulk actions when multiple test steps are selected in Testsigma](https://docs.testsigma.com/images/bulk-actions/bulk-actions-selected-testsigma.png)

&emsp;

Now, let’s discuss bulk actions:

&emsp;

---
##**1. Bulk Update**

![bulk update form in Testsigma](https://docs.testsigma.com/images/bulk-actions/bulk-update-form-testsigma.png)

Here are the settings you can update via Bulk Update:

 1. **Max. wait time**: You can enter a value in seconds (which should be less that 120) , and the selected test steps will wait for this duration before they fail on test execution
 2. **Stop Test Case execution on Test Step failure**: If you enable this, the test case execution will stop if any of the selected test steps fails.
 3. **Disable Step**: Enabling this would mean that the selected test steps will not be executed on test execution.

To save the changes you made on the bulk update form, you need to click on the ‘Update’ button.

&emsp;

---
##**2. Create Step Group**: 
You can save the selected test steps as a step group. To do this, click on ‘Create Step Group’, name the step group and click ‘Create’ to save the step group:

![create step group window popup in Testsigma](https://docs.testsigma.com/images/bulk-actions/create-step-group-window-pop-up-testsigma.png)

Step groups are reusable. Learn more about [step groups](https://testsigma.com/docs/test-cases/step-types/step-group/).

---
##**3. Delete**:
 Delete selected test steps by clicking on the ‘Delete’ button.






