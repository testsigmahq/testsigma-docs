---
title: "Generate API Test Cases (Swagger)"
page_title: "Generate API Test Cases Using Swagger Schema"
metadesc: "In Testsigma, you can create test cases from swagger schema files | Learn how to create API test cases from Swagger using GenAI capabilities"
noindex: false
order: 31.5
page_id: "Generate Tests from Swagger Schema"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Generate Test Cases from Swagger"
  url: "#steps-to-generate-test-cases-from-swagger"
---

---

With Testsigma, you can now generate API test cases effortlessly by importing Swagger JSON schema files. Simply organize tags for endpoints in the Swagger JSON file, upload the file, and click once to create multiple test cases. This article discusses generating API test cases from Swagger schema files using Testsigma's GenAI capabilities.

---

> ## **Prerequisites**
> 
> Before you begin, enable AI Features from **Settings > Preferences > Generative AI features**, and have a **Swagger JSON file** with tags arranged for endpoints.


📥 Click [here](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Sample_Swagger_File.json) to download a sample **Swagger JSON** file.


---

## **Steps to Generate Test Cases from Swagger**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Click **Copilot**, and then select **Generate from Swagger Schema** from the dropdown menu.

3. On the **Swagger Schema based API Test Case Generation** dialog, click **Select file to import**. 

4. Choose the file and click **Open**.

   [[info | **NOTE**:]]
   | Testsigma Copilot uses tags in the Swagger Schema file to arrange endpoints into test cases. Ensure each endpoint is associated with one or more tags before importing the file.

5. In the **Available Test Cases** section, select the test cases you want to generate and click **Generate**.

6. Wait for Testsigma to generate the test cases along with the test steps.

7. From the left panel, select all the test cases you want to include, review the API test steps, validate them, and click **Save Test Cases**.

4. You’ll be redirected to the **Test Cases** page, where the generated test cases appear under the **AI Generated Feature & Scenario**.

---