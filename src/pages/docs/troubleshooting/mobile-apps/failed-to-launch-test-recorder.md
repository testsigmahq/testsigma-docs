---
title: Failed to Start Mobile Test Recorder
metadesc: "Understand why you failed to start mobile test recorder. Learn effective troubleshooting methods to fix the issue if you cannot start the mobile test recorder."
noindex: false
order: 23.61
page_id: Failed to Start Mobile Test Recorder
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Invalid Activity name in Manifest"
  url: "#invalid-activity-name-in-manifest"
- type: link
  name: "Vendor-specific Device Customizations"
  url: "#vendor-specific-device-customizations"
- type: link
  name: "Make sure the cable connection is not faulty"
  url: "#make-sure-the-cable-connection-is-not-faulty"

---

---

There are several reasons why the **Failed to Start Mobile Test Recorder** error might appear. Typically, this error occurs due to issues with the configuration or connectivity of the mobile test recorder and the device. 

The simplest way to troubleshoot this error is to check the logs from the mobile test recorder, which will reveal the actual reason for the error. Here are some steps that can be taken to resolve the error:

---

## **Invalid Activity name in Manifest**

The initial or default activity name mentioned in the Manifest file for the Android app might be different from the actual splash screen activity name.

**Reason**

For example, in the case of the Wikipedia application, the initial activity mentioned in the manifest file is **org.wikipedia.main.MainActivity**. However, the first activity that started when the app was launched was **org.wikipedia.main.SplashScreenActivity**.

Therefore, the mobile test recorder waits for the activity mentioned in the manifest until a timeout and throws the above error.

**Solution**

The ideal solution is to change the manifest and mention the same activity that is started first as the default activity.
 
However, until the developers make that change, you can work around it by mentioning the activity and package names in the second screen **Start Manually**.

---

## **Vendor-specific Device Customizations**

**Reason**

Some device vendors, like **Xiaomi**, **Vivo**, and **Huawei**, customise the **Android OS** according to their needs and security concerns. You should do some **additional setup** to connect these devices seamlessly.

**Solution**

1. **Go to Settings**: Tap on the **Settings** app icon on your Android device's home screen or app drawer.<br>
[How to enable developer options](https://www.greenbot.com/article/2457986/how-to-enable-developer-options-on-your-android-phone-or-tablet.html)

2. **Scroll down to Additional Settings**: Scroll down the settings menu until you see **Additional Settings** and tap on it.

3. **Enable Developer Options**: Tap on **Developer options** and then toggle the switch to **On** to enable developer options. If the developer options are already enabled, skip this step.

4. **Turn on USB Debugging**: Scroll down in Developer options until you see **USB debugging** and toggle the switch to **On** to enable USB debugging. A prompt will appear to confirm your choice - tap **OK** to proceed.

5. **Turn on Install via USB**: In Developer options, scroll down until you see **Install via USB** and toggle the switch to **On** to enable installing apps via USB.

6. **Set Default USB Configuration to Charging**: In Developer options, scroll down until you see **Default USB configuration** and tap on it. Select **Charging** from the list of options to set the default USB configuration to charging.

**For Xiaomi devices**:

1. **Turn off MIUI optimization and restart the device**: Go to **Settings** > **Additional Settings** > **Developer Options** > **Turn off MIUI optimization**. **Restart** the device to apply the changes.

2. From above, follow the steps **Turn on USB Debugging** and **Turn on Install via USB**.

2. **Turn on USB Debugging (Security Settings)**: In the Developer options, scroll down until you see **USB Debugging (Security Settings)** and toggle the switch to **On** to enable USB debugging with security settings.

[[info | NOTE:]]
| If **Failed to install drivers Troubleshoot** appears while starting the **testsigma agent** in **Xiaomi** Mobile from above, follow the **Turn off MIUI optimization and restart the device** and **Turn on USB Debugging (Security Settings)** steps.

That's it - you have now enabled **USB debugging** and **installed via USB** on your Android device.

---

## **Make sure the cable connection is not faulty**

**Reason**

If you have checked the above issues, a faulty connection cable might be another common reason for the error.
 
**Solution**

Try the below steps to make sure a faulty cable is not leading to frequent disconnection of the device:

1. **Open the Terminal or CMD Prompt**: Open the **Terminal** on a **Mac** or **Linux** machine, or the **Command Prompt** on a **Windows** machine.

2. **Type in "adb devices" command and see that your device is listed**: Type the command **adb devices** into the Terminal or Command Prompt window and press Enter. This will show you a list of all the devices connected to your computer via USB, including your Android device.

3. **Repeat the process around 5-6 times with an interval of 10 seconds**: In order to ensure that your device is properly detected, repeat the **adb devices** command around 5-6 times, waiting for around 10 seconds between each command. This will help to rule out any temporary connection issues or delays that may be preventing your device from being detected by the computer.

If your device is still not being detected after trying these steps, here are a few additional troubleshooting tips:

- Make sure that your device is properly connected to your computer via USB, and that USB debugging is enabled in the Developer options on your Android device.
- Try using a different USB cable or USB port on your computer to rule out any potential hardware issues.
- Restart both your Android device and your computer to see if this resolves the issue.
- Check that you have the latest version of the Android SDK platform tools installed on your computer.


If your device is listed every time successfully, you can mostly rule out this issue and keep the device and the cable untouched.

If the issue persists, [connect with Testsigma Support on Discord](https://discord.com/invite/5caWS7R6QX) or contact **support@testsigma.com**. 

---
