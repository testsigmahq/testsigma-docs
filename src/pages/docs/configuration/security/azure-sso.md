---
title: "Setting up SAML-based SSO login for Testsigma in Azure"
page_title: "Setting up SAML-based Single Sign-On (SSO) for Testsigma with Azure AD"
metadesc: "How to enable single sign-on for Testsigma with Azure AD"
order: 19.24
page_id: "Setting up SAML-based SSO login for Testsigma in Azure"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "I. Adding Testsigma Enterprise Application"
  url: "#i-adding-testsigma-enterprise-application"
- type: link
  name: "II. Adding Users to the Enterprise Application"
  url: "#ii-adding-users-to-the-enterprise-application"
- type: link
  name: "III. SAML Configuration on Azure in Testsigma"
  url: "#iii-saml-configuration-on-azure-in-testsigma"
- type: link
  name: "IV. Azure Specific SAML Configuration in Testsigma"
  url: "#iv-azure-specific-saml-configuration-in-testsigma"
- type: link
  name: "V. Test the SAML Config"
  url: "#v-test-the-saml-config"
---
---

With Azure (by Microsoft) Active Directory, users can automatically sign into their cloud-hosted/on-premise applications for a hassle-free, secure sign-in experience.

You can use the Azure Active Directory Admin Center to enable single sign-on (SSO) for Testsigma. After you configure SSO, your users can sign in to our application by using their Azure AD credentials.


## **Prerequisites**

**-** Azure Account with Active Directory enabled

**-** Admin Access to Azure Account


## **I. Adding Testsigma Enterprise Application**

