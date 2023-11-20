---
title: "Drill Down Reports in Testsigma"
metadesc: "Drill-down reports let you access data at all layers. Learn how to use drill-down reports in the test execution results of automated tests in Testsigma"
noindex: false
order: 13.23
page_id: "Drill Down Reports in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "How to use drill-down reports in Testsigma"
  url: "#how-to-use-drill-down-reports-in-testsigma"
- type: link
  name: "Steps to Generate Test Case Reports"
  url: "#steps-to-generate-test-case-reports"
- type: link
  name: "Steps to Generate Test Machine Reports"
  url: "#steps-to-generate-test-machine-reports"
- type: link
  name: "Steps to Generate Test Suite Reports"
  url: "#steps-to-generate-test-suite-reports"
---

---

If the quality of an application is inversely proportional to the number of bugs / technical glitches / performance issues / usability issues, etc, then

&emsp;
   Quality = Customer Satisfaction * ( 1/ bugs ) * (1 / usability issues )

&emsp;
   Quality of an application reduces with more bugs. 

This is where drill-down reports really come in handy. Drill-down reports let you access data at all layers. They help you understand the quality of the application and how your test automation is helping contribute to it. **Drilling down can help you uncover granular details about your testing, such as**

1. Number of test cases failed
2. Why did a specific test fail
3. Number of distinct test suites with bad quality
4. Which test machine is showing more bugs 

Testsigma provides you an easy way to find and understand all this data.

---

## **Prerequisites**
- You should know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case). 

- You should know how to [create a test plan](https://testsigma.com/docs/test-management/test-plans/overview/#steps-to-create-a-test-plan).

---

## **How to use drill-down reports in Testsigma:**

1. Navigate to **Run Results** page.
   ![Run Results page for drill down reports in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/reports/runs/drill-down-reports/run-results-page-drill-down-reports-testsigma.png)

2. Click on a Test Plan Result. The test plan result page will look like this:
   ![Test Plan Run Result Page to Drill Down reports in Testsigma](https://docs.testsigma.com/images/drill-down-reports/test-plan-run-result-page-drill-down-reports-testsigma.png)

3. Click on a test case. OR if you choose Test suites from the drop-down, click on a test suite. This is how results will appear if you choose ‘Test Suite Results. 
   ![Test Suite Results Dropdown highlighted to help drill down reports in Testsigma](https://docs.testsigma.com/images/drill-down-reports/test-suite-results-dropdown-highlighted-testsigma.png)

4. The right side of the screen shows the test results for a specific test suite or a test machine. 

5. Choose the different build numbers on the left side, under Run History, to view how the results have changed over time

See the steps above in action in the gif below:

![gif to help drill down reports in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/reports/runs/drill-down-reports/gif-to-help-drill-down-reports-in-testsigma.gif)



---


## **Steps to Generate Test Case Reports**
1. On your dashboard click on **Run Results**. 
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcrrresults.png)

2. Click anywhere on the test plan result for which you need the report.
![Test Plan Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcrrrtp.png)

3. Results are available in **Test Case**, **Test Suite**, and **Test Plan** level. Click on **Test Case** to view the results grouped by **Test Cases**.
![Available Reports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcrartctstp.png)

[[info | **NOTE**:]]
| You can also download the report in Junit and MS Excel Sheet by following the steps below:
| 1. Click on the Export icon. 
|![Export Icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcrdicon.png)
| 2. Select the format from the drop down in which you want to export. 
|![Export Format](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcrdineju.png)

Here’s a quick GIF demonstrating how to generate Test Case Reports.
![Test Case Reports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Tcreport.gif)

---


## **Steps to Generate Test Machine Reports**

1. Select the project for which you need the reports
2. Navigate to **Test Development > Run Results**, you should see a page like this:

   ![Run Results page to get test machine reports in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/reports/runs/test-machine-reports/run-results-page-to-get-test-machine-reports-testsigma.png)

3. Click on the Test Plan for which you need the report, you should see a test runs page like this:

   ![test run page to get test machine reports in Testsigma](https://docs.testsigma.com/images/test-machine-reports/test-run-page-to-get-test-machine-reports-in-testsigma.png)

4. In the drop-down menu in the middle column, choose “Test Machine Results”. The drop-down is highlighted below for your reference:
   ![test machine results dropdown highlighted in testsigma](https://docs.testsigma.com/images/test-machine-reports/test-machine-results-dropdown-highlighted-testsigma.png)

5. You will be able to view the results grouped by Test Machines.
 

   There are multiple actions that you can take on these results. These actions can be initiated via the buttons available on the top right column of the results column:
   ![Other options to filter and search test machine results in Testsigma](https://docs.testsigma.com/images/test-machine-reports/test-machine-results-other-options-to-filter-search-testsigma.png)

  These actions are:

  1. **Search the results:** the run results can be filtered by name here
  2. **Rerun the failed test cases or rerun all test cases:** You can click on any of the options to initiate reruns of the test cases accordingly. Read more about [test reruns](https://testsigma.com/docs/reports/runs/rerun/).
  3. **Export the results:** Here, you can export the run results in the form of xls or xml. Read more about [exporting as xls](https://testsigma.com/docs/reports/export-reports/export-report-xls/) and [exporting as Junit](https://testsigma.com/docs/reports/export-reports/export-reports-junit/).
  4. **Filter the results:** You can filter the results by different criteria that appear on click on the filter button, read more about it here.
  5. **Display details of the result:** There is a toggle button in the end for more run details.

---


## **Steps to generate Test Suite Reports**

1. Select the project for which you need the reports
2. Navigate to **Test Development > Run Results**.
   ![Run Results page to get test suite reports in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/reports/runs/test-suite-reports/run-results-page-to-get-test-suite-reports-testsigma.png)

3. Click on the **Test Plan** for which you need the report.

   ![test run page to get test suite reports in Testsigma](https://docs.testsigma.com/images/test-suite-reports/test-run-page-to-get-test-suite-reports-in-testsigma.png)

4. From the drop-down menu, click on **Test Suite Results**. The drop-down is also highlighted below for your reference:

   ![test suite results dropdown highlighted in testsigma](https://docs.testsigma.com/images/test-suite-reports/test-suite-results-dropdown-highlighted-testsigma.png)

5. You will be able to view the results grouped by Test Suites.


   There are multiple actions that you can take on these results. These actions can be initiated via the buttons available on the top right column of the results column as also shown in the screenshot below:

   ![Other options to filter and search test suite results in Testsigma](https://docs.testsigma.com/images/test-suite-reports/test-suite-results-other-options-to-filter-search-testsigma.png)

---

## **These actions are:**
1. **Search the results:** the run results can be filtered by name here
2. **Rerun the failed test cases or rerun all test cases:** You can click on any of the options to initiate reruns of the test cases accordingly. Read more about [test reruns](https://testsigma.com/docs/reports/runs/rerun/).
3. **Export the results:** Here, you can export the run results in the form of xls or xml. Read more about [exporting as xls](https://testsigma.com/docs/reports/export-reports/export-report-xls/) and [exporting as xml](https://testsigma.com/docs/reports/export-reports/export-reports-junit/).
4. **Filter the results:** You can filter the results by different criteria that appear on click on the filter button, read more about it [here](https://testsigma.com/docs/reports/runs/filter-custom-reports/).
5. **Display details of the result:** There is a toggle button in the end for more run details.

---