---
title: "Run Tests on Private Grid"
metadesc: "Testsigma Private Grid helps run parallel tests across multiple browsers, OS, and machines. This article discusses how to setup and execute tests on Private Grid"
noindex: false
order: 9.41
page_id: "Test Plan Local Executions"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create Dynamic Agent Through API"
  url: "#create-dynamic-agent-through-api"
- type: link
  name: "Start Dynamic Agent Using jwtApiKey"
  url: "#start-dynamic-agent-using-jwtapikey"
- type: link
  name: "Start the Private Grid Hub & Web Nodes"
  url: "#start-the-private-grid-hub--web-nodes"
- type: link
  name: "Execute Tests in Private Grid using REST API"
  url: "#execute-tests-in-private-grid-using-rest-api"
- type: link
  name: "Execute Tests in Private Grid from Application"
  url: "#execute-tests-in-private-grid-from-application"
---


---

Testsigma Private Grid helps run parallel tests across multiple browsers, operating systems, and machines. This can boost the execution time of even the largest test suites and save minutes, hours, or days. 

![Testsigma Private Grid](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestsigmaHub.png)

**Hub** <br>
The Hub is the main controller in Private Grid. Once it receives the test requests, it distributes them to different machines called Nodes. The Hub knows what each Node can do. It evaluates the test requirements against the capabilities of the available Nodes to select the best match and forwards the tests to the selected Nodes.



**Nodes** <br>
Like Test Machines in Testsigma, Nodes are the machines that run the tests in Private Grid. They can have multiple browsers and operating systems. A session is created when the Node receives a test request from the client. Any commands sent to this Node will then be executed, and the response will be returned to the client. Nodes can handle multiple test sessions simultaneously, depending on their configuration and resource capacity. 

This article discusses executing tests in Testsigma Private Grid. 


---

> ## **Prerequisites**
> 
> - Testsigma Agent
> - Core Java (OpenJDK 18) 
> - Testsigma Private Grid Folder
> - Ngrok Setup


---

## **Create Dynamic Agent Through API**
Use the following Endpoint to create Dynamic Agents with Private Grid configuration in Testsigma using REST API.

|**Request Type**|**POST**|
|---|---|
|**Endpoint**| https://app.testsigma.com/api/v1/agents |
|**Authorization**| Bearer **<API\_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body Type (JSON)**| Raw |
|**Payload**|<pre>{<br>    "name": "&lt;Unique Agent Name&gt;",<br>    "agentType": "TRANSIENT",<br>    "externalConfig": {<br>        "url": "http://localhost:4444",<br>        "authenticationEnabled": true,<br>        "userName": "root",<br>        "password": "root",<br>        "type": "SELENIUM",<br>        "browserList": ["Chrome", "Safari"]<br>    }<br> }<pre>|
|**Response Body Type (JSON)**|<pre>{<br> "id": 9,<br> "uniqueId": "a3cceab7-5bc9-41d1-a905-e54e0a23c677",<br> "jwtApiKey": "&lt;Unique JWT Token&gt;",<br> "agentVersion": null,<br> "createdById": 2,<br> "updatedById": 2,<br> "createdDate": 1719222650559,<br> "updatedDate": 1719222650559,<br> "system": {<br> "title": "Dynamic Agent",<br> "id": 21,<br> "protocol": "http",<br> "port": null,<br> "httpsPort": null,<br> "ipAddress": "127.0.0.1",<br> "hostName": null,<br> "osType": null,<br> "osVersion": null,<br> "systemType": 4<br> },<br> "browserList": [],<br> "currentAgentVersion": "5.9.0",<br> "status": "REGISTERED",<br> "isActive": false<br>}<pre>|

Here’s  a quick GIF demonstrating how to create a Dynamic Agent through API with the above mentioned endpoint.

![Create Dynamic Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CreateDynamicAgent.gif)

---

