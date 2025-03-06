---
title: "Salesforce Metadata Refresh Using API"
page_title: "Metadata Refresh Using API"
metadesc: "Refresh metadata using API calls without logging into the Testsigma application or performing UI actions | Learn how to refresh metadata and check the status of refresh using API calls"
noindex: false
order: 21.88
page_id: "Metadata Refresh Using API"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Get Metadata Connection ID"
  url: "#steps-to-get-metadata-connection-id"
- type: link
  name: "Trigger Refresh Metadata Using API"
  url: "#trigger-refresh-metadata-using-api"
- type: link
  name: "Get Metadata Refresh Status Using API"
  url: "#get-metadata-refresh-status-using-api"
---

---

When there are changes in metadata, users must refresh it before executing the test plan to avoid failures. Users can now swiftly refresh metadata using API calls without logging into the Testsigma application or performing UI actions. This article discusses refreshing metadata using API calls.

---

> ## **Prerequisites**
> 
> Before you begin, ensure you have a [Salesforce Connected App](https://testsigma.com/docs/salesforce-testing/connected-app/), [Salesforce Metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/) connected to Testsigma, and knowledge of how to [Refresh Metadata](https://testsigma.com/docs/salesforce-testing/metadata-connections/#steps-to-refresh-metadata-connection).

---

## **Steps to Get Metadata Connection ID**

1. From the **Dashboard**, click **SF Connections**.
![SF Connections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SF_Connections_MD_API.png)

2. In the **Metadata Connection** section, hover over the connection, click the kebab menu, and choose **Copy Connection ID** from the dropdown menu.
![Metadata Connection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Connection_ID.png)

---

## **Trigger Refresh Metadata Using API**

| **Request Type**         | **POST**                                                                                              |
|---------------------------|------------------------------------------------------------------------------------------------------|
| **Endpoint**              | `https://app.testsigma.com/api_private/v1/salesforce_metadata_sync/sync_data`                       |
| **Authorization**         | Bearer `<API_Token>` <br> <br> (Same as the Testsigma API Key)                                                |
| **Request Body Type**     | **JSON**                                                                                                |
| **Request Body (Sample)** | <pre>{<br>    "id": 70 <br>} </pre>                                                         |
| **Response Body (Sample)** | <pre>{<br>    "id": 133,<br>    "metadataSyncResult": "NOT STARTED",<br>    "metadataSyncType": "UPDATE SYNC",<br>    "salesforceConnectionId": 70<br>} </pre> |

![Metadata Refresh](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Metadata_Refresh_Using_API.png)

<br>

### **Request fields / Response fields**<br>

- **id:** Refresh Trigger ID.<br>
- **metadataSyncResult:** Status of metadata sync process.<br>
- **metadataSyncType:** Type of metadata sync.<br>
- **salesforceConnectionId:** Salesforce Connection ID.<br>

---

## **Get Metadata Refresh Status Using API**

| **Request Type**        | **GET**                                                                                          |
|--------------------------|--------------------------------------------------------------------------------------------------|
| **Endpoint**             | `https://app.testsigma.com/api_private/v1/salesforce_metadata_sync/<Trigger_ID>/fetchMetaDataSyncResultStatus` |
| **Authorization**        | Bearer `<API_Token>` <br> <br> (Same as the Testsigma API Key)                                                                                |
| **Response Body Type**   | **JSON**                                                                                            |
| **Response Body (Sample)** | <pre>{<br>    "status": "IN_PROGRESS",<br>    "message": "Metadata refresh already in progress"<br>} </pre> |

![API Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Metadata_Refresh_Status.png)

<br>

### **Request fields / Response fields**<br>

- **status:** Status of metadata sync process.<br>
- **message:** Additional information of sync process.<br>


---