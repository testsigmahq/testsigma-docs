---
title: "Integrate Testsigma with Clickup"
metadecs: "Learn how to integrate Testsigma with Clickup for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Clickup project" 
order: 16.55
page_id: "Clickup"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Integrate Clickup with Testsigma"
  url: "#steps-to-integrate-clickup-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---
---

You can integrate Testsigma with Clickup to push bugs directly to Clickup’s project. You can also capture screenshots, annotate bugs, and share them with your team. In this document, we will discuss how to integrate Clickup with Testsigma and also how to create the first bug from Testsigma which can flow into Clickup.

---

## **Prerequisites**
To integrate Clickup with Testsigma, you need the following:
- **API Key:** API Token from Clickup. 

[[info | **NOTE**:]]
| *For more information on how to create API token in Clickup, refer to Clickup [personal API key](https://help.clickup.com/hc/en-us/articles/6303426241687-Getting-Started-with-the-ClickUp-API).*

---

## **Steps to Integrate Clickup with Testsigma**
1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ytintegrations.png)

2. Enable toggle on **Clickup** widget.
![Enable Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/toggleclickup.png)

3. On the **ClickUp details** prompt, enter the **Personal Token** and click on **Save & Enable**.
![Save & Enable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cusaveenable.png)


---

## **Creating a bug**
1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tcresultyt.png)

2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reportbugyt.png)

3. On **Report** overlay, click on the **Clickup** icon.
![Report Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickupreport.png)

4. On the **Create New Issue** prompt, click on **Create Ticket**.
![Create Ticket](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cucreateticket.png)

[[info | **NOTE**:]]
| If you want to link to an existing issue on Clickup, click on the **Link to Issue** button, search for an existing issue in the search field and click on **Link Issue** to add a link to an existing Issue.
|![Link to Isse](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/culinktoissue.png)


Here's a quick GIF demonstrating how to integrate Clickup and add a bug to Clickup from Testsigma. 
![Clickup Integration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/clickupgif.gif)

---
