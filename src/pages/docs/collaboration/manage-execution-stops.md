---
title: "Control Who Can Stop Execution via Usage Details and Run Results"
page_title: "Control Stopping Executions in Testsigma: Prevent Accidental Stops"
metadesc: "Learn how to control stopping executions in Testsigma and prevent accidental stops. Admins have the highest control, while inspector accounts need to contact the admin."
noindex: false
order: 3.6
page_id: "manage-execution-stops-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Enabling Control Who Can Stop Executions"
  url: "#enabling-control-who-can-stop-executions"
- type: link
  name: "Understanding Execution Stopping Permissions"
  url: "#understanding-execution-stopping-permissions"
---

---

Super Admins control the stopping of executions by users in **Usage Details** and **Run Results** via the **Control Who Can Stop Executions** feature. This prevents accidental stopping of executions and avoids disruptions in testing. Users cannot access the Stop button and must contact Super Admins to halt execution. This documentation explains how to enable and configure this feature.


---

### **Prerequisites**

Before you enable the Control Who Can Stop Execution feature, you should understand the concept of [Users & Role Management](https://testsigma.com/docs/collaboration/users-roles/).

---

## **Enabling Control Who Can Stop Executions**

1. Navigate to **Settings** > **Preferences**.
2. Enable the toggle switch for the **Control Who Can Stop Executions** feature flag, which will be toggled off by default. ![Enable Toggle Control Who Can Stop Executions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/enable_whocanstop_sa_te.gif)

[[info | NOTE:]]
| If you cannot see the option to enable this feature, contact [Testsigma Support](mailto:support@testsigma.com) or use the Instant **Chat** option and request that they enable it for your account.

---

## **Understanding Execution Stopping Permissions**

1. Once you enable the feature, the following permissions will be in effect:
   - **Account Administrators** and **Super Administrators**, who can stop executions via the Usage Details or Run Results sections, hold the highest control.
   - All executions can be viewed by **Test Managers**, **Test Leads**, and **Automation Engineers**, and they can only stop the executions or inspector sessions initiated by themselves.
2. Inspectors cannot click the **Stop** button to halt the execution. If an inspector needs to stop the execution and has not initiated it, they must contact the super admin. ![Stop hidden for inspectors](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/enable_whocanstop_runres.gif)

[[info | NOTE:]]
| Super Admins have absolute control and can stop any execution, irrespective of the user.

---
