---
title: "Install Testsigma Recorder Extension: Firefox"
page_title: "Install Testsigma Recorder Extension in Firefox Easily"
metadesc: "Effortlessly start installing the Testsigma Recorder Extension in Firefox. Follow simple steps to record interactions for efficient testing. Learn more now."
noindex: false
order: 7.12
page_id: "install-testsigma-recorder-in-firefox"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Add Testsigma Recorder Extension to Firefox"
  url: "#add-testsigma-recorder-extension-to-firefox"
- type: link
  name: "Testsigma Recorder Extension Options"
  url: "#testsigma-recorder-extension-options"
- type: link
  name: "Enable Access Permissions in Firefox"
  url: "#enable-access-permissions-in-firefox"
---

---

Testsigma Recorder extensions in Firefox allow you to record end-to-end interactions with your web applications effortlessly. The extensions capture and store these interactions as actions in simple English sentences using predefined NLPs.

---

## **Add Testsigma Recorder Extension to Firefox**

1. Open your **Firefox** browser and navigate to [Testsigma Recorder](https://addons.mozilla.org/en-US/firefox/).
2. Click on **Add to Firefox**.
3. Click **Add** when prompted for permission.

[[info | NOTE:]]
| Check the box that says **Allow this extension to run in Private Windows** to enable this extension to work in **Private Windows**.


---


## **Testsigma Recorder Extension Options**


1. Navigate to **Extensions > Extension Settings > Manage Extensions**. 
   ![Manage Extensions](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Firefox_Extensions.png)


2. On **Testsigma Recorder Extension Details**, click **Meatballs** icon and select **Preferences**.
   ![Recorder Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/FF_Extension_Preferences.png)


3. You can see the following options:
   
   - Enable Inspect Popover on Elements
   
   - Disable Recording Mouse Scroll
   
   - Enable Developer Mode 

![All Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Recorder_Options_Firefox.png)


### **a. Enable Inspect Popover on Elements** 

This option highlights elements with a green rectangular box during web recording, which helps you with visual guidance for accurate element selection. 


### **b. Disable Recording Mouse Scroll**

This option will prevent the automatic addition of scroll NLPs in test cases, which helps you create clean test cases, especially for static applications without infinite loading.

[[info | **NOTE**:]]
| The above two options will be selected by default.


### **c. Enable Developer Mode**

Activates Browser Developer Mode for advanced debugging, enabling element inspection, troubleshooting locators, and gaining deeper insights into application behavior.


---

## **Enable Access Permissions in Firefox**

After installing the extension, configure it as follows:

### **Allow Extension to Access Data**

1. Click the **Extension** icon in the top right corner.
2. Navigate to **Manage Your Extensions**.
3. In the **Testsigma Recorder** extension and click on the **Menu** icon, then select **Manage**.
4. Under **Testsigma Recorder** details, go to the **Permission** tab and toggle on **Access your data for all windows**. ![Allow Extension to access data](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/config_firefox_extensions.gif)

### **Privacy & Security Settings** 

1. Click the **Menu** icon and select **Settings**.
2. Go to **Privacy & Security** and choose **Custom** in **Extended Tracking Protection**.
3. In the **Custom settings**, select **Cookies from unvisited websites** from the dropdown next to Cookies. 
4. Click **Reload All Tabs** to apply the changes in the browser. ![Choose Custom in Cookies](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/privacy_firefox_custom.gif)

[[info | NOTE:]]
| This enables Testsigma Recorder to access all websites within the browser to record interactions. 

---

