---
title: "qTest Integration with Testsigma"
page_title: "qTest Integration with Testsigma"
metadesc: "qTest is a Test Management tool that gives the structure to organize, plan, and report the progress of testing. Learn how to integrate qTest with Testsigma Application"
noindex: false
order: 16.57
page_id: "qTest Integration with Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Integrate Testsigma with qTest"
  url: "#steps-to-integrate-testsigma-with-qtest"
- type: link
  name: "Steps to Link qTest ID with Testsigma Test Case"
  url: "#steps-to-link-qtest-id-with-testsigma-test-case"
- type: link
  name: "Steps to Execute Test Plan"
  url: "#steps-to-execute-test-plan"
---

---

qTest is a manual test management tool. With qTest integration in Testsigma, you can link qTest test cases to Testsigma test cases and export Testsigma run results to qTest. This article discusses integrating qTest with Testsigma. 

---

> ## **Prerequisites**
>
> 
> Before you begin, ensure you have a valid **Host URL** and **Bearer Token** from qTest. Also, make sure you know how to create [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/) in Testsigma.

---

## **Steps to Integrate Testsigma with qTest**

1. From the left navigation bar, go to **Settings > Integrations**.
   ![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestRail_Navigation.png)

2. Enable toggle on **qTest** widget.
   ![qTest Widget](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/qTest_Widget.png)

3. On the **qTest Details** dialog, enter **Host URL** and **Bearer Token**.
   ![qTest Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/qTest_Details.png)

4. Click **Save & Enable**.
   ![Save qTest Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/qTest_Details_Save.png)

---


## **Steps to Link qTest ID with Testsigma Test Case**

1. Open the test case in **qTest** and copy its **ID**.
   ![qTest ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestCase_ID_Qtest.png)

[[info | **NOTE**:]]
| Before mapping qTest test cases in Testsigma, ensure you have a project, test runs, and test cases set up in **qTest**.

2. Navigate to the test case you want to link in Testsigma and select **Manage Test Case** from the **Utility Panel**.
   ![Manage Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Manage_TestCase_UtilityPanel.png)


3. Select a **qTest Project** from the dropdown menu, enter the **qTest ID** in the input box, click the link icon. 
   ![Mapping qTest Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Mapping_qTest_TestCase.png)
   Follow steps 1–3 for each qTest test case you want to map in Testsigma.


---


## **Steps to Execute Test Plan**


1. After linking the test cases in Testsigma, create a test suite with the linked test cases and add it to a test plan.

2. In the **Test Plan Settings**, select **qTest Addon** from the **Post Plan Hook** dropdown menu.
   ![qTest Post Plan Hook](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Post_Plan_Hook_qTest.png)

3. Enter the following details in the respective text boxes:
   - **API_KEY:** Testsigma API Key (For more information, see [Settings > API Keys](https://testsigma.com/docs/configuration/api-keys/)).
   
   - **RELEASE_ID:** ID of the **qTest Release**.<br>
     Click **Release** & copy the numeric value after `id=` in the URL, which is your **Release ID**.
     ![Release ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ReleaseID_qTest.png)
   
   - **CYCLE_ID:** ID of the **qTest Cycle**.<br>
     Click **Cycle** & copy the numeric value after `id=` in the URL, which is your **Cycle ID**.
     ![Cycle ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CycleID_qTest.png)
   
   - **OVERRIDE\_ON\_RERUN:** Set to **true/false**.
      - **true**: On test plan rerun, pushes results into the original qTest cycle.
      - **false**: Creates a new cycle with Rerun #num appended to the original cycle name.
   
   - **PROJECT_ID:** ID of the **qTest Project**.<br>
     Click **Project** & copy the numeric value after `/p/` in the URL, which is your **Project ID**.
     ![Project ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ProjectID_qTest.png)
   
   - **TEMPLATE_URL:** URL of the JUnit template file used to configure result data for the Testsigma test plan run 
  
     ![Addon Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Addon_Details_qTest.png)

    [[info | **NOTE**:]]
    | - The **Template URL** must be publicly accessible.
    | 
    | - If the **Release ID** and **Cycle ID** are not provided when triggering the execution, Testsigma automatically generates them in qTest for the execution.

4. Go to **Test Plans** and click **Run Now** to execute the test plan. A duplicate test run is created, and results are displayed upon completion.
   ![Run Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_qTest_Plan.png)

5. Click **qTest Result Link** in the top right corner to navigate to the qTest run results.
   ![qTest Result Link](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/qTest_Result_Link.png)


---