---
title: "Manage Test Suites in Test Plans"
metadesc: "How to add, edit and delete test suites in a test plan in Testsigma. "
noindex: false
order: 8.23
page_id: "Manage Test Suites in Test Plans"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Approach 1: Add/Edit Test Suite via the Edit Test Plan Page"
  url: "#approach-1-addedit-test-suite-via-the-edit-test-plan-page"
- type: link
  name: "Approach 2: Add/Edit Test Suite via the Test Plan Details Specific Tab"
  url: "#approach-2-addedit-test-suite-via-the-test-plan-details-specific-tab"
---

---

As discussed under the ‘Create Test Plan’ section, at least one ‘test suite' needs to be added to a test plan to successfully create one Test plan. 

### Navigation: Select Project > Test Development > Test Plan > Select/Create Test Plan > Selected Test Suites

We discussed how to add a Test Suite for the ‘Create Test Plan’ option under Test Plans > [List, Create, Edit, Delete](https://testsigma.com/docs/test-management/test-plans/overview/).

Here, we will discuss how to add/edit/delete test suites when a Test Plan is already created.

There are two ways to add/edit a test suite in a test plan:

1. Via the Edit Test Plan page
   
2. Via the Test Plan Details Specific Tab

&emsp;

---
##**Approach 1: Add/Edit Test Suite via the Edit Test Plan Page**

The Test Plan UI has been revamped, but you still have the option to switch to the classic UI. So, you can add/edit test suites via the Edit Test Plan page in 2 ways, lets discuss both below:

1. [Edit Test Suites via the Edit Test Plan Page via the New UI](#edit-test-suites-via-the-edit-test-plan-page-via-the-new-ui)
2. [Edit Test Suites via the Edit Test Plan Page via  the Classic UI](#edit-test-suites-via-the-edit-test-plan-page-via-the-classic-ui)

---

## **Edit Test Suites via the Edit Test Plan Page via the New UI**
1. Go to the Test Plans page here: Select Project > Test Development > Test Plan
2. Click on an existing test plan.
3. Click on ‘Edit Button’ on the Top right corner on the test plan page. 
4. On the ‘Edit Test Plan’ page that opens, go to the tab - ‘Test Machines & Suites Selection’
5. On the ‘Test Machines & Suites Selection’ Tab - click on ‘+ Add Test Suites’ area under the section Test Suites’. The area is highlighted in the screenshot below:

![New Test Plan UI - add test suites area highlighted](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-suites/new-testplanUI-add-test-suites-area-highlighted.png)

6. The “Selected Test Suites” layover will appear. Under the “Filters” section, you can filter the test suites by name. If you want to execute test suites over multiple platforms, then you can enable end-to-end testing. You can add more test cases by clicking on “+” and remove test cases by clicking on “-”. The “Selected Test Suites” layover will appear something like the screenshot below:

![New Test Plan UI - selected test suites layover](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-suites/new-test-plan-ui-selected-test-suites-layover.png)

7. Once “Selected Test Suites” section contains the needed test suites, click on the button “Add”

---

## **Edit Test Suites via the Edit Test Plan Page via the Classic UI**


1. Go to the Test Plans page here: Select Project > Test Development > Test Plan
    
2. Click on an existing test plan, the page should look something like this:

![Test Plan details page in Testsigma](https://docs.testsigma.com/images/manage-test-suites/test-plan-details-page-testsigmaunnamed.png)

3. Click on ‘Edit Button’ on the Top right corner, which looks like this:

![Edit Button on Test Plan Details page on Testsigma](https://docs.testsigma.com/images/manage-test-suites/edit-button-test-plan-details-testsigma.png)

4. On the ‘Edit Test Plan’ page that opens, go to the tab - ‘Test Machines & Suites Selection’

5. On the ‘Test Machines & Suites Selection’ Tab - click on the ‘+ Add Test Suites’ button under the section ‘Selected Test Suites’. The button is highlighted in the screenshot below.

![Add Test Suites Button on Test Machines & Suites Selection section on Edit Test Plan page in Testsigma](https://docs.testsigma.com/images/manage-test-suites/add-test-suites-button-test-machines-and-suites-selection-edit-test-plan-testsigma.png)

6. On the “Selected Test Suites” layout, you can add more test cases by clicking on “+” and remove test cases by clicking on “-”. Note that a test plan will need at least one test suite in it. 

![Add and remove test suites in Selected Test Suites Layout in Testsigma](https://docs.testsigma.com/images/manage-test-suites/selected-test-suites-layout-add-remove-test-suites-testsigma.png)

[[info | Note:]]
|The order of the selected test suites can also be edited by drag and drop.


Once you have the final list of needed Test Suites under the “Selected Test Suites” column, click on “Add”. The required changes will appear on the ‘Test Machines & Test Suites’ Tab.
If you are satisfied with the changes, click on the “Next” button and then on the “Update” button to finalize the changes.

&emsp;

## **Delete Test Suite via the Edit Test Plan Page**

The Test Plan UI has been revamped, but you still have the option to switch to the classic UI. So, you can delete a test suite in 2 ways, lets discuss both below:

1. [Delete Test Suite via the Edit Test Plan Page via the New UI](#delete-test-suite-via-the-edit-test-plan-page-via-the-new-ui)
2. [Delete Test Suite via the Edit Test Plan Page via the Classic UI](#delete-test-suite-via-the-edit-test-plan-page-via-the-classic-ui)

---

## **Delete Test Suite via the Edit Test Plan Page via the New UI**

1. Go to the Edit Test Plan page, ‘Test Machines & Suites’ section.
2. Under the ‘Test Machines & Suites Selection’ tab, hover on the test suite you want to delete. On hover, the ‘delete’ button appears. Below is a screenshot showing how the delete button looks for a test suite: 
![New Test Plan UI - delete test suite button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-suites/new-test-plan-ui-delete-test-suite-button.png)
3. Click on the ‘delete’ button corresponding to the test suite you want to delete, this will remove the entry from the ‘Test Suites’ section.
4. Click on the “Next” button and then on the “Update” button to finalize the changes.



---

## **Delete Test Suite via the Edit Test Plan Page via the Classic UI**

1. Go to the Edit Test Plan page, ‘Test Machines & Suites’ section.
   
2. On the ‘Test Machines & Suites Selection’ tab, hover on the test suite you want to delete. In the screenshot below, for instance, the hover is on ‘Home Page tests’. On hover, the ‘delete’ button appears:

![delete selected test suite on Edit Test Plan page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-suites/delete-selected-test-suite-edit-test-plan-testsigma.png)

3. Click on the ‘delete’ button corresponding to the test suite you want to delete, this will remove the entry from the ‘Selected Test Suites’.
   
4. Click on the “Next” button and then on the “Update” button to finalize the changes.

&emsp;

---
##**Approach 2: Add/Edit Test Suite via the Test Plan Details Specific Tab**

1. Go to the Test Plan page here: Select Project > Test Development > Test Plan
   
2. Click on the Test Plan you want to edit.
   
3. The Test Plan details page should look something like this:

![a test plan details page in Testsigma](https://docs.testsigma.com/images/manage-test-suites/test-plan-details-page-testsigma.png)

4. Go to the tab ‘Test Suites’ on the Test Plan details page as shown in the screenshot below:

![Test Suites Tab on Test Plan Details page in Testsigma](https://docs.testsigma.com/images/manage-test-suites/test-suites-tab-test-plan-details-page-testsigma.png)

5. To add/edit/delete test suites click on the ‘Selected Test Suites’ button here, as shown in the screenshot below:

![Selected Test Suites Button on Test Plan Details page in Testsigma](https://docs.testsigma.com/images/manage-test-suites/selected-test-suites-button-test-plan-details-page-testsigma.png)

6. On click on the ‘Selected Tests Suites’ button, the ‘Select Test Suites’ layover will appear:

![Selected Test Suites layover in Testsigma](https://docs.testsigma.com/images/manage-test-suites/selected-test-suites-layover-testsigma.png)

Here, you can add/remove test suites according to your need. And then click on the button ‘Add’ at the bottom right.

Complete the remaining steps as explained in the previous section.





