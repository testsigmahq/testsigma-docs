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
  url: "#download-testsigma-agent"
- type: link
  name: "Install Via Executables"
  url: "#install-via-executables"
- type: link
  name: "Extract the Testsigma Agent Zip file"
  url: "#extract-the-testsigma-agent-zip-file"
- type: link
  name: "Start The Testsigma Agent Server As A Process"
  url: "#start-the-testsigma-agent-server-as-a-process"
- type: link
  name: "For Windows"
  url: "#for-windows"
- type: link
  name: "For Mac/Linux"
  url: "#for-maclinux"
- type: link
  name: "Start The Testsigma Agent Server As A Service"
  url: "#start-the-testsigma-agent-server-as-a-service"
- type: link
  name: "Register the Testsigma Agent"
  url: "#register-the-testsigma-agent"
- type: link
  name: "Run Testsigma Agent Via Docker"
  url: "#run-testsigma-agent-via-docker"

---

<br><br>
The Testsigma Agents are available in  the following forms, namely:

1. ZIP files
2. Executable files
3. DMG files
3. Docker image
<br><br>

You can choose the format that suits you the best. <br><br>

## **Download Testsigma Agent as ZIP file**

To download the Testsigma agent as a ZIP file, follow below steps:

1. Navigate to **Agents> Download Agent** to download the latest version of Testsigma Agent.
![agents page and the button to download agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/download_agent.png)
2. After you have downloaded the agent ZIP file, extract the Testsigma agent ZIP file to a location of your choice. Some suggested locations to place the Testsigma agent folder are mentioned in the table below:<br>

  | Operating System     | Preferred Agent location |
  | :---        | :---   |
  | Windows     | <kbd>C:\Users\<your_username>\ </kbd>      |
  | Mac   |<kbd> /Users/<your_username>/ </kbd>   |
  | Linux   | <kbd>/Users/<your_username>/</kbd>   |

  Replace the<kbd> <your_username></kbd> part with your account username.

  The home directory is recommended so as to avoid hassles of setting file permissions and ownership and also to avoid file corruption due to syncing with iCloud or Google Drive.

