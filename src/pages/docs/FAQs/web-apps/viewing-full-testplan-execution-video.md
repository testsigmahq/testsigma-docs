---
title: "Why Is a Single Video for All Test Cases in a Test Plan Unavailable in Some Cases?"
pagetitle: "Full Test Plan Execution Video: Steps to Access and View"
metadesc: "Viewing the full video of the test plan execution is easy. Re-run your test plan with the reset session disabled to see the complete execution video."
noindex: false
order: 24.18
page_id: "viewing-the-full-video-of-the-test-plan-execution"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Disabling the Reset Session in Parallel Settings"
  url: "#disabling-the-reset-session-in-parallel-settings"
---

---


When you enable the **Reset session for every test case** option in **Parallel Settings**, Testsigma assigns a fresh machine to execute the next queued test case. This process continues until all test case executions are complete. In this case, the complete video of the test plan is unavailable. To capture a single video of the entire test plan execution, you need to disable **Reset session for every test case** option.

---

> ## **Prerequisites**
>
> Before you proceed, ensure you understand the concepts of creating a [Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/), [Test Suite](https://testsigma.com/docs/test-management/test-suites/overview/), and [Test Machine](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Disabling the Reset Session in Parallel Settings**

1. On the **Create** or **Edit Test Plan** page, go to the **Add Test Suites & Link Machine Profiles** tab.

2. If the test machine is already linked, click the **Settings** icon under the **Test Machine** tab. Click the **Link to Test Machine** icon to add a new machine profile. 

3. In the **Edit Test Machine or Device Profile** overlay, locate the checkbox labelled **Reset session for every test case**.

4. Uncheck this box to disable the reset session for all test cases. 

5. Click **Create** or **Update Profile** to save your changes. ![disable reset session for test machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/disabling_reset_session_for_machine.gif)

6. You can now watch the complete video for each test suite under **Run Results > Test Suite > Watch Video**.
   ![Watch Video](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WatchVideo_TestSuiteLevel.png)

---