---
title: "Editing a Test Case Using Live Editor"
pagetitle: "Editing a Test Case Live Using Testsigma Live Editor"
metadesc: "Learn how to edit a test case live using Testsigma Live Editor | Testsigma Live Editor allows you to check step details of the test case without having to re-run on test failure"
noindex: false
order: 10.3
page_id: "Editing a Test Case Using Live Editor"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Editing a Test Case Using Live Editor"
  url: "#editing-a-test-case-using-live-editor"
---

---

In Testsigma, Live Editor gives you complete control over test cases while executing, which helps fix issues or errors in real time. It eliminates the need to rerun the entire test after a failure, making debugging and test stabilization faster and more efficient. This article discusses editing test cases live while executing them using Live Editor.

---


> ## **Prerequisites**
> 
> Before you begin, ensure you know how to create [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and install **Testsigma Lite** application.


---

## **Steps to Edit a Test Case Using Live Editor**


1. In the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestCases_Testsigma_Lite.png)

2. Create a new test case or open an existing one, and click **Live Editor** in the **Action Panel**.
   ![Action Panel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Live_Editor_Action_Panel.png)

3. In the **Live Editor** overlay:
   - Select a **Data Set Name** from the dropdown menu if the test case is data-driven.
     ![DataSet Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/DataDriven_Live_Editor.png) 
   
   - To execute the test case until a failed step, enable **Run till failed step** toggle.
     ![Run till failed step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Failure_Step_live_Editor.png)

   - Select the test step to debug up to.
     ![Debug Point](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Select_Step_To_Debug.png) 

4. Click **Launch**. A new window opens with the **Live Editor**.
   ![Launch](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Launch_Live_Editor.png)

5. The test steps execute until the selected debug point.

6. When debugging is complete, click **Stop** to close the **Live Editor**.
   ![Stop Live Editor](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Stop_Live_Editor.png)

[[info | **NOTE**:]]
| Clicking **Stop** stops the current execution but does not close the **Live Editor**. To close the **Live Editor**, open **Testsigma Lite** application and click **Quit Live Editor**.
| ![Quit Live Editor](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Quit_Testsigma_Lite.png)

---