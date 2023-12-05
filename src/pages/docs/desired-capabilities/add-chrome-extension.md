---
title: "Automate Add Chrome Extension Functionality"
metadesc: "Learn how to add Chrome extension to one of your test sessions in Testsigma Application | Add a Chrome Extension to your Automation Session in 2 simple steps"
noindex: false
order: 15.9
page_id: "Automate Add Chrome Extension Functionality"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Obtaining the CRX file for the extension"
  url: "#obtaining-the-crx-file-for-the-extension"
- type: link
  name: "Specify the Extensions path in the Desired Capabilities"
  url: "#specify-the-extensions-path-in-the-desired-capabilities"
---


---


You can add a Chrome Extension to your automation session in 2 simple steps:

1. Obtain the CRX/CRX3 file for the extension/s and get the path.

2. Specify the Extensions path in the Desired Capabilities.


---


## **Obtaining the CRX file for the extension**

1. If you already have the CRX file, you can skip to the next step.

2. If you have the chrome extension folder(uncompressed) in your local machine, you can compile it to CRX format by using the Google Chrome Browser installed in your machines. See **[Compiling chrome extension folder to CRX/CRX3 format](https://support.testsigma.com/support/solutions/articles/32000027752-compiling-chrome-extension-folder-to-crx-crx3-format)**

3. If you don't have the chrome extension URL from Chrome Web Store, you can use [https://chrome-extension-downloader.com/](https://chrome.google.com/webstore/detail/testsigma/epmomlhdjfgdobefcpocockpjihaabdp) to download the file. Search for the extension, open the extension details page and copy the page URL.

![chrome extension to install for recording your test steps with Testsigma](
https://docs.testsigma.com/images/add-chrome-extension/chrome-extension-to-install-testsigma.png)


---


## **Specify the Extensions path in the Desired Capabilities**

Add an execution configuration in Testsigma and add the following desired capability:

|Name|Data Type|Value|
|---|---|---|
|goog:chromeOptions|String|{"extensions":["path/to/extension.crx"]}|

To add more than one extension, give the value in the format:

**{"extensions":["path/to/extension1.crx"],["path/to/extension2.crx"]}**

That's all we need to do in order to add an extension to an Automation Session in Testsigma using Desired Capabilities.

Once the execution starts, it will automatically take the file and install it to the Browser. 



---
