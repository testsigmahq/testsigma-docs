---
title: "JIRA Bug Reporting Integration"
page_title: "JIRA Bug Reporting Integration in Testsigma"
meta_desc: "How to integrate Testsigma with JIRA for real-time bug reporting during Test Runs"
order: 16.31
page_id: "JIRA Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Jira with Testsigma"
  url: "#integrating-jira-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---
Testsigma Jira integration lets you create issues in Jira directly from the Testsigma app. With simple one-click integration, you can push annotated issues to a project of your choice, assign them to a teammate, and attach screenshots, all while in the middle of a test session in the Testsigma platform. The fields populated by you when marking a bug through Testsigma are displayed as information on the Jira ticket for a testing instance.

In this document, we will discuss how to establish Integration with Jira from your Testsigma account and how to create bug reports from Testsigma which can flow into Jira as issues.

---
##**Prerequisites**

To integrate Jira with Testsigma, you need the following information from your Jira Account
* Account URL - Your organization’s Jira Account URL like ‘https://yourcompany.atlassian.net’
 * User Name - Your Account username/email
 * API Key - [Find your Atlassian API Token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/)

You should already know about [Test Plan Runs and results](https://testsigma.com/docs/runs/test-plan-executions/)
---
##**Integrating Jira with Testsigma**

Once the above details are obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select Jira under the Bug Reporting Tab.

Click on the Disabled Icon on **Jira**. Jira Details overlay opens up as shown below:

![Add Jira Integration form](https://docs.testsigma.com/images/jira/add-jira-integration-form.png)

Enter the details as mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

---
##**Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan with the following steps:

  1.  Navigate to the run results test case level page where you want to add a bug.
  2.  Click on the **Report Bug** button (bug icon on the top right corner) to open the Bug Reporting   overlay.

![report bug button on the run test case page for run results](https://docs.testsigma.com/images/jira/run-results-test-case-page-report-bug-button.png)

  3. Choose Jira to reveal the Create new Issue dialog as shown below: 

  ![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page](https://docs.testsigma.com/images/jira/plugins-bug-reporting-create-bug-jira.png)

  If you want to link to an existing issue on JIRA, click on the **Link to Issue button**, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on JIRA. Otherwise, enter the bug details in the form as required.
  
  4. Click on Create to create the Bug.

  When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are automatically added to the Issue on JIRA by Testsigma. This helps the developer who checks the issue in JIRA to understand the issue/bug better with more context.

