---
title: "Zepel Bug Reporting Integration"
page_title: "Zepel Bug Reporting Integration in Testsigma"
metadesc: "How to integrate Testsigma with Zepel for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Zepel's project"
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
  name: "Creating a Bug"
  url: "#creating-a-bug"
---

---

With Testsigma Zepel integration, you can push bugs directly from Testsigma to your Zepel project, capture screenshots, annotate bugs, and share them with your teammates.

In this document, we will discuss how to establish Integration with Zepel from your Testsigma account and create the first bug from Testsigma that can flow into Zepel.

---

## **Prerequisites**

1. To integrate Zepel with Testsigma, we need the following information from your Zepel account:
    - Account URL
    - API Key (For more information, refer to [creating your Zepel API token](https://zepel.io/developers/api/v1/#authentication))

2. You should know about [test plan runs and results](https://testsigma.com/docs/runs/test-plan-executions/).



---

## **Integrating Zepel with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstinav.png)


2. Enable toggle on **Zepel** widget.
![Zepel Widget](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/zitgl.png)

3. On the **Zepel details** prompt, **Account URL**, **API Key** and click on **Save & Enable**.
![Save & Enable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/zidtails.png)



---


## **Creating a Bug**

1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcresultyt.png)


2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reportbugyt.png)


3. Choose **Zepel** and enter information about your bug.

![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page](https://docs.testsigma.com/images/zepel/plugins-create-zepel-bug-form-filled.png)

[[info | NOTE:]]
| Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.

If you want to link to an existing issue on Zepel, click on the **Link to Issue** button, search for an existing issue in the search field, and click on Link Issue to add a link to an existing Issue on Zepel. Otherwise, enter the bug details in the form as required.

4. Click on **Create Ticket**.



When the bug is created, some additional details regarding the test result, such as the test execution video and step screenshots, are automatically added to the issue on Zepel by Testsigma. This helps the developer who checks the issue in Zepel better understand the issue/bug with more context.





---