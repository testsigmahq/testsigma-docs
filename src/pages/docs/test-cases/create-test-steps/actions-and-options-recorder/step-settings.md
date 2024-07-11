---
title: "Test Step Settings"
metadesc: "With test step settings, you can control how each test step behaves in your test cases | This article discussses test step settings in Testsigma"
noindex: false
order: 4.622
page_id: "Test Recorder - Test Step Details for Web Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Using Test Step Settings"
  url: "#using-test-step-settings"

---

---

In Testsigma, you can control how each test step behaves in your test cases by using Test Step Settings. These settings allow you to decide how your test cases run and show results. This article discusses all test step settings in Testsigma's test step recorder. 

---


> ## **Prerequisites**
> 
> - You should have [Testsigma's step test recorder](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/) installed. 
>
> - You should know how to create **test steps** and [manage a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

---

## **Using Test Step Settings**

1. Hover on one of the recorded test steps, click the **Kebab Menu** and choose **Step Settings** from the dropdown.

   ![Step Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestStep_Settings.png)

2. On **Step Details** prompt, you can edit the following options.

   ![Step Details Prompt](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/StepDetails_TSettings.png)

### **Available Settings:**

| **Settings** | **Description** |
|:------------------|:-------------|
|**Max wait time**|Set the Maximum Wait Time limit for completing the test step. It will fail if the test step takes longer than the specified time (up to a maximum of 120 seconds).|
|**Pre-Requisite**|Select a prerequisite step from the list of available steps in the same test case. This step must be successfully done before the current step runs.|
|**Stop Test Case execution on Test Step**|It allows you to terminate test execution if the test fails at any step. By default, this option is checked, and test case execution will stop if the test step fails.|
|**Ignore this step result in Test Case Result**|It allows you to exclude the outcome of a particular step from the overall test result.|
|**Enable Visual Testing for the Step**|You can disable the test step by choosing this option, and the test step will not run. By default, this option is unchecked.|
|**Disable Step**|It allows you to capture and compare the visual appearance of an application's user interface between different builds or versions.|



Here's a quick GIF exploring all options available in test step setttings.

![Step Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststepsettings.gif)

---