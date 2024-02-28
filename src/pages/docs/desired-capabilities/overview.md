---
title: "Desired Capabilities - Overview"
metadesc: "Desired Capabilities are used for customizing the Test Environment. Learn about desired capabilities in detail and how to add them to your test execution in Testsigma"
noindex: false
order: 15.1
page_id: "Desired Capabilities - Overview"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Desired Capabilities Format"
  url: "#desired-capabilities-format"
- type: link
  name: "Adding Desired Capabilities in Ad Hoc Run"
  url: "#adding-desired-capabilities-in-ad-hoc-run"
- type: link
  name: "Adding Desired Capabilities in a Test Plan"
  url: "#adding-desired-capabilities-in-a-test-plan"
---

---

Desired Capabilities are a set of properties used for customizing the Test Environment. The customization includes adding browser extensions to the automation sessions, setting Geographical locations for the test machine, bypassing browser alerts, etc. This article discusses adding desired capabilities for a test environment in Testsigma. 

---

## **Prerequisites**

- You know how to [Create Ad Hoc Runs](https://testsigma.com/docs/runs/adhoc-runs/).
- You should know [Create Test Plans](https://testsigma.com/docs/test-management/test-plans/overview/).

---

## **Desired Capabilities Format**
Desired Capabilities are entered as **key-value** pairs. Enter the details for Desired Capabilities as specified below:
- **Key:** Specific properties or attributes that can be set for the test environment. 
- **Data Type:** The data type of the value of the specific Desired Capability.
- **Value:** The value of the Desired Capability.
![Format](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dcformat.png)

For example, we can allow **invalid certificates** for a webpage using the ‘***acceptInsecureCerts***’ Capability.

|Name|Data Type|Value|
|---|---|---|
|acceptInsecureCerts|boolean|True|

---

## **Adding Desired Capabilities in Ad Hoc Run**
1. Navigate to **Create Tests > Test Cases**.
![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dcnavcttcs.png)


2. Create/select a test case in which you want to add the desired capabilities. 


3. From the **Test Case** details page, click on **Run**. 
![Run Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dcrun.png)


4. On **Ad Hoc Run** overlay, click on **Desired Capabilities** to reveal the fields. 
![Ad Hoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dctcradhoc.png)


5. Add the desired capabilities you want for an **Ad Hoc Run**. 


[[info | **NOTE**:]]
| You can also delete the desired capabilities by clicking on the **Delete** button from the **Ad Hoc Run** overlay.
|![Delete Desired Capabilities](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dcdeletetc.png) 



*For more information on most commonly used desired capabilities, refer to [Common Desired Capabilities](https://testsigma.com/docs/desired-capabilities/most-common/).* 

---

## **Adding Desired Capabilities in a Test Plan**
1. On **Dashboard**, click on **Test Plans**. 
![Test Plans](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dctestplansc.png)


2. Create/select a test plan in which you want to add the desired capabilities.


3. From the **Edit Test Plan** page, click on **Add Test Suites & Link Machine Profiles**. 
![Edit Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dctestpedit.png)


4. On **Test Machines**, select the machine in which you want to add desired capabilities and click on **Test machine settings**. 
![Test Machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dctestmach.png)

5. On **Edit test machine/device profile** overlay, click on **Desired Capabilities** to reveal the fields. 
![Edit Test Machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dcedittm.png)

6. Add the desired capabilities you want for a **Test Plan**. 

[[info | **NOTE**:]]
| You can also delete the desired capabilities by clicking on the **Delete** button from the **Edit test machine/device profile** overlay. 
| ![Delete Desired Capabilities](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dctpdelete.png)

---