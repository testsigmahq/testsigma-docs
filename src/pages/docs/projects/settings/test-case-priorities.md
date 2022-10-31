---
title: "Test case priorities"
metadesc: "What are test case priorities in Testsigma and how to use them."
noindex: false
order: 2.41
page_id: "Test case priorities in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites-"
- type: link
  name: "Add a new test case priority"
  url: "#add-a-new-test-case-priority"
- type: link
  name: "Delete a test case priority"
  url: "#delete-a-test-case-priority"
- type: link
  name: "Edit a test case type"
  url: "#edit-a-test-case-type"
- type: link
  name: "How to assign a priority to a test case"
  url: "#how-do-you-assign-a-priority-to-a-test-case"
---

---

Test case prioritization is done to prioritize test cases in the test suite based on factors such as code coverage, risk/critical modules, functionality, features, etc. Many teams classify priority as Critical, Medium, High, Low, etc. An internet banking organization might have test case priorities ranging from Extremely Critical, Critical to Basic. A content management system can have priorities based on whether the content is static or dynamic. 

Testsigma provides a default set of Test Case Priorities which can be edited and modified as necessary. 

Default test case priorities:  *Critical*, *Medium*, *High*, *Low*

<br>

---
##**Prerequisites**
This article assumes that you know how to create a test case. If not, refer to [creating a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

<br>

**Navigation** 

**Select Project > Project Settings > Test Case Priorities**

1. Select the **Project**.
2. Go to **Project settings** and select **Test case Priorities**, as highlighted in the screenshot below:

![test case priorities menu](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/test-case-priorities/test_case_priorities.png)


---
##**Add a new test case priority**

Below is a quick GIF that demonstrates how a new test case priority can be added in a Testsigma project:

![view and add test case priorities](https://docs.testsigma.com/images/test-case-priorities/view-and-add-test-case-priorities.gif)

Here’s a step-by-step breakdown:

1. Click on the button **+Add Priority** that appears at the bottom of the **Test case priorities** menu:

![test case priorities add button](https://docs.testsigma.com/images/test-case-priorities/test-case-priorities-add-button.png)


2. A new blank row will appear where you can start typing to add the new test case priority. To finish, press enter. And you are done.

![add new test case priority](https://docs.testsigma.com/images/test-case-priorities/add-new-test-priority-type.png)


---
##**Delete a test case priority**

1. To delete a test case priority, hover over the test case type you want to delete and click on the **Delete** icon that appears. 

  ![test case priority delete button](https://docs.testsigma.com/images/test-case-priorities/test-case-priority-delete-button.png)
2. On the **Delete confirmation** window, unlink all test cases linked to the test case priority.
![delete confirmation window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/test-case-priorities/delete_confirmation_test_case_priority.png)

   1. To unlink test case, click on **View test case**, on the right side of each individual test case. This would take you to the **Edit test case** page.
   2. On the **Edit test** case page, change the test case priority to any other available priority category.
   3. Click **Update**. 
   4. Repeat the steps 1 to 4, to unlink all the linked test cases.
   5. After unlinking all the required test cases, click **Done**.

3. Click the **Delete** button on the right of the test case priority you want to delete.
4.  On the **Delete test case type** window, type <kbd>DELETE</kbd> to confirm deletion.![delete test case type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/test-case-priorities/delete_confirmation_test_case_priority_complete.png)
&emsp;


---
##**Edit a test case type**

1. Hover over the test case priority and click on the Edit icon that appears. 

![test case priority edit button](https://docs.testsigma.com/images/test-case-priorities/test-case-priority-edit-button.png)

2. Now, you will be able to edit the text of the test case priority, and ‘enter’ will save the changes.

![test case priority edit text](https://docs.testsigma.com/images/test-case-priorities/test-case-priority-edit-text.png)


---
##**How to assign a priority to a test case**

Below is a quick GIF that demonstrates how priority can be assigned to a test case in a Testsigma project:

![view and add test priority](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/settings/test-case-priorities/view-and-add-test-priorities.gif)

Alternatively, follow the below step by step instructions to assign a test case priority to a test case:

1. Select the project you want to add to the test case to.
2. Navigate to the **Test Development** menu.
3. Click on the **Test Cases** menu. 
4. Create a new Test Case by clicking on the **Create** button.
5. Enter a meaningful name and a description of the test case
6. Click on the **Show Advanced Options** text that appears on the **Create Test Case** page, as also shown in the screenshot below:

![create test case show advanced options](https://docs.testsigma.com/images/test-case-priorities/create-test-case-show-advanced-options.png)


7. Multiple options will appear as shown in the screenshot below:

![create test case assign priority](https://docs.testsigma.com/images/test-case-priorities/create-test-case-assign-priority.png)

8. To select the Test case priority, go to the option **Priority** and select the priority that you want to assign to your test case.

Now create the test case as usual.








