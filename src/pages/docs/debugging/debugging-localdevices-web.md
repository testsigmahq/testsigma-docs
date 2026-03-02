---
title: "Copilot Test Authoring for Web Applications"
pagetitle: "Copilot Test Authoring for Web Applications"
metadesc: "Testsigma Copilot enables interactive test execution with live step editing, failure diagnostics, loop inspection, and real-time fixes without stopping test runs."
noindex: false
order: 36.1
page_id: "copilot-test-authoring-for-web-applications"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Executing Test Cases Using Copilot"
  url: "#executing-test-cases-using-copilot"
- type: link
  name: "Global Debug Toolbar"
  url: "#global-debug-toolbar"
- type: link
  name: "Adding Debug Points"
  url: "#adding-debug-points"
- type: link
  name: "Editing and Reordering Test Steps"
  url: "#editing-and-reordering-test-steps"
- type: link
  name: "Debugging Steps Within Loops"
  url: "#debugging-steps-within-loops"
- type: link
  name: "Identifying and Fixing Errors During Test Case Execution"
  url: "#identifying-and-fixing-errors-during-test-case-execution" 
- type: link
  name: "Troubleshooting Element Not Found Error"
  url: "#troubleshooting-element-not-found-error"       
---

---
Copilot in Testsigma enables interactive test execution, which allows you to identify and fix test case failures while the test is running. It provides centralized control over the test flow, you skip steps, resume execution, or restart tests from a single interface without stopping the entire run.

Copilot supports live step authoring, so you can modify, add, or delete test steps even after a failure has occurred. When steps are reordered or removed, the execution flow is automatically recalculated to ensure continuity. 

During execution, Copilot provides detailed diagnostic information, including error messages, elements, test data, step settings, metadata, and step details to help you quickly identify the root cause of failures.

For tests that include loops, Copilot offers granular loop inspection, allowing you to track iteration counts, inspect specific cycles, and modify steps within the loop sequence. By enabling real-time fixes and minimizing repeated reruns, Copilot helps resolve common issues such as element identification errors and ensures tests are reliable by the time execution completes.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. The **Testsigma Terminal** is running, and the **Copilot** is active.
> 2. Debugging can only be done through a **Local Device**.
> 3. If the test case uses a test data profile, only one test data profile can be selected for debugging.

---

## **Executing Test Cases Using Copilot**

1. Navigate to the test case you want to debug.

2. On the test case details page, click the **Copilot** button at the top right corner. 

3. In the **Copilot** overlay, to execute the test steps until a failed step, enable the **Run till failed step** toggle and set a debug point by selecting the test step from the dropdown. If this toggle is disabled, the test case will execute from start to end.

4. Click **Launch** now to execute the test case.

---

## **Global Debug Toolbar**

Common debugging actions are available globally to control execution from anywhere, and are enabled when the test is paused at a debug point or on a failure. Using the global toolbar, you can:

   - **Resume Execution -** Continues the test from the next execution step. The test does not restart from the beginning.
   - **Step Over -** Moves execution forward by executing the current test step (where execution is paused) and then pauses again at the very next test step in the same flow.
   - **Skip Over -** Skips the current step (where the execution is paused) and pauses again at the very next step in the same flow.
   - **Restart Execution -** The Copilot clears the current session and restarts a fresh session in order to execute the test steps from the start.

---

## **Adding Debug Points**

Debug points are specific locations in a test case where you want the execution to pause. These points help you observe the behaviour of the test step(s) more closely.

1. A new window with the webpage's URL provided will open to debug the test steps.


2. In the **Copilot** dialog, hover over the yet-to-execute test step and click the **Place Debug Point** icon to add a debug point.


3. To add multiple debug points, hover over the test step and click on the corresponding debug point that appears to enable it.


4. Execution will pause when it reaches an enabled debug point.

---

## **Editing and Reordering Test Steps**

After an execution pauses, fails, or completes, you can modify the test steps using Copilot.

### **1. Adding Test Steps**

- In the **Copilot** dialog, click **Add new step**.

- Select an NLP from the dropdown, configure the required parameters, and click **Create Step**. 

- Reorder the step if necessary, then click **Resume** to continue from the next unexecuted step.

### **2. Adding Steps During Execution**

