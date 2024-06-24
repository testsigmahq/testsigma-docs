---
title: "Record Multiple Elements Using Recorder"
metadesc: "Element path or locators plays an important role in Automation Testsing. Learn how to record elements for a mobile web application in Testsigma"
noindex: false
order: 6.61
page_id: "Record Elements for a Mobile Web Application"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Capture Elements"
  url: "#steps-to-capture-elements"
---

---

Quickly capture elements for mobile web applications! 📱

Using the **Testsigma Recorder**, you can swiftly capture elements in mobile web applications using Chrome Developer Tools 🛠️. This article discusses how to capture elements for mobile web applications. 


---


> ## **Prerequisites**
>
> - You should know how to create a [project](https://testsigma.com/docs/projects/overview/) and [application](https://testsigma.com/docs/projects/applications/) in Testsigma.
>
> - You should have [Testsigma chrome extension installed](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 
>
> - A mobile web app to test.


---

## **Steps to Record Elements for Mobile Web Apps**

1. From the left navigation bar, go to **Create Tests > Elements**, and click **Record**.
![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwaelmnav.png)

2. This will open a new window. Enter the URL from which you want to capture the elements. The **Testsigma Recorder** will appear and be ready to start recording. In this case, we are recording elements for the 1mg website.
![New Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwaelmcdt.png)

3. Press **F12** to open **Chrome Developer Tools** and dock the tools to the right side of the window for a better experience.
![Dev Tools](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwaelmcdo.png)

[[info | **NOTE**:]]
| Make sure you have selected **Companion Mode** located in the action bar at the top.
| ![Companion Mode](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/compmode.png)

4. Click on **>>** and select **Testsigma Recorder** from the dropdown menu. 
![Testsigma Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwaelmstsrec.png)

5. This will open **Testsigma Recorder** on the **Developer Tools** screen.
![Recorder on Dev Tools](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwaelmtsrecodt.png)

[[info | **NOTE**:]]
| Select the dimension from pre-defined devices on which you want to record the elements. If the device required for your testing is not listed, you can add a custom device by selecting **Edit** from the **Dimensions** dropdown menu and clicking **Add custom device**.
|
| ![Add Custom Device](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwatccd.png)
| Some devices might have unique characteristics that will affect element display and interaction, and adding a custom device required for your testing is necessary to identify and resolve these issues.


6. Once you have selected the dimension, capture elements by clicking on them directly.
![Record Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwaelmrelms.png)

---