## **Start Dynamic Agent Using jwtApiKey**

Open the terminal in the **Testsigma Agent directory** and use the following command to start the **Dynamic Agent**:

> **For Mac/Linux**
>
><pre><code>&lt;agent_dir&gt;./start.sh --TS_ACTIVATION_KEY=&lt;JWT_KEY&gt;</code></pre>


> **For Windows**
> 
><pre><code>&lt;agent_dir&gt;./start.bat --TS_ACTIVATION_KEY=&lt;JWT_KEY&gt;</code></pre>

Where &lt;JWT_KEY&gt; is **jwtApiKey** from the above response.

Here’s  a quick GIF demonstrating how to start Dynamic Agent using jwtApiKey with the above command.

![Up Testsigma Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/UpDynamicAgent.gif)

---

## **Start the Private Grid Hub & Web Nodes**

To start the **Private Grid Hub**, open the **Terminal** at **Private Grid** folder and use the following command:

<pre><code>java -jar selenium-server-4.13.0.jar hub</code></pre>

Once the **Private Grid** starts, open ```http://localhost:4444```

To start the Web Nodes, open the new tab on the same Terminal and use the following command:

<pre><code>java -jar selenium-server-4.13.0.jar node --config node.json --selenium-manager true</code></pre>

Once the command runs, the registered **Nodes** will be added to the **Private Grid**.

Here’s  a quick GIF demonstrating the steps to start the Private Grid Hub and add Web Nodes.
![Private Grid Setup](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/PrivateHub.gif)

---

## **Execute Tests in Private Grid using REST API**

Use the following **Endpoint** to execute the Testsigma’s test plan in **Private Grid** using REST API.

|**Request Type**|**POST**|
|---|---|
|**Endpoint**| https://app.testsigma.com/api/v1/execution_results |
|**Authorization**| Bearer **<API\_Token>**<br>Same as the Testsigma API key mentioned above.|
|**Request Body Type (JSON)**| Raw |
|**Payload**|<pre> {<br>   "executionId" : &lt;Test Plan Exe ID&gt;,<br>   "testDevices" : [<br>       {<br>           "title" : "Dynamic Machine",<br>           "targetMachine" : 27,<br>           "browser" : "CHROME",<br>           "executionLabType" : "Hybrid",<br>           "suiteIds" : [&lt;Suite IDs&gt;],<br>           "isHeadless" : false,<br>           "runTestSuitesInParallel": true,<br>           "runTestCasesInParallel": true,<br>           "createSessionAtCaseLevel": true<br>       }<br>   ]<br>}<br><pre>|
|**Sample Response Body (JSON)**|<pre>{<br>    "id": 581,<br>    "execution": null,<br>    "executionId": 346,<br>    "startTime": 1719400027825,<br>    "endTime": null,<br>    "duration": null,<br>    "result": "QUEUED",<br>    "status": "STATUS\_CREATED",<br>    "message": "Test Plan execution message",<br>    "executedBy": 29,<br>    "buildNo": null,<br>    "environmentId": null,<br>    "totalCount": null,<br>    "failedCount": null,<br>    "passedCount": null,<br>    "stoppedCount": null,<br>    "notExecutedCount": null,<br>    "queuedCount": null,<br>    "runningCount": null,<br>    "visualTestResult": null,<br>    "environment": null,<br>    "childResult": null,<br>    "reRunParentId": null,<br>    "triggeredType": "API",<br>    "totalRunningCount": 0,<br>    "executionDetails": {<br>        "page\_timeout": 30,<br>        "element\_timeout": 30,<br>        "recovery\_action": "Run\_Next\_Testcase",<br>        "on\_aborted\_action": "Reuse\_Session",<br>        "screenshot\_option": "ALL\_TYPES",<br>        "screenshot\_mode": null,<br>        "group\_prerequisite\_fail": "Abort",<br>        "test\_case\_prerequisite\_fail": "Abort",<br>        "test\_step\_prerequisite\_fail": "Run\_Next\_Testcase",<br>        "global\_param\_name": null<br>    },<br>    "totalQueuedCount": 0,<br>    "mobileInspectionId": null,<br>    "environmentResultsDTO": [],<br>    "executionResultConfig": null,<br>    "isReRunEnabled": false,<br>    "consolidatedResult": "QUEUED",<br>    "consolidatedStatus": "STATUS\_CREATED",<br>    "resultType": "ORIGINAL",<br>    "consolidatedDuration": null,<br>    "runTestCasesInParallel": false,<br>    "runTestSuitesInParallel": false,<br>    "scheduledId": null,<br>    "testPlanHookResults": null,<br>    "reRunType": null,<br>    "consolidatedPlanTotalCount": null,<br>    "consolidatedPlanFailedCount": null,<br>    "consolidatedPlanPassedCount": null,<br>    "consolidatedPlanStoppedCount": null,<br>    "consolidatedPlanNotExecutedCount": null,<br>    "consolidatedPlanQueuedCount": null,<br>    "consolidatedPlanRunningCount": null,<br>    "testDevicesNames": null,<br>    "latestResult": null,<br>    "testPlanResultMetric": null,<br>    "activeExecutionResultCount": 0<br>}<pre>|

