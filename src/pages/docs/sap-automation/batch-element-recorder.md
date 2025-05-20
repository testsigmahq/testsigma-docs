---
title: "Batch Element Recorder for SAP Automation"
page_title: "Batch Element Recorder for SAP Automation"
metadesc: "Batch Element Recorder captures all UI elements in SAP apps window at once and displays them in a tree structure. This article explains how to use it."
noindex: false
order: 29.3
page_id: "batch-element-recorder-for-sap-automation"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Interactive Demo"
  url: "#interactive-demo"
- type: link
  name: "Steps to Create Element Using Batch Elements Recorder"
  url: "#steps-to-create-element-using-batch-elements-recorder"
---

---

The Batch Element Recorder enables you to capture all visible UI elements in an SAP application window at once, without manually selecting each element. Like the selective recorder, the elements are structured hierarchically for easy reference while creating test cases. This article explains how to capture individual elements from an SAP application using Batch Elements Recorder. 

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

## **Interactive Demo**

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(50.57% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/uzladc3pqr1g?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

## **Steps to Create Element Using Batch Elements Recorder**

1. From the left navigation bar, navigate to **Create Tests > Elements**. 

2. On the **Elements list** page, click **Record**.

3. In the **Desktop Element Recorder** dialog box, select the **Batch Element Recorder** option and click **Launch**.

4. From the **Select Application** window, choose the SAP application and click **Start Recording**.

[[info | **NOTE**:]]
| - Ensure the **SAP** application is open and the desired screen is in focus.

5. The recorder automatically captures all accessible elements from the currently focused **SAP** window.

[[info | **NOTE**:]]
| - When you switch windows within the **SAP** application, the recorder captures elements from the new window and clears those recorded from the previous one.

6. After recording, select the element from the recorder list and click **Locate Element** to highlight it within the **SAP** application.

[[info | **NOTE**:]]
| - You can use the **Expand All** and **Collapse All** buttons at the top of the recorder to quickly view or hide the full hierarchy of recorded elements. 

7. Click **Save all elements & Exit**.

---