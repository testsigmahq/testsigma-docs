---
title: "Record Multiple Elements for an iOS Application"
metadesc: "How to record multiple elements for an iOS project in Testsigma."
order: 6.42
page_id: "Record Multiple Elements for an iOS Application"
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
  name: "How to record multiple elements for an iOS project in Testsigma"
  url: "#how-to-record-multiple-elements-for-an-ios-project-in-testsigma"

---

---
## **Introduction**
When automating test cases for an iOS application, you may sometimes want to capture multiple elements from the application in one go. Let’s see how to do that in Testsigma.

<br>

## **Pre-requisites** 

You should already know:
1. About Projects overview.
2. Your iOS applications’ apk should be uploaded in Testsigma so that the mobile inspector can record elements from it. 
See uploading apps to Testsigma.

<br>

**Navigation**

**Test Development > Element**

<br>

## **How to record multiple elements for an iOS project in Testsigma**

1. On the ‘All Elements’ page, click on the ‘Record’ button on the top right corner of the page:
![record button under record multiple elements for an iOS project in Testsigma](https://docs.testsigma.com/images/record-multiple-elements/record-button-record-multiple-elements-ios-testsigma.png)

2. On the ‘Record Element’ window that appears, select the device that you want to capture the elements from. The ‘record element’ window should look something like below:
![record element window under record multiple elements for an iOS project in Testsigma](https://docs.testsigma.com/images/record-multiple-elements/record-element-window-record-multiple-elements-ios-testsigma.png)

3. Once you have selected the version, device, and the .ipa you want to launch, click on the record button on the ‘Record Element’ window.
4. The mobile inspector screen should appear like this:
![mobile inspector screen under record multiple elements for an iOS project in Testsigma](https://docs.testsigma.com/images/record-multiple-elements/mobile-inspector-screen-record-multiple-elements-ios-testsigma.png)

5. Make sure that the inspection mode is selected. The inspection mode button is highlighted in the screenshot below:
![inspection mode button for mobile inspector under record multiple elements for an iOS project in Testsigma](https://docs.testsigma.com/images/record-multiple-elements/inspection-mode-button-record-multiple-elements-ios-testsigma.png)

6. Now click on the element that you want to capture. On the element form that opens up, enter the ‘element name’ and ‘screen name’. You can also change the element type according to your preference in this form:
![element form on mobile inspector screen under record multiple elements for an iOS project in Testsigma](https://docs.testsigma.com/images/record-multiple-elements/element-form-record-multiple-elements-ios-testsigma.png)

7. Once you’ve entered the details in the element form, click ‘Done’. The captured element will appear under elements on the same screen:
![elements section under record multiple elements for an iOS project in Testsigma](https://docs.testsigma.com/images/record-multiple-elements/elements-record-multiple-elements-ios-testsigma.png)


The elements can also be edited or deleted from this list using the ‘edit’ and ‘delete’ buttons that appear at the end of the element rows.

8. Repeat steps 6 and 7 for every element you want to capture.
9. Once you have captured the elements, click on the ‘Save’ button on the ‘Elements’ list to save the changes in the project. Once saved, a checkmark icon will appear corresponding to all the saved elements in the element list:

![saved elements in elements section under record multiple elements for an iOS project in Testsigma](https://docs.testsigma.com/images/record-multiple-elements/saved-elements-record-multiple-elements-ios-testsigma.png)

