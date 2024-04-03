---
title: "Emulate Mobile Devices with Chrome Browser"
metadesc: "With Chrome Browser you emulate mobile device screen resolutions. Learn how to emulate mobile devices using the Google Chrome Web Browser for Mobile Websites"
noindex: false
order: 15.8
page_id: "Emulate Mobile devices with Chrome Browser"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Obtaining the device name"
  url: "#obtaining-the-device-name"
- type: link
  name: "Using available Devices for emulation"
  url: "#using-available-devices-for-emulation"
- type: link
  name: "Advanced: Using a Custom Device for emulation"
  url: "#advanced-using-a-custom-device-for-emulation"
---

---

Chrome Browser provides a built-in feature to emulate mobile device screen resolutions. This can be useful for testing the responsiveness of your website on mobile devices, without the time and effort required to set up a full mobile automation system. You can test for mobile even without a dedicated device.

---
##**Obtaining the device name**

1.Open the Browser Developer Console by pressing the F12 key or Ctrl+Shift+I (For Mac, Command+Shift+I). You can also right-click on any web page and select ‘Inspect’ from the menu to open the ‘Developer Console - Elements’ Tab.

2.Click on the Device Selection toggle on the top left corner of the Developer Console Area. Once enabled, the icon turns Blue.

![Chrome Dev tools Mobile view Toggle](https://docs.testsigma.com/images/emulate-mobile-devices-with-chrome/chrome-dev-tools-mobile-view-toggle.png)

3.Check the first dropdown on the top bar to find the list of available devices.

![Chrome Dev tools Mobile view devices](https://docs.testsigma.com/images/emulate-mobile-devices-with-chrome/chrome-dev-tools-mobile-view-devices.png)

4.Select your desired device from the list of available devices.
For instance, we can select the device "iPad" from the list as shown above and it will update the viewport as per the display dimensions of the selected device.

5.Select the last option - ‘Edit’ in the device selection menu to see the full list of available devices and also add your own devices.

![Chrome Dev tools Mobile view custom device](https://docs.testsigma.com/images/emulate-mobile-devices-with-chrome/chrome-dev-tools-mobile-view-custom-device.png)

You can use the name of any of the above-given default devices while automating Tests on Testsigma. 

This is possible by specifying the device name in the Desired Capabilities while defining a Test Environment as shown in the next section.

---
##**Using available Devices for emulation**

You should already know how to add Desired Capabilities to your Tests. See [Desired Capabilities - Overview.](https://testsigma.com/docs/desired-capabilities/overview/)

Select the latest version of Google Chrome for your preferred OS and enter the following values below the Desired Capabilities field:

|Name|Data Type|Value|
|---|---|---|
|goog:chromeOptions|String|{"mobileEmulation":{"deviceN<br>ame":"iPhone X"}}|

On execution, it will display as mobile device view as shown here:

![Chrome Dev tools Default device Mobile view](https://docs.testsigma.com/images/emulate-mobile-devices-with-chrome/chrome-dev-tools-default-device-mobile-view.png)

---
##**Advanced: Using a Custom Device for emulation**

You can use a custom Device Resolution by providing the width, height, pixelRatio and userAgent values.

Enter the following values in the Desired Capabilities field:

|Name|Data Type|Value|
|---|---|---|
|goog:chromeOptions|String|{"mobileEmulation": { "deviceMetrics": { "width": <br>560, "height": 600, "pixelRatio": 3.0    }, "userAgent": <br>"Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 <br>Build/JOP40D) AppleWebKit/535.19 (KHTML, like <br>Gecko) Chrome/18.0.1025.166 Mobile <br>Safari/535.19"  }}|

On execution, it will display as mobile device view as shown:

![Chrome Dev tools Custom device Mobile view](https://docs.testsigma.com/images/emulate-mobile-devices-with-chrome/chrome-dev-tools-custom-device-mobile-view.png)




