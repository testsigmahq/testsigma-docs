---
title: " Integrate Testsigma with Bamboo CI"
meta_desc: "How to integrate Testsigma with Bamboo CI"
order: 12.18
page_id: " Integrate Testsigma with Bamboo CI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#pre-requisites"
- type: link
  name: "Steps to follow:"
  url: "#steps-to-follow"
---

---

Bamboo is a continuous integration and delivery tool that ties automated builds, tests, and releases in a single workflow. It is a popular tool for CI/CD pipeline and build automation.


Testsigma provides a Bamboo plugin to automate Test Execution in your Bamboo Pipeline.
 
---
##**Pre-requisites:**
Before we begin, you will need:
Testsigma Test Plan Run - Bamboo Plugin
You can install the ‘Testsigma Test Plan run’ plugin from the Bamboo Plugins page in your Bamboo Installation. You need to go to **Bamboo administration settings -> Manage apps -> Find new apps** and search for Testsigma Test plan Runner in the search box to install it.

You can also get it from [Testsigma Bamboo Plugin direct link](https://marketplace.atlassian.com/apps/1223253/testsigma-test-plan-runner?hosting=server&tab=installation)
 
---
##**Steps to follow:**

>Below we will cover the steps in 3 parts:
>    * Create and configure a New Plan
>    * Create a Task to trigger Testsigma Test Plan
>    * Try a Sample Build


Let’s begin.

### Part 1: Create and configure a New Plan

  1.Log into your Bamboo Instance after starting the Bamboo instance. It takes you to the Build Dashboard as shown below:
![Build Dashboard page in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/build-dashboard-bamboo-ci.png)
 2.Create a new pipeline by clicking on 'Create -> Create Plan' on the top menu in the Dashboard page above.
 3.Enter a Project name, Plan name, and configure your repository and click on Configure Plan as shown below:
![configure plan in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/configure-plan-bamboo-ci.png)
### Part 2: Create a Task to trigger Testsigma Test Plan
 1.Click on the 'Add Task' tab. Search for 'Testsigma Test Plan Run' and select it. This is the plugin that was installed as part of the Pre-requisite.

![configure job in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/configure-job-bamboo-ci.png)
![Testsigma Test Plan run in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/testsigma-test-plan-run-bamboo-ci.png)
 2.Enter the following details:

**Task description:** A name for the Task.
**Testsigma API Key:** Generated from [Settings > API Keys](http://testsigma.com/docs/configuration/api-keys/) in Testsigma App
**Testsigma Test Plan ID:** You can [get the Test Plan specific ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) from the Test Plan details page in Testsigma App.
Go to Test Plans > Click on the required Test Plan name > Switch to the CI/CD Integration Tab in Test Plan details > Find the Test Plan ID
**Maximum wait time for Task completion:** Specify the maximum time in minutes you want the Testsigma Plugin to wait before timing out. After this timeout, the Task will time out in Bamboo but the Test Execution will still continue in Testsigma. You can log into Testsigma App later to check the Test Plan status.
**Report File Path:** The File path where the JUnit report XML file is stored.
 
3.Click on ‘Save’ button to Save the Task details.

![save task details in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/save-task-details-save-button-bamboo-ci.png)

![task created successfully in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/task-created-successfully-bamboo-ci.png)

4. Click on ‘Save and Create’ to create the Plan.
 
### Step 3: Try a Sample Build
1. Click on run now to trigger the Pipeline manually to check.

![plan summary in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/plan-summary-bamboo-ci.png)
As soon as the Plan runs and the pipeline reaches the Testsigma Task, the Testsigma Test Plan will be triggered. You can confirm that by navigating to the Test Development > Test Plans page in Testsigma App. 
 
You will be able to see a running Test Plan as shown below:

![test plan running in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/continuous-integration/bamboo-ci/test-plan-running-testsigma.png)

You can click on the Reports icon to check the results.


Also, you can log into Testsigma to learn more about the results. That's all we need to automate Test Execution when a successful build is triggered using the Bamboo CI server.

