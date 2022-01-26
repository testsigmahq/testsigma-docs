---
title: " Mantis Bug Reporting Integration"
page_title: "Mantis Bug Reporting Integration in Testsigma"
meta_desc: " How to integrate Testsigma with Mantis for realtime bug reporting during Test Runs"
order: 16.34
page_id: " Mantis Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Mantis with Testsigma"
  url: "#integrating-mantis-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---
Testsigma Mantis integration lets you create issues in Mantis directly from the Testsigma app. With simple one-click integration, you can push annotated issues to a project of your choice, assign them to a teammate, and attach screenshots, all while in the middle of a test session in the Testsigma platform. The fields populated by you when marking a bug through Testsigma are displayed as information on the Mantis ticket for a testing instance.


In this document, we will discuss how to establish Integration with Mantis from your Testsigma account and how to create the first bug from Testsigma which can flow into Mantis.

---
##**Prerequisites**

To integrate Mantis with Testsigma, we need the following information from your Mantis Account
  * Account URL - Your organization’s Mantis Account URL
  * API Key - [How to find your Mantis API Token](https://mantisbt.org/documentation.php)


You should already know about [Test Plan Runs and results](https://testsigma.com/docs/runs/test-plan-executions/).

---
##**Integrating Mantis with Testsigma**

Once the above details are obtained, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select Mantis under the Bug Reporting Tab.

Click on the Disabled Icon on **Mantis**. Mantis Details overlay opens up as shown below:

![Add Mantis Integration form](https://docs.testsigma.com/images/mantis/add-Mantis-integration-form.png)

Enter the details as mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

---
##**Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan with the following steps:

  1. Navigate to the run results test case level page where you want to add a bug.
  2. Click on the **Report Bug** button (bug icon on the top right corner) to open the Bug   Reporting overlay.

  ![report bug button on the run test case page for run results](https://docs.testsigma.com/images/mantis/run-results-test-case-page-report-bug-button-mantis.png)

  3. Choose Mantis and enter the detailed information of your bug
  
  ![Sample Task reported from Testsigma Bug Reporting Integration in Test Results pag](https://docs.testsigma.com/images/mantis/placeholder-image.png)

  If you want to link to an existing issue on Mantis,
  click on the **Link to Issue** button, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on Mantis. Otherwise, enter the bug details in the form as required.

  4.  Click on Create to create the Bug.

When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are added automatically by Testsigma. This helps the developer who checks the issue in Mantis to understand the issue/bug better with more context.
