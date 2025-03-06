---
title: "TestRail Integration with Testsigma"
page_title: "TestRail Integration with Testsigma"
metadesc: "TestRail is a Test Management tool that gives the structure to organize, plan, and report the progress of testing. Learn how to integrate TestRail with Testsigma Application"
noindex: false
order: 16.58
page_id: "TestRail Integration with Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Integrate Testsigma with Testrail"
  url: "#steps-to-integrate-testsigma-with-testrail"
- type: link
  name: "Steps to Link Testrail ID with Testsigma Test Case"
  url: "#steps-to-link-testrail-id-with-testsigma-test-case"
- type: link
  name: "Steps to Execute Test Plan"
  url: "#steps-to-execute-test-plan"
- type: link
  name: "Trigger TestRail Test Runs Using APIs"
  url: "#trigger-testrail-test-runs-using-apis"
---

---

You can integrate Testsigma with TestRail to streamline test management and track progress. TestRail enhances visibility into test coverage, requirements, and release readiness, helping teams stay aligned and deliver high-quality products. With this integration, you can execute tests efficiently, generate detailed reports, and manage bugs discovered during testing, ensuring a seamless testing process. This article discusses integrating Testrail with Testsigma. 


[[info | **NOTE**:]]
| Contact **Testsigma support** to enable **Post Plan Hook** for your account.

---

> ## **Prerequisites**
> 
> Before you begin, ensure you have a valid **Host URL**, **Username**, and **Password** from TestRail. Also, make sure you know how to create [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/) in Testsigma.


---

## **Steps to Integrate Testsigma with Testrail**

1. From the left navigation bar, go to **Settings > Integrations**.
   ![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRail_Navigation.png)

2. Enable toggle on **Testrail** widget.
   ![Enable TestRail](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Enable_TestRail.png)

3. On the **Testrail Details** dialog, enter **Host URL**, **Username**, and **Password**.
   ![Enter TestRail Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRail_Deatils.png)

4. Click **Save & Enable**.
   ![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Save_TestRail_Details.png)


---

## **Steps to Link Testrail ID with Testsigma Test Case**

1. Open the test case in **TestRail** and copy its **ID**.
   ![TestRail Test Case ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRail_TestCase.png)

[[info | **INFO 💡**:]]
|
| **Before mapping TestRail test cases in Testsigma, ensure you have a project, test runs, and test cases set up in TestRail.**


2. Navigate to the test case you want to link in Testsigma and select **Manage Test Case** from the **Utility Panel**.
   ![Manage Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/UtilityPanel_ManageTestCase.png)

3. Enter the **TestRail ID** in the input box and click the link icon. 
   ![Link TestRail IDs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRail_ID_Link.png)
   
   Follow steps 1-3 for each TestRail test case you want to map in Testsigma.

Here's a structured hierarchy flow of test case linkage between Testsigma and TestRail, including Test Case IDs.
   ![TestRail x Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRailXTestsigma.png)

[[info | **NOTE**:]]
| - Enter only the numeric portion of the **TestRail ID**, ignoring any preceding letters.
| - Ensure that the test case names in Testsigma and TestRail match for better clarity.

---

## **Steps to Execute Test Plan**

1. After linking the test cases in Testsigma, create a test suite with the linked test cases and add it to a test plan.

2. In the Test Plan Settings, select **Standard TestRail Addon** from the **Post Plan Hook** dropdown menu.  
   ![Post Plan Hook](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/PostPlanHook_TestRail_Standard.png)

3. Enter the project name in the **PROJECT_NAME** text box. 
   ![Project Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRail_Project_Name.png)

[[info | **INFO 💡**:]]
| If you're selecting **TestRail Custom with Case Match** Addon, you need to enter the project name in the **PROJECT_NAME** text box, API key in the **API_KEY** text box, and the template URL in the **TEMPLATE_URL** text box.
|
| ![CaseMatcher Addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CaseMatcher_Addon.png)

[[info | **NOTE**:]]
| - Ensure that the project name entered in the **Test Plan Settings** matches exactly with the name in **TestRail**.
| - Obtain valid Testsigma API Key from **Settings > API** Keys.

4. Go to **Test Plans** and click **Run Now** to execute the test plan. This will create a duplicate of the test run and display the result once the execution is complete.
   ![Test Plan Execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRail_TestPlan.png)

[[info | **NOTE**:]]
| You may notice that test cases have been executed, and post-plan execution is in progress. Wait a few seconds and refresh the page to view the results.

5. Click on the **TestRail Result Link** in the top right corner to navigate to the run result. The result will be displayed along with the **Run ID** created in Testsigma.
   ![TestRail Link](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRail_Result_Link.png)

[[info | **NOTE**:]]
| The rerun will update the results in the same link. However, if you execute the test plan instead of rerunning, it will create a new link for the run results.


---

## **Trigger TestRail Test Runs Using APIs**

You can also trigger TestRail test runs using APIs. Click [here](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TR_QT.postman_collection.json.zip) to download the Postman collection.


**a. Authorization:** Bearer Token (copied from [Settings > API](https://testsigma.com/docs/configuration/api-keys/) Keys in Testsigma).

**b. Provide the following details in Request Body**
   
   - **TestRail Run ID:** The unique identifier for the test run in TestRail.
   
   - **Hook Data:** Includes the following parameters:
      
      - **Testsigma API Key:** Copied from Settings > API Keys in Testsigma.
      
      - **Project Name:** The name of the project associated with the test execution.
      
      - **Template URL:** The URL of the template JUnit file used to configure result data.
   
   - **Title:** Provide a title.
   
   - **Execution Lab:** Specifies the execution environment or lab used for running the test cases.

Here's a quick GIF demonstrating steps to trigger TestRail runs using APIs.
![TestRail GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRail_API_Trigger.gif)

---