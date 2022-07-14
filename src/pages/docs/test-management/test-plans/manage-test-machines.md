---
title: "Manage Test Machines in Test Plans"
metadesc: "How to add, edit and delete test machines in a test plan in Testsigma."
noindex: false
order: 8.22
page_id: "Manage Test Machines in Test Plans"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Approach 1: Add Test Machine via the Edit Test Plan page"
  url: "#approach-1-add-test-machine-via-the-edit-test-plan-page"
- type: link
  name: "Approach 2: add/edit/delete test machines via the Test Plan details specific tab"
  url: "#approach-2-addeditdelete-test-machines-via-the-test-plan-details-specific-tab"
---

---

As discussed under the ‘Create Test Plan’ section, at least one ‘test machine’ needs to be added to a test plan to successfully create one Test plan. Test Machines can be added for the testing type ‘Cross-Browser Testing’ or for testing type ‘Distributed Testing’.

For Cross Browser Testing - test machines and test suites are selected separately. On execution, all the selected test suites are run on all selected test machines ( in parallel or sequentially - depending on your selection). 


For Distributed Testing - test suite execution can be split across multiple machines. To do this, Testsigma lets you select different test suites for each selected test machine. This, in effect, helps reduce execution time too.

  
We discussed how to add Test Machines for the ‘Create Test Plan’ option under [Test Plans > List, Create, Edit, Delete](https://testsigma.com/docs/test-management/test-plans/overview/).

Here, we will discuss how to add/edit/delete test machines when a Test Plan is already created. There are two ways to add/edit a test suite in a test plan:

1. Via the Edit Test Plan page
   
2. Via the Test Plan Details page

&emsp;

---
##**Approach 1: Add Test Machine via the Edit Test Plan page**

The Test Plan UI has been revamped, but you still have the option to switch to the classic UI. So, you can add test machines via the Edit Test Plan page in 2 ways, lets discuss both below:

1. [Add Test Machine via the Edit Test Plan Page via the New UI](#add-test-machine-via-the-edit-test-plan-page-via-the-new-ui)
2. [Add Test Machine via the Edit Test Plan Page via  the Classic UI](#add-test-machine-via-the-edit-test-plan-page-via-the-classic-ui)

---

##**Add Test Machine via the Edit Test Plan Page via the New UI**

1. Go to the Test Plans page here: Select Project > Test Development > Test Plan
2. Click on an existing test plan and click on ‘Edit Button’ on the top right corner. 
3. On the ‘Edit Test Plan’ page that opens, go to the tab - ‘Test Machines & Suites Selection’. For this to work with the New UI, the test plan should have been created using the New UI.
4. On the ‘Test Machines & Suites Selection’ tab, select the test suite for which you want to add the test machine for test execution.
5. Once you have selected the test suites that you want to add the test machine for, click on the button “Add machine”. You will see 2 options: “Create new machine” or “Add to existing machine”.

![New Test Plan UI - add machine button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-machines/new-testplanUI-add-machine-button.png)

a. If you want to add the selected test suite to an existing machine then click on the option “add to existing machine”. A layover “Add Test Suites to Machine” appears with a list of the existing machines as also shown in the screenshot below:

![New Test Plan UI - add test suites to machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-machines/new-testplanUI-layover-add-test-suites-to-machines.png)

Select the machine that you want to execute the test suite on. To finalize the change, click on Next and Update.

b. If you want to create a new machine then click on the option “Create new machine”. A layover “Add Machine” appears, as shown in the screenshot below:

![New Test Plan UI - layover to add machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-machines/new-testplanUI-layover-add-machine.png)

You will see below options:

**Name**: Add the name you want to give to this machine<br>
**Test Lab Type**: Select the lab-type you want to use this device from. To know more about test lab types, read [here](https://testsigma.com/docs/test-management/test-plans/supported-test-lab-types/).<br>
**Prerequisite**: The machine selected here will become a prerequisite for execution on the machine being created<br>

In addition:

&emsp;&emsp;a. Select OS<br>
&emsp;&emsp;b. OS Version<br>
&emsp;&emsp;c. Select Browser<br>
&emsp;&emsp;d. Browser Version<br>
&emsp;&emsp;e. Resolution<br>
&emsp;&emsp;f. Enable/Disable for Headless Test<br>
&emsp;&emsp;g. Desired capabilities (Optional)<br>

Once you have selected all, click on create. To finalize the change, click on Next and Update.



---

##**Add Test Machine via the Edit Test Plan Page via the Classic UI**

1. Go to the Test Plans page here: Select Project > Test Development > Test Plan 
   
2. Click on an existing test plan and click on ‘Edit Button’ on the top right corner, the page should look something like below:

![edit button on Test Plan page in Testsigma](https://docs.testsigma.com/images/manage-test-machines/edit-button-test-plan-page-testsigma.png)

3. On the ‘Edit Test Plan’ page that opens, go to the tab - ‘Test Machines & Suites Selection’

4. On the ‘Test Machines & Suites Selection’ tab, click on the ‘Add’ button (highlighted below) to add a machine:

![Test Machines & Suites Selection section on Edit Test Plan page in Testsigma](https://docs.testsigma.com/images/manage-test-machines/test-machines-and-suites-selection-edit-test-plan-page-testsigma.png)

5. On the ‘Add Configuration’ section that appears, select the configurations for the test machines you want to add. You will see these options:
   
&emsp;&emsp;a. Select OS

&emsp;&emsp;b. OS Version

&emsp;&emsp;c. Select Browser

&emsp;&emsp;d. Browser Version

&emsp;&emsp;e. Resolution

&emsp;&emsp;f. Enable/Disable for Headless Test

&emsp;&emsp;g. Desired capabilities (Optional)

![add configuration in Edit Test Plan in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-machines/edit-test-plan-add-configuration-testsigma.png)

6. Once you have added the configurations for the needed test machine, you need to click on the ‘Add’ button in the section ‘Add Configuration’. The added Test Machine will be displayed as shown in the screenshot below.

![add machines in Edit Test Plan page in Testsigma](https://docs.testsigma.com/images/manage-test-machines/add-machines-edit-test-plan-page-testsigma.png)

In a similar manner, you can add more test machines.

7. Once you have added the needed Test Machines, click on the ‘Next’ button and then click on the ‘Update’ button. Your changes will be saved for the ‘Test Plan’

&emsp;
##**Edit Test Machine via the Edit Test Plan page**


The Test Plan UI has been revamped, but you still have the option to switch to the classic UI. So, you can edit a test machines in 2 ways, lets discuss both below:

1. [Edit Test Machine via the Edit Test Plan Page via the New UI](#edit-test-machine-via-the-edit-test-plan-page-via-the-new-ui)
2. [Edit Test Machine via the Edit Test Plan Page via the Classic UI](#edit-test-machine-via-the-edit-test-plan-page-via-the-classic-ui)

---

## **Edit Test Machine via the Edit Test Plan Page via the New UI**

Follow below steps:
1. Go to the Test Plans page, Test Machines & Suites selection as explained in the previous section in this doc.
2. On the ‘Test Machines & Suites Selection’ tab, click on the Test Machine that you want to edit.
3. The clicked test machine will be highlighted, now click on the “edit button” to edit the test machine. The “edit button” is also highlighted in the screenshot below: 

![New Test Plan UI - edit button edit test machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-machines/new-testplanUI-edit-button-edit-test-machine.png)

4. On the layover that appears, as also shown in the screenshot below, you can edit the property that needs to be edited and click on the “update” button on the bottom right to finalize the changes.

![New Test Plan UI - edit test machine layover](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-machines/new-testplanUI-edit-test-machine-layover.png)

---

## **Edit Test Machine via the Edit Test Plan Page via the Classic UI**

In case you need to edit an already added Test Machine in a Test Plan, you will have to follow below steps:

1. Go to the Test Plans page, Test Machines & Suites selection as explained in the previous section in this doc.
   
2. On the ‘Test Machines & Suites Selection’ tab, click on the Test Machine that you want to edit.

![added test machines in edit test plan page in Testsigma](https://docs.testsigma.com/images/manage-test-machines/added-test-machines-edit-test-plan-testsigma.png)

3. The ‘Edit Configuration’ section will open up corresponding to the test machine that was clicked in the previous step. You can edit the value you need to edit here. 

![Edit Configuration in Edit Test Plan page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-machines/edit-configuration-edit-test-plan-testsigma.png)

4. Once you are done with the required changes, click on the ‘Update’ button on the bottom right corner and your changes will be saved.


## **Delete Test Machine via the Edit Test Plan Page**


The Test Plan UI has been revamped, but you still have the option to switch to the classic UI. So, you can delete a test machines in 2 ways, lets discuss both below:

1. [Delete Test Machine via the Edit Test Plan Page via the New UI](#delete-test-machine-via-the-edit-test-plan-page-via-the-new-ui)
2. [Delete Test Machine via the Edit Test Plan Page via the Classic UI](#delete-test-machine-via-the-edit-test-plan-page-via-the-classic-ui)

---

## **Delete Test Machine via the Edit Test Plan Page via the New UI**

In case you need to delete an already added Test Machine in a Test Plan, you will have to follow below steps:
1. Go to the Test Plans page, Test Machines & Suites selection as explained in the previous section in this doc.
2. On the ‘Test Machines & Suites Selection’ Tab, hover over the Test Machine you want to delete and click on the delete icon on the test machine. For your reference, the icon is highlighted below:

![New Test Plan UI - delete test machine button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-machines/new-testplanUI-delete-test-machine-button.png)

To finalize the change, click on Next and Update.


---

## **Delete Test Machine via the Edit Test Plan Page via the Classic UI**

In case you need to delete an already added Test Machine in a Test Plan, you will have to follow below steps:

1. Go to the Test Plans page, Test Machines & Suites selection as explained in the previous section in this doc.
   
2. On the ‘Test Machines & Suites Selection’ Tab, go to the Test Machine you want to delete and click on the ‘x’ icon on the top right corner for that machine. 
   
3. Once deleted, click on the ‘Next’ button on the bottom right corner and then click on ‘Update’. Do note that a Test Plan will always need at least one Test Machine always. 

![delete test machines on Edit Test Plan page in Testsigma](https://docs.testsigma.com/images/manage-test-machines/delete-test-machines-edit-test-plan-testsigma.png)

---
## **Approach 2: add/edit/delete test machines via the Test Plan details specific tab**
1. Go to the Test Plan details page as explained in the previous sections
   
2. Go to the tab ‘Test Machines’ on the Test Plan details page as shown in the screenshot below:

![Test Suites Tab on Test Plan Details page in Testsigma](https://docs.testsigma.com/images/manage-test-machines/test-suites-tab-test-plan-details-page-testsigma.png)

[[info |Note:]]
|You can also enable/disable the added test machines by toggling a specific test machine on the ‘Test Machines’ tab. If you disable Testsigma will not run tests on these machines. 

3. Click on the ‘Select Test Machines’ button as also shown in the screenshot below:

![Select Test Machines button on Test Plan Details page in Testsigma](https://docs.testsigma.com/images/manage-test-machines/select-test-machines-button-test-plan-details-page-testsigma.png)

4. ‘Select Test Machines’ layout appears as also shown in the screenshot below:

![Select Test Machines layout in Testsigma](https://docs.testsigma.com/images/manage-test-machines/select-test-machines-layout-testsigma.png)

5. Here select the configuration of the test machine that you want to add and then click on the ‘Create’ button at the bottom right.

The newly added machine will now appear under the ‘Test Machines’ tab. 






