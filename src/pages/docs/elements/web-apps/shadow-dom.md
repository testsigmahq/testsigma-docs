---
title: "Shadow DOM Elements"
pagetitle: "Locate Shadow DOM Elements in Testsigma - A Comprehensive Guide"
metadesc: "Learn how to identify and interact with shadow DOM elements in Testsigma. Follow step-by-step instructions to perform effective testing on webpages that use shadow DOM."
noindex: false
order: 6.27
page_id: "Shadow DOM"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Identifying Shadow DOM in a Webpage"
  url: "#identifying-shadow-dom-in-a-webpage"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Basic Shadow DOM Terminologies"
  url: "#basic-shadow-dom-terminologies"  
- type: link
  name: "Create Element for Shadow DOM"
  url: "#create-element-for-shadow-dom"
---

---

Shadow DOM elements allow you to encapsulate and isolate styling and functionality in a webpage, maintaining a clean structure. The Document Object Model (DOM) attaches a hidden DOM to a chosen element, keeping local styles and markup separate. Although it benefits developers, it poses challenges for automation testing since shadow root elements do not exist in the main DOM. 

To perform reliable tests, you need to find these elements. This guide will explain how Testsigma can help you locate and capture Shadow DOM elements for effective testing.

---
> ## **Prerequisites**
>
> Before you begin, ensure that you understand specific concepts such as creating [projects](https://testsigma.com/docs/projects/overview/), [test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [elements](https://testsigma.com/docs/elements/overview/), and [recording test steps](https://testsigma.com/docs/test-cases/create-test-steps/overview/#creating-test-steps-using-test-recorder).

---

## **Identifying Shadow DOM in a Webpage**

Follow the below steps to identify if a webpage uses Shadow DOM:

1. To open the **Chrome Developer Tools** and highlight webpage **elements**, right-click on the webpage and select **Inspect**.
2. Expand the **`<body>`** tag in the **Elements** tab and verify if it contains **`#shadow-root`** to indicate the presence of Shadow DOM on the webpage.

![Identify Shadowdom Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/identify_shadowdom.png)

---

## **Basic Shadow DOM Terminologies**

1. **Shadow Host**: The HTML element is the entry point for encapsulated components by attaching a shadow DOM.
2. **Shadow Tree**: A component encapsulates and isolates its internal structure and styling through a hidden tree of DOM elements within a shadow DOM.
3. **Shadow Boundary**: An invisible wall separates the shadow DOM from the main DOM, keeping styles and functionality isolated.
4. **Shadow Root**: The shadow DOM's starting point is the hidden tree's root node, where everything begins. 

![Shadow DOM diagram](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/basic_shadowdom.png)

---

## **Create Element for Shadow DOM**

This section will demonstrate how to capture and store shadow DOM elements using Testsigma. For this demonstration, we'll use the shopping website [shop.polymer-project](https://shop.polymer-project.org/).

1. Navigate to **Create Tests** > **Elements** in the left side navbar. Click on **Create Element** at the top right corner of the **Elements List** page to capture the Element on the webpage. ![create elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/elementstab_shadowdom.png)
2. Click **Create Element** to open an overlay screen on the right side of the page. Click **Record Element** within this overlay to easily capture the Element. Open the webpage in a new tab and click on the **Element** you want to capture. Then, click **Capture** to record the Element in the Record Element pop-up menu. ![record shadowdom element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/record_element_shadowdom.gif)
3. Alternatively, manually fill in the **Name** and **Screen Name**, **Element Type**, **Element Value**, and **Host Values** fields to capture the Element.
4. Fill in the fields with the element **Name** and **Screen Name**. Then, choose **CSS Selector** as the **Element Type** from the dropdown menu since only CSS selectors can access elements within shadow DOM.
5. To obtain the CSS Selector, **right-click** on the webpage and choose **Inspect** to open **Chrome Developer Tools**. Then, you must locate the Element you need using the **Select Element in the page to inspect it** icon. 
6. Once you have located the Element, right-click on it and choose **Copy** from the menu. Next, select **Selector** from the dropdown menu and copy the **CSS selector** value that appears. Finally, paste it into the **Enter the value** field. ![Capture Shadow Dom Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/captureelement_shadowdom.gif)
7. Check the box **Present inside Nested Context** to specify the hosts from the parent host to the current element host in the order.
8. Follow the order from the **Parent Host** to the **Current Host** and specify each shadow host element's **Shadow DOM** and **CSS Selector** values.
9. Click **Create Element** and use it in Test Cases. ![Shadow Host Capture](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/hostcapture_shadowdom.gif)

[[info | NOTE:]]
| To create an element in a **Test Case**, use **NLP** to add a **new step** to the test case and include a placeholder for the **Element**. Capture elements on the webpage by clicking **Create Element**, or use **Testsigma Record** to capture the steps and their associated elements during test step recording.

---
