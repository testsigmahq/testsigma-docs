---
title: "Setting up Android Local Devices"
order: 11.4
page_id: "Setup: Android Local Devices"
metadesc: "Run tests on your local Android devices in addition to Testsigma Cloud machines/devices. Learn how to setup Android Local Devices in Testsigma application."
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Setup Instructions"
  url: "#setup-instructions"
---

---

Testsigma allows you to run tests on your local Android devices in addition to Testsigma cloud machines/devices. This article discusses how to set up Android local devices in Testsigma.

---
## **Prerequisites**
- You should have Testsigma agent on your local machine. For more information, refer to https://testsigma.com/docs/agent/setup-on-windows-mac-linux/.
- Enable Developer options in your Android device. 

---
## **Setup Instructions:**
1. Open **Settings** and tap on **About Phone**.
![About Phone](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/slaaphone3.png)

2. Go to **Software information** and tap on **Build number** 7 times. 
![Build Number](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/slabuildno.png)


3. Open **Developer Options** from **Settings**.
![Developer Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sladevops.png)


4. Enable **USB Debugging** toggle. 
![USB Debugging](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/slausbd.png)


5. Connect your Android device to the machine (Where Testsigma Agent is installed and registered). Accept the alert **Allow USB Debugging**. You can select the checkbox **Always allow from this computer** if present.
![Allow USB Debugging](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/slausbdbconnect.png)


6. Navigate to **Agents** page in Testsigma app and click on the registered agent.
![Agents](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/slaapge.png)


7. Under **Devices**, you can see the device that is connected to the registered agent as shown below.
![Devices](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sladevices.png)


8. To execute android tests on this Device, you can select the **Connected Machine** and **Device**. 
![Connected Machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/slacmd.png)


[[info | NOTE:]]
|For more info on executing Tests on local devices, refer to: <br/>
|- [Dry Runs on Local Devices](https://testsigma.com/docs/runs/dry-runs-on-local-devices/) <br/>
|- [Test Plan Local Executions](https://testsigma.com/docs/runs/test-plans-on-local-devices/)<br/>

---