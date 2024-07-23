---
title: "Mock API Support in Testsigma"
page_title: "Mock API Support in Testsigma"
metadesc: "Learn how to handle mock APIs and experiment with the different types of test data | Testsigma allows you give inputs while mocking an API in Testsigma"
noindex: false
order: 4.993
page_id: "Mock APIs"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Adding Various Inputs for Mock APIs"
  url: "#adding-various-inputs-for-mock-apis"
---

---

The goal of mocking an API is to ensure that users can experiment with the data before authoring the API step. With Testsigma, users can select default and custom values associated with each key for various variables, such as parameters, runtime, environment, random data generator, phone number, and mailbox, and verify responses.

This article discusses providing test data inputs while mocking an API in Testsigma. 

---

> ## **Prerequisites**
>
> - You should know how to [create a Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case). 
> 
> - You should know how to [add Rest API in the test steps](https://testsigma.com/docs/test-cases/step-types/rest-api/#add-restful-api-in-test-steps).

---

## **Adding Various Inputs for Mock APIs**

1. From the left-side navbar, select **Create Tests > Test Cases** and then click **Create Test Case**.

2. On the **Test Case Details** page, click the option next to the test step and select **Rest API**.

3. Click on the test step to open the **Rest API** window.

4. Enter the **Title**, choose the **Method**, and enter the **Endpoint**.

5. Select the data you want to parametrize and click **Insert Test Data**.

6. Choose the test data type you want to add (e.g., **@Parameter**).

7. Click **Add Request Values**. The **Request values** overlay will open. 

8. In the **Request Values** overlay, click **URL**, add the value to the parameter in the **URL**, and click **Apply**.

9. Click **Send** and verify the response received from the API.


Here’s a quick GIF demonstrating an example of adding an input for mocking API. 

![Mock APIs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/MockAPI.gif)

---