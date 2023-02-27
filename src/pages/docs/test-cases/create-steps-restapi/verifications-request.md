---
title: "Verifications "
page_title: "Verifications Request"
metadesc: "Verifications Request in Testsigma"
noindex: false
order: 4.67
page_id: "Verifications Request"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Response Body Verification"
  url: "#response-body-verification"
- type: link
  name: "Headers Verification"
  url: "#headers-verification"
- type: link
  name: "Status Verification"
  url: "#status-verification"
---

---

In Testsigma, you can check whether the Rest API is functioning correctly by adding verification and assertions. This involves testing the API endpoints, the data returned, and the response codes. Verification also includes validating the API against the requirements and ensuring that the API is secure. For verification, you need to add an API request and click **Create** to check the response. At the bottom of the screen, you can see the response and add verification. There are some steps to adding verification.

---

## **Response Body Verification**

It is important to verify the response body to ensure that the data returned is accurate and complete. This can be done by comparing the response body to the expected output. Additionally, it is important to check that the response body contains all the necessary fields and that the data is in the correct format. It is also important to check that the response body does not contain any unexpected fields or data.

You can verify the response body in three ways.
- Add Verification in response body
- Copy Response from response body
- Verify Response body

### **Add Verification in Response body**

1. **Send** an API request, and at the bottom of the screen, the **response body** will appear for the request you sent.

2. Click **Outline**, then select **Add verification** to upload it directly into **Verification** tab.

![Add Verification in Verification Tab](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/responsebody_verification_restapi.gif)

[[info | NOTE:]]
| - Navigate to **Verification** > **Response Body** tab, and click **Add Verification** to add the field manually.
| - Validate values of a key received in a response body.

### **Copy Response from Response body**

Click **copy response**. It will copy to the **clipboard**, paste the **JSON** or **XPATH** path field, and select the **verification type** from the drop-down list. Enter an **expected value** by using plain text or **test data types**. Click **Create** to add verification.

![Copy Response in Verification](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/copyresponse_verification_restapi.gif)

### **Verify Response body**

Click **verify response body**. The Verify Response Body overlay screen will appear. Open the comparison and **verification types** drop-down lists to select them. Click **Create** to add verification.

![Verify Response Body in Response Body](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/verify_response_body_restapi.gif)

---

## **Headers Verification**

Headers Verification in RESTful API Testing is the process of verifying that the response headers returned by the API are as expected. This includes verifying the status code, content type, and other headers that are returned. It is important to ensure that the headers are correct, as they can affect how the API is used and how the response is interpreted.

### **Add Verification in Headers tab**

Click **Add Verification** in the **Headers** tab. Enter the **JSON path**, enter the **expected value** in the field, and you can enter **test data types** in the Value field. Choose the **verification type** by opening the drop-down list. Click **Create** to add verification.
![Add verification in Headers](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/headersadd_headers_restapi.png)

### **Mousehover to Response field**

At the bottom of the page, click the **Headers** tab, mouse over to the variable, and click **Add Verification**; it will update in the Verification **headers** tab.
![Mousehover and Click Add Verification](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/headersadd_tabheaders_restapi.png)

---

## **Status Verification**

Status verification in RESTful API testing is the process of verifying that the response from the API is in the expected format and contains the expected data. This is done by comparing the response from the API to the expected response. 

### **Add Verification in Status tab**

Click **Add Verification** in the **Status tab**. Select the **key name** by opening the drop-down list, enter the **expected value** in the field, and you can enter **test data types** in the Value field. Select the **verification type** by opening the drop-down list. 
![Add Verification in Status Tab](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/status_addverfication_restapi.png)

### **Mousehover to Response field**

At the bottom of the page, click the **Status tab**, mouse over to the variable, and click **Add Verification**; it will update in the Verification Status tab.

![Status adding for verify](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/status_tabaddverfication_restapi.png)

---
