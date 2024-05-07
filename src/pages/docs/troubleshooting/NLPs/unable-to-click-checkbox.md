---
title: "Unable to Click Checkbox"
metadesc: "This document will help you troubleshoot if you are unable to click the checkbox | Learn how to click the checkbox when it is inaccessible while testing"
noindex: false
order: 23.14
page_id: "Unable to Click Checkbox"
warning: false
---

---

There are situations where uncheck or check nlp might not work and needs to be handled in different manner. Please perform the below mentioned steps to troubleshoot, debug and fix the issue:

1. Validate the Xpath/property used to identify the element

2. Check if the type of the element is mentioned as checkbox

3. Validate if there are other tags pointing to the same checkbox element

4. Check if other tags have a type as checkbox 

5. Validate by writing an Xpath for the other tag pointing to the checkbox 

6. Update the step in Testsigma for the new element and make sure to update the nlp as click instead of check/uncheck

7. Execute and this should work

Reason to change the nlp to click is because check/uncheck nlp has a check to validate the checkbox element itself with type as checkbox, if the element does not have the type attribute as checkbox it will not work.

---
