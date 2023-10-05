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
  name: "Steps to Create an Element From the Elements Page"
  url: "#steps-to-create-an-element-from-the-elements-page"
- type: link
  name: "Steps to Create an Element From the Test Case Creation Page"
  url: "#steps-to-create-an-element-from-the-test-case-creation-page"
- type: link
  name: "Steps to Create an Element From the Test Case Result Page"
  url: "#steps-to-create-an-element-from-the-test-case-result-page"
---

---

Sometimes while creating tests, we only need to capture the details of a single Element. You can employ the following methods to capture the single element. 
1. Create an element from the Elements page.
2. Create an element while creating a test case.
3. Create an element from a test case result.

This article discusses all 3 ways to capture a single element.

---

## **Prerequisites**
- You should have a web application project in Testsigma. See [creating a project](https://testsigma.com/docs/projects/overview/).
- You should have Testsigma Recorder Extension. See [install chrome extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).
- You should also know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) and [test executions](https://testsigma.com/docs/runs/test-plan-executions/).

---

## **Steps to Create an Element From the Elements Page**
1. Navigate to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielelements.png)

2. Click on **Create Element**.
![Create Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielcoce.png)

3. On **Create Element** overlay, click on **Record Element**.
![Record Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielcoce.png)

4. Open the new tab and enter the URL from which you want to capture the single element. The Testsigma test recorder will appear and will be ready to start recording. Here, we opened a new tab and entered the URL for Simply Travel.
![New Tab](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielstweb.png)

5. Hover over the element you want to capture and make sure that it is highlighted in green (here we are capturing the username field):
![Element to Capture](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielungreen.png)

6. Click on the hovered element and wait for the element to appear in the recorder. 
![Element in Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielwfrta.png)

7. Click on **Capture**, you will be redirected to the **Elements** page. 
![Capture](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielcocapture.png)

8. Check all the options and click on **Create Element**. 
![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielcsdcoc.png)

Here’s a quick GIF demonstrating how to create an element from the Elements page.
![Element from Elements page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CreateSingleElemWF.gif)

---

## **Steps to Create an Element From the Test Case Creation Page**
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



