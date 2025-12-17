---
title: "What Causes Longer Automation Test Execution Times in a Test Plan?"
metadesc: "Learn how enabling Reset session for every test case assigns a new machine per test, increasing overall test plan execution time."
order: 24.42
page_id: "what-causes-longer-automation-test-execution-times-in-a-test-plan-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve the Issue"
  url: "#steps-to-resolve-the-issue"
---

---

When the **Reset session for every test case** option is enabled in the **Test Machine** settings, Testsigma assigns a new machine for each test case execution. This process repeats for every queued test case until the entire test plan completes, which can significantly increase the overall execution time. This article discusses how to resolve the issue. 

---

## **Steps to Resolve the Issue**

1. From the left navigation bar, navigate to **Test Plans** and click on an existing test plan. 
   ![Test Plans](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/browserstack_faq_1.1.png)

2. On the Test Plan details page, click **Edit**. 
   ![Edit](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/browserstack_faq_2.png)

3. Go to the **Add Test Suites & Link Machine Profiles** tab. 
   ![Machine Profiles](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/browserstack_faq_3.png)

4. Click the test machine settings icon for the required test machine. 
   ![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/browserstack_faq_4.png)

5. In the **Edit test machine/device profile** overlay, unselect the **Reset session for every test case** checkbox and click **Update Profile**. 
   ![Reset session for every test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/browserstack_faq_5.png)

6. In the **Edit Test Plan** page, click **Continue**.
   ![Continue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/browserstack_faq_6.png)

7. Click **Update**. 
   ![Update](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/browserstack_faq_7.png)

---