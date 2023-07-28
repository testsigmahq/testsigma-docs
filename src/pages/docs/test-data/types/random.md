---
title: "Random Test Data in Testsigma"
metadesc: "Type random data as test data input to your test cases in Testsigma. Learn how to use random text as test data type for your test cases in Test Automation"
noindex: false
order: 5.116
page_id: "Random Test Data in Testsigma"
warning: false
---

---

Many of your Test Cases require inputs which are random in nature. For example, entering an Account number, ID number, phone number e.t.c. With Testsigma you can create a random alphanumeric block of data using Random Test Data.


We assume that you are already familiar with creating Test Steps using simple English with NLP and updating test data type while creating Test Step. If not, refer to [Creating Test Steps using Natural Language](https://testsigma.com/docs/test-cases/create-steps-nl/overview/).

The Random Test Data is invoked by using the ~|<integer>| format where <integer> is a number between 1 and 256. This will generate a random alphanumeric string that has length as specified by integer during execution of the Test Case.

For example, ~|35| is replaced by a 35 character-long alphanumeric string during execution.

![Using Random Test Data in Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/test-data/types/random/random-testdata-usage-test-steps.gif)
