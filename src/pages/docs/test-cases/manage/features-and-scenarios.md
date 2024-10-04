---
title: "Organizing Test Cases in Folders (✨ New)"
pagetitle: "Organize Test Cases"
metadesc: "Effortlessly organize test cases by features & scenarios, which provides a complete view of test coverage. The folder structure also simplifies the navigation."
noindex: false
order: 4.10
page_id: "Folder Structure for Test Cases"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Why Do We Have Folder Structure?"
  url: "#why-do-we-have-folder-structure"
- type: link
  name: "Understanding Folder Structure"
  url: "#understanding-folder-structure"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Features"
  url: "#steps-to-create-features"
- type: link
  name: "Steps to Create Scenarios"
  url: "#steps-to-create-scenarios"
---

---

With Testsigma's new folder structure, you can organize test cases by features, which provides a comprehensive view of test coverage. Each feature will have multiple scenarios, each with its respective test cases. This structure helps manage test cases based on specific scenarios and scenarios based on Features.

---

## **Why Do We Have Folder Structure?**
Introducing folder structure for test cases simplifies finding and managing tests. In large test setups, organizing tests is very important as it plays a key role in quickly locating specific test cases. This will save you much time and increase productivity. This folder structure also prevents duplication of test cases, streamlining the workflow. A well-organized folder system helps teams easily find and create test cases, improving collaboration and reducing confusion.

---

## **Understanding Folder Structure**

![Folders](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/FlowofFolders.png)

Let's say you're creating test cases for an **Online Shopping App**. 

- In this case, you can have **User Authentication**, **Product Search**, and **Shopping Cart** as **Features** under **Test Cases**. 

- Each Feature can have multiple Scenarios like the examples mentioned below:

📁 **Test Cases (Master Folder)**
   - **User Authentication**
       - Login
       - Logout
   - **Product Search**
       - Search by Keyword
       - Filter Results
   - **Shopping Cart**
       - Add to Cart
       - Remove from Cart

- The scenarios will have multiple test cases. In this cases, for **Login & Logout** scenarios, we can have the following test cases:
    1. **Login**
       - Login with valid credentials
       - Login with invalid credentials & verify error message
    2. **Logout**
       - Verify successful logout
       - Verify session expiration after logout

---

> ## **Prerequisites**
>
> Ensure you create a [Project](https://testsigma.com/docs/projects/overview/) before creating Test Cases in Testsigma. 

---

## **Steps to Create Features** 

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Click **+** and choose **Add Feature** from the dropdown menu.

3. In the **Add Feature** dialog, enter a name for the feature and click **Add**.

4. The new feature will appear under the **Test Cases** section.

Here's a quick GIF demonstrating steps to create features. 

![Features](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/FeatureFlow.gif)

---

## **Steps to Create Scenarios**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Click **+** and choose **Add Scenario** from the dropdown menu.

3. In the **Select Feature** dialog, choose the target feature and click **Next**. 

4. In the dialog box that pops up, enter a name for the scenario and click **Create**.

5. The new scenario will appear under **Test Cases > Feature**.

6. Click **<** to minimize the **Features & Scenarios** section.

Here's a quick GIF demonstrating steps to create scenarios. 

![Scenarios](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ScenarioFlow.gif)

[[info | **NOTE**:]]
| - You can click **List View** and perform list actions here. For more information, see [List Actions](https://testsigma.com/docs/test-cases/manage/list-actions/).
| - This will also help you filter test cases with **Scenarios** while creating test suites.
| ![Filter While adding Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/FilterScenarios_TestSuites.png)

---