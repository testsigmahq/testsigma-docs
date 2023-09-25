---
title: "Random Test Data in Testsigma"
metadesc: "Type random data as test data input to your test cases in Testsigma. Learn how to use random text as test data type for your test cases in Test Automation"
noindex: false
order: 5.116
page_id: "Random Test Data in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Using Random Test Data"
  url: "#using-random-test-data"
---

---

Many test cases need random inputs such as inputting an account number, ID number, phone number, etc. With Testsigma, you can create random alphanumeric data blocks through its Random Test Data.

--- 

## **Prerequisites**
- You should be familiar with [test step creation using NLPs](https://testsigma.com/docs/test-cases/create-steps-nl/overview/).

---

## **Using Random Test Data**
You can use the Random Test Data feature in your test cases by specifying a number ranging from 1 to 256. This will generate a random alphanumeric string with a length as specified by the number during the execution of the test case.

For example, you have a test case that requires entering an account number, and you want to generate a random 10-digit account number for every execution. You can achieve this using the format ~|10| within your Test Case.

![Random Test Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/RTDTDT.png)

Here is a quick GIF demonstrating how to add Random Data to a Test Case in Testsigma.
![Random Test Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rdtdgif.gif)