---
title: "Batch Element Recorder for Desktop Automation"
page_title: "Batch Element Recorder for Desktop Automation"
metadesc: "Batch Element Recorder captures all UI elements in a desktop app window at once and displays them in a tree structure. This article explains how to use it."
noindex: false
order: 30.4
page_id: "batch-element-recorder-for-desktop-automation"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Elements Using Batch Element Recorder"
  url: "#steps-to-create-elements-using-batch-element-recorder"
---

---

The Batch Element Recorder lets you capture all UI elements in a desktop application window at once, without manually selecting each element. Once recorded, the elements are displayed in a hierarchical tree structure for easy viewing and locating while creating test cases. This article discusses how to create multiple elements using Batch Elements Recorder. 

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. You have referred to the [documentation on creating projects](https://testsigma.com/docs/projects/overview/).
> 2. You have referred to the [docuemntation on creating applications](https://testsigma.com/docs/projects/applications/) in Testsigma.
> 3. You should have the **Testsigma Terminal** installed.
> 4. The **WinTest Automation** folder must exist in the **Testsigma Agent** directory. 
> 5. You have a Windows application to test and make sure it’s open on your device. 


---

## **Steps to Create Elements Using Batch Element Recorder**

1. From the left navigation bar, go to **Create Tests > Elements**.

2. In the Elements list page, click **Record**. 

3. In the **Desktop Element Recorder** dialog, select the **Batch Element Recorder** radio button and click **Launch**.

4. In the **Select Application** window, select an application and click **Start Recording**. 

[[info | **NOTE**:]]
| - To record multiple elements in a desktop application, ensure the application is open on your device.

5. The **Batch Element Recorder** automatically captures all elements in the currently open window of the application. 

[[info | **NOTE**:]]
| - When you switch windows within the same application, the recorder captures elements from the new window and clears those recorded from the previous one.

6. Once the elements are recorded, select an element name in the recorder and click **Locate Element** to highlight it in the actual application window.

[[info | **NOTE**:]]
| - You can use the **Expand All** and **Collapse All** buttons at the top of the recorder to quickly view or hide the full hierarchy of recorded elements. 

7. Click **Save all elements & Exit**. 

---





