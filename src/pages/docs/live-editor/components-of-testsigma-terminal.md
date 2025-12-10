---
title: "Components of Testsigma Terminal"
pagetitle: "Components of Testsigma Terminal"
metadesc: "Learn how Testsigma Terminal streamlines testing by consolidating execution, logs, and advanced capabilities in one place for faster and more efficient workflows."
noindex: false
order: 10.15
page_id: "components-of-testsigma-terminal"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Navigating the Left Panel"
  url: "#navigating-the-left-panel"
---

---

Testsigma Terminal consists of five core components that enable seamless test automation execution, comprehensive logging, and efficient troubleshooting capabilities.

The Terminal provides a centralized interface for running automated tests, monitoring execution activity, and managing your testing environment. Understanding each component ensures optimal utilization of the platform's capabilities.

**Core Components**

1. **Copilot :**
   The Copilot serves as the primary execution engine for automated tests across Web, Desktop, and Salesforce applications.

   **Key Features:**
   - Automatically downloads and configures all required dependencies during initial setup.
   - Provides real-time execution status through visual indicators (green status indicates active test execution).
   - Supports multiple application types within a unified interface. 

2. **Agentic :** 
   The Agentic component powers Atto (Agentic Copilot), an advanced automation capability available exclusively to enterprise users.

   **Key Features:**
   - Manages dedicated dependency downloads for Atto Copilot functionality.
   - Operates independently from the standard Copilot component.
   - Provides enhanced automation capabilities for enterprise-level testing scenarios.

3. **Logs :** 
   The Logs component provides comprehensive debugging and monitoring capabilities through three distinct log categories:
   - **Terminal Logs** – System-level operations and terminal activity.
   - **Agent Logs** – Agent-specific execution data and communication records.
   - **Execution Logs** – Detailed test run information and step-by-step execution data.

This structured approach facilitates efficient troubleshooting and performance analysis.

4. **Info :**
   The Info component displays critical system and configuration information:
   - Device specifications and hardware details.
   - Current version and port configuration.
   - Terminal directory file path.
   - Quick access to help documentation and support resources.

5. **Report Issue :** 
 The Report Issue feature streamlines the support process by enabling direct issue submission from the Terminal.

   **Key Features:**
   - One-click issue reporting.
   - Automatic attachment of relevant log files.
   - Accelerated resolution through comprehensive diagnostic data.

This article discusses how to navigate and engage with the five essential components that drive the Testsigma Terminal environment.

---

> ## **Prerequisites**
>  Before you begin, ensure that the **Testsigma Terminal** is installed on your device. 

---

## **Navigating the Left Panel**

1. On the **Testsigma Terminal**, review the left navigation panel, which contains two sections:

   - **Copilot** – supports execution for web, Salesforce, and desktop applications.
   ![Copilot](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_1.png)

   [[info | **NOTE**:]]
   | When you execute a test case, whether it’s Web, Desktop, or Salesforce, the corresponding
   | application listed under Copilot changes its status indicator from blue to green to show
   | that an active session is running. ![Applications](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_11.png)

   - **Agentic** – displays upgrade availability for Web, Salesforce, and Desktop applications.
     Click **Upgrade to Enterprise** to enable enterprise-level Agentic features for the selected application. ![Agentic](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_2.png)

2. To view logs, click **Logs** from the left panel. The **Logs** page provides a complete overview of debugging information, organized across three tabs for easy access and analysis.
   ![Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_3.png)

   - **Terminal Logs** – These logs show the status and setup of the Testsigma Terminal app.You will find information about agent and packages installation, system configuration, and the communication status between the Terminal and the Copilot agent.
     ![Terminal Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_4.png)
   - **Agent Logs** – These logs show everything that happens inside the execution agent (Copilot) while it is running a test. This includes the communication records and all the steps taken during test execution.
     ![Agent Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_5.png)
   - **Execution Logs** – These logs show the real-time activity for the test you are currently running. You will find specific information related to the execution active in the Live Editor.
     ![Execution Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_6.png)

3. Click **Info** to view the information about the Terminal. 
   ![Info](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_12.png)

4. If you encounter issues with **Testsigma Terminal**, click **Report Issue** from the left panel.
   ![Report Issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_7.png)

   - On the **Report an Issue** page, click **Report a New Issue**.
     ![Report an Issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_8.png)
   - Enter a title and description.
     ![Title and description](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_9.png)
   - Click **Send Report**.
     ![Send Report](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/copilot/copilot_10.png)

[[info | **NOTE**:]]
| When you report an issue, the relevant logs are automatically attached for easier troubleshooting.

---