---
title: "AI Test Automation with Testsigma Copilot"
page_title: "AI Test Automation with Testsigma Copilot"
metadesc: "In Testsigma you can now generate diverse test scenarios with a single click and also comprehensive test cases using simple prompts using GenAI"
noindex: false
order: 31.1
page_id: "Testsigma for Windows Automation"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Generate Test Scenarios"
  url: "#generate-test-scenarios"
- type: link
  name: "Generate Test Steps with Prompts"
  url: "#generate-test-steps-with-prompts"
- type: link
  name: "Interactive Demo"
  url: "#interactive-demo"
---

---

Testsigma Copilot redefines test automation with the power of generative AI 🤖. 

- You can effortlessly create diverse test scenarios with a single click.
- Generate detailed test steps that accurately mimic real-world user behavior with the right UI elements and complex user interactions. 
- Create a comprehensive test case using simple prompts. 


---

> ## **Prerequisites**
> 
> Before you begin, enable AI Features from **Settings > Preferences > Generative AI features** and ensure you're familiar with the concepts of [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).


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
    
    ![Stop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Stop_Rec_GenAI.png)

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

## **Interactive Demo**

Try this interactive demo to learn how to generate test cases for web apps using Testsigma Copilot!

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(53.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/1doy1j2vsbdt?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>


---