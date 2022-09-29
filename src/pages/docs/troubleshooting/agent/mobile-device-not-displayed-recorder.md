---
title: "Testsigma Agent not detecting local devices for mobile test recorder"
page_title: " Troubleshooting “Testsigma Agent not detecting Local Devices for Mobile Test Recorder” error"
metadesc: "See why Testsigma Agent may  not be detecting Local Devices for Mobile Test Recorder."
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

## **Causes**

Testsigma agent may be unable to detect your local mobile device for the test recorder for the following reasons:
<ul>

<li>Testsigma agent is not up-to-date. <em>For more information on updating Testsigma agent,
<a href="https://testsigma.com/docs/agent/update-agent-manually/">updating Testsigma agent manually</a></em>.
</li>

<li>Damaged or faulty USB ports or cables (in this case, you should try to change the USB port or cable).</li>
<li>A weak Wi-Fi signal, if your device is connected via Wi-Fi.</li>
</ul>
<br>

## **Android device**

For Android device, before troubleshooting you will need to make sure of the following:
<ul>
<li>Developer options and USB debugging are enabled. <em>For more information on enabling developer options and USB debugging, refer to <a href="https://testsigma.com/docs/agent/connect-android-local-devices/">setting up local Android device</a>.
</em></li>
<li>Android Debug Bridge (ADB) fails to recognize the device connected to the system. <em>To verify if ADB recognizes your device, refer to the section below (ADB does not recognize the device connected to the system).</em></li>
<li>Desired capabilities are modified as per device or application. <em>For more information on desired capabilities, refer to <a href="https://testsigma.com/docs/desired-capabilities/overview/">desired capabilities</a> and a <a href="https://testsigma.com/docs/desired-capabilities/most-common/">list of desired capabilities</a>.</em></li>
</ul>

## **Android Debug Bridge does not recognize the device connected to the system**

To verify if the ADB interface does not recognize your Android device, follow the below steps:

* Navigate to the folder containing ADB and open the command prompt. From the command line, type`adb devices`.If connected, you will see the list of devices attached. If the device is connected successfully, the response would be as shown in the figure below:</li>

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


##  **iOS device**

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