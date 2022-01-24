---
title: "Desired Capabilities - Overview"
metadesc: "What are desired capabilities and how to add them to your test execution in Testsigma"
order: 15.1
page_id: "Desired Capabilities - Overview"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Adding Desired Capabilities in Adhoc Run"
  url: "#adding-desired-capabilities-in-adhoc-run"
- type: link
  name: "Adding Desired Capabilities in Test Plan"
  url: "#adding-desired-capabilities-in-test-plan"
- type: link
  name: "Desired Capabilities Format"
  url: "#desired-capabilities-format"
- type: link
  name: "Removing Desired Capabilities from Test Environment"
  url: "#removing-desired-capabilities-from-test-environment"
- type: link
  name: "Available Capabilities"
  url: "#available-capabilities"
---
---
Desired Capabilities are a set of properties used for customizing the Test Environment. The customization includes adding browser extensions to the automation sessions, setting Geographical location for the test machine, bypassing browser alerts, etc.

Desired Capabilities are added while selecting the Test Environment in Testsigma. Here's a list of [Sample Desired Capabilities](https://testsigma.com/docs/desired-capabilities/most-common/) in Testsigma:

In this document, we will cover how to use these capabilities in Ad Hoc Run, Quick Run, and Normal Execution. To do this, you should already know how to [Create Ad Hoc Runs](https://testsigma.com/docs/runs/adhoc-runs/) and [Create Test Plans.](https://testsigma.com/docs/test-management/test-plans/overview/)

## **Adding Desired Capabilities in Adhoc Run**
**Navigation: Test Development > Test Cases**

Selecting a Test Case from the Test Cases page will take us to the Test Case details page. Click on the Run button on the top right corner to open the Ad-hoc Run overlay page.

Click on the Desired Capabilities link to reveal the Desired Capabilities field as shown below:

![Create Ad-hoc Run](https://docs.testsigma.com/images/desired-capabilities/create-adhoc-run-desired-caps.png)

Enter one or more desired capabilities set as mentioned in the below section - ‘Desired Capabilities Format’

## **Adding Desired Capabilities in Test Plan**
**Navigation: Test Development > Test plan**

Clicking on the Create Test Plan Button on the Test Plans page opens the Create Test Plan page. Enter the details and move onto the next page by clicking on the Next button.

On the second page - ‘Test Machines and Suite Selection’, click on the Desired Capabilities link to reveal the Desired Capabilities field as shown below:

![Create Test Plan Desired Capability](https://docs.testsigma.com/images/desired-capabilities/create-testplan-desired-caps.png)

Enter one or more desired capabilities set as mentioned in the below section - ‘Desired Capabilities Format’

## **Desired Capabilities Format**

Desired Capabilities are entered as ‘key-value’ pairs. Enter the details for Desired Capabilities as specified below:
- **Name:** Enter the name of the capability.

- **Data Type:** The data type of the value of the specific Desired Capability.

- **Value:** The value of the Desired Capability.

For example, we can allow invalid certificates for a webpage using the ‘acceptInsecureCerts’ Capability.

|Name|Data Type|Value|
|---|---|---|
|acceptInsecureCerts|boolean|True|

## **Removing Desired Capabilities from Test Environment**

While editing a Test Plan or Ad-hoc Run Configuration, click on the delete button(trash icon) towards the right of the desired capability row to remove the corresponding row of desired capability.

![Create Test Plan Remove Desired Capability](https://docs.testsigma.com/images/desired-capabilities/create-testplan-remove-desired-caps.png)

## **Available Capabilities**

Here are some links to some of the available Desired Capabilities:

[Desired Capabilities in Selenium](https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities) | [Appium Desired Capabilities](http://appium.io/docs/en/writing-running-appium/caps/) | [Capabilities & ChromeOptions](https://sites.google.com/a/chromium.org/chromedriver/capabilities)
