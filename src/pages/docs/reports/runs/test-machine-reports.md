---
title: "Test Machine Reports in Testsigma"
metadesc: "How to view test run results by the test machines that the test cases were executed on in Testsigma."
order: 13.24
page_id: "Test Machine Reports in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to get a Test Machine Report"
  url: "#steps-to-get-a-test-machine-report"
- type: link
  name: "How to generate Test Machine Reports:"
  url: "#how-to-generate-test-machine-reports"
---

If you run your tests on multiple test machines/devices of different configurations to test for compatibility across browsers and devices, you should also be able to generate a test report for each one of these test machines/devices. 

In Testsigma, you can group reports by Test Machines when you need to understand:
1. Do the same tests fail on the same machine every time?
2. If yes, then can you modify our application specifically to solve test failures only in a specific machine 


---
##**Steps to get a Test Machine Report**

This gif demonstrates how to group reports on the basis of test machines:

![gif to access test case reports in Testsigma](https://docs.testsigma.com/images/test-machine-reports/gif-get-test-case-reports-testsigma.gif)



---
##**How to generate Test Machine Reports:**

1. Select the project for which you need the reports
2. Navigate to “Test Development > Run Results”, you should see a page like this:

   ![Run Results page to get test machine reports in Testsigma](https://docs.testsigma.com/images/test-machine-reports/run-results-page-to-get-test-machine-reports-testsigma.png)

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
  3. **Export the results:** Here, you can export the run results in the form of xls or xml. Read more about [exporting as xls](https://testsigma.com/docs/reports/runs/export-report-xls/) and [exporting as xml](https://testsigma.com/docs/reports/runs/export-report-junit/).
  4. **Filter the results:** You can filter the results by different criteria that appear on click on the filter button, read more about it here.
  5. **Display details of the result:** There is a toggle button in the end for more run details.


