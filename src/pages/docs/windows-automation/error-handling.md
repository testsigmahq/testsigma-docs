---
title: "Error Handling Post TSRx File Update"
page_title: "Error Handling Post TSRx File Update"
metadesc: "On updating TSRx file, Testsigma identifies potential errors in test cases, step groups and elements linked to updates in the application structure"
noindex: false
order: 31.7
page_id: "Error Handling Post TSRx File Update"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Check Errors on Elements List"
  url: "#steps-to-check-errors-on-elements-list"
- type: link
  name: "Steps to Check Errors on Test Case List"
  url: "#steps-to-check-errors-on-test-case-list"
- type: link
  name: "Steps to Resolve Errors in Test Case"
  url: "#steps-to-resolve-errors-in-test-case"
---

---

Testsigma quickly informs you of errors 🚫 after updating the TSRx file! 

When you update the elements by uploading an updated TSRx file, you might encounter errors in elements, test cases, and step groups. These errors indicate changes in the app structure.

✅ This feature helps you update your test cases, ensuring smooth test executions  without discrepancies. 

---

> ## **Prerequisites**
>
> Before you begin, ensure you have an Updated TSRx File to Import. 

---

## **Steps to Check Errors on Elements List**

1. From the left-nav bar, go to **Create Tests > Elements**.

2. You can find the impacted test cases highlighted on the **Test Cases** page with a **Warning**. 

3. Click on **View All** to filter only the impacted test cases. 

---

## **Steps to Check Errors on Test Case List**

1. From the left-nav bar, go to **Create Tests > Test Cases**. 

2. You can find the impacted test cases highlighted with a red underline on the **Elements**. 

3. Click on **View All** to filter only the impacted test cases.

---

## **Steps to Resolve Errors in Test Case**

1. Select the impacted test case to view the errors.

2. Hover over to the highlighted step to check the error.

3. Hover over the element and click on the **View/Edit element**. 

4. This will open the **Element details** overlay where you can find the details of impacted elements. 

5. To resolve the error, replace them with new elements or disable/remove the test step as needed.

[[info | **NOTE**:]]
| - This feature is also available at the **Step Group** level. 
| - The **Elements** page will also display errors on impacted elements. 

Here's a quick GIF demonstrating how to check & resolve errors post TSRx file update. 

![Error Handling](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WA_ErrorHandling.gif)

---