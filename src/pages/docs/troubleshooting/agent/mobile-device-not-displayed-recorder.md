---
title: "Testsigma Agent's Failure to Detect Local Devices for Mobile Test Recorder"
page_title: "Resolve Mobile Test Recorder Issue Device Detection Failures"
metadesc: "Know the possible reasons why Testsigma Agent not detecting Local Devices for Mobile Test Recorder and learn steps to fix the issue by troubleshooting"
noindex: false
order: 23.31
page_id: "troubleshoot-testsigma-agent-mobile-test-recorder-page"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Common Causes"
  url: "#common-causes"
- type: link
  name: "Android Device"
  url: "#android-device"
- type: link
  name: "ADB does not Recognize the Device Connected to the System"
  url: "#adb-does-not-recognize-the-device-connected-to-the-system"
- type: link
  name: "iOS Device"
  url: "#ios-device"

---

---

<p>This guide offers solutions to the issue of Testsigma Agent not detecting local devices for the mobile test recorder on Android and iOS devices. Below, it provides potential causes and steps to resolve them.</p>

---

## **Common causes**

Testsigma agent may be unable to detect your local mobile device for the test recorder for the following reasons:
<ul>
<li><strong>Testsigma Agent is not up-to-date</strong>: Ensure you keep Testsigma Agent up-to-date. The Agent's automatic update may fail due to network issues or incorrect configurations. Refer to the guide on <a href="https://testsigma.com/docs/agent/update-agent-manually/">updating Testsigma Agent manually</a> to update Agent manually.</li>
<li id="usb-unstable"><strong>Damaged or faulty USB ports or cables</strong>: Try connecting to a different USB port or using an alternative cable if your current one is damaged.</li>
<li><strong>Weak Wi-Fi Signal</strong>: If you have connected your device wirelessly, ensure a stable Wi-Fi connection.</li>
</ul>
<br>

---

## **Android Device**

### **Common Causes for Android Devices**

<ul>
<li><strong>Disabled Developer Options and USB Debugging</strong>: Follow the steps to <a href="https://testsigma.com/docs/agent/connect-android-local-devices/">set up a local Android device</a> to enable Developer Options and USB debugging.</li>
<li><strong>Android Debug Bridge (ADB) Recognition Failure</strong>: Verify the ADB recognition by following the steps below if <a href="https://testsigma.com/docs/troubleshooting/agent/mobile-device-not-displayed-recorder/#adb-does-not-recognize-the-device-connected-to-the-system"> ADB does not recognize the device connected to the system </a>.</li>
<li><strong>Desired Capabilities Not Modified</strong>: Use the guide on <a href="https://testsigma.com/docs/desired-capabilities/overview/">desired capabilities</a> to modify desired capabilities according to your device or application.</li>
<li id="driver-install-error"><strong>Driver installation error</strong>: If you encounter a <strong>Failed to install drivers</strong> message, follow these steps: <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/diver_installation_errorr.png" alt="driver-install-error"></a>
     <ol type="a">
     <li>Allow time for the driver installation to finish.</li>
     <li>Check device memory for sufficient space.</li>
     <li>Uninstall <strong>AppiumSettings</strong> and <strong>UI Automator Server</strong> apps, then restart the agent.<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/uninstall_appiumapp.png" alt="uninstall_appiumapp"></a></li> 
     </ol> 
</li>
</ul>

---

## **ADB does not Recognize the Device Connected to the System**

If Android Debug Bridge (ADB) fails to recognize your connected Android device, you should follow these steps to troubleshoot the problem.

### **Verification Steps**:

1. Navigate to the folder containing ADB.
2. Open the command prompt and type **adb devices**.
3. If you connect, the command prompt will display a list of attached devices, as shown in the example below: ![adb devices command execution](https://docs.testsigma.com/images/mobile-device-not-displayed-recorder/adb-devices-command-execution.png)
    Here, **AVY9KA90322022030** is the device ID.

### **If Your Device Is Not Displayed**:

If the response does not display your device, it indicates a hardware or communication problem between Android and your PC. Follow the steps below to troubleshoot the issue.

[[info | NOTE:]]
| Ensure you have installed the Android SDK on your system and set its environment path before running the ADB command.

### **Troubleshooting Android Device**

1. **Restart Your Android Device**: Begin by restarting your Android device.
2. **Turn Off and On USB Debugging**: On your device, turn off USB debugging and then re-enable it.
3. **Change USB Port**: Plug the USB cable into a different USB port on your computer.
4. **Unplug and Replug USB Cable**: Disconnect and reconnect the USB cable from your Android device, ensuring it fits securely into the device's USB port. Then, attempt syncing again.
5. **Replace USB Cable**: Try using a different USB cable that fits more securely into your Android device's USB port.

---

##  **iOS Device**

Refer to the following information to troubleshoot and resolve common issues if you encounter problems with your iOS device.

### **Common Causes for iOS Devices**

<ul>
<li id="device-locked"><strong>Device locked</strong>: You must unlock iOS devices to enable Testsigma Agent to mount the developer image and run apps. A notification displaying 'Unlock device' is shown if the device is locked. If the device is locked, a notification reads 'Unlock device'.</li>
<li id="device-trust"><strong>Computer not trusted</strong>: You must <strong>trust</strong> the connected iOS device to ensure that Testsigma Agent functions correctly. To establish trust, select your device in <strong>Finder</strong> and click <strong>Trust</strong>'.</li>
<li id="device-mount"><strong>Developer Image Not Mounted</strong>: Testsigma Agent requires mounting the developer disk image on iOS devices to run apps. You should ensure that the provisioning profile is added in <strong>Settings</strong> > <strong>iOS Settings</strong>. A notification indicating a configuration issue says, 'Ensure profile exists in iOS Settings'.</li>
</ul>

### **Troubleshooting iOS Device**

Troubleshoot and resolve issues with iOS devices by following these steps.

<ol>
<li><strong>Turn Off iOS Device</strong>: Begin by turning off your iOS device.</li>
<li><strong>Turn Off Testsigma Agent</strong>: Turn off Testsigma Agent.</li>
<li><strong>Terminate Applications or Processes</strong>: Open <strong>Task Manager</strong> on your computer and terminate the following applications or processes <strong>NodeJS</strong>, <strong>tidevice</strong>.</li>
<li><strong>Delete Testsigma Agent Logs</strong>: Locate and delete Testsigma Agent logs. For more information, refer to <a href="https://testsigma.com/docs/agent/troubleshooting/logs/">fetching agent test logs</a>.</li>
<li><strong>Restart Testsigma Agent</strong>: Restart the Testsigma agent.</li>
<li><strong>Restart iOS Device and Connect</strong>: Reboot your iOS device and connect it to your computer.</li>
<li><strong>Change USB Port</strong>: If the iOS device does not appear on the list of connected devices, connect the device with a different USB port on your computer.</li>
</ol>

[[info | NOTE:]]
| If the troubleshooting steps above do not resolve the problem, you can contact **Testsigma Support** on [Discord](https://discord.com/invite/5caWS7R6QX) or [support@testsigma.com](mailto:support@testsigma.com). You can also use the **Instant Chat** Options for prompt assistance.

---