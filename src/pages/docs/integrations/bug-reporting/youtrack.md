---
title: " Youtrack Bug Reporting Integration"
page_title: "Youtrack Bug Reporting Integration in Testsigma"
metadesc: "How to integrate Testsigma with Youtrack for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your YouTrack's project"
noindex: false
order: 16.35
page_id: " Youtrack Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Creating Youtrack API Key"
  url: "#creating-youtrack-api-key"
- type: link
  name: "Integrating YouTrack with Testsigma"
  url: "#integrating-youtrack-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---

---

With Testsigma YouTrack integration, you can push bugs directly from Testsigma to your YouTrack's project, capture screenshots, annotate bugs, and share them with your teammates and colleagues.

In this document, we will discuss how to establish Integration with Youtrack from your Testsigma account and how to create the first bug from Testsigma which can flow into Youtrack.

---
##**Prerequisites**

To integrate Youtrack with Testsigma, you need the following information from your Youtrack Account
 * Account URL - Your organization’s Youtrack Account URL
 * API Key - Check the next section **Creating Youtrack API Key** to know how to get the API Token

You should already know about [Test Plan Runs and results](https://testsigma.com/docs/runs/test-plan-executions/)

---
##**Creating Youtrack API Key**

Follow the below steps to get the API token:

  1. Log in to your YouTrack account and navigate to Profile on the top-right.

  ![Menu under Profile dropdown on Youtrack Dashboard page](https://docs.testsigma.com/images/youtrack/youtrack-dashboard-profile-menu.png)

  2. Click on the link that says 'Update personal information and manage logins'

  ![Manage Logins link highlighted under General tab on Youtrack Profile page](https://docs.testsigma.com/images/youtrack/0.png)

  3. Select the 'Authentication' tab

  ![Create new token in Authentication tab under Youtrack users page](https://docs.testsigma.com/images/youtrack/youtrack-users-settings-authentication-create-token.png)

  4. Click on 'New Token'.
  5. Enter a Token name and click on 'Create'.
  6. Your new token will be generated. Click on 'Copy Token' to copy the API Token value.

---
## **Integrating Youtrack with Testsigma**

Once the above details are obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select Youtrack under the Bug Reporting Tab.

Click on the Disabled Icon on **Youtrack**. Youtrack Details overlay opens up as shown below:

![Add Youtrack Integration form](https://docs.testsigma.com/images/youtrack/plugins-add-youtrack-integration-form.png)

Enter the details mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

---
##**Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan. Here’s how:

  1. Navigate to the run results test case level page where you want to add a bug.
  2. Click on the **Report Bug** button (bug icon on the top right corner) to open the Bug  Reporting overlay.

  ![report bug button on the run test case page for run results ](https://docs.testsigma.com/images/youtrack/run-results-test-case-page-report-bug-button-youtrack.png)

  3. Choose Youtrack and enter information about your bug.

![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page](https://docs.testsigma.com/images/youtrack/plugins-report-bug-create-new-youtrack-issue.png)

[[info | NOTE:]]
|Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.

If you want to link to an existing issue on Youtrack, click on the **Link to Issue** button, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on Youtrack. Otherwise, enter the bug details in the form as required.

 4. Click on Create to create the Bug.

When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are added automatically by Testsigma. This helps the developer who checks the issue in Youtrack to understand the issue/bug better with more context.








