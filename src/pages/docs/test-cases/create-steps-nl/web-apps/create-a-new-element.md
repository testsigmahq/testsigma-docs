---
title: "Create Elements while Adding Steps"
metadesc: "How to create elements while adding test steps to a test case in Testsigma."
order: 4.441
page_id: "Create Elements while Adding Steps"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Steps to follow"
  url: "#steps-to-follow"
---

---

There are times when you want to add more elements while adding test steps in a test case. Here’s how you can do that.

&emsp;
---

## **Pre-requisites**

We assume that you
 1. Have installed the [Test Recorder](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). Learn more about the [Test Recorder.](https://testsigma.com/docs/test-cases/create-steps-recorder/web-apps/overview/)
 2. Know how to [Create test case.](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)
 3. Know how to add test steps using [Actions](https://testsigma.com/docs/test-cases/create-steps-nl/overview/).

&emsp;
---

## **Steps to follow**
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


