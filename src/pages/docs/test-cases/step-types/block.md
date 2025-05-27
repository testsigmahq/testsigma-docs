---
title: "Test Step Type: Blocks"
pagetitle: "Streamline Test Steps with Step Blocks in Testsigma"
metadesc: "Optimise test management with Testsigma Test Step Type: Blocks for streamlined steps. Avoid nesting or converting Step Blocks for streamlined processes."
noindex: false
order: 4.26
page_id: "step-blocks-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Create a Block using Test Step Type"
  url: "#create-a-block-using-test-step-type"
- type: link
  name: "Create a Block using Bulk Action"
  url: "#create-a-block-using-bulk-action"
- type: link
  name: "Editing a Block"
  url: "#editing-a-block"
- type: link
  name: "Deleting a Block"
  url: "#deleting-a-block"
- type: link
  name: "Actions Possible on a Block"
  url: "#actions-possible-on-a-block"
- type: link
  name: "Actions not Possible On A Block"
  url: "#actions-not-possible-on-a-block"
---
---

In Testsigma, you can combine several test steps into one block using Step Blocks. This feature makes your test cases more organised, efficient, and simpler. You can make logical groups of actions, validations, or other steps that must be done together. This guide will explain how to use Step Blocks in Testsigma. 

In Testsigma, a step block can be created using two different methods:
1. Create a Block using Test Step Type
2. Create a Block using Bulk Action

---

> ### **Prerequisites**
> 
> Before using the Step Block, you must understand specific concepts such as creating [Projects](https://testsigma.com/docs/projects/overview/), [Test Cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), [Test Steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/), and understanding [Test Step Types](https://testsigma.com/docs/test-cases/step-types/overview/) and [Bulk Actions](https://testsigma.com/docs/test-cases/create-steps-nl/bulk-actions/).

---

## **Create a Block using Test Step Type**

Follow the below steps to add a block using the test step type:

1. Click **+ Add new step** on the **Test Case Details** page where you want to insert a block.
2. Click on the **Test Step Type** button located before the new **test step** and select **Create a Block** from the dropdown list that appears.
3. Once you've selected the block, enter a title and click **Create Step**. ![Create Block in Test Step Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/createblock_teststeptype.gif)
4. To add a step within the block, click **Step Inside Block**, and to add a test step after the block, click **Step After Block**. ![Add Step Inside](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/stepinside_block.gif)

---

## **Create a Block using Bulk Action**

Follow the below steps to add a block using the bulk action:

1. Add the **test steps** you want to the block by selecting them on the **Test Case Details** page.
[[info | NOTE:]]
| You can only add consecutive test steps to a block.
2. Click the **Create Block** option in the menu bar, and a **Create Block** pop-up window will appear. Enter the **title** and click **Create**.
3. Click the **>** icon on the left to see the selected steps to make a collapsed block with the given title. ![Block in Bulk Action](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/block_bulkactions.gif)
[[info | NOTE:]]
| If you selected a Block step in the Test Steps, you cannot create a Block again. Please remove or deselect the Block step and try again.

---

## **Editing a Block**

Open the test case with the Step Block you want to edit. Choose the **block**, edit its **name**, and click **Update Step** to save. Click the **>** icon to view the steps within the block. To add a Test Step, click **Step Inside Block**, or click the **ellipsis** icon in the test step for perform [Test Step Options](https://testsigma.com/docs/test-cases/create-steps-nl/step-actions/). ![Edit Block](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/edit_block.gif)

---

## **Deleting a Block**

To delete a Step Block, open the test case containing it and click the **Delete** button corresponding to the Block Step. Clicking on the delete button will delete the block, as it is only considered a label for the test steps, and the test steps inside it will remain intact. ![Delete Block](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/delete_block.gif)

[[info | NOTE:]]
| Deleting the block will only remove the block and not delete the steps.

---

## **Actions Possible on a Block**

- **Reordering Steps**: Within a Step Block, you can change the order of steps.
- **Moving Block**: You can move a Step Block and its contained steps to a different location within the same test case.

---

## **Actions not Possible on a Block**

- **Nesting Blocks**: You cannot nest Step Blocks inside other Step Blocks.
- **Converting to Regular Steps**: Once created, you cannot directly convert a Step Block into an individual test step.

---