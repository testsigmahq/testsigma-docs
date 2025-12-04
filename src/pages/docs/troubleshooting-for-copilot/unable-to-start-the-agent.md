---
title: "Unable to Start the Agent?"
pagetitle: "Unable to Start the Agent?"
metadesc: "Learn how to resolve agent startup issues in Testsigma Terminal caused by missing or corrupted files or conflicts with other applications."
noindex: false
order: 10.25
page_id: "unable-to-start-the-agent-?"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve the Issue"
  url: "#steps-to-resolve-the-issue"
---

---

Once you have logged in, downloaded and extracted the required files to start the agent, you may encounter issues due to a missing or corrupted file or a conflicting application. This article discusses how to resolve the issue. 

Agent is responsible for performing local executions. For more information on agents, please refer to the [documentation on Testsigma Agent](https://testsigma.com/docs/agent/overview/).

---

## **Steps to Resolve the Issue**

1. In the **Testsigma Terminal** window, click **Retry**. This tries to restart the agent. 
   ![Retry](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/troubleshooting_for_copilot/start_agent_1.png)

2. If the issue persists, click **Force Reset and Restart**. 
   ![Force Reset](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/troubleshooting_for_copilot/start_agent_2.png)

[[info | **NOTE**:]]
| Please note that clicking **Force Reset and Restart** is irreversible and will remove all existing configurations and any downloaded additional packages. 
| ![Info](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/troubleshooting_for_copilot/start_agent_3.png)

3. **Testsigma Terminal** removes the existing files and starts a new installation.

---