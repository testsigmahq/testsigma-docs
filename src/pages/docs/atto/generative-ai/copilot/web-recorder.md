---
title: "Copilot in Web Recorder"
page_title: "Copilot in Web Recorder"
metadesc: "Testsigma has simplified test case generation for web applications with Testsigma Copilot | With just a single click, you can create test cases for web apps"
noindex: false
order: 4.7431
page_id: "copilot-in-web-recorder"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Generate Test Cases"
  url: "#steps-to-generate-test-cases"
- type: link
  name: "Generate Test Cases with Prompts"
  url: "#generate-test-cases-with-prompts"
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
> Before you begin, enable AI Features from **Settings > Preferences > Generative AI features** and have referred to the documentation on [creating a test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

---

## **Steps to Generate Test Cases**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. In the **Test Case Explorer** section, expand the required feature and click the ‘**+**’ icon next to the target scenario. This will open a dialog box.

3. On the dialog box, validate the target feature and scenario, enter the name in the test case name input box, and click **Create**.

4. On the **Test Case Details** page, enter a name for the test case and click **Record** in the top-right corner. A new window will open.

   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/GenAI_Record.png)

5. In the opened window, input the URL of the web page from which you want to generate test scenarios. The **Testsigma Recorder** will activate and prepare for recording.

6. Click **Testsigma Copilot**.
   ![Copilot](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Copilot_Button.png)

7. Click **Generate Test Cases** in the **Testsigma Copilot** overlay. The Testsigma Copilot will start generating test scenarios based on the current page content.

   ![Generate Scenarios](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Generate_Scenarios.png)

8. Wait until the test scenarios are generated.

9.  Click on any generated test case scenario to view its corresponding test steps.
   
   ![View test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/View_Scenarios.png)

10. Click **Add to test case** to import the displayed test steps into the recorder.
   
   ![Add to Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Add_AI_Test_Steps.png)

11. Modify the test steps as per the desired test case behavior. Once the necessary modifications are done, click **Stop** to return to the test case details page.
    
    ![Stop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Stop_Rec_GenAI.png)

---

## **Generate Test Cases with Prompts**

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