---
title: "Phone Number Type Test Data"
page_title: "Phone Number type Test Data in Testsigma"
metadesc: "Type phone number data as test data input to your test cases in Testsigma. Learn how to use phone number as test data type for your test cases in Test Automation"
noindex: false
order: 5.118
page_id: "Phone Number type Test Data"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Use Case"
  url: "#use-case"
- type: link
  name: "Using Phone Number Type Test Data"
  url: "#using-phone-number-type-test-data"
---

---

The phone number data type is used to automate two-factor authentication (2FA) and mobile number-based login. Testsigma provides you with a valid mobile phone number on request, with which you can create test cases that require a valid phone number. 

---
## **Prerequisites**
- You should be familiar with regular expressions. Refer to the [regex guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).
- Contact @support@testsigma.com to get a phone number.

---
## **Use Case**
Let’s add 2FA for a test case which includes 2 steps:
- First we enter the phone number to which the OTP will be sent. 
- Fetch the OTP from the SMS received on the phone number. 

---

## **Using Phone Number Type Test Data**
1. Navigate to your test case, add a test step with the NLP ‘Enter ***test data*** in the ***element*** field’. 
![Test Step NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/PhNoNLP.png)

2. Hover over the ***test data*** and select ***% Phone Number*** from the drop down. An overlay showing the list of available phone numbers (allocated to your account) would open up.
![Phone Number](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/phnodropdown.png)

3. Select one of the numbers from the list. This is the number where the OTP SMS will be sent.

We will use the test data generators available in Testsigma to fetch the OTP from the phone number provided in the previous step.

4. Add a test step with the NLP ‘Enter ***test data*** in the ***element*** field’.

5. Hover over the ***test data*** and select ***! Data Generator*** from the drop down.  An overlay showing the list of available data generators would open up.
![Data Generator](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/datadgenNLP.png)

6. Select the **PhoneNumberFunctions** in ***Function Type** dropdown menu, enter the details, and click on **Save**. 
![PhoneNumberFubctions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/phdatagensave.png)

We have successfully created a test case for 2FA authentication. 