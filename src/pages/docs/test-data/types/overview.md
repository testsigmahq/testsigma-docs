---
title: "Test Data Types"
page_title: "Test Data Types Overview"
metadesc: "This article gives an overview of the various types of test data that can be used during the process of creating a test case in Testsigma."
order: 5.111
page_id: "Test Data Types"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Test Data types supported in Testsigma"
  url: "#test-data-types-supported-in-testsigma"
- type: link
  name: "1. Plain Text"
  url: "#1-plain-text"
- type: link
  name: "2. Parameter"
  url: "#2-parameter"
- type: link
  name: "3. Runtime"
  url: "#3-runtime"
- type: link
  name: "4. Environment"
  url: "#4-environment"
- type: link
  name: "5. Random"
  url: "#5-random"
- type: link
  name: "6. Data Generators"
  url: "#6-data-generators"
- type: link
  name: "7. Phone Number"
  url: "#7-phone-number"
- type: link
  name: "Mailbox"
  url: "#mailbox"
---
Test Data are the inputs that a test case needs to run on. 

A slightly more detailed description is given by the International Software Testing Qualifications Board (ISTQB): “Data created or selected to satisfy the execution preconditions and inputs to execute one or more test cases.”

### **Examples**


Username and Password are test data for a login feature.
Source and Destination are test data for a ticket booking feature. 
Source account and Beneficiary Account numbers are test data for a fund transfer feature. 

Similarly, a lot of test cases require a set of test data on which they would need to run. 
Only if the test passes for all the test data inputs, the feature is considered to be bug free and moved to production. 


---
##**Test Data types supported in Testsigma**

1. Plain Text 
2. Parameter
3. Run Time
4. Environment
5. Random
6. Function 
7. Phone Number
8. Mailbox


We will go through each data type in this document.

This gif depicts how to use the multiple types of test data that can be created during test step creation:

