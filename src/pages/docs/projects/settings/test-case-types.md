---
title: "Test Case Types"
metadesc: "Test case types are used to group test cases into categories with similar characteristics. Learn about test case types in Testsigma and how to use them."
noindex: false
order: 2.40
page_id: "Test case types"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Add a new test case type"
  url: "#add-a-new-test-case-type"
- type: link
  name: "Delete a test case type"
  url: "#delete-a-test-case-type"
- type: link
  name: "Edit a test case type"
  url: "#edit-a-test-case-type"
- type: link
  name: "Steps to Assign a Test Case Type to a Test case"
  url: "#steps-to-assign-a-test-case-type-to-a-test-case"
---

---

Grouping test cases with similar characteristics is essential for efficient software testing. By grouping test cases according to their types, you can easily maintain test cases and analyze test results more effectively. Common types of test cases are functional, non-functional, integration, and so on. 

**They are best used when:**
- You want to analyze your test results by test case types.
- You need to filter test cases by test case types.

While creating a test case on Testsigma, you can assign a type to it, to differentiate it from other test cases. This article discusses how to add, assign, edit, and delete test case types. 

---
## **Prerequisites**

You should know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/). 

---
## **Add a New Test Case Type**
1. Navigate to **Project** and click on **Project Settings**.
![Project Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctnav.png)

2. This will open **Edit Project** prompt. 
![Edit Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctepp.png)

3. Click on **Test Case Types**.
![Test Case Types](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcteppctct.png)

4. Click on **Add Type**.
![Add Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctatype.png)

5. A new blank row will appear where you can start typing to add the new test case type. Once you’re done, press **Enter**.
![Blank Row](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcttets.png)


---

## **Delete a test case type**
1. Hover over the test case type you want to delete and click on **Delete**.
![DELETE](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctdeleteb.png)

2. On the **Delete Test Case Type** prompt, enter **DELETE** and click on **Delete**.
![Confirm Deletion](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctdctct.png)

[[info | **NOTE**:]]
| 1. From the Delete Confirmation prompt, you need to unlink all the test cases associated with the test case type by clicking on the View Test Case link and change the test case type to any other available test case type. 
|![Unlink](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctutctbd.png)
| 2. Alternatively, you can also unlink test cases associated with the test case type from the edit test case page. For more information, refer to edit test cases.

---

## **Edit a test case type**
1. Hover over the test case type and click on the **Edit**.
![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctetctype.png)

2. Edit the text of the test case type, press **Enter** to save the changes.
![Enter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcteets.png)

Here is a quick GIF demonstrating how to edit a test case type.

![Test Case Types](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestCaseTypesGIF.gif)
---

## **Steps to Assign a Test Case Type to a Test case**
1. Navigate to **Create Tests > Test Cases**, and click on **Crete Test Case**.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcttcc.png)

2. From the right side navigation bar, click on **Manage Test Case**. 
![Manage Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcttcmanagetc.png)

3. On **Manage Test Case** overlay, scroll down to **Test Type** and select test case type from the drop down menu.
![Test Case Type from Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctstctfdd.png)

Here is a quick GIF demonstrating how to assign test case type to a test case.
![Assigning Test Case Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TestCaseTypeAssign.gif)
---