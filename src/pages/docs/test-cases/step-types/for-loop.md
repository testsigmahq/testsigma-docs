---
title: "Adding for loops in test cases"
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
  name: "Add for loop to test case"
  url: "#add-for-loop-to-test-case"
- type: link
  name: "Additional actions possible on iteration count"
  url: "#additional-actions-possible-on-iteration-count"
---

---

<em>For Loops</em> are a powerful tool that will let us repeat operations. A <em>for loop </em> loops a block of steps through each dataset (which is a multi-column, multi-row variable) in a test data profile. The loop ends when it reaches the end of the dataset or when a <em>Break</em> is encountered.

Thus using <em>for loops</em>, you can run the same test with a subset of test data. For instance, say you have a test data profile in the format below

![test data example](https://docs.testsigma.com/images/for-loop/test-data-example.png)

If you want to run a test case based on the above test data profile, but you just want to run it for rows 1 to 3, then you use a for loop.

&emsp;

##**Prerequisites**
<ul>
<li><a href="https://testsigma.com/docs/test-cases/manage/add-edit-delete/">Create a test case</a></li>
<li><a href="https://testsigma.com/docs/test-data/create-data-profiles/">Create a test data profile</a></li>
</ul>

&emsp;


##**Add for loop to test case**

<ol>
<li>Create a test case and inside the test case, create test steps to be run before the <em>for loop</em>.</li>
<li>Create the test data profile . Once the test data profile has been created, the <em>for loop </em>can be added in the test case to iterate through the rows of the profile. </li>
<li>Hover over the menu adjacent to the test step on the left. This should open the menu with different test step options as shown below:
<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/select_for_loop.png" alt="for loop"> </li>
<li>Select <em>for loop</em> from the list. This option opens a drop down of NLP’s that can be used inside the test step.
<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_NLP_options.png" alt="for loop nlp options">
<ul>
<li>If you want to iterate through all the data sets of your test data profile from start to end use the below NLP:<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_start_index_to_end_index.png" alt="index start to end"></li>
<li>If you want to start the index at a specific number and end the index at a specific number use the below NLP:<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_specific_index_number.png" alt="specific_index_number"><br>
Refer to the below GIF for the usage of the NLP:<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_specific_index.gif" alt="specific index number"><br>Sometimes you only want to work with a subset of the data sets of your test data profile.The subset of the data sets can be filtered based on data set name and parameter</li>
<li>To filter test data profile based on data set name use the following NLP <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_set_name.png" alt="for loop set name">The data set names can be subjected to advanced filtering based on the keywords <kbd>contains</kbd>,<kbd>startswith</kbd>,<kbd>endswith</kbd>,<kbd>IN</kbd> and the different data types supported by Testsigma. <em>For more information refer to <a href="https://testsigma.com/docs/test-data/types/overview/">data types </a></em>.<br>Refer to the below GIF for the sample usage of the NLP<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_setname_contain.gif" alt="for loop setname contain"></li>
<li>To filter test data profile based on parameter value use the below NLP<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_parameter_value.png" alt="for loop parameter value"><br>Refer to the below GIF for the sample usage of the NLP:<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_parameter_value.gif" alt="parameter value"></li>
<li>Another NLP to filter test data profile based on parameter value is the following: <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_empty_not_empty.png" alt= for loop parameter value empty><br>Refer to the below GIF for sample usage <img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/for_loop_not_empty.gif" alt= "for loop not empty"></li>
</ul>
</li>
<li>Select the suitable NLP to include in the test step. </li>
<li>Finish creating the <em>for loop</em> test step by clicking on <strong>Create</strong> button.</li>
</ol>
<br>


##**Additional actions possible on iteration count**

1. **Store**: Iteration count is the current count that is being iterated in a for loop in Testsigma. This Iteration Count can be stored into a variable for later use. Below is how the syntax for the Store NLP looks like:

![store-iteration-count-test-data-set-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/store-iteration-count-test-data-set-name.png)

2. **if**: The test data set values, from a test data profile being iterated, can be compared within an if condition too. Below screenshot shows the NLP (The NLP can be added as a part of add-on “String Compare”. You can find the add-ons to use here: https://testsigma.com/addons):


![the verify if NLP that is available with the addon String Compare](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/verify-with-if-with-string-compare.png)










