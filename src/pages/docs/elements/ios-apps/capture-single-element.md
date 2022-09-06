---
title: "Create One Element at a Time (Using Mobile Inspector) for an iOS Project"
metadesc: "How to create one element at a time by using the Testsigma mobile inspector for an iOS project in Testsigma."
noindex: false
canonical: "https://testsigma.com/docs/elements/ios-apps/capture-single-element/"
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

---


---
In an iOS project in Testsigma, you can selectively capture elements one at a time using the Test Recorder.

<br>

---
##**Pre-requisites**
1. You should have an iOS project in Testsigma. See [creating a project](https://testsigma.com/docs/projects/overview/).
2. Your iOS applications’ apk should be uploaded in Testsigma so that the Test recorder can record elements from it. See [uploading apps to Testsigma](https://testsigma.com/docs/uploads/upload-apps/).

<br>

**Navigation**

**Test development > Elements**

<br>

---
##**How to create one element at a time by using the Test recorder for an iOS project in Testsigma**
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