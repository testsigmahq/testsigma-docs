---
title: "Geolocation Emulation for Localization Testing"
metadesc: "Learn how to use Desired Capabilities to set the Geographical Location for running tests in Mobile Web in Testsigma Application"
noindex: false
order: 15.4
page_id: "Geolocation emulation for Localization Testing"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "How to Set the Geolocation?"
  url: "#how-to-set-the-geolocation"
- type: link
  name: "Using Desired Capability to set the Location"
  url: "#using-desired-capability-to-set-the-location"
---

---

The Geolocation Desired Capability sets the geographic location for web or mobile web apps during test executions. This capability is useful when testing location-specific features. This article discusses configuring the Geolocation Desired Capability on the Ad-Hoc Run page in Testsigma.

---

## **How to Set the Geolocation?**

To set the geolocation, use the following desired capability:

**geoLocation = "&lt;Two-letter Country Code&gt;"**


### **Example:** 

**geoLocation = "AR"**

Below is a list of countries with their corresponding two-letter country codes that can be used in the value field for the Geolocation desired capability:

|**Country Name**|**Country Code**|
|---|---|
|Argentina|AR|
|Australia|AU|
|Austria|AT|
|Belgium|BE|
|Brazil|BR|
|Bulgaria|BG|
|Canada|CA|
|Chile|CL|
|China|CN|
|Croatia|HR|
|Czech Republic|CZ|
|Denmark|DK|
|Egypt|EG|
|Finland|FI|
|France|FR|
|Germany|DE|
|Greece|GR|
|Hong Kong|HK|
|Hungary|HU|
|Iceland|IS|
|India|IN|
|Indonesia|ID|
|Ireland|IE|
|Israel|IL|
|Italy|IT|
|Japan|JP|
|Jordan|JO|
|Malaysia|MY|
|Mexico|MX|
|Netherlands|NL|
|New Zealand|NZ|
|Norway|NO|
|Philippines|PH|
|Poland|PL|
|Portugal|PT|
|Russia|RU|
|Singapore|SG|
|South Africa|ZA|
|South Korea|KR|
|Spain|ES|
|Sweden|SE|
|Switzerland|CH|
|Taiwan|TW|
|Thailand|TH|
|Turkey|TR|
|Ukraine|UA|
|United Kingdom|GB|
|United States|US|

---

## **Using Desired Capability to set the Location**

1. Click **Run** from **Test Case Details** page. 
![Run Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/AdHoc_Run_DC.png)

2. On the **Ad-Hoc Run** overlay, click **Desired Capabilities**.
![AdHoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Desired_Capabilities_AdHoc_Page.png)

3. Enter ***geoLocation*** in the **Key** field, select ***String*** as **Data type**, and set the **Value** as per country's country code.
![Desired Capability](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Desired_Capabilities_GeoLocation.png)

4. Click **Run Now** to execute the test case. 
![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/RunNow_geoLocation.png)

---