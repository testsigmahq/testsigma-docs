---
title: "Generate Test Cases for Desktop"
page_title: "Prerequsites for GenAI & Agentic AI"
metadesc: "Testsigma’s AI capabilities help you with test case creation for Desktop applications | Generates multiple test cases that align with UI elements for Desktop apps"
noindex: false
order: 4.7425
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
> Before you begin, ensure your Jira and Figma accounts are integrated with Testsigma and you have the necessary files ready for input.

---

## **Steps to Generate Test Cases**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. On the **Generate Test Cases** page, click **Jira Requirements**. 

4. In the **Jira Requirements** modal dialog, 
   - From the **Jira Project** dropdown, select a project.
   - Under **Issue Type**, select either **Epic** or **Story**:
      - If you select **Epic**, choose the stories under that epic.
      - If you select **Story**, choose the stories you want to generate test cases for.
   - Click **Add Input**.

     ![Story Inputs for Desktop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Desktop_Stories_Input.png)

[[info | **NOTE**:]]
| You can add more input sources for test case generation by selecting necessary option in the **Generate Test Cases** section.

5. In the Prompt box, enter a detailed prompt that describes test cases want to generate.

6. Click **Generate**.

6. Wait for **Generator Agent** to generate the test cases based on the selected stories and prompt.

7. Click a test case to open it. 

8. In the **Test Case Details** overlay, review the manual test steps.

9. Click **Generate NLPs** to convert the manual steps to NLP-based steps.

[[info | **NOTE**:]]
| You can add or remove test steps by clicking **Edit**.

9. Click **Accept** to save the test case.

10. Repeat steps 7–9 for all the test cases you want to add.

---