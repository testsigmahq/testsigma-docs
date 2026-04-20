---
title: "Create & Use Test Data Profiles"
pagetitle: "Create and Use Test Data Profiles"
metadesc: "This article discusses steps in detail on how to create test data profiles that can be used in a test cases in Testsigma application"
noindex: false
order: 5.21
page_id: "create-test-data-profiles"
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
  name: "Protect Sensitive Parameter Values"
  url: "#protect-sensitive-parameter-values"
- type: link
  name: "Associate a Test Data Profile with a Test Case"
  url: "#associate-a-test-data-profile-with-a-test-case"
- type: link
  name: "Use a Test Data Profile in a Test Case"
  url: "#use-a-test-data-profile-in-a-test-case"
- type: link
  name: "Run Data-Driven Tests with Dynamic Data Sets"
  url: "#run-data-driven-tests-with-dynamic-data-sets"
- type: link
  name: "Create Data-Driven Test Cases with Dynamic Data Sets"
  url: "#create-data-driven-test-cases-with-dynamic-data-sets"
- type: link
  name: "Additional Actions on Test Data Set Name"
  url: "#additional-actions-on-test-data-set-name"
- type: link
  name: "Generate a Test Data Profile Using AI"
  url: "#generate-a-test-data-profile-using-ai"
---

---

Use Test Data Profiles to manage large sets of test data in a structured, reusable format. For example, when testing a login feature, you can store thousands of credential sets in a single profile and run all test cases against that data. Testsigma organizes Test Data Profiles within a **Feature > Scenario** folder hierarchy, keeping your test data aligned with your project structure.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have:
> 1. An active Testsigma project with the required permissions to manage test data.
> 2. A Feature and Scenario set up in Test Data Profiles. For more information, see [Folder Structure for Test Data Profiles](folder-structure-for-test-data-profiles.md).
> 3. Reviewed the [documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case).

---

## **Create a Test Data Profile**

1. From the left navigation bar, go to **Test Data** > **Test Data Profiles**.
   ![navigate to test data profiles from left navigation bar](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Data_Profile_Folder_Navigation.png)

2. In the left panel, expand the **Feature** and **Scenario** where you want to create the profile.

3. Create the profile using one of the following methods:

   **From the + menu**
   - At the top of the left panel, click **'+'**.
      ![click plus button at top of left panel to create test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_TDP_from_Top_Plus.png)
   
   
   - From the dropdown, select **New Test Data Profile**.
      ![select new test data profile from dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/New_TDP_from_Left_Panel.png)
   
   - In the **Select Location** dialog, select the **Feature** and then the **Scenario** where you want to store the profile. The selected Scenario appears under **Target Scenario** at the bottom of the dialog.
      ![select feature and scenario in select location dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Location_For_New_TDP.png)
   
   - Select **Confirm**, then complete the profile creation. For more information, see [Create a Test Data Profile](create-data-profiles.md).
      ![click confirm to set location for test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Click_Confirm_Location_for_TDP.png)
   
   **From the folder tree**
   
   - In the left panel, expand a **Feature** to reveal its **Scenarios**.
   
   - Hover over a **Scenario**. A **'+'** icon appears next to the Scenario name.
      ![hover over scenario to reveal plus icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_TDP_from_button_next_to_Scenario.png)
   
   - Click **+**.
   
     A new **Untitled** Test Data Profile opens in the editing view, already associated with that Scenario. 

4. In the **Test Data Profile Info** panel on the right, enter a name in the **Name** field. 
   ![enter title for test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/enter_title_for_tdp.png)

6. Select **+** at the top of the data grid to add a column (parameter), and select **+** at the bottom to add a row (data set). Repeat as needed. 
   ![add rows and column in tdp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/add_new_row_column_tdp.png)

7. Enter values in the data grid cells.

[[info | **NOTE**:]]
| To mark a data set as expected to fail during execution, enable the toggle in the **ETF** (Expected to Fail) column for that row.

7. Click **Create**.

The profile appears in the left panel under the selected **Feature** and **Scenario**.

---

## **Protect Sensitive Parameter Values**

If a parameter column contains sensitive data such as passwords or tokens, you can mask the values so they are hidden in the UI.

1. Open the **Test Data Profile**.
   
2. Enter values in the parameter column.

3. Select the **lock** icon in the column header. The values display as dots (••••••••) to all users.
   ![Lock Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Lock_Data_in_TDP.png)

