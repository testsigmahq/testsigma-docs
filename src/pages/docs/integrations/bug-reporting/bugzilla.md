---
title: "Bugzilla Bug Reporting Integration"
page_title: "Bugzilla Bug Reporting Integration in Testsigma"
metadesc: "Bugzilla integration helps you in creating issues in Bugzilla from the Testsigma. Learn how to integrate Testsigma with Bugzilla for real-time bug reporting"
noindex: false
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

Testsigma Mantis integration lets you create issues directly from the Testsigma app in Bugzilla. With just one click, you can push annotated issues to a project of your choice, assign them to a teammate, and attach screenshots, all while in the middle of a test session in the Testsigma. This article discusses how to integrate Bugzilla with Testsigma.

---

## **Prerequisites**


1. To integrate Bugzilla with Testsigma, you need the following information from your Bugzilla account:
    - **Account URL**: Your organization’s Bugzilla account URL
    - **API Key**: Bugzilla API Token


2. You should know about [test plan runs and results](https://testsigma.com/docs/runs/test-plan-executions/).

---

## **Integrating Bugzilla with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstinav.png)


2. Enable toggle on **Bugzilla** widget.
![Bugzilla widget](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/bzintgl.png)


3. On the **Bugzilla details** prompt, **Account URL**, **API Key** and click on **Save & Enable**.
![Save & Enable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/bzsae.png)


---


## **Creating a Bug**


1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcresultyt.png)


2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reportbugyt.png)


3. Choose **Bugzilla** and enter details of the bug.

[[info | NOTE:]]
| - Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.
| - If you want to link to an existing issue on Bugzilla, click on the **Link to Issue** button, search for an existing issue in the search field, and click on **Link Issue** to add a link to an existing Issue on Bugzilla. Otherwise, enter the bug details in the form as required.

4. Click on **Create Ticket**.
  

When the bug is created, some additional details regarding the test result, such as the test execution video and step screenshots, are automatically added to the issue on Bugzilla by Testsigma. This helps the developer who checks the issue in Bugzilla better understand the issue/bug with more context.



---