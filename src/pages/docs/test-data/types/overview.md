---
title: "Test Data Types"
page_title: "Test Data Types | Testsigma Documentaion"
metadesc: "Explore the power of various Test Data Types in Testsigma for dynamic and robust test scenarios. Reuse, manage, and optimise your testing with ease."
noindex: false
order: 5.111
page_id: "Test Data Types"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Add Test Data in Test Steps"
  url: "#add-test-data-in-test-steps"
- type: link
  name: "Plain Text"
  url: "#plain-text"
- type: link
  name: "Parameter"
  url: "#parameter"
- type: link
  name: "Runtime"
  url: "#runtime"
- type: link
  name: "Environment"
  url: "#environment"
- type: link
  name: "Random"
  url: "#random"
- type: link
  name: "Data Generators"
  url: "#data-generators"
- type: link
  name: "Phone Number"
  url: "#phone-number"
- type: link
  name: "Mail Box"
  url: "#mail-box"
- type: link
  name: "Upload"
  url: "#upload"
---

---

Testsigma enhances your test automation by supporting different test data types. You can input various values and scenarios into your test cases using test data. You require a lot of test data to validate different scenarios in many test cases. A bug-free feature that passes these test data inputs is ready for production.

In simpler terms, test data is the information or values needed to set up and run a test. For instance, the test data for a login feature includes the username and password. The test data for a ticket booking feature includes the source and destination, and for a fund transfer feature, the source account and beneficiary account numbers serve as test data.

This documentation will explain the different test data types supported in Testsigma, their uses, and guide how to use them.

---

## **Prerequisites**

