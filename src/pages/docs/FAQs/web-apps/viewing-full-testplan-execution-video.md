---
title: "Viewing the Full Video of the Test Plan Execution"
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
  name: "Understanding the Reset Session Feature"
  url: "#understanding-the-reset-session-feature"
- type: link
  name: "Disabling the Reset Session for every test case"
  url: "#disabling-the-reset-session-for-every-test-case"
- type: link
  name: "Viewing the Full Execution Video"
  url: "#viewing-the-full-execution-video"
---

---

You might face an issue where you can only view the video for individual test cases rather than the entire test plan. Enabling the reset session feature for each test machine causes the video recording to stop after each test case. This documentation will guide you through resolving this issue.

---

## **Prerequisites**

Before you proceed, ensure you understand the concepts of creating a [Test Plan](https://testsigma.com/docs/test-management/test-plans/overview/), [Test Suite](https://testsigma.com/docs/test-management/test-suites/overview/), and [Test Machine](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Understanding the Reset Session Feature**

- The **Reset Session** feature resets the environment before each test case runs, ensuring that each test starts fresh.
- However, this action causes the video recording to stop and restart with each test case, resulting in separate videos for each test instead of one complete video for the entire test plan. 
- As a result, you only see individual test case videos rather than a full video of the whole test plan execution.

---

## **Disabling the Reset Session for every test case**

1. Navigate to **Test Plans** and create a new test plan or open an existing one.
2. On the **Create** or **Edit Test Plan** page, go to the **Add Test Suites & Link Machine Profiles** tab.
3. If the test machine is already linked, click the **Settings** icon under the **Test Machine** tab. Click the **Link to Test Machine** icon to add a new machine profile. 
4. In the **Edit Test Machine or Device Profile** overlay, locate the checkbox labelled **Reset session for every test case**.
5. Uncheck this box to disable the reset session for all test cases. 
6. Click **Create** or **Update Profile** to save your changes. ![disable reset session for test machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/disabling_reset_session_for_machine.gif)

---

## **Viewing the Full Execution Video**

1. **Re-run** the test plan with the reset session feature turned off. Ensure the test plan is executed.
2. After the execution, go to the **Run Result** section and open Test Run to view the video.
3. Click on the **Test Machines** tab and then click **Play Video** to watch the full test plan execution video as a single file. ![viewing full execution video](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/viewing_full_execution_video.gif)

---

