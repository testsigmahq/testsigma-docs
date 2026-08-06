---
title: "Launch Copilot"
pagetitle: "Launch Copilot"
metadesc: "Learn to launch Copilot within a test case and use debug points and execution controls to streamline testing."
noindex: false
order: 11.13
page_id: "launch-copilot"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Launch Copilot"
  url: "#steps-to-launch-copilot"
---

---

In Testsigma, you can launch Copilot directly from a test case to work with your test steps in a single workspace. You can set a debug point to pause execution at a specific step and choose the step from which the execution should begin. This article discusses how to launch Copilot from within a test case.

---


> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
>    - You have created a test case.
>    - You have installed and configured the **Testsigma Terminal**.

---

## **Steps to Launch Copilot**


1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_1.png)

2. Open an existing test case or create a new one.

3. In the test case details page, click **Copilot** in the **Action Panel**.
   ![Copilot](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_2.png)

4. In the **Copilot** overlay, click the dropdown in the **Set Initial Debug Point** field and select the step at which you want execution to pause automatically.
   ![Set Initial Debug point](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_3.png)

5. If needed, click the dropdown in the **Execute from Step** field and select the step from which you want execution to begin, skipping all prior steps.
   ![Execute from Step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_4.png)

[[info | **NOTE**:]]
| Make sure your application under test is on the screen that corresponds to the selected step before using this option.

6. Configure **Environment**, **Additional Settings**, and **Desired Capabilities**, if needed.
   ![Additional settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_5.png)

7. Click **Launch** and wait for Copilot to start a session.
   ![Launch](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_6.png)

---