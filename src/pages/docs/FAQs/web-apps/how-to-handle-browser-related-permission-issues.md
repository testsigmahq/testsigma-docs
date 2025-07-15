---
title: "How to Handle Browser-Related Permission Issues?"
metadesc: "Fix browser permission issues by setting a specific desired capability. This article shows how to resolve permission problems through configuration.."
order: 24.19
page_id: "how-to-handle-browser-related-permission-issues?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve Permission Issues"
  url: "#steps-to-resolve-permission-issues"

---

---

If you encounter browser-related permission issues during execution in Testsigma, you can resolve them by configuring specific desired capabilities. This article discusses configuring the desired capabilities to address such permission issues.

---

## **Steps to Resolve Permission Issues**

1. From the left navigation bar, go to **Create Tests** and click **Test Cases**.

2. In the **Test Case Explorer** section, expand the required **Feature** and **Scenario** and select the required test case.

3. In the **Test Case Details** page, click **Run**.

4. In the **Ad-Hoc Run** overlay, expand the **Desired Capabilities** field and specify the following desired capability.
   ![desired capability](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Permission_issue_4.1.png)

### **For Firefox**

Use the following desired capabilities to configure site permissions for Microphone, Camera, Location, and Notifications in **Firefox**.

#### **Microphone:**

  | **Name** | **Data Type** | **Value** |
  | ------------- | ------------- | ------------- |
  | firefoxprofile | string | {"permissions.default.microphone": 1} |

#### **Camera:**

  | **Name** | **Data Type** | **Value** |
  | ------------- | ------------- | ------------- |
  | firefoxprofile | string | {"permissions.default.camera": 1} |

#### **Location:**

  | **Name** | **Data Type** | **Value** |
  | ------------- | ------------- | ------------- |
  | firefoxprofile | string | {"permissions.default.geo": 1} |

#### **Notifications:**

  | **Name** | **Data Type** | **Value** |
  | ------------- | ------------- | ------------- |
  | firefoxprofile | string | {"permissions.default.desktop-notification": 1} |

[[info | NOTE:]]
| - You can always change the value as needed:
|    - 0 - Ask Always
|    - 1 - Allow
|    - 2 - Block
| - All values are in JSON format. 
| - To add multiple values, separate them with a comma (,).

### **For Chrome**

Use the following desired capabilities to configure site permissions for Microphone, Camera, Location, Notifications, and Clipboard in **Chrome**.

#### **Microphone:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| goog:chromeOptions | string | {"prefs":{"profile.default\_content\_setting\_values.media\_stream\_camera": 2}} |


#### **Camera:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| goog:chromeOptions | string | {"prefs":{"profile.default\_content\_setting\_values.media\_stream\_camera": 2}} |

#### **Location:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| goog:chromeOptions | string | {"prefs": {"profile.default\_content\_setting\_values.geolocation": 1}} |

#### **Notifications:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| goog:chromeOptions | string | {"prefs": {"profile.default\_content\_setting\_values.notifications":1}} |

#### **Clipboard:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| goog:chromeOptions | string | {"prefs": {"profile.default\_content\_setting\_values.clipboard":1}} |

[[info | NOTE:]]
| - You can always change the value as needed:
|    - 0 - Ask Always
|    - 1 - Allow
|    - 2 - Block
| - All values are in JSON format. 
| - To add multiple values, separate them with a comma (,).

### **For Edge**

Use the following desired capabilities to configure site permissions for Microphone, Camera, Location, Notifications, and Clipboard in **Edge**.

#### **Microphone:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| MsOptions | string | {"prefs": {"profile.default\_content\_setting\_values.media\_stream\_mic": 2}} | 

#### **Camera:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| MsOptions | string | {"prefs":{"profile.default\_content\_setting\_values.media\_stream\_camera": 2}} |

#### **Location:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| MsOptions | string | {"prefs": {"profile.default\_content\_setting\_values.geolocation": 1}} |

#### **Notifications:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| MsOptions | string | {"prefs": {"profile.default\_content\_setting\_values.notifications":1}} |

#### **Clipboard:**

| **Name** | **Data Type** | **Value** |
| ------------- | ------------- | ------------- |
| MsOptions | string | {"prefs": {"profile.default\_content\_setting\_values.clipboard":1}} |

[[info | NOTE:]]
| - You can always change the value as needed:
|    - 0 - Ask Always
|    - 1 - Allow
|    - 2 - Block
| - All values are in JSON format. 
| - To add multiple values, separate them with a comma (,).

---