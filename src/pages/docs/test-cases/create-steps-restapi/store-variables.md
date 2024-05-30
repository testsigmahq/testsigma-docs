---
title: "Store Variables"
page_title: "Store Variables"
metadesc: "Stored variables are variables that are used to store data from a response body or response headers | Learn more about Store Variables in Testsigma"
noindex: false
order: 4.98
page_id: "Store Variables"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Store variable from Response Body"
  url: "#store-variable-from-response-body"
- type: link
  name: "Store variable from Response Body (HTML)"
  url: "#store-variable-from-response-body-html"
- type: link
  name: "Store Variable in Headers tab"
  url: "#store-variable-in-headers-tab"
---

---

Stored variables in RESTful API testing are variables that are used to store data from a response body or response headers. This data can then be used in subsequent requests or assertions. You can use this throughout the test case or test session.

---

## **Store Variable from Response Body**

1. **Send** an API request, and at the bottom of the screen, the **response body** will appear for the request you sent.

2. Click **Outline**, then select **Store Variable** to upload it directly into **Stored Variables** tab.

   ![store response body in tab](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/storevariable_restapioutline.gif)

[[info | NOTE:]]
| - Navigate to **Stored Variables** > **Response Body** tab, and click **Store Variable** to add the field manually.

---

## **Store Variable from Response Body (HTML)**

1. Send an **API Request**. The **Response Body** for your request will appear at the bottom of the screen.

2. Hover over the HTML lines in the **Response Body** and select the attribute to store variables. This action automatically stores the attribute and displays info under the **Stored Variables** tab.

   ![Store Variables](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/StoreVariables.gif)

---

## **Store Variable in Headers Tab**

1. Click **Store Variable** in the **Headers tab**. Enter the **variable name** and enter the **header name**. Click **Create** to store variable. 

2. At the bottom of the page, click the **Headers** tab, mouse over to the response header, and click **store variable**; it will update in the stored variables headers tab.

   ![Store header in Tab](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/storevariable_header_restapi.gif)

---

