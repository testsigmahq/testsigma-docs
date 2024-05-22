---
title: "Page Loading Issues in TestsigmaLab"
metadesc: "This article discusses how to troubleshoot the errors concerning page loading | Learn how to troubleshoot errors with page loading in cloud executions"
noindex: false
order: 23.57
page_id: "Page Loading Issues"
warning: false
---

---

This article discusses how to troubleshoot the issue of web pages taking a long time to load only in cloud execution. 

---

There will be differences in rendering engines across various websites, which can lead to execution failures, such as missing elements or unperformed actions. Also, the web page might stall or take a long time to load.


### **Steps to Resolve the Issue:**

Add **"Click on the Refresh button in the browser"** test step to refresh the browser. This step should be added immediately before the step that is failing due to extended page load times.


---