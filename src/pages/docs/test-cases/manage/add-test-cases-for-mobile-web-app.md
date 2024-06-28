---
title: "Test Cases for Mobile Web Application"
metadesc: "This document explains how to create Test Cases for Mobile Web Application in detail | Learn how to write test cases for Mobile Web Application in Testsigma"
noindex: false
order: 4.18
page_id: "How to create Test cases for Mobile Web Application?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Test Cases for Mobile Web Apps"
  url: "#steps-to-create-test-cases-for-mobile-web-apps"
---

---

Quickly create test cases for mobile web applications! 📱

Using the Testsigma test recorder, you can easily create test cases for mobile web applications using Chrome Developer Tools 🛠️. This article discusses how to create test cases for mobile web applications.

---

> ## **Prerequisites**
>
> - You should know how to create a [project](https://testsigma.com/docs/projects/overview/) and [application](https://testsigma.com/docs/projects/applications/) in Testsigma.
>
> - You should have [Testsigma chrome extension installed](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 
>
> - A mobile web app to test.

---


## **Steps to Create Test Cases for Mobile Web Apps**

1. From the left navigation bar, go to **Create Tests > Test Cases**, and click **Create Test Case**.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwatcnav.png)

2. On the **Test Case Details** page, click on **Record** on the top right corner.
![Test Case Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwatcrc.png)

3. This will open a new window. Enter the URL from which you want to capture the test cases. The **Testsigma Recorder** will appear and be ready to start recording. In this case, we are recording a test case for the 1mg website.
![New Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwanwowrc.png)

4. Press **F12** to open **Chrome Developer Tools** and dock the tools to the right side of the window for a better experience.
![F12](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwacdtools.png)

[[info | **NOTE**:]]
| Make sure you have selected **Companion Mode** located in the action bar at the top.
| ![Companion Mode](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/compmode.png)

5. Click on **>>** and select **Testsigma Recorder** from the dropdown menu. 
![Testsigma Recorder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwaae.png)

6. This will open **Testsigma Recorder** on the **Developer Tools** screen.
![Recorder on Dev Tools](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwatrocdt.png)

[[info | **NOTE**:]]
| Select the dimension from pre-defined devices on which you want to record the elements. If the device required for your testing is not listed, you can add a custom device by selecting **Edit** from the **Dimensions** dropdown menu and clicking **Add custom device**.
| ![Add Custom Device](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwatccd.png)
| 
| Some devices might have unique characteristics that will affect element display and interaction, and adding a custom device required for your testing is necessary to identify and resolve these issues.

7. Once you have selected the dimension, record test steps by performing actions on the website.
![Test Cases for MWA](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mwatcctsbpa.png)

---