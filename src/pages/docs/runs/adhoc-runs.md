---
title: "Dry / Ad-hoc Runs"
metadesc: "How to perform ad-hoc runs for a test case in Testsigma."
noindex: false
order: 9.11
page_id: "Ad-hoc Runs"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to perform ad-hoc runs for a test case in Testsigma"
  url: "#how-to-perform-ad-hoc-runs-for-a-test-case-in-testsigma"
- type: link
  name: "How to edit and run an existing Dry Run"
  url: "#how-to-edit-and-run-an-existing-dry-run"
---

---

Ad-hoc runs are used to verify the correctness of the Test Steps in a Test Case before finalizing the Test Cases for deployment. They are called Ad Hoc runs as they can run at any time you need to verify their correctness.

&emsp;

---
##**Pre-requisites:** 
You should already know how to:
1. [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
   
2. create test steps [using simple English based actions](https://testsigma.com/docs/test-cases/step-types/natural-language/) and [using Test recorder](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/overview/).

&emsp;

---
##**How to perform ad-hoc runs for a test case in Testsigma**
1. Create a test case and write the test steps.
   
2. On the right top corner, click on the “Run” button. This is the first step to start Ad-hoc run.

![The run button on a test case details page in Testsigma](https://docs.testsigma.com/images/adhoc-runs/run-button-test-case-details-page-testsigma.png)

3. On clicking on the button ‘Run’, the ‘Ad-hoc run’ layover appears. In the next steps we will configure this ad-hoc run via this layover.

![adhoc run layover over a test case page in Testsigma](https://docs.testsigma.com/images/adhoc-runs/ad-hoc-run-layover-over-a-test-case-page-testsigma.png)

4. From the Select Test Lab tab, choose the test lab that you want to run the test case on.

[[info | Note:]]
|If test labs aren’t configured, please configure the test labs - Saucelabs, Browserstack, Kobiton, etc. For more information refer to test lab types or choose a local device if you want to run the test on your local machine.

5. Select the appropriate test machine by choosing the below 
&emsp;a. OS 

&emsp;b. OS Version

&emsp;c. Browser

&emsp;d. Browser version

&emsp;e. Resolution

6. Toggle the “Headless Test” button On to run your test on a headless browser.
   
7. In additional settings, configure the following settings if required:
&emsp;a. Page Timeout - How long should the test wait for the page to load

&emsp;b. Element Timeout - How long should the test wait for the element to load

&emsp;c. Environment - Choose the environment from the dropdown

&emsp;d. Screenshot - Choose when screenshots need to be taken


8. Add Desired Capabilities if any. Desired Capabilities are key-value pairs. For example 
 
&emsp;a. platformName: Android 

9. Click on Run Now

The workflow looks like this:

&emsp;
![how to adhoc run a test case in Testsigma](https://docs.testsigma.com/images/adhoc-runs/dryrun_1.gif)

&emsp;
### Dry Run Result
After clicking the “Run Now” button, wait for the test to run. The results will appear on your screen automatically.
![adhoc run result in Testsigma](https://docs.testsigma.com/images/adhoc-runs/dryrun_2.gif)


Below is a gif demonstrating how the step-by-step test case execution would look like: 
![step-by-step adhoc run in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/adhoc-runs/step-by-step-adhoc-run-gif.gif)

&emsp;


### How to edit and run an existing Dry Run

There will be times when you might want to re-run an existing dry run after making some changes to it. In this section, we will discuss how to do it.

1. Go to a test case. The test case  that has existing dry runs.
2. On the Test Case Details page, click on the "Dry Runs" tab. 
3. On the "Dry Runs" Tab, click on one of the existing dry runs.
4. The "Dry Run" Interface would look like the screenshot below:

![Interface for a Dry Run in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/runs/adhoc-runs/dry-run-updated-ui.png)

5. As you would see, there are tabs named "Test Steps(Executed)" and "Test Steps(Current)". 

   The "Test Steps(Executed)" displays test steps that were executed for the existing dry run. The test steps here cannot be edited.

   The "Test Steps(Current)" displays the same test steps as "Test Steps(Executed)"but they can be edited. 

   So, you go to the tab "Test Steps(current)"
6. On the "Test Steps(current)" tab, make the needed edits. Make sure that you save your edits too.
7. Click on the "Run" button on the top right corner of the page. 



