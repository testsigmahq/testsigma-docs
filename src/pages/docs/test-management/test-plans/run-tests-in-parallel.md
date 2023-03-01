---
title: "Run tests in parallel"
metadesc: "How to run tests in parallel in a test plan in Testsigma."
noindex: false
order: 8.25
page_id: "Run Tests in Parallel"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Configure tests to run in parallel while creating a new test plan"
  url: "#configure-tests-to-run-in-parallel-while-creating-a-new-test-plan"
- type: link
  name: "Configure test cases inside a test suite to run in parallel, while creating a new Test Plan"
  url: "#configure-test-cases-inside-a-test-suite-to-run-in-parallel-while-creating-a-new-test-plan"
- type: link
  name: "Configure tests to run in parallel with editing an existing Test Plan"
  url: "#configure-tests-to-run-in-parallel-with-editing-an-existing-test-plan"
---

---

You can configure your test plans to run in parallel at any time. However, the number of tests you can execute at once in parallel depends on your account plan and the parallel tests you have left.

### You can

1. Configure tests to run in parallel while creating a new Test Plan.

2. Configure tests to run in parallel with editing an existing Test Plan.

[[info | Note:]]
|You should already know how to [List,create,edit or delete test plans](https://testsigma.com/docs/test-management/test-plans/overview/).

&emsp;

---

## **Configure tests to run in parallel while creating a new test plan**

1. When you are creating a new test plan, this action can be taken on tab 2 - **Test Machines and Suites Selection**
2. On the **Test Machines and Suites Selection** tab, you can either:
   - **Run Test Suites in Parallel**: This option will be available for your test machine, if it has more than one test suite added. As highlighted in the screenshot below, OR![New Test Plan UI - run test suites in parallel ](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/new-test-plan-ui-run-test-suites-in-parallel.png)
   - **Run Test Cases inside the Test Suite in Parallel**: This option will be available for your test machine as shown in the screenshot below:![New Test Plan UI - run test cases inside the test suites in parallel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/new-test-plan-ui-run-test-cases-inside-the-test-suites-in-parallel.png)
   <br>And if above option is enabled, there will be an option to **Enable/Disable** this for individual test suites too, as also shown in the screenshot below:![New Test Plan UI - run test cases in parallel on test suite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/new-test-plan-ui-run-test-cases-in-parallel-on-test-suite.png)

In case of an *Android, iOS or a mobile web application* - when you add a new machine for a test suite, by default - the test cases will run in parallel. The number of test cases that run in parallel will depend on the license you have. You can change this configuration from the **Add Machine** layover by going to the **Settings** icon and unchecking the **Run Test cases inside the Test Suite in Parallel** checkbox. The checkbox is also highlighted in the screenshot below.![The checkbox on the Add Machine Layover to run test cases inside a test case in parallel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/add-test-machine-checkbox-run-test-cases-inside-the-test-suite-in-parallel.png)

Again, specifically in the case of an Android, iOS or a mobile web application, if you see that a machine does not get triggered (could be because of unavailability) for execution then you can add backup devices. These backup devices would be launched for test execution if the original device is not triggered successfully. The steps to add(link)/delete(link)/edit(link) a backup device are as below:

**Add a backup device**

1. Select a **Test suite**.
2. Add a **Test Machine** corresponding to the selected **Test Suite**
3. On the **Add Machine/Device** layover, click on the **Add backup devices** button, the button is highlighted in the screenshot below:![add backup device button on the Add Machine Layover](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/add-test-machine-add-backup-device-button.png)

4. Select the **OS Version**, **Device Name** for the added backup device.
5. Fill in any other needed details and click on **Create**.

[[info | Note:]]
|If your test case was configured for visual testing and the test was executed on a backup device, then the visual test execution will report the differences accordingly.

Alternatively, below is a GIF demonstrating the workflow to add a backup device for test execution for an Android, iOS or a mobile web application:

![gif demonstrating how to add a backup device to a test machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/add-test-machine-add-back-up-device-gif.gif)

**Edit a backup device**

1. Go to the Test Machine, corresponding to which you want to edit the backup device.
2. Edit the needed configuration for the backup device - OS Version/Device Name/Browser
3. Click on Update

**Delete a backup device**

1. Go to the Test Machine, corresponding to which you want to delete the backup device. You can do this by click on the edit button corresponding to the Test Machine.
2. On the "Add Machine/Device" layover that appears, click on the Delete button corresponding to the device that you want to delete. The delete button corresponding to a backup device is highlighted for your reference in the screenshot below:

![Button to delete an added backup device for a test machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/add-test-machine-delete-backup-device-button.png)

---
## **Configure test cases inside a test suite to run in parallel, while creating a new test plan**

[[info | Note:]]
|By default, this feature is disabled for all accounts. If you need this feature enabled, please contact support.

You can also configure the test cases within a test suite to run in parallel.

**Steps to configure**:

1. Start creating a test plan, as also done in the section above, and go to the second tab **Test Machines & Suites Selection**
2. On the second tab, go to step 2 and add test suites for execution.
3. Click on the **Settings** icon on the top right section of the test machine, and select the option **Run test cases in test suite in parallel**.

![Setting to run test cases in a test suite in parallel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/run_testsuites_in_parallel.png)


5. Now, when you hover over the **Settings** icon corresponding to the added test suites - you will see the option **Run in Parallel/Sequential**. ![run test cases sequentially/parallely](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/run_in_parallel_or_sequential.png)If you want to run the test cases within a test suite parallely, enable the toggle button **Run Test Cases in Parallel** corresponding to that test suite, as shown in the screenshot below:

![The option to run test cases in a test suite in parallel corresponding to a test suite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-management/test-plans/run-tests-in-parallel/run_test_cases_in_parallel.png)

&emsp;

---
## **Configure tests to run in parallel with editing an existing test plan**
On the Test Plans page, click on a Test Plan name to open the details page for that Test Plan, the Test Plan Details page will look something like this:

![Test Plan Details Page in Testsigma](https://docs.testsigma.com/images/run-tests-in-parallel/test-plan-details-page-testsigma.png)

1. Click on the Edit button on the top right corner as shown above:

2. Go to the tab **Test Machines & Suites Selection**, follow the same steps as mentioned under **Configure tests to run in parallel while creating a new Test Plan**

[[info | NOTE:]]
|You can configure your test plans per your subscription and the parallel/queued executions you have left.<br>
|<br>
|For example, if you have a license for 1 parallel run and 1 queued run, you can run one test plan on one machine in parallel while queuing another test on a different machine for execution.<br>
|<br>
|
|When you run a third test machine, it will not execute and will be thrown out of the execution queue since your subscription plan only allows one parallel run and one queued run at a time.<br>
|<br>
|
|To run more test machines simultaneously, you need to upgrade to a higher subscription plan with more parallel and queued runs allowed.<br>
