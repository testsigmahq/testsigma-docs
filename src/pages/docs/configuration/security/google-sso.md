---
title: "Setting Up Google Single Sign-On(SSO) Login in Testsigma"
page_title: "Setting up Google Single Sign-On (SSO) login"
metadesc: "Learn how to set up Single Sign-On (SSO) with Google in Testsigma. With Google SSO, you are not required to store and manage passwords for the websites."
noindex: false
order: 19.25
page_id: "google-sso"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Enable SSO in Testsigma"
  url: "#steps-to-enable-sso-in-testsigma"
---

---


With SSO, you are not required to store and manage passwords for the websites you use regularly. Instead of using passwords, applications that allow SSO login accept secured tokens that grant access to the application. This article discusses configuring Testsigma to enable Google to Single Sign-On (SSO).


---


> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure you have an active Testsigma account.


---

## **Steps to Enable SSO in Testsigma**

1. Navigate to your profile and click **Switch Account**.

2. Click **Settings** under the **Others** section on the home screen.

3. In the **Settings** panel, scroll down to **Organization Settings** and click **Security (SSO)**.

4. In the **Single Sign-On (SSO)** settings, enable the toggle on **Google** widget. 

[[info | **NOTE**:]]
| The toggle will be disabled if you’re not logged into **G Suite**. You can login by clicking on **Click** here.
| ![G Suite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/sso/SAML_google.png)

5. Your Google SSO login option will now be enabled. 

The next time you login to Testsigma, you and your teammates can log in using Google.

![Login Google](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ssosiugs.png)


---