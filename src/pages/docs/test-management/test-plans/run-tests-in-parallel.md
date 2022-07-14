---
title: "Run Tests in Parallel"
metadesc: "How to run tests in parallel in a test plan in Testsigma."
noindex: false
order: 8.25
page_id: "Run Tests in Parallel"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Configure tests to run in parallel while creating a new Test Plan"
  url: "#configure-tests-to-run-in-parallel-while-creating-a-new-test-plan"
- type: link
  name: "Configure test cases inside a test suite to run in parallel, while creating a new Test Plan"
  url: "#configure-test-cases-inside-a-test-suite-to-run-in-parallel-while-creating-a-new-test-plan"
- type: link
  name: "Configure tests to run in parallel with editing an existing Test Plan"
  url: "#configure-tests-to-run-in-parallel-with-editing-an-existing-test-plan"
---

---

You can configure your Test Plans to run in parallel at any time. However, the number of tests you can execute at once in parallel depends on your account plan and the parallel tests you have left.

### Navigation: Select Project > Test Development > Test Plans

### You can
1. Configure tests to run in parallel while creating a new Test Plan. 
   
2. Configure tests to run in parallel with editing an existing Test Plan.

[[info | Note:]]
|You should already know how to [List/Create/Edit/Delete Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/).

&emsp;

---
## **Configure tests to run in parallel while creating a new Test Plan**

The Test Plan UI has been revamped, but you still have the option to switch to the classic UI. So, you can add/edit test suites via the Edit Test Plan page in 2 ways, lets discuss both below:

1. [Configure tests to run in parallel while creating a new Test Plan via the New UI](#configure-tests-to-run-in-parallel-while-creating-a-new-test-plan-via-the-new-ui)
2. [Configure tests to run in parallel while creating a new Test Plan via  the Classic UI](#configure-tests-to-run-in-parallel-while-creating-a-new-test-plan-via-the-classic-ui)

---

## **Configure tests to run in parallel while creating a new Test Plan via the New UI**

1. When you are creating a new test plan, this action can be taken on tab 2 - Test Machines and Suites Selection
2. On the “Test Machines and Suites Selection” tab, you can either: 

&emsp; a. **Run Test Suites in Parallel**: This option will be available for your test machine, if it has more than one test suite added. As highlighted in the screenshot below:

![New Test Plan UI - run test suites in parallel ](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/new-test-plan-ui-run-test-suites-in-parallel.png)

&emsp; b. **Run Test Cases inside the Test Suite in Parallel**: This option will be available for your test machine as shown in the screenshot below:

![New Test Plan UI - run test cases inside the test suites in parallel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/new-test-plan-ui-run-test-cases-inside-the-test-suites-in-parallel.png)

And if above option is enabled, there will be an option to enable/disable this for individual test suites too, as also shown in the screenshot below:

![New Test Plan UI - run test cases in parallel on test suite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/new-test-plan-ui-run-test-cases-in-parallel-on-test-suite.png)

---

## **Configure tests to run in parallel while creating a new Test Plan via the Classic UI**


1. On the Test Plan page, click on the +Test Plan button:

![Test Plans page in Testigma](https://docs.testsigma.com/images/run-tests-in-parallel/test-plans-page-testsigma.png)

2. Create Test Plan page will open as shown below:

![create Test Plan page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/create-test-plan-page-overview-testsigma.png)

3. On the Create Test Plan page, enter the required details and click on the Next Button.

4. The “Test Machines & Suites Selection” tab will open:

![Test Machines and Suites Selection section on the Create Test Plan Page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/overview/test-machines-and-suites-selection-overview-testsigma.png)

5. On the “Test Machines & Suites Selection” tab, make sure to add more than one test suite under the section “Selected Test Suites. 

6. Once, the test suites are added, the ‘Test Machines & Suites Selection' section should look like this:

![added test suites and test machines in a Test Plan in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/added-test-suites-test-machines-and-suites-selection-testsigma.png)

7. Click on the gear icon on the top right section of the selected Test Suites as shown in the screenshot below, and select the option ‘Run Tests in Parallel’

[[info | Note:]]
|This option only appears when there are 2 or more than 2 test suites

![Run Test Suites in Parallel option for Selected Test Suites on Test Plan Page in Testsigma](https://docs.testsigma.com/images/run-tests-in-parallel/run-test-suites-in-parallel-selected-test-suites-test-plan-testsigma.png)

1. Proceed with filling up other settings as you would for a normal test plan. Once done, make sure to click on ‘Update’ on the ‘Test Plan Settings’ tab.
    
2.  Now whenever you execute this test plan, all the selected test suites for the test plan will run in parallel in different instances of the selected test machines.  

&emsp;

---
##**Configure test cases inside a test suite to run in parallel, while creating a new Test Plan**

[[info | Note:]]
|By default, this feature is disabled for all accounts. If you need this feature enabled, please contact support.

You can also configure the test cases within a test suite to run in parallel. 
 
**Steps to configure**:
1. Start creating a test plan, as also done in the section above, and go to the second tab “Test Machines & Suites Selection”
2. On the second tab, go to step 2 and add test suites for execution.
3. Click on the settings on the top right section of the step 2, as also shown in the screenshot below:

![Setting to run test cases in a test suite in parallel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/run-test-cases-in-test-suite-in-parallel-setting.png)

4. Now select the option “run test cases in test suite in parallel” as shown below:

![The option to run test cases in a test suite in parallel checked](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/run-test-cases-in-test-suite-parallel-option-checked.png)

5. Now, when you check the settings corresponding to the added test suites - you will see the options “Run Test Cases Sequentially” and “Run Test Cases Parallely”. If you want to run the test cases within a test suite parallely, you choose the option “Run Test Cases Parallely” corresponding to that test suite, otherwise you can choose the option “Run Test Cases Sequentially”. Below screenshot shows the options corresponding to one of the added test cases:

![The option to run test cases in a test suite in parallel corresponding to a test suite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/run-test-cases-in-test-suite-in-parallel-options-for-a-test-suite.png)




&emsp;

---
##**Configure tests to run in parallel with editing an existing Test Plan**
On the Test Plans page, click on a Test Plan name to open the details page for that Test Plan, the Test Plan Details page will look something like this:

![Test Plan Details Page in Testsigma](https://docs.testsigma.com/images/run-tests-in-parallel/test-plan-details-page-testsigma.png)

1. Click on the Edit button on the top right corner as shown above: 
   
2. Go to the tab ‘Test Machines & Suites Selection’, follow the same steps as mentioned under **Configure tests to run in parallel while creating a new Test Plan**
 
 

 






