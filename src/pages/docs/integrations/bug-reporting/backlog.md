---
title: "Backlog Bug Reporting Integration"
page_title: "Backlog Bug Reporting Integration in Testsigma"
metadesc: "Backlog bug reporting integration helps you in realtime bug reporting during Test Runs. Learn how to integrate Testsigma application with Backlog"
noindex: false
order: 16.33
page_id: "Backlog Bug Reporting Integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Getting the API Key"
  url: "#getting-the-api-key"
- type: link
  name: "Integrating Backlog with Testsigma"
  url: "#integrating-backlog-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---

---

Testsigma Mantis integration lets you create issues directly from the Testsigma app in Backlog. With just one click, you can push annotated issues to a project of your choice, assign them to a teammate, and attach screenshots, all while in the middle of a test session in the Testsigma. This article discusses how to integrate Backlog with Testsigma.

---
## **Prerequisites**

1. To integrate Backlog with Testsigma, you need the following information from your Backlog account
    - **Account URL**: Your organization’s Backlog account URL
    - **API Key**: Backlog API Token

2. You should already know about [test plan runs and results](https://testsigma.com/docs/runs/test-plan-executions/).

---

## **Getting the API Key**

1. Log in to your Backlog account. You will find the **Backlog URL** on top of your browser’s address bar.

2. On the top-right corner of your Backlog instance, you will find a drop-down menu with your profile icon. Click on the drop-down and go to **Personal Settings**.
![Profile dropdown menu showing Personal settings option in Backlog](https://docs.testsigma.com/images/backlog/backlog-profile-icon-dropdown-personal-settings-highlighted.png)

3. In your personal settings menu, click on the **API** option.

4. Under **API Settings**, we can see an option to generate a new API Key. Enter a suitable unique  name in the Memo field and click on **Submit**. You will find an API key generated based on the Memo. You may enter some random text in the Memo field to generate a random API Key.  


5. Copy this API key as it would be used to authenticate yourself while integrating Testsigma with Backlog.
![Generate API Key in API Settings in Backlog](https://docs.testsigma.com/images/backlog/backlog-personal-settings-api-settings-generate-api.png)

---

## **Integrating Backlog with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mstinav.png)


2. Enable toggle on **Backlog** widget.
![Backlog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/blintgl.png)

3. On the **Backlog details** prompt, **Account URL**, **API Key** and click on **Save & Enable**.
![Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/blintdtls.png)


---

## **Creating a bug**

1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcresultyt.png)


2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reportbugyt.png)


3. On **Report** overlay, click on the **Backlog** icon.
![Sample Task reported from Testsigma Bug Reporting Integration in Test Results page](https://docs.testsigma.com/images/backlog/placeholder-image.png)

[[info | NOTE:]]
| - Only the bug reporting tools that have been enabled via the plugins page (add link) will be displayed here. 
| - If you want to link to an existing issue on Backlog, click on the **Link to Issue** button, search for an existing issue in the search field, and click on **Link Issue** to add a link to an existing Issue on Backlog. Otherwise, enter the bug details in the form as required.

  
4. Click on **Create Ticket**.

When the bug is created, some additional details regarding the test result, such as the test execution video and step screenshots, are automatically added to the issue on Backlog by Testsigma. This helps the developer who checks the issue in Backlog better understand the issue/bug with more context.




--- 
