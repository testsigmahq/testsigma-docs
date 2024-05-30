---
title: "Agent Logs"
metadesc: "How to fetach the logs files from the Testsigma Agent to troubleshoot the errors. These files help you resolve execution issues quickly in Testsigma App."
noindex: false
order: 11.92
page_id: "Fetching Agent logs"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Send the Logs Automatically"
  url: "#send-the-logs-automatically"
- type: link
  name: "Send the Logs manually"
  url: "#send-the-logs-manually"

---

---

To execute Testsigma tests on your local machines, a small utility program named Testsigma agent needs to be on each local machine. In this article, we will discuss how to send the log files of the Testsigma agent. Providing these files to the Testsigma Support Team will help us resolve execution issues quickly.


---

## **Send the Logs Automatically**

1. From the dashboard, go to **Agents**.

2. Hover over the agent of which you want to send logs, and click **Report Agent**.

3. In the warning dialog, provide a description of the problem you're facing with the agent and click **Report**.

4. The logs will be reported to Testsigma support automatically.


Here’s a quick GIF demonstrating how to send the logs automatically. 

![Send Logs Automatically](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agentlogsauto.gif)


---

## **Send the Logs manually**

You can find the Testsigma agent logs folder for your machine as mentioned below:

**Location of Testsigma Agent Configuration/Logs**

The Testsigma Configuration/Log files are located at the following locations depending on the Operating System used:

| Operating System   | Location of Agent directory | 
| :---        | :---   | 
| Windows    |  %userprofile%\AppData\Roaming\Testsigma\Agent\    | 
| Linux  | $HOME/.testsigma/agent/        | 
| Mac   | $HOME/Library/Application Support/Testsigma/Agent/  |

- The **%userprofile%** points to the **C:\Users\< username > folder where < username >** is replaced by your Windows login username.
- $HOME in Linux/Mac also points to the user's home folder

There would be a logs folder in the above directory. Inside the **logs** directory, you can find a number of files such as agent.log, Testengine.log e.t.c.

1. Please zip the **Agent** folder mentioned above.

2. Once you have the agent logs ZIP file, hover the agent of which you want to send logs and click **Report Agent**.

3. Click **Upload manually**. This will open a warning dialog. 

4. In the warning dialog, provide a description of the problem you're facing with the agent, attach agent logs ZIP file click **Report**.

Here’s a quick GIF demonstrating how to send the logs manually. 

![Agent Logs Manually](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agentlogsmanual.gif)

---

**Debugging Errors**

For a technical user, the logs will serve as a great tool for debugging the issues themselves. However, if you need an extra hand, we are always there for you. Just drop in a mail to **support@testsigma.com** describing the issue and with the above-mentioned log files attached. Remember, adding as much detail as possible will help us resolve the issue in the shortest time.




Please mention the following details in the mail:

* **Project Name**, **Application Name**, **Test Case Name**, and **Execution Name**.
* **Execution Type**: Hybrid Web/ Hybrid Mobile. If it is Hybrid Mobile Execution, attaching the Appium Logs too will help. You can download the Appium logs from the Appium Server. Contact Support for more details.


---