---
title: "Adding For Loop in Test Cases"
metadesc: "How to create For Loop test steps while creating a test case in Testsigma"
noindex: false
order: 4.25
page_id: "Adding For Loop in Test Cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "How to create a For loop test step"
  url: "#how-to-create-a-for-loop-test-step"
- type: link
  name: "Add For Loop to Test Case"
  url: "#add-for-loop-to-test-case"
- type: link
  name: "Additional Actions Possible on Iteration Count"
  url: "#additional-actions-possible-on-iteration-count"
---

---


Using For loops, you can run the same test with a subset of test data. For instance, say you have a test data profile in the format below

![test data example](https://docs.testsigma.com/images/for-loop/test-data-example.png)

If you want to run a test case based on the above test data profile, but you just want to run it for rows 1 to 3, then you use a for loop.

&emsp;

---
##**Prerequisites**
This document assumes that you know how to create a test case, if not, please refer to the document [here](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)

&emsp;

---
##**How to create a For loop test step**

### **Create a Test Data Profile**

Start by creating a test data profile with ‘n’ rows:

 1. Navigate to Test Development
 2. Click on Test Data Profiles and click Create

![navigate to test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/navigate-to-test-data-profile1.png)

 3. Enter details in the Test Data profile, a sample data profile is attached in the screenshot below for your reference: 

![test data profile creation](https://docs.testsigma.com/images/for-loop/test-data-profile-creation.png)

 4. Once the test data profile has been created, the for loop can be added in the test case to iterate through the rows of the profile. 

&emsp;

---
##**Add For Loop to Test Case**

 1. Create a test case 
 2. Create test steps to be run before the for loop

![create test steps](https://docs.testsigma.com/images/for-loop/create-test-steps.png)

 3. Hover over the menu adjacent to the test step on the left. This should open up the menu with different test step options

![hover over test step menu](https://docs.testsigma.com/images/for-loop/hover-over-test-step-menu.png)

 4. Choose “For Loop” from the drop-down menu

![choose test data profile start end](https://docs.testsigma.com/images/for-loop/choose-test-data-profile-start-end.png)

 5. Select the Test Data profile that you want to iterate over in the For loop. In this case, the test data profile we have chosen is “Test Data Example”
You can choose to start and end the iteration in between with the following options - Loop start and Loop end
    
    1. Loop Start: Mention the serial number of Test Data set in the associated Test Data profile where the iteration is to start from
    2. Loop End: Mention the serial number of Test Data set in the associated Test Data profile where the iteration is to end

&emsp;

 6. Now, finish creating the For loop Test Step by clicking on ‘Create’ button

 7. The For loop step has been added and we can continue adding Steps inside the For loop now. To do that, hover over the For loop and click on the “Add Step” button as also shown in the screenshot below

![hover over test step for loop](https://docs.testsigma.com/images/for-loop/hover-over-test-step-for-loop.png)

This will create a new test step 4.1 which will be a part of the for loop which is step 4

![new step under for loop](https://docs.testsigma.com/images/for-loop/new-step-under-for-loop.png)

 8. In test step 4.1, write the step that needs to be parameterized and looped

    * To perform this, choose the action, example - Enter <span style="color:blue">test data</span> in the <span style="color:green">element field</span>
    * Delete test data in the action text and choose the @|Parameter| from the suggestion
    * Choose the parameter from the same test data profile selected in the for loop as shown below

![create new step under for loop](https://docs.testsigma.com/images/for-loop/create-new-step-under-for-loop.png)

 9. Similarly mouseover on the 4.1 step again to add more steps inside For Loop
 10. When you run the test case, the results will be shown like this:

![run results for loop](https://docs.testsigma.com/images/for-loop/run-results-for-loop.png)

[[info | Note:]]
|There can be Step Groups or If-Else statements inside the For loop.

Here’s a gif to demonstrate how to add for loop test steps into your test case.

![gif choose for loop test type](https://docs.testsigma.com/images/for-loop/gif-choose-for-loop-test-type1.gif)

![gif test data profile for loop test type](https://docs.testsigma.com/images/for-loop/gif-test-data-profile-for-loop-test-type.gif)

---

##**Additional Actions Possible on Iteration Count**

1. **Store**: Iteration count is the current count that is being iterated in a for loop in Testsigma. This Iteration Count can be stored into a variable for later use. Below is how the syntax for the Store NLP looks like:

![store-iteration-count-test-data-set-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/store-iteration-count-test-data-set-name.png)

2. **if**: The test data set values, from a test data profile being iterated, can be compared within an if condition too. Below screenshot shows the NLP (The NLP can be added as a part of add-on “String Compare”. You can find the add-ons to use here: https://testsigma.com/addons):


![the verify if NLP that is available with the addon String Compare](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/verify-with-if-with-string-compare.png)










