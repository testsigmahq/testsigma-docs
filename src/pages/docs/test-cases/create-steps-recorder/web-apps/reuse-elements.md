---
title: "Reuse Elements in a Web Project"
metadesc: "How to reuse elements recorded via the Testsigma test recorder chrome extension for a web project."
order: 4.516
page_id: "Reuse Elements in a Web Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Reusing elements recorded via the Testsigma test recorder chrome extension"
  url: "#reusing-elements-recorded-via-the-testsigma-test-recorder-chrome-extension"
---

---

When you record elements via Testsigma test recorder chrome extension, they are saved as elements/UI identifiers in the corresponding project in Testsigma. These elements are reusable.

&emsp;

---
##**Pre-requisites:**

 You should already know how-to, or have:

 1. [Testsigma step recorder chrome extension.](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/)
 2. [record test steps via the Testsigma test recorder.](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/overview/)
 3. [add a test step via Testsigma’s test step recorder.](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/add-steps-before-after/)
 4. [capture elements via Testsigma test recorder chrome extension.](https://testsigma.com/docs/elements/web-apps/record-multiple-elements/)

&emsp;

---
##**Reusing elements recorded via the Testsigma test recorder chrome extension:**

 1. Create a new test case in the same Project.
 2. Start recording the test steps.
 3. Add a test step as follows:


![example of test steps that contain Element in Testsigma](https://docs.testsigma.com/images/reuse-elements/test-steps-that-contain-Element-testsigma.png)

You can also record a test step that uses an Element.

![example of recorded test steps that contain Elements in Testsigma](https://docs.testsigma.com/images/reuse-elements/recorded-test-steps-that-contain-Element-testsigma.png)

 4. Hover on the test step that you want to edit and click on the corresponding edit button. 
 5. Click on the green text that says ‘Element’. The ‘Elements’ page appears on the testsigma recorder UI. This will have all the Elements in the project:

![Elements screen to reuse elements in Testsigma recorder](https://docs.testsigma.com/images/reuse-elements/Elements-screen-reuse-elements-testsigma-recorder.png)

 6. Start typing the name of the Element that you want to use. The Elements can be filtered by name. You can also search the identifiers by name or by Screen name.
 7. From the filtered results, you can click on the Element that you want to use, and the Element text in your test step will be replaced by the chosen Element.
 8. Click on ‘Update’ button corresponding to the test step on the Testsigma recorder UI to finalize the change.






