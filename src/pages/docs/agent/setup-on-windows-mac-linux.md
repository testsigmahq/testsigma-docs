---
title: " Setting up Testsigma Agent on your local machine"
metadesc: "Learn how to install Testsigma Agent on your local machine and register it to your Testsigma Account for local inspection and test runs."
noindex: false
order: 11.3
page_id: " Setting up Testsigma Agent on your local machine"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Download Testsigma Agent as ZIP file"
  url: "#download-testsigma-agent-as-zip-file"
- type: link
  name: "Download Testsigma Agent as exe file"
  url: "#download-testsigma-agent-as-exe-file"
- type: link
  name: "Start The Testsigma Agent Server As A Process"
  url: "#start-the-testsigma-agent-server-as-a-process"
- type: link
  name: "Start The Testsigma Agent Server As A Service"
  url: "#start-the-testsigma-agent-server-as-a-service"
- type: link
  name: "Register the Testsigma Agent"
  url: "#register-the-testsigma-agent"
- type: link
  name: "Delay the activation of your Testsigma Agent"
  url: "#delay-the-activation-of-your-testsigma-agent"
- type: link
  name: "Run Testsigma Agent using Docker"
  url: "#run-testsigma-agent-using-docker"

---

---

The Testsigma Agents are available in  the following forms, namely:

1. **ZIP files**
2. **Executable files**
3. **DMG files**
4. **Docker image**
<br>

You can choose the format that suits you the best. <br>

---

## **Download Testsigma Agent as ZIP file**

To download the Testsigma agent as a ZIP file, follow below steps:

1. Navigate to **Agents** > **Download Agent** to download the latest version of **Testsigma Agent**.
![agents page and the button to download agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/download_agent.png)
2. After you have downloaded the agent ZIP file, extract the Testsigma agent ZIP file to a location of your choice. Some suggested locations to place the Testsigma agent folder are mentioned in the table below:<br>

  | Operating System     | Preferred Agent location |
  | :---:        | :---:   |
  | Windows     | <kbd>C:\Users\<your_username>\ </kbd>      |
  | Mac   |<kbd> /Users/<your_username>/ </kbd>   |
  | Linux   | <kbd>/Users/<your_username>/</kbd>   |

  Replace the<kbd> <your_username></kbd> part with your account username.

  The home directory is recommended so as to avoid hassles of setting file permissions and ownership and also to avoid file corruption due to syncing with iCloud or Google Drive.

