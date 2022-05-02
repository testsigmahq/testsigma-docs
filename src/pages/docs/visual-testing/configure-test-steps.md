---
title: "Visual Testing - Configure Test Steps"
metadesc: "How to configure visual testing for your test steps"
noindex: false
order: 14.1
page_id: "Visual Testing - Configure Test Steps"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "How to Enable Visual Testing for a Test Step"
  url: "#1-enable-visual-testing-for-test-step"
- type: link
  name: "Bulk Update Steps for Visual Testing"
  url: "#2-bulk-update-steps-visual-testing" 
---

---

With Testsigma, Visual Testing is switched off for all test-steps, by default. Users have the freedom to turn it on only for the steps where they need visual validation.

##**1. How to Enable Visual Testing for a Test Step**

The visual testing can be configured for a test step on a test case details page or on a test step recorder. Below are the steps for doing the same:
1. Go the step and click on step details.

2. Turn on the the visual Testing for the step using the setting "Visual Testing"

3. Visual testing validation is now on for this test step.

Alternatively, below is a gif demonstrating the above steps:

![gif-visual-testing-edit-teststep](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/visual-testing/configure-test-steps/gif-visual-testing-edit-teststep.gif)


Note: After you enable visual testing for a test step - Visual Testing becomes available only after the next successful run. This is because, in order to execute visual testing, Testsigma needs a baseline image corresponding to the test step. 

---

##**2. Bulk Update Steps for Visual Testing**

To save time and reduce redundant efforts, Testsigma supports bulk update of steps to turn on/off visual testing.

You can select all the steps in the test case that you want and turn on/off the visual testing settings in one go.

Below is a gif demonstrating bulk update for enabling visual testing for multiple steps at once:

![gif-visual-testing-bulk-update-test-steps.gif](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/visual-testing/configure-test-steps/gif-visual-testing-bulk-update-test-steps.gif)



