---
title: "Common Android Issues & Proposed Solutions"
page_title: "Common Android Issues & Proposed Solutions"
metadesc: "Learn why accessibility IDs are preferred over other Locators. This article discusses why Accessibility IDs are favored in mobile app development & testing"
noindex: false
order: 23.692
page_id: Common Android Issues & Proposed Solutions
warning: false
---

---

### **1. App Data Reset for Android Native Apps**

**Current Behaviour:** App Data is reset on restarting the App (Using NLP **Close App** and **Launch App**) in the same session.

**Expected Behaviour:** App Data shouldn't be reset on restarting the App (Using NLP **Close App** and **Launch App**) in the same session.

### **Solution:**  
Add the following desired capability in **Test Environment Settings**: 

![Desirec Capability App Data Reset](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dcfadrst.png)

[[info | **NOTE**:]]
| The behaviour is Android platform specific and is non-existent on iOS platform. The reason for the behaviour lies in the difference in the automation capabilities between Android and iOS.


---