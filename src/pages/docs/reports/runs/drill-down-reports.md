---
title: "Test Plan Run Results in Testsigma"
metadesc: "View and download reports from the Run Results page in Testsigma | This page provides detailed results at the test cases, suites, and machines levels."
noindex: false
order: 13.23
page_id: "Test Plan Run Results"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to View Test Suite Results"
  url: "#steps-to-view-test-suite-results"
- type: link
  name: "Steps to View Test Case Results"
  url: "#steps-to-view-test-case-results"
- type: link
  name: "Steps to View Test Machine Results"
  url: "#steps-to-view-test-machine-results"
- type: link
  name: "Test Runs in Run Results"
  url: "#test-runs-in-run-results"
- type: link
  name: "Overview of Tests in Run Results"
  url: "#overview-of-tests-in-run-results"
- type: link
  name: "Exporting the Test Reports"
  url: "#exporting-the-test-reports"
- type: link
  name: "Available Shortcuts in Run Results"
  url: "#available-shortcuts-in-run-results"
---

---

In Testsigma, you can view and download reports from the Run Results page. This page provides results at the test cases, test suites, and test machine level and also helps you check test runs, view the run overview, and see the count of passed/failed tests along with the reasons for failure. This article provides an overview of the Run Results page in Testsigma.


---

> ## **Prerequisites**
>
> Before you begin, make sure you have created and executed a [test plan](https://testsigma.com/docs/test-management/test-plans/overview/).

---

## **Steps to View Test Suite Results**

1. From the left navigation bar, go to **Run Results** and click on the test plan for which you want to check the results.
   ![Test Suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Results_Test_Suites.png)

2. By default, you’ll see the results at test suite level. 
   ![Results at Test Suite Level](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Results_Default_Page.png)

3. You can expand the test suite to check test case results inside the suite. 
   ![Expand Test Suite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Expan_Test_Suite_Run_Results.png)
   
4. The symbols shown with the arrow in the image below indicate the number of test suites running in parallel and the number of test cases running in parallel within each test suite.
   ![Parallel Settings Indicators](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Parallel_Settings_In_Test_Suites.png)

---


## **Steps to View Test Case Results**

1. On the **Run Results** page, select **Test Cases** from the dropdown menu.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Results_Test_Cases.png)

2. The page displays all test cases from all test suites.
   ![Test Cases in all Suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Cases_In_All_Suites.png)

3. You can hover over a failed test case to view a brief description of the reason for failure.
   ![Failure Dialog Box](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Failure_Dialog_Test_Cases.png)

4. Click a test case to view its detailed results.

5. On the **Test Case Results** page, you can view all the test steps along with the **Element Information, Test Data, Settings, Metadata**, and **Step Details**.
   ![Detailed Result of a Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Detailed_Test_Case_Result.png)

6. Click **More details** to access additional information.
   ![More Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/More_Details_On_Test_Case_Result.png)

---

## **Steps to View Test Machine Results**

1. On the **Run Results** page, select **Test Machines** from the dropdown menu.
   ![Test Machine Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Machine_Run_Results.png)

2. The page displays all test machines included in the test plan.
   ![All Test Machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/All_Test_Machines_Run_Results.png)

   [[info | **NOTE**:]]
   | To view the test cases part of the test machine, navigate to the **Test Suites** view and apply a **Test Machine** filter. This provides a view of all test cases in the selected test suite and test machine.

3. Click a test machine to expand and view the test suites it contains.
   ![Expand Machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Expand_Test_Machine_Run_Result.png)

---

## **Test Runs in Run Results**

1. From the **Test Runs** panel, select a different run to view its corresponding test run results.
   ![Test Runs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Runs_In_Run_Results.png)

2. Click **Rerun** in the top-right corner to rerun the test plan by selecting the appropriate rerun options.
   ![Rerun](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ReRun_from_Run_Results.png)

[[info | **NOTE**:]]
| 1. Each run ID has a maximum rerun limit of 10. We recommend using reruns wisely. 
| ![Rerun Limit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Rerun_Limits_Run_Results.png)
|
| 2. Once you click **Rerun**, you'll see the following options. 
|    - **All Test Cases:** This will rerun all the test cases in the selected run.
|    - **All Failed Test Cases:** This will rerun all the failed test cases in the selected run. 
|    - **Select Cases for Re-Run:** This will allow you to select the test cases you want to rerun.
|
| 3. Click **Start execution** to rerun the test plan.


1. To compare the current rerun result with the previous result, click **Compare Run**.
   ![Compare Test Runs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Compare_Runs_In_Run_Results.png)

2. This opens the **Rerun** overlay, where you can view a detailed comparison at all levels.
   ![Rerun Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Compare_Runs_Overlay.png)

---

## **Overview of Tests in Run Results**

1. The **Run Overview** section of the **Run Results** page is dynamic and provides a summary of tests at all levels for the selected run.
   ![Run Overview](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Overview_Run_Results.png)

2. This section displays the **Last Run, Test Plan Settings**, and **Accessibility Test Overview**.
   ![Run Overview Section](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Overview_Section_Run_Results.png)

3. Click **View Runs** to view all runs, **More Settings** to access additional settings, and **View Report** to check the **Accessibility Testing Report**.
   ![View Overlay Components](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Overview_Overlay_Comps.png)

---

## **Exporting the Test Reports**

1. Click the **Export** icon and select the desired download format from the dropdown menu.
   ![Export Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Export_Run_Results.png)

2. For **PDF format**, the **Export PDF** dialog appears. Select the appropriate options and click **Export**.
   ![Export PDF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Export_Run_Results_In_PDF.png)

3. For **JUnit format**, the report is downloaded instantly as an **XML file**.

4. For **XLSX format**, a downloadable link of the report is sent to your email.

---

## **Available Shortcuts in Run Results**

### **For Mac:**
- **Option + C**: View results at the test case level
- **Option + S**: View results at the test suite level
- **Option + M**: View results at the test machine level
- **Option + H**: Open/close run history
- **Option + F**: Open filters
- **Option + O**: Open/close run overview

### **For Windows:**
- **Alt + C**: View results at the test case level
- **Alt + S**: View results at the test suite level
- **Alt + M**: View results at the test machine level
- **Alt + H**: Open/close run history
- **Alt + F**: Open filters
- **Alt + O**: Open/close run overview

---