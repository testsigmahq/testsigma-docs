---
title: "Test Data Type: Runtime"
page_title: "Runtime Test Data | Testsigma Documentation"
metadesc: "Runtime test data in Testsigma stores data obtained during the execution of Test Cases. Learn how to store runtime test data with example use cases."
noindex: false
order: 5.114
page_id: "runtime-test-data-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Store Data as a Runtime Variable"
  url: "#store-data-as-a-runtime-variable"
- type: link
  name: "Use Runtime Variables in Test Step"
  url: "#use-runtime-variables-in-test-step"
- type: link
  name: "Example Use Cases"
  url: "#example-use-cases"  
---

---

In Testsigma, Runtime Test Data allows you to save data gathered while running a Test Case. For example, you can utilise the Runtime Test Data Type to copy data from one page and confirm its presence on another page. The Runtime Test Data Type in Testsigma lets you dynamically store and use data during the test. You can keep this data as a runtime variable, making automated tests more flexible and adaptable.


<br>

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/New_Doc_Videos/Using_Runtime_Test_Data.mp4" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
          allowfullscreen>
  </iframe>
</div>



---
> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to the [documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case), [projects](https://testsigma.com/docs/projects/overview/), [test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case), [elements](https://testsigma.com/docs/elements/overview/), [test steps](https://testsigma.com/docs/test-cases/step-types/natural-language/), and [test data types](https://testsigma.com/docs/test-data/types/overview/).

---

## **Store Data as a Runtime Variable**

1. Use the **Store** keyword in **NLP** to create a **new step** in the **test case** for saving a dynamic value as Runtime data.
   
2. **Remove** the **test data** placeholder, enter the **text** by storing the data in the text, and click **Create Step** to generate a runtime variable.
   ![Store Variable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Store_Variable.png)

[[info | NOTE:]]
| During the first test run, the application stores the runtime variables and keeps them accessible for future runs. If you need to rerun a test that fails, the application will automatically apply the runtime variables from the initial run.

![Store Data as Runtime Variable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_data/Runtime_1.png)

### **Example:**

1. Use the NLP step **Store the value displayed in the text box element field into a variable test data**.
2. Click the **element** in NLP to select or create an element and replace the **test data** placeholder.
3. Enter the text to store the data in the text field.
4. NLP stores the value displayed in the text box with the UI identifier **Email address Input** (element) into the variable **user-robert** (test data).

[[info | NOTE:]]
| If NLP is utilized to store the test data value in a runtime variable, denoted as **$|runtimeVariable|**, the system will attempt to evaluate the runtime value represented by **$|runtimeVariable|** and then store in the result of the evaluation.<br>
| **Example**: <br>
| Store '**title**' in **$|runtimeVariable|** <br>
| In this case, '**title**' will be stored in the evaluated value of the **runtimeVariable**, not in a variable named '**runtimeVariable**'.
| <br><br>
| Alternatively, if the goal is to simply store the test data value into a variable without any evaluation, a plain text value '**runtimeVariable**' should be used.<br>
| **Example**:<br>
| Store '**title**' in **runtimeVariable**<br>
| Here, '**title**' will be stored in the variable named '**runtimeVariable**'. Subsequently, in the following steps, the variable can be employed in NLP commands, such as entering **$|runtimeVariable|** in an element."

---

## **Use Runtime Variables in Test Step**

1. Use **NLP** to create a **new step** in the **Test Case** and include a placeholder for **test data**.
   
2. Click the **test data** placeholder to replace it, and then select the **$ Runtime** from the **Test Data Types** dropdown menu.
   ![Runtime Test Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Runtime_Test_Data_Type.png)
  
3. A list of runtime variables already created in the project will appear in the **Runtime Variables** overlay.
4. Select the **Runtime Variable** from the overlay or **search** for a runtime variable and insert it into the test steps. You can also click the **Switch Project** button in the overlay, select the **Project**, Application, and Version, and use a Runtime Variable created in other projects. ![Use Runtime Variable in Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/test_data/Runtime_2.png)
  
[[info | NOTE:]]
| The run report will show the following error if you enter a variable name without storing a value. Always remember to store the value in a variable before using it. <br><br>
| No data available for runtime test data variable %s. Refer previous Test Steps in this Test Case or Test Steps in other Test Cases to know the variable names saved by using store(naturalText) action Test Steps. For more information on runtime data type, refer to the [documentation on runtime data type](https://testsigma.com/docs/test-data/types/runtime/). 

---

## **Example Use Cases**

1. **Bill Payment**: After successfully making the payment, you need to save the system-generated Bill ID and use it in the next step for verification.

|Action to use|Store the value displayed in the text box element field into a variable test data.|
|---|---|
|**Actual statement used**|Store the value displayed in the text box **Bill_ID** field into a variable **billid_no**.|
|**Usage for retrieving the value**|Enter **$ billid_no** in the **Enteryour::BillNumber** field.|

2. **SSID Creation for Router**: You want to save the SSID used in a form on the first page so that you can insert it in a form on the last page.

|Action to use|Store text from the element element into a variable test data.|
|---|---|
|**Actual statement used**|Store text from the element **SSID** into a variable **ssid_no**.|
|**Usage for retrieving the value**|Enter **$ ssid_no** in the **Enteryour::SSIDNumber** field.|

---
