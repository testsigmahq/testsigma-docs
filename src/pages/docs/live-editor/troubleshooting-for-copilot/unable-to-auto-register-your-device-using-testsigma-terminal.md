---
title: "Unable to Auto-Register Your Device Using Testsigma Terminal?"
pagetitle: "Unable to Auto-Register Your Device Using Testsigma Terminal?"
metadesc: "Learn how to fix device auto-registration issues in Testsigma Terminal that may occur due to server conflicts or unforeseen errors."
noindex: false
order: 10.26
page_id: "unable-to-auto-register-your-device-using-testsigma-terminal-?"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Register Your Device Manually"
  url: "#steps-to-register-your-device-manually"
---

---

The agent is responsible for performing local executions. The agent should be registered with the device for it to perform the same.

By default, Testsigma Terminal automatically registers your device once the Terminal is set up. However, in some cases, you may encounter auto-registration issues due to a conflicting server or other unforeseen circumstances. This article will guide you on how to manually register your device in such cases.

---
## **Steps to Register Your Device Manually**

1. In the **Testsigma Terminal** window, click **Retry**. This tries to automatically register your device again. 
   ![Retry](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/troubleshooting_for_copilot/device_register_1.png)

2. If the issue persists, click **Register Device Manually**. You will be redirected to Testsigma. 
   ![Register Device Manually](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/troubleshooting_for_copilot/device_register_2.png)

3. In the **Add New Agent** dialog, enter a name, specify the maximum sessions for the machine, and click **Add Agent**. 
   ![Add New Agents](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/troubleshooting_for_copilot/device_register_3.png)

[[info | **NOTE**:]]
| - Deselect the **Public** checkbox if you don’t want this agent to be visible to others. 
| ![Public](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/troubleshooting_for_copilot/device_register_4.png)
| - Select the **Activate Later** checkbox if you prefer to activate the agent at a later time.
| ![Activate Later](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/troubleshooting_for_copilot/device_register_5.png)

4. If the issue continues, click **Force Reset and Restart**. This will delete existing dependencies, re-download them and retry automatic registration.
   ![Force Reset and Restart](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/troubleshooting_for_copilot/device_register_6.png)
---