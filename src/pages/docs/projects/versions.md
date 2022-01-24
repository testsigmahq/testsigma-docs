---
title: "Manage Application Versions"
page_title: "Managing Application Versions in Testsigma"
metadesc: "How to manage Application Versions within Testsigma projects"
order: 2.2
page_id: "Manage Application Versions"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Enabling version tracking"
  url: "#i-enabling-version-tracking"
- type: link
  name: "Create Application Version"
  url: "#ii-create-application-version"
- type: link
  name: "Edit Version"
  url: "#iii-edit-version"
- type: link
  name: "Delete Version"
  url: "#iv-delete-version"
- type: link
  name: "Cloning of Version"
  url: "#v-cloning-of-version"
---

The need for version control stems from the idea of constantly changing requirements, constantly changing application features, and hence changes in tests.

Consider a scenario where you have written 10 automated UI Tests for your App version 1.0.0 within Testsigma. A new beta version 1.0.0-beta is being developed that has some cool new features along with the existing ones.

In this case, you can simply make a Version copy of **v1.0.0** in Testsigma and rename that copied version to **v1.0.0-beta**. This copies your existing 10 tests to the **v1.0.0-beta** version and you can add the new tests for the beta version in this. The subsequent changes you make in **v1.0.0-beta** don’t affect your existing tests in the old version **v1.0.0**.

Navigate to **Project Settings > Applications > Versions** to check details about all the Versions that are available in the current Project and Application.
---
##**I. Enabling version tracking**

If there’s only one Version in your Project, the Versions table will be hidden. As shown in the screenshot below, you will not find the versions column next to comments section.

![applications option under project settings in Testsigma](https://docs.testsigma.com/images/versions/applications-option-under-project-settings.png)

To enable the Versions menu, you need to have chosen the “Enable Multiple Versions” option while [creating the project or by editing the project](https://testsigma.com/docs/projects/overview/). Here is how **enabling versioning option in the project** looks while creating the project.

![option to enable versioning option for a project in Testsigma](https://docs.testsigma.com/images/versions/option-to-enable-versioning-option.png)

Alternatively, you can go to **Project settings > Edit** and click on “Enable versioning option in this project” as shown below.

![option to enable versioning for a project on the edit project form in Testsigma](https://docs.testsigma.com/images/versions/option-to-enable-versioning-edit-project-form.png)

Once the Versions menu is enabled, you will be able to see all the Versions created under the specific Application as shown in the screenshot below.

![versions created under a specific application for a project in Testsigma](https://docs.testsigma.com/images/versions/versions-for-an-application-project-Testsigma.png)
---
##**II. Create Application Version**

Make sure the version tracking is enabled as mentioned in section I, navigate to the Versions page by going through **Project Settings > Applications > Versions menu**. Then, click on **+ New Version** as shown below.

![new version button for a specific application for a project in Testsigma](https://docs.testsigma.com/images/versions/new-version-button-for-an-application-project-Testsigma.png)

You will see the following elements i.e, Version Name, a Description, Start and Completion Date, and the versions dropdown. Press Create button to create the version.

![add new version form for a specific application for a project in Testsigma](https://docs.testsigma.com/images/versions/add-new-version-form-for-an-application-project-Testsigma.png)

Once you click on **create** button, you will be able to view your created version in the **versions column** as shown below.

![view created versions for a specific application for a project in Testsigma](https://docs.testsigma.com/images/versions/view-created-versions-for-an-application-project-Testsigma.png)
---
##**III. Edit Version**

Make sure the version tracking is enabled as mentioned in section I, navigate to the Versions page by going through **Project Settings > Applications > Versions** menu.
Click on the specific Application Version from the Versions list. The Version details page opens up like this:

![edit button for a specific version of an application for a project in Testsigma](https://docs.testsigma.com/images/versions/edit-button-application-version-project-Testsigma.png)

Click on the Edit button (pencil icon beside version name) for the Application Version highlighted below to open the Edit Version page.

![edit version form of an application for a project in Testsigma](https://docs.testsigma.com/images/versions/edit-version-form.png)

Make the required changes and click on the Update button to save the changes.
---
##**IV. Delete Version**

Make sure the version tracking is enabled as mentioned in section I, navigate to the Versions page by going through **Project Settings > Applications > Versions** Menu.
Click on the specific Application Version from the Versions list. The Version details page opens up.

Click on the Delete button (trash icon beside version name) for the Application Version (marked area). This will show a warning prompt.

![delete button corresponding to a version for an application in a project in Testsigma](https://docs.testsigma.com/images/versions/delete-button-for-a-version.png)

[[info | NOTE:]]
| By deleting an Application Version, you will lose all data within the Application Version including all the Test Cases, Test Data, Uploads etc.

![confirm action pop-up for deleting a version corresponding to an application in a project in Testsigma](https://docs.testsigma.com/images/versions/delete-version-confirm-action.png)


If you still want to delete the Application Version, confirm the Application Version deletion in the dialog box.
---
##**V. Cloning of Version**

Make sure the version tracking is enabled as mentioned in section I, navigate to the Versions page by going through **Project Settings > Applications > Versions** Menu.

Then, click on the specific Application Version from the Versions list. The Version details page opens up.

Click on the clone button to copy your entire version in the same application .

![copy version button for cloning a version for to an application in a project in Testsigma](https://docs.testsigma.com/images/versions/copy-version-button.png)

On clicking on the clone button, the **Copy version** dialogue box will appear as shown in the screenshot below. You will see **New version name, Start date, and completion date** fields. Click on **create** button to create your copied version.

![create button to copy a version corresponding to an application in a project in Testsigma](https://docs.testsigma.com/images/versions/create-button-copy-version.png)

Here is a screenshot that shows the Copy of **(Sample version 1)** version under the web application that was cloned.

![new copied version corresponding to an application in a project in Testsigma](https://docs.testsigma.com/images/versions/new-copied-version.png)

