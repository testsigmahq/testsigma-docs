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
  name: "Download Testsigma Agent As Zip File"
  url: "#i-download-testsigma-agent"
- type: link
  name: "Install Via Executables"
  url: "#install-via-executables"
- type: link
  name: "Extract the Testsigma Agent Zip file"
  url: "#ii-extract-the-testsigma-agent-zip-file"
- type: link
  name: "II. Start the Testsigma Agent Server"
  url: "#iii-start-the-testsigma-agent-server"
- type: link
  name: "Register the Testsigma Agent"
  url: "#iv-register-the-testsigma-agent"
- type: link
  name: "Run Testsigma Agent Via Docker"
  url: "#run-testsigma-agent-via-docker"

---


---
## **Table of Contents**

Setting up Testsigma Agent on your local machine<br>
[I. Download And Install The Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#i-download-and-install-the-testsigma-agent)<br>
&emsp;&emsp;&emsp;[Download Testsigma Agent As Zip File](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#download-testsigma-agent-as-zip-file)<br>
&emsp;&emsp;&emsp;[Install Via Executables](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#install-via-executables)<br>
[II. Start The Testsigma Agent Server](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#ii-start-the-testsigma-agent-server)<br>
&emsp;&emsp;&emsp;[For Windows](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#for-windows)<br>
&emsp;&emsp;&emsp;[For Mac/Linux](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#for-maclinux)<br>
[III. Register The Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#iii-register-the-testsigma-agent)<br>
&emsp;&emsp;&emsp;[Checking Agent Running Status](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#checking-agent-running-status)<br>
&emsp;&emsp;&emsp;[Connecting The Agent To Testsigma App](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#connecting-the-agent-to-testsigma-app)<br>
&emsp;&emsp;&emsp;[Delay The Activation Of Your Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#delay-the-activation-of-your-testsigma-agent)<br>
[Run Testsigma Agent Via Docker](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#run-testsigma-agent-via-docker)<br>

<br>

---

The Testsigma Agents are available via 3 forms, namely:
1. Zip Files
2. Executable Files
3. Docker Image



##**I. Download And Install The Testsigma Agent**

Testsigma Agents are available to download and install either as zip files or as executables. You can choose the approach that suits you the best. 

##**Download Testsigma Agent As Zip File**

To download the Testsigma agent as a zip file, follow below steps:

1. Go to the Agents page (Navigation Bar > Agents)
2. Click on the ‘Download Agent’ button on the top right corner to download the latest version of Testsigma Agent.
![agents page and the button to download agent](https://docs.testsigma.com/images/setup-on-windows-mac-linux/agents-page-download-agent-button.png)
3. After you have downloaded the agent zip file, extract the Testsigma agent zip file to location of your choice. Some suggested locations to place the Testsigma agent folder are mentioned in the table below:


  | Operating System     | Preferred Agent location | 
  | :---        | :---   |        
  | Windows     | C:\Users\<your_username>\      | 
  | Mac   | /Users/<your_username>/    | 
  | Linux   | /Users/<your_username>/     | 

  Replace the <your_username> part with your Account username.

  The home directory is recommended so as to avoid hassles of setting file permissions and ownership and also to avoid file corruption due to syncing with iCloud or Google Drive.

To start the agent, refer the section here: [Start the Testsigma Agent Server](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#ii-start-the-testsigma-agent-server)




##**Install Via Executables**

To download the Testsigma agent as an executable file, follow below steps:

1. Go to the Agents page (Navigation Bar > Agents)
2. Hover on the ‘Download Agent’ button on the top right corner.  
3. From the dropdown that appears, you need to click on the executable supported by your machine. For windows - click on 'exe', for mac - click on 'dmg', for linux - click on 'bin' to download the latest version of Testsigma Agent. The drop-down on the agents page looks like below:

![Dropdown to download executables for agent installation](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agents-page-executables-dropdown.png)
4. Double click on the downloaded file.
5. The installer will prompt you choose the path for installation. Choose the path where you would like to install the agent.
6. Let the installer run till completion.

To start the agent, refer the section here: [Start the Testsigma Agent Server](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#ii-start-the-testsigma-agent-server)


##**II. Start The Testsigma Agent Server**

##**For Windows**
  Navigate to the Testsigma Agent installation folder and double-click the ‘start.bat’ or run “start.bat” in the command line file to start the Testsigma Agent.

  Wait for a few minutes for the Testsigma Agent to start up. Check the Testsigma Agent icon in the System Tray.

  ![Testsigma Agent windows System Tray icon](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-windows-tray-icon.png)

  If the icon doesn’t appear in 10 minutes, please contact Testsigma Support.

[[info | NOTE:]]
|If you want to start the Testsigma agent as a background process, such that it keeps running even if the user signs out, then, you can go to: "TestsigmaAgentInstallationFolder\Wrapper\bin" and run the command "TestsigmaAgent start"<br>
|To stop the process started above, you can run the command "TestsigmaAgent stop" from the same location 

##**For Mac/Linux**

  Navigate to the Testsigma Agent installation folder and double-click the ‘start.sh’  or run “start.bat” in the command line to start the Testsigma Agent startup in a new Terminal window.

  Wait for a few minutes for the Testsigma Agent to start up. Check the Testsigma Agent icon in the System Tray.

  ![Testsigma Agent Mac System Tray icon](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-mac-tray-icon.png)

  If the icon doesn’t appear in 10 minutes, please contact Testsigma Support.

[[info | NOTE:]]
|If you want to start the Testsigma agent as a background process, such that it keeps running even if the user signs out, then, you can go to: "TestsigmaAgentInstallationFolder\Wrapper\bin" and run the command "TestsigmaAgent start"<br>
|To stop the process started above, you can run the command "TestsigmaAgent stop" from the same location 


<br>

Next, you will have to register the agent. To Register the agent, refer to the section here: [Register the Testsigma agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#iii-register-the-testsigma-agent)

---
##**III. Register The Testsigma Agent**

##**Checking Agent Running Status**
Once the Agent has started you will get a System Tray icon. The status will show as **STARTED** once it's ready. If it is showing the status as **STARTING**, please wait for a few moments for it to start. 

You can use the menu options to **Quit** and **Restart the Agent**.

##**Connecting The Agent To Testsigma App**

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

##**Delay The Activation Of Your Testsigma Agent**

There might be times when you want to add the Testsigma agents to your Testsigma account but want to activate them later. Below is how you can do that:
1. Go to the Agents Page from the Left Navigation Menu.
2. Click on the "Add a new Agent" Button on the top right corner of the Agents page.
3. On the "Add a new Agent" form, add the name/title for the agent. Make sure to check the "Activate Later" checkbox, as also highlighted in the screenshot below:

![Add new agent form with activate later checkbox checked](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/add-a-new-agent-form-activate-later-checked.png)

4. Now you can click on the 'Save' button to save the agent. 
5. On successfully saving the agent, you will be taken to the agent config page that contains the command that you can use to activate the agent later, as also shown in the screenshot below:

 ![Configs page on a newly added agent with command too activate the agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agent-config-command-to-activate.png)

 ---

##**Run Testsigma Agent Via Docker**

There are two ways of starting testsigma local agent using docker:
1. Create an agent in app.testsigma.com and get the activation key and use that while booting the docker container to register the agent.
2. Create and register a new agent entirely while booting the docker container.


We will discuss both the ways below:

**1. Create an agent in app.testsigma.com first**

  Follow below steps:
  1. Go to the Agents Page from the Left Navigation Menu.
  2. Click on the "Add a new Agent" Button on the top right corner of the Agents page.
  3. On the "Add a new Agent" form, add the name/title for the agent. Make sure to check the "Activate Later" checkbox, as also highlighted in the screenshot below:

  ![Add new agent form with activate later checkbox checked](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/add-a-new-agent-form-activate-later-checked.png)

  4. Now you can click on the 'Save' button to save the agent. 
  5. On successfully saving the agent, you will be taken to the agent config page that will contain the activation key, as also shown in the screenshot below:

  ![activation key for an added agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/get-activation-key.png)

  6. Get the activation key, and use in the command below:

    docker run --name testsigma-agent \
    -e TS_ACTIVATION_KEY="<ACTIVATION_KEY>" \
    testsigmainc/testsigma-agent:latest

  In the above command we need to replace <ACTIVATION_KEY> with the actual activation key obtained in step 5.

  Once you already have the docker image for testsigma agent and have used the above command already, then next time when you need to start the testsigma agent, use the command below:

    docker start -a testsigma-agent

  One example of a docker run command is:<br>
  
    docker run --name testsigma-agent \
    -e TS_ACTIVATION_KEY="***********" \
    testsigmainc/testsigma-agent:latest



**2. Create and register a new agent entirely while booting the docker container**

  Follow below steps:

  1. If you are running the testsigma agent for the first time, then you need to use the command below:

    docker run --name testsigma-agent \
    -e TS_AUTO_REGISTRATION_KEY="<API_KEY>" \
    -e TS_AUTO_REGISTRATION_TITLE="\<TITLE>" \
    -e TS_AUTO_REGISTRATION_HTTP_PORT="<HTTP_PORT>" \
    -e TS_AUTO_REGISTRATION_HTTPS_PORT="<HTTPS_PORT>" \
    -p <HTTP_PORT>:<HTTP_PORT> \
    -p <HTTPS_PORT>:<HTTPS_PORT> \
    testsigmainc/testsigma-agent:latest


  In the above command<br>
    - <API_KEY> needs to be replaced by the actual key. To know how to generate an API key, refer here: https://testsigma.com/docs/configuration/api-keys/ <br>
    - \<TITLE> needs to be replaced with the name you would like to give the agent<br> 
    - <HTTP_PORT> and <HTTPS_PORT> need to be replaced with the ports that you would like the agent to use while booting it up. <br>


  Once you already have the docker image for testsigma agent and have used the above command already, then next time when you need to start the testsigma agent, use the command below:

    docker start -a testsigma-agent

  One example of a docker run command is:<br>

    docker run --name testsigma-agent \
    -e TS_ACTIVATION_KEY="***********" \
    testsigmainc/testsigma-agent:latest



---
