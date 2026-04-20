---
title: "Automate Test Cases"
page_title: "Automate Test Cases"
metadesc: "Atto generates detailed test cases from your requirements, creates NLP-based automated steps, and integrates existing scenarios seamlessly."
noindex: false
order: 4.7422
page_id: "automate-test-cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Generate Automated Test Cases"
  url: "#steps-to-generate-automated-test-cases"
- type: link
  name: "Manage Updated Test Cases"
  url: "#manage-updated-test-cases"
---

---

Atto processes your requirements and prompts to generate detailed test cases and create NLP-based automated steps. It also ensures that any existing scenarios are seamlessly incorporated into the output. This article discusses how to generate automated test cases and manage the updated test cases. 

---

> ## **Prerequisites**
> Before you begin, ensure that you have referred to the [documentation on adding the requirements](https://testsigma.com/docs/atto/generative-ai/generate-tests/requirements/).

---

## **Steps to Generate Automated Test Cases**

1. After adding the required requirements, enter a clear and descriptive prompt in the Prompt box to generate the test cases.
![Enter a Prompt](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_1.png)

2. The **Read existing test case library** checkbox is selected by default. Clear this checkbox if you do not want the system to consider existing test cases while generating new ones.
![Read Existing Test Case Library](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_2.png)

[[info | **NOTE**:]]
| - Once the **Read existing test case library** option is enabled, it cannot be unselected during the same session. The selection remains applicable throughout the session. However, you can enable this option at any time during a session if it was not selected earlier.

3. Click **Generate with AI**.
![Generate with AI](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_3.png)

4. Wait for the **Generator Agent** to generate multiple test cases.

5. After the test cases are generated, expand a category and click on a test case.
![Test Case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_4.png)

6. In the **Test Case Details** dialog, go to the **Manual Steps** tab and review the generated steps.
![Manual Steps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_5.png)

7. Click **Edit** to add a step or block manually, or to modify existing steps.
![Edit](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_6.png)

8. If you want to refine the steps using **Atto**, enter a prompt and click **Refine manual steps**.
![Refine Manual Steps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_7.png)

9. Click **Generate Automated Steps** to convert the manual steps into NLP-based automated steps.
![Generate Automated Steps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_8.png)

10. To execute the test before saving, hover over **Run with Copilot** and select the environment where you want to run the test steps. Copilot executes the steps automatically. Review the results to ensure everything works as expected, then click **Save to Library** to save the test case to your project. 
![Run with Copilot](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_9.png)

11. To save the test directly, click **Save to Library**. In the **Select Location** dialog box, expand the required **Feature** and select the **Scenario** where you want to save the automated test case.
![Save to Library](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_10.png)

---

## **Manage Updated Test Cases**

When you generate automated test cases, Atto checks for existing test cases. If a test case already exists, Atto updates it instead of creating a new one.

1. After the test cases are generated, expand a scenario and select a test case. Updated test cases are marked with the **Update** tag.
![Update](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_11.png)

2. When you open an updated test case, the **Test Case Details** dialog appears.

3. Click **See What’s New** to compare the previous steps with the newly generated steps. 
![See What's New](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_12.png)

4. Select **Hide Difference** to close the comparison. 
![Hide Difference](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Atto_automate_update_13.png)

5. Click **Generate Automated Steps**. 
![Generated automated steps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_updated_test_case_atto_1.png)

6. Once generated, when you click **Save to Library**, the **Overwrite Test Case** dialog opens. 
![Save to Library](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_update_test_case_atto_2.png)

7. In the **Overwrite Test Case** dialog, do one of the following:
   - To replace the existing test case with the new version, select **Overwrite**.
   - To save the test case as a new copy and keep the existing version, select **Save as New**.
   - To review the existing test case before saving, select **Link to original test case**.
   ![Overwrite Test Case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_updated_test_case_atto_3.png)

[[info | **NOTE**:]]
| - To learn about **Agentic Learning**, please refer to the [documentation on Generator Agent](https://testsigma.com/docs/ai-agents/generator/).
| - To understand the difference between **Run with Copilot** and **Agentic Learning**, please refer to the [documentation on Run with Copilot vs Agentic Learning](http://testsigma.com/docs/atto/generative-ai/copilot/agentic-learning-vs-copilot/). 

---
