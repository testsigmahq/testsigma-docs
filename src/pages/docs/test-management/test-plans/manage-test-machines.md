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
### Edit Test Machine
In case you need to edit an already added Test Machine in a Test Plan, you will have to follow below steps:

1. Go to the Test Plans page, Test Machines & Suites selection as explained in the previous section in this doc.
   
2. On the ‘Test Machines & Suites Selection’ tab, click on the Test Machine that you want to edit.

![added test machines in edit test plan page in Testsigma](https://docs.testsigma.com/images/manage-test-machines/added-test-machines-edit-test-plan-testsigma.png)

3. The ‘Edit Configuration’ section will open up corresponding to the test machine that was clicked in the previous step. You can edit the value you need to edit here. 

![Edit Configuration in Edit Test Plan page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/manage-test-machines/edit-configuration-edit-test-plan-testsigma.png)

4. Once you are done with the required changes, click on the ‘Update’ button on the bottom right corner and your changes will be saved.


### Delete Test Machine
In case you need to delete an already added Test Machine in a Test Plan, you will have to follow below steps:

1. Go to the Test Plans page, Test Machines & Suites selection as explained in the previous section in this doc.
   
2. On the ‘Test Machines & Suites Selection’ Tab, go to the Test Machine you want to delete and click on the ‘x’ icon on the top right corner for that machine. 
   
3. Once deleted, click on the ‘Next’ button on the bottom right corner and then click on ‘Update’. Do note that a Test Plan will always need at least one Test Machine always. 

![delete test machines on Edit Test Plan page in Testsigma](https://docs.testsigma.com/images/manage-test-machines/delete-test-machines-edit-test-plan-testsigma.png)

---
##**Approach 2: add/edit/delete test machines via the Test Plan details specific tab**
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






