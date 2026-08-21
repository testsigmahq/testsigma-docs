---
title: "Creating Test Cases for Desktop Automation"
page_title: "Creating Test Cases for Desktop Automation"
metadesc: "Desktop test cases use elements captured via Testsigma Terminal. Based on element type, Testsigma suggests actions. This article covers creating and running tests."
noindex: false
order: 31.5
page_id: "creating-test-cases-for-desktop-automation"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Record Test Steps for a Desktop Application"
  url: "#record-test-steps-for-a-desktop-application"
- type: link
  name: "Add Test Steps Manually"
  url: "#add-test-steps-manually"
- type: link
  name: "Run a Desktop Test Case with Copilot"
  url: "#run-a-desktop-test-case-with-copilot"
---

---

Create test cases for a desktop application by recording your interactions or by adding steps manually. Recording captures each interaction as a test step and creates the underlying elements as it goes. Testsigma suggests relevant actions based on the type of element used in a step.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. A Desktop project and an application exist. See [Create Projects and Applications](https://testsigma.com/docs/desktop-automation/desktop-projects-and-applications/).
> 2. **Testsigma Terminal** is installed on your Windows system.
> 3. The **WinTest Automation** folder exists in the **Testsigma Agent** directory.
> 4. The Windows application you want to test is open on your device.

---

## **Record Test Steps for a Desktop Application**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Open the test case you want to record into.

3. On the test case details page, click **Record** in the **Action Panel**.

4. In the **Select application** window, select the desktop application you want to record against.

[[info | **NOTE**:]]
| Only applications running on your device are listed. Use the search field to filter the list, or click the refresh icon to reload it after opening a new application.

5. Click **Start recording**. The Testsigma Recorder opens, the selected application comes to the foreground, and **Open application** is added as the first test step with the application path.

6. Perform actions in the application. Each interaction is captured as a test step, and the elements involved are created automatically.

[[info | **NOTE**:]]
| To record an advanced action on an element, press **Ctrl** and click the element.

7. Click **Pause** to hold recording without ending the session, or click **Stop** to end it.

[[info | **Additional Information**:]]
| Elements created during recording are saved under **Create Tests > Elements** and can be reused in other test cases. To capture elements without recording a test case, use the [Selective](https://testsigma.com/docs/desktop-automation/selective-elements/) or [Batch](https://testsigma.com/docs/desktop-automation/batch-elements/) tab of the Element Recorder.

---

## **Add Test Steps Manually**

To add a step manually, click **Actions** from the drop-down on the test case details page, select the required action from the **Actions** overlay, and select a captured desktop element for the step. Testsigma suggests inbuilt actions based on the element type, and you can also use other step types to build the test case.

---

## **Run a Desktop Test Case with Copilot**

1. On the test case details page, click **Copilot** in the **Action Panel**.

2. In the **Copilot** overlay, set the **Set Initial Debug Point** and **Execute from Step** fields, and configure the additional settings if needed.

3. Click **Launch** and wait for Copilot to start a session. Execution begins on the Windows test machine, and the Copilot panel opens alongside the step results.

4. When execution pauses at a debug point or on a failure, inspect the application and use the execution controls to continue.

[[info | **NOTE**:]]
| The execution status appears at the bottom of the Copilot panel, for example **Execution paused**.

5. Click **Rec** to record additional steps by performing actions in the application.

6. Click **Resume** to continue the run.

### **Execution Controls**

**Resume** continues the test from the next execution step without restarting from the beginning. **Rec** records additional steps into the test case during the session.

Copilot provides a further set of execution controls, including **Pause**, **Step Over**, **Skip Over**, and **Restart Execution**. 

---