You can add new steps while a test is already running. Whether the newly added step executes in the current run or a future run depends on its position relative to the current execution point.

   -  **Adding a Step Above the Execution Point**
      - The newly added step does not execute in the current run.
      - It is executed during the next test execution.

   - **Adding a Step Below the Execution Point**
      - The newly added step executes in the same test run, provided execution has not already passed that step.
      [[info | **NOTE**:]]
      | - The execution point refers to the step where the test is currently paused or running.

### **3. Reordering Test Steps**

- In the **Copilot** dialog, click the test step you want to reorder and drag it to the required position in the step list. 

- Click **Save Order**. 

- Click **Resume** to continue execution.

### **3. Updating/Creating Elements in Test Steps**

- Select a test step containing an element and click the element name to view options:
   - **Rename** 
      - Click **Rename**, update the element name, and click **Update Step**. 
   - **Learn**
      - Click **Learn** to re-record the element.
   - **Change**
      - Click **Change** to open the **Elements** screen.
      - Select the required element and click **Update Step** to replace the element in the test step.
   - **Create**
      - Click **Create** to open the **Create Element** screen.
      - Enter the element name, screen name, element type, value and click **Create**.
      - Click **Update Step** to associate the new element with the test step.
   - **Edit** 
      - Click **Edit** to open the **Update Element** screen.
      - Modify the screen name, element name, element type, or value as required.
      - Click **Update**, then click **Update Step** to apply the changes.

- Click **Resume** to continue execution.

### **4. Deleting Test Steps**

- In the **Copilot** dialog, click the **Step Options** for the required test step and select **Delete Step**. 

- In the **Delete step?** dialog, click **Delete**. 

- Click **Resume** to continue execution.

[[info | **NOTE**:]]
| - If you want to execute the test case from the beginning, click the **Restart Execution** icon.

---

## **Debugging Steps Within Loops**

You can inspect or modify loop behavior after the execution has finished or failed.

### **1. Inspecting Loop Iterations**

- In the **Copilot** dialog, select the **Iteration** dropdown next to a test step. 

- Review the execution count to see how many times the loop has run.

### **2. Adding Steps Inside Loops**

Steps can be added while execution is inside a loop. The execution behavior follows the same rules as standard steps:

   - If a step is added below the current execution point, it executes in the current loop iteration.
   - If a step is added above the current execution point, it executes from the next loop iteration onward.

### **3. Modifying Loop Steps**

Once the execution is paused, you can manage the steps within a loop. Any modifications you make are applied to the updated execution flow.

You can perform any of the following actions to modify steps:

   - **Add Steps -** Add new steps to the loop sequence.
   - **Reorder steps -** Drag and drop steps to change their execution order.
   - **Create elements -** Add new elements to a step within a loop iteration.
   - **Delete steps -** Remove unnecessary steps from the loop sequence.

[[info | **NOTE**:]]
| - After modifying, deleting, or reordering steps, click **Resume** to continue execution from the next step that has not yet been run.

---

## **Identifying and Fixing Errors During Test Case Execution**

During execution, you can visually track each step. If an error occurs or a debug point is reached, the execution pauses, and Testsigma highlights the affected step.

To analyze a failed step:

1. Click the **Step Options** for the executed step.

2. Click **View Result** to open the details pane.

3. Analyze the step's failure by reviewing the diagnostic data, which includes the **Error Message**, **Element**, **Test Data**, **Step Settings**, **Metadata**, and **Step Details**.

---

## **Troubleshooting Element Not Found Error**

A common issue during test execution is the **Element Not Found** error. This occurs when an element is visible on the page, but the system cannot identify it using the stored properties. To debug this issue, follow these steps:

### **1. Analyze the error**

- In the **Copilot** dialog, select the **Step Options** and click **View Result**. 

- Click the **Element name** to view its identification properties.

- Compare the stored properties with the current state of the application UI to identify why the element was not found.

### **2. Update the element**

Once you have identified the issue, click on the element to view its properties, analyse the issue, and update the element. For more information on these actions, refer to the [documentation on updating elements](https://testsigma.com/docs/elements/web-apps/create-manually/?_gl=1*1s9gcez*_ga_ZE2Z1J3VPK*czE3NjgzODE0NTQkbzEkZzEkdDE3NjgzODE0NTgkajU2JGwwJGgw) in a test step.

### **3. Resume execution**

After you update the element and click **Update Step**, you must restart the execution:

- Select **Resume** to continue from the previously failed step.

---