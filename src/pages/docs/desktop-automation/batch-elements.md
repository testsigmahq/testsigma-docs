---
title: "Batch Element Recorder for Desktop Automation"
page_title: "Batch Element Recorder for Desktop Automation"
metadesc: "Batch Element Recorder captures all UI elements in a desktop app window at once and displays them in a tree structure. This article explains how to use it."
noindex: false
order: 31.4
page_id: "batch-element-recorder-for-desktop-automation"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Record Elements Using the Batch Tab"
  url: "#steps-to-record-elements-using-the-batch-tab"
- type: link
  name: "Element Recorder Controls"
  url: "#element-recorder-controls"
- type: link
  name: "Keyboard Shortcuts"
  url: "#keyboard-shortcuts"
---

---

Capture every UI element in a desktop application window at once using the **Batch** tab of the Element Recorder. Recorded elements appear in a hierarchical tree along with their properties and can be used while creating test steps.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. A Desktop project and an application exist in Testsigma. See [creating projects](https://testsigma.com/docs/projects/overview/) and [creating applications](https://testsigma.com/docs/projects/applications/).
> 2. **Testsigma Terminal** is installed on your Windows system.
> 3. The **WinTest Automation** folder exists in the **Testsigma Agent** directory.
> 4. The Windows application you want to record is open on your device.

---

## **Steps to Record Elements Using the Batch Tab**

1. From the left navigation bar, go to **Create Tests > Elements**.

2. On the Elements list page, click **Record**.

3. In the **Select application** window, select the desktop application you want to record against.

[[info | **NOTE**:]]
| Only applications running on your device are listed. Use the search field to filter the list, or click the refresh icon to reload it after opening a new application.

4. Click **Start recording**.

5. In the Element Recorder, click the **Batch** tab. The recorder captures every element in the currently open window of the application and lists them in a hierarchical tree.

[[info | **NOTE**:]]
| When you switch windows within the same application, the recorder captures elements from the new window and clears those recorded from the previous one.

6. Select an element in the tree to view its details in the **Element properties** panel.

7. Click **Locate** to highlight the selected element in the application window.

8. Click **Save**. The recorded elements are listed under **Create Tests > Elements**.

---

## **Element Recorder Controls**

| Control | Description |
|---|---|
| Selective / Batch | Switches the capture mode. Switch to **Selective** to capture elements one at a time without relaunching the recorder. |
| Expand all / Collapse all | Expands or collapses the full hierarchy of recorded elements. |
| Search | Filters the recorded element tree by name. |
| Element properties | Displays the properties of the selected element, such as Name, Type, Class, AutomationId, and FrameworkId. |
| Locate | Highlights the selected element in the application window. |
| Save | Saves the recorded elements to the Elements list. |

The recorder footer displays a running count of captured elements, such as **78 elements recorded**.

[[info | **Additional Information**:]]
| Batch capture records the full control tree of the window, including containers such as the title bar and tab groups. Use the search field to narrow the tree to the elements you need before saving.

---

## **Keyboard Shortcuts**

| Shortcut | Action |
|---|---|
| Alt+R | Record |
| Alt+S | Stop |
| Ctrl+Shift+F | Freeze |

---
