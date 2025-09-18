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

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> 1. You have installed the Testsigma Chrome Extension. For more information on installing Testsigma Chrome Extension, refer to the [documentation on Testsigma Chrome Extension](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/). 
> 2. You have a web application that is available for testing.

---

## **Steps to Verify Elements from Test Steps**

1. From the left navigation bar, go to **Create Tests > Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/verify_elements_1.png)

2. Create a test case by selecting Create Test Case in the top right corner, or open an existing test case.
   ![Select an existing test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/verify_elements_2.1.png)

3. On the **Test Case Details** page, click **Record** in the top right corner.
   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/verify_elements_3.1.png)

4. A new window with the given URL will open, allowing you to record the test steps.
   ![Simply Travel Window](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/verify_elements_4.1.png)

5. Go to the test step and hover over the element which you want to verify.
   ![Hover over an element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/verify_element_5.png) 

6. Click on element and choose **Edit Element** from the drop down menu. This will open the **Update Element** screen on Recorder.
   ![Edit element](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/verify_elements_6.png)

7. Click on **Verify** to validate the element location. The element will be highlighted on the web page.
   ![Verify](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/verify_elements_7.png)

8. If the element location is incorrect, a message will display indicating that the element doesn't exist.
   ![Element doesn't exist](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/verify_elements_8.png)

9.  Correct the element location and continue verifying until the recorder highlights the correct element on the web page.

---

## **Steps to Verify Elements from Elements**

1. From the left navigation bar, go to **Create Tests > Elements**.
   ![Elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/elements_from_elements_1.png)

2. Create an element by clicking on **Record** in the top right corner. 
   ![Record](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/elements_from_elements_2.png)

3. In the new window, enter the URL of the website that you want to record. 
   ![Simply Travel](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/elements_from_elements_3.png)

4. Click on the element you want to record. 
   ![Click on elements](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/elements_from_elements_4.png)

5. Click on **Verify** to validate the element location. The element will be highlighted on the web page.
   ![Verify](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/elements_from_elements_5.png)

6. If the element location is incorrect, a message will display indicating that the element doesn't exist.
   ![Element doesn't exist](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/elements/elements_from_elements_6.png)

7. Correct the element location and continue verifying until the recorder highlights the correct element on the web page.

[[info | **NOTE**:]]
| You can also verify while updating the element details. Open the existing element and click on **Edit** on the **Update Element** overlay and follow the same steps as above. 




---