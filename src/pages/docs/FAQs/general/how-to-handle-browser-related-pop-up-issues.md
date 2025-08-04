---
title: "How to Handle Browser-Related Pop-Up Issues?"
metadesc: "Fix browser pop-up issues by setting a specific desired capability. This article shows how to resolve pop-up problems through configuration."
order: 24.32
page_id: "how-to-handle-browser-related-pop-up-issues-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve Pop-Up Issues"
  url: "#steps-to-resolve-pop-up-issues"
---

---

Whenever you face browser-related pop-up issues, you can resolve them by configuring a specific desired capability. This article explains how to use that capability to resolve such pop-up problems.

<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/pop_up.png" style="width: 400px;" />

---

## **Steps to Resolve Pop-Up Issues**

1. From the left navigation bar, navigate to **Create Tests** and click **Test Cases**. 

2. In the **Test Case Explorer** section, expand the required **Feature** and **Scenario** and select the required test case. 

3. In the **Test Case Details** page, click **Run**. 

4. In the **Ad-Hoc Run** overlay, expand the **Desired Capabilities** field and specify the desired capability. 

   | **Name** | **Data Type** | **Value** |
   | ------------- | ------------- | ------------- |
   | goog:chromeOptions | String | {"prefs": {"profile.password_manager_leak_detection": false}} |

5. Click **Run Now**. 

---