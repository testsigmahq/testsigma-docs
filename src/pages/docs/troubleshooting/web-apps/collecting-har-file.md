---
title: "Collecting HAR File for Support Tickets"
metadesc: "A HAR file will help in identifying and diagnosing product performance or latency issues in the application. This article discusses the collecting HAR file"
noindex: false
order: 23.55
page_id: "Collecting HAR File"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Collect HAR File"
  url: "#steps-to-collect-har-file"
- type: link
  name: "Required Files to Raise Support Ticket"
  url: "#required-files-to-raise-support-ticket"
---

---

To capture a HAR (HTTP Archive) file, you can use the developer tools available in web browsers. These tools track the network activities and help export this data as a HAR file. A HAR file is important in identifying and diagnosing product performance or latency issues. It is advisable to procure this data before raising a bug. This article discusses collecting the HAR file for a web page.

---

## **Steps to Collect HAR File**

### **1. Access Developer Tools**
- To **Open Developer Tools** in  **Google Chrome**: 
    - **Windows/Linux:** Press F12 or Ctrl+Shift+I 
    - **Mac:** Cmd+Option+I 
      Alternatively, right-click on the page and select **Inspect**.

- In **Mozilla Firefox:** Press F12 or Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac) to open the **Developer Tools**. You can also right-click on the page and select **Inspect Element**.

- In **Microsoft Edge:** Press F12 or Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac) to open the **Developer Tools**. Alternatively, right-click on the page and select **Inspect**.

### **2. Navigate to the Network Tab**

- On the **Developer Tools,** click on **Network** to access network monitoring tools.

- On the **Network** tab, reload the web page for which you want to capture network activity. This will start recording all network requests and responses.

### **3. Export HAR File**
- **Google Chrome:** Right-click anywhere within the **Network** tab and select **Save all as HAR with content**.
- **Mozilla Firefox:** Right-click anywhere within the **Network** tab and select **Save All as HAR**.
- **Microsoft Edge:** Right-click anywhere within the **Network** tab and select **Save as HAR with Content**.

Save the HAR file to the desired location on your computer.

Here’s a quick GIF demonstrating how to download a HAR file in Edge. 
![HAR File GIF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/harfile.gif)

---

## **Required Files to Raise Support Ticket**

Now that you're familiar with the process of procuring the HAR file, you can follow the steps below while collecting the HAR file to address the specific issue you're facing. This file is required to raise a support ticket in Testsigma. 

### **In Case of Execution Failures:**

1. **Sign out** of the application.

2. Navigate to **Developers Tools > Network** tab to record all requests.

3. **Sign in** to the application.

4. Navigate to the execution that has encountered the error.

5. Return to the **Network** tab, which will still be recording, and export the HAR file as mentioned in the above section.

6. If you're using a Local Agent, **collect the logs** from the local agent.

### **In Case of UI Functionality Issues:**

1. **Sign out** of the application.

2. Navigate to **Developers Tools > Network** tab to record all requests.

3. **Sign in** to the application.

4. Go to the page where the error or functionality glitch is present.

5. Return to the **Network** tab, which will still be recording, and export the HAR file as mentioned in the above section.


---