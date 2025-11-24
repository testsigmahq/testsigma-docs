---
title: "Generate Test Cases For Web & Mobile Web"
page_title: "Generate Test Cases For Web & Mobile Web"
metadesc: "Generate tests for web & mobile web applications using Testsigma’s GenAI. You can provide input from multiple sources, including Jira, Figma, Xray, videos, & files"
noindex: false
order: 4.7422
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
> Before you begin, make sure your Jira account is integrated with Testsigma.

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
  
     ![Jira Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/ai_agents/add_files_1.png)

5. In the **Add Jira Tickets** dialog, click **Files** from the **ADD FILES** menu. 
   ![Files](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/ai_agents/add_files_3.png)

6. In the **Files Upload** dialog:
   - Click **Add Files**. 
   - Click **Browse**, and select one or more supported files.
   - Click **Add Files**.
   - Click **Save**. 
     
     ![Files Input](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/ai_agents/add_files_4.png)

7. In the Prompt box, enter a detailed prompt that describes test cases want to generate and click **Generate with AI**.
   ![Prompt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/ai_agents/add_files_5.png)

8.  Wait for Generator Agent to generate multiple test cases are generated based on the selected inputs. 

---

## **Next Steps** 

1. After the test cases are generated, expand a category and select a test case.

2. In the **Test Case Details** dialog, go to the **Manual Steps** tab and review the generated steps.
   ![Manual Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_1.png)

3. Click **Edit** to manually add a step or block, or to modify existing steps.
   ![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_2.png)

4. If you want to refine the steps using **Atto**, enter a prompt and click **Refine manual steps**.
   ![Refine Manual Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_3.png)

5. Click **Generate Automated Steps** to convert the manual steps into NLP-based automated steps.
   ![Generate Automated Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_4.png)

6. Click **Accept**.
   ![Accept](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_5.png)

---