---
title: "UI Identifier NLP"
metadesc: "This article discusses the behavior of the NLP with UI Identifiers designed to interact with UI elements. Learn how to design tests with respect to this NLP"
noindex: false
order: 23.16
page_id: "UI Identifier NLP"
warning: false
---

---

This article discusses the behavior of the following NLP command designed to interact with UI elements.

### **NLP: Click on *element* if visible**

**This NLP will:**
- **Pass:** If the UI element is visible on the page.
- **Skip:** If the UI element is invisible but exists in the HTML DOM. It will do this without causing a failure in the process.

---

### **The NLP step will fail in the following scenarios:**

- The UI identifier element does not exist in the DOM.
- The locator is incorrect.
- Issues that prevent the NLP from executing as expected.

You can add an **If conditional step** to handle the above cases, which won't stop test execution even if the element is not found or other issues occur.


**Refer to the example test steps below:**

1. If the *element* is visible 

2. Click on *element*

   ![Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/losuiinf.png)


---