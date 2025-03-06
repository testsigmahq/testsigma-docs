---
title: "Debugging Mobile Applications on Local Devices"
pagetitle: "Debugging Web Application Results on Local Devices"
metadesc: "Learn how to debug test cases on local devices for web applications, using detailed steps and troubleshooting tips to ensure accurate and efficient testing."
noindex: false
order: 34.2
page_id: "debugging-results-local-devices-mobile-applications"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Running Debugging on Android or iOS Devices"
  url: "#running-debugging-on-android-or-i0s-devices"
- type: link
  name: "Adding and Managing Debug Points on Mobile Devices"
  url: "#adding-and-managing-debug-points-on-mobile-devices"
- type: link
  name: "Interacting with Debug Points during Mobile Debugging"
  url: "#interacting-with-debug-points-during-mobile-debugging"
- type: link
  name: "Inspecting Test Execution Details on Mobile"
  url: "#inspecting-test-execution-details-on-mobile"
- type: link
  name: "Identifying and Fixing Errors during Mobile Test Case Execution"
  url: "#identifying-and-fixing-errors-during-mobile-test-case-execution"
- type: link
  name: "Troubleshooting Element Not Found Error on Mobile Devices"
  url: "#troubleshooting-element-not-found-error-on-mobile-devices"  
---

---

Debugging mobile applications on local devices with Testsigma allows you to inspect and resolve errors by running test cases step-by-step. This interactive debugging feature lets you pause at specific points, inspect behavior, and analyze resources like step results, metadata, and screenshots, ensuring accurate problem identification and efficient resolution.

---

## **Prerequisites**

Before starting the debugging process, ensure the following:
- A local mobile device with [Android](https://testsigma.com/docs/agent/connect-android-local-devices/) or [iOS](https://testsigma.com/docs/agent/connect-ios-local-devices/) applications configured with Testsigma. The Testsigma Agent is active on your local device.
- Debugging must be performed on a local device.
- If your test case uses a test data profile, only one test data profile can be selected for debugging.

---

## **Running Debugging on Android or iOS Devices**

1. Navigate to the test case you want to debug.
2. On the test case details page, click the **Launch Debugger** button in the top-right corner of the screen.
3. In the **Run in Debug Mode** overlay, ensure the following:
    - Default the **Test Lab** is set to **Local Device**
    - Select the **Test Machine** Device from the dropdown menu to choose the device for the debug session.
    - Enable the **Run till Failed** step toggle to execute the test steps until a specific step fails. If this toggle is disabled, the test case will execute from start to end.
    - Set a debug point by selecting a test step from the dropdown menu.
    - Select **External Path** and provide the application's publicly accessible URL or **Uploaded Apps** and select the application from uploaded apps in Testsigma.
4. Click **Debug Now** to start the debugging process. The debugger screen will open, showing the test steps, related information, and the device screen. ![launch debug mode on android or ios devices](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/launch_debugger_android_ios.gif)

---

## **Adding and Managing Debug Points on Mobile Devices**

Debug points are specific locations in your test steps where you want the execution to pause or start. To add and manage debug points:

1. In the Testsigma Debugger overlay, hover over the test step where you want to place a debug point.
2. Click the **Place Debug Point** icon to add a debug point.
3. To add multiple debug points, repeat the process for other test steps.
4. Execution will pause when it reaches an enabled debug point, allowing you to observe the behavior of the test case at that specific step.

---

## **Interacting with Debug Points during Mobile Debugging**

When the execution pauses at a debug point, you can perform the following actions:
- **Resume Execution**: Continue the test execution from the paused point.
- **Run This Step**: Execute the current step immediately.
- **Step Over:** Skip the current step and move to the next one. ![interacting with debug points during mobile debugging](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/interacting_with_debug_points_mobile_debugger.png)

---

## **Inspecting Test Execution Details on Mobile**

- **Add Source**: When you reach a debug point, the **Add Source** section provides information about the test step's source code, allowing you to understand the context and behavior of the code being executed.
- **Selected Element Details**: In the **Selected Element** section, view details about the UI elements involved in the test step. This includes properties and attributes that are crucial for debugging element-related issues. ![inspecting element details and add source code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/inspecting_element_details_debugger.gif)
- **Step Result**: The **Step Result** section shows the outcome of the test step, including pass/fail status and any associated error messages. This information helps diagnose issues and verify whether the test step has behaved as expected.

---

## **Identifying and Fixing Errors during Mobile Test Case Execution**

During test case execution, you can visually follow each step. If an error occurs or a debug point is reached:
- Testsigma will highlight the problematic step.
- Use the provided resources, including **Add Source**, **Selected Element**, and **Step Result**, to analyze the issue and determine the necessary fixes. ![identifying errors during mobile test case execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/identifying_errors_during_step_result_mobile_debugger.png)

---

## **Troubleshooting Element Not Found Error on Mobile Devices**

A common issue is the **Element Not Found** error, where an element visible on the device is reported as not found. To address this:

1. View the message for the test step. If the element is not found, click **Element** to view its properties.
2. Analyze the issue, update the element properties if needed, then click **Options** and select **Resume Execution** from the previously paused step. ![troubleshooting element not found error on mobile devices](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/troubleshooting_element_not_found_error_mobiledebugger.gif)

---

