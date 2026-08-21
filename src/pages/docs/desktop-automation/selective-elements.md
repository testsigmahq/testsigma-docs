---
title: "Selective Element Recorder for Desktop Automation"
page_title: "Selective Element Recorder for Desktop Automation"
metadesc: "Selective Element Recorder lets you capture UI elements one at a time in desktop apps and view them in a tree structure. This article explains how to use it."
noindex: false
order: 31.3
page_id: "selective-element-recorder-for-desktop-automation"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Record Elements Using the Selective Tab"
  url: "#steps-to-record-elements-using-the-selective-tab"
- type: link
  name: "Element Recorder Controls"
  url: "#element-recorder-controls"
- type: link
  name: "Keyboard Shortcuts"
  url: "#keyboard-shortcuts"
---

---

Capture UI elements one at a time in a desktop application using the **Selective** tab of the Element Recorder. Recorded elements appear in a hierarchical tree along with their properties and can be used while creating test steps.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. A Desktop project and an application exist in Testsigma. See [creating projects](https://testsigma.com/docs/projects/overview/) and [creating applications](https://testsigma.com/docs/projects/applications/).
> 2. **Testsigma Terminal** is installed on your Windows system.
> 3. The **WinTest Automation** folder exists in the **Testsigma Agent** directory.
> 4. The Windows application you want to record is open on your device.

---

## **Steps to Record Elements Using the Selective Tab**

1. From the left navigation bar, go to **Create Tests > Elements**.

2. On the Elements list page, click **Record**.

3. In the **Select application** window, select the desktop application you want to record against.

[[info | **NOTE**:]]
| Only applications running on your device are listed. Use the search field to filter the list, or click the refresh icon to reload it after opening a new application.

4. Click **Start recording**. The Element Recorder opens on the **Selective** tab, with the application name displayed in the recorder header.

5. Hover over an element in the application until it is highlighted in green, then click it to capture it.

[[info | **NOTE**:]]
| To capture elements that disappear on hover, such as menus and dropdowns, click **Freeze** or press **Ctrl+Shift+F** to hold the current UI state, then click the element.

6. Select a captured element in the tree to view its details in the **Element properties** panel.

7. Click **Locate** to highlight the selected element in the application window.

8. Click **Save**. The recorded elements are listed under **Create Tests > Elements**.

---

## **Element Recorder Controls**

| Control | Description |
|---|---|
| Selective / Batch | Switches the capture mode. Switch to **Batch** to capture every element in the current window without relaunching the recorder. |
| Pause | Pauses capture. The application stays open and recorded elements are retained. |
| Stop | Ends the recording session. |
| Freeze | Holds the current UI state so transient elements such as menus and dropdowns can be captured. |
| Expand all / Collapse all | Expands or collapses the full hierarchy of recorded elements. |
| Search | Filters the recorded element tree by name. |
| Element properties | Displays the properties of the selected element, such as Name, Type, Class, AutomationId, and FrameworkId. |
| Locate | Highlights the selected element in the application window. |
| Save | Saves the recorded elements to the Elements list. |

The recorder footer displays a running count of captured elements, such as **2 elements recorded**.

---

## **Keyboard Shortcuts**

| Shortcut | Action |
|---|---|
| Alt+R | Record |
| Alt+S | Stop |
| Ctrl+Shift+F | Freeze |

---
