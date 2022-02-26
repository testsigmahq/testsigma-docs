---
title: "Capture Single Element for a Web Project"
metadesc: "How to capture a single element using Testsigma’s test recorder chrome extension."
noindex: false
order: 6.23
page_id: "Capture Single Element for a Web Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Approach 1. Via the Elements page"
  url: "#approach-1-via-the-elements-page"
- type: link
  name: "Approach 2. While creating a test step in a test case"
  url: "#approach-2-while-creating-a-test-step-in-a-test-case"
- type: link
  name: "Approach 3. From a Test Case Result"
  url: "#approach-3-from-a-test-case-result"

---

---

Sometimes, during test creation, we only need to capture the details of a single Element. In Testsigma, there are multiple ways to do that, such as:

1. Via the Elements  page
2. While creating a test step in a test case
3. From a test case result


In this article, we will discuss all 3 ways to capture a single element.

<br>

---
##**Approach 1. Via the Elements page**

**Pre-requisite**

You should have the Testsigma test step recorder chrome extension already installed. If not, then refer to the document [here](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).


<br>

**Steps to follow:**
Here, a single element will be captured as an element in Testsigma. Learn more about [Elements](https://testsigma.com/docs/elements/overview/).

Let’s begin.

1. Go to the Elements page via **Test Development > Elements.** The Elements page should look something like this:

![elements-page-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/create-steps-nl/web-apps/update-elements/elements-page-in-Testsigma.png)


2. To capture a single UI element via the Test recorder chrome extension, click on the ‘create’ button on the top right corner of the elements page, the button is also highlighted in the screenshot below:

![create button on elements page in Testsigma](https://docs.testsigma.com/images/capture-single-element/create-button-on-elements-page-testsigma.png)

3. When you click on the ‘Create’ button, a layout appears as shown below:

![create-elements-page-in-Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/elements/web-apps/capture-single-element/create-elements-page-in-Testsigma.png)

4. Make sure the radio button ‘Chrome Extension’ is selected
5. Go to a new tab and enter the URL from which you want to capture the single element. The Testsigma test recorder will appear and will be ready to start recording. For example, we opened a new tab and entered the URL for orangehrmlive.

![recording element on a page in Testsigma](https://docs.testsigma.com/images/capture-single-element/recording-single-element-in-testsigma.png)

6. Now, hover over the element you want to capture and make sure that it is highlighted in green as shown in the screenshot below (here we wanted to capture the username field):

![select one element while recording in Testsigma](https://docs.testsigma.com/images/capture-single-element/select-one-element-record-in-testsigma.png)

7. Now click on the hovered element and wait for the element to appear in the ‘Record Elements’ window as shown below:

![single element capture via recorder in Testsigma](https://docs.testsigma.com/images/capture-single-element/captured-one-element-recorder-in-testsigma.png)

8. Now click on the ‘Done’ button on the ‘Record Elements’ window. 
9. You will be taken back to the Elements page and the details will be filled in as also shown in the screenshot below:

![Captured element from Testsigma chrome extension](https://docs.testsigma.com/images/capture-single-element/captured-element-chrome-extension-in-testsigma.png)

10. You need to fill in the ‘Screen Name’ field and then click on the ‘Create’ button. The Single Element will be created successfully.

You can follow these steps to create elements while creating a test case. The Create Element Form will come up when you are creating a test step (from the test case, from results page).

<br>

---
##**Approach 2. While creating a test step in a test case**

**Pre-requisites**
1. You should have the Testsigma test step recorder chrome extension already installed. If not, then refer to the document [here](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).
2. You should also know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and [create test steps](https://testsigma.com/docs/test-cases/step-types/natural-language/).


**Steps to follow:**

1. Start creating a test case or go to an already added test case. 
2. Add a test step to the test case that contains an Element. The language for the test step should contain an Element. Some examples of such steps are shown in the screenshot below:

![the various nlp test steps in Testsigma](https://docs.testsigma.com/images/capture-single-element/various-nlp-test-steps-in-testsigma.png)

3. Let’s say we added the step ‘Click on Element’ to our test case. The step will now like this:

![element specific test step test case page in Testsigma](https://docs.testsigma.com/images/capture-single-element/element-specific-test-step-test-case-page-testsigma.png)

4. On the step, click on the green text ‘element’, a layover will appear containing the elements in the project, as also shown in the screenshot below:

![elements layover over a test case page in Testsigma](https://docs.testsigma.com/images/capture-single-element/elements-layover-over-test-case-page-testsigma.png)

5. Here, if you want to add a Element that is not added already, then you can start typing a new name for it. If the name does not exist already, the option “NEW” will appear as also shown in the screenshot below:

![add new identifier with a new name on test case page in Testsigma](https://docs.testsigma.com/images/capture-single-element/add-new-identifier-with-new-name-test-case-page-testsigma.png)

6.  Now click on the ‘NEW’ button, highlighted in the last step. ‘Create Element’ form will open up as also shown in the screenshot below:

![create element form on test case page in Testsigma](https://docs.testsigma.com/images/capture-single-element/create-element-form-on-test-case-page-in-testsigma.png)

7. Now you can proceed with capturing a single element as we did in approach 1, from step 3.


<br>

---
##**Approach 3. From a Test Case Result**

**Pre-requisites**
1. You should have the Testsigma test step recorder chrome extension already installed. If not, then refer to the document [here](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).
2. You should also know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [capture a single element from test case results](https://testsigma.com/docs/reports/runs/overview/), and[test case executions](https://testsigma.com/docs/runs/test-plan-executions/).

**Steps to follow:**
1. Go to **‘Test Development > Run Results’** and click on the test run that you want to edit.
2. On the ‘Run Details’ page that opens, click on the test case result you want to edit from the ‘Test Case Results’ section. The ‘Test Case Results’ section is also highlighted in the screenshot below:

![test case results section highlighted on a test plan run details page in Testsigma](https://docs.testsigma.com/images/capture-single-element/test-case-results-section-highlighited-test-plan-run-testsigma.png)

3. On the ‘Test Step Result Details’ page that opens, click on the test step that you want to edit. For the purpose of this article, you need to hover on the test step that has an Element and the one that you want to edit.
4. On hover, the edit button will appear:

![edit button on hover over a test step in test results in Testsigma](https://docs.testsigma.com/images/capture-single-element/edit-button-on-hover-test-step-in-test-results-testsigma.png)

Click on this edit button.

5. On the edit interface that opens, click on the Element that you wanted to edit. In our case, we will click on ‘Username’.
6. A layover will appear containing the elements in the project, as also shown in the screenshot below:

![layover listing elements in project in Testsigma](https://docs.testsigma.com/images/capture-single-element/layover-listing-elements-in-project-in-testsigma.png)


7. Here, if you want to add a Element that is not added already, then you can start typing a new name for it. If the name does not exist already, the option “NEW” will appear as shown below:

![add new name identifier from result page in Testsigma](https://docs.testsigma.com/images/capture-single-element/add-new-name-identifier-from-result-page-in-testsigma.png)

8. Now click on the ‘NEW’ button, highlighted in the last step. ‘Create Element’ form will open up:

![create UI Identifier layover on a Test Case Result page in Testsigma](https://docs.testsigma.com/images/capture-single-element/create-ui-identifier-layover-test-case-result-testsigma.png)


9. Now you can proceed with capturing a single element as we did in approach 1, from step 3.
