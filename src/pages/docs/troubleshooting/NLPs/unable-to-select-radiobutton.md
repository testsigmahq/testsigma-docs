---
title: "Unable to Select Radiobutton"
metadesc: " What to do if your NLP for Select or Unselect of Radiobutton does not seem to work."
noindex: false
order: 23.7
page_id: "Unable to Select Radiobutton"
warning: false
---

---
There are situations where unselect or select nlp might not work and may need to be handled in a different manner. Please perform the below mentioned steps to troubleshoot, debug and fix the issue:

1. Validate the xpath / property used to identify the element.

2. Check if the type of the element is mentioned as radiobutton.

3. Validate if there are other tags pointing to the same radio button element.

4. Check if other tags have a type as radiobutton. 

5. Validate by writing an xpath for the other tag pointing to the radio button.

6. Update the step in TS for the new element and make sure to update the nlp as click instead of unselect / select.

7. Execute and this should work

Reason to change the nlp to click is because select/ unselect nlp has a check to validate the radio button element itself with type as radiobutton, if the element does not have the type attribute as radiobutton it will not work.

---