---
title: "Test Plan Executions"
order: 9.21
page_id: "Test Plan Executions"
metadesc: "This article discusses how to create and execute test plans in Testsigma platform | Understand normal test runs and partial test runs in the Testsigma"
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
---

---

![Test Plan Overview](https://docs.testsigma.com/images/test-plan-executions/test-plan-overview.jpeg)

A test plan is a set of test suites. When a test plan is executed, the test suites and their corresponding test cases are executed, either serially or parallelly, as configured.


This article guides the user to prepare and execute test plans in Testsigma platform. For demonstrative purposes we will discuss the execution of a test plan that has one test suite and one test case associated with the test suite.


---


## **Prerequisites**


1. You should know how to [create a test case.](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).


2. You should know how to [create a test suite](https://testsigma.com/docs/test-management/test-suites/overview/#create-test-suite).


---

## **Steps to Create and Execute Test Plan**

1. Create a test case with all the necessary steps. 
![create test case for test plan executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_testcase_mtc.gif)
 
2. Create a test suite and add the test case created in step 1 to this test suite.
![create test suite for test plan executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/creating_a_testsuite.gif)


3. Create a test plan and add the test suite we just created to this test plan.
![create test plan for test plan executions in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/creatinga_testplan.gif)


1. Click on the **Run Now** to start the test plan execution.
![Test plan execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rntptpexe.png)

[[info | **NOTE**:]]
| Whitelisting of Testsigma IP addresses is necessary to ensure that the Testsigma servers and lab environments can securely interact with your applications and systems for testing activities. For more information, refer to [whitelisting Testsigma IP addresses](https://testsigma.com/docs/runs/test-locally-hosted-applications/#whitelisting-testsigma-ip-addresses)

---

## **Partial Test Runs**

There are instances when you need to execute your test plan only partially instead of executing the complete one. With Testsigma, you can do that. You can filter the tests based on some attributes or select the test suites you'd like to include or exclude for test execution and then only execute the selected test cases. 

**Lets see how we can do that:**

1. Go to the test plan that you want to execute partially and open the dropdown and click on **Partial Run**. 
![Partical Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ptpeexe.png)


1. On **Partial  Test Plan Run** overlay, configure the options according to how you want to select the test cases for your partial test run:
![Partial test run overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ptprlo.png)

**Below are the options you see:**

1. **Include or Exclude test suites** : You can include or exclude the test suites from the partial test run by selecting the radio button **Include** or **Exclude**.
2. **Test Suites to Include**: Specify the test suites that should be included from the dropdown.


3. **Test Case Filters**: You can identify the test cases to be included in the test suites using the below filters:
![Test Case Filters](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tpprtcfilt.png)
    - **Labels**: Filter the test cases according to the labels assigned to them.
    - **Type**: Filter the test cases according to the type of test cases there are. 
    - **Requirement**: Filter the test cases according to the requirements assigned to them. 
    - **Requirement Type**: Filter the test cases according to the requirement types assigned to them.
    - **Priority**: Filter the test cases according to priority.
    - **Created by**: Filter the test cases according to their creators.
    - **Assignee**: Filter the test cases according to their assignees.
    - **Reviewer**: Filter the test cases according to their reviewers.

Once you have applied the filters, you can:

- View filtered test cases by clicking on the **View Filtered Test Cases** button.
- Save the configuration as a favourite for later use by clicking on the **Save As Favorite** button.
- Start the execution of the filtered test cases by clicking on the **Run Now** button.


[[info | NOTE:]]
| - The Runtime variables during the initial run of the test will be stored and available for future runs. In case of a test failure and the need to re-run the test, the runtime variables from the initial run will automatically apply.
| - If you enter a variable name without storing the value, you will see the following error in the run report. Make sure to always store the value into a variable before using it.

[[info | Error Message:]]
| No data available for runtime test data variable %s. Refer previous Test Steps in this Test Case or Test Steps in other Test Cases to know the variable names saved by using store(naturalText) action Test Steps. Go to https://testsigma.com/docs/test-data/types/runtime/ to know more about runtime test data.


---


## **Test Plan Run Results**


1. From the left navigation bar, go to **Run Results** and click on the test plan for which you want to check the results.
   ![Test Suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Results_Test_Suites.png)

2. By default, you’ll see the results at test suite level. 
   ![Results at Test Suite Level](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Results_Default_Page.png)

[[info | **NOTE**:]]
| You can also view reports at test suite and test machine level by clicking on **Test Suite** and **Test Machine**. 

*For more information on viewing and downloading results of a test plan on test case, test suite or test machine levels, see [Test Plan Run Results](https://testsigma.com/docs/reports/runs/drill-down-reports/).*

---