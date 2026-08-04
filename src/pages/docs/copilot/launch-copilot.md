---
title: "Launch Copilot"
pagetitle: "Launch Copilot"
metadesc: "Learn to launch Copilot on the Testsigma Cloud Lab or Local Devices from within a test case, and use debug points and execution controls to streamline testing."
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
>    - If you plan to run Copilot on **Local Devices**, you have installed and configured the **Testsigma Terminal**.

---

## **Steps to Launch Copilot**


1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_1.png)

2. Open an existing test case or create a new one.

3. In the test case details page, click **Copilot** in the **Action Panel**.
   ![Copilot](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_2.png)

4. In the **Copilot** overlay, select the **Test Lab** to run the session on: **Testsigma Lab** (Cloud) or **Local Devices**.
   ![Copilot](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Copilot_Cloud.png)

   - **Testsigma Lab** (Cloud): Select **Testsigma Lab** to launch a session on Cloud, which runs on Chrome for Testing on a virtual machine. This doesn't require **Terminal** setup, unlike local executions.

   - **Local Devices**: Select this option to run the session on your local machine. Make sure the **Testsigma Terminal** up and running.

[[info | **NOTE**:]]
| - A session on the **Testsigma Lab** occupies one cloud parallel for its duration, and the parallel is released only when the session ends. If no cloud parallel is available, you cannot launch the session.
| - Copilot sessions on the Testsigma Lab always use Chrome for Testing. Currently, OS and resolution aren't configurable.
| - A cloud session is single-active. If you try to open the same session elsewhere while it's still active, Testsigma refuses the request.
| - If a cloud session sits idle, a countdown dialog appears warning you before it expires. If you don't respond in time, the session ends and the cloud machine is released.
| - Runs performed through a cloud session are recorded as **Dry Run** on the parallel usage.

1. In the **Copilot** overlay, click the dropdown in the **Set Initial Debug Point** field and select the step at which you want execution to pause automatically.
   ![Set Initial Debug point](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_3.png)

2. If needed, click the dropdown in the **Execute from Step** field and select the step from which you want execution to begin, skipping all prior steps.
   ![Execute from Step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_4.png)

[[info | **NOTE**:]]
| Make sure your application under test is on the screen that corresponds to the selected step before using this option.

7. Configure **Environment**, **Additional Settings**, and **Desired Capabilities**, if needed.
   ![Additional settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_5.png)

8. Click **Launch** and wait for Copilot to start a session.
   ![Launch](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/launch_copilot_6.png)

---