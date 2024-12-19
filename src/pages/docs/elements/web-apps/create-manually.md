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
  name: "Prerequisites"
  url: "#prerequisites"
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

For dynamic websites such as E-commerce websites, the elements might be dynamic in nature i.e none of their attributes/properties remain constant across sessions. In such cases, there are chances for the elements created using Testsigma test Recorder to fail. In those specific cases, we might need to create some of the elements manually.

[[info | NOTE:]]
| This guide is intended for Advanced Users. Familiarity with Elements, XPath and CSS Selectors is recommended for this guide.

---


> ## **Prerequisites**
>
>
> Before you begin, ensure that you've a [Project](https://testsigma.com/docs/projects/overview/) in Testsigma and a web application is available for testing.

---

## **Steps to Create an Element**


1. Navigate to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sielelements.png)


2. Click on **Create**.
![Create Elemenet](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecmcelm.png)


3. On **Create Element** overlay, you'll see the following fields:
![Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waeceoverlay.png)
    - **Name:** Enter the name you want to give your element.
    - **Screen Name:** Mention the screen that your element resides on.
    - **Element Type:** There are 5 types of element types supported in Testsigma. This field is a drop-down list; you can select any of them: **XPATH**, **ID**, **Name**, **Class Name**, or **Accessibility ID**.
    - **Enter Value:** Enter the value corresponding to the **Element Type** you selected.


4. Once you have added all the details, click on **Create element**.
![Click on Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecedce.png)


5. The element will be saved in the elements list. 

[[info | **NOTE**:]]
| You can also create elements using the recorder by clicking on **Record Element** from the **Create Element** page. 
| ![Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecreccce.png)


---


## **Creating Element While Adding Test Steps**


1. Navigate to **Create Tests > Test Cases**, click on **Create Test Case** or go to a pre-existing test case. 
![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waectcca.png)


2. Add a test step to the test case that contains an element. 


3. Hover over the ***element*** and select **Create Element** from the dropdown.
![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waectcc.png)


Follow the steps 3-5 from above section to create an element manually. 


---

## **Updating an Element**


1. Navigate to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecue.png)


2. Hover over the element you want to update and click on the **kebab menu** to open a dropdown menu. Click on **Edit** from the dropdown.
![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waeckmue.png)


3. On the **Update Element** overlay, you can update the **Name**, **Screen Name**, select the **Element Type**. 
![Update Element Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecueev.png) 


1. Click on **Update**.
![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecupovrl.png)


---

## **Updating Multiple Elements**


1. Navigate to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecue.png)


2. Click on **Export** to download an XLSX file containing all elements from the project. 
![Export](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waecbuexp.png)


3. In the downloaded XLSX file, update the required fields for the required elements.


4. Click on **Import** and choose the updated XLSX file for import.
![Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemimpelem.png)


---