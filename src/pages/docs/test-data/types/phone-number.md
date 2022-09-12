---
title: "Phone Number type Test Data"
page_title: "Phone Number type Test Data in Testsigma"
metadesc: "How to use Phone Number Test Data type to automate test scenarios that contain two factor authentication"
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
  name: "Creating Test Steps"
  url: "#creating-test-steps"
- type: link
  name: "Step 1"
  url: "#step-1---we-will-enter-the-phone-number-provided-by-testsigma-using-the-phone-number-test-data-type-using-a-test-step"
- type: link
  name: "Step 2"
  url: "#step-2---we-will-use-the-test-data-generators-available-in-testsigma-to-fetch-the-otp-from-the-phone-number-selected-in-the-previous-step"
---

---

Phone Number test data can be used to automate:
* Login process that involves Two Factor authentication(2FA).
*  Any application which requires a mobile number based login - Valid phone number to be entered from which later an SMS can be read and processed.

Testsigma provides you with a valid mobile phone number on request, with which you can author any test case that requires a valid phone number.

---
##**Prerequisites**

Provisioned mobile phone numbers - [Contact Support](http://support@testsigma.com) or talk to us on Chat and we will provision phone numbers for your account.

Your should be familiar with Regular expressions. If not, [refer to Regex guide - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---
##**Creating Test Steps**

For 2FA Authentication, we need to perform two steps:
* Step 1 - Enter the phone number to which the OTP will be sent
* Step 2 - Fetch the OTP from the SMS received on the Phone number

---
##**Step 1 -** We will enter the phone number provided by Testsigma using the Phone Number test data type, using a Test Step.

1. In your Test Case, add a Test Step to enter the Phone number in the Phone number field on your Application page.

2. Clear the ‘test data’ placeholder and select the %|Phone Number| Test Data Type from the suggestions list.
An overlay showing the list of available phone numbers(allocated to your account) would open up.

![Phone numbers list overlay on Phone number Test Data while adding Test](https://docs.testsigma.com/images/phone-number/create-test-step-update-test-data-phone-number-test-data.png)

3. Select one of the numbers from the list. This is the number where the OTP SMS will be sent.

Check the below illustration to understand how we can use the Phone number Test Data in Test Cases.

![Phone number Test Data in Test Steps](https://docs.testsigma.com/images/phone-number/phone-number-test-data-test-steps.gif)

---
##**Step 2 -** We will use the Test Data Generators available in Testsigma to fetch the OTP from the phone number selected in the previous step.

1. Add a Test Step to enter the OTP Code in the OTP Field

2. Clear the ‘test data’ placeholder and select the !|Function| Test Data Type

![Test Data types suggestion list while adding Test Step](https://docs.testsigma.com/images/phone-number/add-step-test-data-type-suggestions-list.png)

3. Search and select the Test Data generator function **!|PhoneNumberFunctions - getOTP|**

4. Enter the required arguments for the function and create the Test Step.

![Adding Test Step to fetch SMS OTP using Data Generator function](https://docs.testsigma.com/images/phone-number/create-test-step-getsmsotp.png)



