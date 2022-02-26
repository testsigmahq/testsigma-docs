---
title: "Configure Safari for Test Automation in Testsigma"
metadesc: "How to use WebDriver API for automating tests on older versions of Safari"
noindex: false
order: 9.81
page_id: "Configure Safari for Test Automation in Testsigma"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Configuring Safari 10.1+ to allow automation"
  url: "#configuring-safari-101-to-allow-automation"
- type: link
  name: "Safari versions lower than 10.1"
  url: "#safari-versions-lower-than-101"
---

---

In this article, we will explore the configurations needed for running tests in Safari on your local machine using Testsigma Agent. If you would like a low-configuration approach to do the same, try Testsigma Cloud executions, where the test environments are preconfigured.
Learn more about [Ad-hoc executions using Testsigma Labs](https://testsigma.com/docs/runs/adhoc-runs/)

Safari provides native support for the WebDriver API starting with Safari 10 on OS X El Capitan. Safari now comes bundled with a new Driver implementation that’s maintained by the Web Developer Experience team at Apple, so now there is no need to install and maintain the Webdriver ourselves since that’s already included by Apple in Safari.

&emsp;

---
##**Configuring Safari 10.1+ to allow automation**
Safari’s Automation support is turned off by default. To turn on Automation support, follow the steps below:
1. Ensure that the ‘Develop‘ menu is available. It can be turned on by opening Safari preferences (‘Safari > Preferences’ in the menu bar), going to the ‘Advanced’ tab, and ensuring that the ‘Show Develop menu’ in the menu bar checkbox is checked.
Here's a visual guide for enabling Develop Menu in Safari:

![Safari Enable Develop Menu](https://docs.testsigma.com/images/configure-safari/safari-enable-develop-menu.png)

1. . Enable ‘Remote Automation’ in the Develop menu. This is toggled via ‘Develop > Allow Remote Automation’ in the menu bar.

![Safari Enable Remote Automation](https://docs.testsigma.com/images/configure-safari/safari-enable-remote-automation.png)

As specified earlier, you do not need to download anything extra since everything required is pre-installed for Safari versions greater than 10.1.

&emsp;

---
##**Safari versions lower than 10.1**
1. Go to 'Preferences' and switch to the ‘Extensions' tab to check if Selenium Driver is installed. If not installed, go to the SeleniumHQ Downloads page and download the latest release under the SafariDriver section.
   
2. Double-click to install the "SafariDriver.safariextz" safari extension file and enable it in the Extensions menu in Safari.
   
3. Additionally, authorize safaridriver to launch the webdriverd service which hosts the local web server. To permit this, run the below command once manually from the terminal and complete the authentication prompt.
/usr/bin/safaridriver

[[info | Note:]]
|This is a workaround for Safari version less than 10.1. It is highly recommended to install Safari 10.1+ to avoid hassles.<br>
|Reference: [Webkit.org](https://webkit.org/blog/6900/webdriver-support-in-safari-10/)



