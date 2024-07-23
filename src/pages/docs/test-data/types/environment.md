---
title: "Environment Test Data"
page_title: "Environment Test Data | Testsigma Documentaion"
metadesc: "Integrate environment test data to enhance testing efficiency in Testsigma. Optimise specific environment for test steps, ad-hoc runs, and test plans."
noindex: false
order: 5.24
page_id: "environment-test-data-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Use Environment in Test Steps"
  url: "#use-environment-in-test-steps"
- type: link
  name: "Use Environment in Ad-hoc Run page"
  url: "#use-environment-in-ad-hoc-run-page"
- type: link
  name: "Use Environment in Test Plan"
  url: "#use-environment-in-test-plan"
- type: link
  name: "Environment Variables"
  url: "#environment-variables"
- type: link
  name: "Add Keys & Values to all Environments Globally"
  url: "#add-keys--values-to-all-environments-globally"
- type: link
  name: "Use Environment Variables to Select Test Data Values"
  url: "#use-environment-variables-to-select-test-data-values"
---

---

In Testsigma, you can handle and use specific sets of test data linked to different test environments with Environment Test Data. You can include this data in the specific environment where the app is tested, like server names, port numbers, and database credentials. Integrating this environment-specific data into test cases allows you to verify the app's behaviour across different environments such as development, testing, staging, and production. This guide provides an overview of using Environment Test Data in Testsigma across test steps, ad-hoc runs, and test plans.

---

> ## **Prerequisites**
> 
> - You should know how to create a [Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case) and [Test Steps](https://testsigma.com/docs/test-cases/step-types/natural-language/). 
> - You should know how to create an [Environment](https://testsigma.com/docs/test-data/create-environment-data/).
> - You should know how to create a [Test Plan](https://testsigma.com/docs/runs/test-plan-executions/#steps-to-create-and-execute-test-plan) and how to use them with [Test Data Types](https://testsigma.com/docs/test-data/types/overview/).
> - You should know how to perform [Ad-Hoc Runs](https://testsigma.com/docs/runs/adhoc-runs/#steps-to-perform-ad-hoc-runs-for-a-test-case).

---

## **Use Environment in Test Steps**

1. Use **NLP** to create a **new step** in the **Test Case** and include a placeholder for **test data**.
2. Click the **test data** placeholder to replace it, and then select the *** Environment** from the **Test Data Types** dropdown menu.
3. Select **Environment** in the **Environments** overlay screen from the right-side panel. ![Environment in Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/teststeps_environment.gif)

---

## **Use Environment in Ad-hoc Run page**

1. On the **Ad-hoc Run** page, click the right arrow before **Additional Settings** to reveal the feature.
2. Select **Environmet** from the drop-down list. ![Environment in Ad-hoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/adhoc_run_environment.png)

---

## **Use Environment in Test Plan**

1. Navigate to the **Test Plan Settings** tab on the **Create** or **Edit Test Plan** page.
2. In the **Additional Settings** section, select **Environment** from the drop-down list. ![Environment in Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testplan_environment.png)


---


## **Environment Variables**

You can effectively manage environmental variables, which ensures consistency across various environments.

Testsigma introduced a centralized master list of environment variables, where users can maintain a clean and organized list of Variables, streamlining the selection process during test authoring.

You can modify environment variable values directly on the Ad-Hoc Run page before execution. 

Testsigma also automates the creation of new and updated keys across all environments, eliminating the need for manual replication and ensuring that changes are cloned consistently. 

---

## **Add Keys & Values to all Environments Globally**

1. From the left navigation bar, go to **Test Data > Environments** and click the **Variables** tab.
   ![Variables](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/VariablesTab.png)

2. Enter the **Variable** name and **Value** and click **Add**. 
   ![Add Variables](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Variable_and_Value.png)

[[info | **NOTE**:]]
| **Variable** names should be unique and can not be changed once added. 

3. Once the **Variable** is added to the list, click **Update**. 
   ![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/UpdateVariable.png)

4. Verify the **Variable** added in the **Environments**. 
   ![Verify Variable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/VerifyVariable.png)

> Alternatively, you can also add Variables by clicking on **Add Variable**. This will open the **Add Environment Variable** prompt. 
> ![Add Variable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AddVariable.png)
> 
> - Enter the **Variable** name and **Value** and click **Create**.
>   ![Variable Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AddVariablePrompt.png)

5. There will be a default indication with the letter **D** for all the **Variables** added globally. 
   ![Default Indication](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/DafaultVariableIndication.png)

[[info | **NOTE**:]]
| Once you edit the **Variable** from the **Environment** page, the default indication with the letter **D** will not be displayed.
| ![No Default Indication](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/NoIndicationMark.png)

6. From the **Test Case Details** page, click **Run**. This will open the **Ad-Hoc Run** overlay. 
   ![Ad-Hoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/VariableAdHoc_Run.png)

7. Go to the **Environment** section and confirm the variables by clicking on **Manage Variables**.
   ![Manage Variables](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ManageVariables.png)

8. Update the changes and click **Apply**. 
   ![New Changes](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/UpdateVariableandApply.png)

9. Click on **Run Now** to execute the test with updated **Environment** and **Variable**. 
   ![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/RunNowwithNewVariables.png)

[[info | **NOTE**:]]
| Some existing users may notice some empty values in their Environment list. This happens as we have curated your Environment list into a master list. The empty values indicate that the corresponding Environment variables were not previously part of your Environment. With the transition to a master list, these variables are added to ensure the proper usage of the Environment functionality. This change will not impact your existing test cases.

---

## **Use Environment Variables to Select Test Data Values**

Environment variables can filter test data sets by name during data-driven testing. This method provides flexibility and reusability, making your test cases more adaptable to different scenarios.

1. Create an **Environment** and add the name-value pairs that match the set names and values in your Test Data Profile. ![create environment parameter using tdp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_environment_using_tdp.gif)
2. On the Test Case Details page, click the **Test Case Settings** icon in the right navigation bar.
3. Select the **Test Data Profile** from the dropdown menu to associate it with the test case. Enable the **Data-Driven** toggle. ![enable data driven to use environment parameter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/enable_data_driven_env.gif)
4. Choose **Parameters** as the **Filter type**. Select **Equals**, **Contains**, **Starts with** or **Ends with** as the **Comparison Metric** from the dropdown menu. Choose **Parameter Set Name** from the dropdown.
5. Type <strong>*|</strong> to open the Environment overlay and choose the **Environment Parameter Name** to add the filters. ![use environment variables to select test data values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/use_environment_choose_test_data_values.gif)
6. When you run the test case, it will execute using the specified filters. 


