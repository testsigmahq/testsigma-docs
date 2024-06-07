---
title: "Triggering Tests on Local Devices"
metadesc: "Execute the tests on local agents from another device using the same Testsigma account | Learn how to trigger tests on local devices from different machines"
noindex: false
order: 11.82
page_id: "Trigger Tests Locally"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Trigger Tests on Local Devices"
  url: "#steps-to-trigger-tests-on-local-devices"
---

---

With Testsigma, you can execute the tests on local devices from another device using the same Testsigma account. This article discusses how to trigger tests on the same local agent from different machines.

---

## **Prerequisites**

- You should have [Testsigma Agent installed & registered](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/) on the target machine.
  
- Before triggering the tests, you should [start the Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/#start-the-testsigma-agent-server-as-a-process) on the target machine.

- For CI/CD pipelines, you should integrate Testsigma commands to trigger test plans.

---

## **Steps to Trigger Tests on Local Devices**

1. Install and register **Testsigma Agent** on the target machine.
![Install Agent](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/laltsagins.png)

1. Navigate to **Test Plans** from the **Dashboard** and select the Test Plan where you want to add local machines. 
![Test Plans](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lalnavtp.png)

1. Click on **Edit**.
![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/laledit.png)

1. On the **Add Test Suites & Link Machine Profiles** sections, click on **Link Test Machine**. 
![Link Test Machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lalltms.png)

1. On **Select test machine profiles** overlay, click on **Add Machine**. 
![Add Machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lalatm.png)

1. On **Add test machine/device profile** overlay, add **Name**, select **Local Devices**, active agent on **Connected Machine** dropdown, and **Browser**. Click on **Create Profile**. 
![Create Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lalcp.png)

1. Click on **Save Selection**. 
![Save Selection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lalss.png)

Now, your test plan is ready for execution from any machine. 

[[info | NOTE:]]
| You can edit & add the local machines to test suites from any device, provided you have the agent active in the target machine.  

8. Navigate to the same test plan from any machine with the same account and click on **Run Now** to execute the Test Plan.
![Run Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/lalnmrn.png)


<br>


Here’s a quick GIF demonstrating triggering tests on local devices.
![Trigger Test Plans](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TriggerTP.gif)


---