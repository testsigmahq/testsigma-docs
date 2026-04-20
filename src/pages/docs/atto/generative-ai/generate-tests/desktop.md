---
title: "Generate Test Cases for Desktop"
page_title: "Prerequsites for GenAI & Agentic AI"
metadesc: "Testsigma’s AI capabilities help you with test case creation for Desktop applications | Generates multiple test cases that align with UI elements for Desktop apps"
noindex: false
order: 4.7427
page_id: "import-test-cases"
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
---

---

Testsigma’s Gen AI capabilities help you streamline test case creation for Desktop applications. By analyzing input sources such as Jira stories, Figma designs, Xray requirements, video recordings, and other file formats like images and PDFs, Testsigma generates manual test cases that align with UI elements. You can quickly convert these test cases into actionable test steps with a single click. This article discusses generating test cases for Desktop apps using Gen AI capabilities in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that, 
> - Your Jira and Figma accounts are integrated with Testsigma and you have the necessary files ready for input.
> - You have referred to the [documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> - You have referred to the [documentation on creating projects](https://testsigma.com/docs/projects/overview/). 

---

## **Steps to Generate Test Cases**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. On the **Generate Test Cases** page, click **Jira Requirements**. 

4. In the **Add Jira Tickets** dialog, 
   - From the **Jira Project** dropdown, select a project.
   - Under **Issue Type**, select either **Epic** or **Story**:
      - If you select **Epic**, choose the stories under that epic.
      - If you select **Story**, choose the stories you want to generate test cases for.
   - Click **Save**.

     ![Story Inputs for Desktop](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/desktop_1.png)

[[info | **NOTE**:]]
| You can add more input sources for test case generation by selecting necessary option in the **Generate Test Cases** section.

5. In the Prompt box, enter a detailed prompt that describes test cases want to generate.

6.  The **Read existing test case library** checkbox is selected by default. Clear this checkbox if you do not want the system to consider existing test cases while generating new ones.

[[info | **NOTE**:]]
| - Once the **Read existing test case library** option is enabled, it cannot be unselected during the same session. The selection remains applicable throughout the session. However, you can enable this option at any time during a session if it was not selected earlier.

7. Click **Generate with AI**.

8. Wait for **Generator Agent** to generate the test cases based on the selected stories and prompt.

9.  After the test cases are generated, expand a category and select a test case.

10. In the **Test Case Details** dialog, go to the **Manual Steps** tab and review the generated steps.


11.  Click **Edit** to manually add a step or block, or to modify existing steps.

12.  If you want to refine the steps using **Atto**, enter a prompt and click **Refine manual steps**.

13.  Click **Generate Automated Steps** to convert the manual steps into NLP-based automated steps.

14. To execute the test before saving, hover over **Run with Copilot** and select the environment where you want to run the test steps. Copilot executes the steps automatically. Review the results to ensure everything works as expected, then click **Save to Library** to save the test case to your project.

15.  To save the test directly, click **Save to Library**. In the **Select Location** dialog box, expand the required **Feature** and select the **Scenario** where you want to save the automated test case.
  
16. Repeat steps 8–15 for all the test cases you want to add.

[[info | **NOTE**:]]
| - To learn about **Agentic Learning**, please refer to the [documentation on Generator Agent](https://testsigma.com/docs/ai-agents/generator/).
| - To understand the difference between **Run with Copilot** and **Agentic Learning**, please refer to the [documentation on Run with Copilot vs Agentic Learning](http://testsigma.com/docs/atto/generative-ai/copilot/agentic-learning-vs-copilot/). 

---
