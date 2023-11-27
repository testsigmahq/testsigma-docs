---
title: "Create One Element at a Time (Using Mobile Inspector) for an Android Project"
metadesc: "Learn how to create one element at a time using the Testsigma mobile inspector for an android project in Testsigma application."
noindex: false
order: 6.33
page_id: "Create One Element at a Time (Using Mobile Inspector) for an Android Project"
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
  name: "How to create one element at a time using the Testsigma mobile inspector for an android project in Testsigma"
  url: "#how-to-create-one-element-at-a-time-using-the-testsigma-mobile-inspector-for-an-android-project-in-testsigma"
- type: link
  name: "Updating an Element"
  url: "#updating-an-element"
- type: link
  name: "Reusing Elements Recorded"
  url: "#reusing-elements-recorded"
---


---
## **Introduction**
In an Android project in Testsigma, you can selectively capture elements one at a time using the Testsigma mobile test recorder. 

<br>

---
## **Pre-requisites**
1. You should have an android project in Testsigma. See [creating a project](https://testsigma.com/docs/projects/overview/).
2. Your android applications’ apk should be uploaded in Testsigma so that the mobile test recorder can record elements from it. See [uploading apps to Testsigma](https://testsigma.com/docs/uploads/upload-apps/).

<br>

---
## **How to create one element at a time using the Testsigma mobile test recorder for an android project in Testsigma**

1. On the ‘All Elements’ page, click on the ‘Create’ button on the top right corner of the page:

![create-button-on-elements-page-under-create-one-element-at-a-time-for-an-android-project-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/android-apps/capture-single-element/create-button-on-elements-page-under-create-one-element-at-a-time-for-an-android-project-in-Testsigma.png)

2. On the ‘Create Element’ layover that appears, select the option ‘Element Inspector’:

![element-inspector-radio-button-on-create-element-layover-under-create-one-element-at-a-time-for-an-android-project-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/android-apps/capture-single-element/element-inspector-radio-button-on-create-element-layover-under-create-one-element-at-a-time-for-an-android-project-in-Testsigma.png)

3. Now select the lab, version, device, and the apk you want to capture the element from, and then click on the button ‘Launch’. This launches the Mobile test recorder which should look something like this:

![Single Element recorder interface for Android](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/android-apps/capture-single-element/android-single-element-recorder-interface.png)

4. Make sure that the "Select Element" Button is selected, using the button highlighted below:

![Select Element Button in Element recorder interface](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/android-apps/capture-single-element/android-single-element-recorder-interface-select-button.png)

5. Now click on the element that you want to capture. On the element form that opens up, enter the ‘element name’ and ‘screen name’. You can also change the element type according to your preference in this form:

![Single Element Recorder Interface Element Form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/android-apps/capture-single-element/android-single-element-recorder-interface-element-form.png)

6. Once you enter the required details in the element form, click on the button ‘Save & Close’. The element will be saved in the project’s element list and the mobile test recorder  will be closed. 

You can also [capture multiple elements at once via mobile test recorder](https://testsigma.com/docs/elements/android-apps/record-multiple-elements/).


## **Updating an Element**

 1. Create a Test Case using Testsigma’s test Recorder in your Android Project. 
 2. On the Recorder UI, hover over the step that has the element you want to edit. The elements appear in green on the Testsigma test Recorder UI

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

You can select any of these options for element type.
 * **Enter Value**: Here, the value should correspond to the element type selected. This is also an editable field.


6. Click on the ‘Update’ button to finalize the changes.

---


## **Reusing Elements Recorded**

 1. Create a test case in which you will be reusing your pre-recorded elements.
 2. Start recording test steps for the test case.
 3. Manually add a test step where you want to reuse elements:


![example of test steps that contain elements in an android project in Testsigma](https://docs.testsigma.com/images/reuse-elements/test-steps-that-contain-elements-testsigma-android.png)

&emsp;

Alternatively, you can record a test step that uses an element. Given below is an example of test steps as they appear on Recorder UI. The text in green is an element.

![example of recorded test steps that contain elements for an android project in Testsigma](https://docs.testsigma.com/images/reuse-elements/recorded-test-steps-that-contain-element-testsigma-android.png)

 4. Hover on the test step that you want to edit and click on the corresponding edit button. 
 5. Click on the green text that represents ‘element’. The ‘Elements’ section appears on the test Recorder UI, listing all pre-recorded elements in the project:

![Elements screen to reuse elements in Testsigma Recorder for an android project](https://docs.testsigma.com/images/reuse-elements/Element-screen-reuse-elements-testsigma-Recorder-android.png)

 6. Start typing the name of the element that you want to reuse, the elements will be filtered by name. You can search the elements by name or by Screen name.
 7. From the filtered results, you can click on the element that you want to use, and the element text in your test step will be replaced by the chosen element.
 8. Click on ‘Update’ button corresponding to the test step on the Testsigma test Recorder UI to finalize the change.

---