---
title: "Create Element Manually"
metadesc: "Element path plays an important role in dynamic websites. Learn how to create elements manually for a Web Application project in Testsigma application"
noindex: false
order: 6.24
page_id: "Create Element Manually"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Why Create Elements Manually"
  url: "#why-create-elements-manually"
- type: link
  name: "Creating Element Manually"
  url: "#creating-element-manually"
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

We assume you are familiar with Elements[(?)](https://testsigma.com/docs/elements/overview/) and how to create them using the Testsigma test Recorder[(?)](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).<br>
If not, please refer: [Create an Element using test Recorder](https://testsigma.com/docs/elements/web-apps/record-multiple-elements/).

If you are not familiar with XPaths or CSS Selectors, please use the Testsigma test Recorder to get the Elements easily.

[[info | NOTE:]]
| This guide is intended for Advanced Users. Familiarity with Elements, XPath and CSS Selectors is recommended for this guide.


---
## **Why Create Elements Manually**

For dynamic websites such as E-commerce websites, the elements might be dynamic in nature i.e none of their attributes/properties remain constant across sessions. In such cases, there are chances for the Elements created using Testsigma test Recorder to fail. In those specific cases, we might need to create some of the Elements manually.


---

## **Creating Element Manually**

Navigate to **Test Development > Elements** to get to the Elements page:

![Elements-List](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/web-apps/create-manually/Elements-List.png)

Clicking on the Create button on the top right corner opens the Create Element page as shown below:

![Create Elements manually ](https://docs.testsigma.com/images/create-manually/element-create-manually.png)


Enter the details as mentioned below: <br>
&emsp;**Name:** Enter the name that is used for Element.<br>
&emsp;**Screen Name:** Screen Name will be helpful to group your Elements by each screen in your application. This helps you search Elements on each screen in your application.<br>
&emsp;**Element Type:** Select the suitable locator from a drop-down box: **ID, Name, XPath, CSS Selectors, link text, partial link text, class name, or tag name** <br>
&emsp;**Value:** Enter the value for the selected element type. To know more about creating different types of locators, refer to: [Different strategies for formulating Elements](https://testsigma.com/docs/elements/web-apps/creating-locators-manually-strategies/)

If you would like to know more about creating dynamic locators, refer: [Dynamic elements with Parameter Test Data](https://testsigma.com/docs/elements/dynamic-elements/with-parameter-test-data/)

After entering the values, click on the Create button to create the Element.


---

## **Creating Element While Adding Test Steps**
 1. Create a new test case or go to an existing test case. 
 2. Add a test step to the test case. The language for the test step should contain an Element. For inspiration, check the screenshot below:

![the various Actions test steps in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-various-Actions-test-steps-in-testsigma.png)

 3. Let’s say we added the step ‘Click on element’ to our test case. After addition, the step looks like this:

![Element specific test step test case page in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-element-specific-test-step-test-case-page-testsigma.jpg)

 4.  On the step, click on the green text ‘Element’, a layover will appear containing the Elements in the project, as shown in the screenshot below:

![Elements layover over a test case page in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-elements-layover-over-test-case-page-testsigma.png)

 5.  Here,if you want to create an element that is not added already, then you can start typing a new name for it: the option “NEW” will appear as also shown in the screenshot below:

![add new identifier with a new name on test case page in Testsigma](https://docs.testsigma.com/images/create-a-new-element/add-new-identifier-with-the-new-name-test-case-page-testsigma.png)

 6. Now click on the ‘NEW’ button highlighted in the last step. ‘Create Element’ form will open up as shown in the screenshot below:

![create Element form on test case page in Testsigma](https://docs.testsigma.com/images/create-a-new-element/the-create-element-form-on-test-case-page-in-testsigma.png)

 7. Here, you can create the Element either manually or via test recorder. To proceed with creating the Element manually, select ‘Manually’. 

    If you want to create elements in less than half the time, capture them using Testsigma’s test recorder. Read more about it [here](https://testsigma.com/docs/elements/web-apps/capture-single-element/). 

    Here’s how to create the Element manually:

 8. Once you select ‘Manually’, you will see the form options as shown in the screenshot below:

![create Element form in Testsigma with Manually radio button selected](https://docs.testsigma.com/images/create-a-new-element/create-Element-manually-testsigma.png)

&emsp;


Fill the fields you see:

 1. **Name**: Element name
 2. **Screen Name**: Screen that your element resides on.
 3. **Identifier Type**: There are 5 types of identifier types supported in Testsigma, this field is a drop-down list, you can select any one of them: XPATH, CSS Selector, ID, Name or Link Text

![identifier type dropdown values on the create Element form in Testsigma](https://docs.testsigma.com/images/create-a-new-element/identifier-type-dropdown-value-create-Element-testsigma.png)

 4. **Enter Value**: Enter the value here that is in correspondence with the Identifier Type you selected.
   
&emsp;

 Once you have added all the details, click on the ‘CREATE’ button and your created element will be replaced in the test step you were creating.

---

## **Updating an Element**

 1. To update an element, go to **Test Development > Elements**
 2. **All UI identifiers** page will appear that contains all the elements in the selected project:

![all-UI-identifiers-page-to-update-elements-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/web-apps/update-elements/all-UI-identifiers-page-to-update-elements-in-Testsigma.png)

 3. Go to the element that you want to update. If there are too many to find the right one, try filtering the elements.
 4. Hover over the element and click on the **Edit** button.

![edit button for an element in all UI identifiers page in Testsigma](https://docs.testsigma.com/images/update-elements/edit-button-for-an-element-in-all-ui-identifiers-testsigma.png)

 5. An Edit Elements layover opens as shown in the screenshot below:
![edit-UI-identifier-page-to-update-elements-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/web-apps/update-elements/edit-UI-identifier-page-to-update-elements-in-Testsigma.png)

Edit the element and click on **Update** to save the changes.

&emsp;

---
## **Updating Multiple Elements**

 1. Go to **Test Development > Elements**
 2. On the top right, there is an option to export the elements in excel format. Click it:

![export-button-on-UI-identifier-page-to-update-elements-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/web-apps/update-elements/export-button-on-UI-identifier-page-to-update-elements-in-Testsigma.png)

 3. On your workstation, update the excel sheet. Save the changes and close the file.
 4. In Testsigma, click on the import button and upload the saved file from the previous step.

![import-button-on-UI-identifier-page-to-update-elements-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/web-apps/update-elements/import-button-on-UI-identifier-page-to-update-elements-in-Testsigma.png)

This way, you can bulk edit element information. The changes will be visible in the corresponding elements in Testsigma.

---