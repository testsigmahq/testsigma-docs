---
title: "Delete Agents: Soft & Permanent"
metadesc: "This article discusses how to soft/permanently delete Testsigma agents & push them to obsolete state & restore these agents when needed | Learn how to soft/permanently delete agents"
noindex: false
order: 11.83
page_id: "agent-soft-delete"
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

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have referred to: 
> 1. [Documentation on setting up Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#register-the-testsigma-agent).

---

## **Steps to Soft Delete an Agent**

1. From the dashboard, go to **Agents**.
![Agents](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_agents_1.png)

2. Click the ellipsis icon against an agent that you want to delete and click **Obsolete**. 
![obsolete](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_agents_2.png)

3. In the **Obsolete agent?** dialog, click **Obsolete Agent**.
![Obsolete Agent](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_agents_3.png)

4. The agent will move to the obsolete state.

[[info | **NOTE**:]]
| - To restore an obsolete agent, click **Restore** next to the agent you want to reactivate. ![Restore](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_agents_4.png)
| - An agent in the obsolete state will not allow the user to execute tests.

---

## **Steps to Delete Agents Permanently**

1. From the dashboard, go to **Agents**. 
![Agents](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_agents_1.png)

2. Click the ellipsis icon against the agent and click **Delete Permanently**. 
![Delete](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_agents_5.png)

3. In the **Delete Agent Permanently?** dialog, click **Delete Permanently**.
![Delete Permanently](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_agents_6.png)

---