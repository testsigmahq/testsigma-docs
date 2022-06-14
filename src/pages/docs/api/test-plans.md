---
title: "Trigger Test Plans remotely"
page_title: "Trigger Test Plans remotely using Testsigma"
metadesc: "How to trigger Test Plan Execution remotely using Testsigma REST API Endpoints"
noindex: false
order: 21.4
page_id: "Trigger Test Plans remotely"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Test Plan - Start Test Execution API"
  url: "#test-plan---start-test-execution-api"
- type: link
  name: "Obtaining the Run ID"
  url: "#obtaining-the-run-id"
- type: link
  name: "Test Plan Status API"
  url: "#test-plan-status-api"
---

---

You can use Testsigma API to trigger test executions remotely. This is useful when you want to fully automate continuous testing within your CI/CD pipeline, and have already integrated Testsigma with a CI tool you use, such as Jenkins, TravisCI, GitLab, Codeship, CircleCI, etc..

You should be familiar with creating and running Test Plans. See [Manage Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/)

[[info | NOTE:]]
| You need to authenticate these requests with your Testsigma API Key. See [How to generate API Keys](https://testsigma.com/docs/configuration/api-keys/)

---
##**Test Plan - Start Test Execution API**
This endpoint allows users to trigger a Test Plan execution remotely.

|**Request Type**| POST                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|**Endpoint**| https://app.testsigma.com/api/v1/execution_results                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|**Authorization**| Bearer <api\_token><br><api\_token> is the same as the Testsigma API Key mentioned above.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|**Request Body Type**| JSON                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|**Request Body**| {<br>&emsp;&emsp;&emsp;"executionId": "<test\_plan\_id>",<br>&emsp;&emsp;&emsp;"uploadVersions": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"<Device_ID>": <UPLOAD_VERSION_ID>   , <Device_ID>": <UPLOAD_VERSION_ID><br>&emsp;&emsp;&emsp;&emsp;&emsp;}<br>}<br>Get Device ID from the  Test Development -> Test Plan Details page ->Test Devices <br/>Get the <ID> from the  GET Upload Version API, this is the version of upload you want to use on the test plan  <br> ![Device ID from Test Plan Details Page](https://docs.testsigma.com/images/api/test-plans/test-plan-device-id.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|**Response Body**| {<br>&emsp;&emsp;&emsp;"id": 337,<br>&emsp;&emsp;&emsp;"execution": null,<br>&emsp;&emsp;&emsp;"executionId": 274,<br>&emsp;&emsp;&emsp;"startTime": 1633612675726,<br>&emsp;&emsp;&emsp;"endTime": null,<br>&emsp;&emsp;&emsp;"duration": null,<br>&emsp;&emsp;&emsp;"result": "QUEUED",<br>&emsp;&emsp;&emsp;"status": "STATUS\_CREATED",<br>&emsp;&emsp;&emsp;"message": "Test Plan execution is initiated and waiting to be queued",<br>&emsp;&emsp;&emsp;"executedBy": 43,<br>&emsp;&emsp;&emsp;"buildNo": null,<br>&emsp;&emsp;&emsp;"environmentId": null,<br>&emsp;&emsp;&emsp;"totalCount": 0,<br>&emsp;&emsp;&emsp;"failedCount": 0,<br>&emsp;&emsp;&emsp;"passedCount": 0,<br>&emsp;&emsp;&emsp;"abortedCount": 0,<br>&emsp;&emsp;&emsp;"stoppedCount": 0,<br>&emsp;&emsp;&emsp;"notExecutedCount": 0,<br>&emsp;&emsp;&emsp;"preRequisiteFailedCount": 0,<br>&emsp;&emsp;&emsp;"queuedCount": 0,<br>&emsp;&emsp;&emsp;"isVisuallyPassed": null,<br>&emsp;&emsp;&emsp;"environment": null,<br>&emsp;&emsp;&emsp;"childResult": null,<br>&emsp;&emsp;&emsp;"reRunParentId": null,<br>&emsp;&emsp;&emsp;"reRunType": null,<br>&emsp;&emsp;&emsp;"triggeredType": "API",<br>&emsp;&emsp;&emsp;"totalRunningCount": 0,<br>&emsp;&emsp;&emsp;"executionDetails": {<br>&emsp;&emsp;&emsp;"page\_timeout": 30,<br>&emsp;&emsp;&emsp;"element\_timeout": 30,<br>&emsp;&emsp;&emsp;"recovery\_action": "Run\_Next\_Testcase",<br>&emsp;&emsp;&emsp;"on\_aborted\_action": "Reuse\_Session",<br>&emsp;&emsp;&emsp;"screenshot\_option": "FAILED\_STEPS",<br>&emsp;&emsp;&emsp;"group\_prerequisite\_fail": "Abort",<br>&emsp;&emsp;&emsp;"test\_case\_prerequisite\_fail": "Abort",<br>&emsp;&emsp;&emsp;"test\_step\_prerequisite\_fail": "Run\_Next\_Testcase",<br>&emsp;&emsp;&emsp;"global\_param\_name": null<br>&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;"totalQueuedCount": 0<br>} |

### **Request/Response fields**

- **executionId:** ID of the Test Plan

- **result:** Result Status of the Test Plan - QUEUED, PASSED, FAILED, ABORTED, or STOPPED

- **status:** Current Status of the Test Plan creation - STATUS_CREATED

- **executedBy:** ID of the executor

- **buildNo:** Build Number specified in the Test Plan Trigger call

- **isVisuallyPassed:** Whether visual testing passed or not. True or False.

- **environment:** Environment parameter selected for the Test Plan

- **triggeredType:** Triggered type for the Test Plan whether by API or via Testsigma App

- **totalRunningCount:** Total number of running tests

- **page_timeout:** Global Page load timeout in seconds

- **element_timeout:** Global Element load timeout in seconds

- **recovery_action:** Action to be performed on test failure - "Run\_Next\_Testcase"

- **on\_aborted\_action:** Action to be performed on test abort - "Reuse\_Session"

- **screenshot_option:** When to take screenshots - "FAILED\_STEPS", “ALL\_STEPS”, “NONE”

- **group\_prerequisite\_fail:** Action to perform on Test Suite prerequisite failure

- **test\_case\_prerequisite\_fail:** Action to perform on Test Case prerequisite failure

- **test\_step\_prerequisite\_fail:** Action to perform on Test Step prerequisite failure

- **totalQueuedCount:** Total number of queued tests

[[info | NOTE:]]
| All the remaining fields are either self-explanatory or can be ignored.

For a Test Plan, you can get the **Test Plan ID** and the complete **cURL request** to trigger the execution from the Test Plan Details page:

![Test Plan detains inside the CICD tab of a test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/api/test-plans/testplan-cicd-tab-rest-api-updated.png)

The Run ID is returned as ‘id’ in the response for the request if the execution was started successfully.

The Environment ID is optional. To know how to get an environment id check here: [Get an Environment ID](https://testsigma.com/docs/api/environments/#get-an-environment)

**Test Plan Status**

Each Test Plan Run in Testsigma has a unique Run ID. This Run ID can be used to check the live status of the Test Plan Run or Test Plan Status.

[[info | NOTE:]]
| You need to authenticate these requests with your Testsigma API Key. See [How to generate API Keys](https://testsigma.com/docs/configuration/api-keys/)

---
##**Obtaining the Run ID**

If the Test Plan Run was started from within the Testsigma App, the Run ID can be found from the Run Results page as shown below:

![run ids that can be used to trigger test plans in Testsigma](https://docs.testsigma.com/images/test-plans/run-ids-trigger-test-plans.png)

The values from 295 to 302 are Run IDs of consecutive Test Plan Runs.

If the Test Plan was started by the Test Plan Trigger API Call, the Run ID can be obtained from the API Response under the JSON key ‘id’.

![run ids from API response under the json key id](https://docs.testsigma.com/images/test-plans/run-id-api-response-json-key.png)

---
##**Test Plan Status API**

This endpoint allows users to check the status of an already triggered Test Plan Run.

|**Request Type**|GET|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/execution_results/<run\_id><br>The <run\_id> can be obtained from the Run Results or API Response as mentioned above.|
|**Authorization**|Bearer <api\_token><br>The <api\_token> is the same as the Testsigma API key mentioned above.|
|**Response Body**|{<br>&emsp;"id": 302,<br>&emsp;"execution": {<br>&emsp;&emsp;&emsp;&emsp;"id": 274,<br>&emsp;&emsp;&emsp;&emsp;"applicationVersionId": 39,<br>&emsp;&emsp;&emsp;&emsp;"name": "Test Plan Trigger REST API",<br>&emsp;&emsp;&emsp;&emsp;"description": null,<br>&emsp;&emsp;&emsp;&emsp;"mailList": null,<br>&emsp;&emsp;&emsp;&emsp;"elementTimeOut": 30,<br>&emsp;&emsp;&emsp;&emsp;"pageTimeOut": 30,<br>&emsp;&emsp;&emsp;&emsp;"environmentId": null,<br>&emsp;&emsp;&emsp;&emsp;"screenshot": "FAILED\_STEPS",<br>&emsp;&emsp;&emsp;&emsp;"recoveryAction": "Run\_Next\_Testcase",<br>&emsp;&emsp;&emsp;&emsp;"onAbortedAction": "Reuse\_Session",<br>&emsp;&emsp;&emsp;&emsp;"onSuitePreRequisiteFail": "Abort",<br>&emsp;&emsp;&emsp;&emsp;"onStepPreRequisiteFail": "Run\_Next\_Testcase",<br>&emsp;&emsp;&emsp;&emsp;"reRunType": "NONE",<br>&emsp;&emsp;&emsp;&emsp;"executionLabType": "TestsigmaLab",<br>&emsp;&emsp;&emsp;&emsp;"executionType": "CROSS\_BROWSER",<br>&emsp;&emsp;&emsp;&emsp;"isManual": false,<br>&emsp;&emsp;&emsp;&emsp;"lastRunId": 343,<br>&emsp;&emsp;&emsp;&emsp;"applicationVersion": {<br>&emsp;&emsp;&emsp;&emsp;"id": 39,<br>&emsp;&emsp;&emsp;&emsp;"applicationId": 25,<br>&emsp;&emsp;&emsp;&emsp;"versionName": "Default Version",<br>&emsp;&emsp;&emsp;&emsp;"description": null,<br>&emsp;&emsp;&emsp;&emsp;"startTime": null,<br>&emsp;&emsp;&emsp;&emsp;"customFields": null,<br>&emsp;&emsp;&emsp;&emsp;"endTime": null,<br>&emsp;&emsp;&emsp;&emsp;"application": {<br>&emsp;&emsp;&emsp;&emsp;"id": 25,<br>&emsp;&emsp;&emsp;&emsp;"name": "Simply Travel (Demo)\_Web Application",<br>&emsp;&emsp;&emsp;&emsp;"description": "",<br>&emsp;&emsp;&emsp;&emsp;"customFields": "{}",<br>&emsp;&emsp;&emsp;&emsp;"projectId": 11,<br>&emsp;&emsp;&emsp;&emsp;"applicationType": "WebApplication",<br>&emsp;&emsp;&emsp;&emsp;"project": {<br>&emsp;&emsp;&emsp;&emsp;"id": 11,<br>&emsp;&emsp;&emsp;&emsp;"name": "Simply Travel (Demo)",<br>&emsp;&emsp;&emsp;&emsp;"description": "Demo application. <b>Feel free to delete</b>",<br>&emsp;&emsp;&emsp;&emsp;"customFields": "{\"Custom Field 1\":[null,null]}",<br>&emsp;&emsp;&emsp;&emsp;"hasMultipleApps": true,<br>&emsp;&emsp;&emsp;&emsp;"hasMultipleVersions": true,<br>&emsp;&emsp;&emsp;&emsp;"isDemo": true,<br>&emsp;&emsp;&emsp;&emsp;"projectType": "WebApplication",<br>&emsp;&emsp;&emsp;&emsp;"createdBy": 9,<br>&emsp;&emsp;&emsp;&emsp;"updatedBy": 9,<br>&emsp;&emsp;&emsp;&emsp;"createdDate": 1567751924000,<br>&emsp;&emsp;&emsp;&emsp;"updatedDate": 1633635344000,<br>&emsp;&emsp;&emsp;&emsp;"files": null<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>&emsp;&emsp;&emsp;&emsp;"createdDate": 1567751924000,<br>&emsp;&emsp;&emsp;&emsp;"updatedDate": 1568613490000<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;"updatedDate": null,<br>&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>&emsp;&emsp;&emsp;&emsp;"updatedById": null,<br>&emsp;&emsp;&emsp;&emsp;"createdDate": 1567751924000<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;"lastRun": null,<br>&emsp;&emsp;&emsp;&emsp;"slack": {<br>&emsp;&emsp;&emsp;&emsp;"enabled": null,<br>&emsp;&emsp;&emsp;&emsp;"channel": null,<br>&emsp;&emsp;&emsp;&emsp;"user\_name": null<br>&emsp;&emsp;&emsp;&emsp;},<br>&emsp;&emsp;&emsp;&emsp;"createdDate": 1633510913000,<br>&emsp;&emsp;&emsp;&emsp;"updatedDate": 1633617938000,<br>&emsp;&emsp;&emsp;&emsp;"createdById": 9,<br>&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>&emsp;&emsp;&emsp;&emsp;"matchBrowserVersion": false,<br>&emsp;&emsp;&emsp;&emsp;"visualTestingEnabled": false,<br>&emsp;&emsp;&emsp;&emsp;"notificationStatusList": [],<br>&emsp;&emsp;&emsp;&emsp;"msTeamsConnectorNotificationEnabled": false,<br>&emsp;&emsp;&emsp;&emsp;"googleChatConnectorNotificationEnabled": false,<br>&emsp;&emsp;&emsp;&emsp;"environments": [],<br>&emsp;&emsp;&emsp;&emsp;"retrySessionCreation": false,<br>&emsp;&emsp;&emsp;&emsp;"retrySessionCreationTimeout": null,<br>&emsp;&emsp;&emsp;&emsp;"onTestCasePreRequisiteFail": "Abort"<br>},<br>"executionId": 274,<br>"startTime": 1633512584000,<br>"endTime": 1633512598000,<br>"duration": 13647,<br>"result": "FAILURE",<br>"status": "STATUS\_COMPLETED",<br>"message": "Test plan execution failed",<br>"executedBy": 43,<br>"buildNo": "1.9.26\_rc1",<br>"environmentId": null,<br>"totalCount": 1,<br>"failedCount": 1,<br>"passedCount": 0,<br>"abortedCount": 0,<br>"stoppedCount": 0,<br>"notExecutedCount": 0,<br>"preRequisiteFailedCount": 0,<br>"queuedCount": 0,<br>"isVisuallyPassed": null,<br>"environment": null,<br>"childResult": null,<br>"reRunParentId": null,<br>"reRunType": null,<br>"triggeredType": "API",<br>"totalRunningCount": 0,<br>"executionDetails": {<br>&emsp;&emsp;&emsp;"page\_timeout": 30,<br>&emsp;&emsp;&emsp;"element\_timeout": 30,<br>&emsp;&emsp;&emsp;"recovery\_action": "Run\_Next\_Testcase",<br>&emsp;&emsp;&emsp;"on\_aborted\_action": "Reuse\_Session",<br>&emsp;&emsp;&emsp;"screenshot\_option": "FAILED\_STEPS",<br>&emsp;&emsp;&emsp;"group\_prerequisite\_fail": "Abort",<br>&emsp;&emsp;&emsp;"test\_case\_prerequisite\_fail": "Abort",<br>&emsp;&emsp;&emsp;"test\_step\_prerequisite\_fail": "Run\_Next\_Testcase",<br>&emsp;&emsp;&emsp;"global\_param\_name": null<br>&emsp;},<br>"totalQueuedCount": 0<br>}|

### **Request/Response fields**

- **Id:** ID of the Test Plan Result

- **Execution:** The Test Plan details are located within the nested Execution JSON Object including the Test Plan ID as “id”, Application Version ID as "applicationVersionId”, Test Plan name as "name", Test Plan Description as "description" and so on.

- **result:** Result Status of the Test Plan - QUEUED, PASSED, FAILED, ABORTED, or STOPPED

- **status:** Current Status of the Test Plan creation - STATUS\_CREATED

- **executedBy:** ID of the executor

- **buildNo:** Build Number specified in the Test Plan Trigger call

- **isVisuallyPassed:** Whether visual testing passed or not. True or False.

- **environment:** Environment parameter selected for the Test Plan

- **triggeredType:** Triggered type for the Test Plan whether by API or via Testsigma App

- **totalRunningCount:** Total number of running tests

- **page\_timeout:** Global Page load timeout in seconds

- **element\_timeout:** Global Element load timeout in seconds

- **recovery\_action:** Action to be performed on test failure - "Run\_Next\_Testcase"

- **on\_aborted\_action:** Action to be performed on test abort - "Reuse\_Session"

- **screenshot\_option:** When to take screenshots - "FAILED\_STEPS", “ALL\_STEPS”, “NONE”

- **group\_prerequisite\_fail:** Action to perform on Test Suite prerequisite failure

- **test\_case\_prerequisite\_fail:** Action to perform on Test Case prerequisite failure

- **test\_step\_prerequisite\_fail:** Action to perform on Test Step prerequisite failure

- **totalQueuedCount:** Total number of queued tests

[[info | NOTE:]]
| All the remaining fields are either self-explanatory or can be ignored.

The Response contains a lot of information regarding the Test Plan Run. Here’s a screenshot of the relevant excerpt from the JSON Response:

![example of a json response](https://docs.testsigma.com/images/test-plans/example-json-response.png)

You can see the result as “FAILURE” and the current status as “STATUS\_COMPLETED” (along with other information).











            



