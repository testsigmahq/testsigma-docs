---
title: "Setting up Android Local Devices"
order: 11.4
page_id: "Setup: Android Local Devices"
meta_desc: "How to use Testsigma Agent on your local machine and test runs on Android Local Devices."
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-Requisites"
  url: "#prerequisites"
- type: link
  name: "Setup Instructions"
  url: "#setup-instructions"
---

---

Testsigma allows you to run tests on your local Android devices in addition to Testsigma Cloud machines/devices. Step by step guid for running the tests on Android Local Devices.

---
## **Prerequisites**

  - Testsigma Agent is successfully registered. For details on registering Testsigma Agent visit [Setting up Testsigma Agent on your local machine](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/)

---
## **Setup Instructions:**

 1. Enable Developer options in your Android device. Usually Developer options can be enabled by tapping on **Settings-->About Phone-->Build number** for 7 times.
	 ![image description](https://docs.testsigma.com/images/android-setup/android_about_phone.png)


 2. Navigate to Developer Options and enable USB debugging as shown below.
 ![image description](https://docs.testsigma.com/images/android-setup/android_usb_debugging.png)
 
 3. Under Developer Options, if an option is present to **install apps over USB**, make sure this is enabled.
 4. After enabling USB debugging, connect your Android device to the machine(Where Testsigma Agent is installed and registered). Accept the the alert "Allow USB Debugging". You can select the checkbox "Always allow from this computer" if present.
	 ![image description](https://docs.testsigma.com/images/android-setup/android_trust_computer_alert.png)
	 
 5. Start the agent and navigate to agents page in Testsigma app and click on the registered agent.
 6. Under devices, you can see the device name that is connected to the registered Agent as shown below. 
	 ![image description](https://docs.testsigma.com/images/android-setup/agent-device.png)
	 
 7. To execute Android tests on this Device, you can choose Local **Devices-->Select the Registered Agent-->Select the connected device** as shown below.
 ![image description](https://docs.testsigma.com/images/android-setup/agent-device-selection-dry-run.png)

[[info | NOTE:]]
|For more info on executing Tests on local devices, visit below links <br/>
|[Dry Runs on Local Devices](https://testsigma.com/docs/runs/dry-runs-on-local-devices/) <br/>
|[Test Plan Local Executions](https://testsigma.com/docs/runs/test-plans-on-local-devices/)<br/>

 



  
