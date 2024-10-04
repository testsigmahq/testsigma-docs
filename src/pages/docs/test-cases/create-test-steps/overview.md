---
title: "Create Test Steps in Testsigma"
metadesc: "This article discusses creating test steps manually using simple English (NLPs) as well as with a recorder for web, mobile web, Android, & iOS app in Testsigma"
noindex: false
order: 4.60
page_id: "Create Test Steps in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Creating Test Steps Manually"
  url: "#creating-test-steps-manually"
- type: link
  name: "Creating Test Steps Using Test Recorder"
  url: "#creating-test-steps-using-test-recorder"
- type: link
  name: "AI Test Automation with Testsigma Copilot"
  url: "#ai-test-automation-with-testsigma-copilot-"
- type: link
  name: "Generate Test Scenarios"
  url: "#generate-test-scenarios"
- type: link
  name: "Generate Test Steps with Prompts"
  url: "#generate-test-steps-with-prompts"
---

---

In Testsigma terminology, each automated action executed by the test script is a test step. For example, in a login form, **Enter &lt;username&gt; in the &lt;username&gt; field** is a test step. This article discusses creating test steps for web, mobile web, Android, and iOS applications using Testsigma recorder & simple English (NLPs). 

---

## **Prerequisites**

- You should have Testsigma recorder installed.

- You should know about [test step types](https://testsigma.com/docs/test-cases/step-types/overview/).

- Web/Android/iOS application you want to test.


---

## **Creating Test Steps Manually**

### **Web & Mobile Web**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Cases**.

   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ctsmctcs.png)

2. Enter **Name** and click on **Add new step**. 

   ![New Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ctsmanstep.png)

3. Use NLPs to create test steps as per the test case scenario. For example, if you’re creating test steps for the login page, your test steps will be:

    1. Navigate to https://simply-travel.testsigma.com/ 
    2. Click on **Login/Sign Up**
    3. Click on **Login**
    4. Enter &lt;**email**&gt; in the &lt;**email address**&gt; field
    5. Click on **Continue**
    6. Enter &lt;**password**&gt; in the &lt;**password**&gt; field
    7. Click on **Submit**

Here's a screenshot of reproduced test steps in Testsigma application.
    ![Test Steps in Testsigma App](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ctsmsavedsteps.png)


### **iOS Apps**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Cases**.

   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ctsmiostcs.png)

2. Enter **Name** and click on **Add new step**.

   ![New Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ctsmiosts.png)

3. Use NLPs to create test steps as per the test case scenario.

### **Android Apps**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Cases**.

   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ctsmandtcs.png)

2. Enter **Name** and click on **Add new step**. 

   ![New Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ctsmandnewstep.png)

3. Use NLPs to create test steps as per the test case scenario.

[[info | **NOTE**:]]
| - By default the first step for Android and iOS applications is **Launch App**.
| - You can also add steps above and below a test step by clicking on **Step Above** & **Step Below**. 
|   ![Add Step Above or Below](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ctsmasaab.png)

<br>

Here's a sample GIF demonstrating creating test steps manually for a Web Application. 

![Creating Test Steps Manually](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CreateTestStepsManually.gif)


---

## **Creating Test Steps Using Test Recorder**

### **Web & Mobile Web**

1. Navigate to **Create Tests > Test Cases**, and click on **Create Test Case**.

   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/warnavctstcswa.png)


2. Create a test step using the URL that you want to automate and click on **Create Step**.

   ![Create Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/warcs.png)


3. Click on **Record**.

   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/warrecord.png)


4. A new window will open the given URL and you can record the test steps.

   ![New Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/warnwindow.png)


[[info | **NOTE**:]]
| Please wait a few seconds until the web page is fully loaded so the extension can collect information from the page in the background. 

5. Once the first web page is fully loaded, start interacting and performing actions on the page.


6. The actions will be recorded and added to the test case in the background. 


7. Once the required actions are complete, click on **Done** to switch back to the test case details page.
   
   ![Done](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/warcodone.png)

8. You can see the steps recorded in the test case details page. 
   
   ![Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/warrcst.png)


### **Android & iOS Apps**

1. Navigate to **Create Tests > Test Cases**, click on **Create Test Case**.
   
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosoctc.png)

2. On **Test Case Details** page, click on **Record**.
   
   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosoreco.png)

3. On **Record test steps** overlay, select **Test Lab**, **Test Machine** and **App Source** you want to test. 
   
   ![Record Steps Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosotltmas.png)

4. Click on **Record**.
   
   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iosorctso.png)

5. Perform the actions on the application and once the required actions are complete, stop the recording to switch back to the test case details page.

6. The test case details page will display the steps performed on the application. 

<br>

<div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; border: 1px solid #dee2e6;">
  <p style="font-size: 16px; color: #495057;">
    <span style="color: #17a2b8; font-size: 20px;"></span>
    <b>⚡ New:</b> You can now directly interact with mobile elements, and the recorder will automatically capture the action and convert it into the corresponding NLPs.
  </p>
</div>

[[info | **NOTE**:]]
| If direct recording doesn't work, revert to the old method and use the **TAP** button to record the element.

<br>

Here's a sample GIF demonstrating creating test steps using the recorder for a Web Application. 

   ![Record Test Steps for WebApps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/RecordStepswappsWF.gif)


---

## **AI Test Automation with Testsigma Copilot 🚀**

Testsigma Copilot redefines test automation with the power of generative AI. 

- You can effortlessly create diverse test scenarios with a single click.
- Generate detailed test steps that accurately mimic real-world user behavior with the right UI elements and complex user interactions. 
- Create a comprehensive test case using simple prompts. 

Boost your test automation and deliver high-quality software with Testsigma Copilot 🤖.

---

## **Generate Test Scenarios**

1. From the left-side navbar, select **Create Tests > Test Cases** and then click **Create Test Case**.

   ![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/GenAI_TestCase.png)

2. On the **Test Case Details** page, enter a name for the test case and click **Record** in the top-right corner. A new window will open.

   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/GenAI_Record.png)

3. In the opened window, input the URL of the web page from which you want to generate test scenarios. The **Testsigma Recorder** will activate and prepare for recording.

4. Click **Testsigma Copilot**.
   ![Copilot](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Copilot_Button.png)

5. Click **Generate Scenarios** in the **Testsigma Copilot** overlay. The Testsigma Copilot will start generating test scenarios based on the current page content.

   ![Generate Scenarios](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Generate_Scenarios.png)

6. Wait until the test scenarios are generated.

7. Click on any generated test case scenario to view its corresponding test steps.
   
   ![View test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/View_Scenarios.png)

8. Click **Add to test case** to import the displayed test steps into the recorder.
   
   ![Add to Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Add_AI_Test_Steps.png)

9.  Modify the test steps as per the desired test case behavior. Once the necessary modifications are done, click **Stop** to return to the test case details page.
    
    ![Stop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Stop_Rec_AI_TestSteps.png)

---

## **Generate Test Steps with Prompts**

Follow the same steps from 1-3 from the above section.

4. On prompt input, enter the prompt for which you want to fetch test steps. 
   ![Prompt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Prompt_AI.png)

5. Press **Enter**.
   
6. Wait until the test steps are generated. 

7. Click **Add to test case** to import the displayed test steps into the recorder.

   ![Add to Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AddtoTestCase_AI.png)

8. Modify the test steps as per the desired test case behavior. Once the necessary modifications are done, click **Stop** to return to the test case details page.

   ![Stop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Stop_PromptSteps.png)

---