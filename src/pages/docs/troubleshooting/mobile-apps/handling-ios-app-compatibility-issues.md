---
title: "How to Handle iOS App Compatibility Issues?"
page_title: "Handling iOS App Compatibility Issues in Testsigma"
metadesc: "Testsigma resign your iOS app which results in loss of a few entitlements. This article discusses troubleshooting these compatibility issues"
noindex: false
order: 23.695
page_id: Handling iOS App Compatibility Issues
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Avoid These Compatibility Issues"
  url: "#steps-to-avoid-these-compatibility-issues"
---

---

When we resign your iOS app using Testsigma's wildcard provisioning profile to install it on our iOS devices, a few entitlements (like Push Notifications & App Groups) may be removed. This can result in compatibility issues if the app relies on these specific entitlements or access groups. This article discusses troubleshooting these compatibility issues. 

---

## **Steps to Avoid These Compatibility Issues**

### **1. Handling Entitlement Issues**

After resigning your iOS app, most entitlements are cleared except for the following:
- **application-identifier**
- **team-identifier**
- **keychain-access-groups**

To prevent issues during testing, ensure the app accesses these entitlements programmatically without hardcoded values. For unsupported entitlements, it is advisable to create a build that doesn’t depend on them.


### **2. Handling Keychain Access Groups**

Resigning the app changes the Team ID, which can cause issues if keychain access groups are hardcoded. To avoid this, ensure that the Team ID is retrieved programmatically during runtime instead of relying on fixed values. 


---