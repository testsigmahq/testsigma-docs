---
title: "Importing/Updating TSRx Files into Testsigma"
page_title: "Import TSRx Files"
metadesc: "For Windows Advanced automation, you need to have objects captured in TSRx format. This article discusses how to import TSRx files into Testsigma application"
noindex: false
order: 31.5
page_id: "Import TSRx Files"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Import TSRx File"
  url: "#steps-to-import-tsrx-file"
---

---

**TSRx/Developer Application Model** files can be easily managed 🔧 in Testsigma! 

Once the TSRx file is ready, you can import it with just a few clicks and start building tests for Windows applications. These files are easy to manage and can be reused. This article discusses how to import TSRx files into the Testsigma application.

---

> ## **Prerequisites**
>
> Before you begin, ensure you have a Windows Project and a TSRx File to Import. 

---

## **Steps to Import TSRx File**

1. From the left navigation bar, go to **Create Tests > Elements**.

2. Click **Import elements** in the top right corner.

3. In the **Import elements** dialog, click **Browse file**, select the **TSRx** file from your local system, and click **Import**.

4. You can see the imported elements under **Create Tests > Elements**.

[[info | **NOTE**:]]
| - You can replace the updated elements by clicking on **Update Elements** and following the same steps as above. 
| - After updating the elements, changes in the app structure might affect some of them, which will be highlighted with a red underline. For information on handling these errors, refer to [error handling post TSRx update](https://testsigma.com/docs/windows-automation/error-handling/).

Here's a quick GIF demonstrating how to import elements for Windows application.

![Import Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/importtsrxelements.gif)

---