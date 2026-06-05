---
title: "Record Test Steps"
pagetitle: "Record Test Steps"
metadesc: "Learn how to record test steps in Copilot by performing actions in your application and converting them into automated steps."
noindex: false
order: 11.15
page_id: "record-test-steps"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Record Test Steps"
  url: "#steps-to-record-test-steps"
---

---

Copilot lets you capture test steps by performing actions directly in your application, recording each interaction in real time, and converting them into automated test steps instantly. Any new steps you record are added and executed in the same session, without leaving Copilot. This article discusses how to record test steps using Copilot.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
>    - You have created a test case.
>    - You have installed and configured the **Testsigma Terminal**.
>    - You have referred to the documentation on [Launch Copilot](https://testsigma.com/docs/copilot/launch-copilot/).

---

## **Steps to Record Test Steps**

Once the session is active, you can add recorded steps in two ways, depending on where you are in the execution.

### **Add Below a Specific Step**

1. When execution hits a debug point and pauses (or fails), hover over any step and click **Step Below**, then click **Rec**.
   ![Rec](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_5.png)

[[info | **NOTE**:]]
| The **Rec** button is enabled only when execution is paused at a debug point, when execution fails, or once execution is complete.

2. Perform actions in your application. The Copilot records each action as a test step in real time.

3. Click **Stop Recording** to end the session.
   ![stop recording](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_6.png)

4. Review the recorded steps in the steps panel.

5. Click **Add Steps** to insert them immediately below the selected step, or click **Discard** to remove them.
   ![Add steps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_7.png)

[[info | **NOTE**:]]
| - If you insert steps below the last executed step, the recorded steps are executed automatically once added. ![Executed automatically](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_8.png)
| - If you insert steps above the last executed step, click **Resume**. ![Resume](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_9.png)
| - The **Browser State Changed** dialog appears:
|    - Click **Restart Execution** to restart the execution. 
|    - Click **Dismiss** to continue from where execution stopped. Upon dismissal, manually adjust the state of the application to keep it in sync with the step to be executed. ![Restart Execution](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_10.png)

---

### **Add at the End**

1. Once execution is complete or paused at a debug point, click **Rec** to start a recording session. By default, steps get recorded at the end. You can reorder the steps if required.
![Rec](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_11.png)

1. Perform actions in your application. The Copilot records each action as a test step in real time.

2. Click **Stop Recording**.
   ![Stop recording](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_12.png)

3. Review the recorded steps in the steps panel.

4. Click **Add Steps** to append them to the end of the test case, or click **Discard** to remove them.
   ![Add steps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_13.png)

5. Once you have added the recorded step(s), click **Resume**.
   ![Resume](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_14.png)

6. The **Browser State Changed** dialog appears:
   - Click **Restart Execution** to restart the execution.
   - Click **Dismiss** to continue from where execution stopped. Upon dismissal, manually adjust the state of the application to keep it in sync with the step to be executed. ![Browser state changed](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_15.png)

[[info | **NOTE**:]]
| If execution was complete before starting this action, the recorded steps are executed automatically after clicking **Add Steps**. ![Add steps](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/record_copilot_16.png)

---
