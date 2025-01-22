---
title: "Rerun Test Cases from Run Results using API"
page_title: "Rerun Test Cases from Run Results using APII"
metadesc: "Learn in detail how to rerun failed test cases, all test cases, or custom test cases from a particular test run result in Testsigma using REST API."
noindex: false
order: 21.87
page_id: "Rerun Test Cases from a Test Run"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Test Case Execution details using REST API"
  url: "#test-case-execution-details-using-rest-api"
- type: link
  name: "Trigger Rerun using REST API"
  url: "#trigger-rerun-using-rest-api"
- type: link
  name: "Stop Rerun using REST API"
  url: "#stop-rerun-using-rest-api"
---

---

In Testsigma, you can re-run the test cases from a test run result using API. This article discusses how to rerun failed test cases, all test cases, or custom test cases from a particular test run result using REST API.

---

## **Test Case Execution details using REST API**
This endpoint allows users to get details of all Test case executions using REST API.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/execution_results/986/test_case_results|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body**|<pre>{ <br> "executionId": 268,<br> "executionResultId": 986,<br> "result": "FAILURE",<br> "status": "STATUS_COMPLETED",<br> "testCases": [<br> {<br> "testCaseId": 413,<br> "testCaseName": "03 data driven small",<br> "testCaseResultId": 7975,<br> "result": "FAILURE",<br> "isDataDrivenCase": true,<br> "iterationResults": [<br> {<br> "iterationResultId": 7963,<br> "setName": "examples",<br> "result": "SUCCESS"<br> },<br> {<br> "iterationResultId": 7976,<br> "setName": "travels",<br> "result": "FAILURE"<br> },<br> {<br> "iterationResultId": 7965,<br> "setName": "examples 1",<br> "result": "FAILURE"<br> }<br> ],<br> "testSuiteId": 197,<br> "testSuiteName": "02 DD Small",<br> "testSuiteResultId": 2295,<br> "machineId": 414,<br> "machineTitle": "machine 2",<br> "machineResultId": 2370<br> }<br> ]<br> }<pre>|

**Request fields**<br>
**executionId:** Execution ID of Test Plan<br>
**executionResultId:** Result ID of Test Plan Execution<br>
**testCaseId:** ID of Test Case<br>
**testCaseResultId:** ID of Test Case result<br>
**iterationResultId:** ID of iteration result<br>
**testSuiteId:** ID of Test Suite<br>
**testSuiteResultId:**  ID of Test Suite result<br>

---

## **Trigger Rerun using REST API**
This endpoint allows users to trigger the rerun of selected test cases using REST API.

|**Request Type**|**POST**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/execution_results|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body**|<pre>{ <br> "executionId": 336,<br> "executionResultId": 467,<br> "isReRun": true,<br> "reRunType": "USER\_PICKED",<br> "testCaseResultRequests": [<br> {<br> "id": 2880<br> },<br> {<br> "id": 2874<br> }<br> ]<br> }<pre>|
|**Response Body**|<pre>{ <br>  "id": 487,<br> "execution": null,<br> "executionId": 336,<br> "startTime": 1679291448332,<br> "endTime": null,<br> "duration": null,<br> "result": "QUEUED",<br> "status": "STATUS\_CREATED",<br> "message": "Test Plan execution is initiated and waiting to be queued",<br> "executedBy": 10,<br> "buildNo": null,<br> "environmentId": null,<br> "totalCount": 0,<br> "failedCount": 0,<br> "passedCount": 0,<br> "stoppedCount": 0,<br> "notExecutedCount": 0,<br> "queuedCount": 0,<br> "runningCount": 0,<br> "visualTestResult": null,<br> "environment": null,<br> "childResult": null,<br> "reRunParentId": 469,<br> "triggeredType": "API",<br> "totalRunningCount": 0,<br> "executionDetails": {<br> "page\_timeout": 30,<br> "element\_timeout": 30,<br> "recovery\_action": "Run\_Next\_Testcase",<br> "on\_aborted\_action": "Reuse\_Session",<br> "screenshot\_option": "ALL\_TYPES",<br> "group\_prerequisite\_fail": "Abort",<br> "test\_case\_prerequisite\_fail": "Abort",<br> "test\_step\_prerequisite\_fail": "Run\_Next\_Testcase",<br>"global\_param\_name": null<br> },<br> "totalQueuedCount": 0,<br> "mobileInspectionId": null,<br> "environmentResultsDTO": null,<br> "executionResultConfig": null,<br> "isReRunEnabled": false,<br> "consolidatedResult": "QUEUED",<br> "consolidatedStatus": "STATUS\_CREATED",<br> "resultType": "ORIGINAL",<br> "consolidatedDuration": null,<br> "runTestCasesInParallel": false,<br> "runTestSuitesInParallel": false,<br> "scheduledId": null,<br> "testPlanHookResults": null<br> }<pre>|

