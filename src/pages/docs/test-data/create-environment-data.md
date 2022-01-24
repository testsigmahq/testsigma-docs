---
title: "Create Test Data - Environment"
metadesc: "How to create and use environment-specific test data in Testsigma"
order: 5.23
page_id: "Create Test Data - Environment"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "When to Use"
  url: "#when-to-use"
- type: link
  name: "How to create and use environment-specific test data in Testsigma"
  url: "#how-to-create-and-use-environment-specific-test-data-in-testsigma"
- type: link
  name: "How to use this Environment based Test Data in your Test Case"
  url: "#how-to-use-this-environment-based-test-data-in-your-test-case"
- type: link
  name: "Prerequisite"
  url: "#prerequisite"
---
---

This article will describe how to create environment-specific test data in Testsigma.
---

## **When to Use:**

When you have multiple testing environments and you need to use different test data, depending on what environment your test is executing on. For example, if your test is executing on staging as well as QA environments, then you can use two separate test data sets for both these environments.

---

## **How to create and use environment-specific test data in Testsigma:**


  1. Navigate to Test Development > Environments and click on the create button on the top right. Also highlighted in the screenshot below:
  
     ![ create button on the environments page in Testsigma](https://docs.testsigma.com/images/create-environment-data/create-button-environments-page.png)

  2. When you click on the create button, this form appears:

     ![ create environments form in Testsigma](https://docs.testsigma.com/images/create-environment-data/create-environments-form.png)
  
  Here, you create an environment and you add the Parameter names and values that will be specific to this environment.

Below are the fields you see on this form:

1. **Name:** Name of the environment
2. **Description:** Description for your environment
3. **Parameter Name, Parameter Value:** Here you mention the name for a parameter that would be specific to this environment and its corresponding value. Here, when you enter the values for one key-value pair, the text fields for adding another will automatically appear. Thus, you can add as many key-value pairs as needed. If you prefer, you can also add these values in the json format, you just need to select the tab labeled ‘JSON Format’ (also highlighted in the screenshot below) 

   ![json format tab to display environment parameters in json format in Testsigma](https://docs.testsigma.com/images/create-environment-data/json-format-tab-environment-parameters.png)

Once you have added all the values, you can click on the ‘create’ button on the top right to finalize the changes.

Similarly, you can go to an already existing environment on the Test Environments page and edit it to add more environment-specific test data.

Alternatively, below is a quick gif to demonstrate the workflow for creating environment-specific test data.

   ![gif demonstrating how to fill up the create environments form](https://docs.testsigma.com/images/create-environment-data/create-environment-form-fillup-gif.gif)
---

## **How to use this Environment based Test Data in your Test Case**

To know more, refer to [Environment-specific test data](https://testsigma.com/docs/test-data/types/environment/).
---

## **Prerequisite:**
---

## You should know how to:

1.  [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

2.  [write NLP test steps in Testsigma](https://testsigma.com/docs/test-cases/step-types/natural-language/).

&emsp;
1. Navigate to Test Development > Test Case.
2. Create a test case.
3. Create a test step with a test data placeholder in the NLP. 
4. Delete the test data placeholder and choose Environment from the drop-down.
5. Now choose the specific test data you need from the right-side panel.

Here is a gif that demonstrates the above workflow:

 ![ a gif demonstrating the use of environment based test data in test case](https://docs.testsigma.com/images/create-environment-data/gif-use-environment-based-test-data-in-test-case.gif)
