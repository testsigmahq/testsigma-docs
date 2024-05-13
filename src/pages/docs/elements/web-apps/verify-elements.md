---
title: "Verifying elements in Chrome DevTools"
metadesc: "Learn how to verify elements in Chrome DevTools during testing in Testsigma to avoid test case failures. Click here to verify elements in Chrome DevTools."
noindex: false
order: 6.28
page_id: "Verify elements in Chrome DevTools"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to verify elements in Chrome DevTools"
  url: "#steps-to-verify-elements-in-chrome-devtools"
- type: link
  name: "Example"
  url: "#example"
---

---

Verifying elements in Chrome DevTools during testing ensures that the right elements are being targeted to avoid test case failures. This article explains how to verify elements in Chrome DevTools.

---

## **Steps to verify elements in Chrome DevTools**

1. Open the Chrome DevTools panel with **Ctrl+Shift+C** and select the **Elements** tab. 
2. Use the mouse pointer to hover over the element you want to verify. As the pointer move, the corresponding HTML code will be highlighted in the **Elements** panel.
3. Once you have found the element you want to verify, you can inspect its properties in the **Elements** panel.
4. Click **Ctrl+F** and paste the xpath in the DevTools to verify if you have targeted the right element.

---

## **Example**
Let's take a look at the GIF below:
![Example](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/MultipleValues.gif)

Here, let's say we want to target **Leave Requests to Approve** element,  Xpath for the same is linked to four other elements. If we use this Xpath, the test case will fail intermittently. 

So, we need to target a unique Xpath as shown in the image below. 
![Right Xpath](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/inspect.png)

---