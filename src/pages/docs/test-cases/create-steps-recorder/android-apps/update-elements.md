---
title: "Update Elements for an Android Project"
metadesc: "How to update an element via Testsigma’s Recorder for an Android Project."
order: 4.527
page_id: "Update Elements for an Android Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to update an element via Testsigma’s Recorder"
  url: "#how-to-update-an-element-via-testsigmas-recorder"
---

---

When you update the structure of your android application, you will need to update the corresponding elements in your automated test project in Testsigma too. In this document, we will discuss how to do that using Testsigma’s Recorder.

&emsp;

## **Pre-requisites:**

You should already know how to [capture elements using Recorder.](https://testsigma.com/docs/elements/android-apps/capture-single-element/)

&emsp;

## **How to update an element via Testsigma’s Recorder:**

 1. Create a Test Case using Testsigma’s Recorder in your Android Project. 
 2. On the Recorder UI, hover over the step that has the element you want to edit. The elements appear in green on the Testsigma Recorder UI

![Highlighted example elements in Testsigma Recorder](https://docs.testsigma.com/images/update-elements/highlighted-example-elements-android-testsigma-Recorder.png)
 

 3. Click on the ‘More Details’ button corresponding to the step that you want to edit. The button corresponding to the step is highlighted in the screenshot below:

![more details button for a test step in an Android Project in Testsigma while using the Recorder](https://docs.testsigma.com/images/update-elements/more-details-button-for-a-test-step-android-testsigma-Recorder.png)

 4. Click on ‘More details’ button:

![test step details for an Android test case on Testsigma Recorder UI](https://docs.testsigma.com/images/update-elements/test-step-details-testsigma-Recorder-android.png)

 5. Click on the edit button corresponding to the element on the Test Step Details:

![edit element button on test step details section for testsigma Recorder for android](https://docs.testsigma.com/images/update-elements/edit-element-button-test-step-details-testsigma-Recorder-android.png)

&emsp;

![edit element UI from test step details section on the Recorder UI for an android project in Testsigma](https://docs.testsigma.com/images/update-elements/edit-element-ui-from-test-step-details-Recorder-android-testsigma.png)

&emsp;

Here are the fields that appear on the ‘Edit Element’ window:

 * **Name**: Text input field, you can edit the name of the Element here
 * **Screen Name**: This is an editable field, you can edit the screen name for the Element here.
 * **Element Type**: This is a drop-down field that has values:
   1. Xpath
   2. ID
   3. Name
   4. Class Name
   5. Accessibility ID

You can select any of these options for identifier type.
 * **Enter Value**: Here, the value should correspond to the identifier type selected. This is also an editable field.


6. Click on the ‘Update’ button to finalize the changes.



