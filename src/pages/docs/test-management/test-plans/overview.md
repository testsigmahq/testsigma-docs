---
title: "Test plans"
page_title: "Test Plans - List, Create, Edit, Delete"
metadesc: "How to list, create, edit, and delete a Test Plan in Testsigma"
noindex: false
order: 8.21
page_id: "Test Plans - List, Create, Edit, Delete"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to create a test plan"
  url: "#steps-to-create-a-test-plan" 
- type: link
  name: "List test plans"
  url: "#list-test-plans"
- type: link
  name: "Edit test plan"
  url: "#edit-test-plan"
- type: link
  name: "Delete test plan"
  url: "#delete-test-plan"
---

---

Test plan is a document which details and identifies amongst others, test items, the features to be tested, the testing tasks, the test environment, the test design techniques and so on. It is a comprehensive record of the test planning process.
The following article details the process of creating, editing, and deleting a test plan in Testsigma.

---

## **Steps to create a test plan**

1. Click on the **Test Development** icon on the left and navigate to Test Plans. This will take you to the **Test Plans** page.
![Create test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/create_a_test_plan.png)
2. On the test plans page, click **+ Create Test Plan**, to create a new test plan.
3. Under the **Create test plan** tab, provide the following details, and click **Next**:
   * **Test plan name**: Enter the name of the test plan.
   * **Description** (optional): Enter a clear and precise description to describe the test plan you are creating.
   * **Testing type**: You can choose either **Automated testing** or **Manual testing** for your test plan.
   * **Labels** (optional): You can add labels to your test plan. This is useful for test management and identification of test cases.
   ![test plan details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/create_testplan_page.png)
4. To add test suites to the test plan, click **Add Test Suites**.
![Add test suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/add_test_suites.png)
6. On the **Selected Test Suites** window:
    1. Click the toggle **Enable End-To-end Testing**,if you want to test your application from start to end from the end user’s experience by simulating the real user scenario.
       1. If you choose to enable end to end testing select **Project** from the dropdown menu, to see the associated test suites.
       2. Select the test suites from the **Available Test Suites** list.
       3. Click **>>Add Selected**, to add the selected test suites to the test plan.
7. Click **Add**.
![Add available test suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/selected_test_suites_window.png)
8. To select the environment to run the test suite against, select **Add Machine**.
   1. To run individual test suites on multiple environments, click **+Add Machine**,associated with each test suites.
9. You can either choose to create a new machine or choose to run the test suit .
   1. Select **Create New Machine**, to create a new machine.
   2. Select **Add to Existing Machine**, to run the test suite on an existing machine.
10. If you have selected **Create New Machine**, on the **Add Machine** pane:
1. Provide the following details:
      1. **Name**: Name of the test environment should be a minimum of 4 characters.
      2. **Test Lab Type**: This option allows you to select the test lab your test suites are executed on. This includes your local device, the test lab plugins installed or the Testsigma cloud infrastructure. The test lab plugins include BrowserStack, Sauce Labs, Lambda Test, and so on.
      3. **Prerequisites**: This is a condition or set of conditions to be met for the test suite to be executed.
      4. **Operating System**: Select the operating system to run the test suits.
      5. **OS Version**: Select the operating system version.
      6. **Browser**: Select the browser.
      7. **Browser version**: Select the browser version.
      8. **Resolution**: Select the resolution of the device.
      9. **Backup Devices**:Add backup devices for parallel execution. When the primary device is unavailable, Testsigma will use the backup device. ![Add machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/add_machine_or_device.png)
13. Click **Next**.
14. Under **Test Plan Settings**,
    1. Specify notification settings: Select the instances when the notifications are to be sent. For example, when the test suites executions have been *Passed*, *Aborted*, *Queued*, *Stopped* and so on.
       1. Specify the email to which the notifications have to be sent. If the collaboration plugins such as Google Chat, Slack, or MS Teams have been enabled the notifications will be sent to the associated accounts.
       ![Notification settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/add_my_email.png)
    3. Specify additional settings: Click **Additional Settings**, to expand the additional settings section.Under **Additional Settings** section,
       1. Specify the **Page Load Timeout** in the text field provided.
       2. Specify the **Element Timeout** in the text field provided.
       3. Select the **Environment**.
       4. Specify the instances to record the screen shots. For example, you can either choose to capture screen shots for **All Tests**, or capture screen shots only for **Failed Steps**.
    4. Specify recovery actions: Click **Recovery Actions**, to expand the recovery actions section and specify the recovery actions to be performed.
    ![Additional settings and recovery actions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/additional-settings-and-recovery-actions.png)
15. Click **Create**. You have now successfully created a test plan.

## **List test plans**

If you have already created one or more test plans, then you can see them listed on the **Test Plans** page. You can see them in **Test Development > Test Plans**.

A sample test plans page list would look like this:

![Test Plans Page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/test_plan_list.png)
On the Test Plans page, you will have the below options:

1. **Search option on the top right:**  To search for a test plan by name, use this. The search will filter all the test plan names that contain your search query.

2. **Refresh Button:** Click on the refresh button on the top right corner of the page to reload the list of test plans being displayed.

3. **+Test Plan Button:** Click on the **+Test Plan** button on the top right corner of the page to start creating a new Test Plan.

4. **Sort:** Click on the **Sort** button — the button next to the **+Test Plan** button—on the top right to sort the list of test plans according to your preference.

![sort option on Test Plans page on Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/sort_test_plan_list.png)

You can sort the list on ascending or descending order based on the below fields:

* Name<br>
* Type<br>
* Status<br>
* Created Date<br>
* Updated Date<br>

&emsp;

5. **Filter:** Click on the **Filter** button - the button next to sort button on the top right. A 'Filters' layover, as shown in the screenshot below, appears.

![Filters Layover in Test Plans Page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/filter_test_case_list.png)

You can filter the test plans based on the below options:

* Name

* Test Case Name

* Created By

* Status

* Created Date

* Updated Date

* Last Run Date

* Labels

&emsp;

---

## **Edit test plan**

On the **Test Plans page**, click on a test plan name to open the details page for that test plan. A sample test plan details page will be as shown below:

![Test Plan details page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/test_case_details.png)

1. Click on the **Edit** button on the top right corner to edit the test plan configurations.

2. The **Edit Test Plan** page opens, as shown below:

![edit test plan page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/edit_test_plan_details.png)

3. Make the necessary changes and click on the **Update** button that would appear on the last tab **Test Plan Settings**. This would finalize your changes.

&emsp;

---

## **Delete test plan**

1. On the test plan details page for a particular execution, click on the **Delete** button on the top right corner near the Edit button, as also shown in the screenshot below:

![delete button on Test Plan details page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/delete_test_plan.png)

2. We will get a confirmation dialog to confirm the deletion. Select the checkbox and click on the **Delete** button to confirm the deletion.
