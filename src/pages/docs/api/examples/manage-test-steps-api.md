---
title: "Manage Test Steps Using API"
page_title: "Manage Test Steps Using API"
metadesc: "With Testsigma, you can create, update & delete test steps using APIs. Learn how to manage test steps in the test cases using REST API in Testsigma"
noindex: false
order: 21.89
page_id: "manage-test-steps-using-apis"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create a Test Step Using API"
  url: "#create-a-test-step-using-api"
- type: link
  name: "Create Multiple Test Steps Using API"
  url: "#create-multiple-test-steps-using-api"
- type: link
  name: "Retrieve a Test Step Using API"
  url: "#retrieve-a-test-step-using-api"
- type: link
  name: "List Test Case Steps Using API"
  url: "#list-test-case-steps-using-api"
- type: link
  name: "Search NLP Templates Using API"
  url: "#search-nlp-templates-using-api"
- type: link
  name: "Update a test step Using API"
  url: "#update-a-test-step-using-api"
- type: link
  name: "Delete a Test Step Using API"
  url: "#delete-a-test-step-using-api"
---

---

With Testsigma, you can create, update, retrieve, and delete test steps in a test case using the REST API. You can also perform bulk operations for efficiency and search NLP templates for step creation.

---

> ## **Prerequisites**
> 
> Before you begin, ensure you have:
> - **testCaseId**: You can find it in the URL of the test case in the Testsigma app.
> - **previousStepId**: The ID of the step after which the new step should be added. You can get it from the response of List Test Case Steps Using the REST API. 
> - **templateId**: The ID of the NLP template that defines the action. You can get it by searching with the Search NLP Templates Using REST API.

---

## **Create a Test Step Using API**

This endpoint allows users to create one step in a test case.

|**Request Type**|**POST**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/test_steps|
|**Authorization**|Bearer **<API_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body Type (JSON)**|Raw|
|**Payload**|<pre>{<br>  "testCaseId": 9,<br>  "templateId": 1044,<br>  "previousStepId": 223,<br>  "text": "https://www.google.com",<br>  "type": "NLP\_TEXT"<br>}<pre>|
|**Response Body(JSON)**|<pre>{<br>  "id": 5846,<br>  "action": "Navigate to https://www.google.com",<br>  "type": "NLP\_TEXT",<br>  "conditionType": null,<br>  "testCaseId": 9,<br>  "stepGroupId": null<br>}<pre>|


**Request Fields:**
- **testCaseId**: The ID of the test case where you want to add the new step.
- **templateId**: A unique identifier for the type of action you're performing (e.g., navigating to a URL).
- **previousStepId**: The ID of the step that the new step should follow.
- **text**: The value of the step's action, in this case, the URL to navigate to.
- **type**: The type of the test step. We support both:
   - **NLP\_TEXT**: For Natural Language Processing text steps.
   - **STEP\_GROUP**: For a group of multiple steps executed together.


[[info | **NOTE**:]]
| - For a **NLP\_TEXT** step, **templateId** is mandatory and stepGroupId should be set to null in the payload.
| - For a **STEP\_GROUP** step, **stepGroupId** is mandatory and templateId should be set to null in the payload.


**Response Body Fields**
- **id**: A unique numerical identifier for the newly created test step.
- **action**: A human-readable description of the action the test step performs, such as "Navigate to https://www.google.com".
- **type**: The type of the test step. We support both:
     - **NLP\_TEXT**: For Natural Language Processing text steps.
     - **STEP\_GROUP**: For a group of multiple steps executed together.

---

## **Create Multiple Test Steps Using API**

This endpoint allows users to create multiple test steps in a single request.

|**Request Type**|**POST**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/test_steps/bulk|
|**Authorization**|Bearer **<API_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body Type (JSON)**|Raw|
|**Payload**|<pre>{<br>  "testCaseId": 9,<br>  "steps": [<br>    {<br>      "templateId": 1044,<br>      "text": "https://www.google.com",<br>      "type": "NLP\_TEXT"<br>    },<br>    {<br>      "templateId": 37,<br>      "type": "NLP\_TEXT"<br>    }<br>  ]<br>}<pre>|
|**Response Body(JSON)**|<pre>Returns an array of newly created test step objects.<pre>|

**Request Fields:**
**testCaseId**: Target test case ID
**steps**:  Array of step objects
**templateId**:  NLP template ID for the step
**text**: Step input or parameter value
**type**: The type of the test step. We support both:
**NLP\_TEXT**: For Natural Language Processing text steps.
**STEP\_GROUP**: For a group of multiple steps executed together.

