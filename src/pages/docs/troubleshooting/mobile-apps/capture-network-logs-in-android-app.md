---
title: "How to Capture Network Logs in an Android Application?"
page_title: "Capturing Network Logs in an Android Application"
metadesc: "If Android application is not capturing network logs it may be due to missing proxy certificates or security configurations. Learn how to resolve these errors."
noindex: false
order: 23.697
page_id: "capture-network-logs-in-an-android-application"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Troubleshooting Steps"
  url: "#troubleshooting-steps"
---

---

If your Android application is not capturing network logs or is showing invalid certificate errors, it may be due to missing proxy certificates or security configurations. As per <a href="https://android-developers.googleblog.com/2016/07/changes-to-trusted-certificate.html" rel="nofollow">Android’s official documentation</a>, apps do not trust user/admin added CAs by default. Certificates issued by these authorities are rejected, which prevents the app from capturing network traffic and can cause errors when using self-signed certificates. This article discusses steps to enable network logging on Android devices correctly.

---

## **Troubleshooting Steps**

### **Step 1: Create a network security configuration XML file**

1. Create the **res/xml** directory in your project if it does not exist.

2. Create a new XML file named **network_security_config.xml**.

3. Add the following content:

   ```xml
   <network-security-config>
       <base-config>
           <trust-anchors>
               <!-- Trust preinstalled CAs -->
               <certificates src="system" />
               <!-- Trust user-added CAs (needed for proxies) -->
               <certificates src="user" />
           </trust-anchors>
       </base-config>
   </network-security-config>
   ```


This configuration allows your app to trust user-installed certificates, enabling proxy tools to capture network logs.


### **Step 2: Update the Application Manifest File**

1. Open **AndroidManifest.xml**.

2. Locate the <application> tag.

3. Add the **android:networkSecurityConfig** attribute:

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <manifest ... >
       <application android:networkSecurityConfig="@xml/network_security_config">
           ...
       </application>
   </manifest>
   ```



Now, your app will use the specified network security configuration and allow network logs to be captured.

---