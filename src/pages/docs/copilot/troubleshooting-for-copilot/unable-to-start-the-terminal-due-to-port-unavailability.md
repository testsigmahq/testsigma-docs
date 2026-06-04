---
title: "Unable to Start the Terminal Due to Port Unavailability?"
pagetitle: "Unable to Start the Terminal Due to Port Unavailability?"
metadesc: "Fix startup issues in Testsigma Terminal caused by blocked or busy ports and ensure the required ports are free for proper operation."
noindex: false
order: 11.94
page_id: "unable-to-start-the-terminal-due-to-port-unavailability-?"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Step 1: Retry or Reconfigure from the Terminal Window"
  url: "#step-1-retry-or-reconfigure-from-the-terminal-window"
- type: link
  name: "Step 2: Check if a Port is in Use"
  url: "#step-2-check-if-a-port-is-in-use"
- type: link
  name: "Step 3: Free the Occupied Port"
  url: "#step-3-free-the-occupied-port"
- type: link
  name: "Step 4: Restart the Testsigma Terminal"
  url: "#step-4-restart-the-testsigma-terminal"
---

---

If the Testsigma Terminal fails to start due to port unavailability, it means one or more of the required ports (8383, 8484, or 18329) are already in use by another process on your machine. This article discusses how to identify and resolve the conflict.

---

## **Step 1: Retry or Reconfigure from the Terminal Window**

Before running manual commands, try the built-in recovery options in the Testsigma Terminal:

1. In the **Testsigma Terminal** window, click **Retry**. This checks the port’s availability again.
   ![Retry](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/ports_1.png)

2. If the issue persists, click **Edit Configuration**.
   ![Edit Configuration](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/ports_2.png)

3. In the **Edit Configuration** dialog, check the available ports on your device, update them to free ports, and click **Update Configuration & Retry**.
   ![Edit Configuration](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/ports_3.png)

[[info | NOTE:]]
| If the built-in options don’t resolve the issue, proceed to the steps below to manually identify and free the occupied port.

---

## **Step 2: Check if a Port is in Use**

Run the command for your operating system to check each required port (8383, 8484, 18329). Replace the port number in the command with the one shown in the error.

**Windows — Command Prompt:**
```
netstat -ano | findstr :8383
netstat -ano | findstr :8484
netstat -ano | findstr :18329
```

**Mac/Linux — Terminal:**
```
lsof -i :8383
lsof -i :8484
lsof -i :18329
```

Interpret the output as follows:
- **No output** — the port is free. Proceed to Step 4.
- **Output with LISTEN** — a process is actively using the port. Note the PID (Process ID) from the last column and proceed to Step 3.

---

## **Step 3: Free the Occupied Port**

Use the PID from Step 2 to stop the process occupying the port.

**Windows — Command Prompt:**
```
taskkill /PID <PID> /F
```

**Mac/Linux — Terminal:**
```
kill -9 <PID>
```

Replace `<PID>` with the actual process ID from the output above.

[[info | NOTE:]]
| If multiple ports show a LISTEN entry, repeat Steps 2 and 3 for each one before proceeding.

---

## **Step 4: Restart the Testsigma Terminal**

Once you’ve freed all required ports, restart the Testsigma Terminal and verify that it launches successfully.

---
