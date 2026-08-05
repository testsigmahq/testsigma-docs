---
title: "Create & Update an Addon for Classic Engine"
pagetitle: "Create and Update a Classic Java Addon: Automate Unique Actions Easily"
metadesc: "Create and update a Classic (Java) addon in Testsigma to automate custom actions, data generation, and more. Follow simple steps to extend your testing capabilities."
noindex: false
order: 18.6
page_id: "Create a Testsigma addon"
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
- type: link
  name: "Update an Existing Addon"
  url: "#update-an-existing-addon"
---

---

Testsigma enables you to extend its functionality by creating addons. You can use addons to perform specific tasks that the default features of Testsigma do not cover. This document guides you through creating and updating a Classic (Java) addon in Testsigma. For a Modern (TypeScript) addon, see [Modern addons in Testsigma](https://testsigma.com/docs/addons/modern/overview/).

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you start creating an addon, ensure you have:
>    - Basic understanding of Java and Maven.
>    - Ensure you have JUnit or TestNG configured as the Test Runner in your IDE.
>    - Set up a development environment with an IDE for Java (e.g., IntelliJ IDEA, Eclipse).

---

## **Purpose of Addons**

Addons in Testsigma enhance your testing capabilities by enabling you to create custom functionalities tailored to your specific needs: Custom Actions, Test Data Generators, Conditional If Actions, While Loops, and Post-Plan Hooks. See [Types of Addons](https://testsigma.com/docs/addons/overview/#types-of-addons) for what each type covers, and the [documentation on creating a post-plan hook addon](https://testsigma.com/docs/addons/classic/create-a-post-plan-hook-add-on/) for that specific flow.

---

## **Create an Addon**

1. Click on the **Addons** icon from the left navigation bar and click **Addons** from the dropdown.
   ![Addons](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_1.1.png)

2. Click on the **+ New Addon** button at the top right of the Addons page.
   ![New Addon](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_2.png)

3. In the New Addon dialog,
   - Select **Classic** as the Engine version.
   - Enter a **Name** and a **Description**
   - Click **Create & Proceed**.
  ![Create Addon](https://s3.amazonaws.com/static-docs.testsigma.com/new/projects/applications/Addon_Details_to_Proceed.png)

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
| Here’s how you can change the code for an Android addon to swipe left a specific number of times.
| ![Updated code for Testsigma Android Swipe Left addon in IDE](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/addon-updated-code-swipe-left-android.png)

---

## **Validate the Addon Code**

1. Use JUnit or TestNG as your test runner.
2. Right-click on the test class in your IDE and choose to run it as a JUnit or TestNG test.
3. Verify that the addon performs as expected. ![validate addon code](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/validate_addon_code.png)

---

## **Upload the Updated Code**

1. Once you have validated the code, save your changes and zip the project folder. You can use a command in a bash shell like:
      ```bash
      zip -r addonName.zip . -x "*"
      ```

2. Go to the **Addons** page, select your addon, and click **Upload Code**.
   ![Upload Code](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_4.png)

3. Browse and select the zipped file, then click **Update**.
   ![Update](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_5.png)

4. Additional options in the dropdown include:
    - **Edit Description**: Update the description of your addon if needed.
    - **Manage Tags**: Add tags or labels to organize your addon.
    - **Deprecate**: Delete the addon if necessary.

---

## **Publish the Addon**

1. After uploading the code, click on **Publish** from the dropdown menu.
   ![Publish](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_6.png)

   Then, choose your publish options:
    - **Public**: Make the addon available to the entire Testsigma community.
    - **Private**: Restrict availability to users within your organization.


2. Once you select the required option, click **Publish**.
   ![Publish the addon](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_7.png)

3. An automatic security check will be done. If it passes, the addon will be published. If it fails, you will get an email notification.

[[info | NOTE:]]
| Testsigma Support team will review your publishing request for trial users and send you an email notification once they approve the addon.

---

## **Use Addon in a Test Case**

1. Create a new test case or open an existing one. Click **Add New Step** and search for the action using the keywords.

2. Look for the **Addon** icon before the test step to indicate it's from the Addon.

3. Select it from the suggestions, update the test data and element, and then click **Create Step**. ![Create a step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_addon_8.png)

---

## **Update an Existing Addon**

Once your addon is live, you can revise it as requirements change, fixing bugs, adding features, or adjusting settings, without starting from scratch:

1. Modify the addon's code and re-validate it using the same steps as [Update the Action Code](#update-the-action-code) and [Validate the Addon Code](#validate-the-addon-code) above.
2. From the left navigation bar, go to **Addons**, open the **My Addons** tab, and select the addon you want to update.
3. Click the dropdown icon on the addon and select **Upload Code**, then follow the same [Upload](#upload-the-updated-code) and [Publish](#publish-the-addon) steps described above.

---
