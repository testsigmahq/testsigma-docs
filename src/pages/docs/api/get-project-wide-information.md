---
title: "Get Project Wide Information"
page_title: "Get information for your Testsigma Project"
metadesc: "Learn how to get detailed information for your Testsigma Project - users, suites, tags, requirement, and testcase priority using APIs"
noindex: false
order: 21.6
page_id: "Get Testsigma wide information"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Obtaining the Run ID"
  url: "#obtaining-the-run-id"
- type: link
  name: "Test Plan Status API"
  url: "#test-plan-status-api"
---


[[info | NOTE:]]
| You need to authenticate these requests with your Testsigma API Key.  See  [How to generate API Keys.](https://testsigma.com/docs/configuration/api-keys/)


---
## **API Specification**

## **Get Users**

Get all the available Users in the Project.
- Request Type: GET
- Endpoint: https://app.testsigma.com/api/v1/users
- Authorization: Bearer <API_Token>
- Sample Response: 

{<br>
&emsp;&emsp;"content": [<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 10,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"email": "bigbosskasyap41658237083302@gmail.com",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"firstName": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"lastName": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"userName": "bigbosskasyap41658237083302",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"status": "Active",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isDeleted": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isAdmin": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isSuperAdmin": true,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"userType": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isAPIUser": true,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isCrowdUser": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isMasked": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"gdpr": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1658237083000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1658237083000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"privileges": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"authType": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"identityServiceId": null<br>
&emsp;&emsp;&emsp;&emsp;}<br>
&emsp;&emsp;],<br>
&emsp;&emsp;"pageable": {<br>
&emsp;&emsp;&emsp;&emsp;"sort": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"empty": true<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;"offset": 0,<br>
&emsp;&emsp;&emsp;&emsp;"pageNumber": 0,<br>
&emsp;&emsp;&emsp;&emsp;"pageSize": 20,<br>
&emsp;&emsp;&emsp;&emsp;"unpaged": false,<br>
&emsp;&emsp;&emsp;&emsp;"paged": true<br>
&emsp;&emsp;},<br>
&emsp;&emsp;"last": true,<br>
&emsp;&emsp;""totalPages": 1,<br>
&emsp;&emsp;""totalElements": 2,<br>
&emsp;&emsp;""sort": {<br>
&emsp;&emsp;"&emsp;&emsp;""sorted": false,<br>
&emsp;&emsp;"&emsp;&emsp;""unsorted": true,<br>
&emsp;&emsp;"&emsp;&emsp;""empty": true<br>
&emsp;&emsp;"},<br>
&emsp;&emsp;""first": true,<br>
&emsp;&emsp;""size": 20,<br>
&emsp;&emsp;""number": 0,<br>
&emsp;&emsp;""numberOfElements": 2,<br>
&emsp;&emsp;""empty": false<br>
}<br>


&emsp;

---

## **Get Test Suites**

Get all the available Test Suites in the Project.
- Request Type: GET
- Endpoint: https://app.testsigma.com/api/v1/test_suites
- Authorization: Bearer <API_Token>
- Sample Response: 


