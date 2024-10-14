---
title: "Testing API Responses with Custom Values"
page_title: "Sending Custom Variable Values While Creating API Steps"
metadesc: "Learn how to send custom values and experiment with the different types of test data | Testsigma allows you give inputs while testing an API responses in Testsigma"
noindex: false
order: 4.993
page_id: "Send Custom Variables in API Steps"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Send Custom Variables in API Steps"
  url: "#steps-to-send-custom-variables-in-api-steps"
---

---

The goal of sending custom values while creating API steps is to ensure that all input sources are accurately parsed while testing API responses as you send the request. This allows you to experiment with the data and make necessary changes while designing API tests. 

With Testsigma, you can choose default and custom values for various variables such as parameters, runtime, environment, random data generators, phone numbers, and mailboxes and verify responses. This article discusses providing custom test data inputs while creating API steps.


---

> ## **Prerequisites**
>
> - You should know how to [create a Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case). 
> 
> - You should know how to [add Rest API in the test steps](https://testsigma.com/docs/test-cases/step-types/rest-api/#add-restful-api-in-test-steps).

---

## **Steps to Send Custom Variables in API Steps**

1. From the left-side navbar, select **Create Tests > Test Cases** and then click **Create Test Case**.

2. On the **Test Case Details** page, click the option next to the test step and select **Rest API**.

3. Click on the test step to open the **Rest API** window.

4. Enter the **Title**, choose the **Method**, and enter the **Endpoint**.

5. Select the data you want to parametrize and click **Insert Test Data**.

6. Choose the test data type you want to add (e.g., **@Parameter**).

7. Click **Add Request Values**. The **Request values** overlay will open. 

8. In the **Request Values** overlay, click **URL**, add the value to the parameter in the **URL**, and click **Apply**.

9. Click **Send** and verify the response received from the API.


Here’s a quick GIF demonstrating an example of sending custom variable values in API Steps. 

![Custom Variable Values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/MockAPI.gif)

---