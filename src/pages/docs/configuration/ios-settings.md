---
title: "Configure your Local iOS Device"
order: 19.3
page_id: "iOS Settings"
metadesc: "Testsigma allows you to run tests on your Local iOS devices in addition to Testsigma Cloud machines/devices. Learn how to configure your local iOS Devices"
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "iOS Native Setting"
  url: "#ios-native-setting"
- type: link
  name: "Troubleshooting Errors"
  url: "#troubleshooting-errors"

---

---

Testsigma allows you to test local iOS devices and Testsigma Cloud machines/devices. To do this, you need to configure your provisioning profiles on Testsigma. This document provides a step-by-step guide for configuring your provisioning profiles and troubleshooting errors on Testsigma.

---

### **Prerequisites**

Before configuring your local iOS devices, ensure you have a valid [Apple Developer account](https://developer.apple.com/account) and have installed [Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/) on your local machine.

---

## **iOS Native Setting**

You must generate a Certificate Signing Request (CSR) and upload it to the Apple Developer portal to run Testsigma tests on your local iOS device. Here's how to do that:

1. Navigate to **Settings** > **iOS Settings**. ![iOS Setting in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/iosprofile_ts.png)
2. Click **+New Profile** in the top-right corner of the screen, and enter **Profile Name** in the field. ![Enter Profile name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/generate_csr_dwnld.png)
3. Click **Generate Request** to create a **Certificate Signing Request** (CSR) and click **Download Request** to download the CSR. ![Generate CSR and Download](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/download_csr_ts.png)
4. Go to the [Apple Developer](https://developer.apple.com/account/resources/certificates/) portal and navigate to the **Certificates, Identifiers & Profiles** section. ![Apple Developer Website](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/certificate_apple.png)
5. Click on **+** next to **Certificates** in the **Certificates** section, then select **iOS App Development**. Finally, click on **Continue**. ![Select iOS App Developer](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/newiosapp_continue_apple.png)
6. Click **Continue** after uploading the **CSR file** downloaded from **Testsigma**. ![Upload CSR file](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/uploadcsr_continue_apple.png)
7. Click **Download** in the screen's top-right corner to download the certificate file from the Apple Developer Portal. ![Download Certificate from Apple](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/download_certificate_apple.png) 
8. Click **Upload Certificate** next to **Certificate** in **Testsigma** and select the certificate downloaded from the Apple Developer Portal. ![Upload CSR file in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/upload_certificate_ts.png)
9. Create your **Mobile Provisioning Profile** by returning to the **Apple Developer** Portal and the  **Certificates, Identifiers & Profiles** > **Profiles** section. ![Select Profiles in Apple Portal](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/select_profiles_apple.png)
10. Click on **+** next to **Profiles** in the **Profiles** section, then select **iOS App Development**. Finally, click on **Continue**. ![Select iOS App Developer and click continue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/newiosapp_continue_profile_apple.png)
11. Click on the drop-down menu and select a **Wildcard App ID** in **Select an App ID**, then click **Continue** to proceed to the next step. ![Select App ID from Profiles](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/appid_profiles_apple.png)
12. Select a **Certificate** downloaded from the **Apple Developer** Portal, upload it to **Testsigma**, and include it in this provisioning profile. Afterwards, proceed to the next step by clicking on **Continue**. ![select certificate](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/selectcerftificate_profiles_apple.png)
13. Select the **Devices** that you want to include in this provisioning profile. ![select devices](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/selectdevices_profiles_apple.png)
14. Enter the **Provisioning Profile Name** in the field and click **Generate**. ![Generate Provisioning Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/generate_profiles_apple.png)
15. Click **Download** in the screen's top-right corner to download the **Provisioning Profile** from the Apple Developer Portal. ![Download Certificate from Apple](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/download_profiles_apple.png)
16. Click **Upload Certificate** next to **Provisioning Profile** in Testsigma and select the Provisioning Profile downloaded from the Apple Developer Portal. ![Upload Provisioning Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/upload_provisioningprofile_ts.png)
17. Click **Provisioning Profile Details** to view **Provisioned Devices** and **Re-signing Uploads Status**. ![Provisioning Profile Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/provisional_profiles_details_ts.png)

[[info | NOTE:]]
| 1. You should download the iTunes exe installer from Apple's website for Windows. If you have installed it from Microsoft Store, please uninstall it.
| 2. If you have installed iTunes, ensure that Apple Mobile Device Service runs in Task Manager. If it is not running, open iTunes and check again if the service starts running.

Now that you have set up everything, you can record your iOS tests and run them on your iOS device(s).

---

## **Troubleshooting Errors**

|Error|Troubleshooting|
|---|---|
|**Invalid certificate uploaded, please upload a valid certificate.**|Check that you have uploaded the correct certificate and it is not corrupted. Ensure you have generated the certificate using the CSR generated in the iOS Settings Profile in Testsigma. |
|**Certificate uploaded is not included in this provisioning profile.**|Ensure that you select the correct certificate and provisioning profile for the device. When creating the provisioning profile, you should use the same certificate uploaded in iOS Settings in Testsigma.|
|**Upload is not resigned**|The upload is being re-signed. Once the re-signing process is complete, you can select it after a few minutes. You can track the status of the re-signing process in the Provisioning Profile Details dialogue in the configured iOS Settings Profile.|
|**Device initializing**|The Testsigma Agent sets up the device and shows errors during setup in the Devices tab on the Agent details page.|

---
