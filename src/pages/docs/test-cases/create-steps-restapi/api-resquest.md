---
title: "API Request"
page_title: "Add API Request in RESTful API in Testsigma"
metadesc: "Configuring API test steps made easy with Testsigma low code automation tool | Learn how to add API test steps to your Test Cases in Testsigma"
noindex: false
order: 4.92
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
- type: link
  name: "Invoke SOAP APIs"
  url: "#invoke-soap-apis"
---

---

If you have a request you want to run, you will need to know the **URL**, **method**, and other optional values such as **parameters**, **body**, **headers**, and **authorization**.

---

## **Setting URLs Request**

Using request URLs in a Restful API allows you to control which URLs are sent to the server when your request is a resource. Testsigma requires an **API endpoint URL** for each request. Each operation you can perform using an API is typically associated with an endpoint.

1. The URL will typically be the base location plus the path. For example, if you take the base **URL**  https://jsonplaceholder.typicode.com/, if you add **/get** to it, it will be the **endpoint path**. ![Setting URL endpoint](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/settingurls_restapi.png)

2. In a **parameterized URL**, you can **insert test data** by double-clicking on the URL and selecting the **test data type**. For example, https://@reqes.in/api/users?page=@page is the base URL,**?page=page** is a parameter, and **@reqes** and **@page** are **test data types** inserted in the URL. Select the method; by default, it will be **GET**. Click **Send**. ![insert test data in url](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/settingurl_testdata_restapi.gif)

[[info | NOTE:]]
|To know what test data types are, refer to [Test Data Types](https://website.testsigma.com/docs/test-data/types/overview/) for more information.

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

## **Invoke SOAP APIs**

In Testsigma, users can invoke SOAP APIs by adding an API test step in the test case. Follow the steps below to create SOAP APIs in test steps.

### **Steps to Invoke SOAP APIs**

<details style="border: 1px solid gray; border-radius: 4px; padding: 0.5em; margin: 0.5em 0; background-color: #f2f2f2;">
  <summary style="color: darkgreen; font-weight: bold; list-style: none; font-size: 1em; cursor: pointer;" onclick="if(this.parentNode.open) this.parentNode.style.border='1px solid gray'; else this.parentNode.style.border='none';">
    <span style="margin-right: 5px;">📘</span>Click here to read an example SOAP API:
  </summary><br>
  Let's retrieve a list of countries using SOAP API.
  <br><br>
    🔍  <b>Request Configuration:</b><br>
  <ul style="font-size: .8em;">
    <li><b>Type:</b> POST</li>
    <li><b>Endpoint:</b> http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso</li>
  </ul>
  
  <br>
   📝  <b>Request Body (XML):</b><br>
  <div style="position: relative;">
    <pre style="white-space: pre-wrap; font-size: .8em;"><code id="xmlCode">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"&gt;
  &lt;soap12:Body&gt;
    &lt;ListOfCountryNamesByName xmlns="http://www.oorsprong.org/websamples.countryinfo"&gt;
    &lt;/ListOfCountryNamesByName&gt;
  &lt;/soap12:Body&gt;
&lt;/soap12:Envelope&gt;</code></pre>
  </div>

  <br>
   🔑  <b>Headers:</b><br>
  <ul style="font-size: .8em;">
    <li><b>Key:</b> content-type</li>
    <li><b>Value:</b> text/xml; charset=utf-8</li>
  </ul>
</details>

<script>
function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(copyText);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();
  alert('XML code copied to clipboard!');
}
</script>


<br>

1. Enter the above example details in the API test step. 
![API Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sapidetails.png)

   *For more information, refer to [API test steps](https://testsigma.com/docs/test-cases/step-types/rest-api/).*

1. Click on **Send** and verify the **Response**. 
![Send Request](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sapisend.png)


3. Click on **Create** to save the test step. 
![Create API](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sapicreate.png)


---