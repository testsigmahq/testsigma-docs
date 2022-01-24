---
title: "Data Generator in Testsigma"
metadesc: "How to use data generators to create dynamic test data for your test cases"
order: 5.117
page_id: "Data Generator in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Consider an example test case where you need to fill a form. The form contains:"
  url: "#consider-an-example-test-case-where-you-need-to-fill-a-form-the-form-contains"
---
---

You can generate test data within Testsigma using the built-in functions. Let’s see how.
---
##Consider an example test case where you need to fill a form. The form contains:

1. Username - needs to input a unique username
2. Email ID - needs to input an alphanumeric set of input
3. Unique ID - Random Non Zero 
4. Full Name - A name with first and second name 
5. First Name - Valid first name which looks realistic 
6. Last Name - A last name which looks realistic, like, Clinton

Here, using a traditional automation testing framework, you will either have to hardcode all the data or create functions that will output valid test data like an alphanumeric username.

In Testsigma, [these data generator functions are built-in](https://testsigma.com/docs/test-data/data-generators/defalut-list/). You can also [create your own Custom Data Generator](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/).

Check the gif below to understand how to use both default and custom Data Generators.

![Data Generation in Test Steps ](https://docs.testsigma.com/images/data-generator/testdata-generator-username-test-steps.gif)

![Data Generation in Test Steps](https://docs.testsigma.com/images/data-generator/test-datatypesdata-generator.gif)