{<br>
&emsp;&emsp;"content": [<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 84,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"appVersionId": 39,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"preRequisite": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Home page tests",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"description": "",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1567753941000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1577978117000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"preRequisiteSuite": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"lastRun": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 951,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"environmentResultId": 1093,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"suiteId": 84,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"startTime": 1657921201000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"endTime": 1657921263000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"duration": 61306,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"result": "FAILURE",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"status": "STATUS_COMPLETED",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"message": " Test Suite execution failed",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"position": 1,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"executionInitiatedOn": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"agentPickedOn": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"deviceAllocatedOn": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sessionCreatedOn": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sessionCompletedOn": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"totalCount": 1,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"failedCount": 1,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"passedCount": 0,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"abortedCount": 0,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"stoppedCount": 0,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"notExecutedCount": 0,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"preRequisiteFailedCount": 0,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"queuedCount": 0,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isVisuallyPassed": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"testSuite": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"environmentResult": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sessionId": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"videoURL": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"logURLS": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"childResult": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"reRunParentId": null<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;],<br>
&emsp;&emsp;"pageable": {<br>
&emsp;&emsp;&emsp;&emsp;"sort": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"empty": true<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;"pageNumber": 0,<br>
&emsp;&emsp;&emsp;&emsp;"pageSize": 25,<br>
&emsp;&emsp;&emsp;&emsp;"offset": 0,<br>
&emsp;&emsp;&emsp;&emsp;"unpaged": false,<br>
&emsp;&emsp;&emsp;&emsp;"paged": true<br>
&emsp;&emsp;},<br>
&emsp;&emsp;"last": true,<br>
&emsp;&emsp;"totalElements": 18,<br>
&emsp;&emsp;"totalPages": 1,<br>
&emsp;&emsp;"sort": {<br>
&emsp;&emsp;"sorted": false,<br>
&emsp;&emsp;"unsorted": true,<br>
&emsp;&emsp;"empty": true<br>
&emsp;&emsp;},<br>
&emsp;&emsp;"number": 0,<br>
&emsp;&emsp;"first": true,<br>
&emsp;&emsp;"numberOfElements": 1,<br>
&emsp;&emsp;"size": 25,<br>
&emsp;&emsp;"empty": false<br>
}<br>


&emsp;

---

## **Get Test Case Priorities**

Get all the available Test Case Priorities in the Project.
- Request Type: GET
- Endpoint: https://app.testsigma.com/api/v1/test_case_priorities
- Authorization: Bearer <API_Token>
- Sample Response: 
{
&emsp;&emsp;"content": [<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 46,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Critical",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"displayName": "Critical",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"recordActive": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectId": 10,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdBy": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedBy": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1550559355000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": null<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 47,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Major",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"displayName": "Major",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"recordActive": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectId": 10,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdBy": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedBy": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1550559355000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": null<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 48,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Medium",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"displayName": "Medium",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"recordActive": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectId": 10,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdBy": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedBy": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1550559355000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": null<br>
&emsp;&emsp;&emsp;&emsp;}<br>
&emsp;&emsp;],<br>
&emsp;&emsp;"pageable": {<br>
&emsp;&emsp;&emsp;&emsp;"sort": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"empty": true<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;"pageNumber": 0,<br>
&emsp;&emsp;&emsp;&emsp;"pageSize": 20,<br>
&emsp;&emsp;&emsp;&emsp;"offset": 0,<br>
&emsp;&emsp;&emsp;&emsp;"unpaged": false,<br>
&emsp;&emsp;&emsp;&emsp;"paged": true<br>
&emsp;&emsp;},<br>
&emsp;&emsp;"last": false,<br>
&emsp;&emsp;"totalElements": 3,<br>
&emsp;&emsp;"totalPages": 1,<br>
&emsp;&emsp;"first": true,<br>
&emsp;&emsp;"sort": {<br>
&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>
&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>
&emsp;&emsp;&emsp;&emsp;"empty": true<br>
&emsp;&emsp;},<br>
&emsp;&emsp;"number": 0,<br>
&emsp;&emsp;"numberOfElements": 20,<br>
&emsp;&emsp;"size": 20,<br>
&emsp;&emsp;"empty": false<br>
}<br>

&emsp;

---

## **Get Test Case Labels**

Get all the available Test Case Priorities in the Project.
- Request Type: GET
- Endpoint: https://app.testsigma.com/api/v1/tags
- Authorization: Bearer <API_Token>
- Sample Response:

