---
title: "Debug Results on Local Devices"
order: 10.3
page_id: "Debug Results on Local Devices"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Steps"
  url: "#steps"
---

---

There might be times when you face an issue during your test execution, and you need more than screenshots, videos, or logs to see where the error was. With Testsigma, now you can debug any such issues on your local devices via step-wise debugging. In this document we will discuss how to do that.

---

## **Prerequisites**

1. A mobile app test case to debug. To know more on how to create a test case for mobile, check [here](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
2. A local mobile device configured to run with Testsigma. Here are two links that would help:
    1. [Set Up Android Local Devices](https://testsigma.com/docs/agent/connect-android-local-devices/)
    2. [Set Up iOS Local Devices](https://testsigma.com/docs/agent/connect-ios-local-devices/)

---

## **Steps**

1. Go to the test case that you want to debug on your local device.
2. On the test case details page, click on the downward arrow beside the run button on the top right of the page. For your reference, the downward arrow is also highlighted in the screenshot below:

![The drop down to run a test case in debug mode.](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/results-on-local-devices/run-debug-mode-dropdown-button.png)

3. You will see two options in the drop-down that appears, choose the option 'Run In Debug Mode'.

4. The ‘Ad-hoc Run’ layover will appear as also shown in the screenshot below.

![The drop down to run a test case in debug mode.](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/results-on-local-devices/ad-hoc-run-layover-debug-mode.png)

5. On this layover, make sure the ‘Test Lab’ is selected as ‘Local Devices’. Select the Test Device by choosing the ‘Test Machine’ and ‘Device Name’.

6. If you want the test cases to execute till the step that fails, then you have to enable toggle 'Run till failed step' 

Or, if you want the test cases to execute till a particular step then you can choose that step from the dropdown with label 'Run till step'. 

If you enable the toggle 'Run till failed step' and also choose a particular step under 'Run till step' then execution will run till the condition is met first. For example, if a failure is encountered first it will run till the step that fails, and vice versa. 

If you enabled toggle 'Run till failed step' then the debug point will appear at the failed step during test execution, if any.  And, if you selected a step under 'Run till step', then a debug point will appear for that step. 

7. Configure the section Use Path/Use Uploads according to your setup.

8. Once you have filled the required fields, click on the button “Run Now” on the bottom right of the 'Ad-hoc Run' layover.

9. Now the debugger screen will open where you will see the test steps, related information and the device screen. The device screen will display the current screen being under test. The screen will appear something like the screenshot below:

![The debug screen for debugging a test case for a mobile test case.](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/results-on-local-devices/debugger-screen-mobile.png)

10. On this screen you would be able to see the test execution. The enabled debug point will be displayed like the red icon highlighted in the screenshot below.

![Enabled debug point for a test step.](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/results-on-local-devices/enabled-debug-point.png)

Note: On this screen, the debug point can be enabled for any test step by hovering on the test step and clicking on the corresponding debug point that appears. When a debug point is enabled for a test step, the test execution will pause on reaching that step. 

11. When the test execution pauses on any of these steps, you can check the related details under the section “Add Source/Selected Element/Step Result”. In addition, you see below options on the test step:
	1. **Resume**: To resume the test execution from that step.
	2. **Rerun**: To execute the selected step again.
	3. **Step Over**: To start debugging the next step. If you click on the “step over” button on a debug step, you will see that the debug point will appear for the next step. The execution control would move to the next step too.

The test step actions are highlighted in the screenshot below for your reference:

![The test step actions for debug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/debugging/results-on-local-devices/debug-test-step-actions.png)

---



