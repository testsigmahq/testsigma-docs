---
title: "Runtime Test Data Usage"
page_title: "Runtime Test Data in Testsigma"
metadesc: "How to create and use session-specific runtime test data for storing temporary values as test data and performing validation using the stored data"
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
##**Example Use Cases**

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
##**How to use Runtime Test Data in test steps**

To use runtime parameters in test steps, we will need to store actions to save data in the runtime variable. In the example above, you can see that we have used:

Store the value displayed in the text box **Bill_ID** field into a variable **bill_id**, 

This means that an auto-generated id will be saved in a variable called bill_id


![step using runtime test data in test steps](https://docs.testsigma.com/images/runtime/runtime-test-data-in-test-steps.png)


In the subsequent steps or test cases we can use the bill_id variable as shown below

Ex. Enter **$|bill_id|** in the **BillNumber** field 

This step will enter the value stored in bill_id into the BillNumber field.

![use-runtime-data-via-variable-test-step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/docs/test-data/types/runtime/use-runtime-data-via-variable-test-step.png)

[[info | NOTE:]]
| If you enter a variable name without storing the value, you will see the following error in the run report. Make sure to always store the value into a variable before using it. 




[[info | Error Message:]]
| No data available for runtime test data variable %s. Refer previous Test Steps in this Test Case or Test Steps in other Test Cases to know the variable names saved by using store(naturalText) action Test Steps. Go to https://testsigma.com/docs/test-data/types/runtime/ to know more about runtime test data.";









