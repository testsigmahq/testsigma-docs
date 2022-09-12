---
title: "Test step type: Step groups"
metadesc: "Step groups in Testsigma and how to use them to author tests at a faster pace"
noindex: false
order: 4.23
page_id: "Test step type: Step groups"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Create a step group"
  url: "#create-a-step-group"
- type: link
  name: "Edit a step group"
  url: "#edit-a-step-group"
- type: link
  name: "Use step group in a test case"
  url: "#use-step-group-in-a-test-case"
- type: link
  name: "Create a data-driven step group"
  url: "#create-a-data-driven-step-group"
- type: link
  name: "Using a data-driven step group in test case"
  url: "#using-a-data-driven-step-group-in-test-case"
- type: link
  name: "Control over step group iterations in test case"
  url: "#control-over-step-group-iterations-in-test-case"
- type: link
  name: "Access test data profile, from parent step, within a data-driven step group"
  url: "#access-test-data-profile-from-parent-step-within-a-data-driven-step-group"
- type: link
  name: "Additional actions possible on iteration count"
  url: "#additional-actions-possible-on-iteration-count"
---

---

Sometimes, a group of steps is common to multiple test cases. 

**For example**:
 1. You cannot perform a fund transfer without **adding an account** first.
 2. You cannot delete a beneficiary account without **adding an account** first. 
 3. Loan disbursement requires **adding an account** first

 Here **adding an account** is a common step.

Traditionally, instead of writing the same redundant code over and over again, test engineers solve this problem by using modular coding, or adding all these repeating steps to a function and calling that function every time it’s needed. In Testsigma, you can do the same using step groups. 

A *Step group* is a group of test steps which can be repeatedly used in multiple test cases. So, instead of using the same steps over and over again, we simply create a test step group and invoke the step group when required.

&emsp;
---
##**Create a new step group**

 1. Navigate to **Test Development > Test Cases > Step Groups**.

