---
title: "Test Step Settings"
page_title: "Test Step Settings | Testsigma Documentation"
metadesc: "Configure wait times, retries, visuals, and other settings for efficient test automation in Testsigma using Test Step Settings and customise test execution."
noindex: false
order: 4.41
page_id: "test-step-settings-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Use Test Step Settings"
  url: "#use-test-step-settings"
- type: link
  name: "Update Step Settings"
  url: "#update-step-settings"  
---

---

In Testsigma, you can control how each test step behaves in your test cases by using Test Step Settings. These settings allow you to decide how your test cases run and show results. You can also use them to set step conditions and attempt them again if required.

---

### **Prerequisites** 

Before using the Test Step Settings, you must understand specific concepts such as [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), how to [Create Test Steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/) and [Test Step Options](https://testsigma.com/docs/test-cases/create-steps-nl/step-actions/).

---

## **Use Test Step Settings**

To use **Test Step Settings**, click either the **Settings** icon or the **ellipsis** icon on a particular test step. Then, choose **Step Settings** from the list that appears to open the **Test Step Settings** panel on the test case page. 

Below is a summary of the available settings:

| **Settings** | **Description** |
|:------------------|:-------------|
|**Max wait time**|Set the Maximum Wait Time limit for completing the test step. It will fail if the test step takes longer than the specified time (up to a maximum of 120 seconds).|
|**No. of Retries on Step Failure**|Select the **Number of Retries on Step Failure** from the dropdown menu (up to 10 times) to decide how many times you want to attempt to execute the test step again if it fails.|
|**Pre-Requisite**|Select a prerequisite step from the list of available steps in the same test case. This step must be successfully done before the current step runs.|
|**Stop Test Case execution on Test Step**|It allows you to terminate test execution if the test fails at any step. By default, this option is checked, and test case execution will stop if the test step fails.|
|**Ignore this step result in Test Case Result**|It allows you to exclude the outcome of a particular step from the overall test result.|
|**Disable Step**|It allows you to capture and compare the visual appearance of an application's user interface between different builds or versions.|
|**Enable Visual Testing for the Step**|You can disable the test step by choosing this option, and the test step will not run. By default, this option is unchecked.|

Here is a quick GIF demonstrating the above workflow: ![Test Step Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststep_setting.gif)

---

## **Update Step Settings**

To update several test steps, click the **checkboxes** next to the **test steps** you want to update and then click on **Update Settings** in the menu bar to open a popup window where you can make changes to the settings. ![Update Step Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/update_testsettings.gif)

[[info | NOTE:]]
| Update Step Setting does not allow updating the **Pre-Requisite** and **Number of Retries on Step Failure**. You should use Test Step Settings for each step individually.