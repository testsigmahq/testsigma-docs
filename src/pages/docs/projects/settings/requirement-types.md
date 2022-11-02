---
title: "Requirement types in Testsigma"
metadesc: "What are requirement types in Testsigma and how to access, create, edit and delete them."
noindex: false
order: 2.42
page_id: "Requirement Types"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "When and how to use requirement types"
  url: "#when-and-how-to-use-requirement-types"
- type: link
  name: "Create a new Requirement Type"
  url: "#create-a-new-requirement-type"
- type: link
  name: "Delete a Requirement Type"
  url: "#delete-a-requirement-type"
- type: link
  name: "Edit a Requirement Type"
  url: "#edit-a-requirement-type"
---

---
In product development, a requirement is a documented functional need that a particular design, product or process aims to satisfy. 

With Testsigma, you can organize your test cases based on **Requirements**. When creating those requirements, you can assign them the **‘requirement type’**.  Testsigma has a default set of requirement types, as shown below :

1. Customer Requirements:
2. User Interface Requirements 
3. Functional Requirements
4. Non-Functional Requirements

If needed, you can add more requirement types too.

<br>

---
##**When and how to use requirement types**

Requirement types are used to group requirement specifications (available in the Business Requirements Document). The requirements are then used to group test cases and find origins of test cases. When you create a test case, it should always be assigned a requirement.

**Steps**

1. Select the Project.
2. Go to **Project Settings** and select **Requirement Types**, as highlighted in the screenshot below:

![requirement types menu](https://docs.testsigma.com/images/requirement-types/requirement-types-menu.png)

3. On the **Requirement Types** page, you will be able to see the different types of requirement types available in Testsigma.
<br>
<br>

---

## **Create a new requirement type**

Below is a quick GIF that demonstrates how a new requirement type can be added in a Testsigma project:

![view and add requirement types](https://docs.testsigma.com/images/requirement-types/view-and-add-requirement-types.gif)


Here is the step-by-step breakdown :

1. Click on the button **+Add Type** that appears on the bottom, also highlighted in the screenshot below:

![requirement types add button](https://docs.testsigma.com/images/requirement-types/requirement-types-add-button.png)


2. A new blank row will appear where you can start typing to add the new requirement type. To finish, just press **Enter**. And you are done.

![new requirement type add](https://docs.testsigma.com/images/requirement-types/new-requirement-types-add.png)


---
##**Delete a requirement type**


1. To delete a requirement type, hover over the requirement type you want to delete and click on the **Delete** icon that appears. 

  ![test case priority delete button](https://docs.testsigma.com/images/test-case-priorities/test-case-priority-delete-button.png)
2. On the **Delete confirmation** window, unlink all requirements linked to the requirement type.
![delete confirmation window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/requirement-types/delete_confirmation_test_requirement_new.png)

   1. To unlink requirement, click on **Go to linked entity**, on the right side of each individual requirement. This would take you to the **Requirements** page.
   2. Click on **Edit** requirement. This would take you to **Edit requirement** page.![edit requirements page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/requirement-types/edit_requirements_page.png)
   3. Change the **Requirement type** to any other requirement type listed in the drop-down.
   4. Click **Update**. 
   5. Repeat the steps 1 to 4, to unlink all the linked requirements.
   6. After unlinking all the **Required types**, click **Done**.

3. Click the **Delete** button on the right of the **Requirement type** you want to delete.
4.  On the **Delete requiremet type** window, type <kbd>DELETE</kbd> to confirm deletion.![delete requirement type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/requirement-types/delete_requirements_final_onfirmation.png)
&emsp;

---
##**Edit a requirement type**

1. Hover over the requirement type and click on the edit icon

![requirement type edit button](https://docs.testsigma.com/images/requirement-types/requirement-type-edit-button.png)


2. Now, you will be able to edit the text of the requirement type, and ‘enter’ will save the changes. 

![requirement type edit text](https://docs.testsigma.com/images/requirement-types/requirement-type-edit-text.png)


Read about creating requirements from requirement types [here](https://testsigma.com/docs/projects/requirements/).

