---
title: "Integrate Testsigma with Linear"
metadecs: "This document describes the step-by-step instructions for integrating Testsigma with Linear "
order: 16.52
page_id: "Linear"
warning: false

contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#prerequisites"
- type: link
  name: "Integrating Linear with Testsigma"
  url: "#integrating-linear-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---
---

With Testsigma and Linear integration, you can push bugs directly from Testsigma to your Linear project, capture screenshots, annotate bugs, and share them with your teammates and colleagues.
In this document, we will discuss how to establish Integration with Linear from your Testsigma account and how to create the first bug from Testsigma which can flow into Linear.

---

##**Prerequisites**

To integrate Linear with Testsigma, you need the following information from your Linear Account (Check how to get the API key here: https://linear.app/docs/api-and-webhooks)

- API Key 

You should also be familiar with [Test Plan Runs](https://testsigma.com/docs/runs/test-plan-executions/).

---

##**Integrating Linear with Testsigma**

1. Once the above details are obtained, navigate to the Plugins page through Dashboard > Settings > Plugins and select Linear under the Bug Reporting Tab.
2. Click on the Disabled Icon on Linear. Linear Details overlay opens up.
3. Enter the details as mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

---

##**Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan with the following steps:

1. Navigate to the run results test case level page where you want to add a bug.
2. Click on the Report Bug button(bug icon on the top right corner) to open the Bug Reporting overlay.

![report bug on a test case execution result page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/integrations/product-management/linear/run-test-case-report-bug-linear.png)

3. Choose Linear and enter the detailed information of your bug.

![report a bug on linear tool](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/integrations/product-management/linear/choose-linear-enter-bug-details.png)

[[info | NOTE:]]
|Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.


If you want to link to an existing issue on Linear, click on the Link to Issue button, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on Linear. Otherwise, enter the bug details in the form as required.

4. Click on Create to create the Bug.

When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are added to the Issue on Linear automatically by Testsigma. This helps the developer who checks the issue in Linear to understand the issue/bug better with more context.




