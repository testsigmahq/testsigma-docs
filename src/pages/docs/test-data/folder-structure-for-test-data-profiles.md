---
title: "Folder Structure for Test Data Profiles"
pagetitle: "Folder Structure for Test Data Profiles"
metadesc: "Testsigma organizes Test Data Profiles in a two-level folder hierarchy using Features and Scenarios. Learn how to set up and navigate the folder structure."
noindex: false
order: 5.20
page_id: "folder-structure-for-test-data-profiles"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Overview"
  url: "#overview"
- type: link
  name: "Create a Feature"
  url: "#create-a-feature"
- type: link
  name: "Create a Scenario"
  url: "#create-a-scenario"
- type: link
  name: "Add a Test Data Profile to a Folder"
  url: "#add-a-test-data-profile-to-a-folder"
- type: link
  name: "Search for a Test Data Profile"
  url: "#search-for-a-test-data-profile"
---

---

Testsigma organizes Test Data Profiles (TDPs) in a two-level folder hierarchy using **Features** and **Scenarios**. This structure helps you manage test data at scale, reduce visual clutter, and navigate large projects efficiently. Before you create a Test Data Profile, set up the Feature and Scenario folders that will contain it.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have an active Testsigma project with the required permissions to manage test data.

---

## **Overview**

Test Data Profiles are organized in the left panel using the following hierarchy: **Feature > Scenario > Test Data Profile**.

- A **Feature** is the top-level folder that represents a functional area of your application.
- A **Scenario** is a sub-folder nested within a Feature that groups related Test Data Profiles.
- A **Test Data Profile** is the data set stored within a Scenario.

**Features** and **Scenarios** load in a collapsed state by default, so you can expand only what you need. Testsigma preserves the expanded or collapsed state when you switch between tabs, so your navigation context is not lost.

---

## **Create a Feature**

1. From the left navigation bar, go to **Test Data** > **Test Data Profiles**.
   ![navigate to test data profiles from left navigation bar](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Test_Data_Profile_Folder_Navigation.png)

2. At the top of the left panel, click **'+'**.
   ![click plus button at top of left panel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_Test_Data_Profile_with_Plus.png)

3. From the dropdown, select **New Feature**.
   ![select new feature from dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/New_Feature_for_TDP.png)

4. In the **New Feature** dialog, enter a name in the **Feature name** field.
   ![enter feature name in new feature dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Feature_Name_for_TDP.png)

5. Click **Add**.
   ![click add button to create feature](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_New_Feature_Button.png)

The Feature appears in the left panel folder tree.

---

## **Create a Scenario**

1. At the top of the left panel, click **+**.
   ![click plus button at top of left panel for scenario](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/For_Scenario_TDP.png)

2. From the dropdown, select **New Scenario**.
   ![select new scenario from dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/New_Scenario_for_TDP.png)

3. In the **Select Feature** dialog, select the **Feature** under which you want to create the **Scenario**. The selected **Feature** appears under **Target Feature** at the bottom of the dialog.
   ![select feature for scenario in select feature dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Feature_for_Scenario_TDP.png)

4. Click **Next**.
   ![click next in select feature dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Feature_Next.png)

5. Confirm the parent **Feature** shown at the top of the dialog, then enter a name in the **Scenario name** field.
   ![enter scenario name in dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Scenario_Name_for_TDP.png)

6. Click **Create**.
   ![click create to add scenario](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_Scenario_for_TDP.png)

The Scenario appears nested under the selected Feature in the left panel.

---

## **Add a Test Data Profile to a Folder**

You can add a Test Data Profile to a specific Feature and Scenario in two ways.

**From the + menu**

1. At the top of the left panel, click **'+'**.
   ![click plus button at top of left panel to create test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_TDP_from_Top_Plus.png)


2. From the dropdown, select **New Test Data Profile**.
   ![select new test data profile from dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/New_TDP_from_Left_Panel.png)

3. In the **Select Location** dialog, select the **Feature** and then the **Scenario** where you want to store the profile. The selected Scenario appears under **Target Scenario** at the bottom of the dialog.
   ![select feature and scenario in select location dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Location_For_New_TDP.png)

4. Select **Confirm**, then complete the profile creation. For more information, see [Create a Test Data Profile](create-data-profiles.md).
   ![click confirm to set location for test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Click_Confirm_Location_for_TDP.png)

**From the folder tree**

1. In the left panel, expand a **Feature** to reveal its **Scenarios**.

2. Hover over a **Scenario**. A **'+'** icon appears next to the Scenario name.
   ![hover over scenario to reveal plus icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_TDP_from_button_next_to_Scenario.png)

3. Click **+**.

A new **Untitled** Test Data Profile opens in the editing view, already associated with that Scenario. 

> For more information on completing the profile, see [Create a Test Data Profile](create-data-profiles.md).

---

## **Search for a Test Data Profile**

Use the **Search** bar at the top of the left panel to find a Test Data Profile by name. Results filter in real time as you type, across all Features and Scenarios in the project.

---

## **Related articles**

- [Create a Test Data Profile](create-data-profiles.md)
- [Update a Test Data Profile](update-test-data-profile.md)
- [Update Values in a Test Data Profile](add-values-to-test-data-profile.md)

---