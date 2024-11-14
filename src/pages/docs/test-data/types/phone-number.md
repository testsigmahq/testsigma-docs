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
- type: link
  name: "Set Up and Use Message Forwarding"
  url: "#set-up-and-use-message-forwarding"
---

---

The phone number data type is used to automate two-factor authentication (2FA) and mobile number-based login. Testsigma provides you with a valid mobile phone number on request, with which you can create test cases that require a valid phone number. 

---

> ## **Prerequisites**
> 
> - You should be familiar with regular expressions. Refer to the [regex guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

[[info | NOTE:]]
| - You can enable Phone Number for your account by contacting **support@testsigma.com** or using the **instant chat** option.
| - You can now access the Phone Numbers outside of test executions. This allows you to retrieve messages, OTPs, and authentication codes when you enable the toggle.
| - For test executions, the toggle does not affect the execution. The test will continue to run regardless of whether the toggle is enabled or not.


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


---


## **Set Up and Use Message Forwarding**

Providing phone numbers for OTP and login purposes is restricted in certain countries. In this case, you can use Testsigma SMS forwarder app that sends SMS messages to a designated mailbox, and you retrieve the OTPs from the mailbox. This section discusses how to set up the Testsigma SMS forwarder app and perform OTP verifications using this app.

---

> ## **Prerequisites**
>
> - You should have Testsigma SMS Forwarder application.


---

### **Install the App & Setup the Account**

1. Install the app on a device.
   
2. Click on the icon in the top-left corner to access settings.
   
3. Sign in to the app. 
   
4. If you're using Google accounts, select the Gmail API.


### **Filter Set-up**

1. Tap on **Filters** and click the plus icon.

2. On the **Set up recipients** screen, click the plus icon.

3. On **Add** overlay, tap on Enter Phone Number. 

4. Enter the **phone number** to which you want to forward messages.


[[info | **NOTE**:]]
| Alternatively, you can enter the automation email ID to forward messages to an email address.

5. Swipe left to access the **Forwarding conditions** screen. Here, set the forwarding rule. You can specify rules for messages from a specific number or messages containing specific text.

6. Swipe left to access **Change the content** screen. Here, you can add the phone number of the initial sender of the message and specific words of your choice. 

7. Swipe left to access the **More Settings** screen. Here, you can change the filter name and enable options for notifications and results. 

8. On completing all the steps, click **Save**.

Here's a GIF demonstrating how to install, add phone numbers, and set up filters for message forwarding.
![SMS Forward Setup](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sms.gif)


---


## **Use Case for Message Forwarding**

1. Navigate to the URL
  
2. Click on Login or Sign Up

3. Enter phone number in the phone number input field

4. Wait for 30 Seconds

5. Use Data Generator to Fetch OTP

6. Submit OTP

Here's a quick GIF demonstrating how to create test case after setting up sms forwarder app.  
![SMS Forward Use Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SMSFORWARD2.gif)

---