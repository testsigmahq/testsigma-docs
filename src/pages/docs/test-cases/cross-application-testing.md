---
title: "Cross-application testing"
metadesc: "How to use NLP's to automate cross-application testing across multiple versions"
noindex: false
order: 4.60
page_id: "Cross application testing"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Upload a New App Version"
  url: "#upload-a-new-app-version"
- type: link
  name: "Use the Updated App in a Test Step"
  url: "#use-the-updated-app-in-a-test-step"
---

---

One interesting feature of Testsigma is allowing users to create customized NLPs to author tests. This article discusses on how to use NLP's to automate cross-application testing across multiple versions. *For more information on how to upload applications, refer to the [documentation on uploading android and iOS apps](https://testsigma.com/docs/uploads/upload-apps/).*
<br>

---

## **Upload a New App Version**

1. From the left navigation bar, go to **Test Data > Uploads**.
   ![Uploads](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_cross_application_1.png)

2. In the **Uploads** screen, click the ellipsis icon against an uploaded file and click **Upload New Version**.
   ![Upload new version](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_cross_application_2.png)

3. In the **Upload New Version** dialog, click **Browse File** and upload the new version.
   ![Browse file](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_cross_application_3.png)

4. Update the file name and version as required, then select the **Enable iOS Keychain Support** and **Skip App Re-signing** checkboxes if applicable.
   ![Checkboxes](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_cross_application_4.png)

[[info | **NOTE**:]]
| Enable iOS Keychain Support when uploading apps that rely on Keychain for storing sensitive data such as credentials or tokens. Skipping this may cause unexpected failures during test execution.

---

## **Use the Updated App in a Test Step**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_cross_application_5.png)

2. Create a test case and use the **Install the app name app-name and version app-version** NLP to test your new version.
    - Click the **app-name** and select your APK from the dropdown menu.
    ![Hover App-name](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_cross_application_6.png)
    - Click the **app-version** to select the version from the dropdown menu.
    ![Hover app-version](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_cross_application_7.png)

3. Click **Create Step**.
   ![Create step](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_cross_application_8.png)

[[info | **NOTE**:]]
|By default, the app-version will be set to the Latest version. Users can select the specific app version to test in the dropdown menu.

---