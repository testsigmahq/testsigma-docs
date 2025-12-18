---
title: "Analyzer Agent in Testsigma"
page_title: "Analyzer Agent in Testsigma"
metadesc: "The Analyzer Agent in Testsigma is your intelligent assistant that autonomously reviews test executions | This article discusses the Analyzer Agent in Testsigma"
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

The Analyzer Agent in Testsigma analyzes failed test steps and provides actionable insights. It identifies the error type, determines the root cause, provides visual evidence captured during execution, and suggests possible fixes. This article discusses how to analyze step failures and take action using the Analyzer Agent.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. At least one test plan has been executed.
> 2. The test plan contains failed test cases.


---

## **Steps to Analyze Step Failures**

1. From the left navigation bar, click **Run Results**.
   ![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Nav_Run_Results_from_Dashboard.png)

2. Select the test plan that contains failed test steps.

3. Open the test case with failures and select the failed test step.

4. In the **Step Details** panel, click **Analyze with Agent**. This will open the **Analyzer Agent** overlay. 
   ![Analyze with Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Analyze_with_Agent_from_Results.png)

5. Wait for the **Analyzer Agent** to complete the analysis.

6. Review the analysis in **Analyzer Agent** overlay, which displays:
   ![Analysis](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Analysis_from_Analyzer_Agent.png)
   - **Error Type**: Displays the category of failure identified during test execution.
   - **Root Cause**: Describes the underlying reason for the failure based on execution analysis.
   - **Visual Evidence**: Displays screenshots captured during recording and execution to support failure analysis.
   - **Suggested Fixes**: Displays recommended actions to resolve the failed test step.

---

## **Apply Fix Using Analyzer Agent**

1. From the **Analyzer Agent** overlay, select the fix you want to apply.
   ![Select Fix](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Fix_Option.png)

2. Click **Apply Fix**.
   ![Apply Fix](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Apply_fix_from_Agent_Suggestion.png)

3. Wait for the **Analyzer Agent** to generate the required fix.

4. Click **Add Step**, **Update Step**, or **Update Step Settings**, as suggested by the **Analyzer Agent**.
   ![Update as per suggestion](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_Add_Step_Setting.png)

5. Verify that the changes are applied to the test step.
   ![Verify the changes](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Verify_the_Updated_Test_Step_from_Atto.png)

6. Rerun the test plan to validate the fix.

---

## **Report a Bug Using Analyzer Agent**

1. From the **Analyzer Agent** overlay, click **Report Bug**.
   ![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Report_Bug_From_Agent.png)

2. Select the bug tracking application from **QA Agent** overlay.
   ![Select Bug Tracking App](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Bug_Tracking_App_from_Overlay.png)

3. Review the prefilled bug details, such as **Team**, **Project**, and **Title**.
   ![Review Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Review_Prefilled_Bug_Details.png)

   > The fields displayed vary based on the selected bug tracking tool.

4. Click **Report Bug**.
   ![Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Report_Bug_Button_QA_Agent.png)

[[info | **NOTE**:]]
| To link the failure to an existing issue, click **Link to Issue**, search for the issue in the selected bug tracking application, and then click **Link to Ticket**.

---