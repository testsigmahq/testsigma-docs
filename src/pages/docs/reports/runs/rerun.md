---
title: "Rerun from test results in Testsigma"
metadesc: "How to rerun test cases from test run results in Testsigma."
noindex: false
order: 13.22
page_id: "Rerun from test results in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites:"
  url: "#pre-requisites"
- type: link
  name: "Steps to follow:"
  url: "#steps-to-follow"
---

---

Testers may need to rerun failed test cases, or all test cases from a particular test run result, after a hotfix or a change in environment. Here’s how you can rerun test cases from test run results in Testsigma.

---
##**Pre-requisites:**

You should have some run results where some test cases have failed.

---
##**Steps to follow:**

1. Select the project, where you need to rerun the results
2. Navigate to “Test Development > Run Results”, you should see a page as below:
   ![Run Results page to get test machine reports in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/reports/runs/rerun/run-results-page-to-get-test-machine-reports-testsigma.png)
3. Click on the Test Plan for which you need the report, you should see test runs page like the one shown below:
   ![test run page to get test machine reports in Testsigma](https://docs.testsigma.com/images/rerun/test-run-page-to-get-test-machine-reports-rerun-testsigma.png)
4. In the Middle column, you will see a green “rerun” button:
   ![rerun-button-run-results-testsigma](https://docs.testsigma.com/images/rerun/rerun-button-run-results-testsigma.png)
5. Now click on the rerun button, you will see two options: 

  **a.** All Test Cases: this will rerun  all the test cases included in the selected run.

  **b.** All Failed Test Cases: this will rerun all the failed test cases  in the selected run.

  If the failed test cases also had data-driven test cases that had test data profiles with multiple data sets. Then you would see  more options as below:

![rerun options when data-driven test cases fail](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/reports/runs/rerun/rerun-options-when-data-driven-test-cases-fail.png)

&emsp;&emsp;i. All Iterations: This will rerun all iterations on the data-sets for the failed test cases in the selected run<br>
&emsp;&emsp;ii. Failed Iterations: This will rerun all failed iterations on the data-sets for the failed test cases in the selected run.<br>

 **c.** Only Failed Iterations in Failed Test Cases: This will rerun only the failed iterations for the failed test cases in the selected.<br>



 You can click on any of the given options depending on what test cases you want to rerun.
   
