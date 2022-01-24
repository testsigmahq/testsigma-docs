---
title: " Setting up Testsigma Agent on your local machine"
metadesc: "How to install Testsigma Agent on your local machine and register it to your Testsigma Account for local inspection and test runs."
order: 11.3
page_id: " Setting up Testsigma Agent on your local machine"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Table of Contents"
  url: "#table-of-contents"
- type: link
  name: "Download Testsigma Agent"
  url: "#i-download-testsigma-agent"
- type: link
  name: "Extract the Testsigma Agent Zip file"
  url: "#ii-extract-the-testsigma-agent-zip-file"
- type: link
  name: "Start the Testsigma Agent Server"
  url: "#iii-start-the-testsigma-agent-server"
- type: link
  name: "Register the Testsigma Agent"
  url: "#iv-register-the-testsigma-agent"
- type: link
  name: " "
  url: " "
- type: link
  name: " "
  url: " "

---

---
## **Table of Contents**

Setting up Testsigma Agent on your local machine<br>
&emsp; I.   Download Testsigma Agent<br>
&emsp;II.  Extract the Testsigma Agent Zip file <br>
&emsp;III. Start the Testsigma Agent Server<br>
&emsp;&emsp;&emsp;For Windows<br>
&emsp;&emsp;&emsp;For Mac/Linux<br>
&emsp;IV. Register the Testsigma Agent<br>
&emsp;&emsp;&emsp;Checking Agent running status<br>
&emsp;&emsp;&emsp;Connecting the Agent to Testsigma App<br>

<br>
---
##**I. Download Testsigma Agent**

Go to the Agents page (Navigation Bar > Agents) and click on the ‘Download Agent’ button on the top right corner to download the latest version of Testsigma Agent.
![agents page and the button to download agent](https://docs.testsigma.com/images/setup-on-windows-mac-linux/agents-page-download-agent-button.png)

<br>
---
##**II. Extract the Testsigma Agent Zip file**
Here are the suggested locations to place the extracted Testsigma Agent folder:


| Operating System     | Preferred Agent location | 
| :---        | :---   |        
| Windows     | C:\Users\<your_username>\      | 
| Mac   | /Users/<your_username>/    | 
| Linux   | /Users/<your_username>/     | 

Replace the <your_username> part with your Account username.

The home directory is recommended so as to avoid hassles of setting file permissions and ownership and also to avoid file corruption due to syncing with iCloud or Google Drive.

Unzip the downloaded Agent zip file in the directory you choose..

<br>
---
##**III. Start the Testsigma Agent Server**

**For Windows**
1. Navigate to the Testsigma Agent installation folder and double-click the ‘start.bat’ or run “start.bat” in the command line file to start the Testsigma Agent.

Wait for a few minutes for the Testsigma Agent to start up. Check the Testsigma Agent icon in the System Tray.

![Testsigma Agent windows System Tray icon](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-windows-tray-icon.png)

If the icon doesn’t appear in 10 minutes, please contact Testsigma Support.


**For Mac/Linux**

Navigate to the Testsigma Agent installation folder and double-click the ‘start.sh’  or run “start.bat” in the command line to start the Testsigma Agent startup in a new Terminal window.

Wait for a few minutes for the Testsigma Agent to start up. Check the Testsigma Agent icon in the System Tray.

![Testsigma Agent Mac System Tray icon](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-mac-tray-icon.png)

If the icon doesn’t appear in 10 minutes, please contact Testsigma Support.

<br>
---
##**IV. Register the Testsigma Agent**

**Checking Agent running status**
Once the Agent has started you will get a System Tray icon. The status will show as **STARTED** once it's ready. If it is showing the status as **STARTING**, please wait for a few moments for it to start. 

You can use the menu options to **Quit** and **Restart the Agent**.

**Connecting the Agent to Testsigma App**

1. Once your Testsigma agent is up and running and shows the STARTED status, click on the Agent tab on the Left-hand side Navigation bar.
   
![Testsigma Dashboard Agents Icon](https://docs.testsigma.com/images/setup-on-windows-mac-linux/dashboard-agent-icon.png)

2. On the Agent page click on **Add a new Agent**

![Testsigm Agents page Download button](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-page-download-button.png)


It will try to establish a connection to the agent running on your machine as shown below:
![Testsigma Agents Register Agent Overlay page](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-register-agent-overlay.png)

3. Enter a title/name for your machine and click on the Save button.

![Testsigma Register New Agent Form ](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-register-new-form.png)

[[info | NOTE:]]
|By default, Agent will be **Visible to Everyone**. You can make this agent private to your account by unchecking **Visible to Everyone**<br>
|Also, the values given for **HTTP** and **HTTPS port** can be left as it is. Only if you want to run the agent on different ports, change the values.

4. Once you have entered the Title, click on save to save the Agent. After saving, the agent that you registered will be displayed with all the available browsers in that Agent machine: 

![Testsigma Agents list new Agent](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-list-new-agent.png)

It might take a couple of minutes for the Operating System version and the Browser names to show up. Refer to the [Testsigma Agent troubleshooting guide](https://testsigma.com/docs/agent/troubleshooting/setup-issues) if the details don’t show up after 10 minutes.

