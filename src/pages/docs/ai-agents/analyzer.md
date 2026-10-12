---
title: "Analyzer Agent in Testsigma"
page_title: "Analyzer Agent in Testsigma"
metadesc: "The Analyzer Agent in Testsigma analyzes a failed test step and returns the error type, root cause, visual evidence, and suggestions | This article discusses the Analyzer Agent in Testsigma"
noindex: false
order: 4.815
page_id: "analyzer-agent-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Analyze Step Failures"
  url: "#steps-to-analyze-step-failures"
- type: link
  name: "Apply Fix Using Analyzer Agent"
  url: "#apply-fix-using-analyzer-agent"
- type: link
  name: "Report a Bug Using Analyzer Agent"
  url: "#report-a-bug-using-analyzer-agent"
---

---

The Analyzer Agent analyzes a failed test step and returns the error type, the root cause, the visual evidence captured during execution, and a set of suggestions. Apply a suggestion to update the step, or report the failure to your bug tracking tool, without leaving the results page.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. At least one test plan or dry run has been executed.
> 2. The run contains a failed test step.

---

## **Steps to Analyze Step Failures**

1. From the left navigation bar, click **Run Results**.

2. Select the run that contains failed test steps.

3. Click the test case with failures.

4. On the **Test Case Results** page, select the failed step.

   The **ANALYZER VERDICT** section on the step already shows a short analysis of the failure. Use the Analyzer Agent for suggested fixes you can apply, follow-up questions, and bug reports. For details on the verdict, refer to the [documentation on debugging test case failures](https://testsigma.com/docs/runs/debug-test-case-failures/).

5. Click **Analyze with Agent** in the action bar at the bottom of the page.
   ![Analyze with Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Analyze_with_Agent_Results_2.png)

   The **Analyzer with Atto** panel opens and reads "Analyzing step failure..." while it runs.

6. Review the analysis.
   ![Anayzer Analysis](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Anayzer_Analysis.png)

   | **Section** | **What it shows** |
   |---|---|
   | **Error Type** | The failure type identified during execution |
   | **Root Cause** | Why the step failed |
   | **Visual Evidence** | Screenshots **At the time of Recording** and **At the time of Execution**. Only the execution screenshot appears when no recording screenshot exists. |
   | **Suggestions** | Numbered fixes you can apply to the step |

[[info | **NOTE**:]]
| To ask a follow-up question about the failure, enter it in **Debug with Atto** and click **Analyze**.

---

## **Apply Fix Using Analyzer Agent**

1. In the **Suggestions** list, select one suggestion. **Apply Fix** stays disabled until you select one.

2. Click **Apply Fix**. Atto returns an **Add/Update Step** card. 

3. Click **Add/Update Step**.
   ![Add Step](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Apply_Fix_Update_Step.png)
   In the step list, the updated step appears as an extra row below the original steps, marked with the Analyzer icon. The current result still shows the original step as failed, because the change applies from the next run.

4. Re-run the test to confirm the fix.
   - For a test plan run, click the run number in the breadcrumb to return to **Run Results**, then click **Rerun**.
   - For a dry run, click **Re-Run** in the page header.

   The next run uses the updated step.

---

## **Report a Bug Using Analyzer Agent**

1. In the **Analyzer with Atto** panel, click **Report Bug**. The **QA Agent** panel opens.

2. Select your bug tracking tool from the dropdown at the top right.
   ![](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Bug_Reporting_Tools.png)

3. Do one of the following:
   - To raise a new issue, open the **Create New** tab, review the prefilled details, and click **Report Bug**.
   - To attach the failure to an issue that already exists, open the **Link To Issue** tab, search for the issue, and click **Link To Ticket**.

[[info | **NOTE**:]]
| The fields displayed vary based on the selected bug tracking tool.

> <p class="additional-info">Additional Information</p>
>
> If the tool returns no projects, check that the credentials configured for it have access to the projects you expect. For Jira, the panel reads "For given JIRA Credentials, the projects list is empty. Please make sure it has the right access to required projects on JIRA".

---
