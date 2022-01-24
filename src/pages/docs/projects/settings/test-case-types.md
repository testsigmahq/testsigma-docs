---
title: "Test Case Types in Testsigma"
metadesc: "What are Test Case Types in Testsigma and how to use them while creating and maintaining Test Cases."
order: 2.40
page_id: "Test Case Types in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Add a new Test Case Type"
  url: "#add-a-new-test-case-type"
- type: link
  name: "Delete a Test Case Type"
  url: "#delete-a-test-case-type"
- type: link
  name: "Edit a Test Case Type"
  url: "#edit-a-test-case-type"
- type: link
  name: "Assign a Test Case Type to a Test Case"
  url: "#assign-a-test-case-type-to-a-test-case"
---


Test Case Types are used to group test cases into a certain type. For example : Functional, Non-functional, User experience, etc. They are best used when:
  1. You want to analyze your test results by test case types. 
  2. You need to filter test cases by test case types.
  
  &emsp;


Testsigma has an interface to create test cases with a test type attribute. While creating a test case, you can assign a type to it, to differentiate it from other test cases. 

**In this document, we will discuss:**
  1. How to access test case types.
  2. How to add new test case types.
  3. How to edit/delete test case types.
  4. How to assign a test case type to a test case.
  
  &emsp;

 ## **Prerequisites**

This document assumes that you know how to create a test case. If not, refer to [Creating a Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

&emsp;

  **Navigation:**

Select Project > Project Settings > Test Case Types

  1. Select the Project
  2. Go to Project Settings and select Test case Types, as highlighted in the screenshot below:
     
  ![test case types menu](https://docs.testsigma.com/images/test-case-types/test-case-types-menu.png)

&emsp;

---
##**Add a new Test Case Type**

Here’s how a new test case type can be added to a Testsigma project:
      
  ![view and add test case types](https://docs.testsigma.com/images/test-case-types/view-and-add-test-case-types.gif)   

  &emsp;

  1. Click on the button ‘+Add Type’ on the top right corner, also highlighted in the screenshot below:

  ![test case types add button](https://docs.testsigma.com/images/test-case-types/test-case-types-add-button.png)
  
  &emsp;

  2. A new blank row will appear where you can start typing to add the new test case type. Once you’re done, press enter.

  ![ add new test case type](https://docs.testsigma.com/images/test-case-types/add-new-test-case-type.png)

&emsp;

---
##**Delete a Test Case Type**

Hover over the test case type you want to delete and click on the Delete icon that appears. 

  ![ test case type delete button](https://docs.testsigma.com/images/test-case-types/test-case-type-delete-button.png)

&emsp;

---
##**Edit a Test Case Type**

  1. Hover over the test case type and click on the edit icon

  ![ test ase type edit button](https://docs.testsigma.com/images/test-case-types/test-case-type-edit-button.png)

  &emsp;
  
  2. Now, you will be able to edit the text of the test case type. Clicking ‘enter’ will save the changes. 
    
  ![ test case type edit text](https://docs.testsigma.com/images/test-case-types/test-case-type-edit-text.png)

&emsp;

**Best practice:**  Before you start creating test cases, create a few but meaningful Test Case Types so to organize and track your test cases easily.
  ![view and add test case types](https://docs.testsigma.com/images/test-case-types/view-and-add-test-case-types.gif)

&emsp;

---
##**Assign a Test Case Type to a Test Case**

A ‘Test Case Type’ can be assigned to a ‘Test Case’ when a new test case is being created.

  ![assign test case type to a test case](https://docs.testsigma.com/images/test-case-types/assign-test-case-type-to-a-test-case1.gif)

  &emsp;

To create test cases of a specific type, choose the test case type from the “Advanced Options” dropdown. Alternatively, follow the steps below to assign a test case type to a test case:


1. Select the project you want to add the test case to
2. Navigate to the ‘Test Development’ menu
3. Click on ‘Test Cases’ menu 
4. Create a new Test Case by clicking on the ‘Create’ button
5. Enter a meaningful name and a description of the test case.
6. Click on the ‘Show Advanced Options’ text that appears on the ‘Create Test Case’ page:

  ![create test case show advanced options](https://docs.testsigma.com/images/test-case-types/create-test-case-show-advanced-options.png)

&emsp;

7. Multiple options will appear:

  ![create test case assign type](https://docs.testsigma.com/images/test-case-types/create-test-case-assign-type.png)

8. To select the Test case type, go to the option ‘Type’ and select the type that you want to assign to your test case.

9. Now [create your test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) as usual.