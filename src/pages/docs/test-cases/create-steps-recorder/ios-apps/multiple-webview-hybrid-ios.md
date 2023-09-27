---
title: "Recording Tests with WebView for Hybrid iOS Apps"
metadesc: "Recording tests with webview for hybrid iOS apps | Learn how to switch the app from NATIVE to HYBRID app view in Testsgima application while recording tests"
noindex: false
order: 4.5394
page_id: "Recording tests with webview for hybrid iOS apps"
warning: false
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