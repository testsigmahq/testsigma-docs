---
title: "Agent Logs"
page_title: "Agent Logs: Configuration, Sending, and Debugging Guide"
metadesc: "Learn to configure agent log levels, send logs automatically or manually, and debug errors efficiently to resolve execution issues quickly."
noindex: false
order: 11.92
page_id: "testsigma-agent-logs"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Agent Log Level Configuration"
  url: "#agent-log-level-configuration"
- type: link
  name: "Send the Logs Automatically"
  url: "#send-the-logs-automatically"
- type: link
  name: "Send the Logs Manually"
  url: "#send-the-logs-manually"
- type: link
  name: "Debugging Agent Log Errors"
  url: "#debugging-agent-log-errors"

---

---

Testsigma Agent is a critical utility program that must be installed on each local machine to execute Testsigma tests. Proper log management is essential for debugging and maintaining the health of these automation agents. This guide covers everything from configuring log levels to automatically or manually sending log files to the Testsigma Support Team. This document explains how to configure agent log levels, send logs automatically and manually, and debug errors.

---

## **Agent Log Level Configuration**

Agent log-level configuration in Testsigma is important for debugging and keeping your automation agents healthy. By default, the INFO level is selected. This setting shows in the command line interface (CLI) and is written to the agent log files on your local device. When you report an agent issue, these logs are automatically sent to the Testsigma support team.

### **Change Agent Level Configuration**

1. Click on the **Agents** icon in the left navigation bar. Open an agent from the Agent list page.
2. Click on the **Agent Settings** icon in the right navigation bar. Choose the agent log level configuration for CLI and local files from the log level options. ![Choose Agent Log Level](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/go_to_agent_log_b.gif)
    - **ERROR**: Logs only critical issues that cause the agent to fail. Only error messages will appear in the CLI and be saved in the local agent log files.
    - **WARN**: Logs warnings and errors to spot potential issues early. Warning and error messages will appear in the CLI and be saved in the local agent log files.
    - **INFO**: The default level that logs general information, warnings, and errors for regular monitoring. Info, warning, and error messages will appear in the CLI and be saved in the local agent log files.
    - **DEBUG**: Logs detailed information for debugging. Debug info, warnings, and errors will appear in the CLI and be saved in the local agent log files.
    - **TRACE**: Logs detailed traces of the execution flow for deep debugging. Trace messages, debug info, warnings, and errors will appear in the CLI and be saved in the local agent log files.
    - **ALL**: Logs all messages, providing the most detailed logging. All messages (error, warning, info, debug, and trace) will appear in the CLI and be saved in the local agent log files. ![agent log level configuration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agent_log_level_configuration.png)
3. After selecting the log-level configuration, **restart** the agent for the changes to take effect. ![choose log level and retsart agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/select_loglevel_restart.gif)

[[info | NOTE:]]
| Always restart the agent after changing the log-level configuration to apply the new settings.

---

## **Send the Logs Automatically**

1. From the dashboard, go to **Agents**.
2. Hover over the agent for which you want to send logs, and click **Report Agent**.
3. In the warning dialog, provide a description of the problem you're facing with the agent and click **Report**.
4. The logs will be reported to Testsigma support automatically.

Here’s a quick GIF demonstrating how to send the logs automatically. ![send logs automatically](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agentlogsauto.gif)

---

## **Send the Logs Manually**

You can find the Testsigma agent logs folder for your machine at the following locations, depending on the operating system used:

| Operating System   | Location of Agent directory | 
| :---        | :---   | 
| Windows    |  %userprofile%\AppData\Roaming\Testsigma\Agent\    | 
| Linux  | $HOME/.testsigma/agent/        | 
| Mac   | $HOME/Library/Application Support/Testsigma/Agent/  |

- The **%userprofile%** points to the **C:\Users\< username > folder where < username >** is replaced by your Windows login username.
- **$HOME** in Linux/Mac also points to the user's home folder

Inside the above directory, you will find a **logs** folder containing several files such as agent.log, Testengine.log, etc.

1. Zip the **Agent** folder mentioned above.

2. Hover over the agent for which you want to send logs and click **Report Agent**.

3. Click **Upload manually**. This will open a warning dialog. 

4. In the warning dialog, provide a description of the problem you're facing with the agent, attach agent logs ZIP file click **Report**.

Here’s a quick GIF demonstrating how to send the logs manually. 

![agent logs manually](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agentlogsmanual.gif)

---

## **Debugging Agent Log Errors**

For technical users, the logs serve as a valuable tool for debugging issues. If you need extra assistance, contact **support@testsigma.com**, providing a description of the issue along with the log files mentioned above. Including as much detail as possible will help resolve the issue quickly.

Please include the following details in your email:

- **Project Name**
- **Application Name**
- **Test Case Name**
- **Execution Name**
- **Execution Type**: Hybrid Web/Hybrid Mobile (if Hybrid Mobile Execution, attach Appium Logs, which can be downloaded from the Appium Server. Contact Support for more details).

---
