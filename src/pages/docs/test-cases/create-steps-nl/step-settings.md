---
title: "Test Step Settings"
metadesc: "What are the available Test step settings in Testsigma and how to use them"
order: 4.41
page_id: "Test Step Settings"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Change Test Step Stettings"
  url: "#change-test-step-stettings"
---

---

Every test step in the test authoring interface has a few settings which help you make necessary modifications during test step creation. For example, increase or decrease the default wait time specifically for the current step, or disable the test step, or make it mandatory, etc.

&emsp;

---
##**Prerequisites** 

This document assumes that you know how to create a test case, if not, refer to [creating test cases.](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)

&emsp;  

**Navigate to** Project > Test Development > Test Case > Create Test Case

&emsp;

---
##**Change Test Step Stettings**

In the test steps page, on a particular test step, click on the ellipsis icon to open the test step settings panel.

![three horizontal dots icon](https://docs.testsigma.com/images/step-settings/three-horizontal-dots-icon.png)

![Advanced Options overlay while creating a Test Step](https://docs.testsigma.com/images/step-settings/create-test-step-advanced-options.png)

Every Test Step has a few settings, the settings are described in the table below:

| Settings | Usage |
|:------------------|:-------------|
|Maximum Wait Time|Set the maximum wait time for the current test step|
|Prerequisite |Add a prerequisite test case which will get executed before the current test case|
|Stop Test Case execution on Test Step failure|Lets you terminate test execution if the test fails at any step.By default, this option is checked and test case execution will stop if the test step fails.|
|Disable Test Step|You can disable the test step by choosing this option and the test step will not run.By default, this option is unchecked. |

Here’s how to access and use test step settings.

![gif for test step settings usage](https://docs.testsigma.com/images/step-settings/gif-for-test-step-settings-usage.gif)

