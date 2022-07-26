---
title: "Add, Edit & Delete Test Cases"
pagetitle: "Add, Edit & Delete Test Cases in Testsigma"
metadesc: "How to create, edit and delete Test Cases in Testsigma"
noindex: false
order: 4.10
page_id: "Add, Edit, Delete Test Cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Creating a Test Case"
  url: "#creating-a-test-case"
- type: link
  name: "Test Case - Advanced Options"
  url: "#test-case----advanced-options"
- type: link
  name: "Edit Test Case"
  url: "#edit-test-case"
- type: link
  name: "Delete Test Case"
  url: "#delete-test-case"
---

---

Test Cases **[[?](https://testsigma.com/docs/getting-started/terminology/)]** are a set of steps (a.k.a user actions) that are automated to play out a test scenario.

Before you can start creating test cases,  you should have created a Project in Testsigma and  should have a basic understanding of  Project Organization i,e how the Projects, Applications, Versions and Test Cases are organized hierarchically in Testsigma.

A sample Project will be created by default in your Testsigma Account when you first sign up. If you want to create a new Project, refer to [Create new Project](https://testsigma.com/docs/projects/overview/)

&emsp;

---
##**Creating a Test Case**

From the Dashboard, navigate to the Test Cases page by going to **Test Development > Test Case**:

![Test Cases List](https://docs.testsigma.com/images/step-group/navigate-to-test-case.png)

On the Test Cases page, click the ‘Create' button on the top right corner
The Create Test Case page will appear as shown below(For web and mobile web):

![Create Test Case Form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/manage/add-edit-delete/create-test-case-page.png)

Enter the details as given below:
 * **Name (Required)**: Enter a title for the Test Case.
 * **URL**: Enter the URL you want to start the test case from. 

For Android and iOS projects - you will be required to select the corresponding app instead of the URL. 

&emsp;

---
##**Test Case  - Advanced Options**

Test Case Advanced Options help you manage/group test cases better while creating Test Suites, Test Plans and understanding the test coverage.

If you haven’t created a Test Case yet, before proceeding further, please refer: [Create Test Cases](https://testsigma.com/docs/test-cases/overview/)

The advanced options available in Test Case Settings are as follows:

&emsp;

 **Select Test Case Type** : Select the Test Case type as Automation / Manual

&emsp;

 **Requirement (Required)**: Select the Requirement to which you want to map this Test Case. Learn more about [Requirements](https://testsigma.com/docs/projects/requirements/).

&emsp;

 **Assignee**: Select the user (team member)  you want to assign this Test Case to.
 The assigned team member will get notified for test case failures and during Test Case Reviews.

&emsp;

 **Reviewer**: Select the user (team member) who will review this Test Case.
 Learn more about [Test Case Review Management](https://testsigma.com/docs/collaboration/test-cases-review-management/).

&emsp;

  **Priority (Required)**: Select the priority level that you want to set for this Test Case. 

  * **Critical** – Highest Priority
  * **Major** – Test Case for a major feature
  * **Medium** – Medium Priority
  * **Minor** – Test Case for a minor feature

Learn more about [Test Case priorities](https://testsigma.com/docs/projects/settings/test-case-priorities/)

&emsp;

**Type (Required)**: Select the test method type that needs to be gratified using this Test Case.

  * **Unit Test**
  * **Integration**
  * **Functional**
  * **Non-functional**
  * **User Experience**

Learn more about [Test Case Types](https://testsigma.com/docs/projects/settings/test-case-types/)

&emsp;

**Status (Required)**: Test Case Status is used for organizing and managing the Testing workflow. Select the appropriate status for the Test Case.
  * Draft – Test Case is in an abstract mode.
  * Review- The Test Case is under inspection.
  * Ready- Test Case is active and ready to be executed.
  * Obsolete- Test Case is no longer valid.
  * Rework – The Test Case needs to be updated.

[[info | Note:]]
|Only the Test Cases in the Ready state are available for addition to Test Suites and Test Plans. Test Cases in all other states (except Obsolete) are available for Ad-hoc Runs.

**Prerequisite (Required)**: Select another Test Case as a prerequisite for this Test Case. This will help you save execution time when a prerequisite condition is not met.

For example, in the case of an e-commerce shopping website, the test case **Add Items to Cart** would be a prerequisite for **Place Order** since an order cannot be placed in an empty Cart. If the **Add Items to Cart** Test Case is not added to the Test Suite, the Test will fail in most cases. Therefore, it would be beneficial to add it as a prerequisite for the **Place Order** Test Case.

&emsp;

**Labels**: You can assign existing tags to the Test Cases or create new tags.

**Test Data Profile**: Select the Test Data profile to be used in the Test Case. This is required only if you are going to use parameter type test data in your Test Steps.
Learn [How to create a Test Data Profile](https://testsigma.com/docs/test-data/create-data-profiles/)

**Data-Driven (toggle)**: Enable this if you want to run the same test case repeatedly, each time with a different set of data for the input fields. You will need to add a Test Data Profile before enabling this option.

Refer to the following document for a detailed guide on adding a data-driven Test Case:

[How to create a data-driven Test Case?](https://testsigma.com/tutorials/test-cases/data-driven-testing/)

&emsp;

After entering all the required details, if you want to start writing the NLPs - click "Write Test" button or, else, if you want to start recording the test steps then you can click the "Record Test" Button. 

[[info | NOTE:]]
|In order to record the test steps for a web project or a mobile web project, you should have the Testsigma teststep recorder extension installed. Check how to install that [here](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 

Learn how to [Create Test Steps](https://testsigma.com/docs/test-cases/step-types/overview/).

&emsp;

---
##**Edit Test Case**

In the list of Test Cases, click on the Test Case name to open the Test Case details page as shown below:

![Test Case Details](https://docs.testsigma.com/images/add-edit-delete/test-case-details-edit-test-case.png)

Click on the Edit button(pencil icon) on the top right corner to edit the Test Case settings. 

![Edit Test Case](https://docs.testsigma.com/images/add-edit-delete/edit-test-case-form.png)

Make the required changes and click on the Update button to confirm the changes.
To edit the Test Steps - Hover over the corresponding step to reveal the Test Step Actions. Click on the Edit button(pencil icon) to edit the Test Step. While editing a Test Step, you may:
  * Change the simple english based Grammar used
  * Edit the Test Data
  * Change the Element

Learn how to [Create/Edit Test Steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/)

&emsp;

---
##**Delete Test Case**

You can delete a Test Case either from the Test Case Details page or from the Test Cases list.

On the Test Case details page, click on the Delete button(trash icon) on the top right corner to send it to Trash. The Test Case will be moved to the Trash and you will have an option to either ‘Restore’ the Test Case or ‘Delete it Forever’.

From the Test Cases list, select one or more Test Cases by clicking on the checkbox beside it and click on the Delete button(trash icon) on top of the list to delete the Test Cases together.
A Dialog box will open up asking to confirm your choice of deleting the Test Case. Select the checkbox and click on the Delete button to confirm the deletion.

Deleting Test Cases from the list sends it to the Trash folder. You can access the Trash folder from the Test Case Filters overlay screen.

![Test Case Filters overlay](https://docs.testsigma.com/images/add-edit-delete/test-case-filters1.png)

From the Trash, you can open a Test Case, restore it, or delete it permanently.

If you try to delete a Test Case permanently, a dialog box will open up asking you to remove the Test Case associations from Test Suites if there are any.

![Remove Test Case Suite Mapping](https://docs.testsigma.com/images/add-edit-delete/remove-test-case-suite-mapping1.png)

Click on the Delete button to confirm test case deletion.

![Delete Test Case Confirmation](https://docs.testsigma.com/images/add-edit-delete/confirm-delete-test-case1.png)















