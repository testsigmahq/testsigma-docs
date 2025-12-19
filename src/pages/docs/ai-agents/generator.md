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
- type: link
  name: "Interactive Actions During Live Learning"
  url: "#interactive-actions-during-live-learning"
- type: link
  name: "Execute and Save the Test Case"
  url: "#execute-and-save-the-test-case"
---

---

The Generator Agent in Testsigma enables you to generate and automate test cases by analyzing application behavior, user workflows, and supported input sources. It converts manual test steps into executable automated steps using AI, reducing manual effort during test creation.

You can generate test cases from sources such as Jira requirements, files, and prompts, and automate them using Atto’s Live Editor. During live learning, the Generator Agent captures application elements, allows you to record additional manual steps, and provides controls to pause, reset, or stop the learning session.

After automation, you can execute the test case locally, review the generated steps, and save the test case to the test case library. This article describes how to generate, automate, and manage test cases using the Generator Agent and Atto’s Live Editor in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. Testsigma Terminal is installed.
> 2. Live Editor is ready for use.

---

## **Generate Test Cases Using Generator Agent**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, select **Jira Requirements**.

4. In the **Add Jira Tickets** dialog:
   - From the **Project** dropdown, select the relevant Jira project.
   - Under **Issue Type**, select one of the following:
      - If you select **Epic**, choose the stories for which you want to generate test cases.
      - If you select **Story**, choose all the stories for which you want to generate test cases.
  
     ![Jira Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/ai_agents/add_files_1.png)

5. In the **Add Jira Tickets** dialog, click **Files** from the **ADD FILES** menu. 
   ![Files](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/ai_agents/add_files_3.png)

6. In the **Files Upload** dialog:
   - Click **Add Files**. 
   - Click **Browse**, and select one or more supported files.
   - Click **Add Files**.
   - Click **Save**. 
     
     ![Files Input](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/ai_agents/add_files_4.png)

7. In the Prompt field, enter a detailed description of the test cases to generate and click **Generate with AI**.
   ![Prompt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/ai_agents/add_files_5.png)

8.  Wait for the Generator Agent to generate test cases based on the selected inputs.

---

## **Learn the Live Application Using Live Editor**

1. From the generated test cases list, expand a scenario and select a test case. This will open the Test Case Details dialog.
   ![Expand & Select](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Expand_Scenario_Select_Test.png)
   
   [[info | **NOTE**:]]
   | To start automating and interact live with the app, make sure the **Generator (Live App)** toggle is turned on. Go to **Settings > Preferences > Agentic AI > Generator**, and enable the toggle.
   | ![Generator toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Generator_Toggle.png) 

2. In the **Test Case Details** dialog, click the **Automated Steps** tab.
   ![Automated Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Automated_Steps_Tab_Agentic_Learning.png) 

3. Hover over **Agentic Learning (Beta)** and select an environment. This will open Atto’s Live Editor. 
   ![Env for Agentic Learning](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Env_for_Agentic_Learning.png)

4. **Atto’s Live Editor** opens with the manual steps preloaded.

5. Click **Start Learning Live App** in **Atto’s Live Editor**.
   ![Start Learning Live App](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Learning_Live_App_from_Atto.png)

6. A Chrome browser opens and the Live Editor starts learning UI elements by executing the manual steps.

7. After all steps execute successfully, click **Start Generating Automated Test Case** to review the learned steps.
   ![Generated Automated Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Generate_Automated_Case_from_Atto.png)

[[info | **NOTE**:]]
| You can modify test steps by providing additional inputs if required.

---

## **Interactive Actions During Live Learning**

While Atto is learning application elements, you can control the learning session using the interactive actions available in the Atto’s Live Editor.

### **Reset the Learning Session**
   
Use Reset to clear all messages and stop the current learning session.
![Reset](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Reset_in_Atto_Learning.png)


**Result:**
- All in-progress actions are cleared.
- The active browser learning session is stopped.

### **Record Manual Steps**
Use Record Manual Steps to manually capture additional steps during the learning session and add them to the existing test case.
![Record Steps Manually](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Record_Steps_In_Atto.png)

**Steps:**

1. In the interactive panel, click **Record Manual Steps**.

2. Perform the required actions manually.

3. Click **Stop Recording**.
   ![Stop Recording](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Stop_Rec_in_Atto.png)

4. Under **Manual Recorded Steps**, select the steps you want to add.
   ![Select Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Adding_Manual_Steps_from_Atto.png)

5. From the **Add Step(s) After** dropdown, select the step number.
   ![Step Number](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Step_Number_to_Add_Steps.png)

6. Click **Add Steps**.
   ![Add Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_Steps_Confirmation_In_Atto.png)

7. The selected steps are added to the test case.
   ![Steps Added](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Steps_Added_to_Existing_Case.png)

### **Pause or Resume Learning**
1. Click **Pause** to temporarily stop the learning process.
   ![Pause](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Pause_Icon_In_Atto.png)

2. Click **Play** to resume the learning session.
   ![Resume](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Play_Icon_In_Atto.png)

### **Stop the Learning Session**

1. Click **Stop** to end the Atto’s learning session.
   ![Stop Learning](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Stop_Live_Learning_from_Atto.png)

2. This stops the live learning process and closes the active session.

---

## **Execute and Save the Test Case**

1. Click **Run Now** on the **Atto’s Live Editor** to execute the test case locally.
   ![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Run_Automated_Case_from_Live_Editor.png)

2. After successful execution, click **Accept** to save the test case to the test case library.
   ![Accept Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Accept_Automated_Case_from_Live_Editor.png)

[[info | **NOTE**:]]
| You can accept a test case even if execution fails and update it later. **Reject** a test case only if it is unrelated or unusable.

---