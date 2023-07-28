---
title: "Manage test machines in test plans"
metadesc: "Easily manage test machines in Test Plans, which helps allocate tests to specific machines. Learn how to allot test machines for test plans in Testsigma."
noindex: false
order: 8.22
page_id: "Manage Test Machines in Test Plans"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Add a test machine to an existing test plan"
  url: "#add-a-test-machine-to-an-existing-test-plan"
- type: link
  name: "Delete test machine"
  url: "#delete-test-machine"
---

---

As discussed under the [create test plan section](https://testsigma.com/docs/test-management/test-plans/overview/#steps-to-create-a-test-plan), you must add at least one test machine to a test plan to create a test plan successfully. Test machines can be added for  *cross-browser testing* and *distributed testing*.

For *cross-browser testing*, test machines and test suites are selected separately. On execution, all the selected test suites are run on all selected test machines (in parallel or sequentially, depending on your selection).

For *distributed testing*, you can split test suite execution across multiple machines. To do this, Testsigma lets you select different test suites for each selected test machine. This helps reduce execution time too.

The following article discusses adding, editing, or deleting test machines from an existing test plan. *For more information on how to add a test machine while creating a test plan, refer to [test plan](https://testsigma.com/docs/test-management/test-plans/overview/)*.

---

## **Add a test machine to an existing test plan**

1. Navigate to **Select project**> **Test development**>**Test plan**.
2. Click on an existing test plan.![clicking Test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_openingexistingtestplan.png)

3. In the  **Test devices and suites** tab. Click **Add new** to add the test machine for test execution.![test device and suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_testsuitesmachinesaddnew.png)

4. Add or edit the necessary details on the **Select test machines/ suites** overlay.![select test device overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_selectedtestmachinesandsuites.png)
5. Click **Update**.



Alternatively, you can add a new test machine by **editing the test plan**. *For more information on editing the test plan, refer to [updating test plan](https://testsigma.com/docs/test-management/test-plans/overview/#edit-test-plan)*.

![Edit test plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_editanddetails.png).

1. Navigate to the **Edit test plan** page.
2. Under the **Test machines & suites selection** tab,select the test suite for which you want to add the test machine for test execution.
![test machine and test suites selection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/edit_machine_edit_test_plan.png)
3. Once you have selected the test suites that you want to add the test machine for, click on the  **Add machine** button.

4. Select either of the two options **Create new machine** or **Add to existing machine** from the drop-down list. 
![add machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/add_machine_edit_machine_details.png) 

   1. If you want to add the selected test suite to an existing machine then click on the option **Add to existing machine**. A layover **Add Test suites to machineor device** appears with a list of the existing machines as shown in the screenshot below:
![add test suites to machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/add_test_suites_machine_or_device.png)
    Select the machine that you want to execute the test suite on. To finalize the change, click on **Next** and **Update**.
   2.  If you want to create a new machine then click on the option **Create new machine**. A layover **Add machine** appears, as shown in the screenshot below:![Add machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/add_machine.png).Provide the necessary details and click **Create**.
5. To finalize the change, click on **Next**>**Update**.

---

## **Delete test machine**

In case you need to delete an already added test machine in a test plan, follow below steps:

You can delete the test machine through the **Edit test plan** > **Test machine & suites selection** tab.

1. On the **Test machine & suites selection** tab, hover over the test machine you want to delete and click **Delete** on the test machine.![delete test machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/ts_testsuitesdeleteeditpage.png)