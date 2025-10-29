---
title: "Troubleshooting Common Issues in Salesforce Testing"
page_title: "Troubleshooting Some General Issues in Salesforce Testing"
metadesc: "Learn how to resolve some of the general issues while testing applications built on Salesforce | Troubleshooting general issues in Salesforce Testing"
noindex: false
order: 23.911
page_id: "troubleshooting-guide-for-salesforce-testing"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Authorization Failure"
  url: "#authorization-failure"
- type: link
  name: "Login NLP is Not Working"
  url: "#login-nlp-is-not-working"
- type: link
  name: "MFA Challenge"
  url: "#mfa-challenge"
- type: link
  name: "Execution Fails on Labs"
  url: "#execution-fails-on-labs"
- type: link
  name: "MFA Dialog Appears During Execution"
  url: "#mfa-dialog-appears-during-execution"
---

---

While testing applications built on Salesforce, you might face challenges that do not occur in traditional web applications. This is because security controls, session policies, and authentication rules are tightly enforced on the platform. As a result, executions may fail unexpectedly unless configurations are aligned correctly. This document discusses the most common issues faced while executing tests on Salesforce applications and provides actionable steps to resolve them quickly.

---

## **Authorization Failure**

### **Symptoms:**
![Auth Failure](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfauthfailure.png)

### **Possible Causes:**
- **ClientId** and **Secret** are incorrect.
- **Environment** might be wrong (e.g., production vs. development).
- **Callback URL** is incorrect.

### **Steps to Resolve** 

**1. Verify ClientId and Secret:**

- Double check the **ClientId** and **Secret** provided by the service and ensure there are no typos.

- Regenerate the **ClientId** and **Secret** if necessary.

**2. Check Environment Settings:**

- Ensure the correct **Environment** is selected (development, staging, production).

- Confirm your application's configuration.

**3. Check Callback URL:**

- Ensure the **Callback URL** matches the service provider's settings and check if there are typos.

- Ensure your server is configured to handle the callback request.

**4. Additional Notes:**

- Ensure the application's **permissions** and **scopes** are set correctly while creating a connected app.

- Check network & firewall settings for blocks on the authorization endpoint.

For more information, refer to the [documentation on creating a connected application](https://testsigma.com/docs/salesforce-testing/connected-app/).

---

## **Login NLP is Not Working**

### **Symptoms:**
Users can sync metadata but the login step fails.


### **Possible Causes:**

- Salesforce **Access Token** and **Refresh Token** might have expired.
- The same connected app is being used by multiple users simultaneously.
- Users might have changed the connected app configuration in the Salesforce org.

### **Steps to Resolve**

**1. Re-authenticate Salesforce Connection:**

- Try to authenticate the Salesforce connection again and obtain a new Access Token and Refresh Token.

**2. Verify Connected App Settings:**

- Check the connected app configuration in Salesforce and ensure all settings are correct.

**3. Best Practices:**

- Use different connections for different testing environments to avoid conflicts.


---

## **MFA Challenge**

### **Symptoms:**
Users can sync metadata but encounter an MFA challenge during the process.

### **Possible Causes:**
- Salesforce org configuration needs verification.

### **Steps to Resolve**

**1. Disable Org Level MFA Configurations:**

- Disable the **Require multi-factor authentication (MFA) for all direct UI logins to your Salesforce org** setting.
  ![Disable MFA Config](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmla.png)

**2. Disable User Level MFA Configurations:**
- Ensure that user-level MFA settings follow the required configuration. If not, adjust them accordingly by navigating to **Account > Settings > Advanced User Settings > User Details > Profile**
  
  ![MFA APIs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmla2.png)
  
  ![API Only User](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/sfmla3.png)

**3. Best Practices:**

**Waive MFA for Exempt Users:**

   - Ask customers to enable **Waive Multi-Factor Authentication for Exempt Users** in Salesforce.
     ![Waive MFA](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/waivemfasf.png)


**Create a Permission Set for Automation Users:**

   - Create a new permission set specifically for automation users.

   - Assign this permission set to users who are performing Salesforce authentication.

---

## **Execution Fails on Labs**

<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Salesforce_Execution_Fails_on_Labs.png" alt="Salesforce Execution Fails on Labs error banner" style="width: 700px;" />

### **Cause:**

The execution fails when the session is generated from a different machine but the execution is done on a different browser or environment, such as when a lab is selected. This mismatch results in Salesforce treating the session as invalid, leading to execution failure.

### **Steps to Resolve**

**1. Verify User Privileges**

Ensure the user executing the test has the same privileges as the **System Administrator**:

   - Navigate to **Setup > Quick Finder > Users**.

   - Click on the relevant user.

   - In the **User Detail** section, check the **Profile** and compare it with the **System Admin** profile.

![User Profile Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/User_Profile_Settings.png)

**2. Execute via Local Agent**

   - Run the test case on a local agent.

   - If the test executes successfully, the issue is related to **Labs** session handling.

**3. Update Session Settings (if issue is Labs-specific)**

Navigate to **Setup > Quick Finder > Session Settings** and configure as follows:
   
   - **Disable**: Lock sessions to the IP address from which they originated
   
   - **Enable**: Lock sessions to the domain in which they were first used
   
   - **Enable**: Force relogin after Login-As-User

![Session Security Levels](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Session_Security_Levels_Salesforce.png)

---

## **MFA Dialog Appears During Execution**

### **Cause:**

Salesforce enforces Multi-Factor Authentication for users logging in from untrusted devices or sessions. When tests are executed via Labs or agents, the sessions are considered untrusted, triggering the MFA Dialog.

### **Steps to Resolve**
Navigate to **Setup > Quick Finder > Session Settings > Session Security Levels**.

Update the following options:
   - **Remove**: Multi-Factor Authentication (MFA) requirement
   - **Ensure**: Passwordless Login is enabled
   - **Ensure**: Username & Password login is enabled

![Session Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Session_Settings_Salesforce.png)

[[info | **NOTE**:]]
| Configurations should match the screenshot in this reference guide.

---