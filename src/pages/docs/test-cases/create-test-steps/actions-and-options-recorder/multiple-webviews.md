---
title: "Recording Tests with WebView for Hybrid Apps"
metadesc: "Recording tests with webview for hybrid apps | Learn how to switch the app from NATIVE to HYBRID app view in Testsgima app while recording tests"
noindex: false
order: 4.625
page_id: "Recording tests with webview for hybrid iOS apps"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Executing Native Android/iOS App Tests in Hybrid Model"
  url: "#executing-native-androidios-app-tests-in-hybrid-model"
---
---

While inspecting mobile elements using Testsigma's Mobile Inspector, there are instances where the mobile UI is blank or has no selectable element. In such cases, refresh the page again. If the refresh action does not show you the intended mobile UI, the app is a hybrid app that may have some WebViews that are not being rendered.

In a hybrid app, web components are run completely inside a WebView control of the application. Hence, we need to switch the context between NATIVE and HYBRID to access the elements inside the WebView. Note that the context is all the relevant information that specifies the current/active state of the application and its interaction with the user. It also specifies how the server interprets commands and which commands are available to the user.

Currently, Testsigma supports two contexts: **NATIVE** and **HYBRID**. By default, the mobile app is launched in a NATIVE context. To switch the app from NATIVE to HYBRID app view, click **H** from the mobile inspector panel and select WebView from the drop-down menu.

![WebViews](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/HybridView.gif)

The below NLP is recorded while switching to HYBRID app context:

***Switch to Webview context***

While switching back to NATIVE context the following NLP is recorded

***Switch to Native App Context***

[[info | **NOTE**:]]
| The NLP’s are recorded to store user actions of switching views, please do not delete them if you want the execution to continue on the selected WebView.

On switching to HYBRID context the drop-down shows the WebViews associated with the application. Here in the below example, there is a webview with the name **WEBVIEW_6890.1**.
![Webview](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/hbawv.png)

On selecting the WebView the following NLP is added,

**Switch to context with name *WEBVIEW_6890.1***
![NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/nplhawv.png)

[[info | **NOTE**:]]
| Recording tests with multiple webviews will be the same for Android and iOS applications.

---

## **Executing Native Android/iOS App Tests in Hybrid Model**

Considering you already have a Test Suite containing iOS Application Test Cases, the procedure for executing a native iOS Application using Testsigma in a local environment is as follows:

**1. Register a Local Agent.**

We need to add a local agent in Testsigma and link this agent as a Test Machine to Test Suites while creating the Test Plan.


**2. Setup the Local Mac and iOS Device for Hybrid Execution.**

We must configure the local machine once the local agent is added to Testsigma. This is done so that the local machine can accept communication in the form of HTTP packets from Testsigma servers. This step is preconfigured in other Cloud Execution Models such as Testsigma Labs, Sauce Labs, and BrowserStack. If you prefer the easy method, use the cloud execution models to select the execution environment from the list of available devices. 

Continuing with the Hybrid Execution setup, we must first set up the Testsigma agent on the local Mac. Please check the following article for a detailed guide on [setting up Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/). 

Assuming you already have the prerequisites, such as Appium and XCode configured, we will run tests once the Testsigma Agent is configured. 

**2. Create Execution and add Execution Configuration.**

While creating the Execution Configuration for iOS, we need to provide some extra information in case of Hybrid Executions for Testsigma to properly connect to the local iOS device. The most important fields on the page are:

**Machine:** Select the local System we added in the previous Step. This is the Mac device which Testsigma directly communicates with, and from there, the communication data is passed to the Test iOS device connected to this Mac.

**OS Version:** Select the iOS version in the Test Device.

**Appium URL:** Enter the Appium URL you started the server with. If you used the default configuration, the URL would be:
http://0.0.0.0:4723/wd/hub

**Device Name:** Enter the serial number of the iOS Device.

**UDID:** Enter the unique device identifier UDID code for your iOS device. Here's a guide to finding your UDID using Itunes App on your Mac - WhatsmyUDID

**BundleID:** Use this option if the app has already been installed on the Test iOS device (Recommended).
- **BundleID:** BundleID is the unique identifier of an iOS App. Here's a guide to finding your App BundleID - [Finding the App Bundle ID](https://pspdfkit.com/guides/ios/faq/finding-the-app-bundle-id/)

**App Path:** Use this option if the app to be tested is located on the Mac and you want to avoid installing it on the test device.
- **Use IPA:** Specify the local Mac machine's path to the IPA file.

Once the Execution Configuration is created, we can finalize the Execution creation by clicking on the Create button.


[[info | **NOTE**:]]
| The steps remain the same for executing native Android tests in the hybrid model as well. We use APK files instead of IPA for Android tests. 

---