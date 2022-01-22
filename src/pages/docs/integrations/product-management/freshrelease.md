---
title: "Freshrelease Bug Reporting Integration"
page_title: "Freshrelease Bug Reporting Integration in Testsigma"
metadesc: "How to integrate Testsigma with Freshrelease for real-time bug reporting during Test Runs"
order: 16.54
page_id: "Freshrelease Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Creating Freshrelease API Key"
  url: "#creating-freshrelease-api-key"
- type: link
  name: "Integrate Freshrelease With Testsigma"
  url: "#integrating-freshrelease-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---
With Testsigma and Freshrelease integration, you can push bugs directly from Testsigma to your Freshrelease project, capture screenshots, annotate bugs, and share them with your teammates.

In this document, we will discuss how to establish Integration with Freshrelease from your Testsigma account and how to create the first bug from Testsigma which can flow into Freshrelease.

## **Prerequisites**

To integrate Freshrelease with Testsigma, you need the following information from your Freshrelease Account:

  * Freshrelease Organization URL
  * API Key
Check the below section **Creating Freshrelease API Key** to learn how to obtain both.

You should also be familiar with [Test Plan Runs](https://testsigma.com/docs/runs/test-plan-executions/).

## **Creating Freshrelease API Key**

First, log into Freshrelease Admin Account.
On the bottom left corner, click on Profile Settings. The profile settings page will have the API Key and the URL to which you have logged in is your Account URL.

## **Integrating Freshrelease with Testsigma**

Once the above details are obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select Freshrelease under the Bug Reporting Tab.

Click on the Disabled Icon on **Freshrelease**. Freshrelease Details overlay opens up as shown below:

![Add Freshrelease Integration form](https://docs.testsigma.com/images/freshrelease/add-freshrelease-integration-form.png)

Enter the details as mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

## **Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan with the following steps:

 1. Navigate to the run results test case level page where you want to add a bug.
 2. Click on the **Report Bug** button (bug icon on the top right corner) to open the Bug Reporting overlay.

 ![report bug button on the run test case page for run results](https://docs.testsigma.com/images/freshrelease/run-results-test-case-page-report-bug-button-freshrelease.png)

 3. Choose Freshrelease and enter information about your bug.

  ![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page ](https://docs.testsigma.com/images/freshrelease/plugins-create-freshrelease-bug-form-filled.png)

 If you want to link to an existing issue on Freshrelease, click on the **Link to Issue** button, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on Freshrelease. Otherwise, enter the bug details in the form as required.

 4. Click on Create to create the Bug.

When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are added to the Issue on Freshrelease automatically by Testsigma. This helps the developer who checks the issue in Freshrelease to understand the issue/bug better with more context.
