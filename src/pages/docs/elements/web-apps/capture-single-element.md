---
title: "Record Single Element Using Recorder"
metadesc: "Elements play an important role in Automation Testsing. Learn how to capture single element for a Web Application project in Testsigma"
noindex: false
order: 6.22
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
  name: "Reusing Elements Recorded"
  url: "#reusing-elements-recorded"
---

---

You can also selectively capture single element of a web application using Testsigma recorder. This article discusses how to capture a single element using the Testsigma test recorder.

---


> ## **Prerequisites**
>
> - You should know how to create a [project](https://testsigma.com/docs/projects/overview/) and [application](https://testsigma.com/docs/projects/applications/) in Testsigma.
>
> - You should have [Testsigma chrome extension installed](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 
>
> - A Web app to test.


---

## **Steps to Capture an Element**


1. From the left navigation bar, go to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rmenavelem.png)

2. Click on **Record** on the top right corner. 
![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rmecorec.png)

3. This will open a new tab. Enter the URL from which you want to capture the elements. The Testsigma test recorder will appear and will be ready to start recording. Here, we entered the URL for Simply Travel Web.
![New Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rmenwrec.png)

4. Hover over the element you want to capture and make sure that it is highlighted in green (for example, here we are capturing the **Login or Signup** field):
![Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rmeloselm.png)

5. Click on the hovered element and wait for the element to appear in the recorder.
![Element in Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rmecoelm.png)

[[info | **NOTE**:]]
| - To update an element, hover over the recorded element and select the edit icon. Change the element details manually and click **Update** to finalize the changes.
|   ![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cseuelm.png)
| - You can also update the element from the run results by navigating to **Ad-Hoc Runs > Test Step > Element > Edit Element**.

6. Once you have captured the necessary element, click on **Stop**.
![Stop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rsecosp.png)

7. You'll be redirected to the **Elements** page, where you can see all recorded elements.

Here’s a quick GIF demonstrating how to record multiple elements for a web application. 
![Record Multiple Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/RecordMultipleElements.gif)


---

## **Creating an Element While Creating Test Case**

1. From the left navigation bar, go to **Create Tests > Test Cases**, create a new test case or select an existing test case.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/csenavtcs.png)

2. Click on element in any test step and choose **Create Element** from the dropdown. This will open the **Create Element** overlay. 
![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/csecocefdd.png)

3. Click on **Record Element** and follow the steps 3-8, mentioned in steps to create an element from the elements page to create an element.
![Record Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rsecorfueol.png)



---

## **Reusing Elements Recorded**

1. Create a test case in which you will be reusing your pre-recorded elements.

2. Start recording test steps for the test case.

3. Hover over the element on the test step where you want to reuse the saved element and click on **Change Element**.
![Change Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ruelmcelm.png)

4. On **Elements** overlay, select the element you want to reuse.
![Select Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ruelmse.png)

[[info | **NOTE**:]]
| You can also reuse the element by following the same steps while creating a test case manually.

---