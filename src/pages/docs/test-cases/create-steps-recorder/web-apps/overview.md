---
title: "Recording Test Steps: An Overview"
meta_desc: "How to record test steps using Testsigma’s step recorder chrome extension."
order: 4.511
page_id: "Recording Test Steps: An Overview"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Recording test steps using Testsigma’s step recorder chrome extension"
  url: "#recording-test-steps-using-testsigmas-step-recorder-chrome-extension"
---

---

Testsigma Step Recorder chrome extension lets you *generate* automated test scripts from a series of manual actions you take to play out a test scenario. The automated test scripts can then be run on all the available Web Browsers. 

&emsp;

---
##**Prerequisites:**

This document will take you through the process of creating test steps using the Testsigma Step Recorder. You should already know how-to, or have:

 1. [Testsigma step recorder chrome extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).
 2. [create a Test case.](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)

&emsp;

---
##**Recording test steps using Test recorder**
 
 1. Create a new Test Case in your Testsigma project.
 2. Enter the Application URL that you want to automate and click on the 'Create’ button. 
(This will add ‘Navigate to’ as the first test step.)

![test case page with navigate step in Testsigma](https://docs.testsigma.com/images/web-apps/test-case-page-with-navigate-step-testsigma.png)

 3. Click on the Record button on the top right corner to start recording.

![record button on test case details page in Testsigma](https://docs.testsigma.com/images/web-apps/record-button-test-case-details-page-testsigma.png)

 &emsp;

A new Chrome window will open on your workstation. You are ready to record the Test Steps now.

[[info | Note:]]
| Please wait a few seconds until the Web Page is fully loaded so that the extension can profile the page in background.
 
 1. Once the first Web page is fully loaded, start interacting and performing actions on the page.
 
 2. Highlight the required element by hovering over the element first.
 
 3. Once the correct element is highlighted, perform the action you want to record. 
 
 4. Repeat steps 2 and 3 for all the actions you want to record. The steps performed by you will be recorded in the background and added to the Test Case in Testsigma.
You may perform actions like Click on the element, Type value into the element e.t.c. 

![hover over an element to record it in Testsigma via test step recorder](https://docs.testsigma.com/images/web-apps/hover-over-element-to-record-testsigma.png)

 5. Once the required actions are complete, switch back to the Testsigma Test Case page to see the recorded steps.

![sample test case via test step recorder in Testsigma](https://docs.testsigma.com/images/web-apps/test-step-recorder-sample-test-case-testsigma.png)

 6. Rename the Elements if needed.
 
 7. Perform a dry run to check the correctness of the Test Steps and modify or delete unwanted steps if any.
[How to perform Dry Run to verify Test Case is correct](https://testsigma.com/docs/runs/dry-runs-on-local-devices/)
 
 8. Check the Test Results to find the issues, fix the issues, and repeat until the Test Case is passed.
 
 9. Finally, add Assertions or verification steps as required.


