---
title: "Why am I Facing Permission Error During Local Test Execution?"
metadesc: "You may face permission issues during local test runs on real devices. | Learn how to resolve them by enabling the required settings for your device brand."
order: 24.23
page_id: "why-am-i-facing-permission-error-during-local-test-execution-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve Permission Issues"
  url: "#steps-to-resolve-permission-issues"

---

---

When running tests locally on real mobile devices, you might face permission-related issues that prevent tests from executing successfully. These issues usually occur due to certain device-level settings being disabled by default. This article explains how to resolve these issues by enabling the necessary device settings based on your device brand.

<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Local_error_image.png" style="width: 400px;" />

---

## **Steps to Resolve Permission Issues**

Enable the following settings on your device based on its brand:

### **Realme & Oppo**

  - Turn on **Developer Options**.
  - Enable **USB Debugging**.
  - Enable **Disable Permission Monitoring**.

### **OnePlus**

  - Turn on **Developer Options**.
  - Enable **USB Debugging**.
  - Enable **Disable Permission Monitoring**.
  - Configure or disable **Battery Optimization** for the testing app
 
### **Xiaomi**

  - Turn on **Developer Options**.
  - Enable **USB Debugging**.
  - Enable **USB Debugging (Security Settings)**.
  - Disable **MIUI Optimization**.

---