![GIF test data input](https://docs.testsigma.com/images/types/gif-test-data-input.gif)

---
##**1. Plain Text**


With plain text, you can enter the hardcoded text as input data, for example - “1234”,”first name”, etc. Observe the screenshot below.

![plain text test data input](https://docs.testsigma.com/images/types/plain-text-test-data-input.png)

Plain Text Test Data is the most commonly used type of Test data in Testsigma. 

**Usage:** The Test data specified in the Test Steps directly is called Plain Text Test data or Raw Data.

**Example:**

We specify the URL to navigate to at the beginning of the Test Case using the template go to test data as shown below:

go to **http://www.google.com**


Here, the test data i.e URL is specified directly in the Test Step. This is an example of Plain Text Test Data usage.


[[info | NOTE:]]
|There's an additional option available with Plain Text Test Data - the ability to provide blank values as Test Data. To use this functionality, we simply need to replace the test data part with the string '_blank'(without quotes). This will enter a blank value at the field where test data is passed.<br>
|For example, you can use the template type test data in ui identifier with blank test data as shown below:<br>
|type _blank in usernamefield<br>
|The above test step will enter a blank value in the username field Element.


Learn more about [Raw Test Data Type](https://testsigma.com/docs/test-data/types/raw/).



---
##**2. Parameter** 


With parameter test data, you can directly use a parameter available in your test data profile. When you click on the parameter data type, a right-side panel with different available parameters will allow you to choose the specific parameter you need for your test case. 


**Usage:** Parameter Test data is invoked by using the @|Parameter| format where the string Parameter is replaced by the specified parameter name.

![parameter test data input](https://docs.testsigma.com/images/types/parameter-test-data-input.png)

[[info | NOTE:]]
| As a prerequisite, you need to associate your test case with the test data profile you need to use while creating the test case. And, the Test Step will be iterated as many times as there are rows of username parameters in the Test Data Profile.


**Example :**

Multiple Login details are fed into a single Test step using a Test Data Profile that contains a set of usernames and passwords.

While using the command 'type [testdata] in [ui_identifier]' in a Test Step, [testdata] is replaced by "@|username|" where username is the name of the parameter in the Test Data Profile.

Learn more about [Parameter Test Data Type](https://testsigma.com/docs/test-data/types/parameter/).

Learn more about [How to create Test Data Profiles](https://testsigma.com/docs/test-data/create-data-profiles/).

Please refer to this tutorial for more details on performing [Data-driven Testing](https://testsigma.com/tutorials/test-cases/data-driven-testing/).



---
##**3. Runtime** 

Runtime Test Data is used to store data obtained during the run-time i.e during the execution of Test Cases. 

The scope and life of Run-time Test Data are limited to the Test Case Execution.
It is quite different from the above three types in that we don't have an interface to manage Runtime Test Data and it is unnecessary as well since the scope of Runtime Test Data is limited to Test Case Execution.

**Usage:** Store keyword is used to store Run-time data to user-defined variables.


**Example:**

The title of a web page is checked before and after page reload using the runtime data parameter.

The title of a Web Page is stored to a run-time data parameter named page_title using the 'Store title of the current page into a variable [test data]' command in Testsigma.

[test data] part is replaced by $|Runtime| where we replace Runtime by desired variable name i.e page_title.

After reloading the page, the page title is checked again using the 'The page title should be $|page_title|'


Learn more - [Runtime Test Data](https://testsigma.com/docs/test-data/types/runtime/)


---
##**4. Environment** 


The Environment Set is used to store data that is to be used across Execution Environments.

Environment Parameters are stored and managed on the Environments page. 

Its scope is limited to a Project.
Environment Parameter has the highest scope in Testsigma's set of Test Data.
The environment parameter is invoked by using the *|Environment| format where Environment is replaced by the parameter name.


**Example:**

URL and login details for the user in different environments(Production, Testing, Dev, UAT, or Staging servers) are saved in different Environment sets and are available across Executions for the user.

![environment test data input](https://docs.testsigma.com/images/types/environment-test-data-input.png)

Learn more - [Environment Test Data](https://testsigma.com/docs/test-data/types/environment/)

---
##**5. Random** 

Random Test Data can be used to generate random values for usage in the Test Case execution.

It returns an alphanumeric block of data when invoked within a Test Case.
The Random data is invoked by using the ~|Random| format where ~|Random| is replaced by an integer value 1-256 which gets replaced by an alphanumeric character of the specified length during Test Case Execution.

For example, ~|25| is replaced by a 25 character long alphanumeric string while execution.

![random test data input](https://docs.testsigma.com/images/types/random-test-data-input.png)

**Example:**

An alphanumeric string of N random characters is supplied by Testsigma when it sees ~|N| in place of test data in the Test Step.

Learn more - [Random Test Data](https://testsigma.com/docs/test-data/types/random/)

---
##**6. Data Generators**

Test Data Generator Functions are available by default for dynamic Test Data. These Data Generators are invoked by using the !|Data Generator| format where Data Generator is replaced by the actual name.

![function test data input](https://docs.testsigma.com/images/types/function-test-data-input.png)

Learn more - [Test Data Generator](https://testsigma.com/docs/test-data/types/data-generator/) 

---
##**7. Phone Number** 

When doing OTP-based testing, for example, while testing two-factor authentication - test cases might require an input phone number in working condition to receive SMS-based codes. For this purpose, Testsigma provides a test phone number and this data can be used in your test steps using the phone number test data. 

![phone number test data input](https://docs.testsigma.com/images/types/phone-number-test-data-input.png)

Learn more - [Phone Number Test Data](https://testsigma.com/docs/test-data/types/phone-number/)

Refer to this tutorial for more details on automating [SMS based two factor authentication](https://testsigma.com/tutorials/advanced/sms-based-two-factor-authentication-2fa) 


---
##**Mailbox**

There are times when you would need access to a mailbox, this could be when you are testing a workflow that involves sending an OTP to an email or when an activation link is sent. You can do that via Testsigma.

Testsigma provides input test data where you can enter the mail address of a provisioned mailbox. Observe the below screen to understand how to insert an email address into your test. 

A detailed explanation is provided in the next few chapters.

![mailbox test data input](https://docs.testsigma.com/images/types/mailbox-test-data-input.png)

Learn more - [Mail Box Test Data](https://testsigma.com/docs/test-data/types/mailbox/)

Refer to this tutorial for more details on automating [email based two factor authentication](https://testsigma.com/tutorials/advanced/email-based-two-factor-authentication-2fa)





