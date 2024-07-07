---
title: "Setting Up Okta Single Sign-On Integration with SAML Login in Testsigma"
page_title: "Configuring Okta SSO Integration with SAML in Testsigma"
metadesc: "Single Sign-On (SSO) provides faster, easier, and trusted access to applications. Learn how to set up Single Sign-On (SSO) with SAML login easily in Testsigma."
noindex: false
order: 19.23
page_id: "setting-up-okta-sso-with-saml--in-testsigma"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Terminology"
  url: "#terminology"
- type: link
  name: "Getting the Testsigma Configuration for Okta"
  url: "#getting-the-testsigma-configuration-for-okta"
- type: link
  name: "Create and configure Okta"
  url: "#create-and-configure-okta"
- type: link
  name: "Configure Testsigma for Okta SSO"
  url: "#configure-testsigma-for-okta-sso"
- type: link
  name: "Sign in to Testsigma with SAML SSO"
  url: "#sign-in-to-testsigma-with-saml-sso"
- type: link
  name: "Disable Configured SSO"
  url: "#disable-configured-sso"
---

---

Single Sign-On (SSO) provides faster, easier, and more secure application access, enhancing user experience and security. SSO allows users to access multiple applications with a single login credentials, eliminating the need to remember multiple passwords. Instead of passwords, SSO uses secure tokens to grant access, making it a preferred solution for enterprises and SMBs to manage workforce identities efficiently. This guide will help you configure Okta and Testsigma to work together seamlessly, simplifying user access management and improving productivity.

---

## **Terminology**

Familiarise yourself with these key terms before proceeding:

| Term                             | Definition                                                                          |
|----------------------------------|-------------------------------------------------------------------------------------|
| User                             | The person requesting access to the service. In this case, the Testsigma app user.   |
| Service Provider (SP)            | The application providing the service. Here, it's Testsigma.                        |
| Identity Provider (IdP)          | The service managing user information, such as Okta, OneLogin, or Azure AD.         |
| SAML Certificate/X.509 Certificate | A digital certificate used to verify the identity of the entities in SAML transactions. |
| Single Sign-On URL               | The URL where authentication requests are sent for SSO.                             |
| Audience URI (SP Entity ID)      | The unique identifier of the service provider, often a URL.                         |
| Default RelayState               | The URL to redirect users to after authentication.                                  |
| Name ID Format                   | The format of the user identifier sent in the SAML assertion, typically an email address. |

---

## **Getting the Testsigma Configuration for Okta**

1. Navigate to **Settings** > **Security (SSO)**.
2. On the **Security SSO** page, you will see options for **Google** and **SAML**. Enable the **SAML** toggle.
[[info | NOTE:]]
| You can use only one SSO for your account. If you are using Google SSO, turn it off first.
3. In the **Enable SSO** pop-up, record the **Entity ID (Identifier)** and **Single Sign-On (ACS) URL** for use in Okta configuration. ![getting testsigma configuration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/getting_testsigma_configuration.gif)

---

## **Create and configure Okta**

1. Log in to the [Okta Admin Console](https://www.okta.com/login).
[[info | NOTE:]]
| Check with your IT team before proceeding, as they may have exclusive admin access to the IdP configuration.
1. In the **Admin** Console, under **Applications**, click **Create App Integration**. Choose **SAML 2.0** and click **Next**.
2. In **General Settings** tab fill below details and click **Next** to proceed.
    - **App Name**: Enter Application name, example **Testsigma**:
    - **App Logo and Visibility**: Upload the app logo if preferred. ![general okta settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/okta_general_settings.gif)
3. Configure **SAML Settings** and click **Next** to proceed:
    - **Single Sign-On URL**: https://app.testsigma.com/saml/250/callback
    - **Audience URI (SP Entity ID)**: https://app.testsigma.com/saml/250/metadata
    - **Default RelayState**: https://app.testsigma.com/ui/dashboard
    - **Name ID Format**: Select EmailAddress from dropdown.
    - **Application Username**: Okta username (default)
    - **Update Application Username On**: Create and update (default)
4. Finish Setup by selecting **"I'm an OKTA User and add an Internal App"** and **"This is an internal app we have created"**. Click **Finish**. ![config saml okta](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/config_saml_okta.gif)
5. On the Sign-on methods page, click **View Setup Instructions**.
6. Copy the **Identity Provider Issuer**, **Identity Provider Single Sign-On URL**, and **X.509 Certificate** for use in Testsigma.

---

## **Configure Testsigma for Okta SSO**

1. In Testsigma, enter the **Entity ID**, **SSO URL**, and **SAML Certificate** recorded from Okta.
2. Terminology Mapping:
    - **Entity ID**: Same Identity Provider Issuer.
    - **Identity Provider Single Sign-On URL**: Paste Single Sign-On (ACS) URL.
    - **SAML Certificate**: Paste X.509 Certificate.
3. Click **Confirm Credentials** to confirm the Configuration. ![config testsigma for okta sso](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/config_testsigma_okta_id.gif)

---

## **Sign in to Testsigma with SAML SSO**

After configuring your Testsigma account with SAML, you can log in using SSO.

1. Click **Sign in with SSO** on the Testsigma login page.
2. Enter the **email ID** configured with SSO with the account and click **Sign in**. ![signin through sso](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/signin_through_sso.gif)
[[info | NOTE:]]
| - Install the Okta mobile app for the first-time authentication. 
| - You cannot log in through SSO without configuring your email.

---

## **Disable Configured SSO**

To disable SSO login using Okta, turn off the toggle to disable SAML SSO at any time. A disable SAML SSO warning prompt will appear. Click **I Understand and Disable** to remove the SSO configuration from your account. ![disable configured sso](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/disable_configured_sso.gif)

---