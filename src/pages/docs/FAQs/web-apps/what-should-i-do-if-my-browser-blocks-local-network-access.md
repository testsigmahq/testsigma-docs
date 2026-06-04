---
title: "What Should I Do If My Browser Blocks Local Network Access?"
metadesc: "Desktop app may fail to launch with a Try again error in Chrome 139+. This occurs when browser permission changes block pop-ups or local network access."
order: 25.21
page_id: "what-should-i-do-if-my-browser-blocks-local-network-access"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve the Permission Issue"
  url: "#steps-to-resolve-the-permission-issue"
- type: link
  name: "Issue Still Persists: Check Network Logs"
  url: "#issue-still-persists-check-network-logs"
---

---

When you click Open the desktop app from the Testsigma web application, the desktop app may fail to launch and display a **Local network access is blocked by your browser** message in Chrome browser versions 139 and later.
This issue can occur due to Chrome browser permission restrictions. After a browser version update, the permissions required to open the desktop application (such as pop-ups or local network access) may be blocked, causing Chrome to prevent the request.


![Try Again](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/local_network_1.1.png)

This article discusses how to resolve the permission issue. 

---

## **Steps to Resolve the Permission Issue**

1. In **Chrome**, click the **Site Information** icon in the address bar.

2. Ensure the following permissions are set to **Allow**:
   - **Pop-ups and redirects**
   - **Local network access** 
   ![Permissions](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/chrome_138.png)

3. If these permissions were previously denied, click **Reset permissions**.

4. Refresh the page.

5. Click **Open the desktop app** again in Testsigma. 

6. When **Chrome** displays the permission prompt, click **Allow** or **Open** to proceed with launching the desktop application.

---

## **Issue Still Persists: Check Network Logs**

If the problem continues, use Chrome Developer Tools to confirm whether a network-level block is causing the issue.

1. In **Chrome**, press **F12** (or right-click anywhere on the page and select **Inspect**) to open Developer Tools.

2. Click the **Network** tab.

3. Click **Open the desktop app** in Testsigma.

4. Check the network requests that appear. If you see failed requests for **authorizeTestsigmaTerminal** marked as failure, your network is blocking the connection.
   ![failed requests](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/local_network_1.2.png)

5. To confirm, copy the URL and paste it in the browser: `https://local.testsigmaagent.com`

[[info | NOTE:]]
| If you see the failed **authorizeTestsigmaTerminal** request, share this screenshot with your IT administrator and request them to allow **local.testsigmaagent.com** and the Testsigma desktop app to communicate over the local network.

---