[[info | **NOTE**:]]
|If your test case is data-driven, and you need to add iterations, you need to send a different payload. Refer to the sample payload below:
|<pre><code>{<br> "executionId": 325,<br> "executionResultId": 473,<br> "isReRun": true,<br> "reRunType": "USER_PICKED",<br> "testCaseResultRequests": [<br> { <br> "id": 2915,<br> "iterationReRunType":"USER_PICKED",<br> "iterationResultIds": [<br> 2916, 2917<br>]<br> }<br> ]<br> }</code></pre>

**Request fields**<br>
**executionId:** Test Plan Execution ID<br>
**executionResultId:** Test Plan Execution result ID<br>
**reRunType:** Test cases you want to rerun - "ALL\_TESTS / ONLY\_FAILED\_TESTS / ALL\_ITERATIONS / ONLY\_FAILED\_ITERATIONS/ USER\_PICKED"<br>
**iterationReRunType:** Iterations you want to rerun - “ALL/FAILED/PASSED/USER\_PICKED"<br>

**Response fields**<br>
**Id:** ID of the Test Plan Result<br>
**Execution:** The Test Plan details are located within the nested Execution JSON Object including the Test Plan ID as "id," Application Version ID as "applicationVersionId," Test Plan name as "name," Test Plan Description as "description" and so on.<br>
**result:** Result Status of the Test Plan - QUEUED, PASSED, FAILED, ABORTED, or STOPPED<br>
**status:** Current Status of the Test Plan creation - STATUS\_CREATED<br>
**executedBy:** ID of the executor<br>
**buildNo:** Build Number specified in the Test Plan Trigger call<br>
**isVisuallyPassed:** Whether visual testing passed or not. True or False.<br>
**environment:** Environment parameter selected for the Test Plan<br>
**triggeredType:** Triggered type for the Test Plan whether by API or via Testsigma App<br>
**totalRunningCount:** Total number of running tests<br>
**page_timeout:** Global Page load timeout in seconds<br>
**element\_timeout:** Global Element load timeout in seconds<br>
**recovery\_action:** Action to be performed on test failure - "Run\_Next\_Testcase"<br>
**on_aborted\_action:** Action to be performed on test abort - "Reuse\_Session"<br>
**screenshot\_option:** When to take screenshots - "FAILED\_STEPS", “ALL\_STEPS”, “NONE”<br>
**group\_prerequisite\_fail:** Action to perform on Test Suite prerequisite failure<br>
**test\_case\_prerequisite\_fail:** Action to perform on Test Case prerequisite failure<br>
**test\_step\_prerequisite\_fail:** Action to perform on Test Step prerequisite failure<br>
**totalQueuedCount:** Total number of queued tests<br>

---

## **Stop Rerun using REST API**
This endpoint allows users to stop the rerun of already executed test cases using REST API.

