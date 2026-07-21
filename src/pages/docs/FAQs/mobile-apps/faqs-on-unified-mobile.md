---
title: "FAQs on Unified Mobile"
metadesc: "Answers to common questions about Unified Mobile testing: running one test case on both Android and iOS, the engine it uses, and cross-platform auto-healing."
noindex: false
order: 25.28
page_id: "faqs-on-unified-mobile"
search_keyword: ""
warning: false
---

---

Following are some frequently asked questions about testing with Unified Mobile. Testing native apps across Android and iOS usually means authoring and maintaining two separate sets of test cases for the same scenarios. Unified Mobile removes this duplication by letting you author a single test case that runs on both platforms, using per-platform locators and auto-healing to handle UI differences. Use this guide to find answers about how Unified Mobile works, which engine it runs on, and its current limitations.

---

### **1. Can I test both Android and iOS with a single test case?**
**Ans:** Yes. Create a Unified application and author one test case. Testsigma runs the same test case on both Android and iOS.

---

### **2. Which execution engine does Unified Mobile use?**
**Ans:** Unified Mobile runs on the Modern engine only. It is not available on Classic.

--- 

### **3. How does Testsigma handle elements that differ between Android and iOS?**
**Ans:** Each element stores a separate Android and iOS locator, and Testsigma uses the one that matches the device under test. When a locator differs at runtime, Testsigma auto-heals it so the single test case runs on both platforms.

---

### **4. Do I need to install anything to record a Unified test case?**
**Ans:** No. Recording and execution run on the Testsigma cloud Test Lab.

---

### **5. Can I convert an existing Android or iOS application to Unified?**
**Ans:** No. The application type and engine are set when you create the application and cannot be changed. Create a new Unified application to test both platforms with one test case.

---
