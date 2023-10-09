---
title: "Biometric Authentication"
page_title: "Enable Biometric Authentication"
metadesc: "Learn how to use desired capabilities to set the Biometric Authentication for Android and iOS mobile app testing in Testsigma Application"
noindex: false
order: 15.93
page_id: "How to enable Biometric Authentication"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "How to Add Biometric Authentication Desired Capability?"
  url: "#how-to-add-biometric-authentication-desired-capability?"
- type: link
  name: Using Biometric Authentication Desired Capability"
  url: "#using-biometric-authentication-desired-capability"
---

---

With Testsigma, you can simulate biometric authentication while testing Android and iOS applications. This capability allows you to test the app's recognition and response to biometric events. This article discusses how to set biometric authentication desired capabilities on the Ad-Hoc Run page in Testsigma. 

---

## **Prerequisites**
- You should have a Testsigma account. 
- A mobile application to test. 

---

## **How to Add Biometric Authentication Desired Capability?**
In order to Add Biometric Authentication for Android and iOS apps, we can use the following desired capability:

‘***testsigma.allowTouchIdEnroll=true***’

|Name|Data Type|Value|
|---|---|---|
|testsigma.allowTouchIdEnroll|Boolean|True|



---


## **Using Biometric Authentication Desired Capability**

1. Click on **Run** from the **Test Case Details** page. 
![Run Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/barnow.png)


2. On the **Ad-Hoc Run** overlay, click on **Desired Capabilities**.
![Ad Hoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/baahrp.png)


3. Enter ***testsigma.allowTouchIdEnroll*** in the **Key** field, select ***Boolean*** as the **Data type**, and set the **Value** as ***True***.
![Capability Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/biadcdetails.png)


4. Click on **Run Now** to execute the test case. 
![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/barunnw.png)


[[info | **NOTE**:]]
| This capability is available only in Testsigma Lab and is not supported in local execution.



Here’s a quick GIF demonstrating how to set the biometric authentication capability.

![Biometric Authentication](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/BiometricAuth-min.gif)




---