[[info | **NOTE**:]]
| - For a **NLP\_TEXT** step, **templateId** is mandatory and stepGroupId should be set to null in the payload.
| - For a **STEP\_GROUP** step, **stepGroupId** is mandatory and templateId should be set to null in the payload.

[[info | **NOTE**:]]
| When you create multiple steps in a single request, the system respects the order in which they are listed in the steps array. All of the new steps are inserted immediately after the step identified by previousStepId. You do not need to manage the numbering manually because Testsigma automatically calculates and assigns the correct step order for each new entry.

---

## **Retrieve a Test Step Using API**

This endpoint allows users to fetch a specific test step by ID.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/test_steps/{id}|
|**Path Parameter**|`id` – Identifier of the Test Step|
|**Response Body (JSON)**|<pre>{<br>  "id": 12345,<br>  "action": "Click on the login button",<br>  "type": "NLP\_TEXT",<br>  "stepOrder": 1.0,<br>  "testCaseId": 123,<br>  "templateId": 456,<br>  ...<br>}<pre>|


**Response Fields**
- **id**: Step ID
- **action**: Action description
- **type**: Step type
- **stepOrder**: Execution order in the test case
- **testCaseId**: Parent test case ID
- **templateId**: Associated template

---

## **List Test Case Steps Using API**

This endpoint retrieves all steps of a specific test case in their execution order.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/test_steps/find_all/{testCaseId}|
|**Path Parameter**|`testCaseId`: Identifier of the test case|
|**Response Body (JSON)**|<pre>Returns an array of test step objects in step sequence order<pre>|

---

## **Search NLP Templates Using API**

This endpoint allows users to search NLP templates for creating steps.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v2/test_steps/nlp/{applicationType}/templates/{searchText}|
|**Path Parameter**|`applicationType`: WebApplication, MobileWeb, IOSNative, AndroidNative, Rest, Salesforce <br><br>`searchText`: Keywords used to search for templates|
|**Response Body (JSON)**|<pre>[<br>  {<br>    "id": 456,<br>    "keyword": "click",<br>    "grammar": "Click on the ${ui-identifier}",<br>    "action": "click"<br>  }<br>]<pre>|

**Response Fields:**
- **id**: Unique identifier of the created test step
- **keyword**: Keyword associated with the step (e.g., click)
- **grammar**: NLP grammar expression for the step
- **action** : Action executed by the step

---

## **Update a Test Step Using API**

This endpoint allows users to update an existing test step.

|**Request Type**|**PUT**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v2/test_steps/{id}|
|**Authorization**|Bearer **<API_Token>**|
|**Path Parameter**|**id**: The test step ID that needs to be updated.|
|**Request Body Type (JSON)**|Raw|
|**Payload**|<pre>{<br>  "testCaseId": 9,<br>  "templateId": 1044,<br>  "text": "your password",<br>  "type": "NLP\_TEXT"<br>}<pre>|
|**Response Body(JSON)**|<pre>{<br>  "id": 12,<br>  "action": "Enter password in the Enter Password field",<br>  "type": "NLP\_TEXT",<br>  "conditionType": null,<br>  "testCaseId": 1,<br>  "stepGroupId": null<br>}<pre>|

**Request Fields:**
- **testCaseId**: Target test case ID where the step will be created
- **templateId**: NLP template ID for the step
- **text**: Step input or parameter value
- **type**: The type of the test step. We support both:
   - **NLP\_TEXT**: For Natural Language Processing text steps.
   - **STEP\_GROUP**: For a group of multiple steps executed together.

[[info | **NOTE**:]]
| - For a **NLP\_TEXT** step, **templateId** is mandatory and stepGroupId should be set to null in the payload.
| - For a **STEP\_GROUP** step, **stepGroupId** is mandatory and templateId should be set to null in the payload.

**Response Fields:**
- **id**: Unique identifier of the created test step
- **action**: Action description generated from the step (e.g., Enter password…)
- **type**: The type of the test step. We support both:
   - **NLP\_TEXT**: For Natural Language Processing text steps.
   - **STEP\_GROUP**: For a group of multiple steps executed together.

---

## **Delete a Test Step Using API**

This endpoint allows users to delete a specific test step from a test case.

|**Request Type**|**DELETE**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v2/test_steps/{id}|
|**Path Parameter**|**id**: Specifies the unique identifier of the test step that should be deleted.|
|**Request Body**|None|
|**Response Body**|Status Code: **204 No Content**<br>Body: Empty response body|

---