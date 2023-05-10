---
title: "Test case types"
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
  name: "Assign a test case type to a test Case"
  url: "#assign-a-test-case-type-to-a-test-case"
---

---
Test case types are used to group test cases into categories with similar characteristics. Common types of test cases are *Functional*, *Non-functional*, *User experience*, and so on.
 They are best used when:

  1. You want to analyze your test results by test case types. 
  2. You need to filter test cases by test case types.
  
  &emsp;
While creating a test case on Testsigma, you can assign a type to it, to differentiate it from other test cases. 

**In this article, we will discuss:**

  1. How to access test case types.
  2. How to add new test case types.
  3. How to edit/delete test case types.
  4. How to assign a test case type to a test case.
  
  &emsp;

---
## **Prerequisites**

* Know how to create a test case. *For more information refer to, [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)*.


---
## **Add a new test case type**

1. **Select Project > Project Settings > Test Case Types**.
2. Click on **+Add Type**.![test case types add button](https://docs.testsigma.com/images/test-case-types/test-case-types-add-button.png)
3. A new blank row will appear where you can start typing to add the new test case type. Once you’re done, press **Enter**.

  ![ add new test case type](https://docs.testsigma.com/images/test-case-types/add-new-test-case-type.png)
Here’s how a new test case type can be added to a Testsigma project:
      
  ![view and add test case types](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctypes.gif)   

  &emsp;


---
## **Delete a test case type**

1. To delete a test case type, hover over the test case type you want to delete and click on **Delete**. 

  ![ test case type delete button](https://docs.testsigma.com/images/test-case-types/test-case-type-delete-button.png)
2. On the **Delete confirmation** window, unlink all test cases linked to the test case type.
![delete confirmation window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/create-data-profiles/delete_test_type_confirmation.png)

   1. To unlink test case, click on **View test case**, on the right side of each individual test case. This would take you to the **Edit test case** page.
   2. On the **Edit test** case page, change the test case type to any other available test case type.
   3. Click **Update**. 
   4. Repeat the steps 1 to 4, to unlink all the linked test cases.
   5. After unlinking all the required test cases, click **Done**.

3. Click the **Delete** button on the right of the test case type you want to delete.
4.  On the **Delete test case type** window, type <kbd>DELETE</kbd> to confirm deletion.![delete test case type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/test-case-types/delete_test_case_type_confirmation_new.png)
&emsp;

---
## **Edit a test case type**

  1. Hover over the test case type and click on the **Edit** icon.

  ![ test ase type edit button](https://docs.testsigma.com/images/test-case-types/test-case-type-edit-button.png)

  &emsp;
  
  2. Now, you will be able to edit the text of the test case type. Clicking **Enter** will save the changes. 
    
  ![ test case type edit text](https://docs.testsigma.com/images/test-case-types/test-case-type-edit-text.png)

&emsp;

**Best practice:**  Before you start creating test cases, create a few but meaningful Test Case Types so to organize and track your test cases easily.
  ![view and add test case types](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tctypes.gif)

&emsp;

---
## **Assign a test case type to a test case**

A **Test Case Type** can be assigned to a **Test Case** when a new test case is being created.

  ![assign test case type to a test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/test-case-types/assign-test-case-type-to-a-test-case2.gif)

  &emsp;

To create test cases of a specific type, choose the test case type from the **Advanced Options** dropdown. Alternatively, follow the steps below to assign a test case type to a test case:


1. Select the project you want to add the test case to.
2. Navigate to the **Test Development** menu.
3. Click on **Test Cases** menu. 
4. Create a new Test Case by clicking on the **Create** button.
5. Enter a meaningful name and a description of the test case.
6. Click on the **Show Advanced Options** text that appears on the **Create test case** page:

  ![create test case show advanced options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/test-case-types/create-test-case-show-advanced-options.png)

&emsp;

7. Multiple options will appear:

  ![create test case assign type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/test-case-types/create-test-case-assign-type.png)

8. To select the Test case type, go to the option ‘Type’ and select the type that you want to assign to your test case.

9. Now [create your test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) as usual.



