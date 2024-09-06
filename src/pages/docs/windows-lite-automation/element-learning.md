---
title: "Element Learning (Using Test Recorder)"
page_title: "Object Learning (Using Test Recorder)"
metadesc: "To automate windows applications, you need to have elements captured from Test Recorder. This article discusses how to learn elements using Test Recorder in Testsigma"
noindex: false
order: 29.3
page_id: "Windows (Lite) Automation Element Learning"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Learn Windows (Lite) Elements Using Test Recorder"
  url: "#steps-to-learn-windows-lite-elements-using-test-recorder"
---


---

For applications built on UWP, WinForms, WPF, and Classic Windows, you can provide the app path and selectively capture elements using Test Recorder. This article discusses learning and capturing elements for Windows (Lite) applications in Testsigma.


---

> ## **Prerequisites**
> - You should know how to create a [project](https://testsigma.com/docs/projects/overview/) and [application](https://testsigma.com/docs/projects/applications/) in Testsigma.
> - You should have the Testsigma’s [Test Recorder](https://chromewebstore.google.com/detail/testsigma-recorder/epmomlhdjfgdobefcpocockpjihaabdp?hl=en-GB&utm_source=ext_sidebar) installed.
> - You should have the [Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/) setup. 
> - Any Windows app to capture elements.

---

## **Steps to Learn Windows (Lite) Elements Using Test Recorder**

1. From the left navigation bar, go to **Create Tests > Elements** and click **Record**.
   
   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WL_Element.png)

2. On **Record Elements** overlay, select **Local Test Machine**, provide **App path** and click **Record**.

   ![Record Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WL_ElementRecord.png)

3. Wait for the app to load fully.

4. Once the app is loaded, click on the element you want to capture.
   
   ![Click Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WL_WaitforApptoLoad.png)

5. On the **Create Element** section, validate the **Name**, **Screen Name**, **Element Type**, and the **Value**.

   ![Validate](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WL_ValidateElement.png)

6. Click **Create**.
   
   ![Create Element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WL_CreateElement.png)

7. Stop the recorder to close the session.
   
   ![Stop Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/WL_Stop_Recorder.png)

---