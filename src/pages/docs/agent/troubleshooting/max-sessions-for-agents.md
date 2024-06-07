---
title: "Specify Max Sessions for Agents"
metadesc: "Specify the maximum number of sessions for the local machine while setting up the local agent. This helps limit parallel executions & avoids slowing down of machine"
noindex: false
order: 11.94
page_id: ""
search_keyword: "Specify Max Sessions"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Add Max Sessions for Agents"
  url: "#steps-to-add-max-sessions-for-agents"
---

---

When adding the Testsigma agent, you can specify the maximum number of sessions for the local machine. This helps limit parallel executions and avoids slowing down the machine. This article discusses how to specify the number of sessions for the local machine.

---

## **Prerequisites**

- You should know how to [register agents](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#register-the-testsigma-agent) on Testsigma.

- Contact Testsigma support to enable this feature. 

---

## **Steps to Add Max Sessions for Agents**

1. Set up the agent and click on **Register**. This action will open the **Add New Agent** dialog.

2. On the **Add New Agent** dialog, you'll find the **Max sessions for this machine** field. Enter the number of maximum sessions for the registering machine in the provided text box.

[[info | **NOTE**:]]
| The specified number should not exceed available parallels for the account.

Here's a quick GIF demonstrating how to add maximum sessions for the machine.

![Agent Parallels](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AgentParallels.gif)

---