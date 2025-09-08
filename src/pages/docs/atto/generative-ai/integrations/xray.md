---
title: "Integrating Xray with Testsigma"
page_title: "Xray Integration with Testsigma"
metadesc: "Xray is a Test Management tool that gives the structure to organize, plan, and report the progress of testing. Learn how to integrate Xray with Testsigma"
noindex: false
order: 4.7444
page_id: "Xray Integration with Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Integrating Xray with Testsigma"
  url: "#integrating-xray-with-testsigma"
---

---

Testsigma integrates with Xray to support test case generation from your existing test repositories. You can select Xray tests, epics, or stories as input, and use Testsigma’s Generative AI to generate new test cases aligned with your defined requirements. This helps bridge manual and automated workflows while maintaining consistency with your test management processes.

---
 
> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure JIRA and Xray integrations are active, and you have the JIRA account URL, client ID, and client secret.
> 
> *For more information on configuring global settings, refer to the [documentation on configuring global settings](https://docs.getxray.app/display/XRAYCLOUD/Global+Settings%3A+API+Keys).*

---
 
## **Integrating Xray with Testsigma** 

1. Navigate to **Settings > Integrations**.
   ![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/xaryintn.png)

2. Enable toggle on **Xray** widget.
   ![Xray Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/xraytgl.png)

3. On the **Xray Details** prompt, enter **Jira Account URL**, **Client Id** and **Client Secret**.
   ![Xray Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/xraydtls.png)

4. Click on **Save & Enable**.
   ![Save & Enable](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/xraadtls.png)

[[info | **NOTE**:]]
| If you want to add attachments like logs, screenshots, and videos of execution for the test executions, please check the **Add Attachments to Test**.

Here's a quick GIF demonstrating how to integrate Xray with Testsigma. 
![Xray Integration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/xrayint.gif)

---