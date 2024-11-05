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

While resigning the app, Testsigma uses a wildcard Team ID, which may conflict with the access group expected by the app, resulting in a keychain access error. 

![Error](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/errormsgipa.gif)

### **Generic Error Message:**

```
<Notice>: [App Name][PID]/1#4 LF=0 copy_matching Error
Domain=NSOSStatusErrorDomain Code=-34018
"Client explicitly specifies access group [App-Specific-Access-Group] but is only entitled for (
    "[Testsigma-TeamId].*",
    "com.apple.token"
)"
UserInfo={numberOfErrorsDeep=0, NSDescription=Client explicitly specifies access group
[App-Specific-Access-Group] but is only entitled for (
    "[Testsigma-TeamId].*",
    "com.apple.token"
)}
<Notice>: ERROR ::: KeyChainTokenStore ::: getUser Failed: The operation couldn't be completed. (OSStatus error -34018.)

```

### **How to Avoid this Error?**
Modify the app in such a way that it dynamically retrieves the Team ID from its entitlements instead of hardcoding it. This flexibility ensures compatibility with Testsigma’s resigning process.

### **Examples for Dynamic Retrieval**

**Example 1:**
```
import Foundation

func getTeamIDFromEntitlements() -> String? {
    guard let entitlements = Bundle.main.infoDictionary else {
        return nil
    }
    if let teamID = entitlements["AppIdentifierPrefix"] as? [String] {
        return teamID.first?.trimmingCharacters(in: .whitespaces)
    }
    return nil
}

// Usage
if let teamID = getTeamIDFromEntitlements() {
    print("Team ID: \(teamID)")
} else {
    print("Failed to retrieve Team ID")
}

```

**Example 2:**

```
import Foundation
import Security

class KeychainHelper {
    static let shared = KeychainHelper()
    
    enum KeyChainAccessError: Error {
        case accessGroupNotFound
    }
    
    func getAccessGroup() throws -> String {
        guard let path = Bundle.main.path(forResource: "sample_keychain_access", ofType: "entitlements") else {
            print("Entitlements file path not found.")
            throw KeyChainAccessError.accessGroupNotFound
        }

        print("Entitlements file path: \(path)")

        guard let dict = NSDictionary(contentsOfFile: path) as? [String: Any] else {
            print("Failed to read contents of the entitlements file.")
            throw KeyChainAccessError.accessGroupNotFound
        }

        print("Entitlements contents: \(dict)")

        guard let accessGroups = dict["keychain-access-groups"] as? [String],
              let accessGroup = accessGroups.first else {
            print("No access groups found.")
            throw KeyChainAccessError.accessGroupNotFound
        }

        return accessGroup
    }
}
```

### **Dynamic Prefix for App Identifier**
In the example below, **Item 1** provides explicit app identifier prefixes, minimizing risks, while **Item 2** leads to ambiguity. It is recommended that you follow **Item 1** to  avoid the error. 
![Dynamic Prefix](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ipafiledynamicprefix.png)


Using a flexible approach to access group verification like retrieving the Team ID programmatically and applying a wildcard format, the app can be made compatible with Testsigma's resigning process. This approach reduces errors like `OSStatus error -34018` and ensures a smoother testing experience across various environments.


---