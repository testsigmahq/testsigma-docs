---
title: "Clearing the Session or Cookies"
metadesc: "Understand the reasons for clearing the session or cookies when starting a test | These NLPs help you clear session ot cookies in tests in Testsigma application"
noindex: false
order: 23.15
page_id: "Clearing the Session or Cookies"
warning: false
---

---

During complex or prolonged testing, the virtual machine hosting the browser can exhaust its allocated disk space. This will eventually lead to browser crashes and test terminations. 

This is not only restricted to the tests but also to an app under test that consumes a large amount of memory, suffers from significant JS memory leaks, or opens a lot of tabs, which can cause this issue.


The best practice to avoid this is to clear cookies when starting a test and close unnecessary tabs not being used. 


---

### **NLP to Clear Cookies:**

1. Delete all cookies from the current session

2. Delete all local storage cookies from the current session


### **NLP to Close Tabs:**

1. Close all windows

2. Close the current window

3. Close all windows except the current window

4. Close the window with index test data


---