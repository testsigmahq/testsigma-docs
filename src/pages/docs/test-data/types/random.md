---
title: "Random Test Data in Testsigma"
meta_desc: "What is Random test data and how to use it in Testsigma"
order: 5.116
page_id: "Random Test Data in Testsigma"
warning: false
---

Many of your Test Cases require inputs which are random in nature. For example, entering an Account number, ID number, phone number e.t.c. With Testsigma you can create a random alphanumeric block of data using Random Test Data.


We assume that you are already familiar with creating Test Steps using simple English with NLP and updating test data type while creating Test Step. If not, refer to [Creating Test Steps using Natural Language](https://testsigma.com/docs/test-cases/create-steps-nl/overview/).

The Random Test Data is invoked by using the ~|<integer>| format where <integer> is a number between 1 and 256. This will generate a random alphanumeric string that has length as specified by integer during execution of the Test Case.

For example, ~|35| is replaced by a 35 character-long alphanumeric string during execution.

![Using Random Test Data in Test Steps](https://docs.testsigma.com/images/random/random-testdata-usage-test-steps-gif.gif)
