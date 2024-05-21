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

For example, you have a test case that requires entering a passport number, and you want to generate a random 9-digit passport number for every execution. You can achieve this using Random test data type in your Test Case.

![Random Test Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/rndmtdtype.png)

Here is a quick GIF demonstrating how to add Random Data to a Test Case in Testsigma.
![Random Test Data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/RandomTestData.gif)


[[info | **NOTE**:]]
| <br> **Using random data may lead to unrepeatable results.** You can mitigate this by logging (or otherwise recording) every random choice you make and then playing those choices back.  That could be as easy as recording the initial seed to your random number generator, assuming your data does not change over time.
| <br><br>
| **Writing tests in a general enough way to deal with arbitrary, randomly selected data can be hard.** This is the harder problem. Choosing a different random integer is one thing; choosing a different user (with properties that vary from one user to the next) is something else.  Consider how a test works in the abstract: it chooses some inputs, applies them to a function, and verifies the result.
| <br><br> 
|**There are a few ways to approach that:**
| - **The developer precalculates the expected result and hardcodes it into the test.**  That only works if the developer decides on the inputs ahead of time.
| - **The test uses the inputs to calculate the expected result and then compares that to the actual result.**  If the test can use arbitrary (random inputs), this means the test needs to replicate a lot of the logic in the system under test.    This is almost certainly not what you want, especially for a complicated system.  You are just as likely as the developer to implement a complex algorithm in a buggy way.
| - **The test uses some other means of verifying that the result matches the input.** Sometimes, there are shortcuts or at least alternatives you can take to verify a result.  As a naive example, if a system sums a list of numbers, you might verify the result by subtracting the list from the sum and then checking whether the new result is zero.  Most systems cannot be tested this way.
|<br><br>
|
|A good place to use randomly selected data is in a **comparator test**, where you compare two versions of the same system using the same inputs.  A comparator test will not tell you whether a system is correct, but it will help you find changes in behavior. That might be something for you to consider.



---