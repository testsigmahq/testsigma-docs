---
title: "Label Management in Testsigma"
pagetitle: "Label Management in Testsigma"
metadesc: "The Label Management helps you manage labels linked to test cases, elements, step groups, test suites, and test plans | Label Management in Testsigma Application"
noindex: false
order: 4.191
page_id: "Label Management"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create a Label"
  url: "#steps-to-create-a-label"
- type: link
  name: "Steps to Associate Label to Test Case"
  url: "#steps-to-associate-label-to-test-case"
- type: link
  name: "Steps to Unlink Labels from Entities"
  url: "#steps-to-unlink-labels-from-entities"
---

---

The Label Management feature in Testsigma helps you manage labels linked to test cases, elements, step groups, test suites, and test plans. You can view all labels in one place, check their associations, and easily unlink or delete them from the management page. This article discusses how to manage labels in Testsigma.


---


> ## **Prerequisites**
> 
> Before you begin, ensure you know how to create [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [Elements](https://testsigma.com/docs/elements/overview/), [Step Groups](https://testsigma.com/docs/test-cases/step-types/step-group/), [Test Suites](https://testsigma.com/docs/test-management/test-suites/overview/), and [Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/).

---

## **Steps to Create a Label**

1. From the left navigation bar, go to **Settings > Labels**, and click **Add New Label** in the top-right corner.
   ![Navigation](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Label_Management.png)

2. Enter a name and click the tick mark icon to save the label.
   ![Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/New_Label_Name.png)

3. The label will be added to the list.
   ![List](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/New_Label_Added.png)

[[info | **NOTE**:]]
| - You can edit the label by clicking on the **Edit** icon corresponding to the label. 
|   ![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_Label_Icon.png)
| 
| - You can delete the label by clicking on the **Delete** icon corresponding to the label.
|   ![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Delete_Label_Icon.png)

---

## **Steps to Associate Label to Test Case**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Cases_Labels.png)

2. Create a test case or open an existing test case.

3. In the **Utility Panel**, click **Manage Test Case**, and scroll down to **Labels**.
   ![Utility Panel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Utility_Panel_Labels.png)

4. Click **Labels**, then select the labels you want to associate with the test case from the dropdown menu.
   ![Labels](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Labels_Select.png)

5. Now go to **Settings > Labels**, select a label, and click the number corresponding to it to view assets associated with a label. 
   ![Settings > Labels](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Linked_Number_Labels.png)


[[info | **NOTE**:]]
|
| - You can link labels to **Step Groups** from the **Manage Step Group** panel.
|   ![Manage Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Step_Group_Labels.png)
| 
| - You can link labels to **Elements** from the **Update Element** overlay.
|   ![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Element_Details_Labels.png)
| 
| - You can link labels to **Test Suites** from the **Test Suite Info** overlay.
|   ![Test Suite Info](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Suite_Labels.png)
| 
| - You can link labels to **Test Plans** from the **Test Plan Details** overlay.
|   ![Test Plan Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Plan_Labels.png)

6. All entities linked to a label, such as Test Cases, Elements, Step Groups, Test Suites, and Test Plans, appear in this dialog.
   ![All Links](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Labels_Linked_Entities.png)

---

## **Steps to Unlink Labels from Entities**

1. From the left navigation bar, go to **Settings > Labels**, select a label, and click the number corresponding to it to view the associated assets.
   ![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Linked_Entities_Number.png)

2. In the **Linked Entities** dialog, go to the **Entity** tab, select the assets you want to unlink, and click **Remove Link**.
   ![Remove Link](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Remove_Link_Labels.png)

---