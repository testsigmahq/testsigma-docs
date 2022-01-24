---
title: "Geolocation emulation for Localization Testing"
metadesc: "How to use Desired Capabilities to set the Geographical Location for running tests in Mobile Web."
order: 15.4
page_id: "Geolocation emulation for Localization Testing"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Desired Capabilities for setting location"
  url: "#desired-capabilities-for-setting-location"
- type: link
  name: "Using Desired Capability to set the Location"
  url: "#using-desired-capability-to-set-the-location"
- type: link
  name: "Sample Use Case"
  url: "#sample-use-case"
---
---
This article mainly focuses on how to use Desired Capabilities to set the Geographical Location for running tests in Mobile Web.

[[info | NOTE:]]
| To Enable Localization Testing, please contact Testsigma Support

---
##**Desired Capabilities for setting location**

In order to set the geolocation in a mobile Web test, we can use the following desired capability:

browserstack.geoLocation = "Two-letter Country Code"

For Example:

browserstack.geoLocation = "AR"

Below given is the list of countries with their country codes that can be used in the value field for Desired Capability:

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
##**Using Desired Capability to set the Location**

In case of an Ad Hoc run, click on the Run button from the Test Case details page to open the Ad-hoc Run overlay.

After clicking on Desired Capabilities link, we can enter ‘BrowserStack.geoLocation’ in the name field, select ‘String’ as data type, and set the value as per the required country's country code as shown in the below screenshot:

![Adhoc Run Desired Capability Geolocation](https://docs.testsigma.com/images/geo-location-for-localization/adhoc-run-desired-caps-geolocation.png)

That's all. Now you can click on ‘Run Now’ to start the execution. The execution will start on the cloud device and the location will be detected as the specified one, in this case, Argentina.

---
##**Sample Use Case**

In this sample use case, we shall use [www.google.com](https://www.google.com) for a particular country name i.e Italy and their country code is ‘IT’.

In this particular test case, we have used the following test steps and our intention is to see the Google homepage that is shown in Italy.

![Geolocation Test Case Test Steps](https://docs.testsigma.com/images/geo-location-for-localization/desired-caps-geolocation-test-case.png)

After creating the test cases, click on the Run Test case and set the desired capabilities as per the above syntax.

After the test case runs you can see the screenshot (if enabled) in the run result to ensure that the URL shown is specific to Italy.








