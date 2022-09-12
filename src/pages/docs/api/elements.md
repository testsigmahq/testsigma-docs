---
title: "Manage Elements using REST API"
page_title: "Manage Elements using REST API in Testsigma"
metadesc: "How to use Testsigma Elements API to manage Elements within Testsigma"
noindex: false
order: 21.3
page_id: "Manage Elements using REST API"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Element parameters"
  url: "#element-parameters"
- type: link
  name: "API Specification"
  url: "#api-specification"
---

---

[[info | NOTE:]]
| You need to authenticate these requests with your Testsigma API Key.  See  [How to generate API Keys.](https://testsigma.com/docs/configuration/api-keys/)

---
##**Element parameters**

Before we check the actual requests, let’s go through some Element properties that you will find in the Request and Response

- **name:** Name of the Element to be created

- **locatorType:** Either one of ‘xpath’, ‘css selector’, ‘linktext’, ‘classname’, ‘tagname’, ‘name’, or ‘ID’

- **definition:** The locator definition for the Element

- **createdBy:** The User ID of the creator

-  **Status:** Status of the Element in Element Review Management. Either ‘Ready’, ‘Draft’

- **screenName:** ID of the screen name

- **applicationVersionId:** ID of Version where the Element is to be created

- **createdType:** Creation Mode of the Element. Either ‘Chrome’, ‘Advanced’, or ‘Manual’

---
##**API Specification**

### **Get Elements**

Get all the available elements in the Project
- Request Type: GET
- Endpoint: https://app.testsigma.com/api/v1/ui_identifiers
- Authorization: Bearer <API_Token>



### **Get an Element**
Get a specific element in the Project by Element Id
- Request Type: GET
- Endpoint: https://app.testsigma.com/api/v1/ui_identifiers/<ELEMENT_ID>
- Authorization: Bearer <API_Token>

<ELEMENT_ID> is the id of the specific element you want to fetch.



### **Create Element**
Create a new Element

- Request Type: POST
- Endpoint: https://app.testsigma.com/api/v1/ui_identifiers
- Authorization: Bearer <API_Token>

Request Body:

{	

&emsp;&emsp;&emsp;"name": "TestUIID",

&emsp;&emsp;&emsp;"locatorType": "xpath",

&emsp;&emsp;&emsp;"definition" : "//test/div",

&emsp;&emsp;&emsp;"createdBy": "USED\_ID",

&emsp;&emsp;&emsp;"status": "READY",

&emsp;&emsp;&emsp;"screenNameId": "<SCREEN\_NAME\_ID>",

&emsp;&emsp;&emsp;"applicationVersionId": "<VERSION\_ID>",

&emsp;&emsp;&emsp;"createdType": "CHROME"

}



### **Update Element**
Update the details regarding an existing element

- Request Type: PUT
- Endpoint: https://app.testsigma.com/api/v1/ui_identifiers/<Element_ID>
- Authorization: Bearer <API_Token>

Request Body:

{

&emsp;&emsp;&emsp;"name": "TestUIID",

&emsp;&emsp;&emsp;"locatorType": "xpath",

&emsp;&emsp;&emsp;"definition" : "//test/div",

&emsp;&emsp;&emsp;"createdBy": "USED\_ID",

&emsp;&emsp;&emsp;"status": "READY",

&emsp;&emsp;&emsp;"screenNameId": "<SCREEN\_NAME\_ID>",

&emsp;&emsp;&emsp;"applicationVersionId": "<VERSION\_ID>",

&emsp;&emsp;&emsp;"createdType": "CHROME"

}