1. Login to Azure portal using the URL :  https://portal.azure.com


   You will be taken to the home page as shown below:
   ![Azure management portal](http://docs.testsigma.com/images/azure-sso/azure-management-portal.png)

2. Click the **View** button below **“Manage Azure Active Directory”.**

3. In the Active Directory Overview page, click on **+ New application** and choose **Enterprise Application**


4. Click on **+ Create your own application**
In the overlay that opens up on the right, enter the name of the app you are integrating, i.e., *Testsigma*. Select option, **‘Integrate any other Application (Non-gallery)’** and click the **Create** button.

    ![Add Testsigma in Azure AD](https://docs.testsigma.com/images/azure-sso/add-new-application-testsigma-azure-ad.png)

    You’ll be taken to the newly added Testsigma overview page.

    ![Testsigma properties on Azure](https://docs.testsigma.com/images/azure-sso/Testsigma-properties.png)

## **II. Adding Users to the Enterprise Application**

   1. Click the **Assign users and groups card** to add the users in Azure AD to the recently added Testsigma app.

   2. Click on the **+ Add user/group** on top
   ![Add users to enable sign on for Testsigma](https://docs.testsigma.com/images/azure-sso/add-users-azure-sso.png)

   3. In the next page, Add Assignment, click on the **None selected** link to open up the Users overlay.
   ![SSO enabled users for login](https://docs.testsigma.com/images/azure-sso/sso-enabled-users-list.png)
   Select the required users from the Users overlay that opens up on the right.

   4. Click on the **Select** button to pick and finalize the users list. You can find the list of added Users at the left pane under Users. 

   5. To add assignments to these users, click **Assign**.

## **III. SAML Configuration on Azure in Testsigma**

   1. Back in Testsigma Overview page on Azure, click option 2 i.e, **Set up single sign on**.
   ![set up sso login for Testsigma](https://docs.testsigma.com/images/azure-sso/setup-sso-for-login.png)

   2. Select the SAML authentication option.
   You will be taken to the Setup Single Sign-on with SAML screen as shown below:
   ![SAML configuration settings for Testsigma](https://docs.testsigma.com/images/azure-sso/saml-configuration-settings.png)

   3. Click on the Edit button on Section **1 - Basic SAML Configuration,** enter the following details, and click Save:
   
   &emsp; **Entity ID :** https://app.testsigma.com/saml/<id>/metadata

   &emsp; **Reply URL :** https://app.testsigma.com/saml/<id>/callback
   
   &emsp; **Sign on URL :** (Leave it empty)
   
   &emsp; **Relay State :** https://app.testsigma.com/saml/<id>/callback
   
   &emsp; **Logout URL :** (Leave it empty)

[[info | NOTE:]]
|*You need to replace the **<id>** with the SAML token identifier for your account. To get your **id**, you need to follow the steps below*.

   Back in your Testsigma account, navigate to **Settings > Security**. Choose the SAML card and click **Proceed**.
   ![Choose identity provider as SAML](https://docs.testsigma.com/images/azure-sso/choose-identity-provider-saml.png)

   You will see an exclusive SAML token identifier for your account. 
   ![Configuration id for saml configuration on Azure](https://docs.testsigma.com/images/azure-sso/configuration-id-saml-configuration.png)&emsp;

   4. You need to put this identifier in place of **\<id>** in Step 3 and click Save.
   ![Fill in basic configuration details for saml configuration](https://docs.testsigma.com/images/azure-sso/fill-saml-configuration-settings-basic-details.png)

   5. Click on the Edit button of Section 2 - **User Attributes & Claims**. Under **Required claim**, click the Claim name/Claim value.

   6. In the Manage Claim page that now appears, select **Source attribute** as **user.email** from the dropdown.
   ![Key/value-pairs attached to the user in Azure AD](https://docs.testsigma.com/images/azure-sso/manage-claim-azure-ad.png)

   7. Click **Save** and go back to the previous SAML-based Sign-on page.

   8. Click on the Edit button for section 3 - **SAML Signing Certificate,** enter the following details, and click Save:

   &emsp; **Signing Option:** SAML response and assertion

   &emsp; **Signing Algorithm:** SHA-256

   That's all the configuration you need to perform on Azure App for SAML-based Sign-on.


   9. Now, navigate back to the SAML Sign-on page
   Download the XML file, **‘Federation Metadata XML’** by clicking the **Download** link under Section 3 - SAML Signing Certificate. 
    ![downloaded SAML certificate](https://docs.testsigma.com/images/azure-sso/download-saml-certificate.png)


   10. Open the XML File and copy the value under the key **EntityDescriptor > Signature > KeyInfo > X509Data > X509Certificate**
    ![downloaded SAML certificate](https://docs.testsigma.com/images/azure-sso/downloaded-saml-certificate.png)
   

   You can just search for **\<X509Certificate>** and copy the value between first occurrence of **\<X509Certificate>** and **\<X509Certificate>**

   11.  Note down the following values from **Section 4 - Set Up Testsigma App**.

   &emsp; **Azure AD Identifier**

   &emsp; **Login URL**

   We will use the **X509Certificate** value, also the values above in Testsigma app in the next section.

## **IV. Azure Specific SAML Configuration in Testsigma**

Inside your Testsigma account, navigate to **Settings>Security**
  1. Click **Proceed** under SAML

 Enter the following details:

* **Entity ID:** same as **Azure AD Identifier** (obtained from Section 4 in Azure SAML Setup page)
* **SSO URL:** same as **Login URL** (obtained from Section 4 in Azure SAML Setup page)
* **SAML certificate:** downloaded **\<X509Certificate>** value (obtained in previous section from downloaded XML file).
This value resides within the tag: **\<X509Certificate>\<X509Certificate>**
Paste this value.
![Azure Specific SAML Configuration On Testsigma](https://docs.testsigma.com/images/azure-sso/azure-saml-configuration-testsigma.png)

<br>

2. Click the **Confirm** button to finalize the changes.
 
SAML will now be enabled,

Let’s test the SSO.

## **V. Test the SAML Config**

 1. On Section 5 of the Single Sign-On option, you will find the option to test. Click 
 **Test**.

 2. To test the sign-in, click on the **‘Sign in as current user’** option.

This will test the SAML-based login with the currently logged-in user.
![Test Testsigma SIngle Sign On](https://docs.testsigma.com/images/azure-sso/test-testsigma-sso.png)

This will automatically log you into Testsigma.

