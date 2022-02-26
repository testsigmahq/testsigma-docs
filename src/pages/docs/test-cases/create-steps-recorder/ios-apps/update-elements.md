---
title: "Update Elements for an iOS Project"
metadesc: "How to update an element via Testsigma’s Recorder for an iOS Project."
noindex: false
order: 4.537
page_id: "Update Elements for an iOS Project"
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
When you update the structure of your iOS application, you will need to update the corresponding elements in your automated test project in Testsigma too. In this document, we will discuss how to do that using Test Recorder.

&emsp;

---
##**Pre-requisites:**
You should already know [how to capture elements using Test Recorder](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/overview/).

&emsp;

---
##**How to update an element via Test Recorder:**
1. Create a Test Case using Test Recorder in your iOS Project. 
   
2. On the Test Recorder UI, hover over the step that has the element you want to edit. The elements appear in green on the Testsigma Mobile Test Recorder UI:


![Highlighted example elements in Testsigma Recorder for iOS](https://docs.testsigma.com/images/update-elements/highlighted-example-elements-ios-testsigma-mobile-inspector.png)

3. Click on the ‘More Details’ button corresponding to the step that you want to edit. The button corresponding to the step is highlighted in the screenshot below:

![more details button for a test step in an iOS Project in Testsigma while using the Recorder](https://docs.testsigma.com/images/update-elements/more-details-button-for-a-test-step-ios-testsigma-mobile-inspector.png)

4. Click on ‘More details’ button:

![test step details for an iOS test case on Testsigma Mobile Inspector UI](https://docs.testsigma.com/images/update-elements/test-step-details-testsigma-mobile-inspector-ios.png)

5. Click on the edit button corresponding to the element on the Test Step Details:

![edit element button on test step details section for Testsigma Recorder for iOS](https://docs.testsigma.com/images/update-elements/edit-element-button-test-step-details-testsigma-mobile-inspector-ios.png)


![edit element UI from test step details section on the Recorder UI for an iOS project in Testsigma](https://docs.testsigma.com/images/update-elements/edit-element-ui-from-test-step-details-mobile-inspector-ios-testsigma.png)


Here are the fields that appear on the ‘Edit Element’ window:

 **1. Name:** Text input field, you can edit the name of the Element here.

 **2. Screen Name:** This is an editable field, you can edit the screen name for the UI identifier here.

 **3. Element Type:** This is a drop-down field that has values:

 &emsp;a. Xpath

 &emsp;b. ID

 &emsp;c. Name

 &emsp;Class Name

 &emsp;sAccessibility ID

 You can select any of these options for an identifier type.

 **4. Enter Value:** Here, the value should correspond to the identifier type selected. This is also an editable field.

6. Click on the ‘Update’ button to finalize the changes.


