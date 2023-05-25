---
title: "Setting up iOS Local Devices"
order: 11.5
page_id: "Setup: iOS Local Devices"
metadesc: "Run tests on your local iOS devices in addition to Testsigma Cloud machines/devices. Learn how to setup iOS Local Devices in Testsigma application."
noindex: false
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

Testsigma allows you to run tests on your local iOS devices in addition to Testsigma Cloud machines/devices. Step by step guid for running the tests on iOS Local Devices.

---
## **Prerequisites**
- Testsigma Agent is successfully registered. For details on registering Testsigma Agent visit [Setting up Testsigma Agent on your local machine](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/)
- Configure Provisioning profiles to allow local automation. For details on iOS Settings visit [Configure your Local iOS Devices](https://testsigma.com/docs/configuration/ios-settings/)

---
## **Setup Instructions:**

1. Start the agent and navigate to agents page in Testsigma app and click on the registered agent.
2. Under devices, you can see the device name that is connected to the registered Agent as shown below.
   ![image description](https://docs.testsigma.com/images/ios-setup/agent-device.png)

3. To execute IOS tests on this Device, you can choose Local **Devices-->Select the Registered Agent-->Select the connected device** as shown below.
   ![image description](https://docs.testsigma.com/images/ios-setup/agent-device-selection-dry-run.png)

[[info | NOTE:]]
|For more info on executing Tests on local devices, visit below links <br/>
|[Dry Runs on Local Devices](https://testsigma.com/docs/runs/dry-runs-on-local-devices/) <br/>
|[Test Plan Local Executions](https://testsigma.com/docs/runs/test-plans-on-local-devices/)<br/>
