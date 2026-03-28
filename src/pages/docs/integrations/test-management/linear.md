---
title: "Integrate Testsigma with Linear"
metadecs: "Learn how to integrate Testsigma application with Linear for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Linear project"
order: 16.52
page_id: "linear-integration"
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

> <p id="prerequisites">Prerequisites</p>
> 
> Before you beign, ensure that: 
> 1. To integrate Youtrack with Testsigma, you need the following:
>    - Linear API Key (For more information, refer to <a href="https://linear.app/docs/api-and-webhooks" rel="nofollow">https://linear.app/docs/api-and-webhooks</a>)
> 2. You have referred to the [documentation on executing test plan runs](https://testsigma.com/docs/runs/test-plan-executions/).

---

## **Steps to Integrate Testsigma with Linear**
1. Navigate to **Settings > Integrations**. 
   ![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/update_linear_1.1.png)

2. Enable the toggle on the **Linear** widget. 
![Linear](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/update_linear_1.2.png)

3. On the **Linear Details** prompt, enter your API key in the **API Key** and click **Save & Enable**. 
![API Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/update_linear_1.3.png)

---

## **Creating a Bug**
1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Test Case details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/update_linear_1.4.png)

2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/update_linear_1.5.png)

3. On **Report** overlay, click on **Linear** icon. 
![Report Bug Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/update_linear_1.6.png)

4. On the **Report** overlay, review the auto-generated title and description. If needed, update them and click **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integration/update_linear_1.7.png)

[[info | **NOTE**:]]
| If you want to link to an existing issue on Linear, click the **Link To Issue** tab, search for an existing issue in the search field and click **Link Issue** to add a link to an existing Issue.

---