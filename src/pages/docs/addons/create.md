---
title: "Creating an Addon in Testsigma"
pagetitle: "Create Custom Add-ons: Automate Unique Actions Easily"
metadesc: "Create an add-on in Testsigma to automate custom actions, data generation, and more. Follow simple steps to extend your testing capabilities."
noindex: false
order: 18.5
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
  name: "Purpose of Addons"
  url: "#purpose-of-addons"
- type: link
  name: "Create an Addon"
  url: "#create-an-addon"
- type: link
  name: "Update the Action Code"
  url: "#update-the-action-code"
- type: link
  name: "Validate the Addon Code"
  url: "#validate-the-addon-code"
- type: link
  name: "Upload the Updated Code"
  url: "#upload-the-updated-code"
- type: link
  name: "Publish the Addon"
  url: "#publish-the-addon"
- type: link
  name: "Use Addon in a Test Case"
  url: "#use-addon-in-a-test-case"
---

---

Testsigma enables you to extend its functionality by creating add-ons. You can use add-ons to perform specific tasks that the default features of Testsigma do not cover. This document guides you through the process of creating and using an addon in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you start creating an addon, ensure you have:
>    - Basic understanding of Java and Maven.
>    - Ensure you have JUnit or TestNG configured as the Test Runner in your IDE.
>    - Set up a development environment with an IDE for Java (e.g., IntelliJ IDEA, Eclipse).
>    - For a Modern add-on, set up a TypeScript environment instead of Java and Maven.

---

## **Purpose of Addons**

Addons in Testsigma enhance your testing capabilities by enabling you to create custom functionalities tailored to your specific needs. Each add-on action has a distinct purpose:

