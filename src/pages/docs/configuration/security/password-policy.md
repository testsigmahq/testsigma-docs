---
title: "Configure Password Policy"
metadesc: "Password Policy allows organization administrators to configure password-related security controls for user accounts. | Learn how to configure password policy in Testsigma"
noindex: false
order: 19.24
page_id: "password-policy"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Configure Password Policy"
  url: "#configure-password-policy"
---

---

Password Policy allows organization administrators to configure password-related security controls for user accounts. These settings manage session behavior, limit failed login attempts, and enforce periodic password changes across the organization. This article discusses configuring the password policy settings in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have an active Testsigma account.

---

## **Configure Password Policy**

1. Click the **User Profile** menu in the bottom-left corner.

2. Under **Organization Settings**, select **Password Policy**.
   ![Password Policy](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Org_Settings_Password_Policy.png)

3. Click **Configure**. This will open the **Configure Password Policy** dialog.
   ![Configure](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Configure_Password_Policy.png)

4. In the **Configure Password Policy** dialog, select each setting you want to enable.
   ![Configure Password Policy](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Options_for_Policy.png)

5. For each selected setting, enter the required value in the corresponding field:
   - **Idle Session Timeout (minutes)**: Enter the number of minutes after which inactive users are automatically signed out.
   - **Max Failed Login Attempts**: Enter the maximum number of consecutive failed login attempts allowed before the account is locked.
   - **Password Change Frequency (days)**: Enter how often users must change their passwords.
   ![Options & Values](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Options_and_Values_for_Policy.png)

6. Click **Update** to save your changes.
   ![Update Policy Options](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_Policy_Options.png)

---