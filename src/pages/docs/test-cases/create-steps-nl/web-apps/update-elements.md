---
title: "Update Elements for a Web Project"
metadesc: "How to update the elements in an web app project in Testsigma | Update elements once the structure of your web application is updated"
noindex: false
order: 4.442
page_id: "Update Elements for a Web Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to update one element at a time"
  url: "#how-to-update-one-element-at-a-time"
- type: link
  name: "How to update multiple elements at once:"
  url: "#how-to-update-multiple-elements-at-once"
---

---

There would be times when you would update the structure of your website or application. And then you might want to update the corresponding elements in your automated test project in Testsigma too. In this document, we will discuss two ways of doing that in Testsigma:
 1. Updating elements one at a time
 2. Bulk update multiple elements

&emsp;

---
## **Pre-requisites:**

 1. Your project should already have the element that you want to update. To know how to capture elements, refer to [record multiple elements.](https://testsigma.com/docs/elements/web-apps/record-multiple-elements/)
 2. You should know how to navigate to the Elements page. If not, refer to [Elements - overview.](https://testsigma.com/docs/elements/web-apps/overview/)

&emsp;
 
---
## **How to update one element at a time:**

 1. To update an element, go to **Test Development > Elements**
 2. **All UI identifiers** page will appear that contains all the elements in the selected project:

![all-UI-identifiers-page-to-update-elements-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/web-apps/update-elements/all-UI-identifiers-page-to-update-elements-in-Testsigma.png)

 3. Go to the element that you want to update. If there are too many to find the right one, try filtering the elements.
 4. Hover over the element and click on the **Edit** button.

![edit button for an element in all UI identifiers page in Testsigma](https://docs.testsigma.com/images/update-elements/edit-button-for-an-element-in-all-ui-identifiers-testsigma.png)

 5. An Edit Elements layover opens as shown in the screenshot below:
![edit-UI-identifier-page-to-update-elements-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/web-apps/update-elements/edit-UI-identifier-page-to-update-elements-in-Testsigma.png)

Edit the element and click on **Update** to save the changes.

&emsp;

---
## **How to update multiple elements at once:**

 1. Go to **Test Development > Elements**
 2. On the top right, there is an option to export the elements in excel format. Click it:

![export-button-on-UI-identifier-page-to-update-elements-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/web-apps/update-elements/export-button-on-UI-identifier-page-to-update-elements-in-Testsigma.png)

 3. On your workstation, update the excel sheet. Save the changes and close the file.
 4. In Testsigma, click on the import button and upload the saved file from the previous step.

![import-button-on-UI-identifier-page-to-update-elements-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/web-apps/update-elements/import-button-on-UI-identifier-page-to-update-elements-in-Testsigma.png)

This way, you can bulk edit element information. The changes will be visible in the corresponding elements in Testsigma.