- **Custom Actions**: You can automate tasks specific to your application using Custom Actions not covered by Testsigma's built-in actions. Integrate unique functionalities into your tests as needed with these actions. For more details on creating custom action in add-ons, refer to the [documentation on creating custom action in add-ons](https://testsigma.com/tutorials/addons/how-create-addons-actions/).
- **Test Data Generators**: Create custom data generators for the specific test data your scripts require. Customize these generators to fit the unique data needs of your testing scenarios. For more information on creating custom data generator add-on, refer to the [documentation on creating custom data generator add-on](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/).
- **Conditional If Actions**: Execute a sequence of steps based on specified conditions to control test flows dynamically. You can use these actions to manage test execution based on runtime conditions. For further details on creating conditional if loop add-on, refer to the [documentation on creating conditional if loop add-on](https://testsigma.com/tutorials/addons/how-create-addons-conditional-if/).
- **While Loops**: Repeat the steps until you meet a condition, which is useful for scenarios that require multiple iterations. Implement these loops to handle repetitive actions until you achieve the desired outcome. For more information on creating while loop add-on, refer to the [documentation on creating while loop add-on](https://testsigma.com/tutorials/addons/how-create-addons-while-loops/).
- **Post-Plan Hooks**: Define actions that run after the completion of a test plan, regardless of its outcome, using Post-Plan Hooks. Use these hooks to automate tasks that need to occur after a test plan finishes. For more information on creating a post-plan hook add-on, refer to the [documentation on creating post-plan hook add-on](https://testsigma.com/docs/addons/create-a-post-plan-hook-add-on/).

---

## **Create an Addon**

1. Click on the **Addons** icon from the left navigation bar and click **Add-ons** from the dropdown.
   ![Addons](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_1.1.png)

2. Click on the **+ New Addon** button at the top right of the Addons page.
   ![New Addon](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_2.png)

3. In the New Addon dialog,
   - Select Engine version (**Classic** or **Modern**)
   - Enter a **Name** and a **Description**
   - Click **Create & Proceed**. 
  ![Create Addon](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Addon_Details_to_Proceed.png)

> <p id="prerequisites">Additional Information</p>
>  Create a Modern add-on in TypeScript for applications that run on the Modern engine. A Modern application shows only Modern add-ons during authoring, and a Classic application shows only Classic add-ons.
> 
> A Modern add-on package can ship any combination of three capability types:
> 
> | Capability | Purpose |
> | --- | --- |
> | Action | Adds a custom test step with its own natural-language grammar. |
> | Test Data Function | Returns a generated value, such as a random email or a token, for step test data, loop conditions, and step-group parameters. |
> | Hook | Runs after a test plan completes, with access to the run result and CI/CD credentials. |


Alternatively, open the addon and click the **Download** icon to get the source code. This action will download a zip file containing the sample template code, which you can use to add your code. 

---

## **Update the Action Code**

1. Unzip the downloaded file and open the extracted folder in your IDE as a Java project. Ensure that Maven is set as the build tool.
2. The downloaded folder contains a Java Maven project with a **pom.xml** file and sample templates for **Web**, **Mobile Web**, **Android**, and **iOS Application**. ![Snapshot of the sample code showing most common annotations and options](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Addonnew.gif)
3. Refactor the sample code based on your requirements:
    - **Action Text**: Customize the action text.
    - **Selenium or Java Code**: Add Selenium or Java code to define the action.
    - **Elements/Locators**: Modify elements or locators as needed.
    - **Test Data**: Update the test data in the test class according to your requirements. 

[[info | Example:]]
| Here’s how you can change the code for an Android add-on to swipe left a specific number of times.
| ![Updated code for Testsigma Android Swipe Left add-on in IDE](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/addon-updated-code-swipe-left-android.png)

[[info | NOTE:]]
| The steps above apply to a Classic (Java) add-on. For a Modern (TypeScript) add-on, open the extracted folder in your IDE as a TypeScript project. It contains a scaffold project with build scripts, a manifest file, and a source file. Write your actions, test data functions, or hooks as named exports in the source file — see **Additional Information** above for the capability types you can implement. The manifest is generated when you build the project; do not edit it manually.

---

## **Validate the Addon Code**

1. Use JUnit or TestNG as your test runner.
2. Right-click on the test class in your IDE and choose to run it as a JUnit or TestNG test.
3. Verify that the add-on performs as expected. ![validate addon code](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/validate_addon_code.png)

[[info | NOTE:]]
| The steps above apply to a Classic (Java) add-on. For a Modern (TypeScript) add-on, validate the code using your project's own test tooling before you build it.

---

## **Upload the Updated Code**

1. Once you have validated the code, prepare the zip file to upload:
    - **Classic (Java)**: Save your changes and zip the project folder. You can use a command in a bash shell like:
      ```bash
      zip -r addonName.zip . -x "*"
      ```
    - **Modern (TypeScript)**: Build the project. The build already produces a single zip file containing the manifest and the bundled code — you do not need to zip it manually.

2. Go to the **Addons** page, select your add-on, and click **Upload Code**. 
   ![Upload Code](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_4.png)

3. Browse and select the zipped file, then click **Update**.
   ![Update](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_5.png)

4. Additional options in the dropdown include:
    - **Edit Description**: Update the description of your add-on if needed.
    - **Manage Tags**: Add tags or labels to organize your add-on.
    - **Deprecate**: Delete the add-on if necessary.

---

## **Publish the Addon**

1. After uploading the code, click on **Publish** from the dropdown menu. 
   ![Publish](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_6.png)
   
   Then, choose your publish options:
    - **Public**: Make the add-on available to the entire Testsigma community.
    - **Private**: Restrict availability to users within your organization. 


2. Once you select the required option, click **Publish**. 
   ![Publish the addon](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_7.png)

3. An automatic security check will be done. If it passes, the add-on will be published. If it fails, you will get an email notification. 

[[info | NOTE:]]
| Testsigma Support team will review your publishing request for trial users and send you an email notification once they approve the add-on.

---

## **Use Addon in a Test Case**

[[info | NOTE:]]
| Testsigma shows Modern add-ons only in Modern applications, and Classic add-ons only in Classic applications. If you don't see your add-on in the suggestions, confirm the add-on's runtime matches the application's engine.

1. Create a new test case or open an existing one. Click **Add New Step** and search for the action using the keywords. 

2. Look for the **Addon** icon before the test step to indicate it's from the Addon. 

3. Select it from the suggestions, update the test data and element, and then click **Create Step**. ![Create a step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_8.png)

---