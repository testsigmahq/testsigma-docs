---
title: "Freshrelease Bug Reporting Integration"
page_title: "Freshrelease Bug Reporting Integration in Testsigma"
metadesc: "How to integrate Testsigma with Freshrelease for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Freshrelease project"
noindex: false
order: 16.54
page_id: "Freshrelease Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Creating Freshrelease API Key"
  url: "#creating-freshrelease-api-key"
- type: link
  name: "Integrate Freshrelease With Testsigma"
  url: "#integrating-freshrelease-with-testsigma"
- type: link
  name: "Creating a Bug"
  url: "#creating-a-bug"
---

---

With Testsigma and Freshrelease integration, you can push bugs directly from Testsigma to your Freshrelease project, capture screenshots, annotate bugs, and share them with your teammates.

This document will discuss how to establish Integration with Freshrelease from your Testsigma account and how to create the first bug from Testsigma, which can flow into Freshrelease.

---

## **Prerequisites**

1. To integrate Freshrelease with Testsigma, you need the following information from your Freshrelease Account:
    - Freshrelease Organization URL
    - API Key

2. You should also be familiar with [Test Plan Runs](https://testsigma.com/docs/runs/test-plan-executions/).

---

## **Creating Freshrelease API Key**

1. First, log into **Freshrelease Admin Account**.

2. On the bottom left corner, click on **Profile Settings**. The profile settings page will have the **API Key** and the **URL** to which you have logged in is your **Account URL**.

---

## **Integrating Freshrelease with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstinav.png)


2. Enable toggle on **Freshrelease** widget.
![Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/frintgl.png)


3. On the **Freshrelease details** prompt, enter **Account URL**, **API Key** and click on **Save & Enable**.
![Save and Enable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/frinsae.png)


---

## **Creating a Bug**


1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcresultyt.png)


2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reportbugyt.png)


3. Choose **Freshrelease** and enter information about your bug.
![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page ](https://docs.testsigma.com/images/freshrelease/plugins-create-freshrelease-bug-form-filled.png)

[[info | NOTE:]]
| Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here.

If you want to link to an existing issue on Freshrelease, click on the **Link to Issue** button, search for an existing issue in the search field, and click on Link Issue to add a link to an existing Issue on Freshrelease. Otherwise, enter the bug details in the form as required.

4. Click on **Create Ticket**.


When the bug is created, some additional details regarding the test result, such as the test execution video and step screenshots, are automatically added to the issue on Freshrelease by Testsigma. This helps the developer who checks the issue in Freshrelease better understand the issue/bug with more context.



---