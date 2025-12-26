---
title: "How Do I Fix the Try Again Error When Opening the Testsigma Desktop App?"
metadesc: "Desktop app may fail to launch with a Try again error in Chrome 139+. This occurs when browser permission changes block pop-ups or local network access."
order: 24.21
page_id: "how-do-i-fix-the-try-again-error-when-opening-the-testsigma-desktop-app"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve the Permission Issue"
  url: "#steps-to-resolve-the-permission-issue"
---

---

When you click Open the desktop app from the Testsigma web application, the desktop app may fail to launch and display a Try again error message in Chrome browser versions 139 and later.

This issue can occur due to Chrome browser permission restrictions. After a browser version update, the permissions required to open the desktop application (such as pop-ups or local network access) may be blocked, causing Chrome to prevent the request.

![Try Again](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/chrome_138.1.png)

This article discusses how to resolve the permission issue. 

---

## **Steps to Resolve the Permission Issue**

1. In **Chrome**, click the **Site Information** icon in the address bar.

2. Ensure the following permissions are set to **Allow**:
   - **Pop-ups and redirects**
   - **Local network access** 
   ![Permissions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/chrome_138.png)

3. If these permissions were previously denied, click **Reset permissions**.

4. Refresh the page.

5. Click **Open the desktop app** again in Testsigma. 

6. When **Chrome** displays the permission prompt, click **Allow** or **Open** to proceed with launching the desktop application.

---