---
title: "How do I Enhance the Execution Speed for Mobile Native Apps?"
metadesc: "Test execution and recording for React Native or Flutter apps can be slower in Testsigma. | Learn how to speed up actions using desired capabilities."
order: 24.22
page_id: "how-do-i-enhance-the-execution-speed-for-mobile-native-apps-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Configure Desired Capability"
  url: "#steps-to-configure-desired-capability"

---

---

In Testsigma, executing and recording test steps for mobile applications, particularly those built with React Native or Flutter, may take longer. To improve the speed of actions such as clicking and entering data, you can configure a specific desired capability. This article discusses how to use that capability to enhance test execution performance on mobile native applications.

---

> ## **Prerequisites**
> 
> - Ensure that you have test cases created for a mobile native application

---

## **Steps to Configure Desired Capability**

1. From the left navigation bar, expand **Create Tests** and click **Test Cases**.

2. In the **Test Case Explorer** section, expand the required feature and scenario and select the required test case. 

3. In the **Test Case Details** page, click **Run**.

[[info | **NOTE**:]]
| To add the desired capability during recording, click **Record**.

4. In the **Ad-Hoc Run/ Record test steps** overlay, expand the **Desired Capabilities** field and specify the desired capability. 

   | **Name** | **Data Type** | **Value** |
   | ------------- | ------------- | ------------- |
   | appium:waitForIdleTimeout | String | 1000L |

[[info | **NOTE**:]]
| If you experience delays in other mobile apps built with different frameworks, you can use the same desired capability to improve execution and recording performance.

5. Click **Run Now/Record**. 

[[info | **NOTE**:]]
| You can also include this desired capability in the test plan when adding a new test machine or device profile to enhance the execution speed. 

---
