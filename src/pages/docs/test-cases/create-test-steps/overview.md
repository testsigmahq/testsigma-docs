---
title: "Create Test Steps in Testsigma"
metadesc: "This article discusses creating test steps manually using simple English (NLPs) as well as with a recorder for web, mobile web, Android, & iOS app in Testsigma"
noindex: false
order: 4.60
page_id: "Create Test Steps in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Creating Test Steps Manually"
  url: "#creating-test-steps-manually"
- type: link
  name: "Creating Test Steps Using Test Recorder"
  url: "#creating-test-steps-using-test-recorder"
---

---

In Testsigma terminology, each automated action executed by the test script is a test step. For example, in a login form, **Enter &lt;username&gt; in the &lt;username&gt; field** is a test step. This article discusses creating test steps for web, mobile web, Android, and iOS applications using Testsigma recorder & simple English (NLPs). 

---

> ## **Prerequisites**
> 
> Before you begin, ensure you're familiar with concepts of [Features and Scenarios](https://testsigma.com/docs/test-cases/manage/features-and-scenarios/), [Test Step Types](https://testsigma.com/docs/test-cases/step-types/overview/), have installed the [Test Recorder](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/), and have a Web/Android/iOS app to test. 


---

## **Creating Test Steps Manually**

### **Web & Mobile Web**

1. From the left navigation bar, go to **Create Tests** > **Test Cases**. 
   ![Left Navigation Bar](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Left_NavBar_TestCases.png)

2. In the **Test Case Explorer** section, expand the required feature and click the **+** icon next to the target scenario. This will open a dialog box. 
   ![Feature Test Case Explorer](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Feature_Test_case_explorer.png)

3. On the dialog box, validate the target feature and scenario, enter the name, and click **Create**. 
   ![Test Case Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Case_Name.png)

   Alternatively, click the **+** icon next to the search bar and select **New Test Case** from the drop-down menu. Follow the same steps as above.  
   ![Search bar test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Search_bar_test_case.png)

[[info | **NOTE**:]]
|
| - You can edit the target feature and scenario by clicking on the **Edit** icon. This will open the **Select Location** dialog.
|   ![Scenario Change Edit Icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Scenario_Change_Edit_Icon.png) 
| - In the **Select Location** dialog, select the target feature and scenario and click **Confirm**.  
|   ![Select Scenario Location ](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Select_Scenario_Location.png)
| - This feature functions consistently across all applications.

4. Use NLPs to create test steps as per the test case scenario. 
   
   For example, if you’re creating test steps for the login page, your test steps will be:
   1. Navigate to https://simply-travel.testsigma.com/
   2. Click on **Login or Sign Up**
   3. Click on **Login**
   4. Enter <**email**> in the <**email address**> field
   5. Click on **Continue**
   6. Enter <**password**> in the <**password**> field
   7. Click on **Submit**

   Here's a screenshot of the test steps that were reproduced in the Testsigma application:
   ![Login New Credentials 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Login_New_Credentials_1.png)
   
### **Android and iOS** 

1. From the left navigation bar, go to **Create Tests** > **Test Case**. 
   ![Android Create Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Android_Create_Test_Case.png)

2. In the **Test Case Explorer** section, expand the required feature and click the **+** icon next to the target scenario. This will open a dialog box. 
   ![Android New Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Android_New_Test_Case.png) 

3. On the dialog box, validate the target feature and scenario, enter the name, and click **Create**. 
   ![Test Case Name New](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Case_Name_New.png)

   Alternatively, click the **+** icon next to the search bar and select **New Test Case** from the drop-down menu. Follow the same steps as above.  
   ![Search Bar Test Case Selection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Search_Bar_Test_Case_Selection.png)

4. Use NLPs to create test steps as per the test case scenario.

[[info | **NOTE**:]]
|
| - By default, the first step for Android and iOS applications is **Launch App**.
| - You can also add steps above and below a test step by clicking on **Step Above** & **Step Below**. 
|   ![Create New Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_New_Steps.png)


---

## **Creating Test Steps Using Test Recorder**

### **Web and Mobile Web**

1. From the left navigation bar, go to **Create Tests** > **Test Cases**. 
   ![Record Create Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Record_Create_Test_Case.png)

2. In the **Test Case Explorer** section, expand the required feature and click the **+** icon next to the target scenario. This will open a dialog box. 
   ![Plus Icon Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Plus_Icon_Test_Case.png)
  

3. On the dialog box, validate the target feature and scenario, enter the name, and click **Create**. 
   ![Record Test Case Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Record_Test_Case_Name.png)

   Alternatively, click the **+** icon next to the search bar and select **New Test Case** from the drop-down menu. Follow the same steps as above. 
   ![Record Search Bar Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Record_Search_Bar_Test_Case.png)

4. Create a test step using the URL that you want to automate and click **Create Step**.
   ![Create Steps Button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Steps_Button.png)

5. Click **Record**. 
   ![Record Button](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Record_Button.png)

6. A new window will open the given URL.
   ![New Window URL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/New_Window_URL.png)

[[info | **NOTE**:]]
| 
| - Please wait until the web page is fully loaded so the extension can collect information from the page in the background.

7. Once the first web page is fully loaded, start interacting and performing actions on the page.

8. The actions will be recorded and added to the test case in the background.

9. Once the required actions are complete, click on **Stop** to switch back to the test case details page.
   ![Record Stop Buton](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Record_Stop_Button.png)

10. You can see the steps recorded in the test case details page.
   ![Recorded Steps 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Recorded_Steps_1.png)

### **Android and iOS** 

1. From the left navigation bar, go to **Create Tests** > **Test Cases**.
   ![Create Test Case iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Create_Test_Case_iOS.png)

2. In the **Test Case Explorer** section, expand the required feature and click the **+** icon next to the target scenario. This will open a dialog box. 
   ![New Test Case iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/New_Test_Case_iOS.png)

3. On the dialog box, validate the target feature and scenario, enter the name, and click **Create**. 
   ![Test Case Name iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Test_Case_Name_iOS.png)

   Alternatively, click the **+** icon next to the search bar and select **New Test Case** from the drop-down menu. Follow the same steps as above.  
   ![Search Bar Test Case iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Search_Bar_Test_Case_iOS.png)

4. Click **Create Step** and click **Record**.  
   ![Start Test Case Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Start_Test_Case_Steps.png)

5. In the **Record test steps** overlay, select the required options in the **Test Lab** and **Test Machine** sections.
      ![Record Settings 1](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Record_Settings_1.png)

6. Click **Upload** and upload the required file.
   ![Upload iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Upload_iOS.png)

7. Click **Record**.
   ![Record Button iOS](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Record_Button_iOS.png)

8. Perform the actions on the application and once the required actions are complete, stop the recording to switch back to the test case details page.

9.  The test case details page will display the steps performed on the application.



[[info | **NOTE**:]]
| 
| - If direct recording doesn't work, revert to the old method and use the **TAP** button to record the element.





---