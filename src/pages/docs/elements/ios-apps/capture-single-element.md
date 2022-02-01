---
title: "Create One Element at a Time (Using Mobile Inspector) for an iOS Project"
meta_desc: "How to create one element at a time by using the Testsigma mobile inspector for an iOS project in Testsigma."
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
In an iOS project in Testsigma, you can selectively capture elements one at a time using the Testsigma mobile inspector.

<br>

---
##**Pre-requisites**
1. You should have an iOS project in Testsigma. See [creating a project](https://testsigma.com/docs/projects/overview/).
2. Your iOS applications’ apk should be uploaded in Testsigma so that the mobile inspector can record elements from it. See [uploading apps to Testsigma](https://testsigma.com/docs/uploads/upload-apps/).

<br>

**Navigation**

**Test development > Elements**

<br>

---
##**How to create one element at a time by using the Testsigma mobile inspector for an iOS project in Testsigma**
1. On the ‘All Elements’ page, click on the ‘Create’ button on the top right corner of the page:
![create button on elements page under create one element at a time for an iOS project in Testsigma](https://docs.testsigma.com/images/capture-single-element/create-button-create-one-element-ios-testsigma.png)

2. On the ‘Create Element’ layover that appears, select the option ‘Element Inspector’:
![element inspector radio button on create element layover under create one element at a time for an iOS project in Testsigma](https://docs.testsigma.com/images/capture-single-element/element-inspector-radio-button-create-one-element-ios-testsigma.png)


3. Now select the lab, version, device, and the .ipa you want to capture the element from, and then click on the button ‘Launch’. This launches the Mobile inspector which should look something like this:
![mobile inspector screen under create one element at a time for an iOS project in Testsigma](https://docs.testsigma.com/images/capture-single-element/mobile-inspector-screen-create-one-element-ios-testsigma.png)

4. Make sure that the inspection mode is selected, using the button highlighted below:
![inspection mode button on mobile inspector screen under create one element at a time for an iOS project in Testsigma](https://docs.testsigma.com/images/capture-single-element/inspection-mode-button-create-one-element-ios-testsigma.png)

5. Now click on the element that you want to capture. On the element form that opens up, enter the ‘element name’ and ‘screen name’. You can also change the element type according to your preference in this form:

![element form on mobile inspector screen under create one element at a time for an iOS project in Testsigma](https://docs.testsigma.com/images/capture-single-element/element-form-create-one-element-ios-testsigma.png)

6. Once you enter the required details in the element form, click on the button ‘Save & Close’. The element will be saved in the project’s element list and the mobile inspector will be closed. 

You can also [capture multiple elements at once via mobile inspector](https://testsigma.com/docs/elements/ios-apps/record-multiple-elements/).