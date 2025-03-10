---
title: "Execution Controls (Stopping Test Execution)"
page_title: "Control Stopping Executions in Testsigma: Prevent Accidental Stops"
metadesc: "Learn how to control stopping executions in Testsigma and prevent accidental stops. Admins have the highest control, while user accounts need to contact the admin."
noindex: false
order: 3.6
page_id: "manage-execution-stops-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Enabling Stop Executions Preference"
  url: "#enabling-stop-executions-preference"
- type: link
  name: "Understanding Execution Stopping Permissions"
  url: "#understanding-execution-stopping-permissions"
---


---


Super Admins control the stopping of executions by users in **Usage Details** and **Run Results** via the **Control Who Can Stop Executions** feature. This prevents accidental stopping of executions and avoids disruptions in testing. Users cannot access the **Stop** button and must contact **Super Admins** to halt execution. This article discusses enabling and configuring Execution Controls in Testsigma.


---



> ## **Prerequisites**
>
> 
> Before you begin, ensure you know how to [Manage User Roles](https://testsigma.com/docs/collaboration/users-roles/).


---

## **Enabling Stop Executions Preference**

1. Navigate to **Settings** > **Preferences**.
![Preferences](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Enabling_Stop_Executions_Preference_1.1.png)

2. Enable the toggle switch for the **Control Who Can Stop Executions** feature flag, which will be toggled off by default. 
![Enable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Enabling_Stop_Executions_Preference_2.png)


[[info | NOTE:]]
| If you cannot see the option to enable this feature, contact **support@testsigma.com** or use the instant **Chat** option and request that they enable it for your account.


---


## **Understanding Execution Stopping Permissions**

1. Once you enable the feature, the following permissions will be in effect:

   - **Account Administrators** and **Super Administrators**, who can stop executions via the Usage Details or Run Results sections, hold the highest control.

   - All executions can be viewed by **Test Managers**, **Test Leads**, and **Automation Engineers**, and they can only stop the executions or user sessions initiated by themselves.

2. Users cannot click the **Stop** to halt the execution. If a user needs to stop the execution without initiating it, they must contact the Super Admin.


[[info | NOTE:]]
| **Super Admins** have absolute control and can stop any execution, irrespective of the user.

---
