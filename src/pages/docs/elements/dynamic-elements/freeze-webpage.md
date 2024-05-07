---
title: "Freeze & Inspect Dynamic Elements (WebPage)"
metadesc: "Learn how to freeze the WebPage to keep the overlay & inspect dynamic elements | Learn advanced Xpath expression for inspecting dynamic elements in Web Pages"
noindex: false
order: 6.85
page_id: "Freeze the WebPage to Inspect Dynamic Elements"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pause/Freeze the Javascript Execution"
  url: "#pausefreeze-the-javascript-execution"
- type: link
  name: "Disabling Javascript Temporarily"
  url: "#disabling-javascript-temporarily"
---

---

The overlay goes away whenever we inspect the element on the overlay or use the Inspect button in the Developer Tools toolbar. This article discusses how to freeze the page to keep the overlay from disappearing.


Let's take an example of fetching the UI Identifier of the Drive link in the Show All overlay on Google Homepage:

![Gmail](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gmldrv.png)

### **There are two ways to do this:**

1. Pause/Freeze the Javascript Execution (using Chrome Developer Tools Debugger)

2. Disabling Javascript Temporarily (doesn't work always)

---

## **Pause/Freeze the Javascript Execution**

1. Open the **Developer Tools** and go to the **Sources** tab.
   ![Dev Tools](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/chrmdevtoolsde.png)

2. Return to the application and perform the actions to bring the application to the state where you need to freeze.

3. Click on **Pause Script Execution**, which is located in the top right corner of the **Sources** tab.

Sometimes, when you can directly click on the page and then attempt to pause script execution, it may unexpectedly close an overlay. To avoid this, you can use the following timeout function in the console: 

```javascript
element1 = document.querySelector("#gbwa");
setTimeout(function() {
  element1.click();
}, 3000);
```

This code specifies a delay of 3000 milliseconds before triggering a click event on the selected element. This provides sufficient time to switch to the **Sources** tab before the click is executed, keeping the overlay open.

---

## **Disabling Javascript Temporarily**
You can also disable the Javascript temporarily once the page is completely loaded. This might work in some cases, but only sometimes. You can disable Javascript by going to **Settings > Site Settings > JavaScript** and toggle it to disable it.

---