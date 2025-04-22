---
title: "Dynamic Test Suites"
metadesc: "Dynamic Test Suites in Testsigma automate test selection using filters, ensuring efficient execution. Learn what they are, how they work, why they’re useful, and how to manage them."
noindex: false
order: 8.12
page_id: "dynamic-test-suites-managament-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create a Dynamic Test Suite"
  url: "#create-a-dynamic-test-suite"
- type: link
  name: "Edit a Dynamic Test Suite"
  url: "#edit-a-dynamic-test-suite"
- type: link
  name: "Delete a Dynamic Test Suite"
  url: "#delete-a-dynamic-test-suite"   
- type: link
  name: "Add a Dynamic Test Suite to a Test Plan"
  url: "#add-a-dynamic-test-suite-to-a-test-plan" 
- type: link
  name: "Add a Dynamic Test Suite to a Scheduled Test Plan"
  url: "#add-a-dynamic-test-suite-to-a-scheduled-test-plan" 
---

---



Dynamic Test Suites in Testsigma provide an efficient way to streamline test execution by automatically selecting test cases based on predefined filters. Unlike Static test suites, where test cases are manually chosen, dynamic test suites continuously update to include all relevant test cases that match the applied filters. 


---

## **Prerequisites**

Before you begin, ensure that you are familiar with the concept of [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) in Testsigma. 

---

## **Create a Dynamic Test Suite**

1. From the left navigation bar, navigate to **Test Suites**. 
   ![Create Dynamic Test Suite 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Dynamic_Suites_1.png)

2. Expand **Create Test Suite** and click **Create Dynamic Test Suite**.
   ![Create Dynamic Test Suite 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Dynamic_Suites_2.png)
   
3. In the **Basic Details** section, enter a name in the **Name** field
   ![Create Dynamic Test Suite 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Dynamic_Suites_3.png)
   
4. In the **Filtered Testcases** section, click **Add filters to select test cases**. 
   ![Create Dynamic Test Suite 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Dynamic_Suites_4.png)
   
5. In the **Add/Remove filters to select test cases** screen, expand **Add Filters** and select the required filters.
   ![Create Dynamic Test Suite 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Dynamic_Suites_5.png)
   
   The system automatically selects test cases based on the applied filters. 
    
6. Once the test cases are filtered, expand **Sort** by to arrange them as needed. 
   ![Create Dynamic Test Suite 6](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Dynamic_Suites_6.png)
   
7. After filtering and sorting the test cases, expand **Save Filter** and select **As New**.
   ![Create Dynamic Test Suite 7](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Dynamic_Suites_7.png)
   
8. In the **Save filter config as** dialog, enter the name for the filter, select the **Mark as Public** checkbox if required, and click **Save**. 
   ![Create Dynamic Test Suite 8](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_dynamic_suite_8.1.png)

[[info | **NOTE**:]]
|
| - You can click **Reset** to remove all the applied filters if needed.
|   ![Reset](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Dynamic_Suites_Note_1.png)

9. Click **Add to Suite**. 
   ![Create Dynamic Test Suite 9](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_dynamic_suite_9.2.png)

[[info | **NOTE**:]]
|
| - You can click **Modify Filters** to make changes before proceeding. 
|   ![Modify Filters](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Dynamic_Suites_Notes_2.png)  

10.  Click **Create**. 
    ![Create Dynamic Test Suite 10](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_dynamic_suite_10.2.png)
       

---

## **Edit a Dynamic Test Suite**

1. From the left navigation bar, navigate to **Test Suites**.
   ![Edit Dynamic Test Suite 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_Dynamic_Suites_1.png)

2. In the **Test Suites** screen, locate the dynamic test suite you want to edit.
   ![Edit Dynamic Test Suite 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_Dynamic_Suites_2.png)

3. Click the ellipsis icon next to the test suite and select **Edit**.
   ![Edit Dynamic Test Suite 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_dynamic_Suite_3.1.png)

4. Click **Edit Test Suite**.
   ![Edit Dynamic Test Suite 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_dynamic_suite_4.1.png)

5. In the **Add/Remove filters to select test cases** screen, expand **Add filters** and select the required filters.
   ![Edit Dynamic Test Suite 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_Dynamic_Suites_5.png)

6. After modifying the filters, expand **Save Filter**  and choose one of the following:
   ![Edit Dynamic Test Suite 6](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_Dynamic_Suites_6.png)

   **As New:** Opens the **Save filter Config as** dialog. Enter a name for the new filter and click **Save**.
   ![As New](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_dynamic_suite_6.1.1.png)

   **Replace Existing:** Opens the **Update filter config** dialog. Edit the name if needed and click **Save**
   ![Replace Existing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_dynamic_suite_6.2.1.png)

