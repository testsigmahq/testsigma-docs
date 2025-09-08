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

3. In the **Jira Requirements** modal dialog, 
   - From the **Jira Project** dropdown, select a project.
   - Under **Issue Type**, select either **Epic** or **Story**:
      - If you select **Epic**, choose the stories under that epic.
      - If you select **Story**, choose the stories you want to generate test cases for.
   - Select the stories/epics for which you want to generate test cases and click **Add to Input**.
     
     ![Story Inputs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Jira_Stories_Input_SF.png)
     
4. In the Prompt box, enter a detailed prompt that describes test cases want to generate.

5. Click **Generate**.

6. Wait for **Generator Agent** to generate the test cases based on the selected stories and prompt.

7. Click a test case to open it. 

8. In the **Test Case Details** overlay, review the manual test steps.

9. Click **Generate NLPs** to convert the manual steps to NLP-based steps.

[[info | **NOTE**:]]
| You can add or remove test steps by clicking Edit.

9. Click **Accept** to save the test case.

10. Repeat steps 6–9 for all the test cases you want to add.

---

## **Generate Test Cases for Salesforce Flows**

1. From the left navigation bar, go to **Atto’s Home** and click **Generate with AI**.

2. On the **Generate Test Cases** page, click **SF Flows**. 

3. In the **Add SF Flows** modal dialog, 
      - Select the **Flow** or **Workflow** tab.
      - Select the flows you want to generate test cases for, and click **Add to Input**.

        ![Flows](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/SF_Flows_Input.png)

4. In the prompt box, enter a prompt, and click **Generate**.

5. Wait for Atto to generate the test cases.

6. Click a test case to open it. 

7. In the **Test Case Details** overlay, review the manual test steps.

8.  Click **Generate NLPs** to convert the manual steps to NLP-based steps.
    ![NLP Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Generate_SF_NLPs.png)

[[info | **NOTE**:]]
| You can add or remove test steps by clicking Edit.

9.  Click **Accept** to save the test case.
    ![NLP Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Generated_NLPs_SF.png)

10.  Repeat steps 7–10 for all the test cases you want to add.

---

## **Refining Test Steps with AI**

1. In the **Test Case Details** overlay, click **Refine with AI** to enable **Refine Mode**. 

2. In the prompt box, enter a prompt to update the manual test steps, and click **Refine**.
   ![Refine Test](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Refine_SF_Test.png)
   
3. Wait for Atto to refine the test steps.

4. Click Save to save the refined steps.

5. To convert refined steps to NLP-based steps, click **Generate NLPs**. 

6. Repeat steps 7–10 from the above section for all the test cases you want to add.
 
---