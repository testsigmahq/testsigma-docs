---
title: "Dry / Ad-hoc Runs"
metadesc: "How to perform ad-hoc runs for a test case in Testsigma."
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
---

---

Ad-hoc runs are used to verify the correctness of the Test Steps in a Test Case before finalizing the Test Cases for deployment. They are called Ad Hoc runs as they can run at any time you need to verify their correctness.

&emsp;

---
##**Pre-requisites:** 
You should already know how to:
1. [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
   
2. create test steps [using NLP](https://testsigma.com/docs/test-cases/step-types/natural-language/) and [using Testsigma Test recorder](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/overview/).

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

&emsp;
![adhoc run result in Testsigma](https://docs.testsigma.com/images/adhoc-runs/dryrun_2.gif)



