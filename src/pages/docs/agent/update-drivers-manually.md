---
title: "Update browser drivers for Testsigma agent manually"
metadesc: "Learn how to update the Browser Driver files for Testsigma Agent manually if update fails, due to bad network conditions or Firewall restrictions."
noindex: false
order: 11.7
page_id: "Update browser drivers for Testsigma agent manually"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Location of driver files"
  url: "#location-of-driver-files"
- type: link
  name: "Downloading the driver files"
  url: "#downloading-the-driver-files"
- type: link
  name: "Adding drivers manually"
  url: "#adding-drivers-manually"
- type: link
  name: "Additional steps for Mac or Linux"
  url: "#additional-steps-for-maclinux"

---

---
During a local execution, Testsigma agent communicates with the Web Browser installed on your machine using the driver files specific to the respective browser. Driver files for all the popular browser versions are included in Testsigma Agent automatic updates.

**Why is updating the browser driver files necessary?**<br>
Sometimes, the update fails, due to bad network conditions or Firewall restrictions. You might need to manually download the driver files specific to your Web Browser and Operating System and place them in the correct directory within the Testsigma Agent directory.

<br>

---
## **Location of driver files**

Driver files are located under the following directories for the different Web Browsers:<br>
- **Google Chrome:** <kbd>< TestsigmaAgentDirectory >/drivers/googlechrome</kbd>
- **Edge:** <kbd>< TestsigmaAgentDirectory >/drivers/edge </kbd>
- **Mozilla Firefox:** <kbd> < TestsigmaAgentDirectory >/drivers/mozilla</kbd>
- **InternetExplorer:** <kbd> < TestsigmaAgentDirectory >/drivers/internetexplorer</kbd>

[[info | NOTE:]]
|The InternetExplorer folder is present only for Windows version of the Agent

<br>

---
## **Downloading the driver files**

When new browser versions are released, a newer driver version will be released on [SeleniumHQ Downloads page](http://www.seleniumhq.org/download/).

And here are the direct links to WebDrivers of the most popular Browsers:<br>
* [Firefox - GeckoDriver (Hosted on Github)](https://github.com/mozilla/geckodriver/releases)<br>
* [Chrome - ChromeDriver (Hosted on Google Sites)](https://sites.google.com/chromium.org/driver/)<br>
* [Microsoft Internet Explorer - InternetExplorerDriver](https://www.seleniumhq.org/download/)<br>
* [Microsoft Edge - Edge Driver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/)<br>

<br>

---
## **Adding drivers manually**

We just need to download the corresponding file from the above link and place it in the correct directory.

For example, let us assume that the installed version of the Google Chrome browser is v93 and a new version v94 is released today. When a new Browser version is released, a new browser driver version will also be released shortly.

In case the recent Agent update didn’t include driver v94, we need to do the following steps to add the browser driver manually:

1. Download the driver file for v94 from the above link.
2. Check if a folder named ‘94.0’ is present in the corresponding browser folder i.e **googlechrome** in this case within the **drivers** folder. If not present, create a directory named **94.0** there.

Here’s a screenshot of the Agents folder for Testsigma Agent in Mac OS:

![Testsigma Agent drivers folder](https://docs.testsigma.com/images/update-drivers-manually/testsigma-agent-drivers-folder.png)

[[info | NOTE:]]
|In the case of the Firefox Browser driver, the folder names follow a certain pattern where 0.x.x is renamed as 0.xx<br>
|For example, if the browser driver version is 0.29.1, the driver folder name within Testsigma Agent should be ‘0.291’.<br>
|Similarly, for browser driver version 0.29.0, the driver folder name should be 0.290

3. Place the downloaded driver file in the newly created folder. The driver file will have a .exe extension for Windows and no extension for Linux/Mac.

[[info | NOTE:]]
|You can skip the next section to the end if you are on Windows Machine.

<br>

---
## **Additional steps for Mac or Linux**
Apart from the above steps, there are some additional steps to be performed to avoid permission issues in Mac or Linux. This is due to the presence of executable bit permission for Unix-based Operating Systems.




After placing the downloaded driver in the newly created folder, we need to perform the following steps:

1. Open Terminal and navigate to the drivers folder.
**cd /Users/renju/TestsigmaAgent/drivers**
2. Run the below command to add executable permission to all the driver files including the newly added driver file
chmod -R u+x ./*

![Setting Executable perm form driver files in Testsigma Agent using Terminal](https://docs.testsigma.com/images/update-drivers-manually/ts-agent-set-exec-permission-new-driver.png)

Once that is done, you can start executing tests on the newest version of the corresponding Browser. You can follow the same directions for other browsers as well.



