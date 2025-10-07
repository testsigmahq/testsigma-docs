---
title: "Testsigma Agent Upgrade Guide"
metadesc: "Upgrade Testsigma Agent automatically/manually when a new version is available. Automatic upgrades are enabled by default to ensure the agent always runs the new version"
noindex: false
order: 11.7
page_id: "agent-upgrade-guide"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Upgrade Agent Automatically"
  url: "#upgrade-agent-automatically"
- type: link
  name: "Upgrade Agent Manually"
  url: "#upgrade-agent-manually"
---

---

You can upgrade Testsigma Agent automatically or manually when a new version is available. Automatic upgrades are enabled by default to ensure the agent always runs the latest version. If you prefer more control, you can switch to manual upgrades and choose when to install updates. This article discusses how to upgrade Testsigma Agent both automatically or manually.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have referred to the [documentation on setting up the Testsigma Agent on your local machine](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/).

---

## **Upgrade Agent Automatically**

1. Navigate to **Agents > Agent > Settings > Agent upgrade settings** to access upgrade settings. 
   ![Agent Automatic Upgrade](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Agent_Automatic_Upgrade.png)

2. Automatic upgrade is enabled by default and the agent upgrades itself when a new version is released.

3. Automatic upgrades ensure that the agent always runs with the latest features, improvements, and security patches.

4. No manual action is required.

---

## **Upgrade Agent Manually**

You can switch to manual upgrades if you want to control when the agent updates.

1. Navigate to **Agents > Agent > Settings > Agent upgrade settings** to access upgrade settings. 

2. Select **Manual** under **Agent upgrade settings**.
   ![Agent Manual Upgrade](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Manual_Agent_Upgrade.png)

3. When a new version is available, the UI shows a notification such as: **Current version: X.Y.Z. Latest version: A.B.C**
   ![Current version & Latest version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Current_Latest_Version_Agent.png)

4. Click **Upgrade** to install the latest version.
   ![Upgrade Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Upgrade_Agent_Button.png)

[[info | **NOTE**:]]
| If a new upgrade becomes available during an execution, the upgrade does not start until the execution finishes. The agent upgrades automatically after the execution completes.


---