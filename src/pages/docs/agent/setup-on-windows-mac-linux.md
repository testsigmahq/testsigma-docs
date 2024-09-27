---
title: "Setting Up Testsigma Agent Locally"
metadesc: "Learn how to install Testsigma Agent on your local machine and register it to your Testsigma Account for local inspection and test runs."
noindex: false
order: 11.3
page_id: " Setting up Testsigma Agent on your local machine"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Download Formats Available"
  url: "#download-formats-available"
- type: link
  name: "Steps to Download Testsigma Agent as a ZIP File"
  url: "#steps-to-download-testsigma-agent-as-a-zip-file"
- type: link
  name: "Steps to Download Testsigma Agent as Executable File"
  url: "#steps-to-download-testsigma-agent-as-executable-file"
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
  name: "Run Testsigma Agent using Docker"
  url: "#run-testsigma-agent-using-docker"

---

---

With **Testsigma Agent** you can run tests on local machines/devices in addition to Testsigma Cloud. This article discusses how to set up the Testsigma agent on your local machine.

---

> ## **Download Formats Available**
> The Testsigma Agents are available in the following forms:
> 1. **ZIP files**
> 2. **Executable files**
> 3. **DMG files**
> 4. **Docker image**

---

## **Steps to Download Testsigma Agent as a ZIP File**
1. Navigate to **Agents** and click **Download Agent**.
![Agents Page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Navigate_To_Agents.png)

2. From the dropdown that appears, download the ZIP file as per your machine.
![ZIP Files](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Download_Agent.png)

3. After downloading the agent ZIP file, extract the Testsigma Agent ZIP file to a location of your choice. Some suggested locations to place the Testsigma agent folder are mentioned in the table below: <br>

      | Operating System     | Preferred Agent location |
      | :---:        | :---:   |
      | Windows     | <kbd>C:\Users\<your_username>\ </kbd>      |
      | Mac   |<kbd> /Users/<your_username>/ </kbd>   |
      | Linux   | <kbd>/Users/<your_username>/</kbd>   |

      Replace the<kbd> <your_username></kbd> part with your account username.

      The home directory is recommended so as to avoid hassles of setting file permissions and ownership and also to avoid file corruption due to syncing with iCloud or Google Drive.

You can either start the Testsigma agent server as a process via the command line or terminal when needed. Or, you can run the Testsigma agent server as a server. For more information, refer to the below sections to see how to start the Testsigma Agent as a process or as a service.

---

## **Steps to Download Testsigma Agent as Executable File**

1. Navigate to **Agents** and click **Download Agent**.

2. From the dropdown that appears, select the executable file supported by your machine.
    - For **Windows**, select <kbd>**exe**</kbd>,
    - For **mac**, select <kbd>**dmg**</kbd>,
    - For **Linux**, select <kbd>**bin**</kbd> to **download** the latest version of **Testsigma Agent**.

3. Double click on the downloaded file.

4. Choose the path where you would like to install the agent.

5. Let the installer run till completion.

Once the installation is complete, you can either run the Testsigma Agent server as a process via the command line/terminal when needed. 

---

## **Start the Testsigma Agent Server as a Process**

### **For Windows**

1. Navigate to the Testsigma Agent installation folder and double click the ***start.bat*** or run ***start.bat*** in the command line file to start the Testsigma Agent.

2. Wait for a few minutes for the Testsigma Agent to start up.
![Agent Start Windows](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/windowslastart.png)

3. After starting up you will be directed to the agent registration page. 
![Redirect to Registration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/regpagewidows.png)


### **For Mac/Linux**

1. Navigate to the Testsigma Agent installation folder and drag ***start.sh*** to a new terminal window and click on **Return**.
![New Terminal](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Start_Agent_shFile.png)

1. Wait for a few minutes for the Testsigma Agent to start up.
![Start Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agntstartla.png)

1. After starting up you will be directed to the agent registration page. 
![Reg page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Agent_Reg_Page.png)

