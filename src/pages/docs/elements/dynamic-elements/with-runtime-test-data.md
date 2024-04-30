---
title: "Dynamic Locators using Runtime"
page_title: "Dynamic Locators using Runtime: Enhance Test Stability"
metadesc: "Learn how to dynamically locate elements at runtime to stable automated tests. Efficiently manage elements in your testing workflow without interruptions."
order: 6.82
page_id: "dynamic-locators-using-runtime-in-testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Store Element into Runtime Variable"
  url: "#store-element-into-runtime-variable"
- type: link
  name: "Creating Dynamic Elements using Runtime Test Data"
  url: "#creating-dynamic-elements-using-runtime-test-data"
- type: link
  name: "Implementing Dynamic Locators using Runtime"
  url: "#implementing-dynamic-locators-using-runtime"  
---

---

Dynamic locators are essential in handling web elements that may undergo attribute changes during test execution. Traditional locators like XPath or CSS selectors may lose reliability when these dynamic changes occur. Testsigma offers a solution that enables you to create dynamic locators at runtime, guaranteeing the stability and dependability of your automated tests. This documentation guides you through utilising dynamic locators in Testsigma by storing elements into Runtime Variables.

---

## **Prerequisites**

Before implementing dynamic locators using Runtime in Testsigma, ensure you have a solid understanding of key concepts such as creating a [Test Case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case), managing [Runtime Test Data](https://testsigma.com/docs/test-data/types/runtime/) and [Elements](https://testsigma.com/docs/elements/web-apps/capture-single-element/), handling [Test Steps](https://testsigma.com/docs/test-cases/step-types/natural-language/), and effectively utilising different [Test Data Types](https://testsigma.com/docs/test-data/types/overview/).

---

## **Store Element into Runtime Variable**

We will manually create an element and store it in a Runtime Variable to create dynamic locators. This is important because recording dynamic elements may not be reliable.

1. Create a **new step** in your **Test Case** using **NLP**. Use placeholders for **elements** and **test data** to create an element and store it as a Runtime Variable. ![Use Element Test Data NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/element_testdata_runtime_ts.png)

    [[info | Example:]]
   | Use NLP "Store text from the **element** into a variable **test data**". The NLP helps you store text from an element identified into a variable.

2. Click on the element, then select **Create Element** from the dropdown list. The Create Element overlay screen will appear on the right side of the page. Manually enter the **Element Name**, **Screen Name**, **Element Type**, and **Element Value**. Finally, click **Create Element** to complete the element creation. ![Create Element to store](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/storeelement_ts_dr.gif)

3. Substitute specific **text** for the **test data** placeholder and click **Create Step** to save the test step, storing the element within the text as a Runtime Variable. ![Store Element in Runtime](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/storeelement_runimte.gif)

   [[info | Example:]]
   | - We are using the **Simply Travel Flight** website as an example. If we want to locate the **Login or Sign Up** button and its XPath is **(//\*[@id="login-signup"]/div)**, we can store its value in a runtime variable **($|login|)**. 
   | - When we run the test, we can use this variable to locate the button. If the value changes later, we can update it without affecting the test. This method works even if the button is used in different test steps and its value changes.

---

## **Creating Dynamic Elements using Runtime Test Data**

1. Use **NLP** to create a **new step** in the **Test Case** and include a placeholder for the **element**. ![Use Element NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/use_element_nlp.png)

   [[info | Example:]]
   | Utilise NLP "Click on **Element**" to click an element with a given UI Identifier.

2. Click on the element, then select **Create Element** from the dropdown list. The Create Element overlay screen will appear on the right side of the page. Manually enter the **Element Name**, **Screen Name**, and **Element Type**.
3. Provide Dynamic Element Value **//*["$|login|"]/div**, where '**login**' is the stored Runtime Variable. Click **Create Element** to complete element creation. ![create_element using runtime](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_runtimeelement.gif)

   [[info | Example:]]
   | During testing, accurately locate the actual 'Login or Sign Up' element on the Simply Travel Flight website with the dynamic XPath **//*["$|login|"]/div** using the Runtime Variable 'login'.

---

## **Implementing Dynamic Locators using Runtime**

With the Runtime Variable in place, follow these steps to implement dynamic locators in your test cases:

1. Add a new step in the test case where interaction with the dynamic element is required.
2. Manually select the dynamic element and proceed with your test steps. Testsigma will dynamically locate the element during test execution. ![Use Runtime for Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/usedynamic_runtimevariable.gif)

---
