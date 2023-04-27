---
title: "Rerun Test Cases from Run Results"
metadesc: "Learn in detail how to rerun failed test cases, all test cases, or custom test cases from a particular test run result in Testsigma application"
noindex: false
order: 13.22
page_id: "How to rerun test cases from test run results in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Rerun from run results"
  url: "#steps-to-rerun-from-run-results"
---

<br>

Testers may need to rerun failed Test Cases, or all Test Cases from a particular Test Run Result, after a hotfix or a change in environment. Here's how you can Rerun Test Cases from Test Run Results in Testsigma.

Here is a quick GIF demonstrating how to Rerun Test Cases from Run Results in Testsigma.
![Rerun GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rerun.gif)
 
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