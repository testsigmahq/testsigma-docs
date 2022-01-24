---
title: "Setting Up Okta Single Sign-On Integration with SAML Login in Testsigma"
page_title: "Configuring Okta Single Sign-On Integration with SAML in Testsigma"
metadesc: " How to set up Single Sign-On (SSO) with SAML login easily in Testsigma"
order: 19.23
page_id: "Setting Up Okta Single Sign-On Integration with SAML Login in Testsigma"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Terminology"
  url: "#terminology"
- type: link
  name: "I. Getting the Testsigma Configuration for Okta"
  url: "#i-getting-the-testsigma-configuration-for-okta"
- type: link
  name: "II. Create and configure OKTA"
  url: "#ii-create-and-configure-okta"
- type: link
  name: "III. Configuring Testsigma for Okta"
  url: "#iii-configuring-testsigma-for-okta"
---
---

Single Sign-On (SSO) provides faster, easier, and trusted access to applications.

With SSO, you are not required to store and manage passwords for the websites you use regularly. Instead of using passwords, applications that allow SSO login accept secured tokens that grant access to the application. This is mostly used for enterprises and SMBs for easy workforce identity management.

You can enable Single Sign-On (SSO) in Testsigma with Okta. Once configured, you can log into your Okta Dashboard to see your SSO-supported applications, including Testsigma. Okta will verify the user's identity and permissions, and then grant them access to Testsigma.


---
##**Terminology**

Here are a few entities that you need to be aware of before we move on to the details:

|A user|The person requesting access to the service. In this case, Testsigma App User|
|-----|----------|
|A service provider(SP)|The application that provides the service or protects the resource. In this case, Testsigma App|
|An identity provider(IdP)|The service/ repository that manages the user information. It may be Okta, Onelogin, Azure AD, or an in-house IdP/IAM Implementation|
|Entity ID|Entity ID is an identifier(an alphanumeric string or URI given by the Service Provider (SP) that uniquely identifies it. It's often part of a metadata file (an XML file with a certificate, entity ID, and endpoint URLs). You would get this from the IP (Okta, Onelogin e.t.c).|

---
##**I. Getting the Testsigma Configuration for Okta**

Navigate to **Settings > Security**

![Choose sso method as SAML](https://docs.testsigma.com/images/security/okta-ssochoose-sso-method-saml.png)

The security page looks as shown below if SSO has not been enabled yet:

[[info | NOTE:]]
|*If you are interested to know how you can set up Google SSO with Testsigma, refer [here](https://testsigma.com/docs/configuration/security/google-sso)*.


You will see two options here - **Google** and **SAML**. Choose SAML and click the **Proceed** button.

![Shows SAML Configuration Help for Testsigma](https://docs.testsigma.com/images/security/testsigma-sso-config-help.png)

You will find all the details you need to enter in Okta here as shown below:
The important ones are **‘Entity ID’** and **‘Single Sign-On(ACS) URL’**(refer to the Terminology section).
Note these down to use in the next section - section II.

---
##**II. Create and configure OKTA**

[[info | NOTE:]]
|*We strongly suggest you check with your IT team before trying the below steps since they might have exclusive admin access to the IdP configuration.*



1. Navigate to https://www.okta.com/login and login to the Admin console in OKTA.

     **a.** In the Admin Console, under **Applications**, click **Create App Integration** to get the Create a new app integration form as shown below:

     ![Choose SAML to integrate with Testsigma](https://docs.testsigma.com/images/security/create-app-integration-saml.png)
     **b.** Choose SAML 2.0 and click Next

2. On the first page - **General Settings,** you need to enter the details of the application (Testsigma) that you are integrating with SAML.

   ![General details of Testsigma app for Okta integration](https://docs.testsigma.com/images/security/general-settings-page-testsigma-app-okta-integration.png)

   **a.** **App Name:** Enter the application name, “Testsigma”, upload the logo (if required)

   **b.** **App logo and visibility:** Upload the app logo if you prefer.
(You may choose to display or not display the icon of Testsigma to the users in the Okta app for both web and mobile)

Click on **Next** to proceed.

3. On the second page - **Configure SAML,** we need to provide the Configuration details we got from Testsigma App following the steps in section I.

 ![Fill up form to generate XML for Testsigma's SAML request](https://docs.testsigma.com/images/security/form-testsigma-saml-request.png)
   **a.** **Single Sign-on URL:** https://app.testsigma.com

   **b.** **Audience URI:** https://app.testsigma.com/saml/77/metadata
   
   **c.** **Default Relay State :** https://app.testsigma.com/saml/77/login
   
   **d.** **Name ID Format :** EmailAddress (default)
   
   **e.** **Application Username :** Okta username (default)
   
   **f.** **Update application username on:** Create and update (default)

4. On the next page, check the options, **“I'm an OKTA User and adding an Internal App”** and **“This is an internal app that we have created”** and click **Finish**.

5. Next, you will see a **Sign-on methods** page. The sign-on method determines how a user signs into and manages their credentials for an application.

![View setup instructions to use while configuring SAML for Testsigma](https://docs.testsigma.com/images/security/view-setup-instructions-saml-testsigma.png)
   **a.** Click on **'View Setup Instructions'**


   **b.** Copy and note down the **'Identity Provider Issuer'**, **'Identity Provider Single Sign-On URL'**, and **'X.509 Certificate'** from this page. 
We will need the same on the Testsigma SAML SSO Configuration page in the next section - Section III.

![SAML certificate](https://docs.testsigma.com/images/security/saml-certificate.png)

Now, let's move on to the configuration that we need to perform in the Testsigma App.

---
##**III. Configuring Testsigma for Okta**

You would need to enter the Entity ID, SSO URL, and SAML Certificate you got from the last step (Step 5. b) in the previous section.

You may notice some differences in the terminologies used within Testsigma and Okta.

* **Entity Id (Identifier)** is the same as **Identity Provider Issuer**
* **Identity Provider Single Sign-On URL** is same as **Single Sign-On (ACS) URL**
* **SAML Certificate** is referred to as **X.509 Certificate in Okta**

![Enter the details captured during SAML configuration of Testsigma](https://docs.testsigma.com/images/security/enter-details-saml-certifacte-entity-url-testsigma.png)


Enter the details and click **Confirm**.


And, you are done.


To disable the SSO login using Okta, click the **Disable** button on the SAML option anytime.

After this, every user in your account would need to log in to Testsigma via the Okta Dashboard once logged out from the current session.



