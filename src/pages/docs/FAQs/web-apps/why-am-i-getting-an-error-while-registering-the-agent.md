---
title: "Why Am I Getting an Error While Registering the Agent?"
metadesc: "Learn why agent registration fails in Testsigma and how disabled Local Network Access causes the unreachable error."
order: 24.22
page_id: "why-am-i-getting-an-error-while-registering-the-agent"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Enable Local Network Access"
  url: "#steps-to-enable-local-network-access"
---

---

After installing the Agent in Testsigma, you may encounter an error while registering it. If the registration fails with the message “app.testsigma.com is unreachable from the agent. Check proxy settings if configured,” and the Register button is disabled, it usually indicates that Local Network Access is not enabled on your device.

![Error Message](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Agent_issue_1.png)

This article explains how to enable Local Network Access to resolve the issue.

---

## **Steps to Enable Local Network Access**

1. In **Chrome**, click the **Site Information** icon in the address bar.
   ![Site Information icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Agent_issue_2.png)

2. Enable the **Local network access** toggle. 
   ![Local network access](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Agent_issue_3.png)

3. If these permissions were previously denied, click **Reset permissions**.
   ![Reset permissions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Agent_issue_4.png)

4. Refresh the page.

5. Try registering the agent again. 

---