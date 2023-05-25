---
title: "Force Delete Testsigma Agent Manually"
metadesc: "This article discusses in Detail on how to locate Testsigma Agent Configuration file and how to stop/delete Testsigma Agent manually."
noindex: false
order: 11.8
page_id: "Force Delete Testsigma Agent Manually"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Location of Testsigma Agent Configuration file"
  url: "#location-of-testsigma-agent-configuration-file-agentproperties"

---

---
1. Stop Agent

Once the agent is started, you can see the Testsigma Agent icon on the status bar (Mac/Linux) or System Tray (Windows). Here’s a preview on Mac:

![Testsigma agent icon in the status bar once the agent is started](https://docs.testsigma.com/images/force-delete/testsigma-agent-icon-once-started.png)

Click on the Testsigma Agent icon to reveal the menu and click on the Quit option to stop the agent.
2. Delete the Folder from which the agent was started.
3. Delete Agent entry in Testsigma agents list view.
4. Delete agent.properties file.




---
## **Location of Testsigma Agent Configuration file (agent.properties)**

The Testsigma Configuration/Log files are located at the following locations depending on the Operating System used:

| Operating System   | Location of Agent directory |
| :---        | :---   |        
| Windows  | %userprofile%\AppData\Roaming\Testsigma\Agent\config\   | 
| Linux | $HOME/.testsigma/agent/config/        | 
| Mac   | $HOME/Library/Application Support/Testsigma/Agent/config/   | 

- The %userprofile% points to the C:\Users\<username> folder where <username> is replaced by your Windows login username.

- $HOME in Linux/Mac also points to the user's home folder



