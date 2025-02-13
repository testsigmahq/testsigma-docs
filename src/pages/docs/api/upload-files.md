---
title: "Upload Files using API"
page_title: "Upload Files via API in Testsigma"
metadesc: "REST API endpoints used for uploading the Apps and Attachments in Testsigma | You can use APIs to update or add files during test runtime as part of a CI pipeline."
noindex: false
order: 21.5
page_id: "Upload Files using API"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Upload New File API"
  url: "#upload-new-file-api"
- type: link
  name: "Update File API"
  url: "#update-file-api"
- type: link
  name: "GET Upload API"
  url: "#get-upload-api"  
- type: link
  name: "GET Uploads API"
  url: "#get-uploads-api"
- type: link
  name: "GET Upload Versions API"
  url: "#get-upload-versions-api"    
---

---

You can easily update or add files during test runs in your Continuous Integration (CI) pipeline using APIs. Once the updated file is uploaded, it becomes available for subsequent executions. This article discusses uploading and updating files using APIs.

---


> ## **Prerequisites**
>
> Before you begin, ensure you have an [API Key](https://testsigma.com/docs/configuration/api-keys/) from Testsigma application.


---

## **Upload New File API**

This endpoint allows users to upload attachments, such as IPA or APK files, to Testsigma Uploads using the REST API.

|**Request Type**|**POST**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/uploads|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API Key mentioned above.|
|**Request Body Type**|Multipart form-data|
|**Request Body(form data)**|- **projectId**: 24<br> - **name**: APIFileUpload<br> - **uploadType**: Attachment<br> - **platformType**: TestsigmaLab<br> - **isPublic**: true<br> - **applicationId**: 43<br> - **version**: v101 <br> - **fileContent**: UploadFile_Here |
|**Response Body(JSON)**|{<br>&emsp;&emsp;"id": 62,<br>&emsp;&emsp;"createdById": 10,<br>&emsp;&emsp;"updatedById": 10,<br>&emsp;&emsp;"createdDate": 1681974022556,<br>&emsp;&emsp;"updatedDate": 1681974022769,<br>&emsp;&emsp;"name": " APIFileExample",<br>&emsp;&emsp;"latestVersionId": 68,<br>&emsp;&emsp;"latestVersion": {<br>&emsp;&emsp;&emsp;&emsp;"id": 68,<br>&emsp;&emsp;&emsp;&emsp;"createdById": 10,<br>&emsp;&emsp;&emsp;&emsp;"updatedById": 10,<br>&emsp;&emsp;&emsp;&emsp;"createdDate": 1681974023000,<br>&emsp;&emsp;&emsp;&emsp;"updatedDate": 1681974023000,<br>&emsp;&emsp;&emsp;&emsp;"name": "v101",<br>&emsp;&emsp;&emsp;&emsp;"path": "46091/uploads/24/68/example.png",<br>&emsp;&emsp;&emsp;&emsp;"fileName": "example.png",<br>&emsp;&emsp;&emsp;&emsp;"uploadType": "Attachment",<br>&emsp;&emsp;&emsp;&emsp;"testsigmaSauceLabsAppId": null,<br>&emsp;&emsp;&emsp;&emsp;"testsigmaBrowserstackAppId": null,<br>&emsp;&emsp;&emsp;&emsp;"testsigmaKobitonAppId": null,<br>&emsp;&emsp;&emsp;&emsp;"testsigmaLambdatestAppId": null,<br>&emsp;&emsp;&emsp;&emsp;"fileSize": 181368,<br>&emsp;&emsp;&emsp;&emsp;"preSignedURL": null,<br>&emsp;&emsp;&emsp;&emsp;"signed": false,<br>&emsp;&emsp;&emsp;&emsp;"errorMessage": null,<br>&emsp;&emsp;&emsp;&emsp;"status": "SUCCESS",<br>&emsp;&emsp;&emsp;&emsp;"uploadName": " APIFileExample",<br>&emsp;&emsp;&emsp;&emsp;"signStatus": "NONE",<br>&emsp;&emsp;&emsp;&emsp;"uploadId": 62<br>&emsp;&emsp;},<br>&emsp;&emsp;"versions": null,<br>&emsp;&emsp;"supportedDeviceType": null,<br>&emsp;&emsp;"isFlutter": false<br>} <br><br>**Note: The Response Body may contain additional information besides the mentioned keys. You can ignore that information.**|

### **Request fields**

- **projectId (int)**: The ID of the project.
- **name (string)**: The name of the file.
- **uploadType (string)**: The type of upload (e.g. "Attachment").
- **platformType (string)**: The type of platform (e.g. "TestsigmaLab").
- **isPublic (boolean)**: Whether or not the file is public.
- **applicationId (int)**: The ID of the application.
- **version (string)**: The version of the file.

### **Response fields**

- **id (int)**: The ID of the file.
- **createdById (int)**: The user's ID who created the file.
- **updatedById (int)**: The user's ID who last updated the file.
- **createdDate (int)**: The timestamp when the file was created.
- **updatedDate (int)**: The timestamp when the file was last updated.
- **name (string)**: The name of the file.
- **latestVersionId (int)**: The ID of the latest version of the file.
- **latestVersion (object)**: An object containing information about the latest version of the file. This object has its own set of fields:
    - **id (int)**: The ID of the latest version of the file.
    - **createdById (int)**: The ID of the user who created the latest version of the file.
    - **updatedById (int)**: The ID of the user who last updated the latest version of the file.
    - **createdDate (int)**: The timestamp when the latest version of the file was created.
    - **updatedDate (int)**: The timestamp when the latest version of the file was last updated.
    - **name (string)**: The name of the latest version of the file.
    - **path (string)**: The path to the latest version of the file.
    - **fileName (string)**: The name of the latest version of the file, including the file extension.
    - **uploadType (string)**: The type of upload (e.g. "Attachment").
    - **testsigmaSauceLabsAppId (string/null)**: The ID of the Testsigma Sauce Labs app associated with the file, if any.
    - **testsigmaBrowserstackAppId (string/null)**: The ID of the Testsigma BrowserStack app associated with the file, if any.
    - **testsigmaKobitonAppId (string/null)**: The ID of the Testsigma Kobiton app associated with the file, if any.
    - **testsigmaLambdatestAppId (string/null)**: The ID of the Testsigma Lambdatest app associated with the file, if any.
    - **fileSize (int)**: The size of the latest version of the file in bytes.
    - **preSignedURL (string/null)**: The pre-signed URL of the latest version of the file, if any.
    - **signed (boolean)**: Whether or not the latest version of the file is signed.
    - **errorMessage (string/null)**: Any error message associated with the latest version of the file, if any.
    - **status (string)**: The status of the latest version of the file (e.g. "SUCCESS").
    - **uploadName (string)**: The name of the file that was uploaded to create the latest version of the file.
    - **signStatus (string)**: The signing status of the latest version of the file (e.g. "NONE").
    - **uploadId (int)**: The ID of the file that was uploaded to create the latest version of the file.
- **versions (null)**: A placeholder field not currently used.
- **supportedDeviceType (null)**: A placeholder field not currently being used.
- **isFlutter (boolean)**: Whether or not the file is a Flutter project.

---

## **Update File API**

This endpoint allows users to upload updated attachments, such as IPA or APK files, to Testsigma Uploads using the REST API.

|**Request Type**|**PUT**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/uploads/<Upload\_ID><br>The Upload ID can be obtained from the Uploads Page as mentioned in the below section|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API Key mentioned above.|
|**Request Body Type**|Multipart form-data|
|**Request Body(form data)**| - **projectId**: 24<br> - **name**: APIFileUpdated<br> - **uploadType**: Attachment<br> - **platformType**: TestsigmaLab<br> - **isPublic**: true<br> - **applicationId**: 43<br> - **version**: v101 <br> - **fileContent**: UploadFile_Here |
|**Response Body(JSON)**|{<br>&emsp;"id": 62,<br>&emsp;"createdById": 10,<br>&emsp;"updatedById": 10,<br>&emsp;"createdDate": 1681974023000,<br>&emsp;"updatedDate": 1681974187126,<br>&emsp;"name": " APIFileUpdated",<br>&emsp;"latestVersionId": 68,<br>&emsp;"latestVersion": {<br>&emsp;&emsp;"id": 68,<br>&emsp;&emsp;"createdById": 10,<br>&emsp;&emsp;"updatedById": 10,<br>&emsp;&emsp;"createdDate": 1681974023000,<br>&emsp;&emsp;"updatedDate": 1681974023000,<br>&emsp;&emsp;"name": "v101",<br>&emsp;&emsp;"path": "46091/uploads/24/68/example.png",<br>&emsp;&emsp;"fileName": "example.png",<br>&emsp;&emsp;"uploadType": "Attachment",<br>&emsp;&emsp;"testsigmaSauceLabsAppId": null,<br>&emsp;&emsp;"testsigmaBrowserstackAppId": null,<br>&emsp;&emsp;"testsigmaKobitonAppId": null,<br>&emsp;&emsp;"testsigmaLambdatestAppId": null,<br>&emsp;&emsp;"fileSize": 181368,<br>&emsp;&emsp;"preSignedURL":"https://s3.amazonaws.com/attachments-production.testsigma.com/testsigmatech.com/uploads/11/147/Testfile.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPDYqAbdKsCA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211027T080801Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10799&X-Amz-Credential=AS211027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e2f85ef6c0069e014",<br>&emsp;&emsp;"signed": false,<br>&emsp;&emsp;"errorMessage": null,<br>&emsp;&emsp;"status": "SUCCESS",<br>&emsp;&emsp;"uploadName": " APIFileUpdated",<br>&emsp;&emsp;"signStatus": "NONE",<br>&emsp;&emsp;"uploadId": 62<br>&emsp;&emsp;},<br>&emsp;"versions": null,<br>&emsp;"supportedDeviceType": null,<br>&emsp;"isFlutter": false<br>}<br><br> **Note: The Response Body may contain additional information besides the mentioned keys. You can ignore that information.** |

### **Request fields**

- **projectId (required)**: An integer representing the ID of the project
- **name (required)**: A string representing the name of the API file that was updated
- **uploadType (required)**: A string representing the type of file upload (e.g. "Attachment", "Link", etc.)
- **platformType (required)**: A string representing the type of platform the API file was updated on (e.g. "TestsigmaLab", "Postman", etc.)
- **isPublic (optional)**: A boolean indicating whether the updated API file should be publicly accessible or not (default is usually false)
- **applicationId (optional)**: An integer representing the ID of the application associated with the updated API file
- **version (optional)**: A string representing the version of the updated API file (e.g. "v101")

### **Response fields**

- **id (integer)**: ID of the API file
- **createdById (integer)**: The user's ID who created the file.
- **updatedById (integer)**: The user's ID who last updated the file.
- **createdDate (integer)**: timestamp when the API file was created
- **updatedDate (integer)**: timestamp when the API file was last updated
- **name (string)**: name of the API file
- **latestVersionId (integer)**: ID of the latest version of the API file
- **latestVersion (object)**: object containing details of the latest version of the API file, including:
    - **id (integer)**: ID of the latest version
    - **createdById (integer)**: ID of the user who created the latest version
    - **updatedById (integer)**: ID of the user who last updated the latest version
    - **createdDate (integer)**: Timestamp when the latest version was created
    - **updatedDate (integer)**: Timestamp when the latest version was last updated
    - **name (string)**: Name of the latest version
    - **path (string)**: Path of the file in the server
    - **fileName (string)**: Name of the file
    - **uploadType (string)**: Type of upload
    - **testsigmaSauceLabsAppId (null or string)**: Sauce Labs App ID for the upload
    - **testsigmaBrowserstackAppId (null or string)**: BrowserStack App ID for the upload
    - **testsigmaKobitonAppId (null or string)**: Kobiton App ID for the upload
    - **testsigmaLambdatestAppId (null or string)**: LambdaTest App ID for the upload
    - **fileSize (integer)**: Size of the file in bytes
    - **signed (boolean)**: Whether the file is signed or not
    - **errorMessage (null or string)**: Error message if any
    - **status (string)**: Status of the file upload
    - **uploadName (string)**: Name of the upload
    - **signStatus (string)**: Sign status of the file
    - **uploadId (integer)**: ID of the upload
- **versions (null)**: Versions of the API file
- **supportedDeviceType (null)**: Device types supported by the API file
- **isFlutter (boolean)**: Whether the API file is for Flutter or not

[[info | NOTE:]]
| All properties mentioned in the section ‘Upload File properties for Upload file API’  are applicable here in addition to the properties mentioned below.

**Upload ID:** This can be found from the API Response while uploading the file. You can also find the Upload ID later from the Copy Path option.

The copy path URL is in the format:

**testsigma-storage:/\<account-name>/uploads/\<project-id>/\<upload-id>/file.pdf**

For example, In the URL: testsigma-storage:/testsigma.com/uploads/101/147/file.pdf, the app ID is 147

---

## **GET Upload API**
Will Return the Upload details  

| **Request Type**| **GET** |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**| https://app.testsigma.com/api/v1/uploads/<Upload_ID><br>The Upload ID can be obtained from the Uploads Page as mentioned in below section|
| **Authorization**| Bearer **<API\_Token>**<br>Same as the Testsigma API Key mentioned above.|
| **Response Body(JSON)**| {<br>&emsp;"id": 147,<br>&emsp;"projectId": 11,<br>&emsp;"createdById": 43,<br>&emsp;"updatedById": 43,<br>&emsp;"createdDate": 1633535450000,<br>&emsp;"updatedDate": 1635322081221,<br>&emsp;"name": "test-file",<br>&emsp;"appPath": "testsigmatech.com/uploads/11/147/Testfile.pdf",<br>&emsp;"fileName": "Testfile.pdf",<br>&emsp;"uploadType": "Attachment",<br>&emsp;"version": null,<br>&emsp;"testsigmaAppId": null,<br>&emsp;"testsigmaSauceLabsAppId": null,<br>&emsp;"browserStackAppId": null,<br>&emsp;"sauceLabsAppId": null,<br>&emsp;"platformType": "TestsigmaLab",<br>&emsp;"isPublic": null,<br>&emsp;"uploadStatus": "Completed",<br>&emsp;"comments": null,<br>&emsp;"message": "Uploaded successfully",<br>&emsp;"status": 1,<br>&emsp;"nameFromApp": null,<br>&emsp;"versionFromApp": null,<br>&emsp;"fileSize": 334666,<br>&emsp;"preSignedURL":<br>&emsp;"https://s3.amazonaws.com/attachments-production.testsigma.com/testsigmatech.com/uploads/11/147/Testfile.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPDYqAbdKsCA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211027T080801Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10799&X-Amz-Credential=AS211027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e2f85ef6c0069e014",<br>&emsp;"signed": false<br>}<br><br>**Note: The Response Body may contain additional information besides the mentioned keys. You can ignore that information.** 

### **Response fields**

- **id (integer)**: The unique identifier of the file.
- **projectId (integer)**: The identifier of the project that the file belongs to.
- **createdById (integer)**: The identifier of the user who created the file.
- **updatedById (integer)**: The identifier of the user who last updated the file.
- **createdDate (integer)**: The date and time the file was created in UNIX timestamp format.
- **updatedDate (integer)**: The file's date and time were last updated in UNIX timestamp format.
- **name (string)**: The name of the file.
- **appPath (string)**: The file path in the application's storage system.
- **fileName (string)**: The name of the file with its extension.
- **uploadType (string)**: The type of file upload, for example, "Attachment".
- **version (string)**: The version number of the file, if applicable.
- **testsigmaAppId (string)**: The file identifier in the TestSigma application, if applicable.
- **testsigmaSauceLabsAppId (string)**: If applicable, the file identifier in the TestSigma SauceLabs application.
- **browserStackAppId (string)**: The file identifier in the BrowserStack application, if applicable.
- **sauceLabsAppId (string)**: The file identifier in the SauceLabs application, if applicable.
- **platformType (string)**: The type of platform where the file was uploaded, for example, "TestsigmaLab".
- **isPublic (boolean)**: A flag indicating whether the file is public or not.
- **uploadStatus (string)**: The file upload status is "Completed".
- **comments (string)**: Any comments related to the file.
- **message (string)**: A message related to the file upload, for example, "Uploaded successfully".
- **status (integer)**: The status of the file, for example, 1 for active or 0 for inactive.
- **nameFromApp (string)**: The file's name in the application, if different from the original name.
- **versionFromApp (string)**: The file's version number in the application, if applicable.
- **fileSize (integer)**: The size of the file in bytes.
- **preSignedURL (string)**: A pre-signed URL that allows authorised access to the file.
- **signed (boolean)**: A flag indicating whether the pre-signed URL is signed.

---

## **GET Uploads API**
Will Return the Upload details

| **Request Type**| **GET**|
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**| https://app.testsigma.com/api/v1/uploads?query=name:<upload_name><br>The Upload ID can be obtained from the Uploads Page as mentioned in below section|
| **Authorization**| Bearer **<API\_Token>**<br>Same as the Testsigma API Key mentioned above.|
| **Response Body(JSON)**| {<br>&emsp;"id": 147,<br>&emsp;"projectId": 11,<br>&emsp;"createdById": 43,<br>&emsp;"updatedById": 43,<br>&emsp;"createdDate": 1633535450000,<br>&emsp;"updatedDate": 1635322081221,<br>&emsp;"name": "test-file",<br>&emsp;"appPath": "testsigmatech.com/uploads/11/147/Testfile.pdf",<br>&emsp;"fileName": "Testfile.pdf",<br>&emsp;"uploadType": "Attachment",<br>&emsp;"version": null,<br>&emsp;"testsigmaAppId": null,<br>&emsp;"testsigmaSauceLabsAppId": null,<br>&emsp;"browserStackAppId": null,<br>&emsp;"sauceLabsAppId": null,<br>&emsp;"platformType": "TestsigmaLab",<br>&emsp;"isPublic": null,<br>&emsp;"uploadStatus": "Completed",<br>&emsp;"comments": null,<br>&emsp;"message": "Uploaded successfully",<br>&emsp;"status": 1,<br>&emsp;"nameFromApp": null,<br>&emsp;"versionFromApp": null,<br>&emsp;"fileSize": 334666,<br>&emsp;"preSignedURL":<br>"https://s3.amazonaws.com/attachments-production.testsigma.com/testsigmatech.com/uploads/11/147/Testfile.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPDYqAbdKsCA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211027T080801Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10799&X-Amz-Credential=AS211027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e2f85ef6c0069e014",<br>&emsp;"signed": false<br>}<br><br>**Note: The Response Body may contain additional information besides the mentioned keys. You can ignore that information.** 

### **Response fields**


- **id (integer)**: Unique identifier for the uploaded file.
- **projectId (integer)**: An identifier for the project to which the file belongs.
- **createdById (integer)**: An identifier for the user who uploaded the file.
- **updatedById (integer)**: An identifier for the user who last updated the file.
- **createdDate (integer)**: Timestamp in milliseconds indicating when the file was uploaded.
- **updatedDate (integer)**: Timestamp in milliseconds indicating when the file was last updated.
- **name (string)**: Name of the uploaded file.
- **appPath (string)**: The file path in the application's storage.
- **fileName (string)**: The name of the uploaded file.
- **uploadType (string)**: The type of upload (e.g., "Attachment").
- **version (string)**: The version number of the uploaded file.
- **testsigmaAppId (string)**: An identifier for the uploaded file in Testsigma.
- **testsigmaSauceLabsAppId (string)**: An identifier for the uploaded file in SauceLabs.
- **browserStackAppId (string)**: An identifier for the uploaded file in BrowserStack.
- **sauceLabsAppId (string)**: An identifier for the uploaded file in SauceLabs.
- **platformType (string)**: The platform type for the uploaded file (e.g., "TestsigmaLab").
- **isPublic (boolean)**: Indicates whether the uploaded file is public.
- **uploadStatus (string)**: The status of the file upload (e.g., "Completed").
- **comments (string)**: Comments for the uploaded file.
- **message (string)**: A message indicating the success or failure of the file upload.
- **status (integer)**: The status code indicating the success or failure of the file upload.
- **nameFromApp (string)**: The name of the uploaded file from the application.
- **versionFromApp (string)**: The version number of the uploaded file from the application.
- **fileSize (integer)**: The uploaded file size in bytes.
- **preSignedURL (string)**: The pre-signed URL of the uploaded file.
- **signed (boolean)**: Indicates whether the uploaded file is signed.


---

## **GET Upload Versions API**
Will Return All Versions of the UploadID/File

| **Request Type**| **GET** |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Endpoint**| https://app.testsigma.com/api/v1/upload_versions?query=uploadId:<uploadID><br>The Upload ID can be obtained from the Uploads Page as mentioned in below section|
| **Authorization**| Bearer **<API\_Token>**<br>Same as the Testsigma API Key mentioned above.|
| **Response Body(JSON)**| [{<br>&emsp;"id": 147,<br>&emsp;"createdById": 43,<br>&emsp;"updatedById": 43,<br>&emsp;"createdDate": 1633535450000,<br>&emsp;"updatedDate": 1635322081221,<br>&emsp;"name": "test-file",<br>&emsp;"appPath": "testsigmatech.com/uploads/11/147/Testfile.pdf",<br>&emsp;"fileName": "Testfile.pdf",<br>&emsp;"uploadType": "Attachment",<br>&emsp;"testsigmaAppId": null,<br>&emsp;"testsigmaSauceLabsAppId": null,<br>&emsp;"browserStackAppId": null,<br>&emsp;"sauceLabsAppId": null,<br>&emsp;"fileSize": 334666,<br>&emsp;"preSignedURL":<br>"https://s3.amazonaws.com/attachments-production.testsigma.com/testsigmatech.com/uploads/11/147/Testfile.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPDYqAbdKsCA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211027T080801Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10799&X-Amz-Credential=AS211027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e2f85ef6c0069e014",<br>&emsp;"signed": false<br>}]<br><br>**Note: The Response Body may contain additional information besides the mentioned keys. You can ignore that information.** 

### **Response fields**

- **id (integer)**: The unique identifier of the file upload.
- **createdById (integer)**: The unique identifier of the user who created the file upload.
- **updatedById (integer)**: The unique identifier of the user who last updated the file upload.
- **createdDate (integer)**: The date and time when the file upload was created.
- **updatedDate (integer)**: The date and time the file upload was last updated.
- **name (string)**: The name of the uploaded file.
- **appPath (string)**: The application path where the file is stored.
- **fileName (string)**: The name of the uploaded file.
- **uploadType (string)**: The type of upload.
- **testsigmaAppId (string)**: The ID of the Testsigma App associated with the file, if any.
- **testsigmaSauceLabsAppId (string)**: The ID of the Sauce Labs App associated with the file, if any.
- **browserStackAppId (string)**: The ID of the BrowserStack App associated with the file, if any.
- **sauceLabsAppId (string)**: The ID of the Sauce Labs App associated with the file, if any.
- **fileSize (integer):**: The size of the uploaded file in bytes.
- **preSignedURL (string)**: The pre-signed URL of the uploaded file.
- **signed (boolean)**: A boolean value indicates whether the file upload is signed.

---
