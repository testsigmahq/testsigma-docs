---
title: "Create Elements [Manually]"
metadesc: "Element path plays an important role in dynamic websites. Learn how to create elements manually for a android apps in Testsigma application"
noindex: false
order: 6.34
page_id: "Create Elements [Manually]"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Introduction"
  url: "#introduction"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Creating Elements"
  url: "#creating-elements"
- type: link
  name: "Creating Element While Adding Test Steps"
  url: "#creating-element-while-adding-test-steps"
- type: link
  name: "Updating an Element"
  url: "#updating-an-element"
- type: link
  name: "Updating Multiple Elements"
  url: "#updating-multiple-elements"
---


---

In this document, we will discuss how to create elements manually for your android project in Testsigma i.e. without the use of a mobile test recorder.

---

## **Prerequisites**
- You should have an android project in Testsigma. See [creating a project](https://testsigma.com/docs/projects/overview/).

---

## **Creating Elements**
1. Go to your android project, then go to Test Development > Elements.
2. On the ‘All Elements’ page that appears, click on the create button on the top right:

![all-elements-page-for-an-android-project-with-Manually-radio-button-selected](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/android-apps/create-manually/all-elements-page-for-an-android-project-with-Manually-radio-button-selected.png)

3. The ‘Create Element’ form opens up, like this:

![create-element-form-in-Testsigma-for-an-android-project-with-Manually-radio-button-selected](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/android-apps/create-manually/create-element-form-in-Testsigma-for-an-android-project-with-Manually-radio-button-selected.png)

4.  Create the element either manually or via element inspector. In this document, we will cover how to create elements ‘manually’. You can also [capture elements via Testsigma’s mobile test recorder](https://testsigma.com/docs/elements/android-apps/capture-single-element/). For now, select the radio button ‘Manually’.

5. You will see the form options as shown in the screenshot below:

![create element form in Testsigma for an android project with Manually radio button selected](https://docs.testsigma.com/images/create-manually/create-element-manually-android-testsigma.png)

Here are the fields that you will see:<br>
&emsp;&emsp; 1. **Name:** Enter the name you want to give your element.<br>
&emsp;&emsp; 2. **Screen Name:** Mention the screen that your element resides on.<br>
&emsp;&emsp; 3. **Element Type:** There are 5 types of element types supported in Testsigma. This field is a drop-down list and you can select any one of them: XPATH, ID, Name, Class Name, or Accessibility ID<br>

![element type dropdown values on the create element form for android project in Testsigma](https://docs.testsigma.com/images/create-manually/element-type-dropdown-value-create-an-element-android-testsigma.png)
&emsp;&emsp;4. **Enter Value:** Enter the value here that is in correspondence with the element Type you selected.

<br>

6. Once you have added all the details, click on the ‘Create’ button and the element you created will be added to the project.


---

## **Creating Element While Adding Test Steps**
 1. Create a test case or go to a pre-existing test case. 
 2. Add a test step to the test case that contains an element. The language for the test step should contain an element. Some examples of such steps for an android application are shown in the screenshot below:

![the various Action test steps for android application in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-various-Actions-test-steps-android-testsigma.png)

 3.  Let’s say we add a step ‘Tap on element’ to our test case:

![Element specific test step test case page for android project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-element-specific-test-step-test-case-page-android-testsigma.png)

 4. On the step, click on the green text ‘element’, a layover will appear containing the elements in the project like this:

![Elements layover over a test case page for android project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-elements-layover-over-test-case-page-android-testsigma.png)

 5. Here, to create an element that is not in the list, start typing a new name for the element, the option “NEW” will appear like this:

![add new element with a new name on test case page for android project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/add-new-element-with--new-name-test-case-page-android-testsigma.png)

 6. Click on the ‘NEW’ button highlighted in the last step. ‘Create Element’ form will open up as shown in the screenshot below:

![create element form on test case page for android project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-create-element-form-on-test-case-page-android-testsigma.png)

 7. Create the element either manually or via element Test recorder. In this document, we will cover how to create elements ‘manually’. You can also [capture elements via Test recorder](https://testsigma.com/docs/elements/android-apps/capture-single-element/). For now, select the radio button ‘Manually’.

 8. You will see the form options as shown in the screenshot below:

![create element form in Testsigma for an android project with Manually radio button selected ](https://docs.testsigma.com/images/create-a-new-element/create-element-manually-android-testsigma.png)

&emsp;

Here are the fields that you will see:
 1. **Name**: Enter the name you want to give your element.
 2. **Screen Name**: Mention the screen that your element resides on.
 3. **Element Type**: There are 5 types of identifier types supported in Testsigma. This field is a drop-down list and you can select any one of them: XPATH, ID, Name, Class Name, or Accessibility ID
 4. **Enter Value**: Enter the value here that is in correspondence with the Identifier Type you selected

![element type dropdown values on the create element form for android project in Testsigma](https://docs.testsigma.com/images/create-a-new-element/element-type-dropdown-value-create-an-element-android-testsigma.png)

 9. Once you have added all the details, click on the ‘Create’ button. The green text ‘element’ will be replaced in the test step you were creating. 

    You can now continue adding the test step for your android project.

---

## **Updating an Element**

 1. Select your project and then navigate to **Test Development > Elements**
 2. **All Elements** page will appear. This contains all the elements that you have created for the selected android project, like this:

![all elements page to update elements for android project in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/android-apps/update-elements/all-elements-page-update-elements-android-testsigma.png)

 3. Scroll or filter to find the element you want to update.
 4. Hover over the element and click on the **Edit** that appears. The button is also highlighted in the screenshot below:

![edit button for an element in all elements page for android project in Testsigma](https://docs.testsigma.com/images/update-elements/edit-button-for-an-element-in-all-elements-android-testsigma.png)

 5. The Edit Element layover will appear:
   
![edit element page to update elements for android project in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/android-apps/update-elements/edit-element-page-update-elements-android-testsigma.png)

There is a radio button that lets you choose between **Manually** or **Element Inspector**. When **Manually** is selected, you can make the changes you need to make in this element on the form and click on **Update** to finalize the changes. For the Test recorder approach, see how to [update elements using Test recorder](https://testsigma.com/docs/test-cases/create-steps-recorder/android-apps/update-elements/).

---

## **Updating Multiple Elements**

 1. Select your android project and then navigate to **Test Development > Elements**
 2. On the top right, there is an option to export the elements in excel format:

![export button on all elements page to update elements for an android project Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/android-apps/update-elements/export-button-all-elements-page-update-elements-android-testsigma.png)

 3. In the excel sheet, update the required fields for the required elements.
 4. Click on **Import**. Select the excel sheet you updated in step 3 for import.

![import button on all elements page to update elements for an android project in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/android-apps/update-elements/import-button-all-elements-page-update-elements-android-testsigma.png)

With import, the edits done in step 3 will be visible in the corresponding elements in your android project in Testsigma.


---