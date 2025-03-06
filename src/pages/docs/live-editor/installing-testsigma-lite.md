---
title: "Installing Testsigma Lite"
pagetitle: "Installing Testsigma Lite for Live Editing"
metadesc: "Learn how to install Testsigma Lite, which is a live editor for Test Cases | Testsigma Lite gives you complete control over test case execution and debugging to modify test steps immediately"
noindex: false
order: 10.2
page_id: "Installing Testsigma Lite for Debugging"
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
  name: "Steps to Install Testsigma Lite"
  url: "#steps-to-install-testsigma-lite"
- type: link
  name: "Steps to Uninstall Testsigma Lite"
  url: "#steps-to-uninstall-testsigma-lite"
- type: link
  name: "File/Folder Locations of Testsigma Lite"
  url: "#filefolder-locations-of-testsigma-lite"
---

---

Testsigma allows you to fix test case issues instantly using Live Editor. To use this feature, you must install the Testsigma Lite application. This article discusses downloading, installing, and setting it up on your machine.

---

> ## **Prerequisites**
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
>        - **Windows**: %user_profile%\ .testsigma\TestsigmaLite\
>        - **Linux**: $HOME/.testsigma/TestsigmaLite/
>        - **Mac**: /$HOME/.testsigma/TestsigmaLite/

---

## **Download Formats Available**

**Testsigma Lite** is available in the following formats:
   - Executable files (.msi)
   - DMG files (.dmg)
   - Compressed files (.tar.gz)

---

## **Steps to Install Testsigma Lite**

1. From the left navigation bar, go to **Agents**, and click **Testsigma Lite** in the top-right corner.
   ![Agents](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Testsigma_Lite_Agents.png)

2. In the dialog box that appears, select the machine configuration. Testsigma automatically downloads **Testsigma Lite** application.
   ![Testsigma Lite App](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Download_Testsigma_Lite_Dropdown.png)

3. Install and open the **Testsigma Lite** application.
   ![Open Testsigma Lite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Testsigma_Lite.png)

---

Try this interactive demo to learn how to download Testsigma Lite!

<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div class="sl-embed" style="position:relative;padding-bottom:calc(57.41% + 25px);width:100%;height:0;transform:scale(1)">
    <iframe loading="lazy" class="sl-demo" src="https://app.storylane.io/demo/4pokktnswqli?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%!important;height:100%!important;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
  </div>
</div>

---

4. Wait until Testsigma Lite downloads the necessary files, extracts them, and starts the agent in the background.
   ![Preparing Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/PreparingAgent.png)

5. Once **Testsigma Lite** starts, users can either continue using the existing agent by clicking **Use Existing** or install a new agent by clicking **Install New Agent**.
   ![Register Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Lite_Installer_Options.png)

6. Follow the instructions [here](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#register-the-testsigma-agent) to register the **Agent**.

7. Once the Agent is activated, you can start debugging the test cases.

---

## **Steps to Uninstall Testsigma Lite**

1. Click **Quit Live Editor** to exit the **Live Editor**.
   ![Quit Live Editor](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Quit_Live_Editor.png)
   
2. Uninstall/Remove **Testsigma Lite** application.
   
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

## **File/Folder Locations of Testsigma Lite**


### **Agent Properties**
   - **Windows**: %user_profile%\AppData\Roaming\Testsigma\Agent\config\agent.properties
   - **Linux**: $HOME/.testsigma/agent/config/agent.properties
   - **Mac**: /$HOME/Library/Application Support/Testsigma/Agent/config/agent.properties


### **Remove Testsigma Agent Traces**

   - **Windows**: %user_profile%\AppData\Roaming\Testsigma\Agent\
   - **Linux**: $HOME/.testsigma/agent/
   - **Mac**: /$HOME/Library/Application Support/Testsigma/Agent/

### **Remove Testsigma Lite Traces**

**Testsigma Lite state.**
   - **Windows**: %user_profile%\AppData\Roaming\com.testsigma.testsigmalite\
   - **Linux**: $HOME/.testsigma/com.testsigma.testsigmalite/
   - **Mac**: /$HOME/Library/Application Support/com.testsigma.testsigmalite/

[[info | **NOTE**:]]
| To access **.testsigma** folder in the above path, you need to unhide hidden folders in your `user_folder`.

### **Shortcuts to View Hidden Files:**
   - **Mac:** Press **Command (⌘) + Shift + .** in **Finder**. <br>
   - **Windows:** Press **Windows + R**, type control folders, go to the **View** tab, and select **Show hidden files, folders, and drives**.

---