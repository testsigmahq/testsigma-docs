---
title: "Generate Test Cases For Web"
page_title: "Generate Test Cases For Web"
metadesc: "Generate tests for web & mobile web applications using Testsigma’s GenAI. You can provide input from multiple sources, including Jira, Figma, Xray, videos, & files"
noindex: false
order: 4.7423
page_id: "generate-test-cases-for-web-mobile-web"
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
  name: "Next Steps"
  url: "#next-steps"
---

---

You can generate test cases for web and mobile web applications using Testsigma’s Generative AI capabilities. You can provide input from multiple sources, including Jira, Figma, Xray, videos, and files (such as Images, PDFs). This article discusses generating test cases for web and mobile web apps using Gen AI capabilities in Testsigma. 

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that,
> - Your Jira account is integrated with Testsigma.
> - You have referred to the [documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> - You have referred to the [documentation on creating projects](https://testsigma.com/docs/projects/overview/). 

---

## **Steps to Generate Test Cases**

1. From the left navigation bar, go to **Atto’s Home**.

2. Click **Generate with AI**.

3. In the **Generate Test Cases** section, select **Jira Requirements**.

4. In the **Add Jira Tickets** dialog:
   - From the **Project** dropdown, select the relevant Jira project.
   - Under **Issue Type**, select one of the following:
      - If you select **Epic**, choose the stories for which you want to generate test cases.
      - If you select **Story**, choose all the stories for which you want to generate test cases.
  
     ![Jira Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_1.png)

5. In the **Add Jira Tickets** dialog, click **Files** from the **ADD FILES** menu. 
   ![Files](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_2.png)

6. In the **Files Upload** dialog:
   - Click **Add Files**. 
   - Click **Browse**, and select one or more supported files.
   - Click **Add Files**.
   - Click **Save**. 
     
     ![Files Input](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_3.png)

7. In the Prompt box, enter a detailed prompt that describes test cases want to generate.
![Prompt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_4.png)

8. The **Read existing test case library** checkbox is selected by default. Clear this checkbox if you do not want the system to consider existing test cases while generating new ones.
![Reac Existing test case library](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_5.png)

[[info | **NOTE**:]]
| - Once the **Read existing test case library** option is enabled, it cannot be unselected during the same session. The selection remains applicable throughout the session. However, you can enable this option at any time during a session if it was not selected earlier.

9. Click **Generate with AI**.
   ![Prompt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_6.png)

10.  Wait for Generator Agent to generate multiple test cases are generated based on the selected inputs. 

---

## **Next Steps** 

1. After the test cases are generated, expand a category and select a test case.
   ![Select a test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_1.1.png)

2. In the **Test Case Details** dialog, go to the **Manual Steps** tab and review the generated steps.
   ![Manual Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_7.png)

3. Click **Edit** to manually add a step or block, or to modify existing steps.
   ![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_8.png)

4. If you want to refine the steps using **Atto**, enter a prompt and click **Refine manual steps**.
   ![Refine Manual Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_9.png)

5. Click **Generate Automated Steps** to convert the manual steps into NLP-based automated steps.
   ![Generate Automated Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_10.png)

6. To execute the test before saving, hover over **Run with Copilot** and select the environment where you want to run the test steps. Copilot executes the steps automatically. Review the results to ensure everything works as expected, then click **Save to Library** to save the test case to your project. ![Run with Copilot](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_11.png)

7. To save the test directly, click **Save to Library**. In the **Select Location** dialog box, expand the required **Feature** and select the **Scenario** where you want to save the automated test case. ![Save to Library](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/atto_web_12.png)

[[info | **NOTE**:]]
| - To learn about **Agentic Learning**, please refer to the [documentation on Generator Agent](https://testsigma.com/docs/ai-agents/generator/).
| - To understand the difference between **Run with Copilot** and **Agentic Learning**, please refer to the [documentation on Run with Copilot vs Agentic Learning](http://testsigma.com/docs/atto/generative-ai/copilot/agentic-learning-vs-copilot/). 

---