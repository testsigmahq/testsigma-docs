---
title: "Troubleshooting “Failed to Start Mobile Test Recorder” error"
metadesc: " This guide explains how to debug and fix the  “Failed to Start Mobile Test Recorder” error for Android and iOS Local & Cloud Devices."
order: 23.4
page_id: "Troubleshooting “Failed to Start Mobile Test Recorder” error"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Invalid Activity name in Manifest (Android)"
  url: "#1--invalid-activity-name-in-manifestandroid"
- type: link
  name: "Vendor-specific Device Customizations"
  url: "#2-vendor-specific-device-customizations"
- type: link
  name: "Make sure the cable connection is not faulty"
  url: "#3-make-sure-the-cable-connection-is-not-faulty"

---

---

There are a number of reasons why the error "Unable to start Mobile Inspector" would show up. 
 
The easiest way to debug the error is to check the Logs for the Mobile Inspector. It contains the actual reason for the error.

<br>

Below given are some of the most common reasons:
---
##**1.  Invalid Activity name in Manifest (Android)**

The initial/default activity name mentioned in the Manifest file for the Android App might be different from the actual splash screen activity name.

**Reason**

For example, in case of Wikipedia Application, the initial activity mentioned in the manifest file is **org.wikipedia.main.MainActivity**
However, the first activity that is started when the app is launched is
**org.wikipedia.main.SplashScreenActivity**

Therefore, the Mobile Inspector keeps waiting for the activity mentioned in the Manifest until timeout and then throws the above error.

**Solution**

The ideal solution is to make the change in the manifest and mention the same Activity that is started first as the default Activity.
 
However, until that change is made by the developers, you can work around by mentioning the activity name and package name is the second screen 'Start manually'.

<br>
---
##**2. Vendor-specific Device Customizations**

**Reason**

Some device vendors like Xiaomi, Vivo, Huawei customize the Android OS according to their needs and security concerns. You might have to do some additional setup to connect to these devices seamlessly.
 
**Solution**

1. Goto Settings -> Additional Settings -> Developer options<br>
   [How to enable developer options](https://www.greenbot.com/article/2457986/how-to-enable-developer-options-on-your-android-phone-or-tablet.html)
2. Turn On "USB Debugging"
3. Turn On "Install via USB"
4. Set Default USB Configuration to "Charging"
5. (For Xiaomi Devices) - Turn On "USB Debugging (Security Settings)"
6. (For Xiaomi Devices) - Turn off "MIUI optimization" and restart the device

<br>
---
##**3. Make sure the cable connection is not faulty**

**Reason**

If you have checked both the above issues, another common reason for the error might be a faulty connection cable. 
 
**Solution**

Please try the below process to make sure a faulty cable is not leading to frequent disconnection of the device:
1. Open the Terminal or CMD Prompt
2. Type in "adb devices" command and see that your device is listed.
3. Repeat the process around 5-6 times with an interval of 10 seconds.


If your device is listed every time successfully, you can mostly rule out this issue and make sure to keep the device and the cable untouched.

If the issue persists, [connect with Testsigma Support on Discord](https://discord.com/invite/5caWS7R6QX) or reach out to support@testsigma.com. 
