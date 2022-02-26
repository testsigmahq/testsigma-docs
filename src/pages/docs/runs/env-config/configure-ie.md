---
title: "Configure Internet Explorer for Test Automation using Testsigma"
metadesc: "How to enable test automation on Internet Explorer using WebDriver API"
noindex: false
order: 9.82
page_id: "Configure Internet Explorer for Test Automation using Testsigma"
warning: false
---

---
In this article, we will cover the configurations needed for running tests in Internet Explorer on your  local machine using Testsigma Agent. If you would like a low configuration approach, try Testsigma Cloud executions where the test environment is preconfigured.
Learn more about [Ad-hoc executions using Testsigma Labs](https://testsigma.com/docs/runs/adhoc-runs/)

&emsp;

### On IE7 and later
On IE 7+, you must set the Protected Mode settings for each zone to be the same value. The value can be on or off, as long as it is the same for every zone. To set the Protected Mode settings, choose ‘Internet Options…’ from the Tools menu, and click on the Security tab. For each zone, there will be a check box at the bottom of the tab labelled "Enable Protected Mode".

&emsp;

### On IE10 and later
On IE 10+, ‘Enhanced Protected Mode’ must be disabled for IE 10 and higher. This option is in the Advanced tab of the Internet Options dialog.
The browser zoom level must be set to 100% so that the native mouse events can be set to the correct coordinates.
For Windows 10, you also need to set "Change the size of text, apps, and other items" to 100% in display settings.

&emsp;

### On IE11
For IE 11 only, you will need to set a registry entry on the target computer so that the driver can maintain a connection to the instance of Internet Explorer it creates.
For 32-bit Windows installations, the key you must examine in the registry editor is - HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BFCACHE

For 64-bit Windows installations, the key is -  HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BFCACHE

&emsp;
[[info | Note:]]
|Please note that the ‘FEATURE_BFCACHE’ subkey may or may not be present, and should be created if it is not present.<br>
|**Important:** Inside this key, create a ‘DWORD’ value named iexplore.exe with the value of 0.<br>
|Reference: [Selenium Wiki - InternetExplorerDriver](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver#required-configuration)