---
title: "Testsigma Agent not detecting Local Devices for Mobile Test Recorder"
page_title: " Troubleshooting “Testsigma Agent not detecting Local Devices for Mobile Test Recorder” error"
metadesc: "See why Testsigma Agent may  not be detecting Local Devices for Mobile Test Recorder."
order: 23.2
page_id: "Testsigma Agent not detecting Local Devices for Mobile Test Recorder"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Enable USB debugging mode in your Mobile devices"
  url: "#enable-usb-debugging-mode-in-your-mobile-devices"
- type: link
  name: "Verify that your system recognizes a Device using ADB"
  url: "#verify-that-your-system-recognizes-a-device-using-adb-android-debug-bridge"

---

---

Testsigma Agent may be unable to detect your local mobile devices for Test Recorder for the following reasons:
1. Testsigma agent is not up to date.
2. The cable connection with the laptop you are using is poor.
3. If your device is connected via WIFI, WIFI strength is poor.


You will also need to make sure that:
1. **Developer options** in your mobile device is enabled.
2. **USB debugging** mode is enabled.
3. **ADB** recognizes the device connected to the system.
4. Changing the desired capabilities as per device/application.

<br>

---

## **Enable USB debugging mode in your Mobile devices**

Enable Developer Options
1. Navigate to the Settings app on the phone.
2. Scroll down and click on the Developer Options
3. Turn on the Developer Options and click USB Debugging

Some devices do not have “Developer Options” under Settings. In such cases, follow these steps:

1. Navigate to Settings > About Phone > Build Number 
2. Tap on Build number 7 times. Apop-up will appear saying ‘You are now a developer.’
3. Go back to settings. You will find ‘Developer Options’ listed there.
4. Enable ‘USB Debugging’ and now the device is ready to connect to the system
5. Once done, you will now be able to enable/disable it whenever you desire by going to Settings > Developer Options > Debugging > USB debugging

<br>

---

## **Verify that your system recognizes a Device using ADB (Android Debug Bridge)**

Verify if the system is able to recognize the device:
1. Open Command Prompt.
2. Type ‘adb devices’.
3. Press Enter.

[[info | NOTE:]]
|You need to make sure that the Android SDK is installed in your system and its environment path is set before running the ADB command.

The device name should be listed in the response. If only one device is attached, the name of that device will be listed. For instance, ‘AVY9KA90322022030’.

This command displays all devices connected to the system at a time. If the device is not displayed in the response, then there might be some issue with the device connection or the USB debugging mode may not be enabled.

![adb devices command execution](https://docs.testsigma.com/images/mobile-device-not-displayed-recorder/adb-devices-command-execution.png)

If the issue persists, [connect with Testsigma Support on Discord](https://discord.com/invite/5caWS7R6QX) or reach out to support@testsigma.com. 
