---
title: "Geolocation emulation for Localization Testing"
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

Geolocation desired capability is a configuration used to set the geographic location for a web or mobile web during testing. This capability is helpful while testing location related web and mobile web features. This article discusses how to set Geolocation desired capabilities on the Ad-Hoc Run page in Testsigma. 

---

## **How to Set the Geolocation?**

In order to set the geolocation for a web or mobile web test, we can use the following desired capability:

**browserstack.geoLocation = "&lt;Two-letter Country Code&gt;"**


For Example: <br>
<br>
**browserstack.geoLocation = "AR"**

Here is the list of countries with their country codes that can be used in the value field for desired capability:

|Country Name|Country Code|
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
1. Click on **Run** from **Test Case Details** page. 
![Run Test Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/glrun.png)

2. On **Ad-Hoc Run** overlay, click on **Desired Capabilities**.
![AdHoc Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/glahrun.png)

3. Enter ***BrowserStack.geoLocation*** in the **Key** field, select ***String*** as **Data type**, and set the **Value** as per country's country code.
![Desired Capability](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gldc.png)

4. Click on **Run Now** to execute the test case. 
![Run Now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/glrunnow.png)

Here’s a quick GIF demonstrating how to set geolocation desired capability.
![Geo Location Work Flow](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/GeoLocationWF.gif)
---