Before using test data type, you must understand specific concepts such as creating [projects](https://testsigma.com/docs/projects/overview/), [test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/), and [test steps](https://testsigma.com/docs/test-cases/create-steps-nl/overview/).

---

## **Add Test Data in Test Steps**

1. Add a new step to the **Test Case** using **NLP** and include a placeholder for the **test data**.
2. Replace the **test data** placeholder by clicking on it, and the **Test Data Types** drop-down menu will appear, as shown below.

Here are the Test Data Types that will appear when you click on test data:
   - **Plain Text**
   - **Parameter**
   - **Runtime**
   - **Environment**
   - **Random**
   - **Data Generator**
   - **Phone Number**
   - **Mailbox**
   - **Upload**

Here is a quick GIF demonstrating the above workflow: ![Select Test Data Types](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/select_testdatatypes.gif)

---

## **Plain Text**

You can use Plain Text as a test data type in Testsigma. It is perfect for entering static and fixed values in your test cases. This type is suitable for providing constant information like usernames, passwords, or text that doesn't change during testing. Raw Data, where the data is directly specified, frequently uses Plain Text test data for test steps. For more information, refer to [Plain Text - Raw Data](https://testsigma.com/docs/test-data/types/raw/).

For example, at the start of the test case, we specify the URL to navigate as shown below:
![Plain Text data type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/plaintext_testdata.png)

In this instance, we use Plain Text test data by directly providing the test data, which is the URL, within the test step.


[[info | **NOTE**:]]
| You can also provide a blank value as test data, an additional option with Plain Text test data. To use this functionality, we must replace the *test data* part with the string **key_blank**. This will enter a blank value in the field where *test data* is passed.
|
| <br>
|
| Here's a quick GIF demonstrating using blank value as test data.
|
| ![Blank Value](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/BlankValue.gif)

---

## **Parameter**

- **Parameter Test Data** enables you to create a list of values for input during test execution and generate parameterised test cases to evaluate your application under different scenarios. This type of testing allows you to use parameters from your test data profile directly.
- When selecting the parameter data type, you can choose the specific parameter required for your test case from a right-side panel with various available parameters. To perform data-driven testing, you can use Parameter Test Data. For more information, refer to the [Parameter Test Data Type](https://testsigma.com/docs/test-data/types/parameter/) and create [Test Data Profiles](https://testsigma.com/docs/test-data/create-data-profiles/) for [Data-driven Testing](https://testsigma.com/tutorials/test-cases/data-driven-testing/).
- To use Parameter Test Data, use the **@ Parameter** type and replace the word "**Parameter**" with the specified parameter name. For example, replace test data with **@ user 1**, where **user 1** corresponds to the parameter name in the **Test Data Profile**. ![Parameter Testdata Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/parameter_testdatatypes.png)

[[info | NOTE:]]
| To use Parameter Test Data in your test case, link your test case to the relevant test data profile. Then, the Test Step will repeat for each row of username parameters in the Test Data Profile.

---

## **Runtime**

- Use the **Store** keyword to store dynamic values, called **Runtime Variables**, that can change during a test. This keyword helps capture and reuse data within the same test Project, especially when dealing with values generated during the test.
- You can use user-defined variables to define and manage Runtime data, and you don't need a separate interface for management. The execution of the test case is specific to the Runtime Test Data. Refer to the [Runtime Test Data](https://testsigma.com/docs/test-data/types/runtime/) for more information. ![Runtime Test Data Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/runtime_testdata_type.png)
- Use a runtime data parameter to check a web page's title before and after a page reload. First, use a command to store the title in a runtime data parameter called "**Travel**". Then, verify the page title after reloading the page using the stored parameter with the statement You should see the page title as **$ Travel**.

---

## **Environment**

- Manage Environment Test Data Type on the Environments page with a limited scope to a project. The Environment Test Data Type contains environment-related information like URLs, API endpoints, and database connection details. You must configure test cases to work in various environments (e.g., development, staging, production).

- You can use the *** Environment** type and substitute the parameter's name for "**Environment**" to use Testsigma's most versatile Test Data Type, the Environment Parameter. Refer to the [Environment](https://testsigma.com/docs/test-data/types/environment/) for more information. ![Environment Test data type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/environment_testdata_type.png)

[[info | EXAMPLE:]]
| During executions, you can access separate Environment sets to store URLs and login details for environments like Production, Testing, Development, UAT, or Staging servers.

--- 

## **Random**

Random Test Data Type generates random data such as numbers, email addresses, and passwords to add variety to your tests and create diverse test scenarios with unpredictable data. You can use the format **~ Random** and replace **~ Random** with an integer value from 1 to 256 to generate random values for Test Case execution. During Test Case Execution, you can specify the length of the alphanumeric character you want to receive by providing an integer value. Refer to the [Random Test Data](https://testsigma.com/docs/test-data/types/random/) for more information. ![Random Test data type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/random_testdata_type.png)

[[info | EXAMPLE:]]
| When you use **~|25|** in your test data, you will replace it with a **25**-character-long alphanumeric string during execution. Testsigma provides a random alphanumeric string of **N** characters when you include **~|N|** in a Test Step.

---

## **Data Generator**

Data Generator test data type generates realistic and structured data for testing purposes, such as names, addresses, and emails. You can obtain dynamic data by using the **Default Test Data Generator Functions**. To use them, you must substitute "**Data Generator**" with the specific name required in the **! Data Generator** format. Refer to the [Data Generator](https://testsigma.com/docs/test-data/types/data-generator/) for more information. ![Data Generator Data Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/datagenerator_datatype.png)

---

## **Phone Number**

Phone Number test data type allows you to create random or predefined phone numbers for testing SMS or phone number validation features. If you need a valid phone number to receive SMS codes for scenarios like two-factor authentication testing, Testsigma provides a test phone number that you can use as test data in your test steps. Refer to the [Phone Number](https://testsigma.com/docs/test-data/types/phone-number/) and [2-step Authentication](https://testsigma.com/tutorials/advanced/sms-based-two-factor-authentication-2fa/) for more information. ![Phone Number Data Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/phonenumber_testdatatype.png)

---

## **Mail Box**

Mailbox test data type generates email addresses and mailbox data for testing email-related functions, particularly for workflows involving OTPs or activation links. Testsigma enables you to use provisioned mailbox email addresses to input test data. Refer to the [Mail Box](https://testsigma.com/docs/test-data/types/mailbox/) for more information. ![Mail Box Data Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mailbox_testdatatype.png)

---

## **Upload**

Upload test data type enables you to easily upload files and applications to your tests using NLP, streamlining the process of adding attachments to your test cases. Refer to the [Upload Files](https://testsigma.com/docs/uploads/upload-files/) & [Apps](https://testsigma.com/docs/uploads/upload-apps/) for more information. ![Upload data type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/upload_testdata_type.png)

---
