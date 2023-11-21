---
title: "Test Runs - An Overview"
metadesc: "To understand the quality you need to understand the results of your test execution. Here is a overview of test run results in Testsigma."
noindex: false
order: 13.21
page_id: "Test Runs - An Overview"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Possible Actions on Run Results Page"
  url: "#possible-actions-on-run-results-page"
- type: link
  name: "Steps to Rerun From Run Results"
  url: "#steps-to-rerun-from-run-results"
---

---

The purpose of test automation is to be able to understand the state of quality in your application quickly. To understand the quality, you need to understand the results of your test execution, and that's where test reports come in.

In Testsigma, you can view reports directly in the application. Reports are automatically created and help debug failing tests and help managers understand the state of quality of the application under test (AUT). This article discusses the overview of run results page in Testsigma.

---

## **Possible Actions on Run Results Page**
The following are the actions possible on **Run Results** page: 


  - **Search**:  To search for a run result by name, use this. The search will filter all the run results names that contain your search query.
  ![Search](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrsrch.png)

  - **Sort by:** Click on the **Sort by** button to sort the list of Run Results according to your preference. You can sort the list based on the **Title**, **Created Date**, **Updated Date**, **Last Run**, **Ascending** or **Descending**.
  ![Sort by](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrsortby.png)

  - **Filter:** Click on **Show Filters** to add filter and sort results according to your preference. You can add filters based on the options **Created By**, **Last Run Date**, **Created Date**, **Updated Date**, **Last Run Date**, and **Labels**.
  ![Filter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrfilters.png)


Here is a quick GIF demonstrating actions possible on run results page.
![Actions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/actionsontcrpage.gif)

Testers may need to rerun failed test cases, or all test cases from a particular test run result, after a hotfix or a change in environment. Follow the steps below to rerun test cases from test run results in Testsigma.

---

## **Steps to Rerun from Run Results**

1. Navigate to **Run Results** page and click on a **Test Plan Result**.
![Test Plan Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddrrnav.png)


2. From results page, click on **Rerun**.
![Rerun](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rrtresults.png)


3. On the **Re-run options** prompt, you will see the following options:
![Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rrtrstcs.png)
    - **All Test Cases:** This will rerun all the test cases in the selected run.
    - **All Failed Test Cases:** This will rerun all the failed test cases in the selected run. 
    - **Select Cases for Re-Run:** This will allow you to select the test cases you want to rerun.

4. Choose the option and click on **Start execution** to rerun.
![Start execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rrstexec.png)

Here is a quick GIF demonstrating how to rerun tests from run results in Testsigma.
![Rerun](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reruntp.gif)

---