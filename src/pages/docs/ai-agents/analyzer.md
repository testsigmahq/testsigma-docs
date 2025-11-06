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
  name: "Next Steps"
  url: "#next-steps"
---

---

The Analyzer Agent in Testsigma is your intelligent assistant that autonomously reviews test executions. With just a single click, Analyzer Agent highlights the error type, pinpoints the root cause, and provides visual evidence captured during execution. It also suggests targeted fixes, ranging from code-level checks to configuration adjustments. This article discusses the Analyzer Agent in Testsigma. 

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that test plans have been executed and at least one test case includes failed steps.

---

## **Steps to Analyze Step Failures**

1. From the left navigation bar, go to **Run Results**.

2. Click the test plan that contains failed test steps.

3. Click on the test case with failures and select the failed test step.

4. In the **Step Details** section, click **Analyze with Agent**.
   ![Analyze with Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Analyze_Agent.png)

5. Wait for the **Analyzer Agent** to complete its review.

6. The overlay will display the **Error Type, Root Cause, Visual Evidence**, and **Suggestions**.
   ![Details from Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Details_from_AAgent.png)

---

## **Next Steps**

1. Click **Deep Analysis** for additional diagnostics.

2. Click **Report Bug** to log the issue.

3. Click **Fix using Live Editor** to resolve the issue in live.

   ![Next Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Next_Steps_AAgent.png)
---