Here’s  a quick GIF demonstrating how to execute tests through a Dynamic Agent through API with the above mentioned endpoint.
![Execute Tests using API](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/executetestswithgrid.gif)

---

## **Execute Tests in Private Grid from Application**

### **a. Integrating Testsigma with Private Grid**

1. From the left navigation bar, go to **Settings > Integrations** and choose the **Test Lab** tab.

2. Enable the toggle on the **Private Grid** widget. A popup screen will display the details for the **Private Grid** lab.

3. On **Private Grid** details, 
    - If there is authentication enabled in ngrok platform, select **Authentication Enabled** and enter **Username** and **Password**. 
    - Enter the **Private Hub URL** and select applications to use with your **Private Grid** framework.

4. Click on **Add Details**.

<br>

<details style="border: 1px solid gray; border-radius: 4px; padding: 0.5em; margin: 0.5em 0; background-color: #f2f2f2;">
  <summary style="color: darkgreen; font-weight: bold; list-style: none;" onclick="if(this.parentNode.open) this.parentNode.style.border='1px solid gray'; else this.parentNode.style.border='none';">
    <span style="margin-right: 5px;">ℹ️</span>Fetching the Private Hub URL:
  </summary><br>
Follow the steps below to set up ngrok on your device to fetch the Private Hub URL:
  <ul>
    <ol>
    <li><a href="https://ngrok.com/" target="_blank">Visit ngork website</a>, create an account, go to <b>Getting Started > Setup & Installation</b>.</li>
    <li>Follow the instructions on the <b>Setup & Installation</b> page to set up ngrok.</li>
    <li>Once the installation is complete, enter the command <b>ngrok http 4444</b> on the terminal.</li>
    <li>Copy the URL as shown in the image below and use this to integrate Testsigma with <b>Private Grid</b>.</li> 
    <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ngork.png" alt="Trulli">
    </ol>
 </ul>
      </details>

<br>

### **b. Execute Tests in Private Grid**

1. For test case execution, select **Private Grid** as **Test Lab** on **Ad-hoc Run** overlay. 

   Here’s a quick GIF demonstrating how to execute a test case in Private Grid.
   ![Test Case Execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcexeinPG.gif)

2. For test plan execution, add **Private Grid** while creating test machine profiles for execution. You need to go to **Add Test Suites & Link Machine Profiles > Select test machine profiles > Add Machine** and add **Private Grid** as **Test Lab**. 

   Here’s a quick GIF demonstrating how to execute a test plan in Private Grid.

   ![Test Plan Execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ExecuteTestinPGUI.gif)

---