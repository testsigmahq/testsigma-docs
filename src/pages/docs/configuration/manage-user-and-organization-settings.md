---
title: "Configure User and Organization Settings"
pagetitle: "Configure User and Organization Settings"
metadesc: "You can configure user-level settings such as updating your profile information, changing your password, & enabling 2FA to add an extra layer of security to your account"
noindex: false
order: 19.11
page_id: "configure-user-and-organization-settings"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "User Settings"
  url: "#user-settings"
- type: link
  name: "Organization Settings"
  url: "#organization-settings"
---

---

You can now manage user settings and configure organization level security policies in Testsigma. This includes updating your profile, changing your password, enabling Two-Factor Authentication (2FA), and setting password security requirements for your team. This article discusses configuring User and Organization Settings in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have an active Testsigma account.

---

## **User Settings**

1. On the **Dashboard**, click **User Profile** and select **Change Password**.
   ![User Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/User_Profile_Icon.png)

2. Under **User Settings**, you can update the following:
   - **Profile**
   - **Change Password**
   - **Two-Factor Authentication (2FA)**
   ![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/User_Settings_Update.png)

---

## **Profile**

1. Click **Profile** under **User Settings**.
   ![User Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/User_Profile_Update.png)

2. Edit the **First Name** and **Last Name** fields.

3. Click **Update** to save the changes.
   ![Update Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_Profile_Name.png)

---

## **Change Password**

1. Click **Change Password** under **User Settings**.
   ![Change Password](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Change_User_Password.png)

2. Enter your **Current Password**, **New Password**, and **Confirm Password**.
   ![Enter Passwords](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Enter_Passwords_in_Fields.png)

3. Click **Update**.
   ![Update Passwords](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_Password_Button.png)

---

## **Two-Factor Authentication (2FA)**

1. Click **2FA** under **User Settings**.
   ![2FA](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/2FA_Button.png)

2. Turn on the **Two-Factor Authentication** toggle. This will open the **Confirm Your Password** dialog.
   ![2FA Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/2FA_Toggle_Enable.png)

3. In the **Confirm Your Password** dialog, enter your password, and click **Continue**. This will open the **Set Up Authenticator App** dialog.
   ![Confirm Your Password](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Continue_with_2FA.png)

4. In the **Set Up Authenticator App** dialog, scan the QR code or enter the setup key in your authenticator app.
   ![QR Code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/QR_Code_for_2FA.png)

5. Click **Continue**. This will open the **Verify Authenticator App** dialog.
   ![Continue after QR Code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Contiune_After_QR_Code.png)

6. In the **Verify Authenticator App** dialog:
   - Enter the 6-digit code from your authenticator app.
   - Click **Continue**.
   ![Continue after entering Authenticator Code](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Continue_after_entering_Authenticator_Code.png)

7. You have now successfully enabled **Two-Factor Authentication** for your Testsigma account.

---

## **Organization Settings**

1. On the **Dashboard**, click **User Profile** and select **Change Password**.
   ![User Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/User_Profile_Icon.png)

2. Under **Organization Settings**, you can update the following:
   - **Password Policy**
   - **Security (SSO)**
   ![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Org_Settings_to_Update.png)

---

## **Password Policy**

1. Under **Organization Settings**, click **Password Policy**.
   ![Password Policy](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Org_Settings_Password_Policy.png)

2. Click **Configure**. This will open the **Configure Password Policy** dialog.
   ![Configure](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Configure_Password_Policy.png)

3. In the **Configure Password Policy** dialog, select the each setting you want to enable.
   ![Configure Password Policy](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Options_for_Policy.png)

4. For each selected setting, enter the required value in the corresponding field:
   - **Idle Session Timeout (minutes)**: Enter the number of minutes after which inactive users are automatically signed out.
   - **Max Failed Login Attempts**: Enter the maximum number of consecutive failed login attempts allowed before the account is locked.
   - **Password Change Frequency (days)**: Enter how often users must change their passwords.
   ![Options & Values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Options_and_Values_for_Policy.png)

5. Click **Update** to save your changes.
   ![Update Policy Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_Policy_Options.png)

---

## **Single Sign-On (SSO)**

Testsigma allows team members to sign in using their **Single Sign-On (SSO)** credentials. You can enable SSO authentication using Google or SAML. When SSO is enabled, all team members must sign in using the selected SSO provider to access your Testsigma workspace.
   
   ![Single Sign-On (SSO) in Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/SSO_Options_In_Testsigma.png)

> For detailed setup steps, see the [Single Sign-On (SSO) documentation](https://testsigma.com/docs/configuration/security/overview/) in Testsigma.

---