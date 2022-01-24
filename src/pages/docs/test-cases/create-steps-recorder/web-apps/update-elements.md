---
title: "Update Elements in Web Applications Project"
metadesc: "How to update elements via Testsigma’s test recorder chrome extension."
order: 4.517
page_id: "Update Elements in Web Applications Project"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Updating elements via Testsigma’s test recorder chrome extension"
  url: "#updating-elements-via-testsigmas-test-recorder-chrome-extension"
---

---

Sometimes, when you update your website or application, you’ll also want to update the corresponding elements in your automated test project. In this document, we will discuss how to do that using the Testsigma test recorder.

&emsp;

---
##**Pre-requisites:**

You should already know how to [capture elements.](https://testsigma.com/docs/elements/web-apps/record-multiple-elements/)

&emsp;

---
##**Updating elements via Testsigma’s test recorder chrome extension**

 1. Create a Test Case using the Testsigma recorder. 
 2. Click on the element/Elements that you want to edit. The Elements appear in green on the Testsigma recorder UI. 

![Highlighted example Elements in Testsigma recorder](https://docs.testsigma.com/images/update-elements/highlighted-example-Elements-testsigma-recorder.png)

 3. Click ‘edit Elements’ from the three dots on the far right

![Multiple options on the edit Elements screen window in Testsigma recorder](https://docs.testsigma.com/images/update-elements/edit-Element-screen-multiple-options-testsigma-recorder.png)

These are the fields that will appear:

 * **Name**
 * **Screen Name**
 * **Identifier Type**: This is a drop-down field that has values:
   1. Xpath
   2. CSS Selector
   3. ID
   4. Name
   5. Link Text
   6. Partial Link Text
   7. Class Name
   8. Tag Name

You can select any of these options for identifier type.
 * **Enter Value**: Here, the value should correspond to the identifier type selected.
 * **View details**: Once you click on this, you will be able to see more details about the Elements.

Click ‘Update’ button to finalize the changes.



