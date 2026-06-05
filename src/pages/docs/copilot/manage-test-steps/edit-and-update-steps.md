---
title: "Edit and Update Steps"
pagetitle: "Edit and Update Steps"
metadesc: "Learn how to edit and update test steps in Copilot using inline tools to modify elements, clear steps, and manage step-level options."
noindex: false
order: 11.162
page_id: "edit-and-update-steps"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Edit an Element in a Step"
  url: "#edit-an-element-in-a-step"
- type: link
  name: "Clear a Step"
  url: "#clear-a-step"
- type: link
  name: "Step-Level Options via the Ellipsis Menu"
  url: "#step-level-options-via-the-ellipsis-menu"
---

---

Use Copilot to edit test steps by updating elements, clearing steps, and managing step-level options. Copilot provides inline editing tools to help you refine steps without leaving the session. This article discusses editing and updating test steps using Copilot.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
>    - You have created a test case.
>    - You have installed and configured the **Testsigma Terminal**.
>    - You have referred to the documentation on [Launch Copilot](https://testsigma.com/docs/copilot/launch-copilot/).

---

## **Edit an Element in a Step**

1. In the **Copilot** dialog, hover over the step containing the element you want to edit and click the element to open the element options menu. Select the required option from the following available options:

   - **Rename** — Update the display name of the element without changing its locator or configuration.

   - **Learn** — Re-record the element during a live session so that Copilot can identify it on the screen.

   - **Change** — Replace the current element with another existing element from your element repository.

   - **Create** — Create and associate a new element directly within the current step.

   - **Edit** — Open the Update Element overlay to modify the element's name, screen name, type, and value. ![Element](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/edit_copilot_1.png)

---

## **Clear a Step**

1. Click on the step you want to clear.
   ![Clear](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/edit_copilot_2.png)

2. Start typing the step to view the list of matching NLPs. Select the required NLP and configure it as needed.
   ![NLPs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/edit_copilot_3.png)

3. Click **Update** to save the new step content, or click **Dismiss** to cancel and restore the original step.
   ![Update](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/edit_copilot_4.png)

---

## **Step-Level Options via the Ellipsis Menu**

1. Hover over the step you want to manage and click the ellipsis icon on the right side of the step.
   ![ellipsis icon](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/edit_copilot_5.png)

2. Select the required option from the following available options:
   - **Execute from Here** — Starts execution from this specific step, skipping all prior steps. Since the earlier steps will not run, the browser may not be in the expected state for the current step. Ensure your application is manually set up to reflect the correct state before clicking this option for successful execution.

   - **Disable Step** — Marks the step as disabled so it is skipped during execution without being removed.

   - **Ignore Step Result** — Excludes the step's pass or fail status from impacting the overall test result.

   - **Enable Visual Testing** — Enables visual testing for the step, allowing Copilot to capture and compare screenshots during step execution.

   - **Step Settings** — Opens the Step Details panel, where you can configure step timeout, screenshot behavior, and other advanced options.

   - **Clone Step** — Creates a copy of the step directly below the current step.

   - **Step Above** — Inserts a new empty step directly above the current step and opens the inline editor for input.

   - **Step Below** — Inserts a new empty step directly below the current step and opens the inline editor for input.

   - **Delete Step** — Permanently removes the step from the test case. This action cannot be undone. ![Options](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/edit_copilot_6.png)

---