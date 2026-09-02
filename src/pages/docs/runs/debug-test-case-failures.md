---
title: "Debug Test Case Failures"
metadesc: "How to debug a failed test case in Testsigma | Open the failing step, read its analysis, check its logs, and compare it against an earlier run."
noindex: false
order: 9.71
page_id: "debug-test-case-failures"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Open the Failing Step"
  url: "#open-the-failing-step"
- type: link
  name: "Read the Analysis"
  url: "#read-the-analysis"
- type: link
  name: "Explain the Failure"
  url: "#explain-the-failure"
- type: link
  name: "Check the Logs"
  url: "#check-the-logs"
- type: link
  name: "Check Whether a Step Was Healed"
  url: "#check-whether-a-step-was-healed"
- type: link
  name: "Compare Against an Earlier Run"
  url: "#compare-against-an-earlier-run"
- type: link
  name: "Check What Else the Element Affects"
  url: "#check-what-else-the-element-affects"
- type: link
  name: "Act on the Failure"
  url: "#act-on-the-failure"
- type: link
  name: "Common Causes of Failure"
  url: "#common-causes-of-failure"
---

---

Investigate a failed test case from the **Run Results** page. Open the failing step, read its analysis, check its logs, and compare it against an earlier run. Testsigma captures a screenshot, the element details, and the logs for the step.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. A test plan run or dry run has completed.
> 2. The run contains at least one failed step.

---

## **Open the Failing Step**

1. From the left navigation bar, go to **Run Results** and click the test plan for which you want to check the results.

2. Click the test case you want to investigate.

3. Select the failed step from the step list on the left.
   
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Failed_Step_in_Results.png)

   The list is headed by the step count and the number of failed steps. Each step carries an icon showing whether it passed, failed, or was not executed. Drag the divider between the step list and the details pane to resize either side.

   The step header shows the step number, its duration, its status, and the error message. Click **Read more** to see the full message.

   The details pane on the right carries the **Analysis**, **Locators**, **Logs**, **Step Settings**, and **Metadata** tabs.

[[info | **NOTE**:]]
| The step that reports a failure is not always the step that caused it. Check the steps immediately before it as well.

---

## **Read the Analysis**

The **Analysis** tab opens with the error code for the failure, such as **#NO\_SUCH\_ELEMENT**. Below it, the **Visual Evidence** section places the screenshot captured at authoring time next to the one captured in this run.

![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Analysis_Tab_in_Results.png)

Below the two panels, the tab lists the element, element name, run type, action, start time, duration, step level timeout, plan level timeout, error code, error message, test data type, and test data for each side. Use the icons on a screenshot to expand it or download it.

At the bottom of the tab, the **Page source** section holds the captured HTML for each side. Click the file name to open it, or the download icon to save it.

[[info | **NOTE**:]]
| The authoring panel is marked **Recorded**. When no screenshot exists for a side, the panel reads "No screenshot captured". When a step targets no element, it reads "This step targets no element, so nothing was captured when it was authored".

**Additional Information**: For a root cause explanation and suggested fixes, click **Analyze with Agent** in the action bar at the bottom of the page. Refer to the [documentation on the Analyzer Agent](https://testsigma.com/docs/ai-agents/analyzer/).

---

## **Explain the Failure**

Testsigma can read the step's error, screenshot, page source, and heal attempts, and explain what broke.

1. On the **Analysis** tab, find the **Root cause** card.

2. Click **Explain this failure**.

   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Explain_Failure_in_Results.png)

   The explanation opens with a one-line summary of what failed, such as "Step failed: no Shop Back to School link on Google homepage", followed by the reasoning and a recommended change.

3. Click **Read less** to collapse the explanation, or **Read more** to expand it again.

[[info | **NOTE**:]]
| The **Root cause** card requires Analyzer V2. Without it, the page works as described everywhere else, but the card does not appear and failure analysis is available through **Analyze with Agent** in the action bar instead.

---

## **Check the Logs**

1. Open the **Logs** tab.

2. Select **Selenium**, **Console**, or **Network**.

3. Use the scope list to switch between **This step** and the whole run.

4. Click **Jump to error** to move to the first error in the log.

5. Click the download icon to save the log.

[[info | **NOTE**:]]
| Some logs have no step markers. When that happens, the log shows every entry for the run and displays the message "Not scoped to this step: this log has no step markers, so the whole run is shown".

**Additional Information**: Network logs are captured only when they are switched on for the test machine, and they arrive once the lab finishes uploading them. Until then, the **Network** tab reads "No network log was recorded for this run".

---

## **Check Whether a Step Was Healed**

When auto-healing resolves a locator mid-run, a banner above the step list reports how many steps were healed, and the **Analysis** tab shows a **Healed this step** card with **Approve as Primary** and **Ignore**.

A healed step reports **Passed**, because the step completed. For the full workflow, refer to the [documentation on auto-healing insights](https://testsigma.com/docs/auto-healing/auto-healing-insights/).

---

## **Compare Against an Earlier Run**

Comparing a failing step against an earlier run shows what changed between them. There are two entry points:

- Click **Compare Runs** in the page header to compare the whole test case across two runs, step by step.
- Click **Compare Steps** in the **Visual Evidence** section to compare the current step alone, using the screenshot and element source comparison modes.

Comparison also spans the steps on either side of the failure, because the step that reports an error is often not the step that caused it.

For both workflows, refer to the [documentation on test plan run results](https://testsigma.com/docs/reports/runs/drill-down-reports/).

---

## **Check What Else the Element Affects**

When an element causes a failure, check which other tests depend on it before you fix it.

1. Click **Affected tests** in the step header.

   The **Affected Instances** panel opens, showing the **Test Cases**, **Step Groups**, **Test Suites**, and **Test Plans** that use the same element, each with a count.
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Affected_Artifacts.png)

2. Review each tab to see what is at risk of the same failure.

   When no test uses the element, the panel reads "There are no Test Cases associated with the element".

[[info | **NOTE**:]]
| You can also reach this from the left navigation bar by going to **Elements** and clicking **View Affected Test Cases** for the element.

---

## **Act on the Failure**

Resolve the failure without leaving the results page.

- Click **Analyze with Agent** in the action bar to get the error type, the root cause, and a set of suggestions you can apply as a step update.
- Click **Run using Copilot** in the action bar to rerun the test case interactively.
- Use **Update element** to correct a locator yourself. On the current run side of **Visual Evidence**, the **Element** field carries an edit icon for this.
- Use **Relearn step** to re-capture the step.
- Where auto-healing fired, approve or reject the healed element directly on the first screen.

---

## **Common Causes of Failure**

Test cases commonly fail for these reasons:

- The element or UI identifier changed in the application.
- The application does not load.
- The local internet connection fails.
- The element is unchanged, but navigation to it changed.
- Add-on code does not perform as expected.
- The application under test contains a defect.
- The result is a false positive or false negative.
- An API is down.
- The element locator is incorrect.

---
