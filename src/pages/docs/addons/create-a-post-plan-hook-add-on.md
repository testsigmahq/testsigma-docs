---
title: "Create a Post Plan Hook add-on in Testsigma"
metadesc: "This article discusses how to create an addon for Post Plan Hook in Testsigma app. These hooks run after the execution of a test plan irrespective of the result"
noindex: false
order: 17.8
page_id: "Create a Post Plan Hook add-on in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Update the action code as required for the post plan hook"
  url: "#update-the-action-code-as-required-for-the-post-plan-hook"
- type: link
  name: "Test the code"
  url: "#test-the-code"
- type: link
  name: "Upload the updated code to Testsigma"
  url: "#upload-the-updated-code-to-testsigma"
- type: link
  name: "Publish the addon"
  url: "#publish-the-addon"
- type: link
  name: "Try using the addon in a test plan settings"
  url: "#try-using-the-addon-in-a-test-plan-settings"

---

---
Testsigma supports **Post Plan Hooks**, which are user-described actions via add-ons. These hooks run after a test plan execution is complete, irrespective of the success or failure of the test plan execution.

Users can customise the actions within these add-ons to fit their needs and link them through test plan settings.

To create addons, you should already know about Testsigma addons. <br>
Refer to:
- [What is an add-on?](https://testsigma.com/docs/addons/what-is-an-addon/)
- [Prerequisites for creating an add-on.](https://testsigma.com/docs/addons/create/)

For information on how to create an add-on, refer to *[create an add-on](https://testsigma.com/docs/addons/create/)*.

## **Update the action code as required for the post plan hook**

Unzip the downloaded zip file and open the extracted folder in your favourite IDE as a Java project (with Maven as the build tool). The downloaded folder is a Java Maven project folder consisting of a pom.xml file and an example template for a post plan hook in the com.testsigma.addons.hooks package.

Here's the sample code for a post-plan hook that sends an email containing the execution run result to three configured email addresses - 
![Modifying action code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/post_plan_addon.png)

[[info | NOTE:]]
| - The reference used for TestData must be surrounded by curly brackets to be recognised as a post-plan hook field. <br><br>
| - Currently, only one hook is allowed per add-on.

## **Test the code**

Test the code to verify the add-on you have written. You can use either JUnit or TestNG as the test runner. Right-click on the Test class to run it as a TestNG or JUnit test and confirm if your code is performing as expected.

## **Upload the updated code to Testsigma**

Once you have validated the code, save the changes you made and zip the project folder. You may use the below command on a bash shell:

zip -r addonName.zip . -x ".

Navigate to the add-ons page, select the dropdown for your add-on, and click **Upload Code** option to upload the zipped file.

![Upload code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/add_on_edit.png)

Other available options:<br>
    - **Manage Tags**: Add more tags and labels for categorising them. We can customise the action code.<br>
    - **Delete**: Delete the add-on.<br>
    - **Edit Description**: Edit the description in the add-on.

## **Publish the addon**

Once the code is uploaded, the add-on options dropdown will show an additional option, Publish

![Publish addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/publish_addon.png)

If you select to publish your add-on, select one of the following on the Publish Add-on window:
    - **Public**: Choose this option if you want to make the add-on available to the testsigma community.
    - **Private**: Choose this option if you want to make the add-on available only to users in your organization.

![publish addon in private or public](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/publsh_add_on_pp.png)

Once requested for publishing, an automatic security check is done internally. Upon the successful completion of the security check, the add-on is published. In case of a security check failure, an email notification would be sent to the user.

[[info | NOTE:]]
| For trial users, once the request to publish is sent, an email will be sent to the Testsigma team for review, and you will be notified via email once it is approved.

## **Try using the addon in a test plan settings**

To try out the add-on you just created, create a new or open an existing test plan and add a test suite and test machine. Navigate to the **Test Plan Settings** tab and click the right arrow before **Hooks** to unhide the feature. Select the add-on and enter the inputs in the custom field.

![Hook enable in testplan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/hookinput_testplan.png)

---