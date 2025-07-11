---
title: "Single Sign-on Options Available in Testsigma"
metadesc: "Setting up of all SSO types supported in Testsigma Application. With SSO, there's no need to store and manage passwords for the websites."
noindex: false
order: 19.21
page_id: "Single Sign-on options available in Testsigma"
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
  name: "Steps to Enable SSO in Testsigma"
  url: "#steps-to-enable-sso-in-testsigma"
---

---

Single Sign-On (SSO) is an authentication process that allows you to access an application with a single login credentials. Testsigma allows SSO login to access the application. This article discusses SSO options available in Testsigma.

---


## **Prerequisites**
- You should have an active Testsigma account.


---

## **Single Sign-on Options Available**


1. Google Single Sign On
    ![google cloud log](https://docs.testsigma.com/images/security/google-cloud-logo.png)


2. SAML 2.0 based SSO - Okta, OneLogin, Azure AD e.t.c
    ![okta logo](https://docs.testsigma.com/images/security/okta-logo.png)
    ![onelogin logo](https://docs.testsigma.com/images/security/onelogin-logo.png)
    ![microsoft azure logo](https://docs.testsigma.com/images/security/microsoft-azure-logo.png)

## **Steps to Enable SSO in Testsigma**

1. Navigate to your profile and click **Switch Account**.

2. Click **Settings** under the **Others** section on the home screen.

3. In the **Settings** panel, scroll down to **Organization Settings** and click **Security (SSO)**.

4. In the **Single Sign-On (SSO)** settings, you can enable the SSO depending on your provider.

![enable sso](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/sso/SAML_image.1.png)

Follow one of the links below to set up SSO depending on your provider:

**-** [Set up Google Single Sign-On (SSO) login in Testsigma](https://testsigma.com/docs/configuration/security/google-sso/).

**-** [Set up SAML-based SSO login - Okta](https://testsigma.com/docs/configuration/security/okta-sso/).

**-** [Set up SAML-based SSO login - Azure](https://testsigma.com/docs/configuration/security/azure-sso/).