You can either start the Testsigma agent server as a process via the command line or terminal when needed. Or, you can run the Testsigma agent server as a server. *For more information, refer to the below sections to see how to start the Testsigma Agent [as a process](#start-the-testsigma-agent-server-as-a-process) or [as a service](#start-the-testsigma-agent-server-as-a-service)*

## **Download Testsigma Agent as exe file**

To download the Testsigma agent as an executable file, follow below steps:

1. Navigate to **Agents > Download Agent**.
2. From the dropdown that appears, select the executable file supported by your machine.
    - For **Windows**, select on <kbd>**exe**</kbd>,
    - For **mac**, select <kbd>**dmg**</kbd>,
    - For **Linux**, select <kbd>**bin**</kbd> to **download** the latest version of **Testsigma Agent**.

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
3. Inside the Testsigma Agent installation folder, navigate to **Wrapper folder > Bin folder**.
4. If you want to install the agent as a service, use the command - `TestsigmaAgent install`
[[info | NOTE:]]
|At present, the option to install Testsigma Agent to start automatically when system boots is only supported for windows.
5. Inside the bin folder, you can start the Testsigma Agent as a service by using the command - `TestsigmaAgent start`

To stop the service started above, you can run the command - `TestsigmaAgent stop` from the same location

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

There are two ways of starting the testsigma local agent using docker:

- Create an agent in app.testsigma.com, obtain the activation key, and use it to register the agent while the Docker container is booting. OR
- Create and register a new agent entirely while booting the Docker container.

We will discuss both ways below.

### **Method 1: Creating an agent in app.testsigma.com**

  Follow the below steps:

  1. Go to the Agents Page from the left navigation menu.
  2. Click the **Add a new Agent** button on the top right corner of the Agents page.
  3. On the **Add a new Agent** form, add the name/title for the agent. Make sure to check the **Activate Later** checkbox, as also highlighted in the screenshot below:

  ![Add new agent form with activate later checkbox checked](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/activate_later.png)

  4. Now, you can click on the **Save** button to save the agent.
  5. On successfully saving the agent, you will be taken to the agent configuration page that will contain the activation key, as also shown in the screenshot below:

  ![activation key for an added agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/setup-on-windows-mac-linux/agent_details.png)

  6. Create a **docker-compose.yml** file with **TS\_ACTIVATION\_KEY** environment variables.

  The following docker-compose snippet can be used to start a Testsigma Agent with headless Chrome, Firefox & Edge browsers:
  <br>

    version: "3.9"
    services:
      testsigma-agent:
        image: testsigmainc/testsigma-agent:latest
        container_name: testsigma-agent
        depends_on:
          - chrome
          - firefox
          - edge
        volumes:
          - ./data/agent_data:/var/ts/agent
        environment:
          TS_ACTIVATION_KEY: "REPLACE_WITH_YOUR_ACTIVATION_KEY"
          CHROME: "http://chrome:4444"
          FIREFOX: "http://firefox:4444"
          EDGE: "http://edge:4444"
          
      chrome:
        image: selenium/standalone-chrome:latest
        shm_size: 1gb
        ports:
          - "4444:4444"

      firefox:
        image: selenium/standalone-firefox:latest
        shm_size: 1gb
        ports:
          - "4445:4444"
         
      edge:
        image: selenium/standalone-edge:latest
        shm_size: 1gb
        ports:
          - "4446:4444"

  This docker-compose snippet spins up four containers:<br>

  1. Testsigma Agent<br>
  2. Standalone Selenium with pre-installed Chrome<br>
  3. Standalone Selenium with pre-installed Firefox<br>
  4. Standalone Selenium with pre-installed Edge

  Testsigma Agent will detect browser versions through the Environment Variables CHROME, FIREFOX, and EDGE. Note that these Environment Variables are all optional.
<br><br><br>
  If you plan to run your test solely on the Chrome browser, there's no need to specify the FIREFOX and EDGE environment variables. Here's an example docker-compose file:
  <br>

    version: "3.9"
    services:
      testsigma-agent:
        image: testsigmainc/testsigma-agent:latest
        container_name: testsigma-agent
        depends_on:
          - chrome
        volumes:
          - ./data/agent_data:/var/ts/agent
        environment:
          TS_ACTIVATION_KEY: "REPLACE_WITH_YOUR_ACTIVATION_KEY"
          CHROME: "http://chrome:4444"

      chrome:
        image: selenium/standalone-chrome:latest
        shm_size: 1gb
        ports:
          - "4444:4444"

 <br><br>
   If your system lacks sufficient resources, you can distribute browser containers across multiple systems and specify a remote debugging URL. Here's an example docker-compose file: <br>

    version: "3.9"
    services:
      testsigma-agent:
        image: testsigmainc/testsigma-agent:latest
        container_name: testsigma-agent
        volumes:
          - ./data/agent_data:/var/ts/agent
        environment:
          TS_ACTIVATION_KEY: "REPLACE_WITH_YOUR_ACTIVATION_KEY"
          CHROME: "<REMOTE_CHROME_URL>"
          FIREFOX: "<REMOTE_FIREFOX_URL>"
          EDGE: "<REMOTE_EDGE_URL>"          
  <br><br>
  Testsigma Agent container allows controlling minimum and maximum heap memory settings using MIN and MAX environment  variables. The default values for MIN and MAX will be 1GB and 8GB, respectively. Here's an example docker-compose file:

    version: "3.9"
    services:
      testsigma-agent:
        image: testsigmainc/testsigma-agent:latest
        container_name: testsigma-agent
        volumes:
          - ./data/agent_data:/var/ts/agent
        environment:
          TS_ACTIVATION_KEY: "REPLACE_WITH_YOUR_ACTIVATION_KEY"
          MIN: "-Xms1g"
          MAX: "-Xmx8g"
          CHROME: "<CHROME_URL>"
          FIREFOX: "<FIREFOX_URL>"
          EDGE: "<EDGE_URL>"

<br><br>
 For **ARM-based Systems (Mac M1 processors)**:<br>
  Google does not build Chrome for Linux ARM platforms. Instead, docker-seleniarm uses the open-source Chromium browser built for ARM. Here's an example docker-compose file:  

    version: "3.9"
    services:
      testsigma-agent:
        image: testsigmainc/testsigma-agent:latest
        container_name: testsigma-agent
        depends_on:
          - chrome
          - firefox
        volumes:
          - ./data/agent_data:/var/ts/agent
        environment:
          TS_ACTIVATION_KEY: "REPLACE_WITH_YOUR_ACTIVATION_KEY"
          CHROME: "http://chrome:4444"
          FIREFOX: "http://firefox:4444"
          EDGE: "<REMOTE_EDGE_URL>"
      chrome:
        image: seleniarm/standalone-chrome:latest
        shm_size: 1gb
        ports:
          - "4444:4444"
      firefox:
        image: seleniarm/standalone-firefox:latest
        shm_size: 1gb
        ports:
          - "4445:4444"

<br>

7. Save the **docker-compose.yml** file in an appropriate directory.

8. Open a command-line interface and navigate to the directory. Execute the command **docker-compose up**, which will download the necessary images and start the Testsigma Agent.

<br>

### **Method 2: Register a new agent while booting the Docker container.**

To create and register the Agent Automatically in one step, you must specify the environment variables below instead of TS\_ACTIVATION\_KEY.

 TS\_AUTO\_REGISTRATION\_KEY - Testsigma API key<br>
 TS\_AUTO\_REGISTRATION\_TITLE - Title of the Agent<br>
 TS\_AUTO\_REGISTRATION\_HTTP\_PORT - HTTP Port for internal communication between Agent and Testsigma
 TS\_AUTO\_REGISTRATION\_HTTPS\_PORT - HTTPS Port for internal communication between Agent and Testsigma

Here's an example docker-compose file:

    version: "3.9"
    services:
      testsigma-agent:
        image: testsigmainc/testsigma-agent:latest
        container_name: testsigma-agent
        depends_on:
          - chrome
          - firefox
          - edge
        volumes:
          - ./data/agent_data:/var/ts/agent
        environment:
          TS_AUTO_REGISTRATION_KEY: "REPLACE_WITH_API_KEY"
          TS_AUTO_REGISTRATION_TITLE: "REPLACE_WITH_TITLE"
          TS_AUTO_REGISTRATION_HTTP_PORT: "REPLACE_WITH_ANY_AVAILABLE_PORT_NUMBER"
          TS_AUTO_REGISTRATION_HTTPS_PORT: "REPLACE_WITH_ANY_AVAILABLE_PORT_NUMBER"
          CHROME: "http://chrome:4444"
          FIREFOX: "http://firefox:4444"
          EDGE: "http://edge:4444"

      chrome:
        image: selenium/standalone-chrome:latest
        shm_size: 1gb
        ports:
          - "4444:4444"

      firefox:
        image: selenium/standalone-firefox:latest
        shm_size: 1gb
        ports:
          - "4445:4444"

      edge:
        image: selenium/standalone-edge:latest
        shm_size: 1gb
        ports:
          - "4446:4444"    

<br><br>
Please refer to the Activation Key sections for alternative methods of configuring the docker-compose file and starting the Agent using the docker-compose file.

---
