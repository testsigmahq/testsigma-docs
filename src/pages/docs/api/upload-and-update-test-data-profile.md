---
title: "Upload & Update Test Data Profile"
page_title: "Upload/update test data profile via API in Testsigma"
metadesc: "This article discusses in detail on REST API endpoints used for uploading the Apps and Attachments for test data profile in Testsigma Application."
noindex: false
order: 21.6
page_id: "Upload test data profile using API"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Upload test data profile with REST API"
  url: "#upload-test-data-profile-with-rest-api"
- type: link
  name: "Update test data profile with REST API"
  url: "#update-test-data-profile-with-rest-api"
---

---

The following article discusses about uploading and updating a test data profile using API. *For more information on creating a test data profile refer to, [create a test data profile](https://testsigma.com/docs/test-data/create-data-profiles/).*

---

> ## **Prerequisites**
>
> Before you begin, ensure you have an [API Key](https://testsigma.com/docs/configuration/api-keys/) and XLS file.

---

## **Upload test data profile with REST API**

This endpoint allows users to upload XLSX files into Testsigma using REST API.

|**Request Type**|**POST**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/test_data/upload|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body Type**|Multipart form-data|
|**Request Body (form data)**|- **file** = @"<local\_path>"<br> - **encryptedColumns** = "Password"<br> - **applicationVersionId** = "10"<br> - **name** = "TestData01"<br> - **notificationEmail**= "example@testsigma.com"|
|**Response Body (JSON)**|{<br>&emsp;"id": 78,<br>&emsp;"testDataName": "API 01",<br>&emsp;"testData": null,<br>&emsp;"data": null,<br>&emsp;"createdById": 10,<br>&emsp;"updatedById": 10,<br>&emsp;"columns": null,<br>&emsp; "createdDate": 1669806564576,<br>&emsp;"updatedDate": 1669806564576,<br>&emsp;"passwords": null,<br>&emsp;"versionId": 69,<br>&emsp;"isMigrated": null,<br>&emsp;"message": "We will send an email once the Test data profile is created successfully."<br>&emsp;}|

### **Request fields**

**file:** The file location you want to upload.<br>
**encryptedColumns:** Enter the columns you want to encrypt. Give “,” for each entry if you want to encrypt multiple columns.<br>
**applicationVersionId:** The ID of the application version where the file is to be uploaded.<br>
**name:** The name you want to give for the uploading test data profile.<br>
**notificationEmail:** The email for which you want to get uploaded notification.<br>

### **Response fields**
**Id:** The ID of the Project where the file is to be uploaded. This can be found in **Project settings** by checking the URL.<br>
For example, In the URL - https://app.testsigma.com/ui/projects/11/details, the Project ID is 11<br>
**testDataName:** Name of the test data profile.<br>
**createdById/updatedById:** User ID of the creator/updater<br>
**createdDate/updatedDate:** Date when the asset is created/updated.<br>
**versionId:** The ID of the application version where the file is to be uploaded.<br>
For example, in https://app.testsigma.com/ui/projects/11/apps/25/versions/364/details URL, the version ID is 364.<br>
**message:** the email which will be sent as notification for the uploaded file.<br>

---

## **Update test data profile with REST API**

This endpoint allows users to update test data profile in Testsigma using REST API.

|**Request Type**|POST|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/test_data/upload|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body Type**|Multipart form-data|
|**Request Body (form data)**|- **file** = @"<local\_path>"<br> - **encryptedColumns** = "Password"<br> - **applicationVersionId** = "10"<br> - **name** = "TestData01"<br> - **notificationEmail**= "example@testsigma.com"|
|**Response Body(JSON)**|{<br>"id": 77,<br>&emsp;"testDataName": "TD01",<br>&emsp;"testData": null,<br>&emsp;"data": null,<br>&emsp;"createdById": 9,<br>&emsp;"updatedById": 9,<br>&emsp;"columns": [ <br>&emsp;"description",<br>&emsp;"city",<br>&emsp;"man"<br>&emsp;],<br>&emsp;<br>&emsp;"createdDate": 1669806346000,<br>&emsp;"updatedDate": 1669806369000,<br>&emsp;"passwords": null,<br>&emsp;"versionId": 69,<br>&emsp;"isMigrated": true,<br>&emsp;"message": "We will send an email once the Test data profile is created successfully."<br>&emsp;}|

### **Request fields**

**file:** The file location you want to upload.<br>
**encryptedColumns:** Enter the columns you want to encrypt. Give “,” for each entry if you want to encrypt multiple columns.<br>
**applicationVersionId:** The ID of the application version where the file is to be uploaded.<br>
**name:** The name you want to give for the uploading test data profile.<br>
**notificationEmail:** The email for which you want to get uploaded notification.<br>

### **Response fields**
**Id:** The ID of the Project where the file is to be uploaded. This can be found in **Project settings** by checking the URL.<br>
For example, In the URL - https://app.testsigma.com/ui/projects/11/details, the Project ID is 11<br>
**testDataName:** Name of the test data profile you want to update.<br>
**createdById/updatedById:** User ID of the creator/updater<br>
**columns:** The columns you're updating in test data profile.<br>
**createdDate/updatedDate:** Date when the asset is created/updated.<br>
**versionId:** The ID of the application version where the file is to be uploaded.<br>
For example, in https://app.testsigma.com/ui/projects/11/apps/25/versions/364/details URL, the version ID is 364.<br>
**message:** the email which will be sent as notification for the uploaded file.<br>


---