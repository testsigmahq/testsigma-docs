---
title: "Integrate Testsigma with Clickup"
metadecs: "Learn how to integrate Testsigma with Clickup for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Clickup project" 
order: 16.55
page_id: "clickup-integration"
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

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. You need the following:
>    - **API Key:** API Token from Clickup. 

[[info | **NOTE**:]]
| *For more information on how to create API token in Clickup, refer to the *<a href="https://help.clickup.com/hc/en-us/articles/6303426241687-Getting-Started-with-the-ClickUp-API" rel="nofollow">personal API key</a>.*

---

## **Steps to Integrate Clickup with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_clickup_1.png)

2. Enable toggle on **Clickup** widget.
![Enable Toggle]()https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_clickup_2.png

3. On the **ClickUp details** prompt, enter the **Personal Token** and click on **Save & Enable**.
![Save & Enable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_clickup_3.png)


---

## **Creating a bug**

1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_clickup_4.png)

2. Click **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_clickup_5.png)

3. In the **Report** overlay, click the **Clickup** icon.
![Report Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_clickup_6.png)

4. On the **Report** overlay, review the details, and click **Report Bug**.
![Create Ticket](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_clickup_7.png)

[[info | **NOTE**:]]
| If you want to link to an existing issue on **Clickup**, click the **Link To Issue** button, search for an existing issue in the search field and click **Link To Ticket** to add a link to an existing Issue.
|![Link to Isse](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_clickup_8.png)


---