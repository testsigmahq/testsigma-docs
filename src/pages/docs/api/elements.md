---
title: "Manage Elements using REST API"
page_title: "Manage Elements using REST API in Testsigma"
metadesc: "How to use Testsigma Elements API to manage Elements within Testsigma | Learn about Element parameters, API Specification, and how to create element using API"
noindex: false
order: 21.3
page_id: "Manage Elements using REST API"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Element parameters"
  url: "#element-parameters"
- type: link
  name: "API Specification"
  url: "#api-specification"
---

---

Testsigma allows you to create and update elements using REST APIs. This article explains how to manage elements using APIs in Testsigma.

---

> ## **Prerequisites**
>
> Before you begin, ensure you have an [API Key](https://testsigma.com/docs/configuration/api-keys/) from Testsigma application.

---

## **Element parameters**

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

## **API Specification**

### **Get Elements**

This endpoint retrieves all the available elements in the Project. 

| **Request Type**  | **GET**  |
|-------------------|---------|
| **Endpoint**      | `https://app.testsigma.com/api/v1/ui_identifiers` |
| **Authorization** | Bearer `<API_Token>` |



### **Get an Element**
This endpoint retrieves a specific element in the Project by Element ID. 

| **Request Type**  | **GET**  |
|-------------------|---------|
| **Endpoint**      | `https://app.testsigma.com/api/v1/ui_identifiers/<ELEMENT_ID>` |
| **Authorization** | Bearer `<API_Token>` |


**<ELEMENT_ID>** is the id of the specific element you want to fetch.



### **Create Element**

This endpoint creates an element in the application. 

| **Request Type**  | **POST**  |
|-------------------|---------|
| **Endpoint**      | `https://app.testsigma.com/api/v1/ui_identifiers` |
| **Authorization** | Bearer `<API_Token>` |
| **Request Body**  | <pre>{<br>    "name": "TestUIID",<br>    "locatorType": "xpath",<br>    "definition": "//test/div",<br>    "createdBy": "USED\_ID",<br>    "status": "READY",<br>    "screenNameId": "<SCREEN\_NAME\_ID>",<br>    "applicationVersionId": "<VERSION\_ID>",<br>    "createdType": "CHROME"<br>} </pre> |



### **Update Element**

This endpoint updates the existing element in the application. 


| **Request Type**  | **PUT**  |
|-------------------|---------|
| **Endpoint**      | `https://app.testsigma.com/api/v1/ui_identifiers/<Element_ID>` |
| **Authorization** | Bearer `<API_Token>` |
| **Request Body**  | <pre>{<br>    "name": "TestUIID",<br>    "locatorType": "xpath",<br>    "definition": "//test/div",<br>    "createdBy": "USED\_ID",<br>    "status": "READY",<br>    "screenNameId": "<SCREEN\_NAME\_ID>",<br>    "applicationVersionId": "<VERSION\_ID>",<br>    "createdType": "CHROME"<br>} </pre> |



---