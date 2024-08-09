---
title: "Create and Use Test Data Profiles"
pagetitle: "Create and Use Test Data Profiles"
metadesc: "This article discusses steps in detail on how to create test data profiles that can be used in a test cases in Testsigma application."
noindex: false
order: 5.21
page_id: "Create Test Data Profiles"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Create a Test Data Profile"
  url: "#create-a-test-data-profile"
- type: link
  name: "Associate a Test Data Profile with a Test Case"
  url: "#associate-a-test-data-profile-with-a-test-case"
- type: link
  name: "Using Test Data Profile in a Test Case"
  url: "#using-test-data-profile-in-a-test-case"
- type: link
  name: "Data-driven Testing with Dynamic Data Sets"
  url: "#data-driven-testing-with-dynamic-data-sets"
- type: link
  name: "Additional Actions Possible on Test Data Set Name"
  url: "#additional-actions-possible-on-test-data-set-name"
---

---

Test data profiles can significantly enhance the efficiency of your testing process, especially when working with large sets of similar data. For example, to test the login functionality of a website, you may need thousands of data sets. This guide will show you how to create and use test data profiles in Testsigma.

---

## **Prerequisites**

You should know how to create a [test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/) in Testsigma.

---

## **Create a Test Data Profile**

1. Navigate to **Test Data** > **Test Data Profiles** and click on **Create Test Data Profile**. ![create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/click_create_test_data_profile.png)
2. On the **Test Data Profile** details page, enter the **Title** for your test data profile in the **Test Data Profile Info** section. ![enter title for test data profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/enter_title_for_tdp.png)
3. To create rows and columns, click the **+** icon next to the right navigation bar to add a new column, and click the **+** icon below the table to add a new row. ![add rows and column in tdp](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/add_new_row_column_tdp.png)
[[info | **NOTE**:]]
| If you must create test data expected to fail, enable the toggle button in the **ETF** (Expected to Fail) column. 
4. Click on **Create** to save your test data profile.

Here’s a quick GIF that demonstrates how to create a test data profile. 
![create test data profile gif](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/steps_to_create_tdp.gif)

---

## **Associate a Test Data Profile with a Test Case**

1. Navigate to **Create Tests** > **Test Cases** and click on **Create Test Case**. ![create test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_testcase_associate_tdp.png)

2. On the Test Case details page, click on **Test Case Settings** from the right navigation bar.
![Test Case Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdptcdprnb.png)

1. From **Test Case Settings** page, choose **Test Data Profile** from the drodown. 
![Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpatdpftcsp.png)

1. Enable the **Data Driven** toggle. Once you have enable the data driven testing in your test case, you can narrow and customize the various data sets from your test data profile that are being used in your test case using the filters iteration, parameter, set name.
![Data-driven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdptcsipsn.png)
    
    - **Iteration**: This type of filtering applies only to sequential data sets. The data sets can be filtered using the filter operations greater than, less than, or between.
    - **Set name**: This filtering type applies to nonsequential data sets. Here, the data sets are filtered by data set names using the operations between, equals, contains, starts with, and ends with. Any data set names containing the set name or part of it are used in the test case.
    - **Parameter**: This type of filtering is applicable for nonsequential data sets. Here, the data sets are filtered using parameters used in data sets.

1. The **Test Data Profile** is linked to **Test Case**. 

---

## **Using Test Data Profile in a Test Case**
1. Navigate to **Create Tests > Test Cases** and click on **Create Test Case**.
![Create Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpctdp.png)

2. Create test steps as mentioned in the screenshot below:
![Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdptcts.png)

3. Delete ***test data*** placeholder from the above line and choose ***@ Parameters*** from the drop-down.
![Parameter](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpcpdd.png)

4. On **@ Parameter** overlay, select **Test Data Profile** and **Parameter Name**.
![Parameter Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdppddtdppn.png)

Here’s a quick GIF that demonstrates how to associate and use test data profile in a test case. 
![TDP in Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TDPinTCs.gif)


---

## **Data-driven Testing with Dynamic Data Sets**
In data-driven testing, you can only iterate values from start to end. If you want to iterate from data sets from the middle, you have to set the variables in a prerequisite test case and use the variables as start and end by enabling data-driven testing to the test case.


### **Set the Variables in a Prerequisite Test Case**

1. Create a **Test Case** by navigating to **Create Tests > Test Cases**.

![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsapitc.png)


2. Store start and end data values in ***RunTime\_TestData\_Set\_Start*** and ***RunTime\_TestData\_Set\_End***, respectively in your test steps. 

![Store Values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dvsdv.png)


For example, in the above test case, we store **delhi** in ***RunTime\_TestData\_Set\_Start*** and **chennai** in ***RunTime\_TestData\_Set\_End***. 


### **Creating Data-driven Test Cases with Dynamic Data Sets**


1. Create a **Test Case** by navigating to **Create Tests > Test Cases**.

![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsapitc.png)


2. Click on **Test Case Settings** and select the above test case as a prerequisite from the dropdown. 

![Test Case Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddssprereq.png)


3. Select the **Test Data Profile**, enable the **Data Driven** toggle, and select **Overwrite Test Data Set with runtime variable for Data iterates from/to** dropdowns.

![Set Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddstcsettings.png)


4. Create test steps and click on run to execute the test case. 


Alternatively, you can also set values using **Data iterates from/to** dropdowns. 

![Alternatively](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ddsalternative.png)

---


## **Additional Actions Possible on Test Data Set Name**

1. **Store**: When a test data profile is associated with a test case. The test data set name associated with the test data profile can be stored into a variable for later use as well. Below is how the syntax for the Store NLP looks like:

![store-iteration-count-test-data-set-name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/for-loop/store-iteration-count-test-data-set-name.png)


2. **if**: The test data set values, from a test data profile being iterated, can be compared within an if condition too. Below screenshot shows the NLP (The NLP can be added as a part of add-on “String Compare”. You can find the add-ons to use here: https://testsigma.com/addons):

![the verify if NLP that is available with the addon String Compare](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-cases/step-types/step-group/verify-with-if-with-string-compare.png)

---