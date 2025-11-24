---
title: "Generate Test Cases for Salesforce"
page_title: "Generate Test Cases for Salesforce"
metadesc: "Automatically generate test cases for Salesforce using GenAI | Generate test using Salesforce Flows, Workflows, or Jira requirements using simple prompts"
noindex: false
order: 4.7424
page_id: "generate-test-cases-for-salesforce"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Generate Test Cases for Salesforce"
  url: "#generate-test-cases-for-salesforce"
- type: link
  name: "Generate Test Cases for Salesforce Flows"
  url: "#generate-test-cases-for-salesforce-flows"
- type: link
  name: "Refining Test Steps with AI"
  url: "#refining-test-steps-with-ai"
---

---

You can quickly generate test cases for Salesforce requirements in Testsigma using GenAI. This feature allows you to import Epics or Stories from your Jira project and generate test cases using simple prompts. This article discusses generating test cases for Salesforce using Jira stories & prompts in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure your Salesforce instance contains active Flows or Workflows and is connected to Testsigma.

---

## **Generate Test Cases for Salesforce**

1. From the left navigation bar, go to **Atto’s Home** and click **Generate with AI**.

2. On the **Generate Test Cases** page, click **Jira Requirements**. 

3. In the **Add Jira Tickets** dialog, 
   - From the **Jira Project** dropdown, select a project.
   - Under **Issue Type**, select either **Epic** or **Story**:
      - If you select **Epic**, choose the stories under that epic.
      - If you select **Story**, choose the stories you want to generate test cases for.
   - Select the stories/epics for which you want to generate test cases and click **Save**.
     
     ![Story Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/sf_3.png)
     
4. In the Prompt box, enter a detailed prompt that describes test cases want to generate.

5. Click **Generate with AI**.

6. Wait for **Generator Agent** to generate the test cases based on the selected stories and prompt.

7. After the test cases are generated, expand a category and select a test case.

8. In the **Test Case Details** dialog, go to the **Manual Steps** tab and review the generated steps.

9. Click **Edit** to manually add a step or block, or to modify existing steps.

10. If you want to refine the steps using **Atto**, enter a prompt and click **Refine manual steps**.

11. Click **Generate Automated Steps** to convert the manual steps into NLP-based automated steps.

12. Click **Accept** to save the test case.

13. Repeat steps 7–12 for all the test cases you want to add.

---

## **Generate Test Cases for Salesforce Flows**

1. From the left navigation bar, go to **Atto’s Home** and click **Generate with AI**.

2. On the **Generate Test Cases** page, click **SF Flows**. 

3. In the **SF Flows** dialog, 
      - Select the **Flow** or **Workflow** tab.
      - Select the flows you want to generate test cases for, and click **Save**.

        ![Flows]((https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/sf_1.png))

4. In the prompt box, enter a prompt, and click **Generate with AI**.

5. Wait for Atto to generate the test cases.

6. After the test cases are generated, expand a category and select a test case.

7. In the **Test Case Details** dialog, go to the **Manual Steps** tab and review the generated steps.

8. Click **Edit** to manually add a step or block, or to modify existing steps.

9. If you want to refine the steps using **Atto**, enter a prompt and click **Refine manual steps**.

10. Click **Generate Automated Steps** to convert the manual steps into NLP-based automated steps.

11. Click **Accept** to save the test case.
    
12. Repeat steps 6–11 for all the test cases you want to add.
 
---