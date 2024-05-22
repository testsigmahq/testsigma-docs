---
title: "Unable to start WDA Process on iPhone"
metadesc: "Understand why you're unable to start WDA Process on iPhone in Testsigma | Know the possible reasons and solutions to resolve the issue"
noindex: false
order: 23.66
page_id: "Troubleshooting “Unable to start WDA Process on iPhone” error"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Troubleshoot"
  url: "#steps-to-troubleshoot"
---

---
If you are facing an issue where you are unable to start the WDA process on your iPhone, you can follow the troubleshooting steps given below:

For Example, let's say you have updated an iOS device with the latest version we are not supporting. You can contact the customer support team for the latest version of the device support files. Once you receive the files, perform the steps given below:

<br>

## **Steps to Troubleshoot**
- Stop the Testsigma Agent.
- Disconnect the iOS device.
- Navigate to ***C:\Users\dhaya\Downloads\TestsigmaAgentWindows\TestsigmaAgent\ios\DeviceSupport\ &lt;version&gt;***
- Delete the **&lt;version&gt;** folder.
- Extract the zip file that was shared by Testsigma and add it to the above-mentioned path.
- Start the Testsigma Agent.
- Once it is started, connect the iOS device.
- Try to record the elements and observe.

[[info | **NOTE**:]]
|Whenever you update your iPhone to a higher version and experience any issues, reach out to Testsigma support. We can provide you the required device support files to ensure that the customer's device is compatible with the Testsigma platform.