---
title: "Test Plan Local Executions"
metadesc: "Local execution is preferred for testing apps that are only available locally, for security purposes. How to perform test plan executions on local devices in Testsigma."
noindex: false
order: 9.41
page_id: "Test Plan Local Executions"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "How to perform test plan executions on local devices in Testsigma"
  url: "#how-to-perform-test-plan-executions-on-local-devices-in-testsigma"
---

---
You can execute your test plans on your local devices using Testsigma. Local execution is preferred for testing applications that are only available locally, for security or other purposes.

---
## **How to perform test plan executions on local devices in Testsigma:**
There are four steps to running a test plan on a local device.

### Step 1: Download the Agent
Navigate to the Agents page, click on **Download**, choose your Operating System. This will trigger the download of the Agents zip file which is about 500 MB in size.

Once it is downloaded, unzip it and save it to an accessible location.

![Download agent for test plan local executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agentdownload.gif)

&emsp;
### Step 2: Start the Agent
Navigate inside the unzipped folder and start the Agent by running the *start.bat* file for windows or *start.sh* file for Mac / Linux. To start the Agent, use your command prompt or terminal and type the name of the bat file / sh file.

This will start the agent.

![Start agent for local test plan executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/localruns.gif)


&emsp;
### Step 3: Add the Agent 
Navigate to the Agents page, click on **Add Agent**.

This will automatically add the Agent that you started in step 2. 

Change the name as required and save it.

![Add agent for local test plan executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agent.gif)


&emsp;
### Step 4: Test Plan Run - Local Device
1. Create a new Test Plan.
   
2. When Selecting the test lab, choose **Local Device**.
   
3. In the next tab, from the drop-down menu, choose the Agent that you just added.
   
4. Add the machine.
   
5. Choose the browser.
   
6. Add the specific test suites that you want to run locally.
   
7. Make necessary changes in **Test Plan Settings** page and click **Create**.
   
8. Click **Run Now** to run the test plan.

![run test plans on local device executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tpexe.gif)