|**Request Type**|**PUT**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/execution_results|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body**|<pre>{ <br> "canStopAll": true,<br> "result": "STOPPED"<br> }<pre>|
|**Response Body**|<pre>{ <br>"id": 1165,<br> "execution": {<br> "id": 339,<br> "applicationVersionId": 47,<br>"name": "12 small plan pass",<br> "description": null,<br> "mailList": "manoharkrishna@testsigma.com",<br> "elementTimeOut": 30,<br> "pageTimeOut": 30,<br> "environmentId": null,<br> "screenshot": "ALL\_TYPES",<br> "recoveryAction": "Run\_Next\_Testcase",<br> "onAbortedAction": "Reuse\_Session",<br> "onSuitePreRequisiteFail": "Abort",<br> onStepPreRequisiteFail": "Run\_Next\_Testcase",<br> reRunType": "NONE",<br> "isManual": false,<br> "applicationVersion": null,<br> "lastRun": null,<br> "slack": null,<br> "createdDate": 1677482960000,<br> "updatedDate": 1679304114000,<br> "createdById": 9,<br> "updatedById": 12,<br> "matchBrowserVersion": false,<br> "notificationStatusList": [<br> "1",<br> "0",<br> "9",<br> "5",<br> "3",<br> "6"<br> ],<br> "msTeamsConnectorNotificationEnabled": false,<br> "retrySessionCreation": false,<br> "retrySessionCreationTimeout": null,<br> "lastRunId": 1165,<br> "googleChatConnectorNotificationEnabled": false, <br> "slackConnectorNotificationEnabled": false,<br> "entityType": "EXECUTION",<br> "environments": [],<br> "hookData": null,<br> "postHookId": null,<br> "postPlanHook": null,<br> "visualTestResultTimeOut": 2,<br> "onTestCasePreRequisiteFail": "Abort",<br> "executionType": "CUSTOM"<br> },<br> "executionId": 339,<br> "startTime": 1679304114000,<br> "endTime": 1679304125763,<br> "duration": 11763,<br> "result": "STOPPED",<br> "status": "STATUS\_COMPLETED",<br> "message": "User stopped the Test Plan",<br> "executedBy": 12,<br> "buildNo": null,<br> "environmentId": null,<br> "totalCount": 1,<br> "failedCount": 0,<br> "passedCount": 0,<br> "stoppedCount": 0,<br> "notExecutedCount": 0,<br> "queuedCount": 0,<br> "runningCount": 1,<br> "visualTestResult": null,<br> "environment": null,<br> "childResult": null,<br> "reRunParentId": null,<br> "triggeredType": "MANUAL",<br> "totalRunningCount": 0,<br> "executionDetails": {<br> "page\_timeout": 30,<br> "element\_timeout": 30,<br> "recovery\_action": "Run\_Next\_Testcase",<br> "on\_aborted\_action": "Reuse\_Session",<br> "screenshot\_option": "ALL\_TYPES",<br> "group\_prerequisite\_fail": "Abort",<br> "test\_case\_prerequisite\_fail": "Abort",<br> "test\_step\_prerequisite\_fail": "Run\_Next\_Testcase",<br> "global\_param\_name": null<br> },<br> "totalQueuedCount": 0,<br> "mobileInspectionId": null,<br> "environmentResultsDTO": null,<br> "executionResultConfig": null,<br> "isReRunEnabled": false,<br> "consolidatedResult": "STOPPED",<br> "consolidatedStatus": "STATUS_COMPLETED",<br> "resultType": "ORIGINAL",<br> "consolidatedDuration": 11763,<br> "runTestCasesInParallel": false,<br> "runTestSuitesInParallel": false,<br> "scheduledId": null,<br> "testPlanHookResults": null<br> }<pre>|

[[info | **NOTE**:]]
| If you want to stop only one execution run instead, you need to pass **"canStopAll": false**. By default, it is **true**.


**Request fields**<br>
**canStopAll:** "true” if you want to stop all executions. “false” if you want to stop only some executions.<br>
**result:** Result of Execution.

**Response fields**<br>
**Id:** ID of the Test Plan Result<br>
**Execution:** The Test Plan details are located within the nested Execution JSON Object including the Test Plan ID as "id", Application Version ID as "applicationVersionId", Test Plan name as "name", Test Plan Description as "description" and so on.<br>
**result:** Result Status of the Test Plan - QUEUED, PASSED, FAILED, ABORTED, or STOPPED<br>
**status:** Current Status of the Test Plan creation - STATUS\_CREATED<br>
**executedBy:** ID of the executor<br>
**buildNo:** Build Number specified in the Test Plan Trigger call<br>
**environment:** Environment parameter selected for the Test Plan<br>
**triggeredType:** Triggered type for the Test Plan whether by API or via Testsigma App<br>
**totalRunningCount:** Total number of running tests<br>
**page\_timeout:** Global Page load timeout in seconds<br>
**element\_timeout:** Global Element load timeout in seconds<br>
**recovery\_action:** Action to be performed on test failure - "Run\_Next\_Testcase"<br>
**on\_aborted\_action:** Action to be performed on test abort - "Reuse\_Session"<br>
**screenshot\_option:** When to take screenshots - "FAILED\_STEPS", "ALL\_STEPS", "NONE"<br>
**group\_prerequisite\_fail:** Action to perform on Test Suite prerequisite failure<br>
**test\_case\_prerequisite\_fail:** Action to perform on Test Case prerequisite failure<br>
**test\_step\_prerequisite\_fail:** Action to perform on Test Step prerequisite failure<br>
**totalQueuedCount:** Total number of queued tests<br>



---