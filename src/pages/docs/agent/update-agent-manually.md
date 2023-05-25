---
title: "Update Testsigma agent manually"
metadesc: "In case the auto-update failures of Testsigma Agent due to bad network conditions or incorrect configuration, you can update the Agent manually."
order: 11.6
page_id: "Update Testsigma Agent manually"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "For Windows"
  url: "#for-windows"
- type: link
  name: "For Mac/Linux"
  url: "#for-maclinux"

---

---
You should already know about Testsigma Agent and its usage. If not, refer to [Testsigma Agent - Overview](https://testsigma.com/docs/agent/overview/).

Testsigma Agent includes an automatic update feature. However, in case the auto-update fails due to bad network conditions or incorrect configuration, you can update the Agent manually.

Given below are the steps to be followed in order to update the Agent to the latest version manually.

<br>


---
##**For Windows**

If the Testsigma Agent is already running, we need to stop it before updating the Agent. You will see a Testsigma Agent icon in the System Tray if it is already running. 

![Testsigma Agent windows System Tray icon](https://docs.testsigma.com/images/update-agent-manually/ts-agent-windows-tray-icon.png)

Else, skip to Step 3.

1. First, open a new Command Prompt and navigate to the directory where Testsigma Agent is located.
   For example, **cd D:/TestsigmaAgent**
2. Execute the stop.bat script by typing the following command and pressing Enter.
**./stop.bat**
3. Delete the contents of the ‘TestsigmaAgent’ folder.
4. From the Testsigma Agents page, download the latest Agent by clicking on the ‘Download Agent’ button on the top right corner. The Testsigma Agent zip file will be downloaded.
5. Extract the contents of the ‘TestsigmaAgent’ folder within the downloaded zip file and place it in the ‘TestsigmaAgent’ folder in your machine.
6. Once again, open a new Command Prompt and navigate to the directory where Testsigma Agent is located as in Step 1.
7. Start the Testsigma Agent by typing the following command and pressing Enter key.
**./start.bat**

<br>


---
##**For Mac/Linux**
If the Testsigma Agent is already running, we need to stop it before updating the Agent. You will  see a Testsigma Agent icon in the Status bar if it is already running. 

![Testsigma Agent Mac System Tray icon](https://docs.testsigma.com/images/update-agent-manually/ts-agent-mac-tray-icon.png)

Else, skip to Step 3.<br>
1. First, open a Terminal and navigate to the directory where Testsigma Agent is located.<br>
For example, **cd /Users/< username >/TestsigmaAgent**
2. Execute the stop.sh script by typing the following command and pressing Enter.
**./stop.sh**
3. Delete the contents of the ‘TestsigmaAgent’ directory.
4. From the Testsigma Agents page, download the latest Agent by clicking on the ‘Download Agent’ button on the top right corner. The Testsigma Agent zip file will be downloaded.
5. Extract the contents of the ‘TestsigmaAgent’ directory within the downloaded zip file and place it in the ‘TestsigmaAgent’ directory in your machine.
6. Once again, open a new Terminal and navigate to the directory where Testsigma Agent is located as in Step 1.
7. Start the Testsigma Agent by typing the following command and pressing Enter key.<br>
**./start.sh**

[[info | NOTE:]]
|If you are facing any challenges connecting Testsigma Agent after updating, try deleting completely. [Refer to this doc to delete forcefully](https://testsigma.com/docs/agent/force-delete/).








