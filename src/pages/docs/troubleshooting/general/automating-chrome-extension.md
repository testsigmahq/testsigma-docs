---
title: "Automating Chrome Extension in Testsigma"
metadesc: "This article discusses the ways in which chrome extension can be automated in Testsigma | Learn Automating Chrome Extension for Hybrid & Cloud Executions in Testsigma"
noindex: false
order: 23.96
page_id: "Automating Chrome Extension"
warning: false
---

---

You can automate the Chrome extension in Testsigma using two methods:
- **Hybrid Execution:** Run on the Chrome browser installed on your local machine.
- **Cloud Execution:** Run on the Chrome browser in Testsigma Lab, SauceLabs, or Browserstack.

This article discusses setting up and running automated Chrome extension tests in Hybrid & Testsigma Lab environments.

---

## **Automating a Chrome Extension**

A Chrome extension improves the browser's capabilities. Add extensions from the Chrome Web Store or search for the extension to find the store link.

### **Create a CRX File**

1. Go to [CRX](https://robwu.nl/crxviewer/) Viewer.

2. Select **Open in this viewer**.
![Open CRX](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/opencrx.png)

3. Choose **CRX** and download the file (This file is necessary for automation).
![CRX](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/crxdnld.png)


4. Searching for **.html?$** and find files like **panel.html** and **popup.html**. The **popup.html** file is usually the target for automation.

5. Go to **chrome://extensions/** and access the  **popup.html** file. 

6. Locate the plugin you wish to automate and access its unique ID. 

- In this case unique ID is **epmomlhdjfgdobefcpocockpjihaabdp**.

---

## **Hybrid Mode: Local Test Execution**

1. Setup and start **Testsigma Agent**. For more information, refer to [Setup Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/).

2. Place the CRX file to your **Testsigma Agent** folder.

3. Specify the **Extensions path** in the **Desired Capabilities**.

   | **Name**     | **Data Type**  | **Value** |
   | ------------- | ------------- | ------------- |
   | goog:chromeOptions | String | {"extensions":["extension.crx"]} |

You can also add multiple extensions, with this format for **Values**: {"extensions":["extension1.crx"],["extension2.crx"]}.

When the test execution starts, the desired capabilities will install the extension automatically. You can verify the installation by checking for the extension icon in the browser's top-right corner.

---

## **Hybrid Mode: Cloud Test Execution**

Repeat the same Desired Capabilities we have discussed in the above section before executing the test plan. 

---