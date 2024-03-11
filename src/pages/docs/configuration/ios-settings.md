---
title: "Configuring Local iOS Device with Provisioning Profile"
page_title: "Configure Local iOS Device Provisioning Profile for Testing"
metadesc: "Effortlessly configure your local iOS device with a provisioning profile to start. Follow steps for error-free testing and elevate your mobile app development."
order: 19.5
page_id: "creating-provisioning-profile-for-ios-app-testing"
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Create Provisioning Profile"
  url: "#steps-to-create-provisioning-profile"
- type: link
  name: "Troubleshooting Errors"
  url: "#troubleshooting-errors"

---

---

Testsigma allows you to seamlessly test your applications on local iOS devices as well as on Testsigma Cloud machines. To achieve this, you need to properly configure your provisioning profiles or WebdriverAgent (WDA) on the Testsigma platform. This guide provides the step-by-step process for configuring your provisioning profiles and troubleshooting any potential errors encountered within Testsigma.

---

### **Prerequisites**

Before configuring your local iOS devices, ensure you have a valid [Apple Developer account](https://developer.apple.com/account) and have installed [Testsigma Agent](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/) on your local machine.

---

## **Steps to Create Provisioning Profile**

Follow these steps to generate a Certificate Signing Request (CSR) and upload it to the Apple Developer portal to run Testsigma tests on your local iOS device:

1. Navigate to **Settings** > **iOS Settings**.
2. Under the **Provisional Profile** tab, click on **Create New Profile** located in the top-right corner. ![iOS Setting in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_new_profile_pro.png)
3. Enter a name for the profile in the provided field.
4. Click **Generate Request** to create a **Certificate Signing Request** (CSR), and then click **Download Request** to save the CSR file. ![Generate CSR and Download](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/download_csr_ts.png)
5. Visit the [Apple Developer](https://developer.apple.com/account/resources/certificates/) portal and go to the **Certificates, Identifiers & Profiles** section. ![Apple Developer Website](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/certificate_apple.png)
6. Click on the **+** next to **Certificates** in the **Certificates** section, select **iOS App Development**. Click **Continue**. ![Select iOS App Developer](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/newiosapp_continue_apple.png)
7. After you upload the **CSR** file downloaded from **Testsigma**, click **Continue**. ![Upload CSR file](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/uploadcsr_continue_apple.png)
8. Click **Download** in the top-right corner to download the certificate file from the Apple Developer Portal. ![Download Certificate from Apple](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/download_certificate_apple.png) 
9. In **Testsigma**, click **Upload Certificate** next to **Certificate** and select the downloaded certificate file. ![Upload CSR file in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/upload_prof_pro_ts.png)
10. Go back to the **Apple Developer** Portal and navigate to the **Certificates**, **Identifiers** & **Profiles** > **Profiles** section. ![Select Profiles in Apple Portal](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/select_profiles_apple.png)
11. Click on the **+** next to **Profiles** in the **Profiles** section, select **iOS App Development**. Click **Continue**. ![Select iOS App Developer and click continue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/newiosapp_continue_profile_apple.png)
12. Click on the drop-down menu and select a **Wildcard App ID** in **Select an App ID**, then click **Continue** to proceed to the next step. ![Select App ID from Profiles](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/appid_profiles_apple.png)
13. Select a **Certificate** downloaded from the **Apple Developer** Portal, upload it to **Testsigma**, and include it in this provisioning profile. Afterwards, proceed to the next step by clicking on **Continue**. ![select certificate](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/selectcerftificate_profiles_apple.png)
14. Select the **Devices** that you want to include in this provisioning profile. ![select devices](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/selectdevices_profiles_apple.png)
15. Enter a name for the **Provisioning Profile** and click **Generate**. ![Generate Provisioning Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/generate_profiles_apple.png)
16. Click **Download** in the top-right corner to download the **Provisioning Profile** from the Apple Developer Portal ![Download Certificate from Apple](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/overview/download_profiles_apple.png)
17. In Testsigma, click **Upload Certificate** next to **Provisioning Profile** and select the downloaded Provisioning Profile file. ![Upload Provisioning Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/upload_profpro_testsigma.png)
18. Finally, you click **Create** to complete the **Provisioning Profile** setup. ![Provisioning Profile Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/create_ios_prof_ts.png)


[[info | NOTE:]]
| 1. You should download the iTunes exe installer from Apple's website for Windows. If you have installed it from Microsoft Store, please uninstall it.
| 2. If you have installed iTunes, ensure that Apple Mobile Device Service runs in Task Manager. If it is not running, open iTunes and check again if the service starts running.

You can further manage your certificates by downloading CSR and Provisioned certificates for viewing and checking the validity of the Provisioning Profile certificate. If necessary, you can remove Provisioning Profile certificates by clicking Delete.<br><br>Now that you have set up everything, you can record your iOS tests and run them on your iOS device(s).

---

## **Troubleshooting Errors**

|Error|Troubleshooting|
|---|---|
|**Invalid certificate uploaded, please upload a valid certificate.**|Check that you have uploaded the correct certificate and it is not corrupted. Ensure you have generated the certificate using the CSR generated in the iOS Settings Profile in Testsigma. |
|**Certificate uploaded is not included in this provisioning profile.**|Ensure that you select the correct certificate and provisioning profile for the device. When creating the provisioning profile, you should use the same certificate uploaded in iOS Settings in Testsigma.|
|**Upload is not resigned**|The upload is being re-signed. Once the re-signing process is complete, you can select it after a few minutes. You can track the status of the re-signing process in the Provisioning Profile Details dialogue in the configured iOS Settings Profile.|
|**Device initializing**|The Testsigma Agent sets up the device and shows errors during setup in the Devices tab on the Agent details page.|

---
