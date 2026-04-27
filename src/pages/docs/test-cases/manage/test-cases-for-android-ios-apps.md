---
title: "Manage Test Cases for Android & iOS Apps"
pagetitle: "Manage Test Cases for Android & iOS Apps"
metadesc: "Manage test cases for Android and iOS apps in Testsigma using Atto and Copilot. Learn how to add steps, record actions, and automate mobile app tests."
noindex: false
order: 4.22
page_id: "manage-test-cases-for-android-ios-apps"
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
---

---

Testsigma allows you to manage test cases for Android and iOS mobile applications. This documentation covers how to edit and delete test cases for Android and iOS apps in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure you have referred to the [documentation on Creating Test Cases for Android & iOS Applications](https://testsigma.com/docs/test-cases/create-test-cases/test-cases-for-mobile-applications/). 

---

## **Edit a Test Case**

[[info | NOTE:]]
| Note that the most effective way to edit your test case is by using Copilot. Please refer to the documentation on [Editing a Test Case Using Copilot](https://testsigma.com/docs/live-editor/editing-test-case/).

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Expand a **Feature**, then expand a **Scenario**, and select the test case you want to edit.
![Test cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_mobile_1.png)

3. On the Test Case Details page, you can edit the test case using the following options:

### **Add a New Step**

1. Click **+ Add new step** at the bottom of the step list to append a new step at the end.
![Add new step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_mobile_2.png)

2. To insert a step at a specific position, hover over any existing step. Click **+ Step Above** to insert a step before it, or **+ Step Below** to insert a step after it.
![Step above & below](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_mobile_3.png)

### **Update an Existing Step**

1. Click on any existing step to make it editable. Modify the NLP action, test data, or element as needed. 
![Update an existing step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_mobile_4.png)

### **Reorder Steps**

1. Hover over a step to reveal the drag handle **(⠿)** on the left side of the step.
![Reorder](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_mobile_5.png)

2. Click and drag the step to the desired position in the list and click **Save new order**. 
![Save](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_mobile_6.png)

### **Step Options (Ellipsis Menu)**

1. Hover over a step and click the ellipsis (⋮) icon on the right side to access additional options:
![Step options](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_mobile_7.png)

   -  **Ignore Step Result:** Marks the step so that its pass or fail result does not affect the overall test case result.
   -  **Enable Visual Testing:** Enables visual comparison for that specific step during execution.
   -  **Step Settings:** Opens the Step Settings overlay on the right, where you can configure the following:
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
      ![additional options](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_mobile_8.png)

2. Click **Update** to save the Step Settings changes. 
![Update](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_edit_mobile_9.png)

3. Use the right-side navbar to update advanced settings such as **Test Case Info**, **Test Case Settings**, and **Manage Test Case** options. Please refer to the documentation on [Test Case: Advanced Options Guide](https://testsigma.com/docs/test-cases/manage/test-case-advanced-options/) for more information. 

---

## **Delete a Test Case**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Expand a **Feature**, and then expand a **Scenario**.

3. Delete the test case using one of the following methods:
   - Open the test case. In the top-right corner, click the **More options (⋮)** menu, and then click **Delete**.
     ![Delete Test Case from Case Page](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_delete_mobile_1.png)
   - In the expanded scenario section, select the **ellipsis (⋮)** icon next to the test case, and click **Delete**.
     ![Delete from List](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_delete_mobile_2.png)
   - On the **Test Case List** page, select one or more test cases, and then click the **Delete** icon in the menu bar.
     ![Delete from List View](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_delete_mobile_3.png)

4. A **Delete Confirmation** pop-up will appear. Click **Delete** to remove the test case from the project.
![delete confirmation](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/manage_tests_delete_mobile_4.png)

[[info | NOTE:]]
| - When you delete test cases from the list, you send them to the trash folder. You can restore or permanently delete the test case from the trash folder.
| - Deleting the test case will remove all the associated test suites, test plans, and any prerequisites.

---