{<br>
&emsp;&emsp;"content": [<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 1,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Test",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"type": "TEST_CASE",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"count": 1<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 2,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Test1",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"type": "TEST_CASE",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"count": 1<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 3,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Test2",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"type": "TEST_CASE",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"count": 1<br>
&emsp;&emsp;&emsp;&emsp;}<br>
&emsp;&emsp;],<br>
&emsp;&emsp;"pageable": {<br>
&emsp;&emsp;&emsp;&emsp;"sort": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"empty": true<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;"offset": 0,<br>
&emsp;&emsp;&emsp;&emsp;"pageNumber": 0,<br>
&emsp;&emsp;&emsp;&emsp;"pageSize": 20,<br>
&emsp;&emsp;&emsp;&emsp;"unpaged": false,<br>
&emsp;&emsp;&emsp;&emsp;"paged": true<br>
&emsp;&emsp;},<br>
&emsp;&emsp;"last": true,<br>
&emsp;&emsp;"totalPages": 1,<br>
&emsp;&emsp;"totalElements": 3,<br>
&emsp;&emsp;"sort": {<br>
&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>
&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>
&emsp;&emsp;&emsp;&emsp;"empty": true<br>
&emsp;&emsp;},<br>
&emsp;&emsp;"first": true,<br>
&emsp;&emsp;"size": 20,<br>
&emsp;&emsp;"number": 0,<br>
&emsp;&emsp;"numberOfElements": 3,<br>
&emsp;&emsp;"empty": false<br>
}<br>


&emsp;

---


## **Get Test Case Requirements**

Get all the available Test Case Requirements in the Project.
- Request Type: GET
- Endpoint: https://app.testsigma.com/api/v1/requirements
- Authorization: Bearer <API_Token>
- Sample Response:

{<br>
&emsp;&emsp;"content": [<br>
&emsp;&emsp;&emsp;&emsp;{<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 71,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"requirementName": "Default Requirement",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"requirementDescription": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"requirementTypeId": 78,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"requirementType": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 78,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Customer Requirements",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"displayName": "Customer Requirements",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectId": 17,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1658114333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1658114376000<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"files": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"applicationVersionId": 47,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"requirementId": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"customFields": "{}",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"startTime": 1658114333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"endTime": 1660706333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1658114333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1658114377000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"plannedManualCount": 10,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"plannedAutomationCount": 10,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"requirementKey": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"version": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 47,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"applicationId": 33,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"versionName": "1.0",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"description": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"startTime": 1658114333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"customFields": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"endTime": 1660706333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"application": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 33,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "IOSNative",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"description": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"customFields": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectId": 17,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"applicationType": "IOSNative",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"project": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 17,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "IMport11",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"description": "",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"customFields": null,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"hasMultipleApps": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"hasMultipleVersions": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isDemo": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectType": "WebApplication",<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1658114333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1658114333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"files": null<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1658114333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1658114333000<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1658114333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1658114333000,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}<br>
&emsp;&emsp;&emsp;&emsp;}<br>
&emsp;&emsp;],<br>
&emsp;&emsp;"pageable": {<br>
&emsp;&emsp;&emsp;&emsp;"sort": {<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"empty": true<br>
&emsp;&emsp;&emsp;&emsp;},<br>
&emsp;&emsp;&emsp;&emsp;"pageSize": 20,<br>
&emsp;&emsp;&emsp;&emsp;"pageNumber": 0,<br>
&emsp;&emsp;&emsp;&emsp;"offset": 0,<br>
&emsp;&emsp;&emsp;&emsp;"paged": true,<br>
&emsp;&emsp;&emsp;&emsp;"unpaged": false<br>
&emsp;&emsp;},<br>
&emsp;&emsp;"last": true,<br>
&emsp;&emsp;"totalElements": 10,<br>
&emsp;&emsp;"totalPages": 1,<br>
&emsp;&emsp;"first": true,<br>
&emsp;&emsp;"sort": {<br>
&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>
&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>
&emsp;&emsp;&emsp;&emsp;"empty": true<br>
&emsp;&emsp;},<br>
&emsp;&emsp;"number": 0,<br>
&emsp;&emsp;"numberOfElements": 10,<br>
&emsp;&emsp;"size": 20,<br>
&emsp;&emsp;"empty": false<br>
}<br>

&emsp;

---