---
title: "Upload Files using API"
page_title: "Upload Files via API in Testsigma"
meta_desc: "REST API endpoints used for uploading the Apps and Attachments in Testsigma"
order: 21.5
page_id: "Upload Files using API"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Upload New File API"
  url: "#upload-new-file-api"
- type: link
  name: "Update File API"
  url: "#update-file-api"
---

You can use Testsigma APIs to update or add  files during test runtime as part of a CI pipeline. The updated build can be used in a Testsigma Test Plan by updating the existing App on Testsigma with the newly built one via API. 

You should know how to [Upload Android and iOS Apps](https://testsigma.com/docs/uploads/upload-apps/) **in Testsigma.**

[[info | NOTE:]]
| You need to authenticate these requests with your Testsigma API Key.  See [How to generate API Keys](https://testsigma.com/docs/configuration/api-keys/)

---
##**Upload New File API**

This endpoint allows users to upload Attachments, IPA or APK Files into Testsigma Uploads using REST API.

|**Request Type**|POST|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/uploads|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API Key mentioned above.|
|**Request Body Type**|Multipart form-data|
|**Request Body(form data)**|fileContent = @“/Users/renju/Downloads/Sample Attachment File.pdf”<br>projectId = “11”<br>Name = ”test-file4”<br>uploadType = “Attachment”<br>platformType = “TestsigmaLab”<br>isPublic = “true”<br>applicationId = “25”|
|**Response Body(JSON)**|{<br>&emsp;"id": 152,<br>&emsp;"projectId": 11,<br>&emsp;"createdById": 43,<br>&emsp;"updatedById": 43,<br>&emsp;"createdDate": 1635329087332,<br>&emsp;"updatedDate": 1635329087332,<br>&emsp;"name": "test-file4",<br>&emsp;"fileName": "Sample\_Test\_Case\_Format-2.xlsx",<br>&emsp;"uploadType": "Attachment",<br>&emsp;"version": null,<br>&emsp;"platformType": "TestsigmaLab",<br>&emsp;"isPublic": null,<br>&emsp;"uploadStatus": "InProgress",<br>&emsp;"comments": null,<br>&emsp;"message": "Upload in progress",<br>&emsp;"status": 1,<br>&emsp;"nameFromApp": null,<br>&emsp;"versionFromApp": null,<br>&emsp;"fileSize": 9218,<br>&emsp;"preSignedURL": null,<br>&emsp;"signed": false<br>}<br><br>**Note: You might find some additional information in the Response Body apart from the above-mentioned keys. You can ignore those.**

### **Request/Response fields**

**ProjectId:** The ID of the Project where the file is to be uploaded. This can be found in Project Settings by checking the URL.

For example,  In the URL - https://app.testsigma.com/ui/projects/11/details, the Project ID is **11**

**name:** Name for the uploaded App

**uploadType:** Either one of ‘APK’, ‘IPA’ or ‘Attachment’
platformType: Either one of ‘TestsigmaLab’, ‘Browserstack’, ‘Kobiton’

**isPublic:** Either ‘true’ or ‘false’. Select whether the uploaded file should be public to the team or private to yourself.

**uploadStatus:** ‘InProgress’ or ‘Completed’. The upload status will be ‘InProgress’ while the file is being uploaded. This will be changed to ‘Completed’ once the file is fully uploaded in a few moments.

**applicationId:** The ID of the Application where the file is to be uploaded. This can be found from **Project Settings > Applications** by checking the URL.

For example, in the case of the URL - https://app.testsigma.com/ui/projects/11/apps/25, the Application ID is **25**

**fileContent:** Provide the path of the file to be uploaded followed by the ‘@’ character. 
Example: **@/Users/$USER/Downloads/test-app.apk**

**createdById/updatedById:** User ID of the creator/updater

**createdDate/updatedDate:** Date when the asset is created/updated

**version:** Version of the App as provided or deduced from the uploaded App Manifest File

---

---
##**Update File API**

This endpoint allows users to upload Attachments, IPA or APK Files via REST API for use in Test Plans.

|**Request Type**|PUT|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/uploads/<Upload_ID><br>The Upload ID can be obtained from the Uploads Page as mentioned in below section|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API Key mentioned above.|
|**Request Body Type**|Multipart form data|
|**Request Body(form data)**|fileContent = @“/Users/renju/Downloads/Sample Attachment File.pdf”<br>projectId = “11”<br>name = ”test-file4”<br>uploadType = “Attachment”<br>platformType = “TestsigmaLab”<br>isPublic = “true”<br>applicationId = “25”|
|**Response Body(JSON)**|{<br>&emsp;"id": 147,<br>&emsp;"projectId": 11,<br>&emsp;"createdById": 43,<br>&emsp;"updatedById": 43,<br>&emsp;"createdDate": 1633535450000,<br>&emsp;"updatedDate": 1635322081221,<br>&emsp;"name": "test-file",<br>&emsp;"appPath": "testsigmatech.com/uploads/11/147/Testfile.pdf",<br>&emsp;"fileName": "Testfile.pdf",<br>&emsp;"uploadType": "Attachment",<br>&emsp;"version": null,<br>&emsp;"testsigmaAppId": null,<br>&emsp;"testsigmaSauceLabsAppId": null,<br>&emsp;"browserStackAppId": null,<br>&emsp;"sauceLabsAppId": null,<br>&emsp;"platformType": "TestsigmaLab",<br>&emsp;"isPublic": null,<br>&emsp;"uploadStatus": "Completed",<br>&emsp;"comments": null,<br>&emsp;"message": "Uploaded successfully",<br>&emsp;"status": 1,<br>&emsp;"nameFromApp": null,<br>&emsp;"versionFromApp": null,<br>&emsp;"fileSize": 334666,<br>&emsp;"preSignedURL":<br>"https://s3.amazonaws.com/attachments-production.testsigma.com/testsigmatech.com/uploads/11/147/Testfile.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPDYqAbdKsCA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211027T080801Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10799&X-Amz-Credential=AS211027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0e2f85ef6c0069e014",<br>&emsp;"signed": false<br>}<br><br>**Note: You might find some additional information in the Response Body apart from the above-mentioned keys. You can ignore those.**

### **Request/Response fields**

[[info | NOTE:]]
| All properties mentioned in the section ‘Upload File properties for Upload file API’  are applicable here in addition to the properties mentioned below.

**Upload ID:** This can be found from the API Response while uploading the file. You can also find the Upload ID later from the Copy Path option.

The copy path URL is in the format:

**testsigma-storage:/\<account-name>/uploads/\<project-id>/\<upload-id>/file.pdf**

For example, In the URL: testsigma-storage:/testsigma.com/uploads/101/147/file.pdf, the app ID is 147











