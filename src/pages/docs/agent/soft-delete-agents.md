---
title: "Soft Delete Agents"
metadesc: "This article discusses how to soft delete Testsigma agents & push them to obsolete state and restore these agents when needed | Learn how to soft delete Testsigma agents"
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
---

---

Testsigma lets you push agents to an obsolete state, to hide them from the agents list page. You can restore these agents when needed. This article discusses how to soft delete an agent in Testsigma.

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
