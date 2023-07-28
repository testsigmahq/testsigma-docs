---
title: "Data Generator in Testsigma"
metadesc: "You can generate test data within Testsigma app using built-in functions. Learn how to use data generators to create dynamic test data for your test cases"
noindex: false
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
## Consider an example test case where you need to fill a form. The form contains:

1. **Username**: Needs to input a unique username.
2. **Email ID**: Needs to input an alphanumeric set of input.
3. **Unique ID**: Random Non Zero.
4. **Full Name**: A name with first and second name.
5. **First Name**: Valid first name which looks realistic.
6. **Last Name**: A last name which looks realistic, like, Clinton.

Here, using a traditional automation testing framework, you will either have to hardcode all the data or create functions that will output valid test data like an alphanumeric username.

In Testsigma, [These data generator functions are built-in](https://testsigma.com/docs/test-data/data-generators/default-list/). You can also [Create your own Custom Data Generator](https://testsigma.com/tutorials/addons/how-create-addons-test-data-generators/).

Check the GIFs below to understand how to use both default and custom Data Generators.

![Data Generation in Test Steps ](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdg.gif)

![Data Generation in Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tdgen.gif)