---
title: "Set Geolocation for Tests in Chrome & Firefox"
page_title: "Set Geolocation for your Tests"
metadesc: "Learn how to set the location of your Test Environment where tests are run by using a pair of desired capabilities in Testsigma Application."
noindex: false
order: 15.6
page_id: "Set Geolocation for Tests in Chrome and Firefox"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Setting Desired Capabilities in different Browsers"
  url: "#setting-desired-capabilities-in-different-browsers"
- type: link
  name: "Example websites to test current location"
  url: "#example-websites-to-test-current-location"
---

---

For setting the location of the Test Environment where the Tests are run, we just need to add a pair of Desired Capabilities in the Test Environment.

You should already know how to add Desired Capabilities to your Tests. See [Desired Capabilities - Overview](https://testsigma.com/docs/desired-capabilities/overview/)

---
##**Setting Desired Capabilities in different Browsers**

### **Google Chrome**

Here are the Desired Capabilities you need to add in Test Environment to set the location for Chrome Browser:

|**Name**|**Data Type**|**Value**|
|---|---|---|
|goog:chromeOptions|String|{"profile.default\_content\_setting\_values.geolocation":1}|
|geolocation|String|51.50735, -0.12776, 100|

You need to keep the first-row item as it is. In the second row item, the three values correspond to the parameters **latitude, longitude and altitude**, respectively.

The given value i.e **51.50735, -0.12776, 100** is for **'Trafalgar Square, London'.**

Similarly, the value for **'Central Park, NYC, USA'** is **40.783840, -73.965550, 33**

### **Firefox**

Here are the Desired Capabilities you need to add in Test Environment to set the location for Firefox Browser:

|Name|Data Type|Value|
|---|---|---|
|firefoxprofile|String|{<br>"geo.prompt.testing": true,<br>"geo.prompt.testing.allow": true,<br>"geo.enabled": true,<br>"geo.wifi.uri": "data:application/json, {<br>&emsp;\\"location\\": {<br>&emsp;&emsp;\\"lat\\": 34.052235, \\"lng\\": -118.243683<br>&emsp;&emsp;}, \\"accuracy\\": 100.0<br>&emsp;}"<br>}|

The value in the location under **geo.wifi.uri** corresponds to the parameters **latitude, longitude, and accuracy.**

The given value i.e **{"location": {"lat": 34.052235, "lng": -118.243683}, "accuracy": 100.0}** is for the location **'Downtown, Los Angeles, California 90012, United States'.**

Similarly, the value for the location **'Central Park, NYC, USA'** will be **{"location": {"lat": 40.783840, "lng": -73.965550}, "accuracy": 100.0}**

[[info | NOTE:]]
| Setting the Geolocation is not yet supported in IE and Safari

---
##**Example websites to test current location**

You can use [https://www.mapcoordinates.net/en](https://www.mapcoordinates.net/en) for the latitude and longitude information for your desired location, and  [https://mycurrentlocation.net/](https://mycurrentlocation.net/) to check current location.

