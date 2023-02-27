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
---

---

Every test step in the test authoring interface has a few settings that help you make necessary modifications during test step creation; for example, you can increase or decrease the default wait time specifically for the current step, disable the test step, or make it mandatory, etc.

---
### **Prerequisites** 

This document assumes you understand how to create a test case; if not, see [Creating Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case). 

---
## **Change Test Step Settings**

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


