---
title: "Bulk Actions"
pagetitle: "Bulk Actions"
metadesc: "Learn how to perform bulk actions in Copilot by selecting multiple test steps and applying changes using the floating action bar."
noindex: false
order: 11.165
page_id: "bulk-actions"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Perform Bulk Actions"
  url: "#steps-to-perform-bulk-actions"
---

---

Use Copilot to perform actions on multiple test steps at once. Instead of managing steps individually, you can select multiple steps and apply an action to all of them in a single operation using the floating action bar. This article discusses performing bulk actions on test steps using Copilot.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
>    - You have created a test case.
>    - You have installed and configured the **Testsigma Terminal**.
>    - You have referred to the documentation on [Launch Copilot](https://testsigma.com/docs/copilot/launch-copilot/).

---

## **Steps to Perform Bulk Actions**

1. In the **Copilot** overlay, hover over a step. A checkbox appears in place of the step number.
   ![Floating bar](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/delete_copilot_4.png)

2. Click the checkbox to select the step. The floating action bar appears at the bottom of the panel.
   ![Select all](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/delete_copilot_5.png)

3. Continue selecting additional steps by clicking their checkboxes. To select all steps at once, click **Select All** in the action bar.
   ![Select All](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/bulk_copilot_1.png)

4. Once you have selected the steps, use the icons in the floating action bar to apply an action:

   - **Step Settings** — Apply shared settings, such as timeouts, screenshot behavior, and other configurations, across all selected steps at once.

   - **Create Step Block** — Group the selected steps into a reusable step block that can be referenced across test cases.

   - **Create Step Group** — Combine the selected steps into a step group to organize and reuse them within your test suite.

   - **Delete** — Permanently remove all selected steps from the test case. This action cannot be undone. ![Actions](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/bulk_copilot_2.png)

---