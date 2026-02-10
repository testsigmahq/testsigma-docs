---
title: "Editing a Test Case Using Copilot"
pagetitle: "Editing a Test Case Live Using Testsigma Copilot"
metadesc: "Learn how to edit a test case live using Testsigma Copilot | Testsigma Copilot allows you to check step details of the test case without having to re-run on test failure"
noindex: false
order: 10.16
page_id: "editing-a-test-case-using-live-editor"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Edit a Test Case Using Copilot"
  url: "#steps-to-edit-a-test-case-using-copilot"
---

---

In Testsigma, Copilot gives you complete control over test cases while executing, which helps fix issues or errors in real time. It eliminates the need to rerun the entire test after a failure, making debugging and test stabilization faster and more efficient. This article discusses editing test cases live while executing them using Copilot.

---


> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case) and install **Testsigma Terminal** application.

---

## **Steps to Edit a Test Case Using Copilot**


1. In the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/edit_test_case_using_copilot_1.png)

2. Create a new test case or open an existing one, and click **Copilot** in the **Action Panel**.
   ![Action Panel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/edit_test_case_using_copilot_2.png)

3. In the **Copilot** overlay:
   - Select a **Data Set Name** from the dropdown menu if the test case is data-driven.
     ![DataSet Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/edit_test_case_using_copilot_3.png) 
   
   - To execute the test case until a failed step, enable **Run till failed step** toggle.
     ![Run till failed step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/edit_test_case_using_copilot_4.png)

   - Select the test step to debug up to.
     ![Debug Point](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/edit_test_case_using_copilot_5.png) 

4. Click **Launch**. A new window opens with the **Copilot**.
   ![Launch](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/edit_test_case_using_copilot_6.png)

5. The test steps execute until the selected debug point.

6. When debugging is complete, click **Exit Copilot** to close the **Copilot**.
   <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/edit_test_case_using_copilot_7.png" style="width: 400px;" />

[[info | **NOTE**:]]
| - When execution pauses at a debug point or a step failure, the Global Debugger Toolbar becomes active, providing options to **Resume**, **Step Over**, **Skip Over**, or **Restart** the session. This paused state gives you access to Copilot’s live authoring tools to edit, reorder, or update steps while the session remains live.
| - Clicking **Stop** stops the current execution but does not close the **Copilot**. To close the **Copilot**, open **Testsigma Terminal** application and click **Quit Session**.
| ![Quit Live Editor](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/live_editor/install_terminal_2.png)

---