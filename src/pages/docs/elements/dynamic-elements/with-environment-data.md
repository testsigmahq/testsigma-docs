---
title: "Using Environment Test Data for Dynamic Locators"
metadesc: "Learn how to use Environment parameters for creating dynamic locator values in Elements. Automate the testing of dynamic elements in Testsigma application."
noindex: false
order: 6.83
page_id: "Using Environment Test Data for Dynamic locators"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Using Environment Test Data to parameterize locators"
  url: "#using-environment-test-data-to-parameterize-locators"

---

---

In Testsigma, one of the ways we can automate the testing of dynamic elements is by using parameterized XPath. We assume you are familiar with the different types of Test Data used in Testsigma. If not, please refer to [different test data types in Testsigma](https://testsigma.com/docs/test-data/types/overview/).

We can use Environment Parameters to parameterize the locator similar to how we use test data profiles. Learn more about [using Parameter Test Data to create dynamic locators](https://testsigma.com/docs/elements/dynamic-elements/with-parameter-test-data/).

In this article, we will be outlining how to create dynamic locators using Environment parameters.

---

## **Using Environment Test Data to parameterize locators**

Suppose we need to locate the below element with the username text i.e  ‘admin’:
![Dropdown on profile avatar icon showing logout link and profile name](https://docs.testsigma.com/images/with-environment-data/profile-icon-dropdown-links-username.png)

An XPath locator using the text for the element would be //div[ text()=‘admin’ ]


Let’s assume that this username would be different for different Environments as shown below:

| Environment Name     | Environment Parameters |
| :---        |    :---   |       
| Dev     | {“Username”: “dev-admin”} | 
| Staging   | {“Username”: “staging-admin”} | 
| QA  | {“Username”: “qa-admin”}  | 


Here, we can make the XPath dynamic by taking the username from the Environment Parameter as demonstrated below:
**//button[text()=’*|username|’]**

With the above dynamic locator, the locator value would be dynamically updated at runtime and the environment variable would be translated to its actual value as shown below:

| Selected Environment Name    |Dynamic Element locator value at Test Runtime |
| :---        |    :---   |       
| Dev     | //button[text()=’dev-admin’] | 
| Staging   | //button[text()=staging-admin’] | 
| QA  | //button[text()=’qa-admin’]  | 


---