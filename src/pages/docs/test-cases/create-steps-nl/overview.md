---

title: "Create Test Steps using natural language"
metadesc: "How to create Test Steps in Testsigma using Natural Language"
order: 4.40
page_id: "Create Test Steps using natural language"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Creating Test Steps"
  url: "#creating-test-steps"
---

---

Testsigma follows a codeless approach to test creation. You create Test Steps in simple English instead of programming languages. This makes the tests easy to create and read. 
We assume that you are familiar with Test Cases and related concepts. If not, refer to [Test Cases - Overview](https://testsigma.com/docs/test-cases/overview/)	

Let’s take an example where we need to automate the login scenario for Simply Travel Web Application. Here’s a snapshot of the login page:

![Simply Travel login page](https://docs.testsigma.com/images/create-steps-nl/simply-travel-website-login-page.png)

The steps would be:
 1. Navigate to Simply Travel login page(https://travel.testsigma.com/login)
 2. Enter username as ‘admin’ in the User Name field
 3. Enter the password as ‘12345’ in the Password field
 4. Click on the login button

&emsp;
---
##**Creating Test Steps**
After creating a new Test Case or opening an existing Test Case, we will be taken to the Test Case page as shown below:

![Default navigate step present on creating Test Case](https://docs.testsigma.com/images/create-steps-nl/simply-travel-test-case-default-navigate-step.png)

We can see that the first Test Step is automatically created for us based on the Application Type we are in. In the case of a Web Application, it is “Navigate to test data”.
Learn more about [Test Data.](https://testsigma.com/docs/test-data/overview/)

&emsp;

### **Step 1**

For the first Test Step, click on ‘test data’ to select it and to update it. In this case, replace it with the URL or Web Address of the Application Under Test i.e https://travel.testsigma.com/login

Once the test data is updated, click on the  ‘Create’ button to validate and create the Test Step.

![Create First Action Step for Simplytravel test case](https://docs.testsigma.com/images/test-cases/create-first-Action-step-simplytravel-test-case.png)


&emsp;

### **Step 2**

Now, let’s create another Test Step to do the next required action i.e “Enter username as ‘admin’ in the User Name field”.

As soon as the first step is created, a new Test Step is created and in focus.

&emsp;

 1. Start by typing the action you wish to perform. For entering some data into an element field, type ‘enter’ in the Test Step input box and wait for the suggestions to appear. You can select the most appropriate one for your action. In this case, select “Enter test data from element field”.


![Action Suggestions for enter action](https://docs.testsigma.com/images/test-cases/create-Action-step-enter-action-suggestions.png)

 
  &emsp;     We have already discussed test data in the previous step. Let’s see what an Element is.
     
  &emsp;   Learn more: [What is Element?](https://testsigma.com/docs/elements/web-apps/overview/)
  
  &emsp;


 2. As we did for the first Test Step, click on ‘test data’ once to select it and update it. In this case, replace the existing text with ‘admin’.

 3. After that, click on ‘element’ once to select it and update it. A suggestion list with available Elements pops up on the right.
   
 4.  If you have already created the Element, enter the element name and select from the filtered list.

 ![Element suggestions popup with existing Element](https://docs.testsigma.com/images/test-cases/create-second-Action-step-element-suggestions.png)



 5.  If you haven’t created the Element, enter a name for the new Element and click on create a new Element.

![Element suggestions popup with new Element](https://docs.testsigma.com/images/test-cases/create-second-Action-step-element-new.png)


  To learn more ways to create Elements, refer to: [Create Elements - Overview](https://testsigma.com/docs/elements/web-apps/create-manually/)


 6.   Finally, click on the Create button to create the Step
  
 

   
  
  

### **Step 3 & 4**

Similarly, create the remaining steps by repeating the same steps from Step 1 to Step 4 by entering the action you wish to perform, selecting the appropriate Action Statement, and updating the ‘test data’ and/or ‘element’.




  


   
 

   


