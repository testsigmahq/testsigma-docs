---
title: "Copilot in Testsigma"
page_title: "Copilot in Testsigma"
metadesc: "The Copilot in Testsigma helps you debug, execute, and modify test cases in real time. It also enables you to generate test cases using Testsigma Copilot"
noindex: false
order: 4.7433
page_id: "copilot-in-live-editor"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Debug & Generate Tests"
  url: "#steps-to-debug--generate-tests"
---

---

The Copilot in Testsigma helps you debug, execute, and modify test cases in real time. It also enables you to generate test cases using Testsigma Copilot, allowing you to convert prompts into executable test steps. Whether you're reviewing a failed step, learning elements dynamically, or creating new tests from scratch, the Copilot gives you complete control over the test execution flow. This article discusses the capabilities of the Copilot in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure **Testsigma Terminal** is installed and the **Copilot** is ready.

---

## **Steps to Debug & Generate Tests**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Create a new test case or open an existing one.

3. From the **Action Panel**, click **Copilot**.

4. In the **Copilot** overlay, select a step from the **Select Step** dropdown to specify the debug point.
   ![Live Editor](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/LE_copilot_1.png)

5. Click **Launch** to begin execution.
   ![Launch Copilot](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/LE_copilot_2.png)

6. The **Copilot** will execute all steps up to the debug point.

[[info | **NOTE**:]]
| - When execution pauses at a debug point or a step failure, the Global Debugger Toolbar becomes active, providing options to **Resume**, **Step Over**, **Skip Over**, or **Restart** the session. This paused state gives you access to Copilot’s live authoring tools to edit, reorder, or update steps while the session remains live.

7. Click **Testsigma Copilot** on the **Copilot** dialog.

8. In the **Testsigma Copilot** overlay, click **Generate Test Cases**.
   ![Copilot in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/atto/LE_copilot_3.png)

9.  Copilot will analyze the current page and starts generating test cases.

10. Wait for the test case generation to complete.

11. Click any test case to view the corresponding test steps.

12. Click **Add to test case** to add the generated steps into the current test case.


> For troubleshooting details and frequently asked questions, refer to the [documentation on terminal FAQs](https://testsigma.com/docs/live-editor/faqs-on-testsigma-terminal/).

---
