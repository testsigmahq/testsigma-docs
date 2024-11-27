---
title: "Create & Use Test Data Profiles"
pagetitle: "Create and Use Test Data Profiles"
metadesc: "This article discusses steps in detail on how to create test data profiles that can be used in a test cases in Testsigma application"
noindex: false
order: 5.21
page_id: "Create Test Data Profiles"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create a Test Data Profile"
  url: "#create-a-test-data-profile"
- type: link
  name: "Associate a Test Data Profile with a Test Case"
  url: "#associate-a-test-data-profile-with-a-test-case"
- type: link
  name: "Using Test Data Profile in a Test Case"
  url: "#using-test-data-profile-in-a-test-case"
- type: link
  name: "Data-driven Testing with Dynamic Data Sets"
  url: "#data-driven-testing-with-dynamic-data-sets"
- type: link
  name: "Creating Data-Driven Test Cases with Dynamic Data Sets"
  url: "#creating-data-driven-test-cases-with-dynamic-data-sets"
- type: link
  name: "Additional Actions on Test Data Set Name"
  url: "#additional-actions-on-test-data-set-name"
---

---

Test data profiles can significantly enhance the efficiency of your testing process, especially when working with large sets of similar data. For example, to test the login functionality of a website, you may need thousands of data sets. This guide will show you how to create and use test data profiles in Testsigma.

---

> ## **Prerequisites**
>
> Before you begin, ensure you're familiar with concepts of [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) in Testsigma.

---

## **Create a Test Data Profile**

1. Navigate to **Test Data** > **Test Data Profiles** and click on **Create Test Data Profile**. ![create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/click_create_test_data_profile.png)
2. On the **Test Data Profile** details page, enter the **Title** for your test data profile in the **Test Data Profile Info** section. ![enter title for test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/enter_title_for_tdp.png)
3. To create rows and columns, click the **+** icon next to the right navigation bar to add a new column, and click the **+** icon below the table to add a new row. ![add rows and column in tdp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/add_new_row_column_tdp.png)
[[info | **NOTE**:]]
| If you must create test data expected to fail, enable the toggle button in the **ETF** (Expected to Fail) column. 
4. Click on **Create** to save your test data profile.

Here’s a quick GIF that demonstrates how to create a test data profile. 
![create test data profile gif](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/steps_to_create_tdp.gif)

---

## **Associate a Test Data Profile with a Test Case**

1. Navigate to **Create Tests** > **Test Cases** and click on **Create Test Case**. ![navigate to assoicate test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_testcase_associate_tdp.png)

2. On the Test Case details page, click on **Test Case Settings** from the right navigation bar. ![test case settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/test_case_setting_tdp_associate.png)
3. In the **Test Case Settings** page, choose a **Test Data Profile** from the dropdown menu. ![assoicate test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/associate_tdp_in_testcase.png)
4. Enable the **Data-Driven** toggle. Once enabled, you can filter and customise the data sets from your test data profile for use in your test case using the filters Iteration, Set Name, and Parameter.
    - **Iteration**: Filters sequential data sets using greater than, less than, or between operations.
    - **Set Name**: Filters non-sequential data sets by set names using operations like equals, contains, starts with, and ends with.
    - **Parameter**: Filters non-sequential data sets using parameters used in data sets. ![select data driven filters](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/filtertype_dd_testcase.png)

---

## **Using Test Data Profile in a Test Case**

1. In **Test Case detials** page, click **Add new** step, and use **NLP** to create a new test step. ![use test data placeholder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/select_parameter_testdatatypes_testcase.png)
2. Include a placeholder for the **test data**. Click the **test data** placeholder, select <strong>@ Parameter</strong> from the test data types dropdown, and choose the parameter from right overlay. ![select parameter from overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/select_parameter_fromtdp.png)

Here is a quick GIF demonstrating the above workflow: ![use test data profile in test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/associating_tdp_in_testcase.gif)

---

## **Data-Driven Testing with Dynamic Data Sets**

In data-driven testing, you can iterate values from start to end. To iterate from the middle, set variables in a prerequisite test case and use them as start and end points by enabling data-driven testing.

**Set Variables in a Prerequisite Test Case**

1. Navigate to Create Tests > Test Cases. 
2. Store the start and end data values in your test steps using the variables <strong>RunTime\_TestData\_Set\_Start</strong> and **RunTime\_TestData\_Set\_End**. ![create dynamic sets in data driven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dynamic_data_sets_testcase.png)

<style>
  .example-container {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1em;
    margin: 1em 0;
    background-color: #f9f9f9;
  }
  .example-title {
    color: #004d00;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 1.2em;
  }
  .example-title span {
    margin-right: 8px;
  }
  .example-list {
    list-style-type: none;
    padding-left: 1em;
    margin-top: 0.5em;
  }
  .example-list li {
    margin-bottom: 0.75em;
    font-family: "Courier New", Courier, monospace;
    color: #333;
  }
  .code-block {
    background-color: #f1f1f1;
    padding: 0.5em;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-family: "Courier New", Courier, monospace;
    color: #333;
  }
</style>

<div class="example-container">
  <div class="example-title">
    <span>ℹ️</span>Example:
  </div>
  <ul class="example-list">
    <p>For example, assign</p>
    <li class="code-block">
      RunTime_TestData_Set_Start = "delhi";<br>
      RunTime_TestData_Set_End = "bangalore";
    </li>
  </ul>
</div>

---

## **Creating Data-Driven Test Cases with Dynamic Data Sets**

1. In **Test Case detials** page, click on **Test Case Settings** and select the **Prerequisite** test case from the dropdown. ![select prerequiste for test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/select_prerequsties_testcases.png)
2. Enable the **Data-Driven** toggle and select **Overwrite Test Data Set with a runtime variable for the Data iterates from/to** dropdowns. ![select data driven test with dynamic set](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/select_data_iterates_from_variables.png)
3. Create test steps and click **Run** to execute the test case.

---

## **Additional Actions on Test Data Set Name**

- **Store**: The test data set name associated with a test data profile can be stored in a variable for later use. The syntax for the Store NLP is **store-iteration-count-test-data-set-name**.

- **If Condition**: The test data set values from a test data profile can be used in an if condition. The screenshot below shows the NLP, which can be added as part of the "String Compare" add-on. Find the add-ons to use [here](https://testsigma.com/addons).

---

### **Steps to Generate Test Data Profile from Test Case Settings**

1. On the **Test Case Details** page, go to **Test Case Settings > Test Data Profile**.

2. Click the **Test Data Profile** dropdown menu.

3. Click **Generate TDP with AI**. This will open the **Test Data Generation** dialog.

4. In the **Test Data Generation** dialog, validate the **Field Names**, then click **Generate**.

5. Wait for the data to be generated. Once you are satisfied with the data, click **Create and Replace**.

6. Your test data in the test steps will be replaced with the generated data.

---