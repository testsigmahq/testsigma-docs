---
title: "Most Common Errors with Browser Session"
metadesc: "This article discusses most common errors with browser sessions and how to troubleshoot the errors | Learn how to troubleshoot errors with browser sessions"
noindex: false
order: 23.56
page_id: "Common Errors with Browser Session"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Most Common Errors with Browser Session"
  url: "#most-common-errors-with-browser-session"
- type: link
  name: "Hybrid Execution Errors with Browser Session"
  url: "#hybrid-execution-errors-with-browser-session"
---

---

## **Most Common Errors with Browser Session**

### **Error: "*Exception in initiating a browser session in path: timeouts*"** 

**Solution:** This error is most commonly caused when the browser session doesn't start at a defined time, and the request gets timed out, i.e., communication between Testsigma and browser fails.

The most probable reason for this error is an outdated **Selenium Browser Driver**. We can fix this by updating the drivers in the **Apache Tomcat** folder to the latest version.

---

### **Error: "*A session with id ="&lt;32\_character\_session\_ID&gt;" was not found*"**

**Solution:** This Error is most commonly caused when the web browser session starts successfully but fails to communicate with Testsigma properly.

- In Windows, this issue is usually caused due to outdated driver files.
- In Mac, this issue is usually caused by missing the **Safari WebDriver** extension or not enabling the **Allow Remote Automation** option. 

---

### **Error: "*Exception in initiating a browser session in path:, The driver server has unexpectedly died!*"**

**Solution:** This Error is most commonly caused when the Browser automation driver process(webdriver) that communicates with the installed Browser is either unresponsive or dead.

---

### **Error: "*Exception in initiating a browser session in path:, Could not create a session: The session timed out while connecting to a Safari instance*"**

**Solution:** This error is most commonly caused when the **Safari Instance** was initiated, but there was some error when communicating with the browser automation driver.

---

### **Error: "*Exception in initiating a browser session in path:, Could not create a session: The Safari instance is already paired with another WebDriver session.*"** 

**Solution:** This Error is most commonly caused when an instance of Safari browser/Webdriver process is already running and unresponsive.

---

### **Error: "*Element time out is timed out. Details: Expected condition failed: waiting for visibility of element located by &lt;Locator&gt;: &lt;Locator\_identifier&gt;*"** 


**Solution:** This Error is most commonly caused when Testsigma is unable to find the specified element on the loaded page.


**There are two solutions for this issue:**
- Either re-check the **UI Identifier** value for the Web Element or the Web Element is not visible on the loaded webpage.
- If the Element is taking time to load, add a **Wait** test step.

---

### **Error: "*Exception in initiating a browser session in path:, Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver*"** 

**Solution:** This Error is most commonly caused when browser session fails to be initiated due to limited support from Safari browser.

---

### **Error: "*Exception in initiating a browser session in path:, For input string: ".DS\_Store"***

**Solution:** This Error is most commonly caused when Invalid files located in the File-system interfere with Testsigma operation. Delete the unnecessary temporary and system files in driver folder such as **.DS_store** file or **Thumb.db** file.

---

### **Error: "*Exception in initiating a browser session in path: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.*"** 


**Solution:** This Error is most commonly caused when the selected Browser is not reachable or has incompatibility issues (beta or dev versions). Please try with the latest stable release version of the same Browser.

---

### **Error: "*Exception in initiating a browser session in path:, Invalid chrome options provided in the desired capabilities configuration.*"**

**Solution:** This error is caused when we the **Desired Capability** specified by us in the **Execution Configuration** is not in correct format or invalid.

---

### **Error: "*Exception in initiating a browser session in path:, java.util.LinkedHashMap cannot be cast to java.util.List*"**

**Solution:** This error is also caused when we the **Desired Capability** specified by us in the **Execution Configuration** is not in correct format or invalid.

---

## **Hybrid Execution Errors with Browser Session**

### ***Exception in initiating a browser session in path: session not created: This version of ChromeDriver only supports Chrome version xx.***

**Solution:** Missing latest driver binaries in the **Testsigma_Agent > Drivers** folder in the local machine. Download the drivers specific to your OS and place them in the driver's folder.

---