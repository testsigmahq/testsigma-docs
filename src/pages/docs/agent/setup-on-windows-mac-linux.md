---
title: " Setting up Testsigma Agent on your local machine"
metadesc: "How to install Testsigma Agent on your local machine and register it to your Testsigma Account for local inspection and test runs."
noindex: false
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
  name: "Install via executables"
  url: "#install-via-executables"
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
&emsp; I.   Download and Install the Testsigma Agent<br>
&emsp;II. Start the Testsigma Agent Server<br>
&emsp;&emsp;&emsp;For Windows<br>
&emsp;&emsp;&emsp;For Mac/Linux<br>
&emsp;III. Register the Testsigma Agent<br>
&emsp;&emsp;&emsp;Checking Agent running status<br>
&emsp;&emsp;&emsp;Connecting the Agent to Testsigma App<br>
&emsp;&emsp;&emsp;Delay the Activation of your Testsigma Agent<br>

<br>

---

##**I. Download and Install the Testsigma Agent**

Testsigma Agents are available to download either as executables or as zip files. You can choose the approach that suits you the best. 

**For downloading the zip file, follow below steps:**

1. Go to the Agents page (Navigation Bar > Agents)
2. Click on the ‘Download Agent’ button on the top right corner to download the latest version of Testsigma Agent.
![agents page and the button to download agent](https://docs.testsigma.com/images/setup-on-windows-mac-linux/agents-page-download-agent-button.png)
3. After yu have downloaded the agent zip file, extract the Testsigma agent zip file to location of your choice. Some suggested locations to place the Testsigma agent folder are mentioned in the table below:

  | Operating System     | Preferred Agent location | 
  | :---        | :---   |        
  | Windows     | C:\Users\<your_username>\      | 
  | Mac   | /Users/<your_username>/    | 
  | Linux   | /Users/<your_username>/     | 

  Replace the <your_username> part with your Account username.

  The home directory is recommended so as to avoid hassles of setting file permissions and ownership and also to avoid file corruption due to syncing with iCloud or Google Drive.




**Alternatively, for downloading the executable file, follow steps as mentioned below:**
1. Go to the Agents page (Navigation Bar > Agents)
2. Hover on the ‘Download Agent’ button on the top right corner.  
3. From the dropdown that appears, you need to click on the executable supported by your machine. For windows - click on 'exe', for mac - click on 'dmg', for linux - click on 'bin' to download the latest version of Testsigma Agent. The drop-down on the agents page looks like below:

![Dropdown to download executables for agent installation](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agents-page-executables-dropdown.png)
4. Double click on the downloaded file.
5. The installer will prompt you choose the path for installation. Choose the path where you would like to install the agent.
6. Let the installer run till completion.


##**II. Start the Testsigma Agent Server**

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
##**III. Register the Testsigma Agent**

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

![Add new agent form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/add-a-new-agent-form-activate-later.png)

[[info | NOTE:]]
|By default, Agent will be **Visible to Everyone**. You can make this agent private to your account by unchecking **Visible to Everyone**<br>
|Also, the values given for **HTTP** and **HTTPS port** can be left as it is. Only if you want to run the agent on different ports, change the values.

4. Once you have entered the Title, click on save to save the Agent. After saving, the agent that you registered will be displayed with all the available browsers in that Agent machine: 

![Testsigma Agents list new Agent](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-list-new-agent.png)

It might take a couple of minutes for the Operating System version and the Browser names to show up. Refer to the [Testsigma Agent troubleshooting guide](https://testsigma.com/docs/agent/troubleshooting/setup-issues/) if the details don’t show up after 10 minutes.

---

##**Delay the Activation of your Testsigma Agent**

There might be times when you want to add the Testsigma agents to your Testsigma account but want to activate them later. Below is how you can do that:
1. Go to the Agents Page from the Left Navigation Menu.
2. Click on the "Add a new Agent" Button on the top right corner of the Agents page.
3. On the "Add a new Agent" form, add the name/title for the agent. Make sure to check the "Activate Later" checkbox, as also highlighted in the screenshot below:

![Add new agent form with activate later checkbox checked](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/add-a-new-agent-form-activate-later-checked.png)

4. Now you can click on the 'Save' button to save the agent. 
5. On successfully saving the agent, you will be taken to the agent config page that contains the command that you can use to activate the agent later, as also shown in the screenshot below:

 ![Configs page on a newly added agent with command too activate the agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agent-config-command-to-activate.png)

 ---

