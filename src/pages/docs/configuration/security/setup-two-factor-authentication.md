---
title: "Two-Factor Authentication (2FA)"
metadesc: "Two-Factor Authentication (2FA) is a security feature that requires two forms of verification to access your Testsigma account | Learn how to configure 2FA for Testsigma account"
noindex: false
order: 19.23
page_id: "two-factor-authentication"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Single Sign-on Options Available"
  url: "#single-sign-on-options-available"
- type: link
  name: "Enable SSO in Testsigma"
  url: "#enable-sso-in-testsigma"
---

---

Two-Factor Authentication (2FA) is a security feature that requires two forms of verification to access your Testsigma account. When 2FA is enabled, users must enter a one-time authentication code in addition to their username and password. This provides an added layer of protection for your account. This article discusses setting up Two-Factor Authentication for your Testsigma account.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have an authenticator app for your organization.

---

**Enable Two-Factor Authentication**

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