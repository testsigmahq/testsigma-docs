---
title: "Test Data - Parameter"
metadesc: "Use parameter test data input from your test data profile in Testsigma. Learn how to use parameter from you test data profile for Test Automation"
noindex: false
order: 5.113
page_id: "Test Data - Parameter"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Here is how it works"
  url: "#here-is-how-it-works"
- type: link
  name: "Associate the test data profile with the pre-existing test case"
  url: "#associate-the-test-data-profile-with-the-pre-existing-test-case"
---

---

A parameter test data type is an input that is injected into your test from a test data profile.

![Test data profile image for test parameters](https://docs.testsigma.com/images/parameter/test-data-profile-test-case-image-test-parameters.png)

---
## **Here is how it works** 

1. A user creates a test data profile :

    **a.** Navigate to the **Test Data Profile** page under Test Development.

    **b.** Create a new Test Data profile with different column names.

2.  [Create a test case](https://www.testsigma.com/docs/test-cases/manage/add-edit-delete/)

    **a.** In the test case, add a test step with **test data**.

    **b.** Delete the test data placeholder and choose Parameter from the dropdown.

    **c.** Choose one of the parameters that you just created.

    **d.** Insert the parameter into the test case.

Let’s see how to insert a username parameter from a test data profile: 

1. Create a test data profile by navigating to **Test Development > Test Data Profile > Create**.

    ![create test data profile](https://docs.testsigma.com/images/parameter/create-test-data-profile.png)

    ![gift to create test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpparameter.gif)

2. Create a test case by navigating to **Test Development → Test Cases → Create**

    ![navigate to create test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/types/parameter/navigate-to-create-test-case.png)

    1. Create a test case by entering a name, description
    2. Choose the newly created test data profile from advanced options
    3. Click Create

    ![create new test case](https://docs.testsigma.com/images/parameter/create-new-test-case.png)


    4. Testsigma will automatically navigate you to the test case details/test steps page
    5. Here create the first step for navigating to the application
    6. In the next step, choose the NLP containing “test data” like Enter test data in the ui identifier field

    ![choose nlp with test data](https://docs.testsigma.com/images/parameter/choose-nlp-with-test-data.png)

    7. Now delete the “test data“ placeholder and choose Parameter from the drop-down options

    8. Insert the parameter from the test data profile into the test case

    ![gif to use parameter type test data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/types/parameter/gif-use-parameter-type-test-data.gif)

Now, your test case will use the parameter from your test data profile.

---
## **Associate the test data profile with the pre-existing test case**

![gif to associate parameter type test data with a test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/parameter.gif)

---
## **Using Multiple Test Data Profiles in a Test Case**

When you associate multiple test data profiles with a test case, you have the capability of using any test data parameter associated with any of the associate test data profiles in a test step. 


For nested steps - any parameter from the test data profile associated with the parent test step can be used. 


The test data parameter(in the associated test data profiles) can be iterated in a step group, a for loop, or, a while loop. It can also be used with an if condition or any other NLP.

Below is a GIF demonstrating the use of three Test Data Profiles in one Test Case three nested for loops.

 ![A gif demonstrating creation of 3 nested for loops with 3 test data profiles](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/types/parameter/3TestDataProfilesInATestCase.gif)

---