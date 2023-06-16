---
title: "Using Runtime Test Data for Dynamic locators"
metadesc: "This article discusses the usage of Runtime Test Data for creating dynamic locators | Learn about Runtime Test Data in Testsigma application"
order: 6.62
page_id: "Using Runtime Test Data for Dynamic locators"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Case Study - OrangeHRM"
  url: "#case-study---orangehrm"
- type: link
  name: "Actual Steps - Implementation"
  url: "#actual-steps---implementation"
- type: link
  name: "Creating Dynamic Elements using run-time test data"
  url: "#creating-dynamic-elements-using-run-time-test-data"
---

---

In Testsigma, one of the ways we can automate the testing of dynamic elements is by using parameterized XPath or CSS Selectors. Let’s see how.

You should be familiar with [Runtime Test Data](https://testsigma.com/docs/test-data/types/runtime/).

<br>

---
## **Case Study - OrangeHRM**

Here, we will be using a popular application such as OrangeHRM for our demonstration. We will be doing the following steps on the OrangeHRM website:
1. **Navigate to the OrangeHRM website**<br>
2. **Enter the username**<br>
3. **Enter the password**<br>
4. **Store the username to a run-time variable (for reuse in dynamic Element)**<br>
5. **Click on the login button**<br>
6. **Verify that an element with the text 'Welcome ' followed by the stored user name is displayed on the page**<br>

<br>

---
## **Actual Steps - Implementation**
1. **Navigate to https://opensource-demo.orangehrmlive.com**<br>
This step is self-explanatory. Navigate to the OrangeHRM website using grammar Navigate to test data.

2. **Enter Admin in Username field**<br>
Enter the user name in the Username field using grammar Type test data in the Element field.
We can create the step with a dummy Element named  Username and later update the Element value for the field. 

3. **Enter admin123 in Password field**<br>
Enter the password in the  Password field using grammar Type test data in the Element field.
This step is similar to the above step. You just need to modify the test data and Element.

4. **Store the value displayed in the text box Username field into a variable user_name**<br>
Store the user name from the  Username field to a run-time variable named 'user_name' using the grammar Store the value displayed in the text box Element field into a variable test data.
   [[info | NOTE:]]
   |In this case, the value 'Admin' from the 'Username' field is stored inside the run-time variable 'user_name'

5. **Click on login_button**<br>
Click on the Login button using the grammar Click on Element. This step is similar to the 2nd and 3rd steps. You just need to modify the Element since there's no test data for this step.

6. **Verify that the current page displays an element welcome_ username_ link**<br>
Verify that an element(welcome_ username_ link) with dynamic XPath containing the stored run_ time parameter 'user_ name' is present using the grammar Verify that the current page displays an element Element.

![OrangeHRM Dashboard with Chrome Devtools elements tab focusing login avatar on the right side](https://docs.testsigma.com/images/with-runtime-test-data/orangehrm-dashboard-page-source-login-avatar.png)

<br>

---
## **Creating Dynamic Elements using run-time test data**
In step #6, we are verifying that the page displays an Element 'welcome_ username_ link' containing text 'Welcome Admin'. Here, 'Admin' is the username that we got from the 'Username' field in step #4. 

The username of the currently logged-in user can be dynamic and so we need to create a dynamic XPath containing the current Username.

For example,<br>
**//a[@id='welcome'][text()='Welcome Admin']**

We have already got the username of the currently logged-in user 'Admin' into the run-time parameter named 'user_name' in Step #4. We just need to use the same in the dynamic XPath. That can be done as given below:

**//a[@id='welcome'][text()='Welcome $|user_name|']**

Now we can use the above XPath as the Element value of "welcome_ username_ link" and the $|user_ name| part will be translated to the value of runtime parameter 'user_ name' when the Test Step is executed.

![Edit Element overlay with dynamic locator using runtime parameter](https://docs.testsigma.com/images/with-runtime-test-data/dynamic-locator-runtime-parameter.png)


Here's a screenshot of the Test Case:
![OrangeHRM Test Steps with dynamic locator containing Runtime data](https://docs.testsigma.com/images/with-runtime-test-data/dynamic-locator-runtime-parameter-test-steps-example.png)

That’s all we need to create Dynamic Elements using Runtime Parameter Test Data.

Once the Test Case is updated with the dynamic Element as given above, we can execute the Tests. You may also perform a dry run by clicking on the Run button on the Test Case details page.





