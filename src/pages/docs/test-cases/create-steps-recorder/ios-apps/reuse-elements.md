---
title: "Reuse Elements in an iOS Project"
metadesc: "How to reuse pre-recorded elements via Testsigma’s Recorder for an iOS project."
order: 4.536
page_id: "Reuse Elements in an iOS Project"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to reuse pre-recorded elements via Testsigma’s Recorder for an iOS project"
  url: "#how-to-reuse-pre-recorded-elements-via-testsigmas-recorder-for-an-ios-project"
---

---
When you record elements via Testsigma’s Recorder, they are saved as elements in the corresponding project in Testsigma. These elements are reusable, and you can add them in new test steps or test cases within the same project. In this document, we will discuss how to do that via Testsigma’s Recorder for an iOS project.

&emsp;
## **Pre-requisites:**
You should know how to [record a test case via Testsigma’s Recorder](https://testsigma.com/docs/test-cases/create-steps-recorder/ios-apps/overview/).

&emsp;
## **How to reuse pre-recorded elements via Testsigma’s Recorder for an iOS project:**

1. Create a test case in which you will be reusing your pre-recorded elements.
   
2. Start recording test steps for the test case.
   
3. Manually add a test step where you want to reuse elements:

![example of test steps that contain elements in an iOS project in Testsigma](https://docs.testsigma.com/images/reuse-elements/test-steps-that-contain-elements-testsigma-ios.png)

Alternatively, you can record a test step that uses an element. Given below is an example of test steps as they appear on the Recorder UI. The text in green is an element.

![example of recorded test steps that contain elements for an ios project in Testsigma](https://docs.testsigma.com/images/reuse-elements/recorded-test-steps-that-contain-element-testsigma-ios.png)

4. Hover on the test step that you want to edit and click on the corresponding edit button. 

5. Click on the green text that represents ‘element’. The ‘Elements’ section appears on the Recorder UI, listing all pre-recorded elements in the project:

![elements screen to reuse elements in Testsigma recorder for an ios project](https://docs.testsigma.com/images/reuse-elements/elements-screen-reuse-elements-testsigma-recorder-ios.png)

6. Start typing the name of the element that you want to reuse, the elements will be filtered by name. You can search the elements by name or by Screen name.
   
7. From the filtered results, you can click on the element that you want to use, and the element text in your test step will be replaced by the chosen element.
   
8. Click on the ‘Update’ button corresponding to the test step on the Testsigma Recorder UI to finalize the change.

