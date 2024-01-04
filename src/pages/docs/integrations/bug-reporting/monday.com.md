---
title: "Monday.com Integration With Testsigma"
page_title: "monday.com"
metadesc: "Monday.com integration helps you in creating issues in Monday.com from the Testsigma. Learn how to integrate Testsigma with Monday.com for real-time bug reporting"
noindex: false
order: 16.38
page_id: "monday.com"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Integrating monday.com with Testsigma"
  url: "#integrating-mantis-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---

---


Testsigma monday.com integration helps you create issues in monday.com directly from the Testsigma app. You can push annotated issues to monday.com with just one click during a test session. This article discusses how to integrate monday.com with Testsigma. 


---

## **Prerequisites**

To integrate **monday.com** with Testsigma, you need the following information from your monday.com account:

- **Account URL**: Your organization’s monday.com account URL

- **API Key**: Find your monday.com API Token

---

## **Integrating Monday.com With Testsigma**

1. Navigate to **Settings > Integrations** and enable the toggle on **monday.com** widget. 
![Navigate to Plugins](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mndytgl.png)


2. On the **Monday.com details** prompt, enter **Account URL**, **API Key**, **Confirm API Key** and click on **Save & Enable**.
![Monday.com Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mdidtls.png)

---

## **Creating a Bug**
1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Test Case Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrtcresults.png)

2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/jrreportbug.png)


3. On **Report** overlay, click on the **Monday.com** icon.
![Monday Icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/minticon.png)

4. On the **Create New Issue** prompt, click on **Create Ticket**.
![Create New Issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mintct.png)

[[info | **NOTE**:]]
| - If you want to link to an existing issue on **Monday.com**, click on the **Link to Issue** button, search for a current issue in the search field, and click on Link Issue to add a link to an existing Issue on **Monday.com**. Otherwise, enter the bug details in the form as required.
| - When the bug is created, some additional details regarding the Test Result, such as the test execution video and step screenshots, are added automatically by Testsigma. This helps the developer who checks the issue in **Monday.com** better understand the issue/bug with more context.


---