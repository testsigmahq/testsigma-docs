---
title: "Trello Bug Reporting Integration"
page_title: "Trello Bug Reporting Integration in Testsigma"
metadesc: "How to integrate Testsigma with Trello for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Trello project"
noindex: false
order: 16.53
page_id: "Trello Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrate Trello With Testsigma"
  url: "#integrate-trello-with-testsigma"
- type: link
  name: "Creating a Bug"
  url: "#creating-a-bug"
---

---


With Testsigma and Trello integration, you can push bugs directly from Testsigma to your Trello project, capture screenshots, annotate bugs, and share them with your teammates and colleagues.

This document discusses establishing Integration with Trello from your Testsigma account and creating the first bug from Testsigma, which can flow into Trello.


---

## **Prerequisites**

1. To integrate Trello with Testsigma, you need the following information from your Trello Account:<br>
    - User Token
    - API Key

2. You should also be familiar with [test plan runs](https://testsigma.com/docs/runs/test-plan-executions/).

---


## **Integrate Trello with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstinav.png)


2. Enable toggle on **Trello** widget.
![MS Teams Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tiwts.png)


3. On the **Trello details** prompt, enter **API Key**, **Token** and click on **Save & Enable**.
![Save and Enable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tiwtssae.png)

---

## **Creating a Bug**

1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcresultyt.png)

2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reportbugyt.png)

3. Choose **Trello** and enter the detailed information of your bug.

![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page](https://docs.testsigma.com/images/trello/plugins-create-trello-bug-form-filled.png)

[[info | NOTE:]]
| Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.

If you want to link to an existing issue on Trello, click on the **Link to Issue** button, search for an existing issue in the search field, and click on Link Issue to add a link to an existing Issue on Trello. Otherwise, enter the bug details in the form as required.

4. Click on **Create Ticket**.

When the bug is created, some additional details regarding the test result, such as the test execution video and step screenshots, are automatically added to the issue on Trello by Testsigma. This helps the developer who checks the issue in Trello better understand the issue/bug with more context.

---