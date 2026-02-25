---
title: "Copilot Test Authoring for Mobile Applications"
pagetitle: "Copilot Test Authoring for Mobile Applications"
metadesc: "Debug and fix mobile test failures in real time with Testsigma Copilot, featuring live step authoring, diagnostics, screenshots, and loop inspection."
noindex: false
order: 36.2
page_id: "copilot-test-authoring-for-mobile-applications"
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
  url: "#running-debugging-on-android-or-ios-devices"
- type: link
  name: "Global Debug Toolbar"
  url: "#global-debug-toolbar"
- type: link
  name: "Adding and Managing Debug Points on Mobile Devices"
  url: "#adding-and-managing-debug-points-on-mobile-devices"
- type: link
  name: "Editing and Reordering Test Steps"
  url: "#editing-and-reordering-test-steps"
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

Copilot in Testsigma enables interactive execution of mobile application tests, which allows you to identify and fix test case failures while the test is running on mobile devices. It provides centralized control over the test flow, letting you skip steps, resume execution, or restart tests from a single interface without stopping the entire run.

Copilot supports live step authoring for mobile tests, so you can modify, add, or delete test steps even after a failure has occurred. When steps are reordered or removed, the execution flow is automatically recalculated to ensure continuity during mobile test execution.

During execution, Copilot provides detailed diagnostic information, including error messages, elements, test data, step settings, metadata, step details, and screenshots, to help you quickly identify the root cause of mobile-specific failures.

For mobile tests that include loops, Copilot offers granular loop inspection, allowing you to track iteration counts, inspect specific cycles, and modify steps within the loop sequence. By enabling real-time fixes and minimizing repeated reruns, Copilot helps resolve common mobile issues such as element identification errors and ensures tests are reliable by the time execution completes.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure the following:
> 1. You have a local mobile device (Android or iOS) configured with Testsigma. For more information, refer to the [documentation on Android](https://testsigma.com/docs/agent/connect-android-local-devices/) or [documentation on iOS](https://testsigma.com/docs/agent/connect-ios-local-devices/) applications configured with Testsigma. 
> 2. The **Testsigma Terminal** is running and the **Copilot** is active.
> 3. Debugging is performed on a Local Device.
> 4. If the test case uses a test data profile, only one test data profile is selected.

---

## **Running Debugging on Android or iOS Devices**

1. Navigate to the test case you want to debug.
  
2. On the test case details page, click the **Copilot** button in the top-right corner of the screen.
3. In the **Run in Debug Mode** overlay, ensure the following:
    - Under **Test Machine**, select the required device from the **Device** dropdown to choose the device for the debug session.
    - Enable the **Run till failed step** toggle to execute the test steps until a specific step fails. If this toggle is disabled, the test case will execute from start to end.
    - Set a debug point by selecting a test step from the dropdown menu.
    - Select **External link** to provide the application's publicly accessible URL, **Uploaded apps** to select an application already stored in Testsigma, or **Use details** to manually enter the **App Package** and **App Activity** for the mobile application.

4. Click **Launch** to start the debugging process. The debugger screen will open, showing the test steps, related information, and the device screen. 

---

## **Global Debug Toolbar**

Common debugging actions are accessible at a global level to control execution from anywhere, including when the test is paused at a debug point or failure. Using the global toolbar, you can:

   - **Resume Execution -** Continues the test from the next execution step. The test does not restart from the beginning.
   - **Step Over -** Moves execution forward by skipping the current debug point and executing the next step. The test then pauses at the following step.
   - **Skip Over -** Skips the step where the debug point is placed without executing it and pauses execution immediately.
   - **Restart Execution -** Restarts the test case execution from the first step. This can only be used when the test execution is paused.

---

## **Adding and Managing Debug Points on Mobile Devices**

Debug points are specific locations in your test steps where you want the execution pause. These points help you observe the behaviour of the test case more closely. To add and manage debug points:

1. In the **Copilot** dialog, hover over the test step where you want to place a debug point.

2. Click the **Place Debug Point** icon to add a debug point.

3. To add multiple debug points, repeat the process for other test steps.

4. Execution will pause when it reaches an enabled debug point, allowing you to observe the behavior of the test case at that specific step.

---

## **Editing and Reordering Test Steps**

After an execution pauses, fails, or completes, you can modify the test steps using Copilot.

### **1. Add Test Steps**

- In the **Copilot** dialog, click **Add new step**.

- Select an NLP from the dropdown and configure the required parameters, and click **Create Step**. 

- Reorder the step if necessary, then click **Resume** to continue from the next unexecuted step.

### **2.Reorder Test Steps**

- In the **Copilot** dialog, click the test step you want to reorder and drag it to the required position in the step list. 

- Click **Save Order**. 

- Click **Resume** to continue execution.

### **3.Update/Create Elements in Test Steps**

- Select a test step containing an element and click the element name to view options:
   - **Rename**
      - Click **Rename** and update the element name. 
   - **Learn**
      - Click **Learn** to re-record the element.
   - **Change**
      - Click **Change** to open the **Elements** screen.
      - Select the required element.
      - Click **Update Step** to replace the element in the test step.
   - **Create**
      - Click **Create** to open the **Create Element** screen.
      - Enter the element name, screen name, element type, and value.
      - Click **Create**, then click **Update Step** to associate the new element with the test step.
   - **Edit**
      - Click **Edit** to open the **Update Element** screen.
      - Modify the screen name, element name, element type, or value as required.
      - Click **Update**, then click **Update Step** to apply the changes.
  
  - Click **Resume** to continue execution.

### **4. Delete Test Steps**

- In the **Copilot** dialog, click the **Step Options** for the required test step and select **Delete Step**. 

- In the **Delete step?** dialog, click **Delete**. 

- Click **Resume** to continue execution.

[[info | **NOTE**:]]
| - If you want to execute the test case from the beginning, click the **Restart Execution** icon.

---

## **Inspecting Test Execution Details on Mobile**

- **Add Source**: When you reach a debug point, the **Add Source** section provides information about the test step's source code, allowing you to understand the context and behavior of the code being executed.
- **Selected Element Details**: In the **Selected Element** section, view details about the UI elements involved in the test step. This includes properties and attributes that are crucial for debugging element-related issues. 
- **Step Result**: The **Step Result** section shows the outcome of the test step, including pass/fail status and any associated error messages. This information helps diagnose issues and verify whether the test step has behaved as expected.

---

## **Identifying and Fixing Errors during Mobile Test Case Execution**

During test case execution, you can visually follow each step. If an error occurs or a debug point is reached:
- Testsigma will highlight the problematic step.
- Use the provided resources, including **Add Source**, **Selected Element**, and **Step Result**, to analyze the issue and determine the necessary fixes. 

---

## **Troubleshooting Element Not Found Error on Mobile Devices**

A common issue during test execution is the Element Not Found error. This occurs when an element is visible on the screen, but the system cannot identify it using the stored properties. To debug this issue, follow these steps:

### **1. Analyze the error**

- In the **Copilot** dialog, select the **Step Options** and click **View Result**. 

- Click the **Element name** to view its identification properties.

- Compare the stored properties with the current state of the application UI to identify why the element was not found.

### **2. Update the element**

Once you have identified the issue, update the element to improve its stability:

- **To refresh properties -** Click **Learn** to capture the element's current attributes from the UI automatically.

- **To manually adjust -** Click **Edit** to modify specific attributes like the screen name, element type, or value.

- **To replace the element -** Click **Change** to select a different existing element.

### **3. Resume execution**

After you update the element and click **Update Step**, you must restart the execution:

- Select **Resume** to continue from the previously failed step.

---
