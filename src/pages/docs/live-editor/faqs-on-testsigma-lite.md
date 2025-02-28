---
title: "FAQs on Testsigma Lite"
pagetitle: "FAQs on Testsigma Live Editor"
metadesc: "Find answers to frequently questions about Testsigma's Live Editor (Testsigma Lite), including its features, installation, usage, and how it helps resolve issues in test cases in real time"
noindex: false
order: 10.4
page_id: "Frequently Asked Questions on Live Editor"
search_keyword: ""
warning: false
---

---

### **1. Can I run the Old Java Agent and the Testsigma Lite on the same machine?**
**Answer:** No, only single agent is allowed.

---

### **2. Are other formats available for the Testsigma Lite App besides .dmg and .exe?**
**Answer:** The app can also be distributed in **.zip** and .**tar.gz** formats. However, some enterprise security policies may block these formats.

---

### **3. What happens to my existing Agent? Will it be upgraded?**
**Answer:** If you have an existing agent and have also installed a new agent through Testsigma Lite, The existing Agent will continue to function. However, some compatibility issues may arise when running multiple agents. Two agents cannot run simultaneously, as first agent will consume the ports.

---

### **4. Can the old Agent be converted into the new Testsigma Lite Java Agent?**
**Answer:** If an existing agent is present during Testsigma Lite installation, the system prompts the user to either use the existing agent or install a new one. If the user selects the existing agent, Testsigma Lite will continue using it.

---

### **5. If the Old Java Agent was registered but inactive, will the new Testsigma Lite register under the same name?**
**Answer:** No, each Agent will have a unique name and identifier to avoid conflicts.

---

### **6. What happens if the Old Java Agent becomes active again?**
**Answer:** The system is designed to support multiple agents, but for a single machine only single agent can be active.

---

### **7. Which Agent is used for remote executions or ad-hoc runs?**
**Answer:** Active agent will be used for any type of local execution.

---

### **8. How does the Testsigma Lite Java Agent register with Testsigma?**
**Answer:** There is no change in the registration process. For more info, refer to [Setting Up Testsigma Agent Locally](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/).

---

### **9. Can I start, stop, or restart the Agent directly from the Testsigma application?**
**Answer:** This feature is planned for a future release. However, you can manage the Agent only through the Testsigma Lite Desktop application.

**A. Managing Testsigma Lite**
   - **Stop**: Click **Quit Live Editor** to stop Testsigma Lite.
   - **Start**: Search for the **Testsigma Lite** application and launch it.
   - **Restart**: Stop and start **Testsigma Lite** again.

**B. Managing the Agent**
- **Start**: The Agent starts automatically when **Testsigma Lite** is launched.

   **To start manually:**
      - Navigate to the **Agent Location**.
      - Open **Terminal/Command Prompt** in the **Agent** folder.
      - Run the command: `sh Start.sh`

- **Stop**: The Agent runs in the background to support local executions.

   **To stop manually:**
      - Navigate to the **Agent Location**.
      - Open **Terminal/Command Prompt** in the Agent folder.
      - Run the command: `sh Stop.sh`

- **Restart**: The Agent restarts automatically when **Testsigma Lite** is relaunched.
   
   **To restart manually**: Click the **Restart** button on the **Testsigma Lite** homepage (Live Editor).

---

### **10. Can I manually start or stop the Agent?**
**Answer:** The Debugger Agent and Java Agent work together as a single entity. Stopping one may affect functionality.

---

### **11. How can I collect logs from the Testsigma Lite?**
**Answer:** Logs are stored locally and can be accessed via a button on the home screen. <br>
**Manual Path for Logs:**  *Disk > Users > `user_folder` > Library > Application Support > Testsigma > Testsigma Lite > Logs > .log file*

[[info | **NOTE**:]]
| To access **Library** folder in the above path, you need to unhide hidden folders in your `user_folder`.

### **Shortcuts to View Hidden Files:**
   - **Mac:** Press **Command (⌘) + Shift + .** in **Finder**. <br>
   - **Windows:** Press **Windows + R**, type control folders, go to the **View** tab, and select **Show hidden files, folders, and drives**.

---

### **12. If the Old Agent is running, will I be asked for permission before installing the new Testsigma Lite?**
**Answer:** At the start of the installation, Testsigma Lite will detect existing agents on your system and prompts you to either use the existing agent or install a new one.

---

### **13. Can I find where the Java Agent files are stored on my machine?**
**Answer:** **Path for Agent Files & Logs:** *Disk > Users > `user_folder` > Library > Application Support > Testsigma > Agent > Logs*

[[info | **NOTE**:]]
| To access **Library** folder in the above path, you need to unhide hidden folders in your `user_folder`.

### **Shortcuts to View Hidden Files:**
   - **Mac:** Press **Command (⌘) + Shift + .** in **Finder**. <br>
   - **Windows:** Press **Windows + R**, type control folders, go to the **View** tab, and select **Show hidden files, folders, and drives**.

---