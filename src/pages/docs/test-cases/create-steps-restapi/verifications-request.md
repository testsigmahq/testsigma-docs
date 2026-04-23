---
title: "Verifications"
page_title: "Verifications Request"
metadesc: "Check whether the Rest API is functioning correctly by adding verification and assertions. Learn more about Verifications Request in Testsigma"
noindex: false
order: 4.67
page_id: "Verifications Request"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Verification Types"
  url: "#verification-types"
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

In Testsigma, you can validate whether a REST API is functioning correctly by adding verifications (assertions). These help ensure that the API response matches the expected status, headers, and body content.

**To add verification:**
- Send an API request.
- Review the response at the bottom of the screen.
- Click **Create** and add verification from the **Verification** tab.

---

## **Verification Types**

Verification types define how the response (JSON/XML) is compared with the expected value.

**1. Strict**
- Exact match required
- No extra fields allowed
- Array order must match

**2. Strict Order**
- Same as Strict
- Field order must also match

**3. Lenient (Recommended)**
- Validates only specified fields
- Extra fields allowed
- Order ignored

**4. Non Extensible**
- No extra fields allowed
- Order ignored

**5. Schema**
- Validates structure and data types, not exact values

### **Quick Summary**

| Type             | Extra Fields Allowed | Order Check   | Value Validation              |
|------------------|--------------------|--------------|-------------------------------|
| **Strict**        | ❌ No               | Arrays only  | Exact match required          |
| **Strict Order**  | ❌ No               | ✔ Full order | Exact match required          |
| **Lenient**       | ✔ Yes              | ❌ No         | Only specified fields checked |
| **Non Extensible**| ❌ No               | ❌ No         | Exact match required          |
| **Schema**        | Depends            | ❌ No         | Structure & type validation   |

> <p id="prerequisites">💡 Tip:</p>
> Use Lenient for most APIs with dynamic fields.

### **For Example:**

**Expected:**

```
{
  "name": "Ganesh"
}
```

**Response:**

```
{
  "name": "Ganesh",
  "age": 30,
  "city": "Bangalore"
}
```

In this case,
- **Lenient:** Passes as it validates only the specified field (**name**) and ignores extra fields.  

- **Strict:** Fails as extra fields (**age**, **city**) are not allowed.

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

   ![Add Verification in Verification Tab](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_1.png)

[[info | NOTE:]]
| - Navigate to **Verification** > **Response Body** tab, and click **Add Verification** to add the field manually.
| - Validate values of a key received in a response body.


### **Add Verification in Response Body (HTML)**

1. Send an **API Request**. The **Response Body** for your request will appear at the bottom of the screen.

2. Hover over the HTML lines in the **Response Body** and select the attribute to add for verification. This action automatically adds the attribute and its value to the **Verifications** tab.

   ![Verificatications](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_2.png)


### **Copy Response from Response body**

Click **copy response**. 
  
   ![Copy Response](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_3.png)

It will copy to the **clipboard**, paste the **JSON** or **XPATH** path field, and select the **verification type** from the drop-down list. Enter an **expected value** by using plain text or **test data types**. Click **Create** to add verification.

   ![Copy Response in Verification](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_12.png)

### **Verify Response body**

The following are two ways to verify the response body.

1. **Before Invoking API**
    1. Click the **Verify Response Body**. This will open the Verify Response Body overlay screen.![Before Invoking API](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_4.png)
    2. Select the **Comparison Type**, **Response Body Type**, and **Verification type** from the drop-down list. Enter the expected value that you wish to compare and verify, then click the **Create** to save your API. ![Verify Response](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_5.png)


2. **After Invoking API**

    1. Click **verify response body**. The Verify Response Body overlay screen will appear.![After Invoking](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_6.png)
    2. Select **Comparison Type** and **Verification Type** from the drop-down lists. Click **Create** to add verification. ![verify response](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_7.png)
---

## **Headers Verification**

Headers Verification in RESTful API Testing is the process of verifying that the response headers returned by the API are as expected. This includes verifying the status code, content type, and other headers that are returned. It is important to ensure that the headers are correct, as they can affect how the API is used and how the response is interpreted.

### **Add Verification in Headers Tab**

Click **Add Verification** in the **Headers** tab. Enter the **JSON path**, enter the **expected value** in the field, and you can enter **test data types** in the Value field. Choose the **verification type** from the drop-down list. Click **Create** to add verification.
![Add verification in Headers](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_8.png)

### **Mousehover to Response Field**

At the bottom of the page, click the **Headers** tab, mouse over to the variable, and click **Add Verification**; it will update in the Verification **headers** tab.
![Mousehover and Click Add Verification](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_9.png)

---

## **Status Verification**

Status verification in RESTful API testing is the process of verifying that the response from the API is in the expected format and contains the expected data. This is done by comparing the response from the API to the expected response. 

### **Add Verification in Status Tab**

Click **Add Verification** in the **Status tab**. Select the **key name** from the drop-down list, enter the **expected value** in the field, and you can enter **test data types** in the Value field. Select the **verification type** from the drop-down list. 
![Add Verification in Status Tab](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_10.png)

### **Mousehover to Response Field**

At the bottom of the page, click the **Status tab**, mouse over to the variable, and click **Add Verification**; it will update in the Verification Status tab.

![Status adding for verify](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_verification_n_11.png)

---
