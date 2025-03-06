---
title: "Manage Environments Using REST APIs"
page_title: "Manage Environment Parameters Using REST API in Testsigma"
metadesc: "Learn how to use the REST API Endpoints available in Testsigma for reading and updating Environments | Manage Environments Using REST APIs"
noindex: false
order: 21.2
page_id: "Manage Environment Parameters Using REST APIs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Get an Environment"
  url: "#get-an-environment"
- type: link
  name: "Update an Environment"
  url: "#update-an-environment"
- type: link
  name: "Create an Environment"
  url: "#create-an-environment"
---

---

For some CI/CD pipelines, the URL of the Application Under Test (AUT) changes with every deployment. Manually updating it within the Testsigma App for every build can get tedious at scale. Environments API lets you read and update the URL of the Application under Test (AUT) dynamically after every build in your CI Pipeline.


---

> ## **Prerequisites**
>
> Before you begin, ensure you have an [API Key](https://testsigma.com/docs/configuration/api-keys/) from Testsigma application.

---

## **Get an Environment**

This endpoint retrieves details for a specific Environment.

| **Request Type** | **GET** |
|---|---|
| **Endpoint** | `https://app.testsigma.com/api/v1/environments/<ENV_ID>` |
|**Response Body (Sample)**| <pre>{<br>    "id": 10,<br>    "name": "Test environment1",<br>    "description": "Test Environment",<br>    "createdById": 2,<br>    "updatedById": 2,<br>    "createdDate": 1732176819137,<br>    "updatedDate": 1732176819137,<br>    "createdAtEpoch": 1732176819137,<br>    "updatedAtEpoch": 1732176819137,<br>    "variables": [<br>        {<br>            "id": 8,<br>            "key": "Url",<br>            "value": "https://google.com",<br>            "isEncrypted": false,<br>            "projectId": 9,<br>            "isDefault": null,<br>            "createdDate": 1732176819179,<br>            "updatedDate": 1732176819179,<br>            "createdAtEpoch": 1732176819179,<br>            "updatedAtEpoch": 1732176819179<br>        }<br>    ]<br>} </pre> |

The **<ENV\_ID>** can be found in the URL of the Environment details page. Refer to the screenshot below:
![Env ID](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Env_ID.png)

[[info | **NOTE**:]]
| To retrieve all environments, use this endpoint with the same method. <br>
| <br>
|    - `https://app.testsigma.com/api/v1/environments`

---

## **Update an Environment**

| **Request Type**     | PUT |
|-----------------------|-----|
| **Endpoint**          | `https://app.testsigma.com/api/v1/environments/<ENV_ID>`|
| **Authorization**     | Bearer **<API\_Token>** |
| **Request Body Type** | JSON |
| **Request Body**      | <pre>{<br>    "name": "Test environment1",<br>    "description": "Test Environment",<br>    "createdById": 1,<br>    "updatedById": 3,<br>    "createdDate": 1731915641765,<br>    "updatedDate": 1731915964126,<br>    "createdAtEpoch": 1731915641765,<br>    "updatedAtEpoch": 1731915964126,<br>    "id": 10,<br>    "projectId": 9,<br>    "variables": [<br>        {<br>            "id": "8",<br>            "key": "Url",<br>            "value": "https://youtube.com",<br>            "isEncrypted": false,<br>            "projectId": 9,<br>            "isDefault": null,<br>            "createdDate": 1731915669291,<br>            "updatedDate": 1731915669291,<br>            "createdAtEpoch": 1731915669291,<br>            "updatedAtEpoch": 1731915669291<br>        }<br>    ]<br>}</pre> |


### **Request Fields:**

- **name:** This is the environment name.

- **description:** This is a description of the environment.

- **createdById:** This identifies the user who created the environment.

- **updatedById:** This identifies the user updating the environment.

- **createdDate:** This is the date and time the environment was created.

- **updatedDate:** This is the date and time the environment was last updated.

- **createdAtEpoch:** This shows the epoch timestamp when the environment was created.

- **updatedAtEpoch:** This shows the epoch timestamp when the environment was last updated.

- **projectId:** Id of the associated project.


[[info | NOTE:]]
| The **Request Body** should include only the fields that are being updated or created.


---

## **Create an Environment**

| **Request Type**     | **POST** |
|----------------------|-----------------|
| **Endpoint**          | `https://app.testsigma.com/api/v1/environments` |
| **Authorization**     | Bearer **<API\_Token>**  |
| **Request Body Type** | **JSON** |
| **Request Body**      | <pre><br>{<br>    "name": "Test environment1",<br>    "description": "Test Environment",<br>    "createdById": 1,<br>    "updatedById": 3,<br>    "createdDate": 1731915641765,<br>    "updatedDate": 1731915964126,<br>    "createdAtEpoch": 1731915641765,<br>    "updatedAtEpoch": 1731915964126,<br>    "projectId": 9,<br>    "variables": [<br>        {<br>            "key": "Url",<br>            "value": "https://youtube.com",<br>            "isEncrypted": false,<br>            "projectId": 9,<br>            "isDefault": null,<br>            "createdDate": 1731915669291,<br>            "updatedDate": 1731915669291,<br>            "createdAtEpoch": 1731915669291,<br>            "updatedAtEpoch": 1731915669291<br>        }<br>    ]<br>}<pre> |



### **Request Fields:**

- **name:** This is the environment name.

- **description:** This is a description of the environment.

- **createdById:** This identifies the user who created the environment.

- **updatedById:** This identifies the user updating the environment.

- **createdDate:** This is the date and time the environment was created.

- **updatedDate:** This is the date and time the environment was last updated.

- **createdAtEpoch:** This shows the epoch timestamp when the environment was created.

- **updatedAtEpoch:** This shows the epoch timestamp when the environment was last updated.

- **projectId:** Id of the associated project.


---


