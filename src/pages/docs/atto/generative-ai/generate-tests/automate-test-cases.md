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

2. Click **Generate with AI**.
   ![Generate with AI](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_req_1.png)

3. Wait for **Generator Agent** to generate multiple test cases. 

4. After the test cases are generated, expand a category and click on a test case.
   ![test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_req_2.png)

5. In the **Test Case Details** dialog, go to the **Manual Steps** tab and review the generated steps.
   ![Manual steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_req_3.png)

6. Click **Edit** to add a step or block manually, or to modify existing steps.
   ![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_req_4.png)

7. If you want to refine the steps using **Atto**, enter a prompt and click **Refine manual steps**.
   ![Refine manual steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_req_5.png)

8. Click **Generate Automated Steps** to convert the manual steps into NLP-based automated steps.
   ![Generate Automated steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_req_6.png)

9.  Click **Accept** to save the test case. You can then view it in your **Test Case Explorer**. 
    ![Accept](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/next_steps_req_7.png)

---

## **Manage Updated Test Cases**

When you generate automated test cases, Atto checks for existing test cases. If a test case already exists, Atto updates it instead of creating a new one.

After the test cases are generated, expand a scenario and select a test case. Updated test cases are marked with the **Update** tag.

![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/updated_test_cases_1.png)

When you open an updated test case, the **Test Case Details** dialog appears.

Click **See What’s New** to compare the previous steps with the newly generated steps. 

![See What's New](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/updated_test_cases_2.png)

Select **Hide Difference** to close the comparison. 

![Hide Difference](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/updated_test_cases_3.png)

---