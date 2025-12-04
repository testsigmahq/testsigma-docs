---
title: "Installing Testsigma Terminal"
pagetitle: "Installing Testsigma Terminal for Live Editing"
metadesc: "Learn how to install Testsigma Terminal, which is a Live Editor for Test Cases | Testsigma Terminal gives you complete control over test case execution and debugging to modify test steps immediately"
noindex: false
order: 10.12
page_id: "Installing Testsigma Terminal for Debugging"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Download Formats Available"
  url: "#download-formats-available"
- type: link
  name: "Steps to Install Testsigma Terminal"
  url: "#steps-to-install-testsigma-terminal"
- type: link
  name: "Steps to Uninstall Testsigma Terminal"
  url: "#steps-to-uninstall-testsigma-terminal"
- type: link
  name: "File/Folder Locations of Testsigma Terminal"
  url: "#filefolder-locations-of-testsigma-terminal"
---

---

Live Editor is the primary tool for test authoring and validating through local execution for Salesforce, Desktop and will be the same for other applications soon. To use this feature, you must install the Testsigma Terminal application. This article discusses downloading, installing, and setting it up on your machine.

---

> <p id="prerequisites">Prerequisites</p>
>
> Ensure you have the following requirements:
> 
> ### **1. System Requirements**
>    - **Memory**: Minimum 8 GB (dedicated for tests).
>    - **Disk Space**: At least 20 GB (includes reserved space for test resources such as screenshots and downloaded files).
>    - **Processor**: Dual-Core Processor or higher.
>   
> ### **2. Ports Required**
>    - Ensure these ports are available: 8383, 8484, 18329.
> 
> ### **3. Installation Size**
>    - **Download Size**: 850 MB
>    - **Extracted Size**: 1.5 GB
>    - **Download Location**: The ZIP file is automatically deleted after successful extraction. 
>        - **Windows**: %user_profile%\ .testsigma\TestsigmaTerminal\
>        - **Linux**: $HOME/.testsigma/TestsigmaTerminal/
>        - **Mac**: /$HOME/.testsigma/TestsigmaTerminal/

---

## **Download Formats Available**

**Testsigma Terminal** is available in the following formats:
   
   |Platform|Executable|Compressed|
   |---|---|---|
   |Mac (Intel)|.dmg|.zip|
   |Mac (M Series)|.dmg|.zip|
   |Windows|.exe|.zip|
   |Linux|.bin|.zip|
   |Docker|.docs|—|

---

## **Steps to Install Testsigma Terminal**

1. From the left navigation bar, go to **Agents**, and click **Testsigma Terminal** in the top-right corner.
   ![Testsigma Terminal](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/terminal/Terminal_1.1.png)

2. In the dialog box that appears, select the machine configuration. Testsigma automatically downloads the **Testsigma Terminal** application.
   ![Machine configuration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/terminal/Terminal_2.1.png)

3. Install and open the **Testsigma Terminal** application.
   
4. Click **Login to Testsigma**. You will be redirected to Testsigma. 
   ![login to testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/terminal/Terminal_3.png)

[[info | **NOTE**:]]
| Once you login, the session stays valid for 24 hours. After that, you'll need to login and authorize yourself again to continue using the **Live Editor**.

5. Click **Open the desktop app**. The **Testsigma Terminal** opens. 
   ![Open the desktop App](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/live_editor/install_terminal_1.png)

6. Wait until **Testsigma Terminal** downloads the necessary files and completes the installation.

[[info | **NOTE**:]]
| If you encounter any issues with the **Testsigma Terminal**, click **Report Issue** from the left panel. Provide a description of the problem, upload the agent log, and make sure to include the **App Session ID** and **Debugging ID**. To obtain the Debugging ID, ensure the agent was started through Testsigma.

---

## **Steps to Uninstall Testsigma Terminal**

1. Click **Quit Live Editor** to exit the **Live Editor**.
   ![Quit Live Editor](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/live_editor/install_terminal_2.png)
   
2. Uninstall/Remove **Testsigma Terminal** application.
   
   ![Remove App](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Remove_Testsigma_Lite.png)

3. Go to **Disk > Users > `user_folder` > Library > Application Support > Testsigma** and remove **Testsigma** folder.
   
   ![Delete Folder](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Remove_Testsigma_Folder.png)

4. To stop the agent running in the background, follow these steps to find and terminate the process:


   ### **For macOS/Linux**
      - Open the **Terminal**.
      - Run the following command to get the Process ID (PID): <br>
        `lsof -i :8383`
      - Copy the PID and use the following command to terminate the process:<br>
        `kill -SIGKILL <PID>`


   ### **For Windows**
      - Open PowerShell.
      - Run the following command to get the Process ID (PID):<br>
        `Get-Process -Id (Get-NetTCPConnection -LocalPort 8383).OwningProcess`
      - Copy the PID and use the following command to terminate the process:<br>
        `Stop-Process -Id <PID> -Force`


---

## **File/Folder Locations of Testsigma Terminal**


### **Agent Properties**
   - **Windows**: %user_profile%\AppData\Roaming\Testsigma\Agent\config\agent.properties
   - **Linux**: $HOME/.testsigma/agent/config/agent.properties
   - **Mac**: /$HOME/Library/Application Support/Testsigma/Agent/config/agent.properties


### **Remove Testsigma Agent Traces**

   - **Windows**: %user_profile%\AppData\Roaming\Testsigma\Agent\
   - **Linux**: $HOME/.testsigma/agent/
   - **Mac**: /$HOME/Library/Application Support/Testsigma/Agent/

### **Remove Testsigma Terminal Traces**

**Testsigma Terminal state.**
   - **Windows**: %user_profile%\AppData\Roaming\com.testsigma.testsigmaterminal\
   - **Linux**: $HOME/.testsigma/com.testsigma.testsigmaterminal/
   - **Mac**: /$HOME/Library/Application Support/com.testsigma.testsigmaterminal/

[[info | **NOTE**:]]
| To access **.testsigma** folder in the above path, you need to unhide hidden folders in your `user_folder`.

### **Shortcuts to View Hidden Files:**
   - **Mac:** Press **Command (⌘) + Shift + .** in **Finder**. <br>
   - **Windows:** Press **Windows + R**, type control folders, go to the **View** tab, and select **Show hidden files, folders, and drives**.

---
