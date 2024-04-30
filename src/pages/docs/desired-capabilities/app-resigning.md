---
title: "Enable App Resigning in iOS"
page_title: "Enable app resigning"
metadesc: "Learn how to set a desired capability to re-sign the app with the uploaded provisioning profile to install your app on the device during test execution"
noindex: false
order: 15.94
page_id: "How to enable app resigning"
search_keyword: ""
warning: false
---

---

If you set **ResignEnabled** desiried capability as ***true*** then Testsigma will re-sign the app with the uploaded provisioning profile to install your app on the device during test execution.

[[info | **NOTE**:]]
|This process will result in the deletion of entitlements in your iOS app.

However, if your app is already signed with ***Apple developer enterprise program***, you can disable this behavior by setting **ResignEnabled** desiried capability as ***false***.

|Key|Description|
|---|---|
|*resignApp*|1. By default, if this capability is not passed, your app will be re-signed.<br>2. You can call ***resignApp=false*** to prevent your iOS app from being re-signed.|

---