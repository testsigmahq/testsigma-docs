---
title: "Why Can’t Selenium ChromeDriver Interact With 3DS Authentication Pages?"
metadesc: "Learn why Selenium hangs on 3DS payment pages and how a simple desired capability prevents ChromeDriver from waiting indefinitely."
order: 24.20
page_id: "why-cant-selenium-chromedriver-interact-with-3ds-authentication-pages?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Add the Desired Capability to the Test Case"
  url: "#steps-to-add-the-desired-capability-to-the-test-case"
---

---

When you navigate to 3D Secure (3DS) authentication pages such as Visa or Mastercard, Selenium on Chrome or Edge may freeze or time out during execution. 

**Why This Happens**

3DS authentication screens load a third-party iframe that runs continuous background scripts from the payment gateway.

Inside these iframes:
   - Long-running JavaScript and postMessage listeners are always active.
   - Messages are continuously exchanged with the payment provider.
   - The browser keeps processing events and never reaches a fully loaded state.

As a result:
   - ChromeDriver waits indefinitely for the page to finish loading
   - The pageLoad event never completes
   - Selenium becomes unresponsive after navigation

To prevent Selenium from waiting indefinitely, you need to add a desired capability to your test case that stops ChromeDriver from waiting for the full page load.

This article discusses how to add the desired capability to the test case. 

---

## **Steps to Add the Desired Capability to the Test Case**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/selenium_faq_1.png)

2. In the Test Case Explorer section, expand a **Feature** and a **Scenario** and select the required test case.
   ![Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/selenium_faq_2.png) 

3. In the Test Case Details page, click **Run**.
   ![Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/selenium_faq_3.png)

4. In the **Ad-Hoc Run** overlay, expand the **Desired Capabilities** section, enter the following:

     | **Key** | **Data Type** | **Value** |
     | ------------- | ------------- | ------------- |
     | pageLoadStrategy | String | none |

     ![Desired Capability](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/selenium_faq_4.png)

5. Click **Run Now**.
   ![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/selenium_faq_5.png) 

---