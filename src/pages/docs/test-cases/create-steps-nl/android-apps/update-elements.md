---
title: "Update Elements for an Android Project"
metadesc: "How to update the elements in an android project in Testsigma."
order: 4.452
page_id: "Update Elements for an Android Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Introduction:"
  url: "#introduction"
- type: link
  name: "Pre-requisites:"
  url: "#pre-requisites"
- type: link
  name: "How to update one element at a time:"
  url: "#how-to-update-one-element-at-a-time"
- type: link
  name: "How to update multiple elements at once:"
  url: "#how-to-update-multiple-elements-at-once"
---


---
##**Introduction:**

Sometimes, when you update the structure of your website or application, you will also need to update the corresponding elements in your automated test project in Testsigma. In this document, we will discuss two ways of doing that for an android Project:
 1. Updating an element at a time
 2. Updating multiple elements at once

&emsp;

---
##**Pre-requisites:**

 1. Your android project should have elements already. See [how to capture elements for an android application.](https://testsigma.com/docs/elements/android-apps/record-multiple-elements/)
 2. You should know [how to navigate the elements page.](https://testsigma.com/docs/elements/web-apps/overview/)

&emsp;

---
##**How to update one element at a time:**

 1. Select your project and then navigate to ‘Test Development > Elements’
 2. ‘All Elements’ page will appear. This contains all the elements that you have created for the selected android project, like this:

![all elements page to update elements for android project in Testsigma](https://docs.testsigma.com/images/update-elements/all-elements-page-update-elements-android-testsigma.png)

 3. Scroll or filter to find the element you want to update.
 4. Hover over the element and click on the ‘edit’ button’ that appears. The button is also highlighted in the screenshot below:

![edit button for an element in all elements page for android project in Testsigma](https://docs.testsigma.com/images/update-elements/edit-button-for-an-element-in-all-elements-android-testsigma.png)

 5. The Edit Element layover will appear:
   
![edit element page to update elements for android project in Testsigma](https://docs.testsigma.com/images/update-elements/edit-element-page-update-elements-android-testsigma.png)

There is a radio button that lets you choose between ‘Manually’ or ‘Element Inspector’. When ‘Manually’ is selected, you can make the changes you need to make in this element on the form and click on ‘Update’ to finalize the changes. For the recorder approach, see how to [update elements using recorder](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/update-elements/).

&emsp;

---
##**How to update multiple elements at once:**

 1. Select your android project and then navigate to ‘Test Development > Elements’
 2. On the top right, there is an option to export the elements in excel format:

![export button on all elements page to update elements for an android project Testsigma](https://docs.testsigma.com/images/update-elements/export-button-all-elements-page-update-elements-android-testsigma.png)

 3. In the excel sheet, update the required fields for the required elements.
 4. Click on the import button highlighted in the screenshot below. Select the excel sheet you updated in step 3 for import.

![import button on all elements page to update elements for an android project in Testsigma](https://docs.testsigma.com/images/update-elements/import-button-all-elements-page-update-elements-android-testsigma.png)

With import, the edits done in step 3 will be visible in the corresponding elements in your android project in Testsigma.







