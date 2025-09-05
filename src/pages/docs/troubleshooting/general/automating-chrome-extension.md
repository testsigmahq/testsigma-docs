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

1. Setup and start **Testsigma Agent**. For more information, refer to the [documentation on setting up Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/).

2. Place the CRX file to your **Testsigma Agent** folder.

3. Specify the **Extensions path** in the **Desired Capabilities**.

   | **Name**     | **Data Type**  | **Value** |
   | ------------- | ------------- | ------------- |
   | goog:chromeOptions | String | {"extensions":["extension.crx"]} |

You can also add multiple extensions, with this format for **Values**: {"extensions":["extension1.crx"],["extension2.crx"]}.

When the test execution starts, the desired capabilities will install the extension automatically. You can verify the installation by checking for the extension icon in the browser's top-right corner.

With **Chrome version 137**, Google has disabled the use of command-line switches like **--load-extension** in stable builds to improve security and stability. Instead, you can configure the following in Desired Capabilities:

   | **Name**     | **Data Type**  | **Value** |
   | ------------- | ------------- | ------------- |
   | goog:chromeOptions | String | {"args":["--disable-features=DisableLoadExtensionCommandLineSwitch"]} |
   | goog:chromeOptions | String | {"args":["--load-extension=Place the file path here"]} |

### **Steps to Get the Extension Path**

1. Go to the **Chrome Web Store** and search for the **Chrome extension source viewer** extension. 

2. Click **Add to Chrome** to install the extension.

3. Once added, go back to the **Chrome Web Store**.

4. While viewing the **Chrome extension source viewer** extension’s page, click the **Chrome extension source viewer** extension in your browser toolbar.

5. Select **Download as ZIP** from the available options.

6. Extract the zip file and copy the file path along with the file name. 

**{"args":["--load-extension=Place the file path here"]}**

[[info | **NOTE**:]]
| When copying a file path on Windows, it appears like this: **C:\testing\downloads\extension**. 
| However, in the Desired Capabilities, you must escape backslashes like this: **C:\\\\testing\\\\downloads\\\\extension**. 

---

## **Hybrid Mode: Cloud Test Execution**

Repeat the same Desired Capabilities we have discussed in the above section before executing the test plan. 

---