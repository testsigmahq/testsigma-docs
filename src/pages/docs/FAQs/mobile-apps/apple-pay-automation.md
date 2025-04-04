---
title: "Apple Pay Automation with Testsigma"
metadesc: "Apple Pay Automation is complex due to Apple's strict security standards and testing challenges | Learn about Apple Pay Automation with Testsigma application"
noindex: false
order: 24.21
page_id: "Apple Pay Automation with Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Overview"
  url: "#overview"
- type: link
  name: "Device Compatibility"
  url: "#device-compatibility"
- type: link
  name: "Implementation Process with Testsigma"
  url: "#implementation-process-with-testsigma"
- type: link
  name: "Key Consideration"
  url: "#key-consideration"

---

---

Apple Pay Automation is a complex process that requires careful implementation due to Apple's rigorous security standards and testing challenges. This article discusses the automation process for Apple Pay, including key considerations and implementation steps.

---

## **Device Compatibility**

Apple Pay automation is currently limited to a specific set of devices. Ensure you verify the exact device compatibility before proceeding.

List of compatible devices : 

|Devices Supported for Apple Pay|iOS Version|
|    :----:   |    :----:   |
| iPhone 15 | 17 |
| iPhone 14 | 16 |
| iPhone 14 Pro | 16 |
| iPhone 13 Pro Max | 15 |
| iPhone 13 Pro | 15 |
| iPhone 13 Mini | 15 |
| iPhone 13 | 15 |
| iPhone 11 Pro | 15 |
| iPhone 11 | 15 |
| iPhone XR | 15 |

---

## **Implementation Process with Testsigma**

Implementation with TestSigma is simple and straightforward. 

1. Download the addon: Testsigma has an built-in addon to automate this flow, you can download the addon and use the addon inside your test step. The addon screenshot is added below 
   ![Autopay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Auto-pay.png)

2. Add Desired capability: Before you execute the test case, you can add the desired capability listed below and choose the compatible devices shared in the previous list. 

   |Key|Data Type|Value|
   |    :----:   |    :----:   |    :----:   |
   | enableApplePay | String | true |
   | appiumVersion | String | 1.21.0 |
   | deviceName | String | iPhone 15 |
   | osVersion | String | 17.0 | 

---

## **Key Consideration**

When defining Apple Pay details, follow these best practices to ensure compatibility with the test environment:

1. **Address Information:**
   - Only include relevant parameters for the shipping and billing addresses.
   - Remove parameters that are not applicable. For instance, if your test address does not include a province value, exclude the `province` parameter from your script.

2. **Geographical Codes:**
   - Use the appropriate geographical code based on your address format and what the device accepts.
   - Choose from one of the following: `postalCode`, `postCode`, or `zip`.

3. **Phone Number Format:**
   - Include the country code prefix with the `+` character.
   - Examples of valid formats include:
      - `+1-212-456-7890`
      - `+12124567890`
   
4. **Session Failures:**
   - If your session fails due to incorrect address parameters, adjust the geographical code accordingly.
   - For instance, if your address uses the zip parameter but the device expects `postalCode` or `postCode`, modify the script and re-run the test to identify the accepted format.

### **Regional Limitations for Apple Pay Testing**

On testsigma iOS devices, testing with Apple Pay is limited to the following regions:

|Geography|Country|
|    :----:   |    :----:   |
| North America | United States, Canada |
| Europe | France, Ireland, Italy, Spain, UK, Germany |
| Asia | China Mainland, Hong Kong, Taiwan, Japan, Russia, Singapore | 
| Australia | Australia, New Zealand | 

---
