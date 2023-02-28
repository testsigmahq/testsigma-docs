---
title: "API Request"
page_title: "Add API Request in RESTful API in Testsigma"
metadesc: "Add API Request in RESTful API"
noindex: false
order: 4.62
page_id: "Add API Request in RESTful API"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Setting URLs Request"
  url: "#setting-urls-request"
- type: link
  name: "Selecting Method Request"
  url: "#selecting-method-request"
- type: link
  name: "Supporting Other Unicode Characters"
  url: "#supporting-other-unicode-characters"
---

---

If you have a request you want to run, you will need to know the **URL**, **method**, and other optional values such as **parameters**, **body**, **headers**, and **authorization**.

We are using a sample API endpoint, https://jsonplaceholder.typicode.com/get/, and the method **/get**, then select **Send**.

---

## **Setting URLs Request**

Using request URLs in a Restful API allows you to control which URLs are sent to the server when your request is a resource. Testsigma requires an **API endpoint URL** for each request. Each operation you can perform using an API is typically associated with an endpoint.

1. The URL will typically be the base location plus the path. For example, in the request, https://jsonplaceholder.typicode.com/get/,  https://jsonplaceholder.typicode.com/, is the **base URL**, and **/get** is the **endpoint path**. ![Setting URL endpoint](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/settingurls_restapi.png)

2. In a **parameterized URL**, you can **insert test data** by double-clicking on the URL and selecting the **test data type**. For example, https://@reqes.in/api/users?page=@page is the base URL,**?page=page** is a parameter, and **@reqes** and **@page** are **test data types** inserted in the URL. Select the method; by default, it will be **GET**. Click **Send**. ![insert test data in url](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/settingurl_testdata_restapi.gif)

[[info | NOTE:]]
| To know what test data types are, refer to [Test Data Types](https://website.testsigma.com/docs/test-data/types/overview/) for more information.

---

## **Selecting Method Request**

By Default, Testsigma will select the **GET** method for new requests. **GET** methods are typically used for retrieving data from an API. You can use a variety of other methods to send data to your APIs by clicking the drop-down menu, including the following options:<br>
- **POST** - Add new data.<br>
- **PUT** - Replace existing data.<br>
- **PATCH** - Update some existing data fields.<br>
- **DELETE** - Delete existing data. ![Method request](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/selectingmethods_restapi.png)
 
---

## **Supporting Other Unicode Characters**

In Testsigma, we support Unicode characters in various aspects of testing, such as [parameters](https://testsigma.com/docs/test-cases/create-steps-restapi/adding-parameters/), [request body data](https://testsigma.com/docs/test-cases/create-steps-restapi/add-body-data/), [verifications](https://testsigma.com/docs/test-cases/create-steps-restapi/verifications-request/), [stored variables](https://testsigma.com/docs/test-cases/create-steps-restapi/store-variables/), and [stored objects](https://testsigma.com/docs/test-cases/create-steps-restapi/stored-objects/). This enables you to enter and retrieve data in your native language and script, making the testing process more user-friendly and accessible. Moreover, adding Unicode characters to verifications ensures the verification process accurately represents the tested data.

Here is a quick gif demonstrating how to add Unicode in RESTful API.
![Unicode in Restful API](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/Unicode.gif)

[[info | NOTE:]]
| To enter Unicode characters, copy & paste the characters into the required field.

---