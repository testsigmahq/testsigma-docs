---
title: "How to Handle Text-Based CAPTCHA in Testsigma?"
metadesc: "Learn how to handle text-based CAPTCHA in automation using Testsigma's OCR_ExtractText Addon. This article explains an effective solution."
order: 24.33
page_id: "how-to-handle-text-based-captcha-in-testsigma-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Install the Addon"
  url: "#install-the-addon"
- type: link
  name: "Create an Element for the CAPTCHA Image"
  url: "#create-an-element-for-the-captcha-image"
- type: link
  name: "Create a Test Case"
  url: "#create-a-test-case"
- type: link
  name: "Specify the Variable Name"
  url: "#specify-the-variable-name"
- type: link
  name: "Use the Stored Variable in the Input Field"
  url: "#use-the-stored-variable-in-the-input-field"
---

---

Handling CAPTCHA in automation is often challenging, but Testsigma provides a solution for text-based CAPTCHAs using the **OCR_ExtractText** Addon. This article discusses how to manage text-based CAPTCHA effectively using Testsigma.

---

## **Install the Addon**

1. From the left navigation bar, click the **Addons** icon and then select **Add-ons**.

2. On the **Addons** page, under **New & Updated Addons**, click the search icon and search for **OCR_ExtractText**.

3. When it appears in the results, click **Install**.

---

## **Create an Element for the CAPTCHA Image**

1. From the left navigation bar, go to **Create Tests** and click **Elements**. 

2. Click **Create Element**.

3. In the **Create Element** overlay:

   - Enter the element name
   - Provide the screen name
   - Select the appropriate element type
   - Enter the locator value (Xpath or CSS selector for the CAPTCHA image)

4. Click **Create Element**. 

[[info | **NOTE**:]]
| Repeat the same process to create an element for the CAPTCHA input field. 

---

## **Create a Test Case**

1. From the left navigation bar, go to **Create Tests** and click **Test Cases**.

2. In the **Test Case Explorer** section, expand the required **Feature** and click the **+** icon next to the required **Scenario**. A dialog box appears. 

3. In the dialog box, enter the name for your test case and click **Create**.

---

## **Specify the Variable Name**

1. In the **Test Case Details** page, add the following NLP step: 

   **Extract text from the locator element including special characters and store it into a variable.**

2. Click on **element** and select the previously created element for the CAPTCHA image. 

3. Click on **variable** and enter a name for the runtime variable (e.g., capturetext).

---

## **Use the Stored Variable in the Input Field**

1. In the same test case, add the following NLP step:
  
   **Enter the testdata in the element field.**

2. Click on **testdata** and select the runtime variable you created earlier (e.g., $ capturetext).

3. Click on **element** and select the element created for the CAPTCHA input field.

---