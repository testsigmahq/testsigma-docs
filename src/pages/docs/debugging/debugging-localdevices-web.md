---
title: "Debugging Results on Local Devices for Web Applications"
pagetitle: "Debugging Web Application Results on Local Devices"
metadesc: "Learn how to debug test cases on local devices for web applications, using detailed steps and troubleshooting tips to ensure accurate and efficient testing."
noindex: false
order: 34.1
page_id: "debugging-results-local-devices-web-applications"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Executing Test Cases in Debugger Mode"
  url: "#executing-test-cases-in-debugger-mode"
- type: link
  name: "Adding Debug Points"
  url: "#adding-debug-points"
- type: link
  name: "Interacting with Debug Points"
  url: "#interacting-with-debug-points"
- type: link
  name: "Identifying and Fixing Errors During Test Case Execution"
  url: "#identifying-and-fixing-errors-during-test-case-execution"
- type: link
  name: "Troubleshooting Element Not Found Error"
  url: "#troubleshooting-element-not-found-error"  
---

---
Debugging in Testsigma helps identify and resolve errors in test cases through its interactive debugging feature. This feature lets you execute tests step-by-step, pausing at specific points to inspect behaviour. It provides users with detailed resources like step results, metadata, screenshots, source codes, and step settings to pinpoint failures accurately, thus saving time and enhancing the reliability of test executions.

---

## **Prerequisites**

Before you begin debugging in Testsigma, ensure the following:

- The Testsigma Agent is started and active.
- Debugging can only be done through a Local Device.
- If the test case uses a test data profile, only one test data profile can be selected for debugging.

---

## **Executing Test Cases in Debugger Mode**

1. Navigate to the test case you want to debug.
2. On the test case details page, click the **Launch Debugger** button in the top right corner of the screen.
3. On the Run in Debug Overlay, default the **Test Lab** is set to **Local Device** and that the **Agent** is in **Active Status** for debugging.
4. To execute the test steps until a failed step, enable the **Run till failed step toggle** and set a debug point by selecting the test step from the dropdown. If this toggle is disabled, the test case will execute from start to end.
5. Click **Debug now** to execute the test case. ![click launch debugger in test case details page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/launch_debugger_in_web_application.gif)

---

## **Adding Debug Points**

Debug points are specific locations in your test steps where you want the execution to start or pause. These points help you observe the behaviour of the test case more closely.

1. A new window with the webpage's URL provided will open to debug the test steps.
2. In the Testsigma Debugger overlay, hover over the yet to execute test step and click the **Place Debug Point** icon to add a debug point.
3. To add multiple debug points, hover over the test step and click on the corresponding debug point that appears to enable it.
4. Execution will pause when it reaches an enabled debug point. ![add debug point in debugger mode](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adding_debugging_point_in_web_applications.gif)

---

## **Interacting with Debug Points**

1. When the test execution pauses at a debug point, you can perform the following actions by clicking **Options** for the test step that has yet to be executed and selecting the option from the dropdown:
     - **Resume Execution**: Continue the test execution.
     - **Run this Step**: Execute the current step.
     - **Step Over**: Skip the current step.
2. Interact with the page to skip the failed test step, click **Step Over** to skip the current step, and continue the executions. ![interact with debug points in web](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/interact_debugg_web_application.gif)

---

## **Identifying and Fixing Errors During Test Case Execution**

During test case execution, you can visually follow each step. If an error occurs or a debug point is reached, execution pauses, and Testsigma highlights the problematic step. Various resources are provided to help you debug the error, offering a detailed and interactive analysis.

- Hover over the Step **Options** for Executed Test Step and then click **Step Result** to view the outcome of each test step. ![identifying and fixing errors during test case execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/identifing_error_teststep_debug.gif)

---

## **Troubleshooting Element Not Found Error**

A common issue during test execution is the "Element Not Found" error, where an element visible on the page is still reported as not found. To debug this issue, follow these steps:

- View the message for the test step. If the element is not found, click **Element** to view its properties, analyse the issue, and [update the element](https://testsigma.com/docs/elements/web-apps/create-manually/).
- After updating the element, click **Options** and select **Resume Execution** from the previously paused step. ![troubleshoot element not found error](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/troubleshooting_element_error.gif)

---

