---
title: "Setting up Google Single Sign-On(SSO) login in Testsigma"
page_title: "Setting up Google Single Sign-On (SSO) login"
metadesc: "How to set up Single Sign-On (SSO) with Google in Testsigma."
noindex: false
order: 19.22
page_id: "Setting up Google Single Sign-On(SSO) login in Testsigma"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Enabling SSO in Testsigma"
  url: "#enabling-sso-in-testsigma"
- type: link
  name: "Navigation: Settings > Security"
  url: "#navigation-settings--security"
- type: link
  name: "Here’s how you set up your Google SSO in 3 simple steps"
  url: "#heres-how-you-set-up-your-google-sso-in-3-simple-steps"
---

---

With SSO, you are not required to store and manage passwords for the websites you use regularly. Instead of using passwords, applications that allow SSO login accept secured tokens that grant access to the application. This is mostly used for enterprises and SMBs for easy workforce identity management.

Here’s how you can configure Testsigma to allow Google Single Sign-On (SSO).

---
##**Enabling SSO in Testsigma**

### **Navigation: Settings > Security**


You will see two options (Google SSO, SAML) in the Identity Provider pane.
Since we are configuring Google SSO, we will choose the first card.

If you are currently logged in to your GSuite account, skip to Step 3.

If you are not already logged in, the Google SSO option (**‘Proceed’** button) will be disabled as shown in the image below.

![Navigation to opt for Single Sign-On in Testsigma](https://docs.testsigma.com/images/google-sso/single-sign-on-login-testsigma.png)

---
## **Here’s how you set up your Google SSO in 3 simple steps:**

1. Click on the **‘Click here’** link to log in via your Google account.

2. A window to authenticate your Google account will open. Choose the right account (below is an example).

    ![Google authentication dummy accounts example](https://docs.testsigma.com/images/google-sso/google-choose-an-account-sso-dummy.png)

3. Your Google SSO login option will now be enabled. Click **Proceed** on the Google SSO card.

[[info | NOTE:]]
|The account you used to login with Testsigma and GSuite needs to be of the same domain (Ex. testsigma.com, facebook.com).


  The next time you log in to Testsigma, you and your teammates can log in using the Google sign-in button (highlighted in yellow).
 
  ![SSO enabled Testsigma login](https://docs.testsigma.com/images/google-sso/sso-enabled-login-via-google-account-testsigma.png)



