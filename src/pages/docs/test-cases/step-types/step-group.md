---
title: "Test Step Type: Step Groups"
metadesc: "Instead of writing the same steps repeatedly, you can create a step group and use it in the test cases when required. This article discusses how to use step groups in Testsigma"
noindex: false
order: 4.23
page_id: "test-step-type-step-groups"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Create a New Step Group"
  url: "#create-a-new-step-group"
- type: link
  name: "Edit a step group"
  url: "#edit-a-step-group"
- type: link
  name: "Delete a Step Group"
  url: "#delete-a-step-group"
- type: link
  name: "Edit a Step Group for a Specific Test Case"
  url: "#edit-a-step-group-for-a-specific-test-case"
- type: link
  name: "Create a Step Group From a Test Case"
  url: "#create-a-step-group-from-a-test-case"
- type: link
  name: "Use Step Group in a Test Case"
  url: "#use-step-group-in-a-test-case"
- type: link
  name: "Use a Step Group Between Projects"
  url: "#use-a-step-group-between-projects"
- type: link
  name: "Additional Actions Possible on Iteration Count"
  url: "#additional-actions-possible-on-iteration-count"
---

---

Sometimes, a group of steps is common across multiple test cases.

**For example:**
- You must log in to an account before performing a fund transfer.
- You must log in to an account before deleting a beneficiary account.
- You must log in to an account before downloading an account statement.

Logging in to an account is a common prerequisite. Instead of duplicating these steps in each test case, you can create a step group and reuse it wherever required. This article describes how to create and use step groups in Testsigma.

---

## **Create a New Step Group**

1. From the left navigatio bar, go to **Create Tests > Step Groups**, click **Create Step Group**.
   ![Create Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Step_Groups_Nav.png)

2. Enter **Name** and create steps manually by clicking **Add new step**.
   ![Name & New Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Name_Step_Group.png)

   Alternatively, you can click **Record** to record steps for the step group. 
   ![Alternate Method](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Record_Step_Group.png)


3. After adding all the steps, you can use the step group in any test case. 


[[info | **NOTE**:]]
| You can also create a data driven step group by associating a test data profile from the step group settings. Follow the steps below to associate a test data profile. 
| 1. Create a step group and click **Step Group Settings**.
| 2. On **Step Group Settings**, 
|     - Select the **Test Data Profile** you want to associate with the Step Group. 
|     ![Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Step_Group_Settings.png) 
|     - Enable the **Data Driven** toggle. 
|     ![Data Driven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Step_Group_Data_Driven_Toggle.png)
|     - Now, create all the steps and your data-driven step group will be ready to use across test cases.

---

## **Edit a Step Group**

1. From the left navigatio bar, go to **Create Tests > Step Groups**.

2. Open the step group you want to update and make the changes.

   [[info | **NOTE**:]]
   | The changes will affect all the test cases that use the step group.

---

## **Delete a Step Group**

1. From the **Step Group** list page, click kebab menu next to the step group you want to delete and click **Delete**.
   ![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Delete_Step_Group.png)

2. This will open **Deletion Warning** popup. 
   ![PopUp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgdltpop.png)

   [[info | **NOTE**:]]
   | This will show the list of affected test cases. Deletion of the step group will remove the step group in the linked test cases.

3. Enter **DELETE** and click **I understand, delete this Step Group**. 
   ![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgdtltdcod.png)

4. The step group will be deleted successfully. 

---


## **Edit a Step Group for a Specific Test Case**

1. From the left navigatio bar, go to **Create Tests > Test Cases**.

2. Open the **Test Case** in which you want to edit the Step Group.

3. Expand the **Step Group** to edit any test data or element being used in the step group. 
   ![Edit Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Expand_Step_Group.png)

4. After updating any step click **Update Step** to save the changes.
   ![Save Changes](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_Step_Of_Step_Group.png)

[[info | **NOTE**:]]
| 1. You can edit test data and elements for specific test cases but not the NLP. 
| 2. Edits made for a step group within a test case do not affect the original step group.


---

## **Create a Step Group From a Test Case**

1. From the left navigatio bar, go to **Create Tests > Test Cases**.

2. Open the **Test Case** from you want to create a step group. 

3. Once you start selecting the test steps, an option bar will appear on top of the test steps. Select all the steps you want in a step group and click on **Create Step Group**.
   ![Create Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_For_Step_Group.png)
   
4. This will open a pop-up as below:
   ![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Step_Group_Confirmation.png)
    - If you click on the **Create**, a new step group with the selected test steps and the given name would be created. 
    - If you click on the **Create and Replace** button, a new step group with the selected test steps and the given name would be created and the selected test steps would be replaced by the created step group.


[[info | **NOTE**:]]
| If you don't select consecutive test steps then the pop-up that appears won't show you the **Create and Replace** button.
| ![Only Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Step_Group_Without_CR.png)


---


## **Use Step Group in a Test Case**

1. From the left navigatio bar, go to **Create Tests > Test Cases**.

2. Expand a **Feature**, then expand a **Scenario**, and click ‘**+**’ next to the scenario where you want to add the test case or open a **Test Case** in which you want to add a step group. 

3. On the test case details page, click the option on the left side of the test step and select **Step Group**.
   ![Add Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_Step_Group_to_Test_Case.png)

4. From the **Step Group** list overlay, select the step group you want to add. 
   ![Step Group Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Step_Group_Overlay.png)

5. Click **Create Step**.
   ![Create Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_Step_Group_Confirmation.png)


[[info | **NOTE**:]]
| You can also add a data driven step group to a data driven test case. This allows iterating through multiple data sets via the step group for every single iteration of your data-driven test case.

---

## **Use a Step Group Between Projects**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Expand a feature, expand a scenario, and click **+** next to the scenario where you want to add a test case. Alternatively, open a test case in which you want to add a step group.

3. On the test case details page, click the option icon next to the test step, and then select **Step Group**.

4. In the **Step Group** list overlay, click **Reuse Step Group**.
   ![Reuse Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Reuse_Step_Group.png)

5. In the **Reuse Step Group** dialog:
   - Select the **project**, **application**, and **version**.
   - Select a step group from the **Reuse Step Group** dropdown list.
     ![Reuse Step Group Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Reuse_Step_Group_Details.png)

6. Click **Create Step**.
   ![Create Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_Step_from_Different_Project_Step_Group.png)

7. The step group is added from the selected project.

[[info | **NOTE**:]]
| You can reuse step groups only between **Web**, **Android**, and **iOS** applications.

---

## **Additional actions possible on iteration count**

1. **Store**: In a step group, when a test data profile is being iterated - an additional action is possible. The iteration count can be stored into a variable for later use. (Iteration count is the current count that is being iterated over the associate test data profile in the step group in Testsigma.) Below is how the syntax for the Store NLP looks like:

![store-iteration-count-test-data-set-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/store-iteration-count-test-data-set-name.png)


2. **If**: The test data set values, from a test data profile being iterated, can be compared within an *if condition* too. Below screenshot shows the NLP (The NLP can be added as a part of add-on **String Compare**. You can find the add-ons to use here: https://testsigma.com/addons):


![the verify if NLP that is available with the addon String Compare](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/verify-with-if-with-string-compare.png)



---