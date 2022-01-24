---
title: "Run Tests in Parallel"
metadesc: "How to run tests in parallel in a test plan in Testsigma."
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
##**Configure tests to run in parallel while creating a new Test Plan**
1. On the Test Plan page, click on the +Test Plan button:

![Test Plans page in Testigma](https://docs.testsigma.com/images/run-tests-in-parallel/test-plans-page-testsigma.png)

2. Create Test Plan page will open as shown below:

![create test plan page in Testsigma](https://docs.testsigma.com/images/run-tests-in-parallel/create-test-plan-page-testsigma.png)

3. On the Create Test Plan page, enter the required details and click on the Next Button.

4. The “Test Machines & Suites Selection” tab will open:

![Test Machines & Suites Selection section on Create Test Plan page in Testsigma](https://docs.testsigma.com/images/run-tests-in-parallel/test-machines-and-suites-selection-create-test-plan-testsigma.png)

5. On the “Test Machines & Suites Selection” tab, make sure to add more than one test suite under the section “Selected Test Suites. 

6. Once, the test suites are added, the ‘Test Machines & Suites Selection' section should look like this:

![added test suites and test machines in a Test Plan in Testsigma](https://docs.testsigma.com/images/run-tests-in-parallel/added-test-suites-test-machines-and-suites-selection-testsigma.png)

7. Click on the gear icon on the top right section of the selected Test Suites as shown in the screenshot below, and select the option ‘Run Tests in Parallel’

[[info | Note:]]
|This option only appears when there are 2 or more than 2 test suites

![Run Test Suites in Parallel option for Selected Test Suites on Test Plan Page in Testsigma](https://docs.testsigma.com/images/run-tests-in-parallel/run-test-suites-in-parallel-selected-test-suites-test-plan-testsigma.png)

1. Proceed with filling up other settings as you would for a normal test plan. Once done, make sure to click on ‘Update’ on the ‘Test Plan Settings’ tab.
    
2.  Now whenever you execute this test plan, all the selected test suites for the test plan will run in parallel in different instances of the selected test machines.  

&emsp;
---
##**Configure tests to run in parallel with editing an existing Test Plan**
On the Test Plans page, click on a Test Plan name to open the details page for that Test Plan, the Test Plan Details page will look something like this:

![Test Plan Details Page in Testsigma](https://docs.testsigma.com/images/run-tests-in-parallel/test-plan-details-page-testsigma.png)

1. Click on the Edit button on the top right corner as shown above: 
   
2. Go to the tab ‘Test Machines & Suites Selection’, follow the same steps as mentioned under **Configure tests to run in parallel while creating a new Test Plan**
 
 

 






