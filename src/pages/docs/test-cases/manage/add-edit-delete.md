---
title: "Manage Test Cases"
pagetitle: "Manage Test Cases"
metadesc: "Effortlessly manage your test cases in Testsigma by seamlessly creating, editing, deleting, and recovering them. Streamline your test case management process, adapt to changing project needs, and ensure comprehensive test coverage."
noindex: false
order: 4.11
page_id: "test-cases-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create Test Case"
  url: "#create-test-case"
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

Testsigma provides a comprehensive and user-friendly solution for efficiently creating, organising, and executing test cases. It enables teams to collaborate effectively, ensures maximum test coverage, and provides valuable insights into the testing workflow. Users can create test cases using either the Testsigma Recorder or by manually writing steps using NLP. This documentation guides users step-by-step on how to manage test case in Testsigma to optimise the testing process.

---

> ## **Prerequisites**
>
> Ensure you create a [Project](https://testsigma.com/docs/projects/overview/) before creating Test Cases in Testsigma. 

---

## **Create Test Case**

1. Navigate to **Create Tests** > **Test Cases** in the left-side navbar. Click the **Create Test Case** button in the top right corner of the **Test Case List** page to create a test case.

2. Replace **Untitled** in the top left corner of the screen on the **Test Case Details** page with a **Title** for the Test Case. ![Create Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_testcase_mtc.gif)
 
3. You can create the test steps for your test case using either of the following methods: 
    - Write Test Steps Manually using NLPs by clicking **Add new step**.
    - Use Testsigma **Recorder** to Record steps.

[[info | NOTE:]]
| You should install the Testsigma test step recorder extension to record the test steps for a web or mobile web app project. Check [here](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/) for instructions on how to install it.

---

## **Test Case  - Advanced Options**

Use the right-side navbar on the **Test Case Details** page to access Advanced Options for better management and grouping of test cases while creating **Test Suites** and **Test Plans** and to improve understanding of test coverage.
 
1. **Test Case Info**: Click **Test Case Info** in the right-side navbar. You can update the **Test Case Name** and **Description** from there and view information about the **Test Case's creation** and **last update**. ![Test Case info](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testcaseinfo_tcd.gif)

2. **Ad-Hoc Runs**: Click **Ad-Hoc Runs** in the right-side navbar. This will enable you to view the history and details of Ad-Hoc Run results for the Test Case. ![Ad-hoc Run details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adhocrun_details_tcd.gif)

3. **Test Case Settings**: Click **Test Case Settings** in the right-side navbar, and configure the following options: ![Test Case Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testcasesettings_tcd.gif)
    
    
    - **Pre-Requisites**: Testsigma defines prerequisites for test cases. Prerequisites specify any necessary conditions or steps to be completed before executing a test case, ensuring the test environment is properly set up.
      
      ### **Pre-requisite Execution Options**
      When executing a test case with pre-requisites, you can choose one of the following execution options:
      ![Rerun Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ReRun_Options_TestCase.png)

         - **Always run Pre-requisite:**
           Select this option to execute the pre-requisite test case every time the associated test case runs. You can use this for scenarios that require runtime data generation or dynamic data injection during test execution.

         - **Only execute failed Pre-requisite iteration(s):**
           Select this option to rerun only the failed iterations of the pre-requisite test case. Passed iterations will be skipped. You can use this for scenarios where the pre-requisite setup is required only once or when rerunning only the failed parts improves test efficiency. <br>
           
           **For Example,** <br>
           Consider a data-driven test case with the following results:
              - **Iteration 1**: Failed
              - **Iteration 2**: Passed
              - **Iteration 3**: Failed
              - **Iteration 4**: Passed

           If you choose this option, only **Iteration 1** and **Iteration 3** will rerun. **Iterations 2 and 4**, which passed earlier, will be skipped.
           
           [[info | **NOTE**:]]
           | Choose the option based on the test case requirement & expected execution behavior.
    
    - **Test Data Profile**: If you use parameter-type test data in your test steps, refer to the [Test Data Profile](https://testsigma.com/docs/test-data/create-data-profiles/) and select it in the Test Case.
    
    - **Test Data Set**: Specify the data set in the test data profile used in the test case.
    
    - **Data-Driven** (toggle): To repeatedly run the same test case with different input field data sets, add a Test Data Profile and enable the Data-Driven toggle. Once enabled, customise various data sets from your test data profile used in your test case using filters such as iteration, parameter, and set name. Refer to data-driven testing for more information.
    
      - **Iteration**: You can filter sequential data sets using greater than, less than, or between operations. Note that this filtering only applies to sequential data sets. 
      - **Set Name**: Filter non-sequential data sets using this type of filtering. Use operations such as between, equals, contains, starts with, and ends with to filter the data sets by their names. The test case checks for any data set names with the specified name or a part of it.
      - **Parameter**: Filter non-sequential data sets using this type of filtering. Use parameters within the data sets to filter the data set.
    
    - **Fail Test Case if Visual Testing Fails**: To ensure the accuracy and consistency of the application's user interface across different environments and iterations, enable this option that automatically marks a test case as failed if it detects any visual discrepancies during execution.
    
    - **After Test Case**: Define custom steps or tasks to perform after executing a test case using Testsigma. These steps facilitate clean-up or preparation for subsequent test cases. For more information, refer to [After Test Case](https://testsigma.com/docs/test-management/test-plans/after-test/#after-test-in-test-cases).
      - **If After Test Fails** - **Fail the Test Case**: If the execution of after-test actions, such as post-validation checks or clean-up steps, encounters any failure or error, the test case will automatically fail. This ensures that any issues in the test's conclusion are promptly identified and resolved.
      - **If After Test Fails** - **Show Test Case Result**: The test case result will be shown even if the after-test actions fail. This gives you a complete view of the test's behaviour and provides valuable insights into the overall test case execution, including any possible issues that may arise during the post-validation or clean-up phases.
    
    - **Mark this for AfterTest Suite**: When you mark a test case for the AfterTest Suite, you ensure that it executes as part of the clean-up or finalisation process after the test suite's execution. This option helps maintain the test environment and ensure the proper closure of testing activities.

4. **Manage Test Case**: Click **Manage Test Case** in the right-side navbar, and configure the following options: ![Manage Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/managetestcase_tcd.gif)
    - **Status**: Select the appropriate status for the Test Case to organise and manage the testing workflow.
      - **Draft**: The test case is in an abstract mode.
      - **Review**: The test case is under inspection.
      - **Ready**: The test case is active and ready to be executed.
      - **Obsolete**: The test case is no longer valid.
      - **Rework**: The test case needs to be updated.
    
    - **Priority**: Select the priority level you want to set for this test case. For more information, refer to [Test Case Priorities](https://testsigma.com/docs/projects/settings/test-case-priorities/).
      - **Critical**: Highest priority
      - **Major**: Test case for a major feature
      - **Medium**: Medium priority
      - **Minor**: Test case for a minor feature
    - **Assignee**: Choose the team member you want to assign to this test case. The team member assigned will receive notifications regarding test case failures during test case reviews.
    
    - **Reviewer**: Assign a team member to review the accuracy, completeness, and adherence to testing standards of the test case. This promotes collaboration and ensures the quality of the test cases. For more information, refer to [Test Case Review management](https://testsigma.com/docs/collaboration/test-cases-review-management/).
    
    - **Test Type**: You must select the appropriate test method to apply using this test case. For more information, refer to [Test Case Types](https://testsigma.com/docs/projects/settings/test-case-types/).
      - **Unit Test**: Test individual components or modules of the software to ensure their functionality in isolation.
      - **Integration**: Test the interaction and compatibility between multiple components or modules to ensure they work together correctly.
      - **Functional**: Test the functional requirements of a software application to ensure it meets the intended specifications.
      - **Non-functional**: Test a software application's performance, usability, security, and other non-functional aspects.
      - **User Experience**: Test a software application's overall user experience, usability, and interface to ensure it meets user expectations.
    
    - **Requirement**: Create new requirements and associate them with test cases to establish traceability between requirements and test cases. This ensures that all necessary functionalities are adequately tested. For more information, refer to [Requirements](https://testsigma.com/docs/projects/requirements/).
    
    - **Labels**: Categorize test cases based on specific attributes such as modules, components, or testing phases by applying labels. Labels facilitate efficient filtering and searching, making managing and retrieving relevant test cases more manageable.

5. **Activity**: Click **Activity** in the right-side navbar and view the **History** and **Comments** of test cases.

6. **Help**: Click **Help** in the right-side navbar and access **Examples**, **Action List**, and **Get Started** for a general understanding of Test Cases. ![Activity and Help](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/activity_help_tcd.gif)

---

## **Edit Test Case**

1. Navigate to **Create Tests** > **Test Cases** in the left-side navbar. 

2. Select the **Test Case** in the **Test Cases List** page and follow the steps mentioned in the [Test Case - Advanced Options](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#test-case----advanced-options) section above to edit the test case.

---

## **Delete Test Case**

1. Navigate to **Create Tests** > **Test Cases** in the left-side navbar.

2. You can delete the test case using any of the following methods:
    - Click the **Test Case** you want to delete and open the **Test Case Details** Page. Then, click the **Delete** Button in the screen's top right corner. ![Delete Test Case in Test Case Details page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/deletetestcase_tcd.gif)
    - Click on the **ellipsis** icon for the **Test Case** you want to delete from the **Test Case List** page, and select **Delete** from the drop-down menu to remove the test case. ![Delete Test Case in Test Case List page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/deletetestcase_dropdown.gif)
    - Click the **checkbox** for the **Test Cases** you want to delete from the **Test Case List** page, and then click the **Delete** icon in the menu bar. ![Delete Multiple Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/delete_multipetestcase.gif)

3. A **Delete Confirmation** pop-up will appear. Click **Delete** to remove the test case from the project.

[[info | NOTE:]]
| - When you delete test cases from the list, you send them to the trash folder. You can restore or permanently delete the test case from the trash folder.
| - Deleting the test case will remove all the associated test suites, test plans, and any prerequisites.

---

## **Recover Deleted Test Case**

1. Navigate to **Create Tests** > **Test Cases** in the left-side navbar.

2. In the **Test Case List** page, click **Saved Filters** and then select **Trash (Deleted Test Cases)** from the drop-down menu in the menu bar. This action will display a list of all the deleted test cases. ![Trash in Test Case List page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/trashtestcase_testlistpage.png)

3. Scroll through the list or use the search bar to locate the test case you want to recover or delete forever from the Trash and open it.

4. Click the **Restore** button in the top right corner of the **Test Case Details** Page to recover it. Once you restore the test case, it will appear on the **Test Cases List** page.

5. To permanently delete the Test Case, click the **Delete Foreve**r button. A confirmation pop-up screen will appear. You must enter **DELETE** in the field and click **I Understand, delete this (Test Case Name)**. ![Delete Test Case permanent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/deletetestcase_permanent.gif)

[[info | NOTE:]]
| Deleting the test case permanently will result in losing all Run reports and associated configurations.


---