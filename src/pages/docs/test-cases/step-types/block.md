---
title: "Test Step Type: Blocks"
metadesc: "Blocks in Testsigma and how to use them."
noindex: false
order: 4.26
page_id: "Test Step Type: Blocks"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Create a Step Group"
  url: "#create-a-step-group"
- type: link
  name: "Edit a Step Group"
  url: "#edit-a-step-group"
- type: link
  name: "Edit A Block"
  url: "#edit-a-block"
- type: link
  name: "Delete A Block"
  url: "#delete-a-block"
- type: link
  name: "Actions Possible On A Block"
  url: "#actions-possible-on-a-block"
- type: link
  name: "Actions Not Possible On A Block"
  url: "#actions-not-possible-on-a-block"
---
---


There might be times when you would want to group certain test cases and assign them a label. Testsigma lets you do that via blocks.

When you add certain test steps inside a block, the test steps will be treated same as the test steps outside the block, the only difference will be that they will have an added label. 

---

## **Create A Block**

In Testsigma, a block can be created in 2 ways:
1. [Create A Block By Adding As A Test Step Type](#create-a-block-by-adding-as-a-test-step-type)
2. [Create A Block Via Bulk Action](#create-a-block-via-bulk-action)

Because a block is same as a label, block test steps will not be given any test step numbers.

---

## **Create A Block By Adding As A Test Step Type**

Follow below steps to create a block by adding it as a test step type:
1. Go to the test case where you want to add a block.
2. Add a test step where you want to add a block.
3. Go to the tiny box on the left end of the test step and hover over it. A drop down appears, with the types of test steps that you can add, as also highlighted in the screenshot below:

![the tiny box on the left of a new test step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/block/tiny-box-on-the-left-end-of-a-test-step.png)

4. From the drop down that appears select the test step type "Block".
5. Once you select the block, you would see text "Enter your step block label here" on the step. So, in this step you add the label you want to assign to the block. 
6. Once you have added the label, click on the button "Create".
7. Once the block is created, you can add test steps inside the block by using the button "Add a Step Inside". This button appears when you hover over the added block step.

Below gif demonstrates above steps:

![gif demonstrating how to add a block as a new test step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/block/add-a-block-by-adding-as-a-new-test-step-gif.gif)



---

## **Create A Block Via Bulk Action**

Follow below steps to create a block via bulk action:
1. Go to the test case where you want to add a block.
2. Select the test steps that you want to add in the block. Note that only consecutive test steps can be added to a block. 
3. Bulk actions panel will appear on the top right of the test steps, with option to "+Create Block", as also shown in the screenshot below:

![create block button as bulk action](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/block/create-block-button-as-bulk-action.png)

4. On click on the "+Create Block" button, a pop-up window will appear where you need to enter block's name and click on the button "Create". 
5. A collapsed block will be created with the given name, containing the selected steps. You can expand the block by click on the ">" icon on the left. The icon is highlighted in the screenshot below:

![collapsed blocks in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/block/collapsed-blocks.png)


---

## **Edit A Block**

You can edit a block by clicking the "edit" button corresponding to the Block Step. A click on the edit button will let you edit the name of the block, this will not impact the test steps inside the block. The edit button is highlighted for your reference in the screenshot below:

![edit button for a block step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/block/edit-button-for-a-block-step.png)



---

## **Delete A Block**


You can delete a block by clicking the "delete" button corresponding to the Block Step. A click on the delete button will let you delete the block only(as it is only considered as a label for the test steps), the test steps inside it will remain intact. The delete button is highlighted for your reference in the screenshot below:

![delete button for a block step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/block/delete-button-for-a-block-step.png)

---

## **Actions Possible On A Block**

Below are the actions possible on a block:

1. **Edit A Block**: Discussed [here](#edit-a-block)
2. **Delete A Block**: Discussed [here](#delete-a-block)
3. **Add A Test Step Above The Block**: You can add a test step above the block by click on the "+ Add Step" button that appears above the block on hover on the block.
4. **Add A Test Step Below The Block**: You can add a test step below the block by click on the "+ Add Step" button that appears below the block on hover on the block.
5. **Add A Test Step Inside The Block**: You can add a test step inside the block by click on the "+ Add a Step Inside" button that appears on hover on the block. 
6. You can select steps inside a block and add them to a step group. 
7. You can reorder the test steps inside a block, as if there was no block there. This is because block is just a label.

---

## **Actions Not Possible On A Block**

Actions that are not possible on the block are:
1. If you try to add steps from multiple blocks to one step group ,then, the steps would be added but the blocks would not be added to the step group.
2. A block test steps cannot be reordered, but the test steps inside it can be. This is possible irrespective of where the block is.


---