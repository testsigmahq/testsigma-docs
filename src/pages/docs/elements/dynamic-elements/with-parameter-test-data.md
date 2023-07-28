---
title: "Using Parameter Test Data for Dynamic locators"
metadesc: "This article discusses the usage of Parameter Test Data for creating dynamic locators to use in Data-driven Testing | Learn about Parameter Test Data"
noindex: false
order: 6.61
page_id: "Using Parameter Test Data for Dynamic locators"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Case Study - OrangeHRM Enterprise"
  url: "#case-study---orangehrm-enterprise"
- type: link
  name: "Actual Steps - Implementation"
  url: "#actual-steps---implementation"
- type: link
  name: "Creating Dynamic Elements using parameter test data"
  url: "#creating-dynamic-elements-using-parameter-test-data"
- type: link
  name: "Run Results"
  url: "#run-results"

---

---
Data-driven Testing is one of the most common cases where we make use of dynamic locators. In Testsigma, we use parameterized XPath or CSS Selector for dynamic locators. Let us discuss more using an example.

You should already be familiar with [Parameter Test Data](https://testsigma.com/docs/test-data/types/parameter/) and [Data-Driven Testing](https://testsigma.com/tutorials/test-cases/data-driven-testing/). 

<br>

---
##**Case Study - OrangeHRM Enterprise**
Enterprise websites are a good candidate for this kind of testing due to the amount of dynamic content on their pages. Here, we will be using an OrangeHRM Enterprise web app for our demonstration.
So, let’s get started. We will be doing the following steps on the OrangeHRM website:
1. Goto OrangeHRM website using the action statement - Navigate to test data
2. Click on the Login button using the action statement - click on element
3. Wait for 3 seconds for page-load using the action statement - wait until the element is visible
4. Click on the document item in the documents list using the action statement - click on element

In the third and fourth steps, we will be using parameterized Elements i.e Elements using Test Data to click on consecutive items in the documents list by iteration.

Here’s a screenshot of the steps created in Testsigma:
![Test Steps of OrangeHRM Test Case with dynamic](https://docs.testsigma.com/images/with-parameter-test-data/Elements-test-steps-dynamic-locators.png)


---
##**Actual Steps - Implementation**

**Step 1: Navigate to https://orangehrm-demo-6x.orangehrmlive.com/auth/login**

This step is self-explanatory. We can use the ‘Navigate to test data’ action to navigate to a website. Here, we are navigating to the login page of the OrangeHRM Enterprise website.

This step is self-explanatory. We can use the ‘Navigate to test data’ action to navigate to a website. Here, we are navigating to the login page of the OrangeHRM Enterprise website.

![OrangeHRM Enterprise Login page](https://docs.testsigma.com/images/with-parameter-test-data/orangehrm-enterprise-login-page.png)

**Step 2: Click on loginbutton**

Since the username and password are filled in by default, we just need to click on the LOGIN button to log into the application. We can create the step with a dummy Element name loginbutton and later update the Element for the button.

Learn more - [Adding Elements while creating Test Cases](https://testsigma.com/docs/test-cases/create-steps-nl/web-apps/create-a-new-element/)

Due to the presence of an ID locator for the login page, the element for the ‘LOGIN button’ can be created easily using the ID locator as shown below:

![Edit loginbutton Element](https://docs.testsigma.com/images/with-parameter-test-data/edit-element-loginbutton.png)

Clicking on the login button takes us to the Dashboard page as shown below:
![OrangeHRM Enterprise Dashboard page](https://docs.testsigma.com/images/with-parameter-test-data/orangehrm-enterprise-dashboard.png)

**Step 3: Wait for 10 seconds**

We need to add a wait time of 10 seconds since there are a lot of dynamic elements to load. It is a good practice to add a reasonable wait time for pages with a lot of dynamic content at the beginning while creating Tests. We can remove the wait step later if it's not necessary.

**Step 4: Click on documentlistitem**

This is the most important step in this tutorial. We need to click on the first four items in this list in each of our test iterations. Let us see how it is done.

<br>

---
##**Creating Dynamic Elements using parameter test data**
As you can see on the above page, there is a list of Documents below the Pie Chart. On inspecting the page, you can see the HTML structure of the Documents div element as shown below:
![OrangeHRM Dashboard with First row selected](https://docs.testsigma.com/images/with-parameter-test-data/orangehrm-enterprise-dashboard-first-row-selected.png)

![OrangeHRM Dashboard Page Source](https://docs.testsigma.com/images/with-parameter-test-data/orangehrm-enterprise-dashboard-page-source.png)

Luckily, we have id locators for these elements as well. We can use the following XPath for locating the first 4 items in the Documents list:
**//li[@id='docTitle_.1']//a**<br>
**//li[@id='docTitle_.2']//a**<br>
**//li[@id='docTitle_.3']//a**<br>
**//li[@id='docTitle_.4']//a**

As you may have noticed already, the ids of the Document items in the Documents list have a common portion ‘docTitle_.’ followed by a variable digit from 1 to 10. We can parametrize the variable portion of the ID attribute using a Test Data profile.

The Element will then become:

**//li[@id='docTitle_.<parameter_name>']//a**

So it will be **//li[@id='docTitle_.@|number|']//a**

We just need to replace the <parameter_name> part with Test Data

**Example:**

Let us create a Test Data profile where we can store the dynamic part i.e. **elements** is the parameter name which is having dynamic data. So let us create a test data profile i.e, lets replace elements in place of parameter_name.

Learn more - [How to create a Test Data Profile](https://testsigma.com/docs/test-data/create-data-profiles/)

We have already created one as shown below:

![Test Data Profile with dynamic element index](https://docs.testsigma.com/images/with-parameter-test-data/test-data-profile-dynamic-element-index.png)

The highlighted portion is the parameter name in the Test Data profile and we will be adding this to the Element to make it dynamic. 
**//input[@id='<parameter_name>']**

We can replace the **<parameter_name>** with actual test data parameter as given below:
**//input[@id='@|elements|']**

![Edit element with Parameter Test Data](https://docs.testsigma.com/images/with-parameter-test-data/edit-element-dynamic-locator-param-test-data.png)

The **@|elements|** part will be replaced by the parameter value corresponding to the Test Data profile in each iteration.

<br>


---
##**Run Results**
Once the Test Case is updated with the dynamic Element as given above, we can execute the Tests. Please follow this article to know more about executing Tests - <How to create/edit/delete Executions?>

The Test Case iterates as many times as there are Test Data Sets(rows) in the Test Data Profile resulting in 4 iterations since we have four Test Datasets in the above Test Data Profile.

![data-driven iterations test result with Test Data Profile-based dynamic element](https://docs.testsigma.com/images/with-parameter-test-data/orangehrm-test-case-data-driven-test-result-dynamic-element.png)


That’s all we need to create Dynamic Elements using Parameter Test Data.


