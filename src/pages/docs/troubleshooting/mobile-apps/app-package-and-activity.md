---
title: "Finding App Package & App Activity (Android)"
metadesc: "Testing Android apps in Testsigma requires a few details about the app in order to locate and test activity in app. This article discusses finding app package & activity"
noindex: false
order: 23.68
page_id: App Package & App Activity
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisite for ADB"
  url: "#prerequisite-for-adb"
- type: link
  name: "Steps to Find App Details Using ADB"
  url: "#steps-to-find-app-details-using-adb"
---

---

Test execution of Android applications in Testsigma (or in General) requires a few characteristic details about the application to locate the application and the specific feature to be tested. They are:

- **App Package Name**

- **App Activity Name**

Each Android app has a unique identifier, like a Java package name, like **com.example.myapp**. This identifier helps find your app on devices and the Google Play Store.

Moreover, an Android application will have multiple **Activities** or **Pages**, each containing elements like fields or buttons for testing. 

In simple terms, **An Activity** in an **Android Application** is similar to a **Web page** in a **Web Application** or Website.

The **App Package Name** helps locate the application for testing purposes, while the **App Activity Name** pinpoints the specific page to be tested.


---

## **Prerequisite for ADB**

- Android SDK should be installed and set up on the computer.

---

## **Steps to Find App Details Using ADB**

Let us try finding the details of the **Whatsapp** application in this case.

1. Connect your Android device or emulator to your PC/Mac. Open the app you wish to inspect, in this case, **WhatsApp**.

2. Open a Command Prompt or Terminal window and run the ***adb devices*** command. This will display a list of connected devices with their unique device ID.

![adb devices](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/apppkgdtlcmd.png)


3. Use the following commands to retrive information about the currently open application:

    - **For Mac/Linux:** *adb shell dumpsys window | grep -E 'mCurrentFocus'*

    - **For Windows:** *adb shell dumpsys window | find "mCurrentFocus"*

4. The output will display the Android Application Package name and Application Activity name. 

    - For example, here, **com.whatsapp** is the package name, and **com.whatsapp.HomeActivity** is the activity name.
      ![Whatsapp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/apppkgdtlsret.png)

[[info | **NOTE**:]]
| Ensure the WhatsApp app is open on the device and the device screen is unlocked before executing these steps. This applies to any android application installed on the device.


<details style="border: 1px solid gray; border-radius: 4px; padding: 0.5em; margin: 0.5em 0; background-color: #f2f2f2;">
  <summary style="color: darkgreen; font-weight: bold; list-style: none;" onclick="if(this.parentNode.open) this.parentNode.style.border='1px solid gray'; else this.parentNode.style.border='none';">
    <span style="margin-right: 5px;">ℹ️</span>More Info:
  </summary><br>
The package name can also be verified by tapping <b>More Details</b> on the app's Google Play Store page.

</details>

---