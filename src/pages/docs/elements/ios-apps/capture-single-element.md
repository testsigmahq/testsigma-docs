---
title: "Create One Element at a Time (Using Mobile Inspector) for an iOS Project"
metadesc: "Learn how to selectively capture elements one at a time by using the Testsigma mobile inspector for an iOS project in Testsigma application."
noindex: false
order: 6.43
page_id: "Create One Element at a Time (Using Mobile Inspector) for an iOS Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Introduction"
  url: "#introduction"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to create one element at a time by using the Testsigma mobile inspector for an iOS project in Testsigma"
  url: "#how-to-create-one-element-at-a-time-by-using-the-testsigma-mobile-inspector-for-an-ios-project-in-testsigma"
- type: link
  name: "Update an Element"
  url: "#update-an-element"
- type: link
  name: "Reusing Elements"
  url: "#reusing-elements"
---


---
In an iOS project in Testsigma, you can selectively capture elements one at a time using the Test Recorder.

<br>

---
## **Pre-requisites**
1. You should have an iOS project in Testsigma. See [creating a project](https://testsigma.com/docs/projects/overview/).
2. Your iOS applications’ apk should be uploaded in Testsigma so that the Test recorder can record elements from it. See [uploading apps to Testsigma](https://testsigma.com/docs/uploads/upload-apps/).

<br>

---
## **How to create one element at a time by using the Test recorder for an iOS project in Testsigma**
1. On the ‘All Elements’ page, click on the ‘Create’ button on the top right corner of the page:
![create button on elements page under create one element at a time for an iOS project in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/ios-apps/capture-single-element/create-button-create-one-element-ios-testsigma.png)

2. On the ‘Create Element’ layover that appears, select the option ‘Element Inspector’:
![element inspector radio button on create element layover under create one element at a time for an iOS project in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/ios-apps/capture-single-element/element-inspector-radio-button-create-one-element-ios-testsigma.png)


3. Now select the lab, version, device, and the .ipa you want to capture the element from, and then click on the button ‘Launch’. This launches the Test recorder which should look something like this:
![Single Element Recorder Interface in iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/ios-apps/capture-single-element/ios-single-element-recorder-interface.png)

4. Make sure that the "Select Element" Button, using the button highlighted below:
![Select Element Button in Element recorder interface](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/ios-apps/capture-single-element/ios-single-element-recorder-interface-select-button.png)

5. Now click on the element that you want to capture. On the element form that opens up, enter the ‘element name’ and ‘screen name’. You can also change the element type according to your preference in this form:

![Element Form in Element Recorder Interface](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/ios-apps/capture-single-element/ios-single-element-recorder-interface-element-form.png)

6. Once you enter the required details in the element form, click on the button ‘Save & Close’. The element will be saved in the project’s element list and the Test recorder will be closed. 

You can also [capture multiple elements at once via Test recorder](https://testsigma.com/docs/elements/ios-apps/record-multiple-elements/).


---

## **Update an Element**
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

---

## **Reusing Elements**

1. Create a test case in which you will be reusing your pre-recorded elements.
   
2. Start recording test steps for the test case.
   
3. Manually add a test step where you want to reuse elements:

![example of test steps that contain elements in an iOS project in Testsigma](https://docs.testsigma.com/images/reuse-elements/test-steps-that-contain-elements-testsigma-ios.png)

Alternatively, you can record a test step that uses an element. Given below is an example of test steps as they appear on the Recorder UI. The text in green is an element.

![example of recorded test steps that contain elements for an ios project in Testsigma](https://docs.testsigma.com/images/reuse-elements/recorded-test-steps-that-contain-element-testsigma-ios.png)

4. Hover on the test step that you want to edit and click on the corresponding edit button. 

5. Click on the green text that represents ‘element’. The ‘Elements’ section appears on the Test Recorder UI, listing all pre-recorded elements in the project:

![elements screen to reuse elements in Testsigma recorder for an ios project](https://docs.testsigma.com/images/reuse-elements/elements-screen-reuse-elements-testsigma-recorder-ios.png)

6. Start typing the name of the element that you want to reuse, the elements will be filtered by name. You can search the elements by name or by Screen name.
   
7. From the filtered results, you can click on the element that you want to use, and the element text in your test step will be replaced by the chosen element.
   
8. Click on the ‘Update’ button corresponding to the test step on the Test Recorder UI to finalize the change.

---