---
title: "Integrate Testsigma with Linear"
metadecs: "Learn how to integrate Testsigma application with Linear for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your Linear project"
order: 17.52
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
![Integrations](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_clickup_1.png)

2. Enable toggle on **Linear** widget. 
![Integrations](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_linear_n_1.png)

3. In the **Linear Details** overlay, enter **API Key**, and click **Save & Enable**.
![Linear](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_linear_n_2.png)
---

## **Creating a Bug**

1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![API Key](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_linear_n_7.png)

2. Click on **Report Bug**.
![Test Case details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_linear_n_3.png)

3. In the **Report** overlay, click on **Linear** icon. 
![Report Bug](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_linear_n_4.png)

4. In the **Report** prompt, review the details, and click **Report Bug**. 
![Report Bug Overlay](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_linear_n_5.png)


[[info | **NOTE**:]]
| If you want to link to an existing issue on **Linear**, click the **Link to Issue** tab, search for an existing issue in the search field and click **Link To Ticket** to add a link to an existing Issue. 
|![Link to issue](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_linear_n_6.png)



---
