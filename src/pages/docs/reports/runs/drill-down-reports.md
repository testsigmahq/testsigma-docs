---
title: "Test Plan Run Results in Testsigma"
metadesc: "View and download reports from the Run Results page in Testsigma | Drill into results at the test case, suite, and machine level, read step analysis, and compare runs."
noindex: false
order: 14.23
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
  name: "Step Details Tabs"
  url: "#step-details-tabs"
- type: link
  name: "Steps to View Test Machine Results"
  url: "#steps-to-view-test-machine-results"
- type: link
  name: "Test Runs in Run Results"
  url: "#test-runs-in-run-results"
- type: link
  name: "Compare Runs"
  url: "#compare-runs"
- type: link
  name: "Compare a Single Step"
  url: "#compare-a-single-step"
- type: link
  name: "Overview of Tests in Run Results"
  url: "#overview-of-tests-in-run-results"
- type: link
  name: "Exporting the Test Reports"
  url: "#exporting-the-test-reports"
- type: link
  name: "Available Shortcuts in Run Results"
  url: "#available-shortcuts-in-run-results"
- type: link
  name: "How Run Results Handle Renamed and Deleted Items"
  url: "#how-run-results-handle-renamed-and-deleted-items"
---

---

View and download reports from the **Run Results** page. The page presents results at the test case, test suite, and test machine level, and shows the count of passed and failed tests along with the reason for each failure. Drill into a single step to read its analysis, check its logs, and compare it against an earlier run.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. You have referred to the [documentation on creating test plans](https://testsigma.com/docs/test-plans/overview/).
> 2. A test plan has completed at least one run.

---

## **Steps to View Test Suite Results**

1. From the left navigation bar, go to **Run Results** and click the test plan for which you want to check the results.
   

2. Results open at test suite level by default.
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Test_Suite_Level_Results.png)

3. Expand a test suite to check the test case results inside it.
   

4. The parallel indicators on each row show how many test suites run in parallel, and how many test cases run in parallel within each suite.
   

---

## **Steps to View Test Case Results**

1. On the **Run Results** page, select **Test Cases** from the dropdown menu.


2. The page displays all test cases from all test suites.


3. Hover over a failed test case to view a brief description of the reason for failure.


4. Click a test case to view its detailed results.

5. On the **Test Case Results** page, the step list appears on the left, headed by the step count and the number of failed steps. Select a step to open its details on the right. Drag the divider between the two panes to resize either side.
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Results_Divider.png)


6. Review the step header, which shows the step number, its duration, its status, and the result message. On a failed step, the header shows the error message with a **Read more** link.

7. Click **Affected tests** to see what else depends on the element this step uses. The **Affected Instances** panel opens with counts across **Test Cases**, **Step Groups**, **Test Suites**, and **Test Plans**.

8. Click **More details** to open **Test Case Overview**, which shows the step breakdown across **Passed**, **Failed**, **Not Executed**, and **Stopped**, along with the run message and **Machine Details**.

---

## **Step Details Tabs**

Each step presents its details across five tabs.

| **Tab** | **What it contains** |
|---|---|
| **Analysis** | The step result summary, the **Root cause** block on a failed step, and the **Visual Evidence** section comparing the authoring screenshot against this run |
| **Locators** | The locators used for the step |
| **Logs** | Selenium, console, and network logs for the step or for the whole run |
| **Step Settings** | Maximum wait time, prerequisite, whether the step result is ignored in the test case result, and whether visual testing is enabled for the step |
| **Metadata** | Test data and its type, along with the step ID and action |

![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Analysis_Tab_results.png)

Below the two panels, the **Analysis** tab lists the element, element name, run type, action, start time, duration, step level timeout, plan level timeout, error code, error message, test data type, and test data for each side of the comparison. The **Page source** section at the bottom holds the captured HTML for each side as a downloadable file.

On a failed step, the tab opens with the error code for the failure, such as **#NO\_SUCH\_ELEMENT**.

