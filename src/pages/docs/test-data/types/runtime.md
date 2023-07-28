---
title: "Runtime Test Data Usage"
page_title: "Runtime Test Data in Testsigma"
metadesc: "Runtime test data in Testsigma stores data obtained during the execution of Test Cases. Learn how to store runtime test data with example use cases."
noindex: false
order: 5.114
page_id: "Runtime Test Data Usage"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Example Use Cases"
  url: "#example-use-cases"
- type: link
  name: "How to use Runtime Test Data in test steps"
  url: "#how-to-use-runtime-test-data-in-test-steps"
---

---

Runtime Test Data in Testsigma is used to store data obtained during the run-time i.e during the execution of Test Cases.

To proceed, you should know how to [Creating Test Steps using Natural Language](https://testsigma.com/docs/test-cases/create-steps-nl/overview/)

Assume that your Test Case involves copying a piece of data from one page and verifying if the same data is present on a different page. This can be accomplished by using the Runtime Test Data Type.

The same applies to any case where data needs to be stored earlier and used in a later step.

---
## **Example Use Cases**

1. **Bill payment:** You want to save the system-generated Bill ID and reuse it in the next step for verification after the payment is successful.


| Action to use| Store the value displayed in the text box ui identifier field into a variable test data|
|----|-----|
|**Actual statement used**|**Store the value displayed in the text box Bill\_ID field into a variable bill_id**|
|**Usage for retrieving the value**| **Enter $[bill_id] in the BillNumber field**|

2. **SSID Creation for Router:** You want to save the SSID used in a form on the first page so that it can be inserted in a form on the last page.

|**Action to use**|**Store text from the element ui identifier into a variable test data**|
|----|----|
|**Actual statement used**|**Store text from the element SSID into a variable ssid**|
|**Usage for retrieving the value**|**Enter $[ssid] in the SSIDNumber field**|

---
## **How to use Runtime Test Data in test steps**

To use runtime parameters in test steps, we will need to store actions to save data in the runtime variable. In the example above, you can see that we have used:

1. Store the value displayed in the text box **Bill_ID** field into a variable **bill_id**, 

This means that an auto-generated id will be saved in a variable called ***bill_id***


![step using runtime test data in test steps](https://docs.testsigma.com/images/runtime/runtime-test-data-in-test-steps.png)


2. In the subsequent steps or test cases we can use the ***bill_id*** variable as shown below

Example, Enter **$|bill_id|** in the **BillNumber** field 

This step will enter the value stored in bill_id into the BillNumber field.

![use-runtime-data-via-variable-test-step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/docs/test-data/types/runtime/use-runtime-data-via-variable-test-step.png)

When, in a test step, you choose the test data to be of the type **runtime**, a **Runtime Variables** overlay appears on the right. This overlay contains a list of runtime variables that have already been created. Do note that this list will only contain runtime variables that are part of the same project as the test case and have been set using the Store NLP. Below is a screenshot of how the overlay appears:

![A gif demonstrating how to store value in runtime variable and how to use it in another test step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/types/runtime/runtime-variables-overaly.png )


Below is a gif demonstrating the execution of above 2 steps. 

![Runtime Variables overlay showing list of runtime variables already created](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/types/runtime/runtime-variable-selection-gif.gif)



[[info | NOTE:]]
|- The Runtime variables during the initial run of the test will be stored and available for future runs. In case of a test failure and the need to re-run the test, the runtime variables from the initial run will automatically apply.
|- If you enter a variable name without storing the value, you will see the following error in the run report. Make sure to always store the value into a variable before using it.

[[info | Error Message:]]
| No data available for runtime test data variable %s. Refer previous Test Steps in this Test Case or Test Steps in other Test Cases to know the variable names saved by using store(naturalText) action Test Steps. Go to https://testsigma.com/docs/test-data/types/runtime/ to know more about runtime test data."


---
## **Related Addons**

There are 2 add-ons available to the Testsigma community, that extend the functionality of runtime variables in Testsigma: 

1. **Testdata Values To Runtime Data Transfer**: This addon contains actions to copy testdata from testdata profile to runtime variables. If runtime variable is already present, the variable value will be overridden.
  
     An example NLP from the Addon: 
       **_Store testdata-parameter value into a runtime variable Variable-name_**
 
       Above example Stores test data parameter value into runtime

2. **String Data Generators**: This addon provides string utilities that can be used to manipulate strings in various ways. 
  
     An example NLP from the Addon: 
       **_If test-data starts with/ends with/contains value_**
 
       Above example checks if a given string contains or starts or ends with a provided string.
 
You can get above addons here: [Testsigma Addons](https://testsigma.com/addons). 

To know more about addons, read here: [What Is An Addon?](https://testsigma.com/docs/addons/what-is-an-addon/)
---