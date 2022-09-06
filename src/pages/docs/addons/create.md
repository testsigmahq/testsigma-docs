---
title: "Create a Testsigma add-on"
metadesc: "How to create a Testsigma add-on"
noindex: false
canonical: "https://testsigma.com/docs/addons/create/"
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

You should already know about Testsigma add-ons.See: 

* [What is an add-on?](https://testsigma.com/docs/addons/what-is-an-addon/)

* [Prerequisites for creating an add-on](https://testsigma.com/docs/addons/pre-requisite-to-create-addon/).


---
In Testsigma you can create add-ons for the following use case:

  1. **Custom Actions:** Testsigma has a comprehensive, built-in actions that lets you automate most user actions in simple English. But sometimes you may need to automate actions unique to your AUT. You can build your own actions and automate those unique actions using add-ons. *For more information,refer to [How to build a custom action in add-ons](https://testsigma.com/tutorials/addons/how-create-addons-actions/)*.

  2. **Test Data Generator:** Testsigma has [default Data Generators](https://testsigma.com/docs/test-data/data-generators/default-list/) to generate test data for your automation. But you can create your own data generators. *For more information,refer to [How to build a custom data generator](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/)*.

  3. **Conditional If:** You can create an action to execute a sequence of steps if the condition is matched. You can write your own logic for the conditional if. *For more information,refer to [How to add conditional if actions](https://testsigma.com/tutorials/addons/how-create-addons-conditional-if/)*. 

  4. **While Loops:** You can create an action to execute a sequence of steps until the condition is matched. You can write your own logic for the conditional if. *For more information,refer to [How to add while actions](https://testsigma.com/tutorials/addons/how-create-addons-while-loops/)*. 

  Broadly, this is how you create a Testsigma add-on:

  1. Create an add-on project
  2. Update the code as required in the project
  3. Test the Test Code
  4. Upload the updated project code
  5. Publish the add-on
  6. Additional Step - add-on usage in Test Case

---

## **1.** **Create an add-on template**

 Navigate to the add-ons page by clicking on the add-ons icon from the navigation bar on the left.


   1. Click on the + **New add-on** button on the top right to create a new add-on. Testsigma add-on overlay opens up as shown below:
      ![Create add-on Form in My add-ons tab on add-ons page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/addons/create/addon-create-updated-screenshot.png)

   2. Enter the following details:
    <br>
       * **Add-on name**: Name of the add-on.<br>
       * **Description**: A short description about what the add-on does.

   3. Click on the **Create** button to create the sample template code. A zip file will be downloaded automatically containing the template code.
    ![Create Testsigma add-on using Testsigma add-on Form](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/addons/create/addon-create-gif.gif)

&emsp;

---
##**2.**  **Update the action code as required**

Unzip the downloaded zip file and open the extracted folder in your favorite IDE as a Java project (with Maven as the build tool). The downloaded folder is a Java Maven project folder 
consisting of a pom.xml file along with example templates for Web/Android/iOS.

Here’s the sample code for Android:

![Sample code for Testsigma Android add-on in IDE](https://docs.testsigma.com/images/create/addon-sample-code-android.png)


Refactor the code based on your requirements by :
  * Modifying the action text.
  * Adding Selenium or Java code for the action to be performed.
  * Changing Elements/locators.
  * In the test class, adding test data.

Here’s some modified code for an Android add-on that swipes left n times:


![Updated code for Testsigma Android Swipe Left add-on in IDE](https://docs.testsigma.com/images/create/addon-updated-code-swipe-left-android.png)

Here’s a GIF that shows all available annotations and their arguments:

![Snapshot of the sample code showing most common annotations and options](https://docs.testsigma.com/images/create/add-ons-template-code-ide-common-annotations.gif)

---
##**3.** **Test the code**

Test the code to verify the add-on you have written. You can use either JUnit or TestNG as the Test Runner. Right-click on the Test class to run it as a TestNG or JUnit test and confirm if your code is performing as expected.

---
##**4.** **Upload the updated code to Testsigma**

Once you have validated the code, save the changes you made and zip the project folder. You may use the below command on a bash shell:

`zip -r addonName.zip . -x ".`

Navigate to the add-ons page, select the dropdown for your add-on and click on the **Upload Code** option to upload the zipped file.

![add-on options before code upload](https://docs.testsigma.com/images/create/addon-options-dropdown-before-upload.png)

Other available options:

* **Manage Tags**: Add more tags/labels for categorizing them. For the swipe left in Android example, for instance, we can use,  ‘click’, ‘mobile’.

* **Delete**: Delete the add-on.
&emsp;

---
##**5**. **Publish the add-on**

  Once the code is uploaded, the add-on options dropdown would show an additional option, **Publish**:

![add-on options after code upload](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/addons/create/add-ons-1.png)

If you select to publish your add-on, select one of the following on the **Publish Add-on** window:

 * **Public** - Choose this option if you want to make the add-on available to the testsigma community.
 * **Private** -Choose this option if you want to make the add-on available only to users in your organization.

![add-on publish private or public](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/addons/create/publish_addon.png)
Once requested for publishing, an automatic security check is done internally. Upon the successful completion of the security check the add-on is published.In case of a security check failure, an email notification would be sent out to the user.


[[info | **NOTE**:]]
|For trial users once the request to publish is sent, an email will be sent to the Testsigma team for review and you will be notified via email once it is approved.


---
##**6.** **Try using the add-on in a test case**

To try out the add-on you just created, create a new test case or open an existing test case and add a new test step. Search for the keywords of the action you just created, select the action from the suggestions, and update the Test Data and Element.

![Using custom actions in test steps](https://docs.testsigma.com/images/create/custom-addons-in-test-steps.png)