![navigate to step group menu](https://docs.testsigma.com/images/step-group/navigate-to-step-group-menu.png)

 2. Click **+ Create Step Group**.
  
![ click create step group button](
https://docs.testsigma.com/images/step-group/click-create-step-group-button.png)

 3. Enter a name, description and choose options in the **Advanced options** menu and finally click the **Create** button.

![Enter details to create step group](https://docs.testsigma.com/images/step-group/enter-details-and-create-step-group.png)

 * This will create a step group with no steps
 * Add test steps required to this step group. A sample screenshot is attached below for your reference: 

![add steps to step group](https://docs.testsigma.com/images/step-group/add-steps-to-step-group.png)

 * And now you will have a step group ready to use.

&emsp;

---
##**Edit a step group**

<h3><strong>To edit a step group, universally, for all related test cases:</strong></h3>

1. Navigate to **Test Development > Test Cases > Step Groups**.
2. Click on the step group you want to edit.
3. Now you can make the changes you want to the step group. The changes will be reflected in all the test cases that use the step group.

The number of test cases impacted by the changes in a step group will be visible on the step group page, for example, in the screenshot below, any change in the step group will impact 4 test cases: 

![the number of test cases impacted by a change in the step group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/edit_step_group.png)

<h3><strong>To edit a step group for a specific test case:</strong></h3>

1. Navigate to **Test Development > Test Cases**.
2. Click on the specific test case for which you want to edit the step group.
3. Inside the test case, go to the step group you want to edit.
4. You can spot edit any test data or element being used in the step group. After editing click outside the step to save the changes.


<ul>
 <li>To spot edit test data: <br>Click on the test data to see the type of test data that can be added to the step.Select the type of test data you want to add and proceed. </li>
</ul>

![edit test data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/spot_edit_test_element.png)
<ul>
<li> To spot edit element:<br>
Click on the element the required field should become editable.You can either create a new element or edit the existing element.</li>
</ul>


![edit element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/image-injection/edit_element_step_groups.png)

<br>Alternatively, you can edit the element name inline,refer the attached GIF to see the changes:

![element spot edit in a step group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/step-group-element-spot-edit.gif)

**To edit the test data profile associated with a for loop in a step group**

1. Navigate to **Test Development > Test Cases**.
2. Click on the specific test case for which you want to edit the step group.
3. Inside the test case, go to the step group you want to edit.
4. Inside the step group, go to the *for loop* for which you want to edit the associated test data profile.
5. Click on the **Edit** button corresponding to the *for loop* and change the associated  test data profile. For example, as also can be seen in the below GIF: 

![edit the test data profile associated with a for loop in a step group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/for_loop_test_case_gif.gif)


&emsp;

---

##**Create a step group from a test case**

1. Navigate to a test case.
2. Select the steps that you want to create a step group from.
3. Once you start selecting the test steps, the **+ Create Step Group** will appear at the top right of the test steps, as also shown in the screenshot below:

![create step group from a test case button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/create-step-group-button.png)

  * If you select consecutive test steps then you will see a pop-up as below:

![popup - create and replace button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/pop-up-with-create-and-replace-button.png)

  while if you don't select consecutive test steps then the pop-up that appears won't show you the **Create and Replace** button as shown below.

![popup - create button only](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/pop-up-with-create-button-only.png)

  * If you click on the **Create** button, a new step group with the selected test steps and the given name would be created.

  * If you click on the **Create and Replace** button, a new step group with the selected test steps and the given name would be created and the selected test steps would be replaced by the created step group.


  Below is a GIF demonstrating how the create and replace step-group functionality works:

![GIF - create and replace stepgroup](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/gif-create-and-replace-stepgroup.gif)


---
##**Use step group in a test case**

 1. Click on test case and open the test case that you need to author as shown in the screenshot below:

![navigate to test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/navigate-to-test-case.png)

 2. Clicking on the specific test case will open the test case details page
  
![test case details page highlight the option to open step type menu](https://docs.testsigma.com/images/step-group/test-case-details-page-to-open-step-type-menu.png)

 3. From the left side dropdown, select **Step group**.

![click on test step type menu](
https://docs.testsigma.com/images/step-group/click-on-test-step-type-menu.png)

![click on test step type step group](https://docs.testsigma.com/images/step-group/click-on-test-step-type-step-group.png)

 4. From the list of step groups, select the step group you need. In this case, we have only created one step group and hence only one is visible in the drop-down.

 * Once you have selected the step group, the step group description and link would be visible too. As shown in the screenshot below:

 ![step group description after selection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/step-group-description-after-selection.png)

Now you are ready to use the step group in your test case

&emsp;

Observe the GIF below to understand how to create a step group.

![ gif showing how to create step group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/gif-create-step-group.gif)



---
##**Create a data-driven step group**
<br>
Just like data-driven test cases, you can create data-driven step groups which can be utilized like standard components across test cases 

  1. When creating a step group, select the **Data-driven** toggle button, specify the test data profile you want to use, and the iterations you intend to use in this step group.
     ![Data Driven Step Group](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/data-driven-step-group-updated.png)
  2. Now add the NLP steps where you want to iterate through the test data profiles in the test case just like you would for a data-driven test case.
     <br/>In our example below, we are iterating over multiple mobile phone numbers and emails
     ![Data Driven Step Group Details](https://docs.testsigma.com/images/step-group/step-group-details.png)

Your data-driven step group is ready for use across multiple test cases.


---
##**Using a data-driven step group in test case**
  You can create a vanilla test case or a data-driven test case on test sigma and add the data-driven step group to the test case like in the example below.
     <br/>
     Adding data-driven step groups to a data-driven test case allows iterating through multiple data sets via the step group for every single iteration of your data-driven test case. 
     <br/>
     Adding step groups to the test case can be done using step type dropdown.
     ![Data Driven Step Group Details](https://docs.testsigma.com/images/step-group/step-group-as-step-on-test-case.png)
     ![Data Driven Step Group Details on test case](https://docs.testsigma.com/images/step-group/step-group-on-test-case.png)


---
##**Control over step group iterations in test case**
 
  There may be situations where out of the *100 sets* in the test data profile attached to your step group, you want to iterate from *set 5* to *set 10* in your data-driven step group only and not all of them.
  
  You can use the following restricted *Runtime variables* to specify which sets in from the step group data profiles you want to iterate through.

  <kbd>RunTime _TestDataSet_ Start</kbd><br/>
  <kbd>RunTime _TestDataSet_  End</kbd>

  1. When creating a data-driven step group ensure you select the option **Overwrite Test Data Set with Runtime Variable** like in the image below:
     ![Control Step Group Data Driven with runtime data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/step-group-runtime-data-updated.png)
  2. Use the *store NLP* instructions to assign set names to the _RunTime_TestData_Set_Start = Set Name to START iteration from [Case Sensitive]_
     <br/>Use the *store NLP* instructions to assign set names to the _RunTime_TestData_Set_End = Set Name to END iteration from [Case Sensitive]_
     ![Store NLP to control Step Group Data Driven](https://docs.testsigma.com/images/step-group/step-group-store-run-time-data.png)
  3. We will automatically use the value set in these variables when we reach the step group to identify start and end iteration set names.
     ![Step Group Data Driven on test case](https://docs.testsigma.com/images/step-group/step-group-on-test-case-part2.png)

---
##**Access test data profile, from parent step, within a data-driven step group:**

When you create a data-driven step group, you may want to use the step group within loops for example a *for loop*. With Testsigma, you can access the test data profile that was passed in the parent test step. 

To understand this better, let us have an example test case where we are testing if a user can login successfully for the given usernames and passwords. The usernames and passwords are being passed via associated test data profiles.

**Prerequisites**:

1. A data-driven step-group. *For more information, refer to [create a data driven step group](https://testsigma.com/docs/test-cases/step-types/step-group/#create-a-data-driven-step-group)*.

2. A data-driven test case. *For more information, refer to [create a data driven test case](https://testsigma.com/tutorials/test-cases/data-driven-testing/)*.
3. You should be familiar with *for loops* and test data profiles in Testsigma. *For more information refer to [for-loops](https://testsigma.com/docs/test-cases/step-types/for-loop/)  and [test data profiles](https://testsigma.com/docs/test-data/create-data-profiles/)*.

**Steps**

1. Create multiple test data profiles that will have different sets of usernames and passwords. 
2. Create a data-driven step group that would login to a website using the usernames and passwords passed via the associated test data profile. For our test case we have created a data-driven step group that looks like below:

![An example data-driven step group for login](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/data-driven-login-step-group.png)

3. Now create a data-driven test case that would use a different test data profile of usernames and passwords.
4. Inside the test case, create a *for loop* using a third test data profile of usernames and passwords.
5. Inside the *for loop*, add the step group create in *step 2*.
6. Now try to edit the username and password parameters in the added step group. You will see that you will be able to select the test data profiles being passed to the parent test step too as also shown in the screenshot below:

![The list of test data profiles available to a step group inside a for loop](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/lists-available-with-TDP-parent-forloop.png)


---
##**Additional actions possible on iteration count**


1. **Store**: In a step group, when a test data profile is being iterated - an additional action is possible. The iteration count can be stored into a variable for later use. (Iteration count is the current count that is being iterated over the associate test data profile in the step group in Testsigma.) Below is how the syntax for the Store NLP looks like:

![store-iteration-count-test-data-set-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/store-iteration-count-test-data-set-name.png)


2. **If**: The test data set values, from a test data profile being iterated, can be compared within an *if condition* too. Below screenshot shows the NLP (The NLP can be added as a part of add-on **String Compare**. You can find the add-ons to use here: https://testsigma.com/addons):


![the verify if NLP that is available with the addon String Compare](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/verify-with-if-with-string-compare.png)





