---
title: "Backlog Bug Reporting Integration"
page_title: "Backlog Bug Reporting Integration in Testsigma"
metadesc: "How to integrate Testsigma with Backlog for realtime bug reporting during Test Runs"
order: 16.33
page_id: "Backlog Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Getting the API Key"
  url: "#getting-the-api-key"
- type: link
  name: "Integrating Backlog with Testsigma"
  url: "#integrating-backlog-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---
This integration lets you create issues in Backlog directly from the Testsigma. With simple one-click integration, you can push annotated issues to a project of your choice, assign them to the required teammate, and attach screenshots, while in the middle of a test session in the Testsigma app. The fields populated by you when marking as a bug through Testsigma are displayed as information on the Backlog ticket for a testing instance.

In this document, we will discuss how to establish Integration with Backlog from your Testsigma account and how to create the first bug from Testsigma which can flow into Backlog.

## **Prerequisites**

To integrate Backlog with Testsigma, you need the following information from your Backlog Account
  * Account URL - Your organization’s Backlog Account URL
  * API Key - Explained in next section - **Getting the API Key**

You should already know about [Test Plan Runs and results](https://testsigma.com/docs/runs/test-plan-executions/)

## **Getting the API Key**

  1. Log in to your Backlog account. You will find the Backlog URL on top of your browser’s address bar.

  2. On the top-right corner of your Backlog instance, you will find a drop-down menu with your profile icon. Click on the drop-down and go to “Personal Settings”.

  ![Profile dropdown menu showing Personal settings option in Backlog](https://docs.testsigma.com/images/backlog/backlog-profile-icon-dropdown-personal-settings-highlighted.png)

  3. In your personal settings menu, click on the API option.
  4. Under API Settings, we can see an option to generate a new API Key. Enter a suitable unique  name in the Memo field and hit the Submit button. You will find an API key generated based on the Memo. You may enter some random text in the Memo field to generate a random API Key.
  5. Copy this API key as it would be used to authenticate yourself while integrating Testsigma with Backlog.

  ![Generate API Key in API Settings in Backlog](https://docs.testsigma.com/images/backlog/backlog-personal-settings-api-settings-generate-api.png)

 ## **Integrating Backlog with Testsigma**

Once the above details are obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select Backlog under the Bug Reporting Tab.

Click on the Disabled Icon on **Backlog**. Backlog Details overlay opens up as shown below:

![Add Backlog Integration form](https://docs.testsigma.com/images/backlog/add-backlog-integration-form.png)

Enter the details as mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

## **Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan with the following steps:

  1. Navigate to the run results test case level page where you want to add a bug.
  2. Click on the **Report Bug** button (bug icon on the top right corner) to open the Bug Reporting overlay.

![report bug button on the run test case page for run results](https://docs.testsigma.com/images/backlog/run-results-test-case-page-report-bug-button-backlog.png)

  3. Choose Backlog and enter the detailed information of your bug.

 ![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page](https://docs.testsigma.com/images/backlog/placeholder-image.png)

  If you want to link to an existing issue on Backlog,
  click on the **Link to Issue** button, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on Backlog. Otherwise, enter the bug details in the form as required.

  
  4. Click on Create to create the Bug.

When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are added automatically by Testsigma. This helps the developer who checks the issue in Backlog to understand the issue/bug better with more context.

