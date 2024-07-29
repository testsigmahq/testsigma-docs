---
title: "On-Premise: Post-Installation Checklist"
order: 26.31
page_id: "Post-Installation Checklist"
metadesc: "This checklist helps you verify that your Testsigma on-premise setup is installed, configured, and functioning as expected a few mandatory action items post upgrade"
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Refer to the Checklist below:"
  url: "#refer-to-the-checklist-below"
- type: link
  name: "Mandatory Action Items Post Upgrade:"
  url: "#mandatory-action-items-post-upgrade"
---

---

This article discusses the checklist to verify that your Testsigma on-premise setup is installed, configured, and functioning as expected. 

---


## **Refer to the Checklist below:**

1. Check whether the recorder setup properly captures actions during the testing process.

2. Ensure that the auto-heal feature is enabled and works as expected to recover automatically from errors during testing.

3. Check whether the import add-on is successfully integrated into the system and confirm its functionality to enhance system functionality during testing.

4. Confirm if users can successfully login with the default password and access the system. 

5. Verify if users can reset and successfully login with the updated password.

6. Verify that the agent is working properly in an active state to facilitate communication between the system and the testing environment.

7. Validate system functionality by executing a test case and verifying results.

8. Check that the SMTP setup for email communication is appropriately configured.

9. Check whether screenshots are captured in execution reports to support visual testing process documentation.

10. Verify that the customer does not receive any emails from Testsigma cloud. The developer should check that the property should not be set to cloud.

---

## **Mandatory Action Items Post Upgrade:**

1. Stop the old agent and make sure it is no longer active.

2. Hard refresh the application by pressing **Ctrl+Shift+R** to clear the cached data and reload the application completely.

3. Download the latest version of the agent software from the application.

4. Extract the contents from the downloaded file and start the updated agent.

5. Check the agent's current status and version number to ensure the update was successful.

---