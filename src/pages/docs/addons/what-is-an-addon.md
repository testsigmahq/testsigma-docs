---
title: "Using Add-ons to Extend the Testsigma Actions"
page_title: "Using Add-ons to extend Testsigma Functionality"
metadesc: "This article discusses what are add-ons, why are they useful, and how to use them to extend functionality for unique cases in Testsigma"
order: 17.1
page_id: "Using add-ons to extend the Testsigma Actions"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "What is an add-on?"
  url: "#what-is-an-add-on"
- type: link
  name: "Why do you need add-ons?"
  url: "#why-do-you-need-add-ons"
- type: link
  name: "How do you use add-ons?"
  url: "#how-do-you-use-add-ons"
---

---
## **What is an add-on?**

An add-on is a way to extend Testsigma’s built-in repository of actions with custom actions. These actions can be anything from **click first**, **then scroll**, **click again, scroll indefinitely till the bottom of the page**, and so on.

---
## **Why do you need add-ons?**

End to end testing involves automating a large number of diverse features and functionalities within the Application under Test (AUT), some of which may be unique to an AUT.

Testsigma automates a diverse set of actions via its simple English based actions, but sometimes there are unique actions you need to automate in a test. Since it is not feasible to predict action statements for all these scenarios beforehand, we provide a dynamic solution to extend the built-in actions, i.e., add-ons.

For example, the **scroll indefinitely till the bottom of the page** action is applicable to an application that has a huge list of items where the list keeps adding individual items to a list until the user scrolls to the end. Think Pinterest, or an e-commerce website listing clothes.

If your test case involves scrolling to the bottom of the page to verify the copyright, you can create an add-on to automate it at scale using Testsigma.

---


## **How do you use add-ons?**
You can use the pre-existing add-ons available in **Community**. 
![Addons](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/addonsPagecas.png)

If you are creating your own add-on, you can share it with the rest of the test automation community through the Add-ons Community Marketplace. You can also keep a private repository of add-ons that is only accessible to you. This is handy if your add-on has proprietary code for your specific applications.

Here's a quick GIF demonstrating how to install an addon in Testsigma.
![Network Throttling Addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ntaddonGIF.gif)

---