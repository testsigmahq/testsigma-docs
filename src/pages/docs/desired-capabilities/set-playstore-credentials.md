---
title: "Set Google Play Store Credentials"
page_title: "Capability to Access Google Play Store"
metadesc: "This article discusses the capability you need to set to access Google Play Store services & test services like in-app purchase flows, verify payments, and production version"
noindex: false
order: 15.98
page_id: "Access Google Play Store"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Desired Capability to Access Google Play Store"
  url: "#desired-capability-to-access-google-play-store"
- type: link
  name: "Using Google Play Store Credentials Capability"
  url: "#using-google-play-store-credentials-capability"
---

---

With Testsigma, you can test Google Playstore in-app purchase flows, verify payment acceptance using Google Pay, or test the production version of your app downloaded from the Google Play Store. This article discusses the desired capability you need to set to access Google Play Store services. 

---

## **Prerequisites**

- You should know how to [create ad hoc runs](https://testsigma.com/docs/runs/adhoc-runs/).

---

## **Desired Capability to Access Google Play Store**

In order to access Google Play Store, you can use the following desired capability to pass your own credentials for Google Play Store login:

**browserstack.appStoreConfiguration**

|**Name**|**Data Type**|**Value**|
|---|---|---|
|browserstack.appStoreConfiguration|String|{“username” : “play-store-email”,<br> “password” : “play-store-password”}|


---

## **Using Google Play Store Credentials Capability**

1. Click on **Run** from the **Test Case Details** page.
![Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gpsrun.png)

2. On the **Ad-Hoc Run** overlay, click on **Desired Capabilities**.
![Ad-Hoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gpsdc.png)

1. Enter **browserstack.appStoreConfiguration** in the **Key** field, select **String** as the **Data type**, and set the **Value** with **Username & Password**.
![Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gpsahrol.png)

1. Click on **Run Now** to execute the test case.
![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gpsrn.png)

---