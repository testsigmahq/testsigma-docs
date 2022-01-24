---
title: "Trello Bug Reporting Integration"
page_title: "Trello Bug Reporting Integration in Testsigma"
metadesc: "How to integrate Testsigma with Trello for real-time bug reporting during Test Runs"
order: 16.53
page_id: "Trello Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrate Trello With Testsigma"
  url: "#integrating-trello-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---
With Testsigma and Trello integration, you can push bugs directly from Testsigma to your Trello project, capture screenshots, annotate bugs, and share them with your teammates and colleagues.

In this document, we will discuss how to establish Integration with Trello from your Testsigma account and how to create the first bug from Testsigma which can flow into Trello.

## **Prerequisites**

To integrate Trello with Testsigma, you need the following information from your Trello Account<br>
  *  User Token
  * API Key
You can get both from https://trello.com/app-key

You should also be familiar with [Test Plan Runs](https://testsigma.com/docs/runs/test-plan-executions/).

## **Integrating Trello with Testsigma**

Once the above details are obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select Trello under the Bug Reporting Tab.

Click on the Disabled Icon on **Trello**. Trello Details overlay opens up as shown below:

![Add Trello Integration form](https://docs.testsigma.com/images/trello/add-trello-integration-form.png)

Enter the details as mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

## **Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan with the following steps:

  1. Navigate to the run results test case level page where you want to add a bug.
  2. Click on the **Report Bug** button(bug icon on the top right corner) to open the Bug Reporting overlay.

  ![report bug button on the run test case page for run results](https://docs.testsigma.com/images/trello/run-results-test-case-page-report-bug-button-trello.png)

  3. Choose Trello and enter the detailed information of your bug.

![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page](https://docs.testsigma.com/images/trello/plugins-create-trello-bug-form-filled.png)

If you want to link to an existing issue on Trello, click on the **Link to Issue** button, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on Trello. Otherwise, enter the bug details in the form as required.

  4. Click on Create to create the Bug.

When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are added to the Issue on Trello automatically by Testsigma. This helps the developer who checks the issue in Trello to understand the issue/bug better with more context.


