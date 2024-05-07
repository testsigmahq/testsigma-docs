---
title: "Test Step Type: Step Groups"
metadesc: "Instead of writing the same steps repeatedly, you can create a step group and use it in the test cases when required. This article discusses how to use step groups in Testsigma"
noindex: false
order: 4.23
page_id: "Test step type: Step groups"
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
  name: "Additional Actions Possible on Iteration Count"
  url: "#additional-actions-possible-on-iteration-count"
---

---

Sometimes, a group of steps is common to multiple test cases.

**For Example:**
1. You must log into an account before performing a fund transfer.
2. You must log into an account before deleting a beneficiary account.
3. You must log into an account before downloading the account statement.

Here, logging into an account is a common step. So, instead of writing the same steps repeatedly, we create a step group and use it in the test cases when required. This article discusses how to create and use step groups in Testsigma.

---

## **Create a New Step Group**
1. Navigate to **Create Tests > Step Groups**, click on **Create Step Group**.
![Create Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgcsg.png)

1. Enter **Name** and create steps manually by clicking on **Add new step**.
![Name & New Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgnameastep.png)

Alternatively, you can click on Record to record steps for the step group. 
![Alternate Method](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgrstps.png)


3. After adding all the steps, you can use the step group in any test case. 


[[info | **NOTE**:]]
| You can also create a data driven step group by associating a test data profile from the step group settings. Follow the steps below to associate a test data profile. 
| 1. Create a step group and click on **Step Group Settings**.
| 2. On **Step Group Settings**, 
|     - Select the **Test Data Profile** you want to associate with the Step Group. 
|     ![Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgsettdp.png) 
|     - Enable the **Data Driven** toggle. 
|     ![Data Driven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgddtoggle.png)
|     - Now, create all the steps and your data-driven step group will be ready to use across test cases.


Here's a quick GIF demonstrating how to create a step group in Testsigma.
![Step Group Creation](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/StepGroupCreateWF.gif)

---

## **Edit a Step Group**
1. Navigate to **Create Tests > Step Groups**.
![Step Groups](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgcsgfnavbar.png)

2. Click on the step group you want to edit and make the changes. 
![Edit Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgessg.png)

[[info | **NOTE**:]]
| The changes will affect all the test cases that use the step group.

---

## **Delete a Step Group**

1. From the **Step Group** list overlay, click on kebab menu on the step group you want to delete and click on **Delete**.

   ![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgdlte.png)

2. This will open **Deletion Warning** popup. 

   ![PopUp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgdltpop.png)

   [[info | **NOTE**:]]
   | This will show the list of affected test cases. Deletion of the step group will remove the step group in the linked test cases.

3. Enter **DELETE** and click on **I understand, delete this Step Group**. 

   ![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgdtltdcod.png)

4. The step group will be deleted successfully. 

---


## **Edit a Step Group for a Specific Test Case**
1. Navigate to **Create Tests > Test Cases**.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgnavtcs.png)


2. Click on the **Test Case** in which you want to edit the Step Group.
![Test Case to Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgstoedit.png)


3. Click on the **Step Group** to edit any test data or element being used in the step group. 
![Edit Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgtstedit.png)


4. After editing click outside the step to save the changes.
![Save Changes](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgedelements.png)


[[info | **NOTE**:]]
| 1. You can edit test data and elements for specific test cases but not the NLP. 
| 2. Edits made for a step group within a test case do not affect the original step group.


---

## **Create a Step Group From a Test Case**
1. Navigate to **Create Tests > Test Cases** and hover over the test case from you want to create a step group and click on it. 
![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgcsgftc.png)


2. Once you start selecting the test steps, an option bar will appear on top of the test steps. Select all the steps you want in a step group and click on **Create Step Group**.
![Create Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgcsgftcsteps.png)
   

3. This will open a pop-up as below:
   ![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgftcsscsr.png)
    - If you click on the **Create**, a new step group with the selected test steps and the given name would be created. 
    - If you click on the **Create and Replace** button, a new step group with the selected test steps and the given name would be created and the selected test steps would be replaced by the created step group.


[[info | **NOTE**:]]
| If you don't select consecutive test steps then the pop-up that appears won't show you the Create and Replace button.
| ![Only Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgocacancel.png)


---


## **Use Step Group in a Test Case**

1. Navigate to **Create Tests > Test Cases**. Either click on **Create Test Case** or hover over the existing test case and click on it. 
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgtccpage.png)


2. On the test case details page, click on the option on the left side of the test step and select **Step Group**.
![Add Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgaddftcdp.png)


4. From the **Step Group** list overlay, select the step group you want to add. 
![Step Group Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sglistoverlay.png)


5. Click on **Create Step**.
![Create Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sgcreatestitc.png)



[[info | **NOTE**:]]
| You can also add a data driven step group to a data driven test case. This allows iterating through multiple data sets via the step group for every single iteration of your data-driven test case.

---

## **Additional actions possible on iteration count**


1. **Store**: In a step group, when a test data profile is being iterated - an additional action is possible. The iteration count can be stored into a variable for later use. (Iteration count is the current count that is being iterated over the associate test data profile in the step group in Testsigma.) Below is how the syntax for the Store NLP looks like:

![store-iteration-count-test-data-set-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/store-iteration-count-test-data-set-name.png)


2. **If**: The test data set values, from a test data profile being iterated, can be compared within an *if condition* too. Below screenshot shows the NLP (The NLP can be added as a part of add-on **String Compare**. You can find the add-ons to use here: https://testsigma.com/addons):


![the verify if NLP that is available with the addon String Compare](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/verify-with-if-with-string-compare.png)



---