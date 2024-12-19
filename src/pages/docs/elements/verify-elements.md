---
title: "Verify Elements from Test Recorder"
metadesc: "You can verify elements during recording to quickly resolve issues in execution. This article discusses verifying elements from the Test Recorder in Testsigma"
noindex: false
order: 6.93
page_id: "Verify Elements"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Verify Elements from Test Steps"
  url: "#steps-to-verify-elements-from-test-steps"
- type: link
  name: "Steps to Verify Elements from Elements"
  url: "#steps-to-verify-elements-from-elements"
---

---


There is no need for additional effort to verify elements manually!

When using the Test Recorder to create test steps and elements, you might encounter issues where the Test Recorder captures incorrect locators for UI elements. These elements can impact test executions. You can verify elements during recording to quickly resolve this issue. This article discusses how to verify elements from the Test Recorder in Testsigma.


---

> ## **Prerequisites**
>
>
> Before you begin, ensure that the [Testsigma Chrome Extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/) is installed and a web application is available for testing.

---

## **Steps to Verify Elements from Test Steps**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Create a test case by selecting Create Test Case in the top right corner, or open an existing test case.

3. On the **Test Case Details** page, click **Record** in the top right corner.

4. A new window with the given URL will open, allowing you to record the test steps.

5. Go to the test step and hover over the element which you want to verify. 

6. Click on element and choose **Edit Element** from the drop down menu. This will open the **Update Element** screen on Recorder.

7. Click on **Verify** to validate the element location. The element will be highlighted on the web page.

8. If the element location is incorrect, a message will display indicating that the element doesn't exist.

9. Correct the element location and continue verifying until the recorder highlights the correct element on the web page.

Here’s a quick GIF demonstrating steps to verify elements from test steps.

![Verify Elements from Test Steps](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/HighlightElement.gif)

---

## **Steps to Verify Elements from Elements**

1. From the left navigation bar, go to **Create Tests > Elements**.

2. Create an element by clicking on **Create Element** in the top right corner. 

3. A new window with the given URL will open, allowing you to record the element.

4. Click on the element you want to record and verify. 

5. Click on **Verify** to validate the element location. The element will be highlighted on the web page.

6. If the element location is incorrect, a message will display indicating that the element doesn't exist.

7. Correct the element location and continue verifying until the recorder highlights the correct element on the web page.

[[info | **NOTE**:]]
| You can also verify while updating the element details. Open the existing element and click on **Edit** on the **Update Element** overlay and follow the same steps as above. 


Here’s a quick GIF demonstrating steps to verify elements from test steps.

![Verify Elements from Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ElementHighlisht-EC.gif)


---