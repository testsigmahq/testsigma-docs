---
title: "Using Custom User Profile in Chrome"
page_title: "Using custom User Profile in Chrome for Tests in Testsigma"
metadesc: "Custom user profiles help you emulate settings such as pre-installed extensions. Learn how to start the Chrome Browser with a custom User Profile in Test Session using Testsigma"
noindex: false
order: 15.7
page_id: "Using custom User Profile in Chrome for Tests"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps for using Custom User Profile in Testsigma"
  url: "#steps-for-using-custom-user-profile-in-testsigma"
---

---

Custom user profiles help you emulate settings such as pre-installed extensions, specific location, language, etc. for your web app test automation in Chrome browser. 

To do the same, create a new profile, customize it as per your requirements by installing required extensions and changing the settings. After that, you can select the profile using Desired Capabilities in Testsigma while starting a Test Session.

You should already know how to add Desired Capabilities to your Tests. See [Desired Capabilities - Overview](https://testsigma.com/docs/desired-capabilities/overview/)

---
## **Steps for using Custom User Profile in Testsigma**

1. Finding your current Profile path
2. Making changes in the Profile folder
3. Using the Desired Capability

### **1. Finding your current Profile path**

While executing, you can check the current Profile location by going to the following URL: <br>chrome://version

![Chrome version tab](https://docs.testsigma.com/images/custom-user-profile-chrome/chrome-version-tab.png)

#### **Location of Chrome Browser Profile(default profile)**

|**OS**|**Profile Path**|
|---|---|
|Windows 7, 8.1, and 10|C:\\\Users\<username>\AppData\Local\Google\Chrome\User Data\Default|
|Mac OS X El Capitan|Users/\<username>/Library/Application Support/Google/Chrome/Default|
|Linux|/home/\<username>/.config/google-chrome/default|

#### **Workaround to use user-defined profile for Executing Tests on Testsigma**

We could use the --profile-directory argument for specifying the User Profile. However, due to a known bug in Chrome, you might need to do the following workaround and use the --user-data-dir argument.

### **2. Making changes in Profile folder (workaround)**

1. Open your default File Explorer (Windows Explorer - Windows, Nautilus - Linux and Files - Mac) and navigate to the location - 
C:\Users\<username>\AppData\Local\Google\Chrome\User Data\Profile 1

2. Create a folder named 'Default' there and copy the contents of 'Profile 1' directory deselecting the recently created 'Default' folder.

3. Paste the copied contents inside the ‘Default' folder.

### **3. Using the Desired Capability**

After that, you can use Desired Capability in the following format for using a user-defined profile in Testsigma. The following Desired Capability can be used to start Chrome Browser during an automation session using a user-defined profile.

|Name|Data Type|Value|
|---|---|---|
|goog:chromeOptions|String|{"args":["user-data-dir=/path/to/your/custom/profile"]}|


