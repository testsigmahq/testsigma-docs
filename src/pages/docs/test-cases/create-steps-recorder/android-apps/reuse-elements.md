---
title: "Reuse Elements in an Android Project"
metadesc: "How to reuse pre-recorded elements via Testsigma’s Recorder for an Android project"
order: 4.526
page_id: "Reuse Elements in an Android Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to reuse pre-recorded elements via Testsigma’s Recorder for an android project"
  url: "#how-to-reuse-pre-recorded-elements-via-testsigmas-recorder-for-an-android-project"
---

---

When you record elements via Testsigma’s test Recorder, they are saved as elements in the corresponding project in Testsigma. These elements are reusable, and you can add them in new test steps or test cases within the same project. In this document, we will discuss how to do that via Testsigma’s test Recorder for an android project.

&emsp;

---
##**Pre-requisites:**

You should know how to [record a test case via Testsigma’s test Recorder.](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/overview/)

&emsp;

---
##**How to reuse pre-recorded elements via Testsigma’s test Recorder for an android project:**

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




