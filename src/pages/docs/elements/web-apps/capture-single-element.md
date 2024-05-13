---
title: "Capture Single Element for a Web Project"
metadesc: "Elements play an important role in Automation Testsing. Learn how to capture single element for a Web Application project in Testsigma"
noindex: false
order: 6.23
page_id: "Capture Single Element for a Web Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Capture an Element"
  url: "#steps-to-capture-an-element"
- type: link
  name: "Creating an Element While Creating Test Case"
  url: "#creating-an-element-while-creating-test-case"
- type: link
  name: "Steps to Create an Element From the Test Case Result Page"
  url: "#steps-to-create-an-element-from-the-test-case-result-page"
- type: link
  name: "Updating Elements Using Recorder"
  url: "#updating-elements-using-recorder"
- type: link
  name: "Reusing Elements Recorded"
  url: "#reusing-elements-recorded"
---

---

In a Web project in Testsigma, you can selectively capture elements one at a time using the Testsigma recorder. This article discusses how to capture single element using recorder. 

---

## **Prerequisites**

- You should know how to create a web [project](https://testsigma.com/docs/projects/overview/) in Testsigma.

- You should have [Testsigma chrome extension installed](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 

- A Web app to test.

---

## **Steps to Capture an Element**

1. Navigate to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielelements.png)

2. Click on **Record**.
![Record Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waeccorec.png)

3. This will open a new tab. Enter the URL from which you want to capture the single element. The Testsigma test recorder will appear and will be ready to start recording. Here, we opened a new tab and entered the URL for Simply Travel.
![New Tab](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielstweb.png)

4. Hover over the element you want to capture and make sure that it is highlighted in green (here we are capturing the username field):
![Element to Capture](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielungreen.png)

5. Click on the hovered element and wait for the element to appear in the recorder. 
![Element in Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielwfrta.png)

6. Click on **Capture**, you will be redirected to the **Elements** page. 
![Capture](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielcocapture.png)

7. Check all the options and click on **Create Element**. 
![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielcsdcoc.png)

Here’s a quick GIF demonstrating how to create an element from the **Elements** page.
![Element from Elements page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CreateSingleElemWF.gif)

---

## **Creating an Element While Creating Test Case**

1. Navigate to **Create Tests > Test Cases**, create a new test case or select an existing test case.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sieltcsstc.png)


2. Click on **Create Element**.
![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielcocelemftc.png)


3. Follow the steps 3-8, mentioned in **steps to create an element from the elements page** to create an element. 



---

## **Steps to Create an Element From the Test Case Result Page**

1. Navigate to **Run Results** and click on the run result you want to edit.
![Run Result](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielrr.png)


2. On the **Run Results Details** page, click on the test case result in which you want to edit the element.
![Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielstcr.png)


3. Click the test step in which you want to edit the element and hover over the test step details on the right side of the page and click on edit.
![Edit Icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielclickineicon.png)


4. You’ll get an **Update Element** overlay. 


5. Click on **Record Element** to capture a new element. *Refer to steps 3-8 from creating an element from the elements section for detailed information*.
![Update Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielements.png)



---

## **Updating Elements Using Recorder**


1. Navigate to **Create Tests > Elements** and create a test case using the recorder. 
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwaecnavel.png)


2. Hover over the element you want to update and click on **Edit Element**. 
![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecee.png)


3. On the **Update Element** overlay, you can update the **Element Name**, **Screen Name**, select the **Element Type & Location**. 
![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecueol.png) 


4. Click on **Update** to finalize the changes.
![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecueur.png)


---

## **Reusing Elements Recorded**

1. Create a test case in which you will be reusing your pre-recorded elements.


2. Start recording test steps for the test case.


3. Hover over the element on the test step where you want to reuse the saved element and click on **Change Element**.
![Change Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecchangeelm.png)


4. On **Elements** overlay, select the element you want to reuse. 
![Reuse](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecselm.png)


5. The element will be automatically updated. 

[[info | **NOTE**:]]
| You can also reuse the element by following the same steps while creating a test case manually.

---