You can either start the Testsigma agent server as a process via the command line or terminal when needed. Or, you can run the Testsigma agent server as a server. *For more information, refer to the below sections to see how to start the Testsigma Agent [as a process](#start-the-testsigma-agent-server-as-a-process) or [as a service](#start-the-testsigma-agent-server-as-a-service)*

## **Download Testsigma Agent as .exe file**

To download the Testsigma agent as an executable file, follow below steps:

1. Navigate to **Agents > Download Agent**.
2. From the dropdown that appears, select the executable file supported by your machine.
    - For Windows, select on <kbd>exe</kbd>,
    - For mac, select <kbd>dmg</kbd>,
    - For Linux select <kbd>bin</kbd> to download the latest version of Testsigma Agent.

 The dropdown on the agents page looks like below:

![Dropdown to download executables for agent installation](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/download_agent_executable_file.png)
4. Double click on the downloaded file.
5. The installer will prompt you choose the path for installation. Choose the path where you would like to install the agent.
6. Let the installer run till completion.

After the installation is complete, you can either run the Testsigma agent server as a process via the command line/terminal when needed. Or, you can run the Testsigma agent server as a Server. *For more information, refer the following sections:*

1. [Start the Testsigma Agent server as a process](#start-the-testsigma-agent-server-as-a-process)
2. [Start the Testsigma Agent server as a service](#start-the-testsigma-agent-server-as-a-service)

<br>

## **Start the Testsigma Agent server as a process**

### **For Windows**

  Navigate to the Testsigma Agent installation folder and double click the <kbd>start.bat</kbd> or run <kbd>start.bat</kbd> in the command line file to start the Testsigma Agent.
   ![testsigma agent start](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/starting_agent.png)
  Wait for a few minutes for the Testsigma Agent to start up.

  ![Testsigma Agent started](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agent_started.png)

  If the icon doesn’t appear in 10 minutes, reach out to us at [support@testsigma.com](mailto:support@testsigma.com).

  After registering you will be directed to the agent registration page![agent registration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agent_register_page.png)<br>
  For more information on registering the agent refer to the section,  *[Register the Testsigma agent](#register-the-testsigma-agent)*


### **For Mac/Linux**

  Navigate to the Testsigma Agent installation folder and double-click the **start.sh**  or run **start.bat** in the command line to start the Testsigma Agent startup in a new terminal window.

  Wait for a few minutes for the Testsigma Agent to start up. Check the Testsigma Agent icon in the System Tray.

  ![Testsigma Agent Mac System Tray icon](https://docs.testsigma.com/images/setup-on-windows-mac-linux/ts-agent-mac-tray-icon.png)

  If the icon doesn’t appear in 10 minutes, reach out to us at [support@testsigma.com](mailto:support@testsigma.com).

<br>

Next, you will have to register the agent. To register the agent, refer to the section  *[Register the Testsigma agent](#register-the-testsigma-agent)*

---

## **Start the Testsigma Agent server as a service**

1. For windows - go to the command line. For Mac/linux - go to the terminal.
2. Navigate to the Testsigma Agent installation folder.
3. Inside the Testsigma Agent installation folder, navigate to **wrapper folder> bin folder**.
4. If you want to install the agent as a service, use the command <kbd>TestsigmaAgent install</kbd>
[[info | NOTE:]]
|At present, the option to install Testsigma Agent to start automatically when system boots is only supported for windows.
5. Inside the bin folder, you can start the Testsigma Agent as a service by using the command - <kbd>TestsigmaAgent start</kbd>

To stop the service started above, you can run the command <kbd>TestsigmaAgent stop</kbd> from the same location

Commands that work with TestsigmaAgent:

```

console      Launch in the current console.
start        Start in the background as a daemon process.
stop         Stop if running as a daemon or in another console.
restart      Stop if running and then start.
condrestart  Restart only if already running.
status       Query the current status.
install      Install to start automatically when system boots.
installstart Install and start running as a daemon process.
remove       Uninstall.
dump         Request a Java thread dump if running.
```

Next, you will have to register the agent. To register the agent, refer to the section *[Register the Testsigma agent](#register-the-testsigma-agent)*

---

## **Register the Testsigma Agent**

### **Checking Agent running status**

Once the Agent has started you will get a System Tray icon. The status will show as **STARTED** once it's ready. If it is showing the status as **STARTING**, please wait for a few moments for it to start.

You can use the menu options to **Quit** and **Restart the Agent**.

### **Connecting the Agent to Testsigma App**


1. Once your Testsigma agent is up and running and shows the **STARTED** status, you will be directed to the agent registration page.
2. Click on **Register** to start the Agent registration process.

3. On the **Add new Agent** overlay provide the following and click on the **Save** button.:
    - **Title**: Enter a name for your machine.
    
    - **Visible to Everyone**: By default, Agent will be visible to everyone. If you want to make this agent private, uncheck the checkbox **Visible to Everyone**.

![Add new agent form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/regsitering_new_agent.png)


4. After saving, the agent that you registered will be displayed with all the available browsers in that Agent machine:

![Testsigma Agents list new Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agent_registered.png)

It might take a couple of minutes for the operating system version and the browser names to appear. Refer to the [Testsigma Agent troubleshooting guide](https://testsigma.com/docs/agent/troubleshooting/setup-issues/) if the details does not show up after 10 minutes.

---

## **Delay the activation of your Testsigma Agent**

There may be instances when you want to add the Testsigma agents to your Testsigma account but want to activate them later. Below is how you can do that:

1. On the **All Agents** page, click on the **Add a new Agent** button on the top right corner of the Agents page.
2. On the **Add a new Agent** form, add the name/title for the agent. Make sure to check the **Activate Later** checkbox, as also highlighted in the screenshot below:

![Add new agent form with activate later checkbox checked](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/activate_later.png)

4. Now click on the **Save**  button to save the agent.

5. On successfully saving the agent, you will be taken to the agent configuration page that contains the command that you can use to activate the agent later, as also shown in the screenshot below:

 ![Configs page on a newly added agent with command too activate the agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agent_details.png)

 ---

## **Run Testsigma Agent using docker**

There are two ways of starting testsigma local agent using docker:

- Create an agent in app.testsigma.com and get the activation key and use that while booting the docker container to register the agent. OR
- Create and register a new agent entirely while booting the docker container.

We will discuss both the ways below:

**1. Create an agent in app.testsigma.com**

  Follow below steps:

  1. Go to the Agents Page from the left navigation menu.
  2. Click on the **Add a new Agent** button on the top right corner of the Agents page.
  3. On the **Add a new Agent** form, add the name/title for the agent. Make sure to check the **Activate Later** checkbox, as also highlighted in the screenshot below:

  ![Add new agent form with activate later checkbox checked](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/activate_later.png)

  4. Now you can click on the **Save** button to save the agent.
  5. On successfully saving the agent, you will be taken to the agent configuration page that will contain the activation key, as also shown in the screenshot below:

  ![activation key for an added agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agent_details.png)

  6. Get the activation key, and use in the command below:

    docker run --name testsigma-agent \
    -e TS_ACTIVATION_KEY="<ACTIVATION_KEY>" \
    testsigmainc/testsigma-agent:latest

  In the above command we need to replace <kbd>\<ACTIVATION_KEY></kbd> with the actual activation key obtained in step 5.

  Once you already have the docker image for testsigma agent and have used the above command already, then next time when you need to start the testsigma agent, use the command below:

    docker start -a testsigma-agent

  One example of a docker run command is:<br>
  
    docker run --name testsigma-agent \
    -e TS_ACTIVATION_KEY="***********" \
    testsigmainc/testsigma-agent:latest
<br>

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

  In the above command
  -  <kbd>\<API_KEY></kbd> needs to be replaced by the actual key. To know how to generate an API key, refer to <https://testsigma.com/docs/configuration/api-keys/>
  - <kbd>\<TITLE> </kbd> needs to be replaced with the name you would like to give the agent
  - <kbd>\<HTTP\_PORT></kbd> and <kbd>\<HTTPS_PORT></kbd> need to be replaced with the ports that you would like the agent to use while booting it up. <br>

  Once you already have the docker image for testsigma agent and have used the above command already, then next time when you need to start the testsigma agent, use the command below:

    docker start -a testsigma-agent

  One example of a docker run command is:<br>

    docker run --name testsigma-agent \
    -e TS_ACTIVATION_KEY="***********" \
    testsigmainc/testsigma-agent:latest

---
