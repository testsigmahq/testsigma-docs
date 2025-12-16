---
title: "Security Settings in Testsigma"
metadesc: "Security settings allow you to manage authentication, access control, and account security for the organization | Learn about security features available in Testsigma"
noindex: false
order: 19.21
page_id: "security-settings-in-testsigma"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Organization Settings"
  url: "#organization-settings"
- type: link
  name: "Two-Factor Authentication (2FA)"
  url: "#two-factor-authentication-2fa"
- type: link
  name: "Password Policy"
  url: "#password-policy"
- type: link
  name: "Single Sign-On (SSO)"
  url: "#single-sign-on-sso"
---

---

Security settings allow you to manage authentication, access control, and account security for the organization. These settings help ensure that only authorized users can access Testsigma and that access follows the organization’s security requirements. This article provides an overview of the security features available in Testsigma.

---


> <p id="prerequisites">Prerequisites</p>
> 
> Before configuring security settings, ensure that:
> 1. You have an active Testsigma account with administrator access.
> 2. You have access to the identity provider required for the security feature you want to configure.

---

## **Organization Settings**

Organization Settings allow administrators to manage organization-level authentication and security configurations, including Password Policy and Single Sign-On (SSO).

For details, see [Configure Organization Settings](https://testsigma.com/docs/configuration/security/org-settings/).

---

## **Two-Factor Authentication (2FA)**

Two-Factor Authentication provides an extra layer of security by requiring users to verify their identity using a second factor during sign-in.

For configuration steps, see [Two-Factor Authentication (2FA)](https://testsigma.com/docs/configuration/security/setup-two-factor-authentication/).

---

## **Password Policy**

Password Policy allows administrators to define password-related security controls for user accounts, such as session timeout, login attempt limits, and password change requirements.

To learn how to configure password policies, see [Configure Password Policy](https://testsigma.com/docs/configuration/security/password-policy/).

---

## **Single Sign-On (SSO)**

Single Sign-On (SSO) allows users to authenticate using an external identity provider and enforces SSO-based access to the organization.

For details, see:
- [Google Single Sign-On](https://testsigma.com/docs/configuration/security/google-sso/)
- [SAML-based Okta Single Sign-On](https://testsigma.com/docs/configuration/security/okta-sso/)
- [SAML-based Single Sign-On (Azure)](https://testsigma.com/docs/configuration/security/azure-sso/) 

---