---
title: "Test Data - Plain Text"
metadesc: "Type anything you want as test data input to your test cases in Testsigma. Learn how to use plain text as test data type for your test cases in Test Automation"
noindex: false
order: 5.112
page_id: "Test Data - Plain Text"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "When do you use Plain Text?"
  url: "#when-do-you-use-plain-text"
---

---

Plain Text is the simplest type of text data that can be used in your test case. 
Simply erase the “test data” placeholder and choose “Plain Text” to type anything you want as the input to your test. 

Plain Text also serves as a hard-coded input. 

---
## **When do you use Plain Text?**

Plain Text or Raw data is used when you want to hardcode an input in your test.
In cases where the input data is unique and doesn’t have to be a part of a test data profile or any other test data types, we use plain text data.



### **For example :**

Verify that the **elements** list has option with text test data selected 

→

 Verify that the **elements** list has option with text Option1 selected

![plain-text-test-data-input](https://docs.testsigma.com/images/raw/plain-text-test-data-input.gif)

In the above example , Option1 is the Plain Text test data that we have used in place of the placeholder “test data”. You can use any text input to verify the text. 

### **Another Example :**

Long Press on the element **elements** for **test data** seconds 

→ 

Long Press on the element **elements** for **10** seconds 


In the above example, we have entered a value of ‘10’ for test data. So the test will press on an element for 10 seconds.


In conclusion, Plain Text is simply the hard-coded text that you can use in your text. 






### **To use plain text in your test cases, follow these steps**

1. Create a test case by navigating to Test Development > Test Cases > Create

![navigate to create test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/types/raw/navigate-to-create-test-case.png)


2. Create a test case by entering a name, description and choosing options from the advanced menu
3. Click Create

![create new test case](https://docs.testsigma.com/images/raw/create-new-test-case.png)

4. Testsigma will automatically navigate you to the test case details/test steps page
5. Here create the first step for navigating to the application
6. In the next step, choose the actions containing “test data” like Enter **test data** in the **elements** field

![choose nlp with test data](https://docs.testsigma.com/images/raw/choose-nlp-with-test-data.png)

7. Now delete the “test data“ placeholder and choose Plain Text from the drop-down options

![choose plain text option](https://docs.testsigma.com/images/raw/choose-plain-text-option.png)

8. Enter the text of your choice