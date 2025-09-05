---
title: "Bug Reporter Agent in Testsigma"
page_title: "Bug Reporter Agent in Testsigma"
metadesc: "The Bug Reporter Agent in Testsigma streamlines bug reporting by allowing users to log bugs directly from the Analyzer Agent panel | Learn about Bug Reporter in Testsigma"
noindex: false
order: 4.7466
page_id: "bug-reporter-agent-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Interactive Demo"
  url: "#interactive-demo"
- type: link
  name: "Steps to Import Test Cases"
  url: "#steps-to-import-test-cases"
---

---

The Bug Reporter Agent in Testsigma streamlines bug reporting by allowing users to log bugs directly from the Analyzer Agent panel. It automatically captures necessary data like error type, root cause, recommended fixes, and visual evidence and attaches them to a new bug report. This eliminates manual effort in reproducing failures and enhances collaboration between QA and development teams by ensuring each issue is logged with complete and actionable context. This article discusses the Bug Reporter Agent in Testsigma. 

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure the Analyzer Agent has reviewed at least one failed test step and a bug tracking tool is integrated with Testsigma.

---

## **Steps to Report a Bug**

1. From the left navigation bar, go to **Run Results**.
   ![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Run_Results_Dashboard.png)

2. Open the test plan that contains failed test cases.

3. Select a test case with a failed step and click the step to open its details.

4. In the **Step Details** panel, click **Analyze with Agent**, and wait for the analysis to complete.
   ![Analyze with Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Analyze_Agent.png)

5. In the **Analyzer Agent** overlay, click **Report Bug**.
   ![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/ReportBug_Atto.png)

6. On the **QA Agent** overlay, select a bug tracking tool.
   ![Select Tool](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/QA_Agent_Tools.png)

7. Select **Project**, **Issue Type** and review the **Description**.
   ![Bug Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Bug_Details.png)
   
8. Click **Report Bug**. 
   ![Report Bug Button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Atto_Testsigma/Report_Bug_From_Atto.png) 

9.  The issue will be created in Jira with all the details.

---


