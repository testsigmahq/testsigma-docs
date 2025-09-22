---
title: "Integrate Testsigma with Jenkins"
metadesc: "Integrate Jenkins with Testsigma to run test plans from your Jenkins CI/CD pipeline. Enable continuous testing and streamline software delivery."
noindex: false
order: 12.13
page_id: "integrate-testsigma-with-jenkins"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Trigger Testsigma Test Plans from Jenkins"
  url: "#trigger-testsigma-test-plans-from-jenkins"
---

---

Jenkins is an open-source automation server used for CI/CD and build automation. You can trigger Testsigma test plans directly from Jenkins to streamline testing in your pipelines.

<br>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/New_Doc_Videos/Trigger_Test_Plans_from_Jenkins.mp4" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
          allowfullscreen>
  </iframe>
</div>


---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have:
> - Reviewed the following documentation:
>    1. [Generating API keys](https://testsigma.com/docs/configuration/api-keys/).
>    2. [Getting a test plan ID](https://docs.testsigma.com/images/azure-devops/get-test-plan-id.png).
> - A working **Jenkins** server with administrative access.

---

## **Trigger Testsigma Test Plans from Jenkins**

1. Log in to your **Jenkins** instance.


2. From the **Jenkins Dashboard**, click **+ New Item**.
   ![Jenkins Dashboard](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Jenkins_Dashboard.png)


3. Enter a **Name**, select **Freestyle Project**, and click **Ok**.
   ![Ok](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Freestyle_Project_Jenkins.png)


4. In the **Configuration** page, scroll to **Build Steps** and click **Add build steps**.
   ![Configuration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Jenkins_Configuration.png)


5. Select **Execute Shell** from the dropdown menu.
   ![Execute Shell](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Execute_Shell_Jenkins.png)


6. Copy the **Unix Shell Script** from the [Generic Shell Script](https://testsigma.com/docs/continuous-integration/shell-script/#for-unix-shell-script-bash-script) page and paste it into the **Execute Shell** codebox.

[[info | **NOTE**:]]
| Replace values of **TESTSIGMA_API_KEY** and **TESTSIGMA_TEST_PLAN_ID** with your Testsigma **API Key** and **Test Plan Execution ID**.
| ![Values in Shell Script](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Values_in_Script_Jenkins.png)

7. Click **Save**.
   ![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Save_Jenkins_Build.png)


8. In the project details page, click **Build Now** to trigger the Testsigma test plan.
   ![Build Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Jenkins_Build_Now.png)


9. In Testsigma **Dashboard > Test Plans**, verify the test plan execution has started.
   ![Test Plans](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Plans_Jenkins.png)


10. Click **Build**, and select **Console Log** to view execution logs.
    ![Console Log](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Console_Jenkins.png)


11. Go to **Testsigma Dashboard > Run Results** to review detailed execution results.
    ![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Run_Results_in_TS_Jenkins.png)


---