---
title: "How to Resolve App Launch Issues?"
metadesc: "Learn how to disable iOS app re-signing in Testsigma to preserve push notifications, entitlements, and app functionality using a desired capability for enterprise-signed apps."
order: 24.24
page_id: "how-to-resolve-app-launch-issues-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "SSteps to Resolve App Launch Issues"
  url: "#steps-to-resolve-app-launch-issues"

---

---

By default, Testsigma re-signs iOS apps for installation, but this can break features like push notifications and custom entitlements that rely on original signing credentials.

If your app is already signed using the **Apple Developer Enterprise Program**, you can disable re-signing by adding a specific desired capability to preserve its functionality during testing.

---

## **Steps to Resolve App Launch Issues**

1. From the left navigation bar, go to **Create Tests** and click **Test Cases**.
   ![Test Cases](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/IPA_1.1.png)

2. In the **Test Case Explorer** section, expand the required **Feature** and **Scenario** and select the required test case.
   ![Select a test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/IPA_2.png)

3. In the **Test Case Details** page, click **Run**.
   ![Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/IPA_3.png)

4. In the **Ad-Hoc Run** overlay, expand the **Desired Capabilities** field and specify the following desired capability:

   |Key|Data type|Value|
   |---|---|---|
   |resignApp|String|false|
   ![desired capability](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/IPA_4.png)

5. Click **Run Now**. 
   ![Run now](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/IPA_5.png)

---