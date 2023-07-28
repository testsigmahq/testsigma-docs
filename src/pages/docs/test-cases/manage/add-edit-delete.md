---
title: "Manage Test Cases"
pagetitle: "Add, Edit & Delete Test Cases in Testsigma"
metadesc: "Effortlessly manage your test cases in Testsigma by seamlessly creating, editing, deleting, and recovering them. Streamline your test case management process, adapt to changing project needs, and ensure comprehensive test coverage."
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
- type: link
  name: "Recover Deleted Test Case"
  url: "#recover-deleted-test-case" 

---

---

We will explore the key functionalities within Testsigma that allow you to create, edit, delete, and recover deleted test cases. Test case automation plays out a test scenario by executing steps or user actions.

Before you can start creating test cases,  you should have created a **Project** in Testsigma and  should have a basic understanding of  Project organization that is, how the projects, applications, versions and test cases are organized hierarchically in Testsigma.

A sample project will be created by default in your Testsigma Account when you first sign up. If you want to create a new project, *refer to [create new project](https://testsigma.com/docs/projects/overview/#create-project)*.

---

## **Creating a Test Case**

1. To create a new Project: <br>
    a. Mousehover to **Create New** in the top-right corner of the Testsigma Dashboard screen and select **Test Case** from the drop-down menu. ![Create Test Cases in Dashbord](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testcase_dashboard_ts.png)
    b. Alternatively, Navigate to **Test Development** > **Test Cases** and click the **Create** button on the top right corner of the Test Cases page to open the **Create Test Case** page. ![Create Test Case Form Test Cases Page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testcase_page_create_ts.png)

2. On the **Create Test Case** Page, you should enter the following details: :
    - **Name** (Required): Enter a title for the Test Case.
    - **URL**: Enter the URL of the application you want to execute the test case (for Web App and Mobile Web App).

[[info | NOTE:]]
| In the Create Test Case page of the Android and iOS Apps project, select Apk for Android and IPA for iOS instead of the URL. Refer to [Manage Projects](https://testsigma.com/docs/projects/overview/) and [Upload Android and iOS Apps](https://testsigma.com/docs/uploads/upload-apps/) for more information.
 
3. You can use Testsigma recorder to **Record steps** or **Write Test Manually** to create the test steps for your test case. ![Enter Details for Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/enterdetails_testcase_ts.png). 

[[info | NOTE:]]
| You should install the Testsigma test step recorder extension to record the test steps for a web app or mobile web app project. Check [here](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/) for instructions on how to install it.

---

## **Test Case  - Advanced Options**

Click on **Show Advanced Options** on the **Create Test Case page** to view the advanced options for your test case. The available advanced options help you better manage or group test cases while creating test suites and plans and understanding the test coverage.

![Test Case Advance Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/tc_advanceoptions.png)
 
1. **Automation/ Manual Testing**: Testsigma allows you to choose whether to create an automated or manual test case.
2. **Requirement (Required)**: You can associate specific requirements with test cases. This option enables you to establish traceability between requirements and test cases, ensuring that all necessary functionalities are adequately tested. *For more information, refer to [requirements](https://testsigma.com/docs/projects/requirements/)*. 
3. **Assignee**: Select the user (team member) you want to assign to this test case. The team member you assign will receive notifications about test case failures during test case reviews.
4. **Reviewer**: Testsigma allows users to assign a reviewer (team member) to each test case so that the reviewer can evaluate the accuracy, completeness, and adherence to testing standards of the test case. This promotes collaboration and ensures the quality of the test cases. *For more information, refer to [test case review management](https://testsigma.com/docs/collaboration/test-cases-review-management/)*.
5. **Priority (Required)**: Select the priority level that you want to set for this test case. *For more information refer to [test case priorities](https://testsigma.com/docs/projects/settings/test-case-priorities/)*.
    - **Critical**: Highest priority
    - **Major**: Test case for a major feature
    - **Medium**: Medium priority
    - **Minor**: Test case for a minor feature

6. **Type (Required)**: Select any of the below test method type that needs to be gratified using this test case.*For more information, refer to  [test case types](https://testsigma.com/docs/projects/settings/test-case-types/)*.
    - **Unit Test**: Testing individual components or modules of the software to ensure their functionality in isolation.
    - **Integration**: Testing the interaction and compatibility between multiple components or modules to ensure they work together correctly.
    - **Functional**: Testing the functional requirements of a software application to ensure it meets the intended specifications.
    - **Non-functional**: Testing a software application's performance, usability, security, and other non-functional aspects.
    - **User Experience**: Testing a software application's overall user experience, usability, and user interface to ensure it meets user expectations.
    - **Content Verification**: Testing the accuracy and correctness of the content displayed or presented in a software application or website.

7. **Status (Required)**: Test case status is used for organizing and managing the testing workflow. Select the appropriate status for the Test Case.
    - **Draft**: Test case is in an abstract mode.
    - **Review**: Test Case is under inspection.
    - **Ready**: Test Case is active and ready to be executed.
    - **Obsolete**: Test Case is no longer valid.
    - **Rework**: Test Case needs to be updated.

8. **Prerequisite (Required)**: Testsigma enables you to define prerequisites for test cases. Prerequisites specify any necessary conditions or steps to be completed before executing a test case, ensuring the test environment is properly set up.

[[info | Example:]]
| For an e-commerce shopping website, the testing team should add the test case **Add Items to Cart** as a prerequisite for **Place Order** since an order cannot be placed in an empty cart. If they omit the **Add Items to Cart** test case from the test suite, the test will fail in most cases. Therefore, including it as a prerequisite for the **Place Order** test case is beneficial.

9. **Labels**: Applying labels to test cases helps the group categorise them based on specific attributes such as modules, components, or testing phases. Labels facilitate efficient filtering and searching, allowing for easier management and retrieval of relevant test cases.

10. **Test Data Profile**: Select the Test Data profile to be used in the Test Case. This is only required if you use parameter-type test data in your test steps. *For more information, refer to [test data profile](https://testsigma.com/docs/test-data/create-data-profiles/)*

11. **Test data set**: Specify the data set in the test data profile used in the test case.

12. **Data-Driven (toggle)**: Enable the Data-Driven (toggle) to repeatedly run the same test case with different input field data sets. Before enabling this option, add a Test Data Profile.  Once enabled, you can customise the various data sets from your test data profile used in your test case using filters such as iteration, parameter, and set name. *For more information, refer to [data-driven testing](https://testsigma.com/tutorials/test-cases/data-driven-testing/)*.
    - **Iteration**: You can filter sequential data sets using filter operations such as _greater than_, _less than_, or _between_. This type of filtering only applies to sequential data sets.
    - **Set Name**: You can use this type of filtering for non-sequential data sets. You can filter the data sets by their names using operations such as _between_, _equals_, _contains_, _starts with_, and _ends with_. The test case uses any data set names that contain the specified name or a part of it. 
    - **Parameter**: This type of filtering applies to non-sequential data sets. You filter the data set using parameters within the data sets.

13. **After Test Case**: Testsigma allows you to specify actions to be performed after the execution of a test case. You can define custom steps or tasks that must be completed after the test case execution, facilitating cleanup or preparation for subsequent test cases. *For more information, refer to [After Test Case](https://testsigma.com/docs/test-management/test-plans/after-test/#after-test-in-test-cases)*.
    - **Run After all iterations - Show Test Case Result**: Perform an action or task after executing all iterations of a test case to display the overall result.
    - **Run After all iterations - Fail the Test**: Perform an action or task after executing all iterations of a test case to mark the entire test case as failed.
    - **Run After Each iteration - Show iteration result**: Perform an action or task after executing each iteration of a test case to display the result of that specific iteration.
    - **Run After Each iteration - Fail the iteration**: Perform an action or task after executing each test case iteration to mark that specific iteration as failed.

14. **Mark this for AfterTest Suite**: By marking a test case for the **AfterTest Suite**, you ensure that the test case is executed as part of the cleanup or finalisation process after the execution of a test suite. This option helps maintain the test environment and ensure the proper closure of testing activities.

15. **Co-Reviewer**: In Testsigma, you can assign a co-reviewer to a test case. The co-reviewer can collaborate with the primary reviewer and provide additional feedback or suggestions, enhancing the quality and effectiveness of the test case review process.

16. **Version**: Testsigma supports versioning for test cases, allowing you to maintain different test case versions. This feature lets you track changes, compare versions, and roll back to previous versions if necessary.

17. **Description**: Testsigma provides a description field for test cases, allowing you to provide detailed information about the purpose, scope, or specific instructions for executing the test case. This information enhances the understanding of the test case and facilitates smooth execution.

---

## **Edit Test Case**

1. Click on the test case you want to edit in the list of test cases. ![Test Case List](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/testcase_list_ts.png)

2. To edit the test case settings, click the **Edit** button in the top right corner. ![Edit Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/edit_testcase_ts.png)

3. Click the **Update** button after making the required changes to confirm the changes. ![Update Edited Changes](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/update_testcase_ts.png)

---

## **Delete Test Case**

1. Delete a test case from the Test Case Details page or the Test Case list.<br><br>
    a. To delete the test case, click the **Delete** button in the top right corner of the **Test Case Details** page. ![delete from test case details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/delete_testcasedetails_ts.png)
    b. Click the **Checkbox** beside one or more test cases in the **Test Cases List** and click the **Delete** button on top of the list to delete the test cases together. ![bulk delete test cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/delete_testcaselist_ts.png)
2. Click the **Yes, Delete** button when the dialog box opens to confirm the deletion of the test case. ![Delete Confirmation](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/delete_prompt_ts.png)

[[info | NOTE:]]
| - When you delete test cases from the list, you send them to the trash folder. You can restore or permanently delete the test case from the trash folder.
| - Deleting the test case will remove all the associated test suites, test plans, and any prerequisites.

---

## **Recover Deleted Test Case**

1. Navigate to the **Test Development** tab. And click on the **Hamburger** icon in the top left corner of the screen to open the **Switch View** options. ![Click Hamburger Icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/switchviews_testdeve_ts.png)
2. Select the **Trash (Deleted Test Cases)** option in the switch view options. This will take you to a list of all the test cases that have been deleted. ![Select Trash Deleted Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/switchviews_list_ts.png)
3. Locate the test case you want to recover in the **Trash (Deleted Test Cases)**. You can either scroll through the list or use the search bar to find the test case. ![Select Deleted Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/trash_testcase_ts.png)
4. Once you locate the deleted test case, select the **Restore** button to recover it. If you select the **Delete Forever** button, you will permanently delete the test case, which cannot be recovered. ![Select Restore or Delete Forever](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/restore_deleteforever_ts.png)
5. After you restore the test case, it will be visible on the Test Cases page. ![Visible in Test Cases Page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/restored_testcase_ts.png)

Here is a quick GIF demonstrating the above workflow: ![Restore Deleted Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/recover_deletedtc.gif )

---