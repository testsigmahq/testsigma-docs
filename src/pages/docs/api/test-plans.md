---
title: "Trigger Test Plans Remotely"
page_title: "Trigger Test Plans remotely using Testsigma"
metadesc: "How to trigger Test Plan Execution remotely using Testsigma REST API Endpoints, which is useful when you want to fully automate continuous testing within your CI/CD pipeline"
noindex: false
order: 21.4
page_id: "Trigger Test Plans remotely"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Trigger Test Plans Using API"
  url: "#trigger-test-plans-using-api"
- type: link
  name: "Trigger Test Plans in Different Environments"
  url: "#trigger-test-plans-in-different-environments"
- type: link
  name: "Obtaining the Run ID"
  url: "#obtaining-the-run-id"
- type: link
  name: "Test Plan Status API"
  url: "#test-plan-status-api"
---

---


You can use Testsigma API to trigger test executions remotely. This is useful when you want to fully automate continuous testing within your CI/CD pipeline, and have already integrated Testsigma with a CI tool you use, such as Jenkins, TravisCI, GitLab, Codeship, and CircleCI.

---

> ## **Prerequisites**
>
> Before you begin, ensure you have an [API Key](https://testsigma.com/docs/configuration/api-keys/) and know how to [Manage Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/).


---

## **Trigger Test Plans Using API**
This endpoint allows users to trigger a Test Plan execution remotely.

|**Request Type**| POST                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|**Endpoint**| https://app.testsigma.com/api/v1/execution_results                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|**Authorization**| Bearer <api\_token><br><api\_token> is the same as the Testsigma API Key mentioned above.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|**Request Body Type**| JSON                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|**Request Body**|{<br>"executionId": <br> "executionConfig" : {<br> "name": "config 2"<br> "id": "2"<br> }<br> "uploadVersions": <br> { <br> "<Device_ID>": "<UPLOAD_VERSION_ID> "<br> }<br> }|
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



- Execution Config name and ID are the saved configurations for [Partial Test Plan Runs](https://testsigma.com/docs/runs/test-plan-executions/#partial-test-runs). 
- In the POST request, you can either use the name or the ID for the Execution Config.
- Get the Execution Config ID and name via this GET Request: https://testsigma.com/docs/api/test-plans/#get-test-plan-favouritesconfig

[[info | NOTE:]]
| All the remaining fields are either self-explanatory or can be ignored.

For a Test Plan, you can get the **Test Plan ID** and the complete **cURL request** to trigger the execution from the Test Plan Details page:

![Test Plan detains inside the CICD tab of a test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rapitestplan.png)

The Run ID is returned as ‘id’ in the response for the request if the execution was started successfully.

The Environment ID is optional. To know how to get an environment id check here: [Get an Environment ID](https://testsigma.com/docs/api/environments/#get-an-environment)

**Test Plan Status**

Each Test Plan Run in Testsigma has a unique Run ID. This Run ID can be used to check the live status of the Test Plan Run or Test Plan Status.

[[info | NOTE:]]
| You need to authenticate these requests with your Testsigma API Key. See [How to generate API Keys](https://testsigma.com/docs/configuration/api-keys/)

---


## **Trigger Test Plans in Different Environments**

To execute a test plan with different Environments, you need to have an Environment ID. You can find the Environment ID by following the steps below. 

### **Get Environment ID**

1. Navigating to **Test Data > Environments**, and click on an **Environment**.


2. On the Environment page, the <ENVIRONMENT\_ID> in the URL `https://app.testsigma.com/ui/td/88/environments/<ENVIRONMENT_ID>/details` is the ID of the environment. 

![Environments](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ttpuapienv.png)

- For Example, if the URL is `https://app.testsigma.com/ui/td/88/environments/10/details`, the **ID** is **10**. 

### **Executing Tests Plans with Different Environments**

1. Navigate to **Test Plans > Test Plan > CI/CD Integrations**, and copy **CURL request** under **REST API to integrate with other tools > REST API call to start Test Plan**.
![CURL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ttpuapicurl.png)

2. Provide the Environment ID in the request body. 

```
curl -X POST \
-H "Content-type: application/json" \
-H "Accept:application/json" \
-H "Authorization: Bearer <API_KEY>" \
https://app.testsigma.com/api/v1/execution_results \
-d "{\"executionId\": \"301\", \"environmentId\": \"<ENVIRONMENT_ID>\"}"
```

You can execute this CURL command in your computer's command-line interface (CLI) to trigger test plan with the environment specific to the given ID. 

---

## **Obtaining the Run ID**

If the Test Plan Run was started from within the Testsigma App, the Run ID can be found from the Run Results page as shown below:

![Run IDs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rapitpbid.png)

The values from 295 to 299 are Run IDs of consecutive Test Plan Runs.

If the Test Plan was started by the Test Plan Trigger API Call, the Run ID can be obtained from the API Response under the JSON key ‘id’.

![run ids from API response under the json key id](https://docs.testsigma.com/images/test-plans/run-id-api-response-json-key.png)



---


## **Test Plan Status API**

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

You can see the result as **FAILURE** and the current status as **STATUS\_COMPLETED** (along with other information).

---

## **GET Test Plan Favourites/Config**

This endpoint allows users to get all the Test Plan Favourites/Config that have been set. To know more on how to create these Test Plan Favourites/Configurations refer to the doc [here](https://testsigma.com/docs/runs/test-plan-executions/#partial-test-runs) 


|**Request Type**|GET|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/saved_execution_configs|
|**Authorization**|Bearer <api\_token><br>The <api\_token> is the same as the Testsigma API key mentioned above.|
|**Response Body**|[<br>{<br>&emsp;&emsp;&emsp;&emsp;"id": 2,<br>&emsp;&emsp;&emsp;&emsp;"name": "rest conf inc 1",<br>&emsp;&emsp;&emsp;&emsp;"query": "[{\"key\": \"suiteId\", \"value\": [114], \"operation\": \"NOT_IN\"}]",<br>&emsp;&emsp;&emsp;&emsp;"executionConfigType": "SAVED_CONFIG",<br>&emsp;&emsp;&emsp;&emsp;"executionConfigCondition": "EXCLUDED",<br>&emsp;&emsp;&emsp;&emsp;"createdByUser": null<br>&emsp;&emsp;},<br>&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;"id": 3,<br>&emsp;&emsp;&emsp;&emsp;"name": "plan o1 exclude 2",<br>&emsp;&emsp;&emsp;&emsp;"query": "[{\"key\": \"suiteId\", \"value\": [132, 130], \"operation\": <br>\"NOT_IN\"}]",<br>&emsp;&emsp;&emsp;&emsp;"executionConfigType": "SAVED_CONFIG",<br>&emsp;&emsp;&emsp;&emsp;"executionConfigCondition": "EXCLUDED",<br>&emsp;&emsp;&emsp;&emsp;"createdByUser": {<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"id": 9,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"email": "bhanu@qateamtestingsprint.com",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"firstName": "Bhanu",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"lastName": "prakash",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"userName": "bhanu",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"status": "Active",<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isDeleted": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isAdmin": true,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isSuperAdmin": true,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"userType": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isAPIUser": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isCrowdUser": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"isMasked": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"gdpr": false,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdDate": 1657951985000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedDate": 1657951992000,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"createdById": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"updatedById": 9,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"privileges": [],<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"authType": null,<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"identityServiceId": "7308"<br>&emsp;&emsp;&emsp;&emsp;}<br>&emsp;&emsp;},<br>&emsp;&emsp;{<br>&emsp;&emsp;&emsp;&emsp;"id": 4,<br>&emsp;&emsp;&emsp;&emsp;"name": "update inc to exc 2 suites to 3 suites",<br>&emsp;&emsp;&emsp;&emsp;"query": "[{\"key\": \"suiteId\", \"value\": [132, 131, 130], \"operation\": \"NOT_IN\"}, {\"key\": \"reviewedBy\", \"value\": [9], \"operation\": \"NOT_IN\"}, {\"key\": \"assignee\", \"value\": [9], \"operation\": \"NOT_IN\"}]",<br>&emsp;&emsp;&emsp;&emsp;"executionConfigType": "SAVED_CONFIG",<br>&emsp;&emsp;&emsp;&emsp;"executionConfigCondition": "EXCLUDED",<br>&emsp;&emsp;&emsp;&emsp;"createdByUser": null<br>&emsp;&emsp;}<br>]<br>|


---


## **Test Case Execution details using REST API**
This endpoint allows users to get details of all Test case executions using REST API.

|**Request Type**|**GET**|
|---|---|
|**Endpoint**|https://app.testsigma.com/api/v1/execution_results/986/test_case_results|
|**Authorization**|Bearer **<API\_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body**|<pre>{ <br> "executionId": 268,<br> "executionResultId": 986,<br> "result": "FAILURE",<br> "status": "STATUS_COMPLETED",<br> "testCases": [<br> {<br> "testCaseId": 413,<br> "testCaseName": "03 data driven small",<br> "testCaseResultId": 7975,<br> "result": "FAILURE",<br> "isDataDrivenCase": true,<br> "iterationResults": [<br> {<br> "iterationResultId": 7963,<br> "setName": "examples",<br> "result": "SUCCESS"<br> },<br> {<br> "iterationResultId": 7976,<br> "setName": "travels",<br> "result": "FAILURE"<br> },<br> {<br> "iterationResultId": 7965,<br> "setName": "examples 1",<br> "result": "FAILURE"<br> }<br> ],<br> "testSuiteId": 197,<br> "testSuiteName": "02 DD Small",<br> "testSuiteResultId": 2295,<br> "machineId": 414,<br> "machineTitle": "machine 2",<br> "machineResultId": 2370<br> }<br> ]<br> }<pre>|

---

