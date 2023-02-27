---
title: "Test Step Settings"
metadesc: "What are the available Test step settings in Testsigma and how to use them"
noindex: false
order: 4.41
page_id: "Test Step Settings"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Change Test Step Stettings"
  url: "#change-test-step-stettings"
- type: link
  name: "Test Step Retries"
  url: "#test-step-retries"
---

---

Every test step in the test authoring interface has a few settings that help you make necessary modifications during test step creation; for example, you can increase or decrease the default wait time specifically for the current step, disable the test step, or make it mandatory, etc.

---
### **Prerequisites** 

This document assumes you understand how to create a test case; if not, see [Creating Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case). 

---
##**Change Test Step Stettings**

On the Test Steps page, click the ellipsis icon on a particular test step to open the Test Step Settings panel.

![three horizontal dots icon](https://docs.testsigma.com/images/step-settings/three-horizontal-dots-icon.png)

![Advanced Options overlay while creating a Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/teststepdetails.png)

Every test step has a few settings, which are described in the table below.

| Settings | Usage |
|:------------------|:-------------|
|Maximum Wait Time|Set the maximum waiting time for the current test step.|
|Prerequisite |Add a prerequisite test case to be executed before the current test case.|
|No. of Retries on Step Failure|It allows test steps to be automatically retried if they fail to execute or produce an unexpected result.|
|Stop Test Case execution on Test Step failure|It allows you to terminate test execution if the test fails at any step. By default, this option is checked, and test case execution will stop if the test step fails.|
|Ignore Step Result in Test Case Result |It allows you to exclude the outcome of a particular step from the overall test result.|
|Enable Visual Testing for this step|It allows you to capture and compare the visual appearance of an application's user interface between different builds or versions.|
|Disable Test Step|You can disable the test step by choosing this option, and the test step will not run. By default, this option is unchecked.|

Here’s how to access and use test step settings.

![gif for test step settings usage](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/teststepdetails.gif)

---

## **Test Step Retries**

In Testsigma, we support Test Step Retries, which enables you to automatically retry failed test steps to increase test reliability and accuracy. You can set the duration of each retry and the number of times a failed test step should be retried before marking the test as failed. Testsigma also provides detailed reports on test execution and results, including the number of retries performed for each failed test step. 

### **Enable Test Step Retries**

1. In the test step, enter **Wait for test data seconds** NLP, **delete** the placeholder for **test data**, and replace it with a **number**. ![Duration in Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/duration_tsr.png)

2. Click the ellipsis icon on the test steps page to open the **Test Step Details** panel for a particular test step, which appears on the right side of the screen. ![Click Ellipsis](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ellipsis_tsr.png)

3. Select the **number of retries on step failure** (maximum 10 times) from the drop-down menu. ![Select No of retries](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/timesretry_tsr.png)

4. Click **Create**/ **Update** to save your test step details. ![Click Update to save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/updatets_tsr.png)

Here is a quick gif demonstrating how to enable test steps retries.
![Test step enable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/teststepretries.gif)

---


