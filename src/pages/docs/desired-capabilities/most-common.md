---
title: "Common Desired Capabilities"
page_title: "Streamline Testing Processes with Advanced Capabilities"
metadesc: "Enhance efficiency with common desired capabilities in testing. Optimise workflows, boost collaboration, and ensure quality with cutting-edge testing features."
noindex: false
order: 15.2
page_id: "common-desired-capabilities"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Chrome"
  url: "#chrome"
- type: link
  name: "Morzilla Firefox"
  url: "#morzilla-firefox"
- type: link
  name: "Microsoft Edge"
  url: "#microsoft-edge"
- type: link
  name: "Execution Timeouts Specific in Testsigma Labs"
  url: "#execution-timeouts-specific-in-testsigma-labs"  
- type: link
  name: "Environment Customizations in Testsigma Labs"
  url: "#environment-customizations-in-testsigma-labs"
- type: link
  name: "Environment Customizations in BrowserStack"
  url: "#environment-customizations-in-browserstack" 
- type: link
  name: "Android Specific"
  url: "#android-specific"   
- type: link
  name: "iOS Specific"
  url: "#ios-specific"
---

---


Below are a few of the most commonly used Desired Capabilities in executions using Testsigma:

---

## **Chrome**


|Description|Capability|Data Type|Value|
|---|---|---|---|
|Accept insecure/expired certificates|acceptInsecureCerts|boolean|true|
|Changing User Agent|goog:chromeOptions|String|{"args":["--user-agent=USER\_AGENT\_STRING\_HERE"]}<br><br>For Example:<br>{"args":["--user-agent=Mozilla/5.0 (Linux; \<Android Version>; \<Build Tag etc.>) AppleWebKit/\<WebKit Rev> (KHTML, like Gecko) Chrome/\<Chrome Rev> Mobile Safari/\<WebKit Rev>"]}|
|Adding a single Chrome Extension to session|goog:chromeOptions|String|{"extensions":["path/to/extension"]}<br><br>More details:<br>[How to add Chrome Extension to a session using Desired Capabilities](https://testsigma.com/docs/desired-capabilities/add-chrome-extension/)|
|Adding Chrome Extensions to session|goog:chromeOptions|String|{"extensions":["path/to/extension1"],["path/to/extension2"]}<br><br>More details:<br>[How to add Chrome Extension to a session using Desired Capabilities](https://testsigma.com/docs/desired-capabilities/add-chrome-extension/)|
|Setting mobile device Emulation|goog:chromeOptions|String|{"mobileEmulation":{"deviceName":"iPhone X"}}<br><br>More details:<br>[How to set Desired Capabilities for emulating Mobile devices using Chrome Browser](https://testsigma.com/docs/desired-capabilities/emulate-mobile-devices-with-chrome/)|
|Disabling Browser Notifications|goog:chromeOptions|String|{“args”:[“--disable-notifications”]}|
|Setting custom profile for Browser data|goog:chromeOptions|String|{"args":["user-data-dir=/path/to/your/custom/profile"]}<br><br>More details:<br>[How to open Chrome with the user-defined profile in Testsigma using Desired Capabilities](https://testsigma.com/docs/desired-capabilities/custom-user-profile-chrome/)|
|Setting the Geolocation (Chrome)|<li>goog:chromeOptions</li><li>geolocation</li>|<li>String</li><li>String</li>|{"profile.default\_content\_setting\_values.geolocation": 1 }<br><br>51.50735, -0.12776, 100<br><br>More details:<br>[How to manually set a geographical location for Test Cases using Desired Capabilities](https://testsigma.com/docs/desired-capabilities/set-geo-location/)|
|Bypassing Chrome download protection<br>(Keep/discard promptly for file downloads)|goog:chromeOptions|String|{"prefs":{"safebrowsing.enabled":"true"}}<br><br>More details:<br>[How to bypass or avoid unsafe download prompt for Google Chrome?](https://testsigma.com/docs/desired-capabilities/avoid-unsafe-download-prompt/)|
|Enable the provision of notifications and the inclusion of fabricated media streams.|<li>goog:chromeOptions</li><li>goog:chromeOptions</li><li>goog:chromeOptions</li>|<li>String</li><li>String</li><li>String</li>|<li>{"args":["--use-fake-ui-for-media-stream"]}</li><li>{"args":["--use-fake-device-for-media-stream"]}</li><li>{"args":["--auto-select-desktop-capture-source=Entire screen"]}</li>|
|Disable Chrome Alert Notifications|goog:chromeOptions|String|{"args":["--disable-notifications"]}|

---

## **Morzilla Firefox**


|Description|Capability Name|Data Type|Value|
|---|---|---|---|
|Setting the Geolocation (Firefox)|firefoxprofile|String|{"geo.prompt.testing": true,<br>"geo.prompt.testing.allow": true,<br>"geo.enabled": true,<br>"geo.wifi.uri":<br>"data:application/json,{\"location\": {\"lat\": 34.052235, \"lng\": -118.243683}, \"accuracy\": 100.0}"<br>}<br><br>More details:<br>[How to manually set a geographical location for Test Cases using Desired Capabilities](https://testsigma.com/docs/desired-capabilities/set-geo-location/)|
|Accept insecure/expired certificates|accept\_untrusted\_certs|boolean|True|

---

## **Microsoft Edge**


|Description|Capability Name|Data Type|Value|
|---|---|---|---|
|Accept insecure/expired certificates|acceptInsecureCerts|boolean|True|

---

## **Execution Timeouts Specific in Testsigma Labs**


|Description|Capability Name|Data Type|Value|
|---|---|---|---|
|Settings user-defined Step timeout duration - As a safety measure to prevent tests from running too long after something has gone wrong, Testsigma limits how long a browser can wait for a test to send a new command.|idleTimeout|Integer|90<br><br>minimum - 0<br>default - 90<br>maximum - 1000<br><br>More details:<br>[How to set Sauce Labs environment-specific settings(step timeout, maximum test duration ) in Testsigma](https://testsigma.com/docs/integrations/test-labs/sauce-labs/)|
|Settings user-defined maximum test duration - As a safety measure to prevent tests from running indefinitely, Sauce limits the duration of tests to 30 minutes by default.|maxDuration|Integer|3600<br><br>minimum - 0<br>default - 3600<br>maximum - 10800<br><br>More details:<br>[How to set Sauce Labs environment-specific settings(step timeout, maximum test duration ) in Testsigma](https://testsigma.com/docs/integrations/test-labs/sauce-labs/)|

---

## **Environment Customizations in Testsigma Labs**


|Description|Capability|Data Type|Value|
|---|---|---|---|
|Setting the Timezone of the execution Environment|timeZone|String|Madrid<br>You can get the list of Timezone locations from here:<br>https://en.wikipedia.org/wiki/List_of_tz_database_time_zones<br><br>Use the City name without the Continent Name and replace underscores with space|
|Getting Excecution Console log of each url|extendedDebugging|Boolean|True<br><br>More details:<br>[Enable Browser Console Debugging logs](https://testsigma.com/docs/desired-capabilities/enable-browser-console-logs/)|

---

## **Environment Customizations in BrowserStack**


|Description|Capability|Data Type|Value|
|---|---|---|---|
|Enable Visual Logs in BrowserStack|browserstack.debug|Boolean|true|
|Enable Local Testing in BrowserStack|browserstack.local|Boolean|true|
|Enable Browser Console logs in Browserstack||String|warnings<br><br>More details:<br>[Enable Browser Console Debugging logs](https://testsigma.com/docs/desired-capabilities/enable-browser-console-logs/)|

---

## **Android Specific**


|Description|Capability|Data Type|Value|
|---|---|---|---|
|Persist App data in local Android devices across Hybrid Test sessions|noReset|boolean|true|
|Automatically grant required app permissions based on the [Android manifest](https://developer.android.com/guide/topics/manifest/manifest-intro) during installation.|autoGrantPermissions|boolean|true|

---

## **iOS Specific**

|Description|Capability|Data Type|Value|
|---|---|---|---|
|Automatically approve all permission pop-ups, including privacy access requests for location, contacts, and photos.|autoAcceptAlerts|boolean|true|
|Automatically dismiss all permission pop-ups, including privacy access permissions like location, contacts, and photos.|autoDismissAlerts|boolean|true|

---