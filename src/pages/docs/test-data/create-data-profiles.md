---
title: "Create Test Data Profiles"
metadesc: "How to create test data profiles that can be used in a test case in Testsigma."
order: 5.21
page_id: "Create Test Data Profiles"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Test Data Required -"
  url: "#test-data-required--"
- type: link
  name: "How to create a test data profile:"
  url: "#how-to-create-a-test-data-profile"
- type: link
  name: "Steps to follow to create test data that is expected to fail the test case:"
  url: "#steps-to-follow-to-create-test-data-that-is-expected-to-fail-the-test-case"
- type: link
  name: "How to use this data in your test case"
  url: "#how-to-use-this-data-in-your-test-case"
- type: link
  name: "Pre-requisites:"
  url: "#pre-requisites"
---
---

This document explains how to create a Test Data Profile in Testsigma, using an example test case of signing up for Spotify. 

Let’s begin:

**Application Under Test** - https://travel.testsigma.com/signup

## **Test Data Required -**

Let’s say this data is required every time you test the sign up on Spotify:
1. Email
2. Username
3. Date of Birth
4. Password
5. Gender

The test data set needs to contain thousands of combinations of the above test data to ensure that millions of potential Spotify users can sign up without any issues. To test this signup for 1000 test data sets, instead of manually hardcoding each, you can create test data profiles.

In this example, we show you how to create a subset of the Spotify sign-up test data with just 5 rows. 

Then there will be times when you will write test data for which the test case should fail. We will discuss that scenario in the section ‘Expected-to-fail Test Data’.

## **How to create a test data profile:**

Follow these steps to create and use Test Data Profiles in your Tests.

1. Navigate to Test Development > Test Data Profiles
2. Click on the ‘Create’ button on the top right:

    ![create button on the all test data profiles page for creating test data profiles in Testsigma](https://docs.testsigma.com/images/create-data-profiles/all-test-data-profiles-creating-create-button.png)

3. On the ‘Create Test Data Profile’  page that opens, go to the text field ‘Name’ and enter the name you want to assign to your test data profile.
4. Enter names for the data set you want to create. Here we added names  for two data sets “Valid” and “Invalid”

    ![set names while creating test data profiles in Testsigma](https://docs.testsigma.com/images/create-data-profiles/creating-test-data-profiles-set-name.png)

5. Enter the names of columns that will be the set of values that each data set will have, more columns can be added by clicking on the ‘+’ button on the top right.

    ![adding columns to set names while creating test data profiles in Testsigma](https://docs.testsigma.com/images/create-data-profiles/creating-test-data-profiles-adding-columns.png)

  
6. Once the columns are added, add the corresponding

    ![adding values to columns while creating test data profiles in Testsigma](https://docs.testsigma.com/images/create-data-profiles/creating-test-data-profiles-adding-values-to-columns.png)

7. Click on the Create button on the top right to finally save the created test data profile

Alternatively, below is a quick gif that demonstrates the workflow to create a test data profile

   ![gif demonstrating creating test data profiles in Testsigma](https://docs.testsigma.com/images/create-data-profiles/creating-test-data-profiles-gif.gif)

## **Steps to follow to create test data that is expected to fail the test case:**
The steps to create test data that is expected to fail a test case is similar to the steps to create general test data that would pass the test case. The difference is just that the toggle button under the column “EXPECTED TO FALL” needs to be enabled and would look like the screenshot below:

   ![creating test data profile to fail a test case in Testsigma](https://docs.testsigma.com/images/test-data/creating-test-data-profile-to-fail-test-case.png)


## **How to use this data in your test case**
Below, we discuss an example that associates the test data with a test case. 

## **Pre-requisites:**


You should know how to create a test case, if not, please refer to the document [here](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

## Step 1: Associate this test data profile with your test case

* Create a new test case
* In the advanced options menu, choose the test data profile from the dropdown
* Also enable the data-driven testing toggle button
* Click create

![associate a test data profile to a test case in Testsigma](https://docs.testsigma.com/images/test-data/associate-test-data-profile-to-test-case.gif)

## Step 2: Insert the test data into your test case
* Create test steps as below 
Navigate to https://travel.testsigma.com/signup

  Enter **test data** in the **elements** field

* Delete test data placeholder from the above line and choose parameters from the drop-down. 

* Choose your test data from the right-side panel.

The above workflow is depicted in the below gif too:

   ![gif demonstrating the insertion of test data into a test case in Testsigma](https://docs.testsigma.com/images/test-data/insert-test-data-to-test-case.gif)

The test data can also be imported from an excel sheet, explained [here](https://testsigma.com/docs/test-data/import-data-profiles/).


