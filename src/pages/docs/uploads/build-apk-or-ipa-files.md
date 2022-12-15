---
title: "How to generate mobile builds for Android/iOS applications?"
page_title: "build ipa or apk files"
metadesc: "How to build ipa or apk files"
noindex: false
order: 20.4
page_id: "build ipa or apk files"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Build an APK file"
  url: "#build-an-apk-file"
- type: link
  name: "Build an IPA file"
  url: "#build-an-ipa-file"
- type: link
  name: "Build an APP file"
  url: "#build-an-app-file" 
---

<br>
<br>
Once you finish developing an Android/iOS application, you must build debug APK/IPA/APP application to carry out testing.

This article discusses how to generate mobile builds for Android/iOS Applications.<br>

<br>

## **Build an APK file**
1. Navigate to the **Toolbar > Build**.
2. Click on **Build Bundle(s)/APK(s)** from dropdown menu.
3. Click on **Build APK(s)** to generate an APK file.
4. Once your APK file is generated successfully,
    - On **Build APK(s)** pop-up,  click on **locate**.
5. Your debug APK will be visible in your file explorer.

<br>

## **Build an IPA file**
1. Open your app project in **Xcode**.
2. Select iOS Device as per your project's device target.
3. In the Product menu, select **Clean** and select **Archive**. 
4. Once archiving process is complete, you can see your app listed under **Archives**.
5. Select your app and click on **Export**.
6. On the **export method** prompt, **select Ad Hoc, Enterprise**, or **Development**.
7. Set distribution options as mentioned below:
    - App Thinning: **None**
    - Clear the selection **Rebuild from Bitcode**.
    - Set **Strip Swift symbols** as optional.
    - Clear the selection **Include manifest for over-the-air installation**.
8. Select the **Distribution Certificate** and **Provisioning Profile**.
9. This will generate your **.ipa** file.
10. Once the file generation process completes, click on **Export**.

<br>

## **Build an APP file**
1. Open your app project in **Xcode**.
2. Select the simulator as per your product’s target device.
3. On the Product menu, select **Clean** and select **Build**.
4. You can find the generated **.app** file in your **Xcode project directory**.
