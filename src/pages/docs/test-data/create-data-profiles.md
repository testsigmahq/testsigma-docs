---
title: "Create Test Data Profiles"
metadesc: "This article discusses steps in detail on how to create test data profiles that can be used in a test cases in Testsigma application."
noindex: false
order: 5.21
page_id: "Create Test Data Profiles"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Create Test Data Profiles"
  url: "#steps-to-create-test-data-profiles"
- type: link
  name: "Steps to Associate Test Data Profile to a Test Case"
  url: "#steps-to-associate-test-data-profile-to-a-test-case"
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

Test data profiles can significantly help the efficiency of your testing process, especially when dealing with large sets of similar data. For example, we need 1000s of data sets to test the login functionality of any website. Test data profiles are helpful in such cases. This article will discuss how to create a test data profile. 

---

## **Prerequisites**
- You should know how to [create a test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).

---

## **Steps to Create Test Data Profiles**
1. Navigate to **Test Data > Test Data Profiles** and click on **Create Test Data Profile**. 
![Create Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpcreate.png)

2. On the **Test Data Profile** page that opens, go to **Test Data Profile Info** and enter the name you want to assign to your test data profile.
![Test Data Profile Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpname.png)

3. Add rows and columns as per the requirements by clicking on **Add New Row** and **Add New Column** respectively. 
![Rowns & Columns](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdprowsacolumns.png)

[[info | **NOTE**:]]
| If you want to create test data that is expected to fail, you can enable the toggle button in the column **ETP** (Expected to Fail). 
|[ETF](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpetf.png)

5. Click on **Create**. 
![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpcbutton.png)

Here’s a quick GIF that demonstrates how to create a test data profile. 
![Create Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/CreateTDPWF.gif)

---

## **Steps to Associate Test Data Profile to a Test Case**
1. Navigate to **Create Tests > Test Cases** and click on **Create Test Case**.
![Create Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpctdp.png)

2. On **Test Case details** page, go to right side navigation bar and click on **Test Case Settings**.
![Test Case Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdptcdprnb.png)

3. From **Test Case Settings** page, choose **Test Data Profile** from the drodown. 
![Test Data Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdpatdpftcsp.png)

4. Enable the **Data Driven** toggle. Once you have enable the data driven testing in your test case, you can narrow and customize the various data sets from your test data profile that are being used in your test case using the filters iteration, parameter, set name.
![Data-driven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdptcsipsn.png)
    
    - **Iteration**: This type of filtering applies only to sequential data sets. The data sets can be filtered using the filter operations greater than, less than, or between.
    - **Set name**: This filtering type applies to nonsequential data sets. Here, the data sets are filtered by data set names using the operations between, equals, contains, starts with, and ends with. Any data set names containing the set name or part of it are used in the test case.
    - **Parameter**: This type of filtering is applicable for nonsequential data sets. Here, the data sets are filtered using parameters used in data sets.

4. The **Test Data Profile** is linked to **Test Case**. 

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