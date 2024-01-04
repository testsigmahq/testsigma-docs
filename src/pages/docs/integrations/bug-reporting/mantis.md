---
title: "Mantis Bug Reporting Integration"
page_title: "Mantis Bug Reporting Integration in Testsigma"
metadesc: "Mantis Bug Reporting integration helps you in creating issues in Mantis from the Testsigma. Learn how to integrate Testsigma with Mantis for real-time bug reporting"
noindex: false
order: 16.34
page_id: "Mantis Bug Reporting Integration"
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
  name: "Creating a Bug"
  url: "#creating-a-bug"
---

---

Testsigma Mantis integration lets you create issues in Mantis directly from the Testsigma app. With just one click, you can push annotated issues to a project of your choice, assign them to a teammate, and attach screenshots, all while in the middle of a test session in Testsigma. This article discusses how to integrate Mantis with Testsigma account.

---

## **Prerequisites**

1. To integrate Mantis with Testsigma, we need the following information from your Mantis Account
    - Account URL: Your organization’s Mantis Account URL
    - API Key: [Mantis API Token](https://mantisbt.org/documentation.php)

2. You should already know about [test plan runs and results](https://testsigma.com/docs/runs/test-plan-executions/).


---


## **Integrating Mantis with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstinav.png)


2. Enable toggle on **Mantis** widget.
![Mantis Widget](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mitgl.png)

3. On the **Mantis Bug Tracker details** prompt, **Account URL**, **API Key** and click on **Save & Enable**.
![Mantis Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mintdetails.png)


---

## **Creating a Bug**

1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcresultyt.png)


2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reportbugyt.png)


3. Choose **Mantis** and enter the detailed information of your bug.
  
![Sample Task reported from Testsigma Bug Reporting Integration in Test Results pag](https://docs.testsigma.com/images/mantis/placeholder-image.png)

[[info | NOTE:]]
| - Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.
| - If you want to link to an existing issue on Mantis, click on the **Link to Issue** button, search for an existing issue in the search field, and click on **Link Issue** to add a link to an existing Issue on Mantis. Otherwise, enter the bug details in the form as required.

4. Click on **Create Ticket**.


When the bug is created, some additional details regarding the test result, such as the test execution video and step screenshots, are automatically added to the issue on Mantis by Testsigma. This helps the developer who checks the issue in Mantis better understand the issue/bug with more context.



---