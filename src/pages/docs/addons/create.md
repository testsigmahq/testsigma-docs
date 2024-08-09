---
title: "Creating an Addon in Testsigma"
pagetitle: "Create Custom Add-ons: Automate Unique Actions Easily"
metadesc: "Create an add-on in Testsigma to automate custom actions, data generation, and more. Follow simple steps to extend your testing capabilities."
noindex: false
order: 17.5
page_id: "Create a Testsigma add-on"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Understanding the Purpose of Addons"
  url: "#understanding-the-purpose-of-addons"
- type: link
  name: "Creating an Addon Template"
  url: "#creating-an-addon-template"
- type: link
  name: "Updating the Action Code"
  url: "#updating-the-action-code"
- type: link
  name: "Validating the Addon Code"
  url: "#validating-the-addon-code"
- type: link
  name: "Uploading the Updated Code"
  url: "#uploading-the-updated-code"
- type: link
  name: "Publishing the Addon"
  url: "#publishing-the-addon"
- type: link
  name: "Using the Addon in a Test Case"
  url: "#using-the-addon-in-a-test-case"
---

---

Testsigma enables you to extend its functionality by creating add-ons. You can use add-ons to perform specific tasks that the default features of Testsigma do not cover. This document guides you through the process of creating and using an addon in Testsigma.

---

## **Prerequisites**

Before you start creating an addon, ensure you have:

- Basic understanding of Java and Maven.
- Ensure you have JUnit or TestNG configured as the Test Runner in your IDE.
- Set up a development environment with an IDE for Java (e.g., IntelliJ IDEA, Eclipse).

---

## **Understanding the Purpose of Addons**

Addons in Testsigma enhance your testing capabilities by enabling you to create custom functionalities tailored to your specific needs. Each add-on action has a distinct purpose:

- **Custom Actions**: You can automate tasks specific to your application using Custom Actions not covered by Testsigma's built-in actions. Integrate unique functionalities into your tests as needed with these actions. For more details, refer to the guide on how to build a [custom action in addons](https://testsigma.com/tutorials/addons/how-create-addons-actions/).
- **Test Data Generators**: Create custom data generators for the specific test data your scripts require. Customize these generators to fit the unique data needs of your testing scenarios. For more information, refer to how to build a [custom data generator addon](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/).
- **Conditional If Actions**: Execute a sequence of steps based on specified conditions to control test flows dynamically. You can use these actions to manage test execution based on runtime conditions. For further details, check how to create [conditional if loop addon](https://testsigma.com/tutorials/addons/how-create-addons-conditional-if/).
- **While Loops**: Repeat the steps until you meet a condition, which is useful for scenarios that require multiple iterations. Implement these loops to handle repetitive actions until you achieve the desired outcome. For guidance, see how to create [while loop addon](https://testsigma.com/tutorials/addons/how-create-addons-while-loops/).
- **Post-Plan Hooks**: Define actions that run after the completion of a test plan, regardless of its outcome, using Post-Plan Hooks. Use these hooks to automate tasks that need to occur after a test plan finishes. For further details, here is how you can create a [Post-Plan Hook addon](https://testsigma.com/docs/addons/create-a-post-plan-hook-add-on/).

---

## **Creating an Addon Template**

1. Click on the **Addons** icon from the left navigation bar.
2. Click on the **+ New Addon** button at the top right of the Addons page.
3. Enter the **Addon Name** and provide a brief **Description** of what the addon does on the **Testsigma Addon** pop-up, then click **Create**. A zip file containing the template code will be downloaded automatically.
4. Alternatively, open the addon and click the **Download** icon to get the source code. This action will download a zip file containing the sample template code, which you can use to add your code. ![creating an addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/creating_an_add_on.gif)

---

## **Updating the Action Code**

1. Unzip the downloaded file and open the extracted folder in your IDE as a Java project. Ensure that Maven is set as the build tool.
2. The downloaded folder contains a Java Maven project with a **pom.xml** file and sample templates for **Web**, **Mobile Web**, **Android**, and **iOS Application**. ![Snapshot of the sample code showing most common annotations and options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Addonnew.gif)
3. Refactor the sample code based on your requirements:
    - **Action Text**: Customize the action text.
    - **Selenium or Java Code**: Add Selenium or Java code to define the action.
    - **Elements/Locators**: Modify elements or locators as needed.
    - **Test Data**: Update the test data in the test class according to your requirements. ![Updated code for Testsigma Android Swipe Left add-on in IDE](https://docs.testsigma.com/images/create/addon-updated-code-swipe-left-android.png)

[[info | Example:]]
| Here’s how you can change the code for an Android add-on to swipe left a specific number of times.

---

## **Validating the Addon Code**

1. Use JUnit or TestNG as your test runner.
2. Right-click on the test class in your IDE and choose to run it as a JUnit or TestNG test.
3. Verify that the add-on performs as expected. ![validate addon code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/validate_addon_code.png)

---

## **Uploading the Updated Code**

1. Once you have validated the code, save your changes. Zip the project folder. You can use a command in a bash shell like:
```bash
zip -r addonName.zip . -x "*"
```
2. Go to the **Addons** page, select your add-on, and click **Upload Code**. Browse and select the zipped file, then click **Update**. ![upload actions code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/upload_action_code.gif)
3. Additional options in the dropdown include:
    - **Edit Description**: Update the description of your add-on if needed.
    - **Manage Tags**: Add tags or labels to organize your add-on.
    - **Deprecate**: Delete the add-on if necessary.

---

## **Publishing the Addon**

1. After uploading the code, click on **Publish** from the dropdown menu. Then, choose your publish options:
    - **Public**: Make the add-on available to the entire Testsigma community.
    - **Private**: Restrict availability to users within your organization.
2. An automatic security check will be done. If it passes, the add-on will be published. If it fails, you will get an email notification. ![publish addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/publish_addon_ts.gif)

[[info | NOTE:]]
| Testsigma Support team will review your publishing request for trial users and send you an email notification once they approve the add-on.

---

## **Using the Addon in a Test Case**

1. Create a new test case or open an existing one. Click **Add New Step** and search for the action using the keywords. 
2. Look for the **Addon** icon before the test step to indicate it's from the Addon. 
3. Select it from the suggestions, update the test data and element, and then click **Create Step**. ![using addon in test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/use_addon_in_testcase.gif)

---

