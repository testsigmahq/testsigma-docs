---
title: "Create and update values of Test Data Profile using REST API"
page_title: "Update Test Case results using API"
metadesc: "Learn how to create, update, and delete values of Test Data Profile using REST API in Testsigma | Detailed steps to create, update, and delete values of Test Data Profile"
noindex: false
order: 21.86
page_id: "Create, update, and delete values of Test Data Profile using API"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Create Value in Test Data Profile using REST API"
  url: "#create-value-in-test-data-profile-using-rest-api"
- type: link
  name: "Update Value in Test Data Profile using REST API"
  url: "#update-value-in-test-data-profile-using-rest-api"
---

<br>

With Testsigma, you can create, and update values of the Test Data Profile using API. For more information on creating a test data profile, refer to [create a test data profile](https://testsigma.com/docs/test-data/create-data-profiles/).

Here is a quick GIF demonstrating how to create, update, and delete values of the Test Data Profile using API.

## **Create Value in Test Data Profile using REST API**
This endpoint allows users to create value in Test Data Profile using REST API.

|**Request Type**|**PATCH**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/test_data/48 |
|**Authorization**|Bearer **<API\_Token>**|
|**Request Body Type (JSON)**|Raw|
|**Request Body(JSON)**|<pre> { <br> "id": 48,<br> "testDataName": "update parameter with api call",<br> "testData": null,<br> "data": [{<br> "name": "Iteration name",<br> "expectedToFail": true,<br> "data": {<br> "Username": "bhanu",<br> "Password": "7893",<br> "User1": "bsk@450.com",<br> "User2": "1479",<br> "User3": "bhanuprakash"<br> }<br> }]<br> } <br>  <pre>|
|**Response Body(JSON)**|<pre> { <br>"id": 48,<br> "testDataName": "update",<br> "data": null,<br> "createdById": 9,<br> "updatedById": 14,<br> "columns": ["User2", "Username", "User1", "User3", "Password"],<br> "createdDate": 1677479567000,<br> "updatedDate": 1677493355613,<br> "passwords": null,<br> "versionId": 46,<br> "message": null<br> } <pre>|

## **Update Value in Test Data Profile using REST API**
This endpoint allows users to update the value in Test Data Profile using REST API.

|**Request Type**|**PATCH**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/test_data/48 |
|**Authorization**|Bearer **<API\_Token>**|
|**Request Body Type (JSON)**|Raw|
|**Request Body(JSON)**|<pre> {<br> "id": 48,<br> "testDataName": "update parameter with api call",<br> "testData": null,<br> "data": [{<br> "name": "Iteration name",<br> "expectedToFail": true,<br> "data": {<br> "Username": "bhanu",<br> "Password": "7893",<br> "User1": "bsk@450.com",<br> "User2": "1479",<br> "User3": "bhanuprakash"<br> }<br> }]<br> } <br>  <pre>|
|**Response Body(JSON)**|<pre> {<br> "id": 48,<br> "testDataName": "update",<br> "data": null,<br> "createdById": 9,<br> "updatedById": 14,<br> "columns": ["User2", "Username", "User1", "User3", "Password"],<br> "createdDate": 1677479567000,<br> "updatedDate": 1677492944204,<br> "passwords": null,<br> "versionId": 46,<br> "message": null <br> } <pre>|



