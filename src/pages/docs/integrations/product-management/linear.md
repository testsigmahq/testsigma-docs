---
title: "Integrate Testsigma with Linear"
metadecs: "Learn how to integrate Testsigma application with Linear for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Linear project"
order: 16.52
page_id: "Linear"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites:"
  url: "#prerequisites"
- type: link
  name: "Integrating Linear with Testsigma"
  url: "#integrating-linear-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---
---

You can integrate Testsigma with Linear to push bugs directly to Linear’s project. You can also capture screenshots, annotate bugs, and share them with your team. In this document, we will discuss how to integrate Linear with Testsigma and also how to create the first bug from Testsigma which can flow into Linear.

---

## **Prerequisites**
To integrate Youtrack with Testsigma, you need the following:
- Linear API Key (For more information, refer to https://linear.app/docs/api-and-webhooks)
- You should also be familiar with [Test Plan Runs](https://testsigma.com/docs/runs/test-plan-executions/).

---

## **Steps to Integrate Testsigma with Linear**
1. Navigate to **Settings > Integrations**. 
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lrintset.png)

2. Enable toggle on **Linear** widget. 
![Linear](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lrtoggle.png)

3. On the **Linear Details** prompt, enter **API Key**.
![API Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lrapikey.png)

4. Click on **Save & Enable**.
![Save](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lrsae.png)

Here’s a quick GIF demonstrating how to integrate Testsigma with Linear. 
![Integrate Linear](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/linearenable.gif)

---

## **Creating a Bug**
1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Test Case details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lrtcdetails.png)

2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lrrbug.png)

3. On **Report** overlay, click on **Linear** icon. 
![Report Bug Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lricon.png)

4. On the **Create New Issue** prompt, 
    - Select the **Team & Project**. 
    ![Team & Project](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lrtpro.png)
    - Enter **Title & Description**.
    ![Title & Descroption](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lrtad.png)

5. Click on **Create Ticket**.
![Create Ticket](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lecticket.png)

[[info | **NOTE**:]]
| If you want to link to an existing issue on Linear, click on the Link to Issue, search for an existing issue in the search field and click on Link Issue to add a link to an existing Issue.

Here’s a GIF demonstrating how to report bugs from Testsigma. 
![Linear Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/linearbug.gif)

---