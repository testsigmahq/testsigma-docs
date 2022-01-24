---
title: "Create an Element for an iOS Project"
metadesc: "How to create an element while adding test steps to a test case for an iOS project in Testsigma."
order: 4.461
page_id: "Create an Element for an iOS Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "How to create an element while adding test steps to a test case for an iOS project in Testsigma"
  url: "#how-to-create-an-element-while-adding-test-steps-to-a-test-case-for-an-ios-project-in-testsigma"
---

---

You can add new elements while you’re adding test steps to your test case manually (i.e., coding it in simple English) in an iOS project in Testsigma. This document will discuss how to do that.

&emsp;
---
##**Pre-requisites**

You should already know how to

 1. [use the Testsigma recorder for capturing elements.](https://testsigma.com/docs/elements/ios-apps/capture-single-element/)
 2. [create a test case.](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
 3. [add test steps during test case creation for an iOS project.](https://testsigma.com/docs/test-cases/step-types/overview/)

&emsp;
---
##**How to create an element while adding test steps to a test case for an iOS project in Testsigma:**
 1. Create a test case or go to a pre-existing test case. 
   
 2. Add a test step to the test case that contains an element. The language for the test step should contain an element. Some examples of such steps for an iOS application are shown in the screenshot below:

![the various Action test steps for iOS application in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-various-Actions-test-steps-ios-testsigma.png)

 3. Let’s say we added the step ‘Tap on element’ to our test case:

![Element specific test step test case page for iOS project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-element-specific-test-step-test-case-page-ios-testsigma.png)

 4. On the step, click on the green text ‘element’, a layover will appear containing the elements in the project like this:

![Elements layover over a test case page for iOS project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-elements-layover-over-test-case-page-ios-testsigma.png)

 5. Here, to create an element that is not in the list, start typing a new name for the element, the option “NEW” will appear like this:

![add new element with a new name on test case page for iOS project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/add-new-element-with--new-name-test-case-page-ios-testsigma.png)

 6. Click on the ‘NEW’ button highlighted in the last step. ‘Create Element’ form will open up as shown in the screenshot below:

![create element form on test case page for iOS project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-create-element-form-on-test-case-page-ios-testsigma.png)

 7. Create the element either manually or via element inspector. In this document, we will cover how to create elements ‘manually’. You can also [capture elements via Testsigma’s recorder](https://testsigma.com/docs/elements/ios-apps/capture-single-element/). For now, select the radio button ‘Manually’.

 8. You will see the form options as shown in the screenshot below:

![create element form in Testsigma for an iOS project with Manually radio button selected ](https://docs.testsigma.com/images/create-a-new-element/create-element-manually-ios-testsigma.png)

Here are the fields that you will see:

**Name**: Enter the name you want to give your element.

**Screen Name**: Mention the screen that your element resides on.

**Element Type**: There are 5 types of identifier types supported in Testsigma. This field is a drop-down list and you can select any one of them: XPATH, ID, Name, Class Name, or Accessibility ID

**Enter Value**: Enter the value here that is in correspondence with the Identifier Type you selected.

![element type dropdown values on the create element form for iOS project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/element-type-dropdown-value-create-an-element-ios-testsigma.png)

 8. Once you have added all the details, click on the ‘Create’ button. The green text ‘element’ will be replaced in the test step you were creating. 

You can now continue adding the test step for your iOS project.



