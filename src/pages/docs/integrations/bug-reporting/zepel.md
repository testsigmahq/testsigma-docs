---
title: "Zepel Bug Reporting Integration"
page_title: "Zepel Bug Reporting Integration in Testsigma"
metadesc: " How to integrate Testsigma with Zepel for real-time bug reporting during Test Runs"
noindex: false
order: 16.36
page_id: "Zepel Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Zepel with Testsigma"
  url: "#integrating-zepel-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---

---

With Testsigma Zepel integration, you can push bugs directly from Testsigma to your Zepel's project, capture screenshots, annotate bugs, and share them with your teammates.

In this document, we will discuss how to establish Integration with Zepel from your Testsigma account and how to create the first bug from Testsigma which can flow into Zepel.

---
##**Prerequisites**

To integrate Zepel with Testsigma, we need the following information from your Zepel Account
  * Account URL - Your organization’s Zepel Account URL
  * API Key - Refer to [Creating your Zepel API Token](https://zepel.io/developers/api/v1/#authentication)

You should already know about [Test Plan Runs and results](https://testsigma.com/docs/runs/test-plan-executions/).

---
##**Integrating Zepel with Testsigma**

Once you’ve obtained the prerequisite details, navigate to the Plugins page through **Dashboard > Settings > Plugins** and select Zepel under the Bug Reporting Tab.

Click on the Disabled Icon on **Zepel**. Zepel Details overlay opens up as shown below:

![Add Zepel Integration form](https://docs.testsigma.com/images/zepel/add-zepel-integration-form.png)

Enter the details mentioned in Prerequisites. After entering the details, click on the Create button to add the Integration.

---
##**Creating a bug**

We can create a bug within Testsigma from the run results page for a particular Test Plan with the following steps:

 1. Navigate to the run results test case level page where you want to add a bug.
 2. Click on the **Report Bug** button (bug icon on the top right corner) to open the Bug Reporting overlay.

 ![report bug button on the run test case page for run results ](https://docs.testsigma.com/images/zepel/run-results-test-case-page-report-bug-button-zepel.png)

 3. Choose Zepel and enter information about your bug.

![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page](https://docs.testsigma.com/images/zepel/plugins-create-zepel-bug-form-filled.png)

If you want to link to an existing issue on Zepel, click on the **Link to Issue** button, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue on Zepel. Otherwise, enter the bug details in the form as required.

 4. Click on Create to create the Bug.

When the bug is created, some additional details regarding the Test Result such as the Test Execution Video and Step Screenshots are added automatically by Testsigma. This helps the developer who checks the issue in Zepel to understand the issue/bug better with more context.

