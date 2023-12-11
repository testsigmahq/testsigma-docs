---
title: "Testsigma Terminology"
metadesc: "A glossary of terms you’ll come across while  working with Testsigma App"
noindex: false
order: 1.7
page_id: "Testsigma Terminology"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Natural Language Action"
  url: "#natural-language-action"
- type: link
  name: "Test Case"
  url: "#test-case"
- type: link
  name: "Step Group"
  url: "#step-group"
- type: link
  name: "Test Data"
  url: "#test-data"
- type: link
  name: "Element"
  url: "#element"
- type: link
  name: "Elements Repository"
  url: "#elements-repository"
- type: link
  name: "Test Recorder"
  url: "#test-recorder"
- type: link
  name: "Testsigma Agent"
  url: "#testsigma-agent"
- type: link
  name: "Custom Fields"
  url: "#custom-fields"
- type: link
  name: "Uploads"
  url: "#uploads"
- type: link
  name: "Environments"
  url: "#environments"
- type: link
  name: "Ad-hoc Test Runs"
  url: "#ad-hoc-test-runs"
- type: link
  name: "Plugins"
  url: "#plugins"
---


---

## **Natural Language Action**

The Natural Language Actions provided by Testsigma consists of most of the actions that a user might need while automating their Tests.


**For example:**
  
  * For navigating to a web page - **Navigate to** <span style="color:blue">Test data</span>
  * For launching an App - **Launch App**
  * For entering text in a field - **Enter** <span style="color:blue">Test data</span> **in** <span style="color:Green">elements</style> **field**
  
  &emsp;

---

## **Test Case**

A test case is a list of steps or user actions that you list in a specific order to automate a test scenario.

---

## **Step Group**

Step Groups let you save and reuse a set of test steps. For example, let us assume we are automating a lot of scenarios that each require logging into a website. We can create a Step Group for the test steps necessary to log in. This will let you reuse the Step Group in all those Test Cases requiring login instead of repeatedly adding the same steps in every Test Case that needs Log in.

---

## **Test Data**

Test Data Profiles are primarily used for Data-Driven Testing. You can create test data in tabular format within Testsigma or import Test Data from Excel files into Testsigma. This can be used for data-driven testing.

---

## **Element**

Elements are links, buttons, input fields, etc., on the Web Page or App Screen, as captured by Testsigma. Elements contain locator details such as  XPath or CSS Locator, ID, Name, etc., along with details used for organizing the elements such as Screen Names, Element review status, etc.

---

## **Elements Repository**

Element Repository is a shared repository that contains all Elements created in a specific Application Version. All Test Cases within the Application Version can use these elements.

---

## **Test Recorder**

Test Recorder lets you capture Elements and actions within Testsigma. We recommend using the Test Step Recorder since it's quicker and easier and captures more locator details than manually creating elements.

---

## **Testsigma Agent**

You can run the tests you create on Testsigma on your local Machines. For running the tests locally, you need a Testsigma Agent utility running on the machine for Test Orchestration (queueing Tests, running the Tests, fetching the Test Results, etc.).


---

## **Custom Fields**

You can create user-defined fields for the entities, such as Test Cases, Versions, Applications, Projects, etc, for better organization. 

---

## **Uploads**

Mobile Apps or entities used in the Test Case can be uploaded here and accessed within the Test Steps.

---

## **Environments**

Environments are a high-level abstraction of a test environment that allows you to run test cases once created on multiple environments such as QA, UAT, and staging servers without any modifications in the tests.

---

## **Ad-hoc Test Runs**


Ad hoc Test Runs are used to check the correctness of the Test Case created. It executes a single Test Case in isolation and shouldn't have any Prerequisites outside this Test Case.
The user can do ad-hoc runs for a single Test Case to verify that it works as expected and later mark it as Ready, add it to a Test Suite, etc. 

---

## **Plugins**

Plugins are extensions that enable integration with third-party applications such as Jenkins, MS Teams, Slack, etc.

---