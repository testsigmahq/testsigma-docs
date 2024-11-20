---
title: "Test Step Settings for Test Cases"
page_title: "Test Step Settings"
metadesc: "Configure wait times, retries, visuals, and other settings for efficient test automation in Testsigma using Test Step Settings and customise test execution."
noindex: false
order: 4.612
page_id: "test-step-settings-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Use Test Step Settings"
  url: "#use-test-step-settings"
- type: link
  name: "Configuring Global Timeouts (New)"
  url: "#configuring-global-timeouts-new"
- type: link
  name: "Update Step Settings"
  url: "#update-step-settings"
---

---

Controlling the behavior of each test step can be important to enhance your test coverage. Test Step Settings in Testsigma helps you decide how test cases run and show their results. With these settings, you can define step conditions, determine actions to take when test steps fail, set no of retries if necessary, and more. This enhanced control over the test step also improves the reliability of test results.

---

> ## **Prerequisites**
> 
> - You should know about [Projects](https://testsigma.com/docs/projects/overview/) in Testsigma. 
>   
> - You should know how to [manage a Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
>
> - You should know how to [manage Test Steps](https://testsigma.com/docs/test-cases/step-types/natural-language/).

---

## **Use Test Step Settings**

To access **Test Step Settings**, click **kebab menu** on any test step, and choose **Step Settings** from the list. 

Below is a summary of the available settings:

| **Settings** | **Description** |
|:------------------|:-------------|
|**Max. wait time (<120 secs)**|Set the maximum wait time limit for completing the test step. It will fail if the test step takes longer than the specified time (up to a maximum of 120 seconds).|
|**Retries on step failure (<=10)**|Give the number of retries on step failure to decide how many times you want to attempt to execute the test step if it fails.|
|**Screenshot capture**|Specify one of the following options for screenshot capture at the step level:<br><ul><li><strong>Always</strong>: Captures a screenshot irrespective of the step result.</li><li><strong>Only on step failure</strong>: Captures a screenshot only if the step fails.</li><li><strong>No screenshot required</strong>: Does not capture a screenshot.</li><li>**Use step level settings**: This option leaves the settings the same &nbsp;&nbsp; as saved at the test step level. (Only available during execution)</li></ul>|
|**Pre-Requisite**|Select a prerequisite step from the list of available steps in the same test case. This step must be successfully done before the current step runs.|
|**Stop Test Case execution on Test Step**|It allows you to terminate test execution if the test fails at any step. By default, this option is checked, and test case execution will stop if the test step fails.|
|**Ignore this step result in Test Case Result**|It allows you to exclude the outcome of a particular step from the overall test result.|
|**Disable Step**|It allows you to capture and compare the visual appearance of an application's user interface between different builds or versions.|
|**Enable Visual Testing for the Step**|You can disable the test step by choosing this option, and the test step will not run. By default, this option is unchecked.|
|**Highlight element in screenshot**|Choose this option to highlight elements on the product screen for each step. Contact Testsigma support to enable this feature. <br> <br> Navigation: **Settings > Preferences > Highlight element in screenshot** <br> |

Here’s a quick GIF demonstrating how to access & update the test step settings. 

![Test Step Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststepsettingsnew.gif)

---

## **Configuring Global Timeouts (New)**

The following table outlines how the **Global Step Timeout** settings & **Test Step Timeout** interact based on different configurations.

| Scenario | Test Step Timeout                        | Global Step Timeout | Toggle | Outcome                                                                                     |
|----------|-----------------------------------------|----------------------|--------|---------------------------------------------------------------------------------------------|
| **Case 1**   | 30 seconds (default)                    | 30 seconds (default)| OFF    | Global timeout (30 seconds) applies universally, as it matches the default step timeout.    |
| **Case 2**   | 30 seconds (default)                    | 60 seconds          | OFF    | Global timeout (60 seconds) applies, as it overrides the default step timeout (30 seconds). |
| **Case 3**   | Some steps customized, some unchanged   | Updated value       | OFF    | Customized steps use their specific timeouts and steps without custom timeouts use the global timeout. |
| **Case 4**   | Some steps customized, some unchanged   | Any value           | ON     | Global timeout applies to all steps, overriding step-specific timeouts.                     |


Refer to the screenshot below to enable the **Global Step Timeout** toggle in the **Additional Settings** section of the **Adhoc Run** overlay.

![Global Timeouts](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Global_Settings.png)

---
## **Update Step Settings**

To update several test steps, click the **checkboxes** next to the **test steps** you want to update and then click on **Update Settings** in the menu bar to open a popup window where you can make changes to the settings. ![Update Step Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/update_testsettings.gif)

[[info | NOTE:]]
| Update Step Setting does not allow updating the **Pre-Requisite** and **Number of Retries on Step Failure**. You should use **Test Step Settings** for each step individually.

---