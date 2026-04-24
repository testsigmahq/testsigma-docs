---
title: "Manage Test Cases for Web Applications"
pagetitle: "Manage Test Cases for Web Applications"
metadesc: "Effortlessly manage your test cases in Testsigma by seamlessly creating, editing, deleting, and recovering them. Streamline your test case management process, adapt to changing project needs, and ensure comprehensive test coverage."
noindex: false
order: 4.21
page_id: "test-cases-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Edit a Test Case"
  url: "#edit-a-test-case"
- type: link
  name: "Delete a Test Case"
  url: "#delete-a-test-case"
- type: link
  name: "Recover a Deleted Test Case"
  url: "#recover-a-deleted-test-case" 
---

---

Testsigma provides a comprehensive and user-friendly solution for efficiently organising and executing test cases. It enables teams to collaborate effectively, ensures maximum test coverage, and provides valuable insights into the testing workflow. This documentation guides you through editing and deleting test cases in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure you have referred to the documentation on [Creating Test Cases for Web Applications](https://testsigma.com/docs/test-cases/create-test-cases/test-cases-for-web-applications/). 

---

## **Edit a Test Case**

Note that the most effective way to edit your test case is by using Copilot. Please refer to the documentation on Editing a Test Case Using Copilot.

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Expand a **Feature**, then expand a **Scenario**, and select the test case you want to edit.
![Test case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_web_1.png)

3. On the Test Case Details page, you can edit the test case using the following options:

### **Add a New Step**

1. Click **+ Add new step** at the bottom of the step list to append a new step at the end.
![Add new step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_web_2.png)

2. To insert a step at a specific position, hover over any existing step. Click **+ Step Above** to insert a step before it, or **+ Step Below** to insert a step after it.
![Add above or below](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_web_3.png)

### **Update an Existing Step**

1. Click on any existing step to make it editable. Modify the NLP action, test data, or element as needed. 
![Update an existing step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_web_4.png)

### **Reorder Steps**

1. Hover over a step to reveal the drag handle **(⠿)** on the left side of the step.
![drag handle](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_web_5.png)

2. Click and drag the step to the desired position in the list and click **Save new order**. 
![Save new order](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_web_6.png)

### **Step Options (Ellipsis Menu)**

1. Hover over a step and click the ellipsis **(⋮)** icon on the right side to access additional options:
![ellipsis](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_web_7.png)
   - **Ignore Step Result:** Marks the step so that its pass or fail result does not affect the overall test case result.
   - **Enable Visual Testing:** Enables visual comparison for that specific step during execution.
   - **Step Settings:** Opens the **Step Settings** overlay on the right, where you can configure the following:
      - **Pre-Requisite:** Set another step as a prerequisite for this step.
      - **Step Timeout:** Define the maximum time (in seconds, up to 120) allowed for the step to execute.
      - **Screenshot Capture:** Choose when screenshots are captured: Always or Only on step failure.
      - **No. of Retries on Step Failure:** Set how many times the step should be retried if it fails.
      - **Stop Test Case execution on Test Step failure:** When enabled, the test case stops executing if this step fails.
      - **Ignore this step result in Test Case Result:** When enabled, this step's result is excluded from the overall test case result.
      - **Disable step:** Disables the step so it is skipped during execution without being deleted.
      - **Enable Visual Testing for the step:** Enables visual testing specifically for this step.
      - **Enable Accessibility Testing for the step:** Enables accessibility testing for this step.
      - **Highlight element in screenshot:** Highlights the element interacted with in the captured screenshot.
      ![options](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_web_8.png)

2. Click **Update** to save the Step Settings changes. 
![Update](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_web_9.png)

3. Use the right-side navbar to update advanced settings such as **Test Case Info**, **Test Case Settings**, and **Manage Test Case** options. Please refer to the documentation on [Test Case: Advanced Optioned Guide](https://testsigma.com/docs/test-cases/manage/test-case-advanced-options/) for more information. 


---

## **Delete a Test Case**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Expand a **Feature**, and then expand a **Scenario**.

3. Delete the test case using one of the following methods:
   - Open the test case. In the top-right corner, click the **More options (⋮)** menu, and then click **Delete**.
     ![Delete Test Case from Case Page](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Delete_Test_Case_2.png)
   - In the expanded scenario section, select the **ellipsis (⋮)** icon next to the test case, and click **Delete**.
     ![Delete from List](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Delete_Test_Case_1.png)
   - On the **Test Case List** page, select one or more test cases, and then click the **Delete** icon in the menu bar.
     ![Delete from List View](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Delete_Test_Case_3.png)

4. A **Delete Confirmation** pop-up will appear. Click **Delete** to remove the test case from the project.

[[info | NOTE:]]
| - When you delete test cases from the list, you send them to the trash folder. You can restore or permanently delete the test case from the trash folder.
| - Deleting the test case will remove all the associated test suites, test plans, and any prerequisites.

---

## **Recover a Deleted Test Case**

1. From the left navigation bar, go to **Create Tests > Test Cases**, and click the **List View** icon next to the search bar.
   ![List View](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Case_List_View_Icon.png)

2. On the **Test Case List** page, click **Saved Filters**, and then select **Trash (Deleted Test Cases)**. The list of deleted test cases appears.
   ![Trash (Deleted Test Cases)](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Trash_Option.png)

3. Locate the test case you want to recover or permanently delete by scrolling or by using the search bar.

4. To recover a test case, click **Restore** next to the test case, and then click **Restore** in the dialog box. The test case reappears on the **Test Case List** page.

5. To permanently delete a test case, click **Delete** next to the test case. In the confirmation dialog box, enter **DELETE** in the text box, and then click **I Understand, delete this (test-case-name)**.

   ![Restore & Delete](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Restore_Delete.png)

[[info | NOTE:]]
| Deleting the test case permanently will result in losing all Run reports and associated configurations.


---