---
title: "Generate Test Cases for SOAP and REST APIs Using Atto"
page_title: "generate-test-cases-for-soap-and-rest-apis-using-atto"
metadesc: "Learn how Atto in Testsigma generates test cases for SOAP and REST APIs using .wsdl, .xml, or .json schemas."
noindex: false
order: 4.7427
page_id: "api-test-cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Generate Test Cases for REST API Using Atto"
  url: "#steps-to-generate-test-cases-for-rest-api-using-atto"
- type: link
  name: "Steps to Generate Test Cases for SOAP API Using Atto"
  url: "#steps-to-generate-test-cases-for-soap-api-using-atto"
---

---

In Testsigma, **Atto** simplifies API testing by automatically generating test cases for both SOAP and REST APIs directly from your API schema. This helps streamline test creation by automatically converting **.wsdl**, **.xml**, or **.json** API schema files into structured test cases. This article discusses generating test cases for SOAP and REST APIs using **Atto**. 

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that
>
> 1. You have enabled the **Generate test cases from Swagger schema** option under **Settings > Preferences > Generative AI features**.
>
> 2. You must have the API schema file in the following supported formats - **.json** for REST APIs and **.wsdl** or **.xml** for SOAP APIs.

📥 Click <a href="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Sample_Swagger_File.json" rel="nofollow">here</a> to download a sample **Swagger JSON** file.

📥 Click <a href="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/Sample_XML_File.xml" rel="nofollow">here</a> to download a sample **XML** file.

[[info | **NOTE**:]]
| - The XML sample provided here opens in the browser by default. To download it, right-click on the page and select **Save As**.

---

## **Steps to Generate Test Cases for REST API Using Atto**

1. From the left navigation bar, go to **Create Tests > Test Cases**. 
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_1.png)

2. In the **Test Case Explorer** section, click **Atto** and select **Generate Test Cases from API Schema**. 
   ![Generate Test Cases from API schema](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_2.1.png)

3. In the **Add API Schema** screen, click **Select file to import** and import your .json API schema file from your local system.
   ![Select file to import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_3.png) 

[[info | **NOTE**:]]
| - Testsigma **Atto** uses tags in the Swagger Schema file to arrange endpoints into test cases. Ensure each endpoint is associated with one or more tags before importing the file.

4. In the **Available Test Cases** section, select the test cases you want to generate and click **Generate**.
   ![Generate](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/REST_API_1.png)

5. Wait for **Atto** to analyze the schema and generate test cases.

6. In the **Test Steps** panel, review the generated API test steps. 
   ![Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/REST_API_2.1.png)

7. In the **Verification Details** panel, validate the endpoint, body verification, and status verification, and click **Save Test Cases**.
   ![Save Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/REST_API_2.png)

8. You’ll be redirected to the **Test Cases** page, where the generated test cases appear under **AI Generated Feature & Scenario**.

---

## **Steps to Generate Test Cases for SOAP API Using Atto**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_1.png) 

2. In the **Test Case Explorer** section, click **Atto** and select **Generate Test Cases from API Schema**.
   ![Generate Test Cases from API schema](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_2.1.png)

3. In the **Add API Schema** screen, click **Select file to import** and import your .xml or .wsdl API schema file from your local system. 
   ![Select file to import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_3.png) 

4. Click **Generate** and wait for **Atto** to analyze the schema and generate test cases.
   ![Generate](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_4.png)

5. In the **Selected Test Cases** panel, view all the test cases generated from the API schema.
   ![Selected test cases panel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_5.png)

[[info | **NOTE**:]]
| - All generated test cases are selected by default. To exclude specific test cases, clear the checkbox next to the required test cases.
| ![Unselected](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_6.png)

6. Click a required test case to view its test steps in the **Test Steps** panel.
   ![Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_7.png)

7. In the **Verification Details** panel, validate the endpoint, body verification, status verification, and request body.
   ![Verification Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_8.png)
   
8. Click **Save Test Cases** to add the selected test cases to your project.
   ![Save test cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/SOAP_API_9.png)

9.  You’ll be redirected to the **Test Cases** page, where the generated test cases appear under **AI Generated Feature & Scenario**.

---
