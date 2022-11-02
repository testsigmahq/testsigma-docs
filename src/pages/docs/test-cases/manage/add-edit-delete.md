---
title: "Add, edit and delete test cases"
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
  name: "Creating a test case"
  url: "#creating-a-test-case"
- type: link
  name: "Test case - Advanced options"
  url: "#test-case----advanced-options"
- type: link
  name: "Edit Test Case"
  url: "#edit-test-case"
- type: link
  name: "Delete Test Case"
  url: "#delete-test-case"
---

---

Test cases  are a set of steps or user actions that are automated to play out a test scenario.

Before you can start creating test cases,  you should have created a **Project** in Testsigma and  should have a basic understanding of  Project organization that is, how the projects, applications, versions and test cases are organized hierarchically in Testsigma.

A sample project will be created by default in your Testsigma Account when you first sign up. If you want to create a new project, *refer to [create new project](https://testsigma.com/docs/projects/overview/#create-project)*.
&emsp;

---
##**Creating a test case**

1. From the Testsigma dashboard, navigate to the **Test cases** page by going to **Test development > Test case**.

![Test Cases List](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/overview/view_your_test_cases.png)

2. On the **Test cases** page, click the **Create** button on the top right corner.
The **Create test case** page will appear as shown below (For web and mobile web):

![Create Test Case Form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/overview/create_test_case.png)

3. Enter the details as given below:<br><ul>
<li><strong>Name (Required)</strong>: Enter a title for the Test Case.</li>
<li><strong>URL</strong>: Enter the URL of the application with which you want to execute the test case.</li> </ul>

Note that for Android and iOS projects - you will be required to select the corresponding app instead of the URL.<br> 
To create the test steps for your test case, you can either **Record steps** using Testsigma recorder or **Write test  manually**. 
&emsp;

[[info | NOTE:]]
|In order to record the test steps for a web project or a mobile web project, you should have the Testsigma teststep recorder extension installed. Check how to install that [here](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 
---
##**Test case  - Advanced options**

Test case advanced options help you manage or group test cases better while creating test suites, test plans and understanding the test coverage.

To view the advanced options for you test case, click on **Show advanced options** on the **Create test case** page

The advanced options available are as follows:

1. **Requirement (Required)**: In Testsigma, each test case can be mapped to an individual software requirement for better organization of your test cases. Select the requirement to which you want to map this test case. *For more information, refer to [requirements](https://testsigma.com/docs/projects/requirements/)*. 
2. **Assignee**: Select the user (team member)  you want to assign this test case to.
 The assigned team member will get notified for test case failures and during test case reviews.
3. **Reviewer**: Select the user (team member) who will review this test case.
 *For more information, refer to [test case review management](https://testsigma.com/docs/collaboration/test-cases-review-management/)*.
4. **Priority (Required)**: Select the priority level that you want to set for this test case. *For more information refer to [test case priorities](https://testsigma.com/docs/projects/settings/test-case-priorities/)*<ul>
<li><strong>Critical</strong> – Highest priority </li>
<li><strong>Major</strong> – Test case for a major feature</li>
<li><strong>Medium</strong> – Medium priority</li>
<li><strong>Minor</strong> – Test case for a minor feature</li>
</ul>

5. **Type (Required)**: Select any of the below test method type that needs to be gratified using this test case.*For more information, refer to  [test case types](https://testsigma.com/docs/projects/settings/test-case-types/)*.
<ul>
<li><strong>Unit test</strong></li>
  <li><strong>Integration</strong></li>
  <li><strong>Functional</strong></li>
  <li><strong>Non-functional</strong></li>
  <li><strong>User Experience</strong></li></ul>

6. **Status (Required)**: Test case status is used for organizing and managing the testing workflow. Select the appropriate status for the Test Case.<ul>
  <li>Draft – Test case is in an abstract mode.</li>
  <li>Review- Test Case is under inspection.</li>
  <li>Ready- Test Case is active and ready to be executed.</li>
  <li>Obsolete- Test Case is no longer valid.</li>
  <li>Rework – Test Case needs to be updated.</li></ul>
&emsp;
7. **Prerequisite (Required)**: Select another Test Case as a prerequisite for this Test Case. This will help you save execution time when a prerequisite condition is not met.<br>For example, in the case of an e-commerce shopping website, the test case **Add Items to Cart** would be a prerequisite for **Place Order** since an order cannot be placed in an empty Cart. If the **Add Items to Cart** Test Case is not added to the Test Suite, the Test will fail in most cases. Therefore, it would be beneficial to add it as a prerequisite for the **Place Order** Test Case.

8. **Labels**: You can assign existing tags to the test cases or create new tags.

9. **Test Data Profile**: Select the Test Data profile to be used in the Test Case. This is required only if you are going to use parameter type test data in your test steps.
For more information, refer to [test data profile](https://testsigma.com/docs/test-data/create-data-profiles/)

10. **Test data set**: Specify the data set in the test data profile that is used in the test case.

10.  **Data-Driven (toggle)**: Enable this if you want to run the same test case repeatedly, each time with a different set of data for the input fields. You will need to add a Test Data Profile before enabling this option.<br>*For more information, refer to [data-driven testing](https://testsigma.com/tutorials/test-cases/data-driven-testing/)*.<br><br>
If you enable the data driven testing in your test case you can narrow and customize the various data sets from your test data profile that are being used in your test case using the filters *iteration*, *parameter*, *set name*.<br><ul>
<li>Iteration: This type of filtering is applicable only to sequential data sets. The data sets can be filtered using the filter operations <em>greater than</em>,<em>less than</em>, or <em>between</em></li>
<li>Set name: This type of filtering is applicable for non sequential data sets. Here the data sets are filtered by data set names using the operations <em>between</em>, <em>equals</em>, <em>contains</em>, <em>starts with</em>, <em>ends with</em>. Any data set names containing the set name or part of it are used in the test case.</li>
<li>Parameter:This type of filtering is applicable for non sequential data sets. Here the data sets are filtered using parameters used in data sets.</li>
</ul>

![Advanced options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/overview/adavanced_options_create_test_case.png)

&emsp;






---

##**Edit Test Case**

In the list of test cases, click on the test case name to open the test case details page as shown below:

![Test Case Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/overview/edit_test_case.png)

Click on the **Edit** button(pencil icon) on the top right corner to edit the test case settings. 

![Edit Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/overview/edit_test_case_details.png)

Make the required changes and click on the **Update** button to confirm the changes.
To edit the test steps, hover over the corresponding step to reveal the test step actions. Click on the **Edit** button(pencil icon) to edit the test step. While editing a test step, you may:

* Change the simple English based grammar used
* Edit the test data
* Change the element

*For more information on how to add or edit test steps, refer to  [create or edit test steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/)*.

&emsp;

---

##**Delete Test Case**

You can delete a test case either from the test case details page or from the test cases list.

On the test case details page, click on the **Delete** button(trash icon) on the top right corner to delete the test case. <br>The Test Case will be moved to the trash and you can restore the deleted test case later.

Note that if you proceed with deleting the test case, all the associated test suites, test plans and any prerequisite will also be removed.
![delete test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/overview/delete_test_case.png)

From the test cases list, select one or more test cases by clicking on the checkbox beside it and click on the Delete button(trash icon) on top of the list to delete the test cases together.
![bulk delete test cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/overview/bulk_delete_test_cases.png)
A dialog box will open up asking to confirm your choice of deleting the test case. Select the checkbox and click on the **Delete** button to confirm the deletion.

Deleting test cases from the list sends it to the trash folder. You can access the trash folder from the **Test case filters** overlay screen.

![Test Case Filters overlay](https://docs.testsigma.com/images/add-edit-delete/test-case-filters1.png)

From the trash, you can open a test case, restore it, or delete it permanently.

If you try to delete a test case permanently, a dialog box will open up asking you to remove the test case associations from test suites if there are any.

![Remove Test Case Suite Mapping](https://docs.testsigma.com/images/add-edit-delete/remove-test-case-suite-mapping1.png)

Click on the **Delete** button to confirm test case deletion.

![Delete Test Case Confirmation](https://docs.testsigma.com/images/add-edit-delete/confirm-delete-test-case1.png)















