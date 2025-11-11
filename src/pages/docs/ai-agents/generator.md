---
title: "Generator Agent in Testsigma"
page_title: "Generator Agent in Testsigma"
metadesc: "The Generator Agent in Testsigma allows you to quickly generate and automate test cases by analyzing application behavior and user workflows with ease"
noindex: false
order: 4.811
page_id: "generator-agent-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Generate Test Cases Using Generator Agent"
  url: "#generate-test-cases-using-generator-agent"
- type: link
  name: "Learn the Live Application Using Live Editor"
  url: "#learn-the-live-application-using-live-editor"
---

---

The Generator Agent in Testsigma allows you to quickly generate and automate test cases by analyzing application behavior and user workflows. Using generative AI, it converts manual test steps into actionable test steps, significantly simplifying the test authoring process. It supports various input sources for test generation, including Jira, Figma, Xray, video recordings, and files such as images and PDFs. You can use Testsigma Terminal to capture UI elements directly from the application, allowing you to generate fully executable test cases in just a few clicks. This article discusses using Generator Agent to accelerate test automation.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure **Testsigma Terminal** is installed and the **Live Editor** is ready.

---

## **Generate Test Cases Using Generator Agent**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, select **Jira Requirements**.

4. In the **Jira Requirements** modal dialog:
   - From the **Project** dropdown, select the relevant Jira project.
   - Under **Issue Type**, select one of the following:
      - If you select **Epic**, choose the stories for which you want to generate test cases.
      - If you select **Story**, choose all the stories for which you want to generate test cases.
   - Click **Add Input**.
     
     ![Jira Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Jira_Story_Tests.png)

5. In the **Generate Test Cases** section, select **Files** as an additional input source.

6. In the **Add Files** dialog:
   - Click **Browse**, and select one or more supported files.
   - Click **Add Files**.
     
     ![Files Input](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Files_Input.png)

7. In the Prompt box, enter a detailed prompt that describes test cases want to generate.

8. Click **Generate**.

9. Wait for Generator Agent to generate multiple test cases are generated based on the selected inputs. 

---

## **Learn the Live Application Using Live Editor**

1. From the generated test cases list, select a test case.

   [[info | **NOTE**:]]
   | To start automating and interact live with the app, make sure the **Generator (Live App)** toggle is turned on. Go to **Settings > Preferences > Agentic AI > Generator**, and enable the toggle.
   | ![Generator toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Generator_Toggle.png)

2. Click **Start Automating**.
   ![Start Automating](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Start_Automating_Tests.png)

3. In the **Select Environment for Execution** dialog, choose an environment, and click **Proceed**.
   ![Procees](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Procees_Automating.png)

4. This opens **Atto’s Live Editor** with the manual steps preloaded.
   ![Live Editor](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Live_Editor_SA.png)

5. Click **Start Learning Live App**.
   ![Start Learning](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Element_Learning_Atto.png)

6. A Chrome instance opens, and the **Live Editor** starts learning elements by executing the manual test steps.

7. Once all test steps are executed successfully, click **Start Generating Automated Test Case** to review all the steps with learned elements.
   ![Start Generating Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Generate_Test_Case_Atto.png)

[[info | **NOTE**:]]
| You can modify test steps by providing additional inputs if needed.

8. Click **Run Now** to execute the test case locally.
   ![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Run_Test_Case_Atto.png)

9. Once the test case executes successfully, click **Accept** to save it to the test case library.
   ![Accept](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Accept_Test_Case.png)

[[info | **NOTE**:]]
| Even if a test case fails, you can accept it and update it later. **Reject** a test case only if it’s completely unrelated or unusable.

---