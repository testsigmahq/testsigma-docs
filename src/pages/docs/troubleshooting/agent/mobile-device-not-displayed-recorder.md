---
title: "Testsigma Agent not detecting local devices for mobile test recorder"
page_title: " Troubleshooting “Testsigma Agent not detecting Local Devices for Mobile Test Recorder” error"
metadesc: "Know the possible reasons why Testsigma Agent not detecting Local Devices for Mobile Test Recorder and learn steps to fix the issue by troubleshooting"
noindex: false
order: 23.2
page_id: "Testsigma Agent not detecting Local Devices for Mobile Test Recorder"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Causes"
  url: "#Causes"
- type: link
  name: "Android device"
  url: "#Android-device"
- type: link
  name: "ADB does not recognize the device connected to the system"
  url: "#adb-does-not-recognize-the-device-connected-to-the-system"
- type: link
  name: "iOS device"
  url: "#iOS-device"

---

---
<p>
This article provides methods to solve the error <em>Testsigma agent not detecting local devices for mobile test recorder</em> for Android and iOS devices.
</p>

## **General causes**

Testsigma agent may be unable to detect your local mobile device for the test recorder for the following reasons:
<ul>

<li><strong>Testsigma Agent is not up-to-date</strong>: Testsigma Agent includes an automatic update feature. However, if the auto-update fails due to bad network conditions or incorrect configuration, you can update the Agent manually. <em>For more information refer to,
<a href="https://testsigma.com/docs/agent/update-agent-manually/">updating Testsigma agent manually</a></em>.
</li>

<li><strong>Damaged or faulty USB ports or cables</strong>: In this case, you should try connecting to a different the USB port or use a different cable.</li>
<li>A weak Wi-Fi signal, if your device is connected via Wi-Fi.</li>
</ul>
<br>

---

## **Android device**

**Causes**
<ul>
<li><strong>Developer options and USB debugging are disabled</strong>: To enable developer options and USB debugging, refer to <a href="https://testsigma.com/docs/agent/connect-android-local-devices/">setting up local Android device</a>.
</li>
<li><strong>Android Debug Bridge (ADB) fails to recognize the device connected to the system</strong>: To verify if ADB recognizes your device, refer to the section below (ADB does not recognize the device connected to the system).</li>
<li><strong>Desired capabilities are not modified as per device or application.</strong> To modify desired capabilities, refer to <a href="https://testsigma.com/docs/desired-capabilities/overview/">desired capabilities</a> and a <a href="https://testsigma.com/docs/desired-capabilities/most-common/">list of desired capabilities</a>.</li>
<li><strong>Driver installation error</strong>: Testsigma agent installs <kbd>AppiumSettings</kbd> and <kbd>UIAutomator Server</kbd> apps to aid running executions on Android devices. If this fails, a notification is displayed reading <em>Failed to install drivers</em>. In such instances, ensure your device remains connected for some time to finish installing drivers.</li>
</ul>

## **Android Debug Bridge does not recognize the device connected to the system**

To verify if the ADB interface does not recognize your Android device, follow the below steps:

* Navigate to the folder containing ADB and open the command prompt. From the command line, type <kbd>adb devices</kbd>.If connected, you will see the list of devices attached. If the device is connected successfully, the response would be as shown in the figure below:</li>

![adb devices command execution](https://docs.testsigma.com/images/mobile-device-not-displayed-recorder/adb-devices-command-execution.png) where `AVY9KA90322022030`is the device ID.

* If your device is not displayed in the response, it indicates a hardware or communication problem between Android and your PC. Follow the below steps to troubleshoot the issue.


[[info | NOTE:]]
|We need to make sure that the Android SDK is installed in the system and its environment path is set, before running the ADB command.

### **How to troubleshoot**
<ol>
<li>Restart your Android device.</li>
<li>If restarting does not resolve the issue, then try the following: 
     <ol type="a">
     <li>On your device, turn off USB debugging and then turn it back on again.</li>
     <li>Plug the USB cable into a different USB port on your computer.</li>
     <li>Unplug or replug the USB cable from your Android device. Ensure that the USB cable fits tightly into your Android device’s USB port, then try syncing again.</li>
     <li>Try replacing the USB cable with one that fits more tightly into your Android device's USB port.</li>
     </ol>
</ol>

---

##  **iOS device**

###**Causes**

<ul>
<li><strong>Device locked</strong>: iOS devices require the device to be unlocked to allow Testsigma Agent to mount developer image and run apps on the device.
If the device is locked, a notification is displayed reading 'Unlock device'.</li>
<li><strong>Computer not trusted</strong>: iOS devices require the connected computer running Testsigma Agent to be Trusted. This is required to mount developer image and run apps on the device.To <strong>Trust</strong> your computer,select your device in <strong>Finder</strong> and click <strong>Trust</strong>.</li>
<li><strong>Developer image could not be mounted</strong>: iOS devices require developer disk image to be mounted to allow Testsigma Agent run apps on the device. Ensure provisioning profile is added on Settings > iOS Settings page.
If profile is not configured, a notification reading 'Ensure profile exists in iOS Settings' is displayed.</li>
</ul>

For iOS devices follow the below steps to resolve the issue.

### **How to troubleshoot**

<ol>
<li>Turn off the iOS device.</li>
<li>Turn off the Testsigma agent.</li>
<li>Open <strong>Task Manager</strong> on your computer, and terminate the following applications or processes:
<ol>
<li>NodeJS</li>
<li>tidevice</li></ol>
</li>
<li>Delete Testsigma agent logs. <em>For more information on locating agent logs, refer to <a href="https://testsigma.com/docs/agent/troubleshooting/logs/">fetching agent test logs</a>.</em>
</li>
<li>Restart the Testsigma agent.</li>
<li>Restart the iOS device and connect it to your computer.</li>
<li>If the iOS device does not appear on the list of connected devices, connect the device with a different USB port on your computer.</li>
</ol>

If the above troubleshooting steps did not help and the issue persists, [connect with Testsigma Support on Discord](https://discord.com/invite/5caWS7R6QX) or reach out to s     [support@testsigma.com](mailto:support@testsigma.com).

---