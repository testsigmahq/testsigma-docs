---
title: "Why is Testsigma Agent Not Detecting My Installed Browser?"
metadesc: "Fix browser detection issues in Testsigma when the Agent fails to locate web drivers like Chrome or Firefox, preventing proper scans and test execution."
noindex: false
order: 11.96
page_id: "why-is-testsigma-agent-not-detecting-my-installed-browser-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve the Browser Detection Issue"
  url: "#steps-to-resolve-the-browser-detection-issue"
---

---

In automated testing, browser detection issues often occur when the Testsigma Agent cannot locate the installed web drivers (for example, Chrome or Firefox) during startup. As a result, the agent fails to scan the browsers properly, and test execution cannot proceed. 
![Testsigma Agent Issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/agent/Testsigma_Agent_1.png)

This article explains how to resolve these browser detection issues. 

---

## **Steps to Resolve the Browser Detection Issue**

1. Open your browser (eg, **Chrome**).

2. In **Chrome**, type **chrome://version** in the address bar and press Enter/Return. 

3. Copy the executable path of the Chrome browser.
![Executable Path](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/agent/Testsigma_Agent_2.png)

4. Start the agent with the browser path. 

   For **Mac/Linux**:

   ```
   sudo sh start.sh --TS_CHROME_PATH=<chrome_executable_path>
   ```
   For **Windows**:

   ```
   start.bat --TS_CHROME_PATH=<chrome_executable_path>
   ```

5. The agent scans the given path, updates the **args.yml** file automatically, and detects the browser. Your future runs will work without manual reconfiguration.

---