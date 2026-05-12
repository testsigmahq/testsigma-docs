---
title: "Testsigma Terminology"
metadesc: "A glossary of terms you'll come across while  working with Testsigma App"
noindex: false
order: 1.7
page_id: "Testsigma Terminology"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Copilot"
  url: "#copilot"
- type: link
  name: "Atto"
  url: "#atto"
- type: link
  name: "Test Case"
  url: "#test-case"
- type: link
  name: "Test Suite"
  url: "#test-suite"
- type: link
  name: "Test Plan"
  url: "#test-plan"
- type: link
  name: "Natural Language Action"
  url: "#natural-language-action"
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
  name: "Testsigma Terminal"
  url: "#testsigma-terminal"
- type: link
  name: "Auto-healing"
  url: "#auto-healing"
- type: link
  name: "Save Points"
  url: "#save-points"
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
  name: "Desired Capabilities"
  url: "#desired-capabilities"
- type: link
  name: "Ad-hoc Test Runs"
  url: "#ad-hoc-test-runs"
- type: link
  name: "Visual Testing"
  url: "#visual-testing"
- type: link
  name: "Accessibility Testing"
  url: "#accessibility-testing"
- type: link
  name: "Mock Servers"
  url: "#mock-servers"
- type: link
  name: "Plugins"
  url: "#plugins"
- type: link
  name: "Add-ons"
  url: "#add-ons"
---


---

## **Copilot**

Copilot is a product in Testsigma that helps you author, execute, debug, and fix tests in one place. It allows you to generate, edit, insert, and execute test steps within a single live authoring session. Copilot creates context-aware test steps based on the current application screen, supports inline execution, and provides execution controls and diagnostics to help you validate and troubleshoot tests while building them.

---

## **Atto**

Atto is an AI coworker that brings together a team of AI agents in a single workspace to help testers plan, create, execute, maintain, analyze, and report tests efficiently. It includes agents such as Sprint Planner for test planning, Generator for creating tests, Automator for generating scripts instantly, Runner for executing tests, Healer for self-healing with intent, Analyzer for diagnosing and fixing failures, and Bug Reporter for filing reports to external tools.

---

## **Test Case**

A Test Case is a list of steps or user actions that is executed in a specific order to automate a test scenario.

---

## **Test Suite**

A Test Suite is a logical grouping of related Test Cases that is to be executed together. For example, you can group all login-related Test Cases into a single Test Suite, making it easier to organize, manage, and run them as part of a Test Plan.

---

## **Test Plan**

A Test Plan defines how a set of Test Suites should be executed, including the environment, test data, execution settings, and schedule. You can use Test Plans to run tests across multiple browsers, devices, or environments in parallel or in sequence.

---

## **Natural Language Action**

The Natural Language Actions provided by Testsigma cover most of the actions a user might need when automating their tests.

**For example:**

  * For navigating to a web page – **Navigate to** <span style="color:blue">Test data</span>
  * For launching an App – **Launch App**
  * For entering text in a field – **Enter** <span style="color:blue">Test data</span> **in** <span style="color:Green">elements</span> **field**

  &emsp;

---

## **Step Group**

Step Groups let you save and reuse a set of test steps. For example, if you are automating multiple scenarios that each require logging into a website, you can create a Step Group for the login steps and reuse it across all those Test Cases instead of repeatedly adding the same steps.

---

## **Test Data**

Test Data Profiles are primarily used for Data-Driven Testing. You can create test data in tabular format within Testsigma or import Test Data from Excel files into Testsigma for use in data-driven testing.

---

## **Element**

Elements are links, buttons, input fields, etc., on the Web Page or App Screen that enable interaction with the corresponding application. Elements contain locator details such as XPath or CSS Locator, ID, and Name, along with details used for organizing them, such as Screen Names and Element review status.

---

## **Elements Repository**

The Element Repository contains all elements created within a specific Application Version. These elements can be reused across all Test Cases in that Application Version.

---

## **Test Recorder**

Test Recorder lets you capture Elements and actions within Testsigma. It is quicker, easier, and captures more locator details compared to manually creating elements.

---

## **Testsigma Agent**

You can run the tests you create on Testsigma on your local machines. For running tests locally, you need a Testsigma Agent utility running on the machine for Test Orchestration (queueing tests, running tests, fetching test results, etc.).

---

## **Testsigma Terminal**

Testsigma Terminal is a desktop app that lets you interact with Testsigma directly from your local machine. You can use it to trigger test runs, fetch results, manage test artifacts, and integrate Testsigma into your local development.

---

## **Auto-healing**

Auto-healing automatically detects and fixes broken element locators when the application under test changes. For example, if an element's XPath or ID changes after a UI update, Testsigma identifies the new locator and updates it so your Test Cases continue to run without manual intervention.

---

## **Save Points**

Save Points let you create checkpoints manually or during import, allowing you to restore the project to the exact state it was in when the save point was created. You can also create, edit, delete, and restore save points as needed.

---

## **Custom Fields**

You can create user-defined fields for entities such as Test Cases, Versions, Applications, and Projects, for better organization.

---

## **Uploads**

Mobile Apps or other entities used in a Test Case can be uploaded here and accessed within the Test Steps.

---

## **Environments**

Environments are a high-level abstraction of a test environment that allows you to run Test Cases on multiple environments, such as QA, UAT, and staging servers, without any modifications to the tests.

---

## **Desired Capabilities**

Desired Capabilities are a set of key-value pairs used to configure the test environment for a Test Run. They let you specify details such as key, data type, and value to control how your tests are executed.

---

## **Ad-hoc Test Runs**

Ad-hoc Test Runs are used to check the correctness of a Test Case. They execute a single Test Case in isolation and shouldn't have any prerequisites outside this Test Case. You can do ad-hoc runs to verify that a Test Case works as expected before marking it as Ready or adding it to a Test Suite.

---

## **Visual Testing**

Visual Testing lets you validate the visual appearance of your application by comparing screenshots across test runs. It captures images during execution and highlights visual differences, helping you catch unintended UI changes such as layout shifts, broken styles, or missing elements.

---

## **Accessibility Testing**

Accessibility Testing helps you verify that your application meets accessibility standards such as WCAG. Testsigma scans your screens during test runs and reports violations related to color contrast, alt text, keyboard navigation, and ARIA labels, so you can build applications that are usable by everyone.

---

## **Mock Servers**

Mock Servers in Testsigma let you simulate backend API responses during test execution without relying on actual backend services. You can create mock servers and configure mock rules to test application behavior under different scenarios. Mock servers are supported in dry runs, test plan executions, and local executions.

---

## **Plugins**

Plugins are extensions that enable integration with third-party applications such as Jenkins, MS Teams, Slack, etc.

---

## **Add-ons**

Add-ons are custom extensions that let you extend Testsigma's built-in capabilities with your own actions. You can create Add-ons to define custom NLP actions, package them, and use them within your Test Steps just like any other Natural Language Action.

---