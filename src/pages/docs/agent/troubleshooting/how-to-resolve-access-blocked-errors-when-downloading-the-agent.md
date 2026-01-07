---
title: "How to Resolve Access Blocked Errors When Downloading the Agent?"
metadesc: "Fix access blocked errors when downloading Testsigma Agent by whitelisting the required URLs and IPs. Learn the steps to resolve the issue."
noindex: false
order: 11.95
page_id: ""
search_keyword: "how-to-resolve-access-blocked-errors-when-downloading-the-agent"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Resolve the Issue"
  url: "#steps-to-resolve-the-issue"
---

---

When attempting to download Testsigma Agent, you may see an error indicating that access is blocked for security reasons or that the file type is not allowed. To resolve this issue, you need to whitelist certain URLs and IPs to unblock. This article discusses how to unblock access by allowing the necessary URLs and IPs.

![Access Blocked](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/agent_troubleshooting/Access_blocked_image.png)

---

## **Steps to Resolve the Issue**

1. Whitelist Local Agent, Cloud App, Cloud Audit, Cloud ID, and Cloud Addon domains/IPs
   
   **Domain:** `app.testsigma.com`

   **IPs:** 
     - 166.117.52.243
     - 166.117.190.246

2. Whitelist Testsigma Tunnels (used by Local Agent)

   **Domain:** `connect.testsigma.com`

   **IPs:**
     - 166.117.49.200
     - 166.117.156.234

3. Whitelist Mobile Recorder (used by Cloud in browser)

   **Domain:** `mobilerecorder.testsigma.com`

   **IPs:**
     - 166.117.86.235
     - 166.117.227.251

4. Whitelist Asset Proxy (used by Cloud and Local Agent)
 
   **Domain:** `asset-proxy.testsigma.com`

   **IPs:** 
     - 166.117.67.252
     - 166.117.170.206

5. Whitelist LAB IPs (for incoming connections from Lab during test runs)

   **IPs:**
     - 35.174.92.188
     - 34.204.63.14
     - 74.50.105.97

6. Whitelist Additional Domains for Local Agent
   - **Chrome Drivers**
       - `googlechromelabs.github.io`
       - `chromedriver.storage.googleapis.com`
       - `storage.googleapis.com`
       - `registry.npmmirror.com`
       - `http://raw.githubusercontent.com`
   - **Firefox Drivers**
       - `http://raw.githubusercontent.com`
       - `registry.npmmirror.com`
   - **Edge Drivers**
       - `https://msedgewebdriverstorage.blob.core.windows.net/`
   - **IE Drivers**
       - `msedgewebdriverstorage.blob.core.windows.net`

7. Whitelist Additional Testsigma Services
   - `static-id.testsigma.com`
   - `id.testsigma.com`

---