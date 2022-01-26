---
title: "Mailbox type Test Data"
page_title: "Mailbox type Test Data in Testsigma"
meta_desc: "How to use Mailbox Test Data type to automate test scenarios that involve Email OTPs for two factor authentication"
order: 5.119
page_id: "Mailbox type Test Data"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Creating the Test Steps"
  url: "#creating-the-test-steps"
- type: link
  name: "Step 1"
  url: "#step-1---we-will-enter-the-email-address-provided-by-testsigma-using-the-mailbox-test-data-type-using-a-test-step"
- type: link
  name: "Step 2"
  url: "#step-2---we-will-use-the-test-data-generators-available-in-testsigma-to-fetch-the-otp-from-the-mailbox-selected-in-the-previous-step"
---

Mailbox test data in Testsigma can be used when:
* You have to receive an email and validate the content to understand if the OTP delivered in the email is proper. 
* You need to validate content for emails in different languages.
* You want to check if a user will be able to read an entire marketing email within a specified amount of time.

All of these use cases have one thing in common - A mailbox. Your test needs to be able to access the mailbox, check if the mail has been received, open the email, read it and process it.

In Testsigma, this feature is built-in. Here’s how you can use it.

---
##**Prerequisites**

Provisioned mailbox - Contact [Testsigma Support](mailto:support@testsigma.com) or use the Instant Chat option and we will  provision a mailbox for you.

You should also be familiar with Regular expressions. If not, refer to [Regex guide - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---
##**Creating the Test Steps**

For 2FA Authentication, you need to perform two steps:
* Step 1 - Enter the Email address where the OTP is sent
* Step 2 - Fetch the OTP from the Email received on the entered Email address

---
##**Step 1 -** We will enter the Email Address provided by Testsigma using the Mailbox test data type using a Test Step.
1. In your Test Case, add a Test Step to enter the Email in the Email field on your Application page.

2. Clear the ‘test data’ placeholder and select the &|Mailbox| Test Data Type from the suggestions list.
An overlay showing the list of available Email addresses will open up.

![Phone numbers list overlay on Mailbox Test Data while adding Test](https://docs.testsigma.com/images/mailbox/create-test-step-update-test-data-mailbox-test-data.png)

3. Select one of the Email addresses from the list. This is the Email address where the OTP Email will be sent.


Check the below illustration to understand how we can use the Mailbox Test Data in Test Cases.

![Mailbox Test Data in Test Steps](https://docs.testsigma.com/images/mailbox/mailbox-test-data-test-steps.gif)

---
##**Step 2 -** We will use the Test Data Generators available in Testsigma to fetch the OTP from the Mailbox selected in the previous step.

1. Add a Test Step to enter the OTP Code in the OTP Field

2. Clear the ‘test data’ placeholder and select the !|Function| Test Data Type

![Test Data types suggestion list while adding Test Step](https://docs.testsigma.com/images/mailbox/add-step-test-data-type-suggestions-list.png)

3. Search and select the Test Data generator function **!|MailboxFunctions - getOTP|**

4. Enter the required arguments for the function and create the Test Step.

![Adding Test Step to fetch Mail OTP using Data Generator function](https://docs.testsigma.com/images/mailbox/create-test-step-getmailotp.png)




