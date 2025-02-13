---
title: "Fetch Test Results at all Levels Using APIs"
page_title: "Test Results at all Levels Using APIs"
metadesc: "This article discusses how to fetch test results at test plan, test machine, test suite, test case, and step levels using APIs in Testsigma Application."
noindex: false
order: 21.7
page_id: "Test Results at all Levels Using APIs"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Fetch Test Plan Results"
  url: "#fetch-test-plan-results"
- type: link
  name: "Fetch Test Machine Results"
  url: "#fetch-test-machine-results"
- type: link
  name: "Fetch Test Suite Results"
  url: "#fetch-test-suite-results"
- type: link
  name: "Fetch Test Case Results"
  url: "#fetch-test-case-results"
- type: link
  name: "Fetch Test Step Results"
  url: "#fetch-test-step-results"
---

---

You can leverage Testsigma APIs to fetch detailed test results at all levels. Whether you need results for an entire test plan, a specific test machine, a test suite, an individual test case, or even the test step level, Testsigma's APIs give you the necessary endpoints to get this data. This article discusses how to fetch these results in Testsigma. 


---

> ## **Prerequisites**
>
> Before you begin, ensure you have an [API Key](https://testsigma.com/docs/configuration/api-keys/) and a [Test Plan Run ID](https://testsigma.com/docs/api/test-plans/#obtaining-the-run-id) from Testsigma application.


---

## **Fetch Test Plan Results**

### **Index for Fetching Test Run Results:**

> **URL:**  
> 
> ```https://app.testsigma.com/api/v1/test_runs/<run_id>```
>
> **TYPE:** GET
>
> **TS_QUERY:** &lt;parameter&gt;&lt;operator&gt;&lt;value&gt; chained with , (ex: query=testPlanId:1,result:PASSED)
>
> **Operators:** <br>
> - : = EQUAL <br>
> - ! = NOT EQUAL <br>
> - &gt; = GREATER THAN <br>
> - < = LESS THAN <br>
> - ~ = LIKE <br>
> - @ = IN <br>
> - ; = NOT IN <br>
> - $ = CONTAINS <br>
> 
> **STATUS:** 200/401/500/400
> 
> **Pagination:** { page: <number>, pageSize: <number>, isLast: <boolean>, totalElements: <number> }



| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/test_runs/<run_id>``` |
| **Authorization**   | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)**  | { <br> &nbsp;&nbsp;"id": 517, <br> &nbsp;&nbsp;"testPlanId": 420, <br> &nbsp;&nbsp;"buildNo": "run69", <br> &nbsp;&nbsp;"result": "FAILURE", <br> &nbsp;&nbsp;"startTime": "2024-05-29T07:29:19Z", <br> &nbsp;&nbsp;"endTime": "2024-05-29T07:33:17Z", <br> &nbsp;&nbsp;"duration": 238000, <br> &nbsp;&nbsp;"executor": "bharath.k@testsigma.com", <br> &nbsp;&nbsp;"triggeredType": "MANUAL", <br> &nbsp;&nbsp;"metrics": { <br> &nbsp;&nbsp;&nbsp;&nbsp;"id": 162, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testPlanResultId": 517, <br> &nbsp;&nbsp;&nbsp;&nbsp;"totalCount": 8, <br> &nbsp;&nbsp;&nbsp;&nbsp;"failedCount": 4, <br> &nbsp;&nbsp;&nbsp;&nbsp;"passedCount": 4, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stoppedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"notExecutedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"queuedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"runningCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedPlanTotalCount": 8, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedPlanFailedCount": 4, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedPlanPassedCount": 4, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedPlanStoppedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedPlanNotExecutedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedPlanQueuedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedPlanRunningCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "FAILURE", <br> &nbsp;&nbsp;&nbsp;&nbsp;"latestResult": "FAILURE", <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 226000, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedDuration": 226000 <br> &nbsp;&nbsp;} <br> } |

In the response body above, we fetched the test plan results with ID 517.

---

## **Fetch Test Machine Results**

### **Index for Fetching Test Machine Results:**

> **URL:** 
>
> ```https://app.testsigma.com/api/v1/test_runs/<run_id>/test_machine_results/<machine_result_id>```
>
> **TYPE:** GET
>
> **TS_QUERY:** &lt;parameter&gt;&lt;operator&gt;&lt;value&gt; chained with , (ex: query=testPlanId:1,result:PASSED)
>
> **Operators:** <br>
> - : = EQUAL <br>
> - ! = NOT EQUAL <br>
> - &gt; = GREATER THAN <br>
> - < = LESS THAN <br>
> - ~ = LIKE <br>
> - @ = IN <br>
> - ; = NOT IN <br>
> - $ = CONTAINS <br>
> 
> **STATUS:** 200/401/500/400
> 
> **Pagination:** { page: <number>, pageSize: <number>, isLast: <boolean>, totalElements: <number> }

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/test_runs/<run_id>/test_machine_results/<machine_result_id>``` |
| **Authorization**   | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)**   | { <br> &nbsp;&nbsp;"id": 1434, <br> &nbsp;&nbsp;"testRunId": 517, <br> &nbsp;&nbsp;"result": "FAILURE", <br> &nbsp;&nbsp;"startTime": "2024-05-29T07:29:19Z", <br> &nbsp;&nbsp;"endTime": "2024-05-29T07:31:40Z", <br> &nbsp;&nbsp;"duration": 141000, <br> &nbsp;&nbsp;"deviceConfiguration": { <br> &nbsp;&nbsp;&nbsp;&nbsp;"title": "Windows Chrome", <br> &nbsp;&nbsp;&nbsp;&nbsp;"osVersion": "11", <br> &nbsp;&nbsp;&nbsp;&nbsp;"browser": "GoogleChrome", <br> &nbsp;&nbsp;&nbsp;&nbsp;"browserVersion": "123.0", <br> &nbsp;&nbsp;&nbsp;&nbsp;"resolution": "1920x1080", <br> &nbsp;&nbsp;&nbsp;&nbsp;"platform": "Windows", <br> &nbsp;&nbsp;&nbsp;&nbsp;"deviceName": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"hostName": "agent.testsigma.com", <br> &nbsp;&nbsp;&nbsp;&nbsp;"osType": "WINDOWS" <br> &nbsp;&nbsp;}, <br> &nbsp;&nbsp;"metrics": { <br> &nbsp;&nbsp;&nbsp;&nbsp;"id": 165, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testDeviceResultId": 1434, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testPlanResultId": 517, <br> &nbsp;&nbsp;&nbsp;&nbsp;"totalCount": 4, <br> &nbsp;&nbsp;&nbsp;&nbsp;"failedCount": 2, <br> &nbsp;&nbsp;&nbsp;&nbsp;"passedCount": 2, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stoppedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"notExecutedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"queuedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"runningCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedTotalCount": 4, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedFailedCount": 2, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedPassedCount": 2, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedStoppedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedNotExecutedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedQueuedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedRunningCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "FAILURE", <br> &nbsp;&nbsp;&nbsp;&nbsp;"latestResult": "FAILURE", <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 129000, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedDuration": 129000 <br> &nbsp;&nbsp;}, <br> &nbsp;&nbsp;"appDetails": null <br> } |

In the response body above, we fetched the test machine results with ID 1434. 

---

## **Fetch Test Suite Results**

### **Index for Fetching Test Suite Results:**

> **URL:** ```https://app.testsigma.com/api/v1/test_runs/<run_id>/test_suite_results/<suite_id>```
>
> **TYPE:** GET
>
> **TS_QUERY:** &lt;parameter&gt;&lt;operator&gt;&lt;value&gt; chained with , (ex: query=testPlanId:1,result:PASSED)
>
> **Operators:** <br>
> - : = EQUAL <br>
> - ! = NOT EQUAL <br>
> - &gt; = GREATER THAN <br>
> - < = LESS THAN <br>
> - ~ = LIKE <br>
> - @ = IN <br>
> - ; = NOT IN <br>
> - $ = CONTAINS <br>
> 
> **STATUS:** 200/401/500/400
> 
> **Pagination:** { page: <number>, pageSize: <number>, isLast: <boolean>, totalElements: <number> }

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/test_runs/<run_id>/test_suite_results/<suite_result_id>``` |
| **Authorization**   | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)**   | { <br> &nbsp;&nbsp;"id": 1383, <br> &nbsp;&nbsp;"testRunId": 517, <br> &nbsp;&nbsp;"result": "FAILURE", <br> &nbsp;&nbsp;"startTime": "2024-05-29T07:29:19Z", <br> &nbsp;&nbsp;"endTime": "2024-05-29T07:30:33Z", <br> &nbsp;&nbsp;"duration": 74000, <br> &nbsp;&nbsp;"deviceConfiguration": null, <br> &nbsp;&nbsp;"metrics": { <br> &nbsp;&nbsp;&nbsp;&nbsp;"id": 293, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testDeviceResultId": 1434, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testPlanResultId": 517, <br> &nbsp;&nbsp;&nbsp;&nbsp;"totalCount": 2, <br> &nbsp;&nbsp;&nbsp;&nbsp;"failedCount": 1, <br> &nbsp;&nbsp;&nbsp;&nbsp;"passedCount": 1, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stoppedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"notExecutedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"queuedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"runningCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedTotalCount": 2, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedFailedCount": 1, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedPassedCount": 1, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedStoppedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedNotExecutedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedQueuedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedRunningCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "FAILURE", <br> &nbsp;&nbsp;&nbsp;&nbsp;"latestResult": "FAILURE", <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 62000, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedDuration": 62000 <br> &nbsp;&nbsp;}, <br> &nbsp;&nbsp;"appDetails": null <br> } |

In the response body above, we fetched the test suite results with ID 1383.

---

## **Fetch Test Case Results**

### **Index for Fetching Test Case Results:**

> **URL:** 
> 
> ```https://app.testsigma.com/api/v1/test_runs/<run_id>/test_case_results/<case_result_id>```
>
> **TYPE:** GET
>
> **TS_QUERY:** &lt;parameter&gt;&lt;operator&gt;&lt;value&gt; chained with , (ex: query=testPlanId:1,result:PASSED)
>
> **Operators:** <br>
> - : = EQUAL <br>
> - ! = NOT EQUAL <br>
> - &gt; = GREATER THAN <br>
> - < = LESS THAN <br>
> - ~ = LIKE <br>
> - @ = IN <br>
> - ; = NOT IN <br>
> - $ = CONTAINS <br>
> 
> **STATUS:** 200/401/500/400
> 
> **Pagination:** { page: <number>, pageSize: <number>, isLast: <boolean>, totalElements: <number> }


| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/test_runs/<run_id>/test_case_results/<case_result_id>``` |
| **Authorization**   | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)**   | { <br> &nbsp;&nbsp;"id": 3857, <br> &nbsp;&nbsp;"testCaseId": 609, <br> &nbsp;&nbsp;"startTime": "2024-05-29T07:29:31Z", <br> &nbsp;&nbsp;"endTime": "2024-05-29T07:29:55Z", <br> &nbsp;&nbsp;"duration": 23038, <br> &nbsp;&nbsp;"result": "FAILURE", <br> &nbsp;&nbsp;"isDisabled": false, <br> &nbsp;&nbsp;"isDataDriven": false, <br> &nbsp;&nbsp;"metrics": { <br> &nbsp;&nbsp;&nbsp;&nbsp;"id": 1089, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseResultId": 3857, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testSuiteResultId": 1383, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testDeviceResultId": 1434, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testPlanResultId": 517, <br> &nbsp;&nbsp;&nbsp;&nbsp;"totalCount": 6, <br> &nbsp;&nbsp;&nbsp;&nbsp;"failedCount": 1, <br> &nbsp;&nbsp;&nbsp;&nbsp;"passedCount": 3, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stoppedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"notExecutedCount": 2, <br> &nbsp;&nbsp;&nbsp;&nbsp;"queuedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"skippedCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"runningCount": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "FAILURE", <br> &nbsp;&nbsp;&nbsp;&nbsp;"latestResult": "FAILURE", <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 23038, <br> &nbsp;&nbsp;&nbsp;&nbsp;"consolidatedDuration": 23038 <br> &nbsp;&nbsp;}, <br> &nbsp;&nbsp;"appDetails": null <br> } |

In the response body above, we fetched the test case results with ID 3857.

---

## **Fetch Test Step Results**

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v1/test_runs/<run_id>/test_case_results/<case_id>/step_results``` |
| **Authorization** | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body (Sample)** | { <br> &nbsp;&nbsp;"content": [ <br> &nbsp;&nbsp;{ "id": "3c51e933-7e15-41a0-893b-38e38b8258a2", <br> &nbsp;&nbsp;&nbsp;&nbsp;"testMachineResultId": 1434, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseResultId": 3857, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseId": 609, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stepId": 2847, <br> &nbsp;&nbsp;&nbsp;&nbsp;"type": "NLP\_TEXT", <br> &nbsp;&nbsp;&nbsp;&nbsp;"action": "Navigate to https://simply-travel.testsigma.com/", <br> &nbsp;&nbsp;&nbsp;&nbsp;"message": "Successfully opened given URL.", <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorCode": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorType": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "SUCCESS", <br> &nbsp;&nbsp;&nbsp;&nbsp;"conditionalResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualTestResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"startTime": "2024-05-29T07:29:32Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"endTime": "2024-05-29T07:29:33Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 1133, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualEnabled": false }, <br> &nbsp;&nbsp;{ "id": "c3a8fbeb-b508-41d2-83f7-6a0ca152e234", <br> &nbsp;&nbsp;&nbsp;&nbsp;"testMachineResultId": 1434, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseResultId": 3857, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseId": 609, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stepId": 2848, <br> &nbsp;&nbsp;&nbsp;&nbsp;"type": "NLP\_TEXT", <br> &nbsp;&nbsp;&nbsp;&nbsp;"action": "Click on Login or Sign Up Button", <br> &nbsp;&nbsp;&nbsp;&nbsp;"message": "Successfully performed click action.", <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorCode": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorType": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "SUCCESS", <br> &nbsp;&nbsp;&nbsp;&nbsp;"conditionalResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualTestResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"startTime": "2024-05-29T07:29:37Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"endTime": "2024-05-29T07:29:39Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 2040, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualEnabled": false }, <br> &nbsp;&nbsp;{ "id": "36bbdc50-ca05-4289-8342-c9e20d0491a4", <br> &nbsp;&nbsp;&nbsp;&nbsp;"testMachineResultId": 1434, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseResultId": 3857, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseId": 609, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stepId": 2849, <br> &nbsp;&nbsp;&nbsp;&nbsp;"type": "NLP\_TEXT", <br> &nbsp;&nbsp;&nbsp;&nbsp;"action": "Click on Login Button", <br> &nbsp;&nbsp;&nbsp;&nbsp;"message": "Successfully performed click action.", <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorCode": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorType": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "SUCCESS", <br> &nbsp;&nbsp;&nbsp;&nbsp;"conditionalResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualTestResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"startTime": "2024-05-29T07:29:42Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"endTime": "2024-05-29T07:29:44Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 1539, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualEnabled": false }, <br> &nbsp;&nbsp;{ "id": "abefa297-cb14-48f4-b9e8-60db12854c03", <br> &nbsp;&nbsp;&nbsp;&nbsp;"testMachineResultId": 1434, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseResultId": 3857, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseId": 609, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stepId": 2850, <br> &nbsp;&nbsp;&nbsp;&nbsp;"type": "NLP\_TEXT", <br> &nbsp;&nbsp;&nbsp;&nbsp;"action": "Select the radio button Mobile Number Radio Button", <br> &nbsp;&nbsp;&nbsp;&nbsp;"message": "Unable to perform click/check action on element, Element is not displayed.", <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorCode": 1000001, <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorType": "ASSERT\_ERROR", <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "FAILURE", <br> &nbsp;&nbsp;&nbsp;&nbsp;"conditionalResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualTestResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"startTime": "2024-05-29T07:29:47Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"endTime": "2024-05-29T07:29:51Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 3803, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualEnabled": false }, <br> &nbsp;&nbsp;{ "id": "49b04ef4-40fa-476f-b2a7-17d7a6e68230", <br> &nbsp;&nbsp;&nbsp;&nbsp;"testMachineResultId": 1434, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseResultId": 3857, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseId": 609, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stepId": 2851, <br> &nbsp;&nbsp;&nbsp;&nbsp;"type": "NLP\_TEXT", <br> &nbsp;&nbsp;&nbsp;&nbsp;"action": "Enter 9876543212 in the Mobile Number Radio Button field", <br> &nbsp;&nbsp;&nbsp;&nbsp;"message": "Major Test step failed.", <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorCode": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorType": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "NOT\_EXECUTED", <br> &nbsp;&nbsp;&nbsp;&nbsp;"conditionalResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualTestResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"startTime": "2024-05-29T07:29:54Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"endTime": "2024-05-29T07:29:54Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 1, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualEnabled": false }, <br> &nbsp;&nbsp;{ "id": "0a2c386f-5639-4276-b69e-f8715cd7a85c", <br> &nbsp;&nbsp;&nbsp;&nbsp;"testMachineResultId": 1434, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseResultId": 3857, <br> &nbsp;&nbsp;&nbsp;&nbsp;"testCaseId": 609, <br> &nbsp;&nbsp;&nbsp;&nbsp;"stepId": 2852, <br> &nbsp;&nbsp;&nbsp;&nbsp;"type": "NLP\_TEXT", <br> &nbsp;&nbsp;&nbsp;&nbsp;"action": "Click on Continue Button", <br> &nbsp;&nbsp;&nbsp;&nbsp;"message": "Major Test step failed.", <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorCode": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"errorType": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"result": "NOT\_EXECUTED", <br> &nbsp;&nbsp;&nbsp;&nbsp;"conditionalResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualTestResult": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"startTime": "2024-05-29T07:29:54Z", <br> &nbsp;&nbsp;&nbsp;&nbsp;"endTime": null, <br> &nbsp;&nbsp;&nbsp;&nbsp;"duration": 0, <br> &nbsp;&nbsp;&nbsp;&nbsp;"visualEnabled": false } <br> &nbsp;&nbsp;], <br> &nbsp;&nbsp;"totalElements": null, <br> &nbsp;&nbsp;"totalPages": 1, <br> &nbsp;&nbsp;"pageable": null, <br> &nbsp;&nbsp;"last": false, <br> &nbsp;&nbsp;"numberOfElements": 6, <br> &nbsp;&nbsp;"first": true, <br> &nbsp;&nbsp;"sort": null, <br> &nbsp;&nbsp;"number": 0, <br> &nbsp;&nbsp;"size": 100, <br> &nbsp;&nbsp;"empty": false <br> } |

In the response body above, we fetched the test step results of a test case with result ID 3857.


---