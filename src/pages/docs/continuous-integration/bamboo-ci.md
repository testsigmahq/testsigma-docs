---
title: " Integrate Testsigma with Bamboo CI"
metadesc: "How to integrate Testsigma with Bamboo CI"
noindex: false
order: 12.18
page_id: " Integrate Testsigma with Bamboo CI"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to follow:"
  url: "#steps-to-follow"
---

---

Bamboo is a continuous integration and delivery tool that ties automated builds, tests, and releases in a single workflow. It is a popular tool for CI/CD pipeline and build automation. Testsigma provides a Bamboo plugin to automate test execution in your Bamboo Pipeline.
 
---

## **Prerequisites**

- You need Testsigma Test Plan Run - Bamboo Plugin. You can install the **Testsigma Test Plan Run** plugin from the Bamboo Plugins page in your Bamboo Installation. You need to go to **Bamboo administration settings > Manage apps > Find new apps** and search for **Testsigma Test Plan Runner** in the search box to install it.

You can also get it from [Testsigma Bamboo Plugin direct link](https://marketplace.atlassian.com/apps/1223253/testsigma-test-plan-runner?hosting=server&tab=installation)
 
---

## **Steps to follow:**

- Create and configure a New Plan

- Create a Task to trigger Testsigma Test Plan

- Try a Sample Build


---

## **Create and Configure a New Plan**

1. Navigate to **Bamboo Instance > Build Dashboard** as shown below:
![Build Dashboard page in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/build-dashboard-bamboo-ci.png)


2. Create a new pipeline by clicking on **Create > Create Plan** on the top menu in the **Dashboard** page above.

3. Enter a **Project name**, **Plan name**, and configure your repository and click on **Configure Plan** as shown below:
![configure plan in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/configure-plan-bamboo-ci.png)

---

## **Create a Task to trigger Testsigma Test Plan**

1. Click on **Add Task** tab. Search for **Testsigma Test Plan Run** and select it. This is the plugin that was installed as part of the Pre-requisite.
![configure job in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/configure-job-bamboo-ci.png)
![Testsigma Test Plan run in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/testsigma-test-plan-run-bamboo-ci.png)

2. Enter the following details:

- **Task description:** A name for the Task.

- **Testsigma API Key:** Generated from [Settings > API Keys](https://testsigma.com/docs/configuration/api-keys/) in Testsigma App.

- **Testsigma Test Plan ID:** You can [get the Test Plan specific ID](https://testsigma.com/docs/continuous-integration/get-test-plan-details/) from the Test Plan details page in Testsigma App.

- **Maximum wait time for Task completion:** Specify the maximum time in minutes you want the Testsigma Plugin to wait before timing out. After this timeout, the Task will time out in Bamboo but the Test Execution will still continue in Testsigma. You can log into Testsigma App later to check the Test Plan status.

- **Report File Path:** The File path where the JUnit report XML file is stored.
 
3. Click on **Save** button to save the task details.

![save task details in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/save-task-details-save-button-bamboo-ci.png)

![task created successfully in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/task-created-successfully-bamboo-ci.png)

4. Click on **Save and Create** to create the Plan.
 

---

## **Try a Sample Build**

1. Click on **Run Now** to trigger the pipeline manually to check.
![plan summary in Bamboo CI](https://docs.testsigma.com/images/bamboo-ci/plan-summary-bamboo-ci.png)
As soon as the plan runs and the pipeline reaches the Testsigma task, the Testsigma test plan will be triggered. You can confirm that by navigating to the **Dashboard > Test Plans** page in Testsigma App. 
 
You will be able to see a running Test Plan as shown below:

![Test plan in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tpfbbci.png)



You can log into Testsigma to learn more about the results. That's all we need to automate Test Execution when a successful build is triggered using the Bamboo CI server.



---