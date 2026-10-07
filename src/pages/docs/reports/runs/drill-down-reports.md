---
title: "Test Plan Run Results in Testsigma"
metadesc: "View and download reports from the Run Results page in Testsigma | Drill into results at the test case, suite, and machine level, read step details, and compare runs."
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
  name: "Steps to View Test Machine Results"
  url: "#steps-to-view-test-machine-results"
- type: link
  name: "View a Test Case Run in Progress"
  url: "#view-a-test-case-run-in-progress"
- type: link
  name: "Step Details Panels"
  url: "#step-details-panels"
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

View and download reports from the **Run Results** page. The page presents results at the test case, test suite, and test machine level, and shows the count of passed and failed tests along with the reason for each failure. Drill into a single step to read its details and errors, check its logs, and compare it against an earlier run.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. You have referred to the [documentation on creating test plans](https://testsigma.com/docs/test-plans/overview/).
> 2. A test plan has completed at least one run.

---

## **Steps to View Test Suite Results**

1. From the left navigation bar, go to **Run Results** and click the test plan for which you want to check the results.
   

2. Results open at the test suite level by default.
   ![Test Suite Level Results](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Test_Suite_Level_Results.png)

3. Expand a test suite to check the test case results inside it.
   

4. The parallel indicators on each row show how many test suites run in parallel, and how many test cases run in parallel within each suite.
   

---

## **Steps to View Test Case Results**

1. On the **Run Results** page, select **Test Cases** from the dropdown menu.


2. The page displays all test cases from all test suites.


3. Hover over a failed test case to view a brief description of the reason for failure.


4. Click a test case to view its detailed results.

5. On the **Test Case Results** page, the step list appears on the left, headed by the step count. Select a step to open its details on the right.
   ![Results Divider](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Results_Divider.png)

   Each step in the list shows its status icon. A healed step also shows the auto-heal icon at the end of its row.

   [[info | **NOTE**:]]
   | When a run contains healed steps, a banner above the step list shows how many steps were auto-healed. Use the thumbs up and thumbs down icons on the banner to rate the heal.

6. Review the step details on the right.

   The header above the step list shows the total run duration, the browser version, and the operating system version. The step header shows the step status, start time, duration, step number, and step action.

   The **THIS RUN** section shows the screenshot captured for the step. Click the expand icon to view it full size, or the download icon to save it. Below the screenshot, the step details show:

   | **Field** | **What it shows** |
   |---|---|
   | **Element** | The element the step targets. Steps without an element read "This step targets no element". |
   | **Locator** | The locator type and value used for the element |
   | **Run Type** | The type of run that produced this result |
   | **Test data type** and **Test data** | The data type and the value passed to the step |
   | **Start time** and **Duration** | When the step started and how long it ran |
   | **Step level timeout** and **Plan level timeout** | The wait limits applied to the step |
   | **Error code** and **Error message** | The error raised during execution, if any |

   [[info | **NOTE**:]]
   | For a failed step, the **ERROR** and **ANALYZER VERDICT** sections appear above **THIS RUN**. For details, refer to the [documentation on debugging test case failures](https://testsigma.com/docs/runs/debug-test-case-failures/).

7. Click **Affected tests** to see what else depends on the element this step uses. The **Affected Instances** panel opens with tabs for **Test Cases**, **Step Groups**, **Test Suites**, and **Test Plans**, each with its count.

8. Click **More details** to open **Test Case Overview**, which shows the step breakdown across **Passed**, **Failed**, **Not Executed**, and **Stopped**, the run message, and **Machine Details**.

---

## **Steps to View Test Machine Results**

1. On the **Run Results** page, select **Test Machines** from the dropdown menu.

2. The page displays all test machines included in the test plan.

3. Click a test machine to expand and view the test suites it contains.
   

[[info | **NOTE**:]]
| To view the test cases that are part of a test machine, go to the **Test Suites** view and apply a **Test Machine** filter. This shows all test cases in the selected test suite and test machine.


---

## **Step Details Panels**

The icons in the step header open side panels with more information about the selected step.

| **Panel** | **What it contains** |
|---|---|
| **1. Locators** | The locator search for a healed step. Appears only on healed steps. For details, refer to the [documentation on auto-healing insights](https://testsigma.com/docs/auto-healing/auto-healing-insights/). |
| **2. Logs** | Console and network logs, for the step or a wider scope, with a download option |
| **3. Step Settings** | Maximum wait time, prerequisite, and whether the step stops the test case on failure, is ignored in the test case result, or uses visual testing, Smart Execution, or accessibility testing |
| **4. Metadata** | The step's test data and type, its ID and action, whether it uses a password, whether it was migrated, any additional data, and its step type and priority |

![Step Details Panel](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Step_Details_Panels.png)

Click the close icon to return to the step details.

---

## **Test Runs in Run Results**

1. From the **Test Runs** panel, select a run to view its test run results.

2. Click **Rerun** in the top-right corner.
   ![Rerun](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Rerun_from_Results.png)

3. Select a rerun option:
   - **All Test Cases**: Reruns all the test cases in the selected run.
   - **All Failed Test Cases**: Reruns only the test cases that failed in the selected run.
   - **Select Cases for Re-Run**: Reruns only the test cases you select.
   ![Rerun Options](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Rerun_Options.png)
   

4. Click **Start execution**.

[[info | **NOTE**:]]
| Each run ID has a maximum rerun limit of 10.

[[info | **NOTE**:]]
| When a [test suite](https://testsigma.com/docs/test-suites/overview/#setting-pre-requisite-rerun-options) or [test machine](https://testsigma.com/docs/test-plans/manage-test-machines/#setting-pre-requisite-rerun-options-for-a-test-machine) has a prerequisite, its **Rerun options** setting decides what happens to the prerequisite during a rerun. With **Always run Pre-Requisite**, the prerequisite runs again in full before the failed test cases. With **Only execute failed Pre-Requisite iteration(s)**, only the prerequisite iterations that failed run again, so passed test cases aren't re-executed.

---

## **Compare Runs**

Compare two runs of the same test case side by side.

1. On the **Test Case Results** page, click **Compare Runs**.
   ![Compare Runs](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Compare_Run_Results.png)

2. Select a run from the list at the top of either panel.
   ![Compare Between Runs](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Compare_Between_Runs.png)

   Each panel shows the run's duration, date, step count, and failed count, followed by every step with its own duration.

[[info | **NOTE**:]]
| The run list includes **Authoring Run**, which holds the values captured when the test case was authored, along with each earlier run identified by its run ID. Every entry shows its run type and its status as **Passed**, **Failed**, or **Healed**, so you can pick the last run that behaved as expected without opening runs one by one.

---

## **Compare a Single Step**

Compare one step against the same step in another run.

1. In the **THIS RUN** section of the step, click **Compare Steps**. The step comparison overlay opens, with the step under comparison in the breadcrumb.
   ![Compare Step Results](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Compare_Step_Results.png)

   The left panel defaults to **Authoring Time**, and the right panel shows the current run with its date and time and its status, such as **Passed** or **Healed**. To change the comparison, select a different run from the list at the top of either panel.

2. From the **View** list, select a comparison mode.
   
   ![Comparison Mode](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Comparison_Mode.png)

   | **Mode** | **What it shows** |
   |---|---|
   | **Compare with Baseline** | The baseline run and the current run side by side |
   | **Overlay Wipe** | Both screenshots in one frame, with a divider to wipe between them |
   | **Current Step Only** | The current run's screenshot on its own |
   | **Element Source** | A diff of the captured page source across the two runs, alongside the locator value for each |

   In **Overlay Wipe**, the capture recorded at authoring time and the capture taken during execution load into a single frame separated by a vertical divider. Drag the handle on the divider to wipe between them.
   
   ![Overlay and Wipe](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Overlay_Wipe.png)

3. Click **Screens** to compare screenshots only, or **Screens + Details** to show the step details beneath each screenshot.

   **Screens + Details** lists the run type, start time, duration, step level timeout, plan level timeout, error code, error message, element name, and locator for each run. Where a value was not captured, the field shows a dash.

   [[info | **NOTE**:]]
   | **Screens + Details** is disabled in **Overlay Wipe**, because that mode renders a single combined frame rather than two panels.

4. To compare a different step, select a step from the **Change Step** list.

   ![Change Step in Results](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Change_Step_in_Results.png) 

   Each entry shows the step number, the step name, its duration, and its status, including **Not Executed** for steps the run never reached.

5. Click the download icon on a panel to save that screenshot, or the download icon at the top right to save the full comparison.

[[info | **NOTE**:]]
| When a step targets no element, the left panel reads "No recorded evidence captured for this step".

---

## **Overview of Tests in Run Results**

1. The **Run Overview** section of the **Run Results** page is dynamic and provides a summary of tests at all levels for the selected run.
   

2. This section displays the **Last Run**, **Test Plan Settings**, and **Accessibility Test Overview**.
   

3. Click **View Runs** to view all runs, **More Settings** to access additional settings, and **View Report** to check the **Accessibility Testing Report**.
   

---

## **Exporting the Test Reports**

1. Click the **Export** icon and select the download format from the dropdown menu.
   

2. For **PDF** format, the **Export PDF** dialog appears. Select the appropriate options and click **Export**.
   
   ![Export Results in PDF](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Export_Results_in_PDF.png)

3. For **JUnit** format, the report is downloaded instantly as an XML file.

4. For **XLSX** format, a download link to the report is sent to your email.

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
