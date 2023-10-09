---
title: "Plain Text"
metadesc: "Type anything you want as test data input to your test cases in Testsigma. Learn how to use plain text as test data type for your test cases in Test Automation"
noindex: false
order: 5.112
page_id: "Test Data - Plain Text"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "When to Use Plain Text in a Test Case?"
  url: "#when-to-use-plain-text-in-a-test-case"
- type: link
  name: "How to Use Plain Text in a Test Case?"
  url: "#how-to-use-plain-text-in-a-test-case"
---

---

Raw or Plain Text is the simplest text data type you can use in your test case. Use the NLP that has test data in it. 

For example, ‘**Enter *test data* in *element* field**’ is a NLP. Here, you can erase the ***test data*** placeholder and choose ***Plain Text*** from the dropdown to type anything you want as the input to your test.

---

## **When to Use Plain Text in a Test Case?**
Plain Text or Raw data is used when you want to hardcode an input in your test. In cases where the input data is unique and doesn’t have to be a part of a test data profile or any other test data types, we use plain text data.

**For Example:**
Here we are using the NLP, **Wait for *test data* seconds**. 

![Plain Text Example](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pttsteps.png)


We’ll select **Plain Text** from the dropdown and enter a number to create a test step. 

---

## **How to Use Plain Text in a Test Case?**
1. Navigate to **Create Tests > Test Cases** and click on **Create Test Case**.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ptntcs.png)

2. Create a test step with NLP that has ***test data*** in it and choose **Plain Text** from the dropdown. 
![Plain Text](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/pttsnllp.png)

3. Here, erase ***test data*** and enter a number to create the test step.
![Erase Test Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ptetd.png)

[[info | **NOTE**:]]
| You can replace plain text with anything depending on the test case scenario. 

Here’s a quick GIF demonstrating how to use Plain Text in a test case. 
![Plain Text](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/PlainTextWF.gif)

---