[[info | **NOTE**:]]
| For details on reading the logs and investigating a failure, refer to the [documentation on debugging test case failures](https://testsigma.com/docs/runs/debug-test-case-failures/). For a root cause explanation and suggested fixes, refer to the [documentation on the Analyzer Agent](https://testsigma.com/docs/ai-agents/analyzer/).

---

## **Steps to View Test Machine Results**

1. On the **Run Results** page, select **Test Machines** from the dropdown menu.
   

2. The page displays all test machines included in the test plan.
   <!-- Image Placeholder: All Test Machines -->

3. Click a test machine to expand and view the test suites it contains.
   

[[info | **NOTE**:]]
| To view the test cases that are part of a test machine, go to the **Test Suites** view and apply a **Test Machine** filter. This shows all test cases in the selected test suite and test machine.

---

## **Test Runs in Run Results**

1. From the **Test Runs** panel, select a different run to view its corresponding test run results.
   

2. Click **Rerun** in the top-right corner to rerun the test plan by selecting the appropriate rerun options.
   

[[info | **NOTE**:]]
| 1. Each run ID has a maximum rerun limit of 10. We recommend using reruns wisely.
|
| 2. After you click **Rerun**, the following options appear:
|    - **All Test Cases**: Reruns all the test cases in the selected run.
|    - **All Failed Test Cases**: Reruns all the failed test cases in the selected run.
|    - **Select Cases for Re-Run**: Lets you select the test cases you want to rerun.
|
| 3. Click **Start execution** to rerun the test plan.

---

## **Compare Runs**

Compare two runs of the same test case side by side.

1. On the **Test Case Results** page, click **Compare Runs**.
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Compare_Run_Results.png)

2. Select a run from the list at the top of either panel.
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Compare_Between_Runs.png)
Each panel shows the run's duration, date, step count, and failed count, followed by every step with its own duration.

Comparison also spans the steps on either side of the failure, because the step that reports an error is often not the step that caused it.

[[info | **NOTE**:]]
| The run list includes **Authoring Run**, which holds the values captured when the test case was authored, along with each earlier run identified by its run ID. Every entry shows its run type and its status as **Passed**, **Failed**, or **Healed**, so you can pick the last run that behaved as expected without opening runs one by one.

---

## **Compare a Single Step**

Compare one step against the same step in another run.

1. On the **Analysis** tab, in the **Visual Evidence** section, click **Compare Steps**. The step comparison overlay opens. The step under comparison appears in the breadcrumb.
   
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Compare_Step_Results.png)

2. From the **View** list, select a comparison mode.
   
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Comparison_Mode.png)

   | **Mode** | **What it shows** |
   |---|---|
   | **Compare with Baseline** | The baseline run and the current run side by side |
   | **Overlay Wipe** | Both screenshots in one frame, with a divider to wipe between them |
   | **Current Step Only** | The current run's screenshot on its own |
   | **Element Source** | A diff of the captured page source across the two runs, alongside the locator value for each |

   In **Overlay Wipe**, the capture recorded at authoring time and the capture taken during execution load into a single frame separated by a vertical divider. Drag the handle on the divider to wipe between them. Stacking the two makes a shifted control, a modal that did not close, or a reflowed layout visible at once, rather than something to find by comparing two panels.
   
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Overlay_Wipe.png)

3. Click **Screens** to compare screenshots only, or **Screens + Details** to show the step details beneath each screenshot.

   **Screens + Details** lists the run type, start time, duration, step level timeout, plan level timeout, error code, error message, element name, and locator for each run. Where a value was not captured, the field shows a dash.

   [[info | **NOTE**:]]
   | **Screens + Details** is disabled in **Overlay Wipe**, because that mode renders a single combined frame rather than two panels.

4. To compare a different step, select a step from the **Change Step** list.

   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Change_Step_in_Results.png) 

   Each entry shows the step number, the step name, its duration, and its status, including **Not Executed** for steps the run never reached.

5. Click the download icon to download the comparison artifacts.

[[info | **NOTE**:]]
| The baseline panel defaults to **Authoring Time** and is marked **Recorded**. When a step targets no element, the panel reads "No recorded evidence captured for this step".

---

## **Overview of Tests in Run Results**

1. The **Run Overview** section of the **Run Results** page is dynamic and provides a summary of tests at all levels for the selected run.
   

2. This section displays the **Last Run**, **Test Plan Settings**, and **Accessibility Test Overview**.
   

3. Click **View Runs** to view all runs, **More Settings** to access additional settings, and **View Report** to check the **Accessibility Testing Report**.
   

---

## **Exporting the Test Reports**

1. Click the **Export** icon and select the download format from the dropdown menu.
   

2. For **PDF** format, the **Export PDF** dialog appears. Select the appropriate options and click **Export**.
   
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Export_Results_in_PDF.png)

3. For **JUnit** format, the report is downloaded instantly as an XML file.

4. For **XLSX** format, a downloadable link of the report is sent to your email.

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

## **How Run Results Handle Renamed and Deleted Items**

The **Run Results** page shows the values as they were when the run executed. Renaming or deleting a test plan, test suite, test case, environment, test machine, or test data profile doesn't change what an earlier run displays.

[[info | **NOTE**:]]
| Runs that executed before this release fall back to the current name of each item, and show a hyphen (-) where the item has since been deleted.

---