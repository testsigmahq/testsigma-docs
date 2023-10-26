---
title: "Upgrade Testsigma Agent Automatically"
metadesc: "Testsigma application has the capability to download & install the agent automatically. This article discusses how to upgrade Testsigma agent automatically"
noindex: false
order: 11.93
page_id: "Upgrade Testsigma Agent Automatically"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Upgrade Testsigma Agent Automatically"
  url: "#steps-to-upgrade-testsigma-agent-automatically"
---

---

Testsigma can download and install the agent automatically if there's a higher version available for installation. This article discusses how the agent is upgraded automatically in Testsigma. 

---

## **Prerequisites**

- You should know how to [set up Testsigma agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/).

---

## **Steps to Upgrade Testsigma Agent Automatically**

1. Start Testsigma agent. *For more information, refer to [start agent as a process](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#start-the-testsigma-agent-server-as-a-process).*


2. Once you start the agent, if a higher version is available, it'll automatically download the agent. 

![Agent Start](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agentupstart.png)


[[info | **NOTE**:]]
| - You'll get the following message if there's an interruption in the network. 
|
| ![Upgrade Failed](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/upgradefailed.png)
|
| - Once the network is stable, the download will start from the beginning once again.


3. Post download, the agent will start automatically, and you'll get the **Upgrade Success** message. 

![Upgrade Success](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agentupgrade.png)


---

