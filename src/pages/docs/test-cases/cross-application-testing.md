---
title: "Cross-application testing"
metadesc: "How to use NLP's to automate cross-application testing across multiple versions"
noindex: false
order: 4.80
page_id: "Cross application testing"
warning: false
---
<br>
<br>

One interesting feature of Testsigma is allowing users to create customized NLPs to author tests. This article discusses on how to use NLP's to automate cross-application testing across multiple versions. *For more information on how to upload applications, refer to [upload android and iOS apps](https://testsigma.com/docs/uploads/upload-apps/).*
<br>

## **Steps to automate cross-application testing using NLP’s**
1. Navigate to **Test development > Uploads**.
![Navigate to uploads](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navigate_uploads.png)
2. Hover over the upload you want to update.
    - Click on **Edit**.
    ![Click on edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/hover_uploads_edit.png)
    - Click on **Choose file** to upload the new version of the APK.
    ![Click On choose file](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/choose_apk.png)
    - Enter the **Name** , **Version** and click on **Update**.
    ![Click On update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rename_version.png)

3. Navigate to **Test development > Test case**.
Create a test case and use Install the app name and app-version NLP to test your new version.
    - Hover over the **app-name** and select your APK from the dropdown menu.
    ![Hover App-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/NLP_appname.png)
    - Hover over the **app-version** to select the version from the dropdown menu.
    ![Hover app-version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/NLP_appversion.png)

[[info | **NOTE**:]]
|By default, the app-version will be set to the Latest version. Users can select the specific app version to test in the dropdown menu.

