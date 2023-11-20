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
  name: "What can you do on the Run Results page"
  url: "#what-can-you-do-on-the-run-results-page"
- type: link
  name: "Steps to Rerun from run results"
  url: "#steps-to-rerun-from-run-results"
---

---

The purpose of test automation is to be able to quickly understand the state of quality in your application. To understand the quality you need to understand the results of your test execution and where test reports come in.

In Testsigma, these reports can be viewed directly in the Testsigma application or can be downloaded. Reports are automatically created and are useful for debugging failing tests and helping managers understand the state of quality of the application under test (AUT). 

Testsigma provides a central repository for all the test results. 
Simply navigate to the **Test Development > Run Results** page.


---

## **What can you do on the Run Results page**

1. Observe results for all Test Plan executions: Search, Sort & Filter

    a. **Search option on the top right:**  To search for a run result by name, use this. The search will filter all the run results names that contain your search query.

    b. **Sort:** Click on the sort button — the button next to the search button on the top right to sort the list of Run Results according to your preference.

![Sort option on Run Results page on Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/reports/runs/overview/sort-option-run-results-page-testsigma-updated.png)

You can sort the list Ascending or Descending based on the below fields

- Name
  
- Test Lab/Type
  
- Created Date
  
- Updated Date

- Last Run

<br>


  c. **Filter:** Click on the filter button - the button next to sort button on the top right. A 'Filters' layover, as shown in the screenshot below, appears. 

![Filters Layover in Run Results Page in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/reports/runs/overview/filters-layover-run-results-page-testsigma-updated.png)


You can filter the Test Plans based on the below options:

- Name

- Created By

- Status

- Created Date

- Updated Date

- Last Run Date

- Labels 


Testers may need to rerun failed Test Cases, or all Test Cases from a particular Test Run Result, after a hotfix or a change in environment. Here's how you can Rerun Test Cases from Test Run Results in Testsigma.

---

## **Steps to Rerun from run results**
1. Navigate to **Test Development > Run Results**.
![Navigate to Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navigaterunres.png)
2. Hover over to Test Plan for which you need the report and click on **View Reports**.
![View Reports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/viewreports.png)
3. Click on **Rerun**.
![Rerun](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickonrerun.png)
4. On the **Re-run configuration** prompt, you will see the following options:
    - **All Test Cases:** This will rerun all the test cases in the selected run.
    - **All Failed Test Cases:** This will rerun all the failed test cases in the selected run. 
    - **Select Cases for Re-Run:** This will allow you to select the test cases you want to rerun.
        - Click on **Select Cases for Re-Run**.
        ![Cases to rerun](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/selectcasesforrerun.png)
        -  From **Select Cases for Re-Run** prompt,
            - Select all test cases you want to Re-run.
            ![Test Cases to rerun](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcprompt.png)
            - If there are data-driven test cases, you can also select the iterations you want to run in that specific case.
            ![Select Iterations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/iterations.png)

6. Click on **Start** to rerun.
![Click on Start](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/start.png)

---