---
title: "Test plan executions"
order: 9.21
page_id: "Test Plan Executions"
metadesc: "How to perform test plan executions for a test case in Testsigma."
noindex: false
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to create and execute test plan"
  url: "#steps-to-create-and-execute-test-plan"
- type: link
  name: "Partial test runs"
  url: "#partial-test-runs"
- type: link
  name: "Test Plan Run Results"
  url: "#test-plan-run-results"
- type: link
  name: "Steps to check Test Plan Run Results"
  url: "#steps-to-check-test-plan-run-results"
---

---

![Test Plan Overview](https://docs.testsigma.com/images/test-plan-executions/test-plan-overview.jpeg)

A test plan is a set of test suites. When a test plan is executed, the test suites and their corresponding test cases are executed, either serially or parallelly, as configured.


This article guides the user to prepare and execute test plans in Testsigma platform. For demonstrative purposes we will discuss the execution of a test plan that has one test suite and one test case associated with the test suite.


---


## **Prerequisites**

You should be familiar with the following:

1. How to create a test case. *For more information refer to [create a test case.](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)*.

2. How to create a test suite. *For more information refer to [create a test suite](https://testsigma.com/docs/test-management/test-suites/overview/#create-test-suite)*.


---

## **Steps to create and execute test plan**

 1. Create a test case with all the necessary steps. 
    ![create test case for test plan executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/test-plan-executions/testcase_demo.gif)
 2. Create a test suite and add the test case created in step 1 to this test suite.
    ![create test suite for test plan executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/test-plan-executions/test_suite_final.gif)
 3. Create a test plan and add the test suite we just created to this test plan.
     ![create test plan for test plan executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/test-plan-executions/test_plan_sample.gif)
 4. Run test plan - Click on the **Run** button to start the test plan execution.Below is a GIF demonstrating how the  real-time test plan execution looks like in Testsigma:
    ![test plan execution results in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/test-plan-executions/test_plan_executions_final.gif)



---

## **Partial test runs**

There would be instances when you might need to execute your test plan only partially instead of executing the complete test plan. With Testsigma, you can do that. You can filter the tests based on some attributes or select the test suites that you’d like to include or exclude for test execution, and then, only execute the selected test cases.

**Lets see how we can do that:**

1. Go to the test plan that you want to execute partially. You can either go to the test plan list page. The option for partial run for a test plan on a test plan list page would be available as below:

![Partial test run test plan list page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/test-plan-executions/test_plan_partial_execution.png)

2. Or you can go to the test plan details page for the particular test plan that you want to do the partial run for. The option is available as shown in the screenshot below: 

![Partial test run test plan details page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/test-plan-executions/test_plan_details_partial_run.png)

3. A **Partial  Test Plan Run** layover appears as shown in the screenshot below. You can configure the options in this layover according to how you want to select the test cases for your partial test run:

![Partial test run layover](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/test-plan-executions/partial_test_plan_run_overlay.png)

**Below are the options you see:**

1. **Include or Exclude test suites** : You can include or exclude the test suites from the partial test run by selecting the radio button **Include** or **Exclude**.
2. **Test suites**: Specify the test suites that should be included from the dropdown.


3. **Test case filters**: You can identify the test cases to be included in the test suites using the below filters:
    - **Labels**: Filter the test cases according to the labels assigned to them.
    - **Type**: Filter the test cases according to the type of test cases there are. 
    
    - **Requirement**: Filter the test cases according to the requirements assigned to them. 
    
    - **Requirement Type**: Filter the test cases according to the requirement types assigned to them.
    - **Priority**: Filter the test cases according to priority.
    - **Created by**: Filter the test cases according to their creators.
    - **Assignee**: Filter the test cases according to their assignees.
    
    - **Reviewer**: Filter the test cases according to their reviewers.<br>

Once you have applied the filters, you can:

- View filtered test cases by clicking on the **View Filtered Test Cases** button.
- Save the configuration as a favourite for later use by clicking on the **Save As Favorite** button.
- Start the execution of the filtered test cases by clicking on the **Run Now** button.


[[info | NOTE:]]
|- The Runtime variables during the initial run of the test will be stored and available for future runs. In case of a test failure and the need to re-run the test, the runtime variables from the initial run will automatically apply.
|- If you enter a variable name without storing the value, you will see the following error in the run report. Make sure to always store the value into a variable before using it.

[[info | Error Message:]]
| No data available for runtime test data variable %s. Refer previous Test Steps in this Test Case or Test Steps in other Test Cases to know the variable names saved by using store(naturalText) action Test Steps. Go to https://testsigma.com/docs/test-data/types/runtime/ to know more about runtime test data.";


---

## **Test Plan Run Results**
A Test Plan is a collection of Test Suites grouped based on a specific feature or a requirement. You can follow the steps below to check the Test Plan Run Results.

## **Steps to check Test Plan Run Results**
1. Navigate to **Test Development > Run Results**.
![Navigate to Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/naviagte.png)

2. Hover over to the Test Plan Result you want and click on **View Reports**.
![View Reports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/viewreports2.png)

3. You can see the results page below:
![Results page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/resultpageoftp.png)

[[info | **NOTE**:]]
|You can check results at the Test case level, Test Suite level, and Test Plan level. Refer to the following GIF to understand better.
| ![Results GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Resultsgif.gif)