For more information on how to register Testsigma Agent, see [Register the Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#register-the-testsigma-agent).

---

## **Start the Testsigma Agent Server as a Service**

1. **For Windows:** Go to the command line. **For Mac/Linux:** Go to the terminal.

2. Navigate to the Testsigma Agent installation folder.

3. Inside the Testsigma Agent installation folder, navigate to **Wrapper > Bin**.

4. For **Mac/Linux**, if you want to install the agent as a service, use the command TestsigmaAgent start. 

5. For **Windows**, if you want to install the agent as a service, use the command TestsigmaAgent install.

[[info | **NOTE**:]]
| At present, the option to install Testsigma Agent to start automatically when system boots is only supported for windows.

6. To stop the service, run the command - TestsigmaAgent stop from the same location.


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

---

## **Register the Testsigma Agent**
1. Once your Testsigma agent is up and running, you will be directed to the **Agent Registration** page. Click **Register** to start the registration process.
![Register Button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Register_Agent_button.png)

2. On the **Add new Agent** dialog, 
    - Enter a **Name** for your machine.
    - Specify the maximum sessions in the textbox provided.
    - To set your agent’s visibility, select either the **Public** or **Private** radio button. 
    - For agent activation, choose either **Activate now** or **Activate later**.
    - Click on **Register & Activate**
      ![Register & Activate](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Agent_Details.png)

2. Once the agent registration is successful, the dialog will display a success message..
![Successful Message](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Agent_Success.png)

3. On the Agents page, the agent you registered will be displayed along with all the available browsers on that agent machine.
![Available Browsers](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Available_Browsers.png)

[[info | **NOTE**:]]
| 1. There may be instances when you want to add the Testsigma agents to your Testsigma account but want to activate them later. Make sure to select the **Activate Later** radio button on the **Add new Agent** dialog.
|![Activate Later](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Activate_Later.png)
|
| 2. On successfully adding the agent, you will be taken to the agent configuration page that contains the command that you can use to activate the agent later. 
|![Config page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Agent_Config.png)

It might take a couple of minutes for the operating system version and the browser names to appear. Refer to the [troubleshooting guide](https://testsigma.com/docs/agent/troubleshooting/setup-issues/) if the details does not show up after 10 minutes.

---

## **Run Testsigma Agent Using Docker**
There are two ways of starting the testsigma local agent using docker:
- Create an Agent in Testsigma application, obtain the **Activation Key**, and use it to register the agent while the **Docker** container is booting.
- Create and register a **New Agent** entirely while booting the **Docker** container.

---

[[info | **NOTE**:]]
| Refer to the section above to add an agent using the **Activate Later** option.

1. Once the Agent is registered, navigate to **Agents > select the agent > Config**, and copy the **Activation Key**.
![Activation Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Agent_Key.png)

2. Create a **docker-compose.yml** file with **TS\_ACTIVATION\_KEY** environment variables.

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
          - ./data/agent_temp:/tmp/agent_temp
          - ./<foldername>:/root/.testsigma/agent/logs
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
        volumes:
          - ./data/agent_temp:/tmp/agent_temp

      firefox:
        image: selenium/standalone-firefox:latest
        shm_size: 1gb
        ports:
          - "4445:4444"
        volumes:
          - ./data/agent_temp:/tmp/agent_temp
         
      edge:
        image: selenium/standalone-edge:latest
        shm_size: 1gb
        ports:
          - "4446:4444"
        volumes:
          - ./data/agent_temp:/tmp/agent_temp

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
          - ./data/agent_temp:/tmp/agent_temp
          - ./<foldername>:/root/.testsigma/agent/logs
        environment:
          TS_ACTIVATION_KEY: "REPLACE_WITH_YOUR_ACTIVATION_KEY"
          CHROME: "http://chrome:4444"

      chrome:
        image: selenium/standalone-chrome:latest
        shm_size: 1gb
        ports:
          - "4444:4444"
        volumes:
          - ./data/agent_temp:/tmp/agent_temp

 <br><br>
   If your system lacks sufficient resources, you can distribute browser containers across multiple systems and specify a remote debugging URL. Here's an example docker-compose file: <br>

    version: "3.9"
    services:
      testsigma-agent:
        image: testsigmainc/testsigma-agent:latest
        container_name: testsigma-agent
        volumes:
          - ./data/agent_data:/var/ts/agent
          - ./data/agent_temp:/tmp/agent_temp
          - ./<foldername>:/root/.testsigma/agent/logs
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
          - ./data/agent_temp:/tmp/agent_temp
          - ./<foldername>:/root/.testsigma/agent/logs
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
          - ./data/agent_temp:/tmp/agent_temp
          - ./<foldername>:/root/.testsigma/agent/logs
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
        volumes:
          - ./data/agent_temp:/tmp/agent_temp

      firefox:
        image: seleniarm/standalone-firefox:latest
        shm_size: 1gb
        ports:
          - "4445:4444"
        volumes:
          - ./data/agent_temp:/tmp/agent_temp

<br>

1. Save the **docker-compose.yml** file in an appropriate directory.

2. Open a command-line interface and navigate to the directory. Execute the command **docker-compose up**, which will download the necessary images and start the Testsigma Agent.

---

## **Register a New Agent While Booting the Docker Container.**

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
          - ./data/agent_temp:/tmp/agent_temp
          - ./<foldername>:/root/.testsigma/agent/logs
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
        volumes:
          - ./data/agent_temp:/tmp/agent_temp

      firefox:
        image: selenium/standalone-firefox:latest
        shm_size: 1gb
        ports:
          - "4445:4444"
        volumes:
          - ./data/agent_temp:/tmp/agent_temp
      
      edge:
        image: selenium/standalone-edge:latest
        shm_size: 1gb
        ports:
          - "4446:4444"    
        volumes:
          - ./data/agent_temp:/tmp/agent_temp

<br>
Please refer to the Activation Key sections for alternative methods of configuring the docker-compose file and starting the Agent using the docker-compose file.

---
