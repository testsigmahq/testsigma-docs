---
title: "Selective Element Recorder for SAP Automation"
page_title: "Selective Element Recorder for SAP Automation"
metadesc: "Selective Element Recorder lets you capture UI elements one at a time in SAP apps and view them in a tree structure. This article explains how to use it."
noindex: false
order: 29.2
page_id: "selective-element-recorder-for-sap-automation"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Elements Using Selective Element Recorder"
  url: "#steps-to-create-elements-using-selective-element-recorder"
---

---

The Selective Element Recorder allows you to capture specific UI elements in a SAP desktop application by selecting an element at a time. Once recorded, the elements are displayed in a hierarchical tree structure for easy viewing and locating while creating test cases. This article explains how to capture individual elements from a SAP application using the Selective Element Recorder.

---

> ## **Prerequisites**
> 
> Before you begin, ensure the following:
> 
>  - You should know how to create a [project](https://testsigma.com/docs/projects/overview/) and [application](https://testsigma.com/docs/projects/applications/) in Testsigma.
> 
> - You should have the **Testsigma Lite** installed.
> 
> - The **WinTest Automation** folder must exist in the **Testsigma Agent** directory. 
> 
> - The **SAP** desktop application is installed and currently open on your device. 
> 
> - A working connection to your **SAP** system has been created using **SAP Logon**. 
---

## **Steps to Create Elements Using Selective Element Recorder**

1. From the left navigation bar, go to **Create Tests > Elements**.

2. On the **Elements list** page, click **Record**.

3. In the **Desktop Element Recorder** dialog box, select the **Selective Element Recorder** radio button and click **Launch**.

4. In the **Select Application** window, choose the **SAP** application and click **Start Recording**.

[[info | **NOTE**:]]
| - Ensure the **SAP** application is open and the desired screen is in focus.

5. Click the **Record** button in the recorder to begin capturing.

6. Hover over the desired element (such as a textbox, dropdown, or button) until it is highlighted in green, then click to capture it.

7. After recording, select the element from the recorder list and click **Locate Element** to highlight it within the **SAP** application.

[[info | **NOTE**:]]
| -  You can use the **Expand All** and **Collapse All** buttons at the top of the recorder to quickly view or hide the full hierarchy of recorded elements. 

8. Click **Save Element**. 

---
