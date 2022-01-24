---
title: "Create a Testsigma add-on"
metadesc: "How to create a Testsigma add-on"
order: 17.5
page_id: "Create a Testsigma add-on"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "In Testsigma you can create add-ons for the following use case"
  url: "#in-testsigma-you-can-create-add-ons-for-the-following-use-case"
- type: link
  name: "1. Create an add-on template"
  url: "#1-create-an-add-on-template"
- type: link
  name: "2. Update the action code as required"
  url: "#2--update-the-action-code-as-required"
- type: link
  name: "3. Test the Code"
  url: "#3-test-the-code"
- type: link
  name: "4. Upload the updated code to Testsigma"
  url: "#4-upload-the-updated-code-to-testsigma"
- type: link
  name: "5. Publish the add-on"
  url: "#5-publish-the-add-on"
- type: link
  name: "6. Try using the add-on in a Test Case"
  url: "#6-try-using-the-add-on-in-a-test-case"
---
---

You should already know about Testsigma add-ons. See: [What is an add-on?](https://testsigma.com/docs/addons/what-is-an-addon/) | [Prerequisites for creating an add-on](https://testsigma.com/docs/addons/pre-requisite-to-create-addon/).


---
##In Testsigma you can create add-ons for the following use case:

  1. **Custom Actions:** Testsigma has a comprehensive, built-in actions that lets you automate most user actions in simple English. But sometimes you may need to automate actions unique to your AUT. You can build your own actions and automate those unique actions using add-ons. See: [How to build a custom action in add-ons](https://testsigma.com/tutorials/addons/how-create-addons-actions/).

  2. **Test Data Generator:** Testsigma has [default Data Generators](https://testsigma.com/docs/test-data/data-generators/defalut-list/) to generate test data for your automation. But you can create your own data generators. See: [How to build a custom data generator](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/).

  3. **Conditional If:** You can create an action to execute a sequence of steps if the condition is matched. You can write your own logic for the conditional if. See: [How to add conditional if actions](https://testsigma.com/tutorials/addons/how-create-addons-conditional-if/). 

  4. **While Loops:** You can create an action to execute a sequence of steps until the condition is matched. You can write your own logic for the conditional if. See: [How to add while actions](https://testsigma.com/tutorials/addons/how-create-addons-while-loops/). 

  Broadly, this is how you create a Testsigma add-on:

  1. Create an add-on project
  2. Update the code as required in the project
  3. Test the Test Code
  4. Upload the updated project code
  5. Publish the add-on
  6. Additional Step - add-on usage in Test Case

---
##1. **Create an add-on template**

 Navigate to the add-ons page by clicking on the add-ons icon from the navigation bar on the left.


   1. Click on the + New add-on button on the top right to create a new add-on. Testsigma add-on overlay opens up as shown below:
      ![Create add-on Form in My add-ons tab on add-ons page](https://docs.testsigma.com/images/create/create-addon-form-empty.png)

   2. Enter the following details:
    <br>
       * Add-on name: Name of the add-on<br>
       * Package name: Package name for the add-on. This can be the same as the name we intend to use for the add-on java class. It's like a group id for a java project. Example com.your_company.addons<br>
       * Build tool: Select your preferred build tool - Maven or Gradle<br>
       * Description: What does the add-on do?

   3. Click on the Create button to create the sample template code. A zip file will be downloaded automatically containing the template code.
   ![Create Testsigma add-on using Testsigma add-on Form](https://docs.testsigma.com/images/create/create-testsigma-addon-form-download.gif)

&emsp;

---
##2.  **Update the action code as required**

Unzip the downloaded zip file and open the extracted folder in your favorite IDE as a Java project (with Maven as the build tool). The downloaded folder is a Java Maven project folder 
consisting of a pom.xml file along with example templates for Web/Android/iOS.

Here’s the sample code for Android:

![Sample code for Testsigma Android add-on in IDE](https://docs.testsigma.com/images/create/addon-sample-code-android.png)


Refactor the code based on your requirements by :
  * Modifying the Action Text
  * Adding Selenium or Java code for the action to be performed
  * Changing Elements / UI identifiers / locators
  * In the Test class, adding test data

Here’s some modified code for an Android add-on that swipes left n times:


![Updated code for Testsigma Android Swipe Left add-on in IDE](https://docs.testsigma.com/images/create/addon-updated-code-swipe-left-android.png)

Here’s a gif that shows all available annotations and their arguments:

![Snapshot of the sample code showing most common annotations and options](https://docs.testsigma.com/images/create/add-ons-template-code-ide-common-annotations.gif)

---
##3. **Test the Code**

Test the code to verify the add-on you have written. You can use either JUnit or TestNG as the Test Runner. Right-click on the Test class to run it as a TestNG or JUnit test and confirm if your code is performing as expected.

---
##4. **Upload the updated code to Testsigma**

Once you have validated the code, save the changes you made and zip the project folder. You may use the below command on a bash shell:
***zip -r addonName.zip . -x ".*"**

Navigate to the add-ons page, select the dropdown for your add-on and click on the Upload Code option to upload the zipped file.

![add-on options before code upload](https://docs.testsigma.com/images/create/addon-options-dropdown-before-upload.png)

Other available options:

* Manage Tags: Add more tags/labels for categorizing them. For the swipe left in Android example, for instance, we can use,  ‘click’, ‘mobile’.

* Delete: Delete the add-on.
&emsp;

---
##5. **Publish the add-on**

  Once the code is uploaded, the add-on options dropdown would show some additional options:

![add-on options after code upload](https://docs.testsigma.com/images/create/addon-options-dropdown-after-upload.png)

Other available options:
 * **Publish -** publish publicly on the Community Marketplace
 * **Publish Privately -** publish privately for yourself.

Once requested for publishing, it will be sent to the Testsigma Team for review and you will be notified via email once it’s approved.

---
##6. **Try using the add-on in a Test Case**

To try out the add-on you just created, create a new Test Case or open an existing Test Case and add a new Test Step. Search for the keywords of the action you just created, select the action from the suggestions, and update the Test Data and Element.

![Using custom actions in test steps](https://docs.testsigma.com/images/create/custom-addons-in-test-steps.png)