7. Click **Add to Suite**.
   ![Edit Dynamic Test Suite 7](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Edit_dynamic_suite_7.1.png)

---

## **Delete a Dynamic Test Suite**

1. From the left navigation bar, navigate to **Test Suites**.
   ![Delete Dynamic Test Suite 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Delete_Dynamic_Suites_1.png)

2. In the **Test Suites** screen, locate the dynamic test suite you want to edit.
   ![Delete Dynamic Test Suite 2 ](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Delete_Dynamic_Suites_2.png)

3. Click the ellipsis icon next to the test suite and select **Delete**.
   ![Delete Dynamic Test Suite 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Delete_Dynamic_Suites_3.png)

[[info | **NOTE**:]]
|
| - If you attempt to delete a dynamic test suite linked to a test plan, the application will display a warning and prevent the deletion. You must remove the dynamic test suite from the associated test plans before trying to delete it again.


4. In the **Delete Test Suites** dialog, enter **DELETE** to confirm the deletion and then click on **I understand, delete this Test Suite**.
   ![Delete Dynamic Test Suite 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Delete_Dynamic_Suites_4.1.png)

[[info | **NOTE**:]]
|
| - If you delete the dynamic test suite, you will lose all run reports and run configuration associated with it.

---

## **Add a Dynamic Test Suite to a Test Plan**

1. From the left navigation bar, navigate to **Test Plans**.
   ![Test Suites to test plan 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Suites_to_Test_Plan_1.png)

2. Click **Create Test Plan**.
   ![Test suites to test plan 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Suites_to_Test_Plan_2.1.png)

3. In the **Basic Details** tab, enter the required name for the test plan and click **Continue**. 
   ![Test Suites to test plan 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Suites_to_Test_Plan_3.2.png)

4. In the **Add Test Suites & Link Machine Profiles** tab, click **+ Add Test Suites**. 
   ![Test suites to test plan 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_suites_to_test_plans_4.png)
 
5. Click the **+** icon next to the newly created dynamic test case along with other required test cases.
   ![Test suites to test plan 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Suites_to_test_plan_5.png)

6. Click **Add to Plan**.
   ![Test suites to test plan 6](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_suite_to_test_plan_6.1.png)
   
[[info | **NOTE**:]]
|
| - When a dynamic test suite is added to a test plan, its test cases cannot be edited, unlike in static test suites.

7. Click **+ Link Test Machine**. 
   ![Test suite to test plan 7](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_suite_to_a_test_plan_7.png)

8. In the **Select test machine profiles** overlay, select the required test machines and click **Save selections**. 
   ![Test Suite to test plan 8](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_suite_to_a_test_plan_8.png)

9. Click **Continue**.
   ![Test Suite to test plan 9](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_suite_to_a_test_plan_9.png)

10. In the **Test Plan Settings** tab, configure the required fields and click **Create**.
    ![Test suite to a test plan 10](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_suite_to_a_test_plan_10.1.png)

---

## **Add a Dynamic Test Suite to a Scheduled Test Plan**

1. From the left navigation bar, navigate to **Test Plans**.
   ![Scheduled partial run 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Scheduled_partial_run_1.png)

2. Expand **Schedule** for the dynamic test suite and click **Schedule Partial Run**. 
   ![Scheduled partial run 2](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Scheduled_Partial_run_2.png)

3. In the **Schedule Partial Test Plan** overlay, enter the required name in the **Name** field.
   ![Scheduled partial run 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Scheduled_partial_run_3.png)

4. Click the calendar icon in the **Date** field and select the required date.
   ![Scheduled partial run 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Scheduled_partial_run_4.png)

5. Click the clock icon in the **Time** field and select the required time. 
   ![Scheduled partial run 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Scheduled_partial_run_5.png)

6. In the **Repeat** section, expand **Repeat** and select the required option. 
   ![Scheduled partial run 6](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Scheduled_partial_run_6.png)

7. In the **Test Suites to Include** section, select the required test suites. 
   ![Scheduled partial run 7](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Scheduled_partial_run_7.png)

[[info | **NOTE**:]]
|
| - When you select dynamic test suites in the **Test Suites to Include** section, you cannot filter the test cases from the dynamic test suites. 

8. Click **Schedule**.
   ![Scheduled partial run 8](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Scheduled_partial_run_8.png)
   





