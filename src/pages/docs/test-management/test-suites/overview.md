---
title: "Test Suites"
metadesc: "How to list, create, edit and delete a Test Suite in Testsigma."
order: 8.11
page_id: "Test Suites"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "List Test Suites"
  url: "#list-test-suites"
- type: link
  name: "Create Test Suite"
  url: "#create-test-suite"
- type: link
  name: "Adding Test Cases to Test Suite"
  url: "#adding-test-cases-to-test-suite"
- type: link
  name: "Edit a Test Suite"
  url: "#edit-a-test-suite"   
- type: link
  name: "Delete a Test Suite"
  url: "#delete-a-test-suite"  
---

---

The Test Suite is a set of Test Cases. It helps testers organize the Test Cases while executing and reporting the Test Execution status, namely In progress, Aborted, Stopped, Not Executed, or Completed depending on the consolidated run result of the test cases in that particular test suite. A Test Case can be added to multiple Test Suites.

### Navigation: Test Development > Test Suites

&emsp;
## **List Test Suites**
On the Test Suites page, you will have the below options:

1. **Search option on the top right:**  To search for a test suite by name, use this. The search will filter all the test suite names that contain your search query.

![search option in test suites page in Testsigma](https://docs.testsigma.com/images/test-suites/search-option-test-suites-page-testsigma.png)

2. **Create Button:** Click on the create button on the top right corner of the page to start creating a new Test Suite. We will discuss more on it under the section “Create Test Suite”.
 
![search option in test suites page in Testsigma](https://docs.testsigma.com/images/test-suites/search-option-test-suites-page-testsigma.png)

3. Click on the sort button—the button next to the create button—on the top right to sort the list of Test Suites according to your preference.

![sort option on Test Suites page on Testsigma](https://docs.testsigma.com/images/test-suites/sort-option-test-suites-page-testsigma.png)

You can sort the list Ascending or Descending based on the below fields

* Name
  
* Type
  
* Created Date
  
* Updated Date

&emsp;
4. **When you hover over a Test Suite Name, you will see options to Edit the Test Suite:** We will discuss this in detail in section “Edit Test Suite” Below.

![edit test suite button in Testsigma](https://docs.testsigma.com/images/test-suites/edit-test-suite-button-testsigma.png)

5.  **Delete The Test Suite:** We will discuss this in detail in the section “Delete Test Suite” Below.

![delete test suite button in Testsigma](https://docs.testsigma.com/images/test-suites/delete-test-suite-button-testsigma.png)

6. **Status:** In the status column you can see the recent run result for each test suite.

7. **To see the details of an existing Test Suite, click on it from List View. An opened Test Suite Details page would look something like the screenshot below:**

![Test Suite Details page in Testsigma](https://docs.testsigma.com/images/test-suites/test-suite-details-page-testsigma.png)

More Test Cases can be added and removed from this page by clicking on the “Add Test Case” button.
 
&emsp;

## **Create Test Suite**
Clicking on the Create button takes us to the Create Test Suite page as shown below

![create tests suite page in Testsigma](https://docs.testsigma.com/images/test-suites/create-test-suite-page-testsigma.png)

 
Enter the following details:
 
**Enter the Test Suite Name (Required):** Enter a name for the Test Suite you are creating.

**Description(Optional):** Enter a meaningful description for this requirement elaborating about it.

**Automated/Manual radio button:** Select Automated / Manual depending on the type of Test Cases to be included in the Test Suite.

**Prerequisite:** Select another Test Suite as a prerequisite to be included in an execution with this Test Suite.

**Select Test Cases:** Click on the button “+Add Test Cases” to add Test Cases to the Test Suite. A “Select Test Cases” overlay opens up where we need to select the Test Cases to be included in the Test Case.

[[info | Note:]]
|Please check the below section **Adding Test Cases to Test Suite** for more details on adding Test Cases.

**Labels:** If needed, you can add labels to the test suite you are creating here. It should accept string values.
 
&emsp;

## **Adding Test Cases to Test Suite**
A click on “+ Add Test Cases”, from the “Create Test Suite” Page Or from an existing test suite page will take you to “Select Test Cases” overlay on the the onTest Suites page, as shown below:

![Select Test Cases Overlay to add test cases to test suites in Testsigma](https://docs.testsigma.com/images/test-suites/select-test-cases-overlay-test-suites-testsigma.png)

The following options are present in the “Select Test Cases” overlay page: 
 
1. You can **filter** Test Cases using the drop-down fields **Requirement Name, Type, Priority, Created By, and Labels**
   
2. Filter the Requirements according to your needs and choose the Test Cases to be  included in the current Test Suite by selecting the check box next to the Test Case

![select test cases overlay filters for Test Suites page in Testsigma](https://docs.testsigma.com/images/test-suites/select-test-cases-overlay-filters-testsigma.png)

3. Add test cases to the “Selected Test Cases” section by clicking on “+” icon next to the test cases displayed in the “Available Test Cases” section
 
4. Once you have selected all the test cases you need to add to your test suite, click on the “Save” button to finalize the selection. Your Test Case would be selected and you can see the change in the Create Test Suite page.

[[info | Note:]] 
|You can also change the order of the test cases added in the test suite by drag-and-drop of the test cases.
 
A sample Test Suite with all the required details and Test Cases selected is shown below

![create Test Suite page to add test cases in Testsigma](https://docs.testsigma.com/images/test-suites/create-test-suite-add-test-cases--testsigma.png)

[[info | Note:]]
|Under the ‘Selected Test Cases’ section, the order of the selected test cases can also be changed by simple drag and drop.
 
5. Click on the Create button to Create the Test Suite.

&emsp;

## **Edit a Test Suite**
To edit a test suite, click on the edit button next to the Test Suite name. Once the ‘Edit Test Suite’ page opens, you can follow the steps as mentioned in the Create Test Suite section above.

&emsp;

## **Delete a Test Suite**
1. Hover over a Test Suite on the Tests Suites page and click on the “Delete button” next to the test suite name:

![delete button on test suites page in Testsigma](https://docs.testsigma.com/images/test-suites/delete-button-test-suites-page-testsigma.png)

2. A confirmation dialog will open up, select the checkbox and click on Delete to confirm the deletion.
 
Your Test Suite will be deleted and you will be taken to the Test Suites page.




 



