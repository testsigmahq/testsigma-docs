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
  name: "Get Users Information"
  url: "#get-users-information"
- type: link
  name: "Get Test Suites Information"
  url: "#get-test-suites-information"
- type: link
  name: "Get Test Case Priorities"
  url: "#get-test-case-priorities"
- type: link
  name: "Get Test Case Labels"
  url: "#get-test-case-labels"
- type: link
  name: "Get Test Case Requirements"
  url: "#get-test-case-requirements"
---


---

Testsigma provides APIs that allow users to retrieve comprehensive project details, including information on users, test suites, test case priorities, labels, and test case requirements. This article explains how to fetch project-wide information using the available Testsigma API endpoints.


---

> ## **Prerequisites**
>
> Before you begin, ensure you have an [API Key](https://testsigma.com/docs/configuration/api-keys/) from Testsigma application.

---

## **Get Users Information**

Get all the available users in the Project.

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/users``` |
| **Authorization**   | Bearer API Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)**  | {<br>&emsp;&emsp;"content": [<br>&emsp;&emsp;&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 10,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"email": "bigbosskasyap41658237083302@gmail.com",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"firstName": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"lastName": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"userName": "bigbosskasyap41658237083302",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"status": "Active",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isDeleted": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isAdmin": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isSuperAdmin": true,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"userType": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isAPIUser": true,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isCrowdUser": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isMasked": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"gdpr": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1658237083000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1658237083000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"privileges": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"authType": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"identityServiceId": null<br>&emsp;&emsp;&emsp;&emsp;}<br>&emsp;&emsp;],<br>&emsp;&emsp;"pageable": {<br>&emsp;&emsp;&emsp;&emsp;"sort": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"empty": true<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;"offset": 0,<br>&emsp;&emsp;&emsp;&emsp;"pageNumber": 0,<br>&emsp;&emsp;&emsp;&emsp;"pageSize": 20,<br>&emsp;&emsp;&emsp;&emsp;"unpaged": false,<br>&emsp;&emsp;&emsp;&emsp;"paged": true<br>&emsp;&emsp;},<br>&emsp;&emsp;"last": true,<br>&emsp;&emsp;"totalPages": 1,<br>&emsp;&emsp;"totalElements": 2,<br>&emsp;&emsp;"sort": {<br>&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;&emsp;&emsp;"empty": true<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;"first": true,<br>&emsp;&emsp;"size": 20,<br>&emsp;&emsp;"number": 0,<br>&emsp;&emsp;"numberOfElements": 2,<br>&emsp;&emsp;"empty": false<br>} |

---

## **Get Test Suites Information**

Get all the available Test Suites in the Project.

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/test_suites``` |
| **Authorization**   | Bearer API Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)**  | {<br>&emsp;&emsp;"content": [<br>&emsp;&emsp;&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 84,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"appVersionId": 39,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"preRequisite": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Home page tests",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"description": "",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1567753941000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1577978117000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"preRequisiteSuite": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"lastRun": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 951,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"environmentResultId": 1093,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"suiteId": 84,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"startTime": 1657912101000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"endTime": 1657912630000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"duration": 61306,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"result": "FAILURE",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"status": "STATUS\_COMPLETED",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"message": "Test Suite execution failed",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"position": 1,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"executionInitiatedOn": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"agentPickedOn": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"deviceAllocatedOn": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sessionCreatedOn": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sessionCompletedOn": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"totalCount": 1,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"failedCount": 1,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"passedCount": 0,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"abortedCount": 0,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"stoppedCount": 0,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"notExecutedCount": 0,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"preRequisiteFailedCount": 0,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"queuedCount": 0,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isVisuallyPassed": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"testSuite": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"environmentResult": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sessionId": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"videoURL": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"logURLs": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"childResult": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"reRunParentId": null<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}<br>&emsp;&emsp;&emsp;&emsp;}<br>&emsp;&emsp;],<br>&emsp;&emsp;"pageable": {<br>&emsp;&emsp;&emsp;&emsp;"sort": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"empty": true<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;"pageNumber": 0,<br>&emsp;&emsp;&emsp;&emsp;"pageSize": 25,<br>&emsp;&emsp;&emsp;&emsp;"offset": 0,<br>&emsp;&emsp;&emsp;&emsp;"unpaged": false,<br>&emsp;&emsp;&emsp;&emsp;"paged": true<br>&emsp;&emsp;},<br>&emsp;&emsp;"last": true,<br>&emsp;&emsp;"totalElements": 18,<br>&emsp;&emsp;"totalPages": 1,<br>&emsp;&emsp;"sort": {<br>&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;&emsp;&emsp;"empty": true<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;"number": 0,<br>&emsp;&emsp;"first": true,<br>&emsp;&emsp;"numberOfElements": 1,<br>&emsp;&emsp;"size": 25,<br>&emsp;&emsp;"empty": false<br>} |


---

## **Get Test Case Priorities**

Get all the available Test Case Priorities in the Project.


| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/test_case_priorities``` |
| **Authorization**   | Bearer API Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)**  | {<br>&emsp;&emsp;"content": [<br>&emsp;&emsp;&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 46,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Critical",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"displayName": "Critical",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"recordActive": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectId": 10,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdBy": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedBy": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1550593550000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": null<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 47,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Major",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"displayName": "Major",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"recordActive": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectId": 10,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdBy": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedBy": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1550593550000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": null<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 48,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Medium",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"displayName": "Medium",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"recordActive": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectId": 10,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdBy": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedBy": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1550593550000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": null<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}<br>&emsp;&emsp;&emsp;&emsp;],<br>&emsp;&emsp;"pageable": {<br>&emsp;&emsp;&emsp;&emsp;"sort": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"empty": true<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;"pageNumber": 0,<br>&emsp;&emsp;&emsp;&emsp;"pageSize": 20,<br>&emsp;&emsp;&emsp;&emsp;"offset": 0,<br>&emsp;&emsp;&emsp;&emsp;"unpaged": false,<br>&emsp;&emsp;&emsp;&emsp;"paged": true<br>&emsp;&emsp;},<br>&emsp;&emsp;"last": false,<br>&emsp;&emsp;"totalElements": 3,<br>&emsp;&emsp;"totalPages": 1,<br>&emsp;&emsp;"first": true,<br>&emsp;&emsp;"sort": {<br>&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;&emsp;&emsp;"empty": true<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;"number": 0,<br>&emsp;&emsp;"numberOfElements": 20,<br>&emsp;&emsp;"size": 20,<br>&emsp;&emsp;"empty": false<br>} |

---

## **Get Test Case Labels**

Get all the available Test Case Priorities in the Project.

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/tags``` |
| **Authorization**   | Bearer API Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)**  | {<br>&emsp;&emsp;"content": [<br>&emsp;&emsp;&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 1,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Test",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"type": "TESTCASE",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"count": 1<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 2,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Test1",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"type": "TESTCASE",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"count": 1<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 3,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "Test2",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"type": "TEST\_CASE",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"count": 1<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}<br>&emsp;&emsp;&emsp;&emsp;],<br>&emsp;&emsp;"pageable": {<br>&emsp;&emsp;&emsp;&emsp;"sort": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"empty": true<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;"offset": 0,<br>&emsp;&emsp;&emsp;&emsp;"pageNumber": 0,<br>&emsp;&emsp;&emsp;&emsp;"pageSize": 20,<br>&emsp;&emsp;&emsp;&emsp;"unpaged": false,<br>&emsp;&emsp;&emsp;&emsp;"paged": true<br>&emsp;&emsp;},<br>&emsp;&emsp;"last": true,<br>&emsp;&emsp;"totalPages": 1,<br>&emsp;&emsp;"totalElements": 3,<br>&emsp;&emsp;"sort": {<br>&emsp;&emsp;&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;&emsp;&emsp;"empty": true<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;"first": true,<br>&emsp;&emsp;"size": 20,<br>&emsp;&emsp;"number": 0,<br>&emsp;&emsp;"numberOfElements": 3,<br>&emsp;&emsp;"empty": false<br>} |


---


## **Get Test Case Requirements**

Get all the available Test Case Requirements in the Project.

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/requirements``` |
| **Authorization**   | Bearer API Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)**  | {<br>&emsp;"content": [<br>&emsp;&emsp;{<br>&emsp;&emsp;&emsp;"id": 71,<br>&emsp;&emsp;&emsp;"requirementName": "Default Requirement",<br>&emsp;&emsp;&emsp;"requirementDescription": null,<br>&emsp;&emsp;&emsp;"requirementTypeId": 78,<br>&emsp;&emsp;&emsp;"requirementType": {<br>&emsp;&emsp;&emsp;&emsp;"id": 78,<br>&emsp;&emsp;&emsp;&emsp;"name": "Customer Requirements",<br>&emsp;&emsp;&emsp;&emsp;"displayName": "Customer Requirements",<br>&emsp;&emsp;&emsp;&emsp;"projectId": 17,<br>&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>&emsp;&emsp;&emsp;&emsp;"createdDate": 1658114333000,<br>&emsp;&emsp;&emsp;&emsp;"updatedDate": 1658114376000<br>&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;"files": null,<br>&emsp;&emsp;&emsp;"applicationVersionId": 47,<br>&emsp;&emsp;&emsp;"requirementId": null,<br>&emsp;&emsp;&emsp;"createdById": 9,<br>&emsp;&emsp;&emsp;"updatedById": 9,<br>&emsp;&emsp;&emsp;"customFields": "{}",<br>&emsp;&emsp;&emsp;"startTime": 1658114333000,<br>&emsp;&emsp;&emsp;"endTime": 1660706333000,<br>&emsp;&emsp;&emsp;"createdDate": 1658114333000,<br>&emsp;&emsp;&emsp;"updatedDate": 1658114377000,<br>&emsp;&emsp;&emsp;"plannedManualCount": 10,<br>&emsp;&emsp;&emsp;"plannedAutomationCount": 10,<br>&emsp;&emsp;&emsp;"requirementKey": null,<br>&emsp;&emsp;&emsp;"version": {<br>&emsp;&emsp;&emsp;&emsp;"id": 47,<br>&emsp;&emsp;&emsp;&emsp;"applicationId": 33,<br>&emsp;&emsp;&emsp;&emsp;"versionName": "1.0",<br>&emsp;&emsp;&emsp;&emsp;"description": null,<br>&emsp;&emsp;&emsp;&emsp;"startTime": 1658114333000,<br>&emsp;&emsp;&emsp;&emsp;"customFields": null,<br>&emsp;&emsp;&emsp;&emsp;"endTime": 1660706333000,<br>&emsp;&emsp;&emsp;&emsp;"application": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;"id": 33,<br>&emsp;&emsp;&emsp;&emsp;&emsp;"name": "IOSNative",<br>&emsp;&emsp;&emsp;&emsp;&emsp;"description": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;"customFields": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;"projectId": 17,<br>&emsp;&emsp;&emsp;&emsp;&emsp;"applicationType": "IOSNative",<br>&emsp;&emsp;&emsp;&emsp;&emsp;"project": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 17,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"name": "IMport11",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"description": "",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"customFields": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"hasMultipleApps": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"hasMultipleVersions": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isDemo": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"projectType": "WebApplication",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1658114333000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1658114333000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"files": null<br>&emsp;&emsp;&emsp;&emsp;&emsp;}<br>&emsp;&emsp;&emsp;&emsp;}<br>&emsp;&emsp;&emsp;}<br>&emsp;&emsp;},<br>&emsp;&emsp;"createdById": 9,<br>&emsp;&emsp;"updatedById": 9,<br>&emsp;&emsp;"createdDate": 1658114333000,<br>&emsp;&emsp;"updatedDate": 1658114333000<br>&emsp;},<br>&emsp;"createdDate": 1658114333000,<br>&emsp;"updatedDate": 1658114333000,<br>&emsp;"updatedById": 9,<br>&emsp;"createdById": 9<br>&emsp;}<br>&emsp;],<br>&emsp;"pageable": {<br>&emsp;&emsp;"sort": {<br>&emsp;&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;&emsp;"empty": true<br>&emsp;&emsp;},<br>&emsp;&emsp;"pageSize": 20,<br>&emsp;&emsp;"pageNumber": 0,<br>&emsp;&emsp;"offset": 0,<br>&emsp;&emsp;"paged": true,<br>&emsp;&emsp;"unpaged": false<br>&emsp;},<br>&emsp;"last": true,<br>&emsp;"totalElements": 10,<br>&emsp;"totalPages": 1,<br>&emsp;"first": true,<br>&emsp;"sort": {<br>&emsp;&emsp;"sorted": false,<br>&emsp;&emsp;"unsorted": true,<br>&emsp;&emsp;"empty": true<br>&emsp;},<br>&emsp;"number": 0,<br>&emsp;"numberOfElements": 10,<br>&emsp;"size": 20,<br>&emsp;"empty": false<br>} |

---