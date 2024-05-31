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
  name: "Fetch Test Plan Details"
  url: "#fetch-test-plan-details"
- type: link
  name: "Fetch Test Machine Details"
  url: "#fetch-test-machine-details"
- type: link
  name: "Fetch Test Suite Details"
  url: "#fetch-test-suite-details"
- type: link
  name: "Fetch Test Case Details"
  url: "#fetch-test-case-details"
- type: link
  name: "Fetch Test Step Details"
  url: "#fetch-test-step-details"
---

---

You can leverage Testsigma APIs to fetch detailed test results at all levels. Whether you need results for an entire test plan, a specific test machine, a test suite, an individual test case, or even the test step level, Testsigma's APIs give you the necessary endpoints to get this data. This article discusses how to fetch these results in Testsigma. 


---

## **Prerequisites**

- You should have an API Key. See, [generate API Keys in Testsigma](https://testsigma.com/docs/configuration/api-keys/).
- You should have a [Test Plan Run ID](https://testsigma.com/docs/api/test-plans/#obtaining-the-run-id)

---

## **Fetch Test Plan Details**

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v3/test_runs/<run_id>``` |
| **Authorization**   | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body**   | { <br> "id": 517, <br> "testPlanId": 420, <br> "buildNo": null, <br> "result": "FAILURE", <br> "startTime": "2024-05-29T07:29:19Z", <br> "endTime": "2024-05-29T07:33:17Z", <br> "duration": 238000, <br> "executor": "bharath.k@testsigma.com", <br> "triggeredType": "MANUAL", <br> "metrics": { <br> "id": 162, <br> "testPlanResultId": 517, <br> "totalCount": 8, <br> "failedCount": 4, <br> "passedCount": 4, <br> "stoppedCount": 0, <br> "notExecutedCount": 0, <br> "queuedCount": 0, <br> "runningCount": 0, <br> "consolidatedPlanTotalCount": 8, <br> "consolidatedPlanFailedCount": 4, <br> "consolidatedPlanPassedCount": 4, <br> "consolidatedPlanStoppedCount": 0, <br> "consolidatedPlanNotExecutedCount": 0, <br> "consolidatedPlanQueuedCount": 0, <br> "consolidatedPlanRunningCount": 0, <br> "result": "FAILURE", <br> "latestResult": "FAILURE", <br> "duration": 226000, <br> "consolidatedDuration": 226000 <br> } <br> } |

In the response body above, we fetched the test plan results with ID 517.

<br>

**INDEX:**

```
URL: /api/v2/test_runs?query=<TS_QUERY>&page=<number>
TYPE: GET
TS_QUERY: <parameter><operator><value> chained with , (ex: query=testPlanId:1,result:PASSED)

operator:

: = EQUAL
! = NOT EQUAL
> = GRATER THAN
< = LESS THAN
~ = LIKE
@ = IN
; = NOT IN
$ = CONTAINS

STATUS: 200/401/500/400

pagination: { page: <number>, pageSize: <number>, isLast: <boolean>, totalElements: <number> }

```

---

## **Fetch Test Machine Details**


| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v3/test_runs/<run_id>/test_machine_results/<machine_result_id>``` |
| **Authorization**   | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body**   | { <br> "id": 1434, <br> "testRunId": 517, <br> "result": "FAILURE", <br> "startTime": "2024-05-29T07:29:19Z", <br> "endTime": "2024-05-29T07:31:40Z", <br> "duration": 141000, <br> "deviceConfiguration": { <br> "title": "Windows Chrome", <br> "osVersion": "11", <br> "browser": "GoogleChrome", <br> "browserVersion": "123.0", <br> "resolution": "1920x1080", <br> "platform": "Windows", <br> "deviceName": null, <br> "hostName": "agent.testsigma.com", <br> "osType": "WINDOWS" <br> }, <br> "metrics": { <br> "id": 165, <br> "testDeviceResultId": 1434, <br> "testPlanResultId": 517, <br> "totalCount": 4, <br> "failedCount": 2, <br> "passedCount": 2, <br> "stoppedCount": 0, <br> "notExecutedCount": 0, <br> "queuedCount": 0, <br> "runningCount": 0, <br> "consolidatedTotalCount": 4, <br> "consolidatedFailedCount": 2, <br> "consolidatedPassedCount": 2, <br> "consolidatedStoppedCount": 0, <br> "consolidatedNotExecutedCount": 0, <br> "consolidatedQueuedCount": 0, <br> "consolidatedRunningCount": 0, <br> "result": "FAILURE", <br> "latestResult": "FAILURE", <br> "duration": 129000, <br> "consolidatedDuration": 129000 <br> }, <br> "appDetails": null <br> } |

In the response body above, we fetched the test machine results with ID 1434. 

**INDEX:**

```
URL: /api/v2/test_runs/{run_id}/test_machine_results?query=<TS_QUERY>&page=<number>
TYPE: GET
TS_QUERY: <parameter><operator><value> chained with , (ex: query=result:PASSED)

operator:

: = EQUAL
! = NOT EQUAL
> = GRATER THAN
< = LESS THAN
~ = LIKE
@ = IN
; = NOT IN
$ = CONTAINS

STATUS: 200/401/500/400 

pagination: { page: <number>, pageSize: <number>, isLast: <boolean>, totalElements: <number> }

```

---

## **Fetch Test Suite Details**

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v3/test_runs/<run_id>/test_suite_results/<suite_id>``` |
| **Authorization**   | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body**   | { <br> "id": 1383, <br> "suiteId": 359, <br> "testRunId": 517, <br> "testMachineRunId": 1434, <br> "startTime": "2024-05-29T07:29:19Z", <br> "endTime": "2024-05-29T07:30:33Z", <br> "duration": 74000, <br> "result": "FAILURE", <br> "metrics": { <br> "id": 293, <br> "testSuiteResultId": 1383, <br> "testDeviceResultId": 1434, <br> "testPlanResultId": 517, <br> "totalCount": 2, <br> "failedCount": 1, <br> "passedCount": 1, <br> "stoppedCount": 0, <br> "notExecutedCount": 0, <br> "queuedCount": 0, <br> "runningCount": 0, <br> "consolidatedTotalCount": 2, <br> "consolidatedFailedCount": 1, <br> "consolidatedPassedCount": 1, <br> "consolidatedStoppedCount": 0, <br> "consolidatedNotExecutedCount": 0, <br> "consolidatedQueuedCount": 0, <br> "consolidatedRunningCount": 0, <br> "result": "FAILURE", <br> "latestResult": "FAILURE", <br> "duration": 62000, <br> "consolidatedDuration": 62000 <br> } <br> } |

In the response body above, we fetched the test suite results with ID 1383.


**INDEX:**

```
URL: /api/v2/test_runs/{run_id}/test_suite_results?query=<TS_QUERY>&page=<number>
TYPE: GET
TS_QUERY: <parameter><operator><value> chained with , (ex: query=result:PASSED)

operator:

: = EQUAL
! = NOT EQUAL
> = GRATER THAN
< = LESS THAN
~ = LIKE
@ = IN
; = NOT IN
$ = CONTAINS

STATUS: 200/401/500/400

pagination: { page: <number>, pageSize: <number>, isLast: <boolean>, totalElements: <number> }

```

---

## **Fetch Test Case Details**

| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v3/test_runs/<run_id>/test_case_results/<case_result_id>``` |
| **Authorization**   | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body**   | { <br> "id": 3857, <br> "testCaseId": 609, <br> "startTime": "2024-05-29T07:29:31Z", <br> "endTime": "2024-05-29T07:29:55Z", <br> "duration": 23038, <br> "result": "FAILURE", <br> "isDisabled": false, <br> "isDataDriven": false, <br> "metrics": { <br> "id": 1089, <br> "testCaseResultId": 3857, <br> "testSuiteResultId": 1383, <br> "testDeviceResultId": 1434, <br> "testPlanResultId": 517, <br> "totalCount": 6, <br> "failedCount": 1, <br> "passedCount": 3, <br> "stoppedCount": 0, <br> "notExecutedCount": 2, <br> "queuedCount": 0, <br> "skippedCount": 0, <br> "runningCount": 0, <br> "result": "FAILURE", <br> "latestResult": "FAILURE", <br> "duration": 23038, <br> "consolidatedDuration": 23038 <br> } <br> } |

In the response body above, we fetched the test case results with ID 3857.

**INDEX:**

```
URL: /api/v2/test_runs/{run_id}/test_case_results?query=<TS_QUERY>&page=<number>
TYPE: GET
TS_QUERY: <parameter><operator><value> chained with , (ex: query=result:PASSED)

operator:

: = EQUAL
! = NOT EQUAL
> = GRATER THAN
< = LESS THAN
~ = LIKE
@ = IN
; = NOT IN
$ = CONTAINS

STATUS: 200/401/500/400

pagination: { page: <number>, pageSize: <number>, isLast: <boolean>, totalElements: <number> }

```

---

## **Fetch Test Step Details**


| **Request Type** | **GET** |
|----------|----------|
| **Endpoint**   | ```https://app.testsigma.com/api/v3/test_runs/<run_id>/test_case_results/<case_id>/step_results/``` |
| **Authorization** | Bearer Token |
| **Response Body Type**   | JSON   |
| **Response Body** | { <br> "content": [ <br> { "id": "3c51e933-7e15-41a0-893b-38e38b8258a2", <br> "testMachineResultId": 1434, <br> "testCaseResultId": 3857, <br> "testCaseId": 609, <br> "stepId": 2847, <br> "type": "NLP\_TEXT", <br> "action": "Navigate to https://simply-travel.testsigma.com/", <br> "message": "Successfully opened given URL.", <br> "errorCode": null, <br> "errorType": null, <br> "result": "SUCCESS", <br> "conditionalResult": null, <br> "visualTestResult": null, <br> "startTime": "2024-05-29T07:29:32Z", <br> "endTime": "2024-05-29T07:29:33Z", <br> "duration": 1133, <br> "visualEnabled": false }, <br> { "id": "c3a8fbeb-b508-41d2-83f7-6a0ca152e234", <br> "testMachineResultId": 1434, <br> "testCaseResultId": 3857, <br> "testCaseId": 609, <br> "stepId": 2848, <br> "type": "NLP\_TEXT", <br> "action": "Click on Login or Sign Up Button", <br> "message": "Successfully performed click action.", <br> "errorCode": null, <br> "errorType": null, <br> "result": "SUCCESS", <br> "conditionalResult": null, <br> "visualTestResult": null, <br> "startTime": "2024-05-29T07:29:37Z", <br> "endTime": "2024-05-29T07:29:39Z", <br> "duration": 2040, <br> "visualEnabled": false }, <br> { "id": "36bbdc50-ca05-4289-8342-c9e20d0491a4", <br> "testMachineResultId": 1434, <br> "testCaseResultId": 3857, <br> "testCaseId": 609, <br> "stepId": 2849, <br> "type": "NLP\_TEXT", <br> "action": "Click on Login Button", <br> "message": "Successfully performed click action.", <br> "errorCode": null, <br> "errorType": null, <br> "result": "SUCCESS", <br> "conditionalResult": null, <br> "visualTestResult": null, <br> "startTime": "2024-05-29T07:29:42Z", <br> "endTime": "2024-05-29T07:29:44Z", <br> "duration": 1539, <br> "visualEnabled": false }, <br> { "id": "abefa297-cb14-48f4-b9e8-60db12854c03", <br> "testMachineResultId": 1434, <br> "testCaseResultId": 3857, <br> "testCaseId": 609, <br> "stepId": 2850, <br> "type": "NLP\_TEXT", <br> "action": "Select the radio button Mobile Number Radio Button", <br> "message": "Unable to perform click/check action on element, Element is not displayed.", <br> "errorCode": 1000001, <br> "errorType": "ASSERT\_ERROR", <br> "result": "FAILURE", <br> "conditionalResult": null, <br> "visualTestResult": null, <br> "startTime": "2024-05-29T07:29:47Z", <br> "endTime": "2024-05-29T07:29:51Z", <br> "duration": 3803, <br> "visualEnabled": false }, <br> { "id": "49b04ef4-40fa-476f-b2a7-17d7a6e68230", <br> "testMachineResultId": 1434, <br> "testCaseResultId": 3857, <br> "testCaseId": 609, <br> "stepId": 2851, <br> "type": "NLP\_TEXT", <br> "action": "Enter 9876543212 in the Mobile Number Radio Button field", <br> "message": "Major Test step failed .", <br> "errorCode": null, <br> "errorType": null, <br> "result": "NOT\_EXECUTED", <br> "conditionalResult": null, <br> "visualTestResult": null, <br> "startTime": "2024-05-29T07:29:54Z", <br> "endTime": "2024-05-29T07:29:54Z", <br> "duration": 1, <br> "visualEnabled": false }, <br> { "id": "0a2c386f-5639-4276-b69e-f8715cd7a85c", <br> "testMachineResultId": 1434, <br> "testCaseResultId": 3857, <br> "testCaseId": 609, <br> "stepId": 2852, <br> "type": "NLP\_TEXT", <br> "action": "Click on Continue Button", <br> "message": "Major Test step failed .", <br> "errorCode": null, <br> "errorType": null, <br> "result": "NOT\_EXECUTED", <br> "conditionalResult": null, <br> "visualTestResult": null, <br> "startTime": "2024-05-29T07:29:54Z", <br> "endTime": null, <br> "duration": 0, <br> "visualEnabled": false } <br> ], <br> "totalElements": null, <br> "totalPages": 1, <br> "pageable": null, <br> "last": false, <br> "numberOfElements": 6, <br> "first": true, <br> "sort": null, <br> "number": 0, <br> "size": 100, <br>  "empty": false, <br> } |

In the response body above, we fetched the test step results of a test case with result ID 3857.

**INDEX:**

```
URL: /api/v2/test_runs/{run_id}/test_case_results/{case_result_id}/step_results?query=<TS_QUERY>&page=<number>
TYPE: GET
TS_QUERY: <parameter><operator><value> chained with , (ex: query=result:PASSED)

operator:

: = EQUAL
! = NOT EQUAL
> = GRATER THAN
< = LESS THAN
~ = LIKE
@ = IN
; = NOT IN
$ = CONTAINS

STATUS: 200/401/500/400

pagination: { page: <number>, pageSize: <number>, isLast: <boolean>, totalElements: <number> }

```

---