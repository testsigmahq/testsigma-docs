---
title: "Delete Agents: Soft & Permanent"
metadesc: "This article discusses how to soft/permanently delete Testsigma agents & push them to obsolete state & restore these agents when needed | Learn how to soft/permanently delete agents"
noindex: false
order: 11.81
page_id: "Agent Soft Delete"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Soft Delete an Agent"
  url: "#steps-to-soft-delete-an-agent"
- type: link
  name: "Steps to Delete Agents Permanently"
  url: "#steps-to-delete-agents-permanently"
---

---

Managing a long list of Agents can make selecting the right Agent while executing tests difficult. In this scenario, Testsigma lets you push Agents to an obsolete state to hide them from the Agents list page. You can restore/delete these Agents permanently when needed. This article discusses how to soft/permanently delete Agents in Testsigma.


---

## **Prerequisites**

- You should have [registered agents](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#register-the-testsigma-agent) on Testsigma.

---

## **Steps to Soft Delete an Agent**

1. From the dashboard, go to **Agents**.

2. Hover over the agent you want to soft delete (push to an obsolete state).

3. In the warning dialog, click **Obsolete Agent**.

4. The agent will move to the obsolete state.

[[info | **NOTE**:]]
| - You can restore an obsolete agent by navigating to **Agents > Obsolete Agent** and clicking Restore.
| - An agent in the obsolete state will not allow the user to execute tests.


Here’s a quick GIF demonstrating how to soft delete and restore the obsoleted agent. 

   ![Soft Delete Agents](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SoftDeleteAgent.gif)

---

## **Steps to Delete Agents Permanently**

1. Navigate from the dashboard to **Agents > Obsolete Agent**.

2. Click on the kebab menu and select **Delete Permanently**. This will open a warning dialog.

3. In the warning dialog, confirm deletion by clicking **Delete Permanently**.

   ![Delete Permanently](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/DeleteAgentsPermanently.gif)


---