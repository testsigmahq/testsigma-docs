---
title: "Bugzilla Bug Reporting Integration"
page_title: "Bugzilla Bug Reporting Integration in Testsigma"
metadesc: "How to integrate Testsigma with Bugzilla for real-time bug reporting during Test Runs"
noindex: false
canonical: "https://testsigma.com/docs/integrations/bug-reporting/bugzilla/"
order: 16.32
page_id: "Bugzilla Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Bugzilla with Testsigma"
  url: "#integrating-bugzilla-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---

---

Testsigma Bugzilla integration helps you in creating issues in Bugzilla directly from the Testsigma app. With simple one-click integration, you can push annotated issues to Bugzilla while in the middle of a test session. The fields populated by you when marking as a bug through Testsigma are displayed as information on the Bugzilla ticket for a testing instance.

In this document, we will discuss how to establish Integration with Bugzilla from your Testsigma account and how to create the first bug from Testsigma into Bugzilla.

---
##**Prerequisites**

To integrate Bugzilla with Testsigma, you need the following information from your Bugzilla Account
  * Account URL - Your organization’s Bugzilla Account URL
* API Key - [Find your Bugzilla API Token](https://bugzilla.readthedocs.io/en/latest/integrating/auth-delegation.html#auth-delegation)

You should already know about [Test Plan Runs and results](https://testsigma.com/docs/runs/test-plan-executions/).

---
##**Integrating Bugzilla with Testsigma**

Navigate to the Plugins page through **Dashboard > Settings > Plugins** and select Bugzilla under the Bug Reporting Tab.

Click on the Disabled Icon on **Bugzilla**. Bugzilla Details overlay opens up as shown below:

![Add BugZilla Integration form ](https://docs.testsigma.com/images/bugzilla/add-Bugzilla-integration-form.png)

Enter the details as mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

---
##**Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan with the following steps:

  1. Navigate to the run results test case level page where you want to add a bug.
  2. Click on the **Report Bug** button (bug icon on the top right corner) to open the Bug Reporting overlay.

  ![report bug button on the run test case page for run results](https://docs.testsigma.com/images/bugzilla/run-results-test-case-page-report-bug-button-bugzilla.png)

  3. Choose Bugzilla to reveal the Create Issue form.

[[info | NOTE:]]
|Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.

If you want to link to an existing issue on Bugzilla, click on the **Link to Issue** button, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on Bugzilla. Otherwise, enter the bug details in the form as required.

  4. Click on Create to create the Bug.
  
 When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are added automatically by Testsigma. This helps the developer who checks the issue in Bugzilla to understand the issue/bug better with more context.
