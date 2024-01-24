---
title: "Create Elements Manually"
metadesc: "Element path plays an important role in dynamic websites. Learn how to create elements manually for a android apps in Testsigma application"
noindex: false
order: 6.34
page_id: "Create Elements [Manually]"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create an Element"
  url: "#steps-to-create-an-element"
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

In Testsigma, you can also create elements manually for your android project without using recorder. This article discusses how to create elements manually with simple steps.

---

## **Prerequisites**

- You should know how to create an android [project](https://testsigma.com/docs/projects/overview/) in Testsigma.

- An Android app to test.

---

## **Steps to Create an Element**

1. Navigate to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cseapnavele.png)

2. Click on **Create Element**.
![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemnave.png)

3. On **Create Element** overlay, you'll see the following fields:
![Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemceovr.png)
    - **Name:** Enter the name you want to give your element.
    - **Screen Name:** Mention the screen that your element resides on.
    - **Element Type:** There are 5 types of element types supported in Testsigma. This field is a drop-down list; you can select any of them: **XPATH**, **ID**, **Name**, **Class Name**, or **Accessibility ID**.
    - **Enter Value:** Enter the value corresponding to the **Element Type** you selected.

4. Once you have added all the details, click on **Create element**.
![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemcoce.png)

5. The element will be saved in the elements list. 

[[info | **NOTE**:]]
| You can also create elements using the recorder by clicking on **Record Element** from the **Create Element** page. 
| ![Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemurecr.png)


---


## **Creating Element While Adding Test Steps**

1. Navigate to **Create Tests > Test Cases**, click on **Create Test Case** or go to a pre-existing test case. 
![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemnavtc.png)


2. Add a test step to the test case that contains an element. 


3. Hover over the ***element*** and select **Create Element** from the dropdown.
![Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemcocelaa.png)

Follow the steps 3-5 from above section to create an element manually. 

---

## **Updating an Element**


1. Navigate to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cseapnavele.png)


2. Hover over the element you want to update and click on the **kebab menu** to open a dropdown menu. Click on **Edit** from the dropdown.
![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemaaedit.png)


3. On the **Update Element** overlay, you can update the **Name**, **Screen Name**, select the **Element Type**. 
![Update Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemuelem.png) 


4. Click on **Update**.
![Click on Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemcouelem.png)



---

## **Updating Multiple Elements**

1. Navigate to **Create Tests > Elements**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cseapnavele.png)

2. Click on **Export**.
![Export](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemexpelm.png)

3. In the downloaded XLSX file, update the required fields for the required elements.

4. Click on **Import** and choose the updated XLSX file for import.
![Import](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cemimpelem.png)


---