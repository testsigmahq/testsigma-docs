---
title: "Integrate Testsigma with Clickup"
metadecs: "How to integrate Testsigma with Clickup for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Clickup project" 
order: 16.55
page_id: "Clickup"
warning: false

contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#prerequisites"
- type: link
  name: "Integrating Clickup with Testsigma"
  url: "#integrating-clickup-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---
---

With Testsigma and Clickup integration, you can push bugs directly from Testsigma to your Clickup project, capture screenshots, annotate bugs, and share them with your teammates and colleagues.
In this document, we will discuss how to establish Integration with Clickup from your Testsigma account and how to create the first bug from Testsigma which can flow into Clickup.

## **Prerequisites**

To integrate Clickup with Testsigma, you need the following information from your Clickup Account (Check how to get the API key here: https://docs.clickup.com/en/articles/1367130-getting-started-with-the-clickup-api)

- Personal API Key 

You should also be familiar with [Test Plan Runs](https://testsigma.com/docs/runs/test-plan-executions/).

---

## **Integrating Clickup with Testsigma**

1. Once the above details are obtained, navigate to the Plugins page through Dashboard > Settings > Plugins and select Clickup under the Bug Reporting Tab.
2. Click on the Disabled Icon on Clickup. Clickup Details overlay opens up, as shown below:

![the clickup overlay to integrate with Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/integrations/product-management/clickup/clickup-overlay-to-integrate.png)

3. Enter the details as mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

---

## **Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan with the following steps:
1. Navigate to the run results test case level page where you want to add a bug.
2. Click on the Report Bug button(bug icon on the top right corner) to open the Bug Reporting overlay.

 ![report but on a test case execution result page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/integrations/product-management/clickup/run-test-case-report-bug-clickup.png)

3. Choose Clickuup and enter the detailed information of your bug.

[[info | NOTE:]]
|Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.

If you want to link to an existing issue on Clickup, click on the Link to Issue button, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on Clickup. Otherwise, enter the bug details in the form as required.

4. Click on Create to create the Bug.

When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are added to the Issue on Clickup automatically by Testsigma. This helps the developer who checks the issue in Clickup to understand the issue/bug better with more context.