4. Select **Update** to save your changes.

[[info | **NOTE**:]]
| Locking a column masks values in the UI but does not affect how they are used during test execution.

---

## **Associate a Test Data Profile with a Test Case**

1. From the left navigation bar, go to **Create Tests** > **Test Cases** and create or open an existing test case.

2. On the Test Case details page, click on **Test Case Settings** from the right navigation bar. 
   ![test case settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Case_Settings_to_Add_TDP.png)

3. In the **Test Case Settings** page, choose a **Test Data Profile** from the dropdown menu. 
   ![assoicate test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_TDP_to_Add_to_Test_Case.png)

4. Enable the **Data-Driven** toggle. 
   ![Data-Driven toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_Driven_Toggle_For_TDP.png)
   After enabling the toggle, use the following filters to control which data sets are used in the test case:

   | **Filter** | **Description** |
   |:---|:---|
   | **Iteration** | Filters sequential data sets using greater than, less than, or between operations. |
   | **Set Name** | Filters non-sequential data sets by name using equals, contains, starts with, or ends with. |
   | **Parameter** | Filters non-sequential data sets by the parameters used in the data sets. |

   ![select data driven filters](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Filter_Type_for_Data_Driven_test.png)

---

## **Use a Test Data Profile in a Test Case**

1. On the **Test Case Details** page, click **Add new step**.
   ![Add new step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_New_Step_to_Add_Parameter.png)

2. Use NLP to create a new test step that includes a placeholder for the test data.
   ![new test step that includes a placeholder for the test data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/NLP_with_Test_Data_Placeholder.png)

3. Click the test data placeholder.
   
4. From the test data types dropdown, select <strong>@ Parameter</strong> .
   ![Parameter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_parameter_to_choose_data_from_TDP.png)

5. In the right panel, select the parameter.
   ![select parameter from overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Parameter_from_Overlay.png)


---

## **Run Data-Driven Tests with Dynamic Data Sets**

By default, data-driven tests iterate values from start to end. To start iteration from a specific point, store start and end values as runtime variables in a prerequisite test case.

**Set Variables in a Prerequisite Test Case**

1. From the left navigation bar, go to **Create Tests** > **Test Cases** and create or open an existing test case. 

2. In your test steps, store the start and end data values using the variables <strong>RunTime\_TestData\_Set\_Start</strong> and **RunTime\_TestData\_Set\_End**. 
   ![create dynamic sets in data driven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dynamic_data_sets_testcase.png)

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

## **Create Data-Driven Test Cases with Dynamic Data Sets**

1. On the Test Case Details page, select **Test Case Settings**. 

2. From the Prerequisite dropdown, select the prerequisite test case.
   ![select prerequiste for test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Prereq_Test_for_TDP.png)

3. Enable the **Data-Driven** toggle.

4. For the **Data Iterates From** dropdown, select **Overwrite Test Data Set with a runtime variable**.
   ![Data Iterates From](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_iterates_from_dropdown.png)

5. For the **Data Iterates To** dropdown, select **Overwrite Test Data Set with a runtime variable**.
   ![Data Iterates To](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Data_iterates_to_dropdown.png)

6. Create the test steps, then click **Run** to execute the test case.

---

## **Additional Actions on Test Data Set Name**

1. **Store**: Store the test data set name in a variable for later use. Use the following NLP syntax:

   ```
   store-iteration-count-test-data-set-name
   ```

2. **If Condition**: Use test data set values from a Test Data Profile in an if condition. For more information, see [Add-ons](https://testsigma.com/addons).

---

## **Generate a Test Data Profile Using AI**

1. On the **Test Case Details** page, go to **Test Case Settings > Test Data Profile**.

2. Click the **Test Data Profile** dropdown menu.

3. Click **Generate TDP with AI**. This will open the **Test Data Generation** dialog.
   ![TDP with AI](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/TDP_with_AI.png)

4. In the **Test Data Generation** dialog, validate the **Field Names**, then click **Generate**.
   ![Generate with AI](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Click_Generate_to_Get_TDP.png)

5. Wait for the data to be generated. Once you are satisfied with the data, click **Create and Replace**.
   ![Create and Replace](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_and_Replace_TDP_Generated_with_AI.png)

6. Your test data in the test steps will be replaced with the generated data.

---