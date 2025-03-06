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


### **1. Can I run the old Java agent and Testsigma Lite on the same machine?**

**Answer:** No, only one active agent can run at a time. Testsigma Lite automatically detects an existing Java agent and uses it for **Live Editor** and test executions.

---

### **2. What installation formats are available for Testsigma Lite?**

**Answer:** Testsigma Lite is available in the following formats:

- **.dmg** (macOS)
    
- **.msi** (Windows)
    
- **.zip** and **.tar.gz** (Alternative formats, but availability may be restricted by enterprise security policies)
    

---

### **3. Will my existing agent be upgraded when I install Testsigma Lite?**

**Answer:** Testsigma Lite detects and integrates with the existing agent. If an update is available, the agent is upgraded automatically.

---

### **4. Can the old Java agent be converted into the new Testsigma Lite Java agent?**

**Answer:** During installation, the old agent is detected, upgraded, and converted into the new Testsigma Lite Java agent.

---

### **5. If my old Java agent was registered but inactive, will Testsigma Lite reuse its name?**

**Answer:** If Testsigma Lite does not detect the inactive agent, it installs a new one, requiring re-registration.

---

### **6. What happens if the old Java agent becomes active again?**

**Answer:** The old Java agent cannot become active while Testsigma Lite is running, as only one agent can be active at a time.

---

### **7. Which agent is used for remote executions or ad-hoc runs?**

**Answer:** Testsigma Lite integrates with the existing agent, which is used for remote executions, ad-hoc runs, and Live Editor.

---

### **8. How does the Testsigma Lite Java agent register with Testsigma?**

**Answer:** The registration process remains unchanged. Refer to [Setting Up Testsigma Agent Locally](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/) for details.

---

### **9. Can I start, stop, or restart the Agent from the Testsigma application?**

**Answer:** Not yet. Currently, the agent can only be managed via the Testsigma Lite desktop application.

#### **Managing Testsigma Lite**

- **Stop:** Click **Quit Live Editor**.
    
- **Start:** Launch **Testsigma Lite** from your applications.
    
- **Restart:** Stop and restart **Testsigma Lite**.
    

#### **Managing the Agent**

- **Start:** The agent starts automatically when **Testsigma Lite** launches.
    
    - To start manually:
        
        - Navigate to the **Agent Location**.
            
        - Open **Terminal/Command Prompt**.
            
        - Run: `sh Start.sh`
            
- **Stop:** The agent runs in the background.
    
    - To stop manually:
        
        - Navigate to the **Agent Location**.
            
        - Open **Terminal/Command Prompt**.
            
        - Run: `sh Stop.sh`
            
- **Restart:** Relaunch **Testsigma Lite** or click the **Restart** button on the **Live Editor** homepage.
    

---

### **10. Can I manually start or stop the Agent?**

**Answer:** Yes, but it is not recommended. The agent runs in the background, and stopping it may impact Testsigma Lite’s functionality.

---

### **11. How can I collect logs from Testsigma Lite?**

**Answer:** Logs are stored locally and can be accessed via **Logs** button on Testsigma Lite home screen.

**Manual Log Path:**  
`Disk > Users > user_folder > Library > Application Support > Testsigma > Testsigma Lite > Logs > .log file`

[[info | **NOTE**:]]
| To access **Library** folder in the above path, you need to unhide hidden folders in your `user_folder`.

#### **Shortcut to View Hidden Files:**

- **Mac:** Press **Command (⌘) + Shift + .** in **Finder**.
    
- **Windows:** Press **Windows + R**, type `control folders`, go to **View**, and select **Show hidden files, folders, and drives**.
    

---

### **12. If the old agent is running, will I be prompted before installing Testsigma Lite?**

**Answer:** Yes. Testsigma Lite detects existing agents and prompts you to either use the existing agent or install a new one.

---

### **13. Where are the Java agent files stored on my machine?**

**Answer:** Java agent files are stored in the path below:
`Disk > Users > user_folder > Library > Application Support > Testsigma > Agent > Logs`

[[info | **NOTE**:]]
| To access **Library** folder in the above path, you need to unhide hidden folders in your `user_folder`.

#### **Shortcut to View Hidden Files:**

- **Mac:** Press **Command (⌘) + Shift + .** in **Finder**.
    
- **Windows:** Press **Windows + R**, type `control folders`, go to **View**, and select **Show hidden files, folders, and drives**.
    

---