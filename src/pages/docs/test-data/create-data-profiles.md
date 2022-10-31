---
title: "Create test data profiles"
metadesc: "How to create test data profiles that can be used in a test case in Testsigma."
noindex: false
order: 5.21
page_id: "Create Test Data Profiles"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Test data required -"
  url: "#test-data-required--"
- type: link
  name: "Create a test data profile"
  url: "#create-a-test-data-profile"
- type: link
  name: "Steps to follow to create test data that is expected to fail the test case:"
  url: "#steps-to-follow-to-create-test-data-that-is-expected-to-fail-the-test-case"
- type: link
  name: "How to use a test data profile in your test case"
  url: "#how-to-use-a-test-data-profile-in-your-test-case"
- type: link
  name: "Additional Actions Possible on Test Data Set Name"
  url: "#additional-actions-possible-on-test-data-set-name"
---

---

This document explains how to create a test data profile in Testsigma, using an example test case of signing up for Spotify. 

Let’s begin:

**Application under test** - https://travel.testsigma.com/signup

---
##**Test data required -**

Let’s say this data is required every time you test the sign up on Spotify:
1. Email
2. Username
3. Date of Birth
4. Password
5. Gender

The test data set needs to contain thousands of combinations of the above test data to ensure that millions of potential Spotify users can sign up without any issues. To test this signup for 1000 test data sets, instead of manually hardcoding each, you can create test data profiles.

In this example, we show you how to create a subset of the Spotify sign-up test data with just 5 rows. 

Then there will be times when you will write test data for which the test case should fail. We will discuss that scenario in the section **Expected to fail test data**.

---
##**Create a test data profile:**
Follow these steps to create and use test data profiles in your tests.

1. Navigate to **Test development > Test data profiles**
2. Click on the **Create** button on the top right.

    ![create button on the all test data profiles page for creating test data profiles in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/create-data-profiles/create_test_data_profile.png)

3. On the **Create Test Data Profile**  page that opens, go to the text field **Name** and enter the name you want to assign to your test data profile.
4. Enter names for the data set you want to create. Here we added names  for two data sets **Valid** and **Invalid**.

    ![set names while creating test data profiles in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/create-data-profiles/valid_invalid_data_profile.png)

5. Enter the names of columns that will be the set of values that each data set will have, more columns can be added by clicking on the **+** button on the top right.

    ![adding columns to set names while creating test data profiles in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/create-data-profiles/columns_test_data_profile.png)

  
6. Once the columns are added, add the corresponding

    ![adding values to columns while creating test data profiles in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/create-data-profiles/test_data_profile_create.png)

7. Click on the **Create** button on the top right to finally save the created test data profile.

Alternatively, below is a quick GIF that demonstrates the workflow to create a test data profile

   ![gif demonstrating creating test data profiles in Testsigma](https://docs.testsigma.com/images/create-data-profiles/creating-test-data-profiles-gif.gif)

---
##**Steps to follow to create test data that is expected to fail the test case:**
The steps to create test data that is expected to fail a test case is similar to the steps to create general test data that would pass the test case. The difference is just that the toggle button under the column **EXPECTED TO FAIL** needs to be enabled and would look like the screenshot below:

   ![creating test data profile to fail a test case in Testsigma](https://docs.testsigma.com/images/test-data/creating-test-data-profile-to-fail-test-case.png)


---
##**How to use a test data profile in your test case**

Below, we discuss with an example on how to associate the test data profile with a test case. 


## Step 1: Associate test data profile with your test case 

1. Create a new test case or edit an exisiting test case. *For more information refer to [create test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/)*.
2. In the **Advanced options** menu, select the test data profile from the dropdown.
3. Enable the **Data-driven** testing toggle button. Once you have enable the data driven testing in your test case, you can narrow and customize the various data sets from your test data profile that are being used in your test case using the filters *iteration*, *parameter*, *set name*.
<ul>
<li>Iteration: This type of filtering is applicable only to sequential data sets. The data sets can be filtered using the filter operations <em>greater than</em>, <em>less than</em>, or <em>between</em>.</li>
<li>Set name: This type of filtering is applicable for non sequential data sets. Here the data sets are filtered by data set names using the operations <em>between</em>, <em>equals</em>, <em>contains</em>, <em>starts with</em>, <em>ends with</em>. Any data set names containing the set name or part of it are used in the test case.</li>
<li>Parameter:This type of filtering is applicable for non sequential data sets. Here the data sets are filtered using parameters used in data sets.</li>
</ul>
4. Create the test case.

![associate a test data profile to a test case in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/create-data-profiles/data_driven_test.gif)

---
## Step 2: Insert the test data into your test case

Create test steps as below :<br>

1. Navigate to https://travel.testsigma.com/signup
2. Enter **test data** in the **elements** field
3. Delete test data placeholder from the above line and choose parameters from the drop-down. 
4. Choose your test data from the right-side panel.

The above workflow is depicted in the below GIF too:

   ![gif demonstrating the insertion of test data into a test case in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/create-data-profiles/using_data_profile.gif)

Test data profile can also be included in test steps using *while loops* and *for loops*. *For more information refer to [while loop](https://testsigma.com/docs/test-cases/step-types/while-loop/) and [for loop](https://testsigma.com/docs/test-cases/step-types/for-loop/)*

The test data can also be imported from an excel sheet, explained [here](https://testsigma.com/docs/test-data/import-data-profiles/).


You can now also create Data-Driven Step Groups to use powerful iterative and reusable components inside a test case. [Click Here](https://testsigma.com/docs/test-cases/step-types/step-group/#create-a-data-driven-step-group) to understand how

---
##**Additional actions possible on test data set name**


1. **Store**: When a test data profile is associated with a test case. The test data set name associated with the test data profile can be stored into a variable for later use as well. Below is how the syntax for the Store NLP looks like:

![store-iteration-count-test-data-set-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/store-iteration-count-test-data-set-name.png)

2. **if**: The test data set values, from a test data profile being iterated, can be compared within an if condition too. Below screenshot shows the NLP (The NLP can be added as a part of add-on “String Compare”. You can find the add-ons to use here: https://testsigma.com/addons):


![the verify if NLP that is available with the addon String Compare](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/verify-with-if-with-string-compare.png)

