---
title: "Configure Android WebViews"
page_title: "webviews"
metadesc: "To inspect WebView elements in Testsigma, WebView debugging must be enabled within your application. Learn how to configure Android WebViews."
noindex: false
order: 15.96
page_id: "webviews"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Example React Native generated code"
  url: "#example-react-native-generated-code"
- type: link
  name: "Example Java Android code"
  url: "#example-java-android-code"
- type: link
  name: "Example Kotlin Android code"
  url: "#example-kotlin-android-code"
---


---


For inspecting WebView elements in Testsigma, WebView debugging must be enabled within your application. 

This article discusses how to inspect WebView elements in Android.

To enable WebView debugging, call the static method ***setWebContentsDebuggingEnabled(true)*** on the WebView class.
![Enable Debugging](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/DbTrue.png)

[[info | **NOTE**:]]
|The setting applies to all of the Android WebViews of the app.

---


## **Example React Native generated code**
![React Native Code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/RN.png)

---

## **Example Java Android code**
![Java Code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/java_debug.png)

---

## **Example Kotlin Android code**
![Kotlin Code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/kotlin.png)

[[info | **NOTE**:]]
|    
|   - Android WebView debugging isn't affected by the state of the debuggable flag in the manifest of the app.
|   - If you want to enable WebView debugging only when debuggable is true, set the flag as ***WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG)***

---