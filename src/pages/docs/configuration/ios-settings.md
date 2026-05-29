---
title: "Configuring Local iOS Device with Provisioning Profile"
page_title: "Configure Local iOS Device Provisioning Profile for Testing"
metadesc: "Effortlessly configure your local iOS device with a provisioning profile to start. Follow steps for error-free testing and elevate your mobile app development."
order: 20.5
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

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that:
> 1. You have a valid <a href="https://developer.apple.com/account" rel="nofollow">Apple Developer account</a>.
> 2. You have referred to the <a href="https://testsigma.com/docs/agent/setup-on-windows-mac-linux/" rel="nofollow">documentation on installing Testsigma Agent</a> on your local machine.
> 3. For Windows machines, you must install iTunes to connect the iOS device for automation. Click <a href="https://support.apple.com/en-us/106372" rel="nofollow">here</a> to download it.


---

## **Steps to Create Provisioning Profile**

Follow these steps to generate a Certificate Signing Request (CSR) and upload it to the Apple Developer portal to run Testsigma tests on your local iOS device:

1. Navigate to **Settings** > **iOS Settings**.
   ![iOS Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_1.png)

2. In the **iOS Settings** screen, under the **Provisional Profile** tab, click  **+ Create new profile**. 
   ![iOS Setting in Testsigma](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_2.png)

3. Enter a name for the profile in the **Profile Name** field.
   ![Profile Name](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_3.png)

4. Click **Generate Request** to create a **Certificate Signing Request** (CSR), and then click **Download Request** to save the CSR file. 
   ![Generate CSR and Download](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_4.png)

5. Visit the <a href="https://developer.apple.com/account/resources/certificates/" rel="nofollow">Apple Developer</a> portal and go to the **Certificates, Identifiers & Profiles** section and click the **+** icon next to **Certificates**.  
   ![Apple Developer Website](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_5.png)

6. In the **Create a New Certificate** screen, select **iOS App Development** under **Software** and click **Continue**. 
   ![Select iOS App Developer](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_6.png)

7. Upload the **CSR** file downloaded from **Testsigma**, click **Continue**. 
   ![Upload CSR file](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_7.png)

8. In the **Download your certificate** screen, click **Download** to download the certificate file from the Apple Developer Portal. 
   ![Download Certificate from Apple](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_8.png) 

9. In **Testsigma**, click **Upload Signed file** under **Upload Certificate** and select the downloaded certificate file. 
   ![Upload CSR file in Testsigma](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_9.png)

10. Go back to the **Apple Developer** Portal and navigate to the **Certificates**, **Identifiers** & **Profiles** > **Profiles** section click the **+** icon next to **Profiles**.
   ![Select Profiles in Apple Portal](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_10.png)

11. In the **Register a New Provisioning Profile** screen, select **iOS App Development** under **Development** and click **Continue**. 
   ![Select iOS App Developer and click continue](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_11.png)

12. Click the drop-down menu under **Select an App ID** section, select an App ID, and click **Continue** to proceed to the next step. 
   ![Select App ID from Profiles](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_12.png)
     
13. Select the certificates that you wish to include in the provisioning profile and click **Continue**. 
   ![select certificate](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_13.png)

14. Select the **Devices** that you want to include in this provisioning profile and click **Continue**. 
   ![select devices](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_14.png)

15. Enter a name for your **Provisioning Profile** and click **Generate**. 
   ![Generate Provisioning Profile](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_15.png)

16. Click **Download** to download the **Provisioning Profile** from the Apple Developer Portal. 
   ![Download Certificate from Apple](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_16.png)

17. In Testsigma, click **Upload Certificate** next to **Provisioning Profile** and select the downloaded Provisioning Profile file and click **Create**. 
   ![Upload Provisioning Profile](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_provision_profile_17.png)


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
