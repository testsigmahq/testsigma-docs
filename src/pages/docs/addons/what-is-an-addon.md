---
title: "Using Addons to Extend the Testsigma Actions"
page_title: "Using Addons to extend Testsigma Functionality"
metadesc: "This article discusses what are addons, why are they useful, and how to use them to extend functionality for unique cases in Testsigma"
order: 18.1
page_id: "Using addons to extend the Testsigma Actions"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "What is an addon?"
  url: "#what-is-an-addon"
- type: link
  name: "Why do you need addons?"
  url: "#why-do-you-need-addons"
- type: link
  name: "How do you use addons?"
  url: "#how-do-you-use-addons"
---

---
## **What is an addon?**

An addon is a way to extend Testsigma’s built-in repository of actions with custom actions. These actions can be anything from **click first**, **then scroll**, **click again, scroll indefinitely till the bottom of the page**, and so on.

---
## **Why do you need addons?**

End to end testing involves automating a large number of diverse features and functionalities within the Application under Test (AUT), some of which may be unique to an AUT.

Testsigma automates a diverse set of actions via its simple English based actions, but sometimes there are unique actions you need to automate in a test. Since it is not feasible to predict action statements for all these scenarios beforehand, we provide a dynamic solution to extend the built-in actions, i.e., addons.

For example, the **scroll indefinitely till the bottom of the page** action is applicable to an application that has a huge list of items where the list keeps adding individual items to a list until the user scrolls to the end. Think Pinterest, or an e-commerce website listing clothes.

If your test case involves scrolling to the bottom of the page to verify the copyright, you can create an addon to automate it at scale using Testsigma.

---


## **How do you use addons?**
You can use the pre-existing addons available in **Community**. 
![Addons](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_what_is_addon_1.png)

If you are creating your own addon, you can share it with the rest of the test automation community through the Addons Community Marketplace. You can also keep a private repository of addons that is only accessible to you. This is handy if your addon has proprietary code for your specific applications.

Addons are engine-specific: Classic applications use Java addons, and Modern applications use TypeScript addons. See [Modern addons in Testsigma](https://testsigma.com/docs/addons/modern/overview/) and [execution engines](https://testsigma.com/docs/projects/overview/#execution-engines).

---