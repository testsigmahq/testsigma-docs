---
title: "FAQs on Classic & Modern Engines"
metadesc: "Answers to common questions about Testsigma's Classic and Modern execution engines: how they differ, the permanent per-application choice, and add-on compatibility."
noindex: false
order: 25.45
page_id: "faqs-on-classic-and-modern-engines"
search_keyword: ""
warning: false
---

---

Following are some frequently asked questions about Testsigma's Classic and Modern execution engines. The engine you choose when creating an application determines how your tests run, which add-ons you can use, and which features are available to you. Use this guide to find answers about how the two engines differ, when to pick one over the other, and what stays the same for your existing applications.

---

### **1. Can I change the execution engine after creating an application?**
**Ans:** No. You select the engine when you create an application, and the selection is permanent. To use a different engine, create a new application. Your existing tests remain unchanged.

---

### **2. Why can't I select the execution engine?**
**Ans:** The engine selection appears only when an application type supports more than one engine and engine selection is enabled for your account. When it does not appear, Testsigma applies the default engine for that application type.

---

### **3. Is the Classic execution engine being discontinued?**
**Ans:** No. Classic and Modern run side by side, and Classic has no planned end date. Some application types run on Classic only.

---

### **4. What do I gain by using the Modern engine?**
**Ans:** Modern waits automatically for elements and page state before interacting with them, which reduces timing-related test failures. It also handles Shadow DOM and web components more natively than Classic.

---

### **5. Does the execution engine change how I author tests?**
**Ans:** No. The low-code editor, recorder, and AI-assisted generation work the same on both engines. The engine affects execution only, not authoring.

---

### **6. Do my Classic add-ons work on the Modern engine?**
**Ans:** No. Classic add-ons are written in Java and Modern add-ons in TypeScript, and the two are not interchangeable. Moving an add-on to Modern means rebuilding it in TypeScript.

---

### **7. Can I use different engines in the same account?**
**Ans:** Yes. Each application has its own engine, so Classic and Modern applications can run side by side. The choice is permanent per application, not per account.

---

### **8. Is the Modern engine a beta?**
**Ans:** No. Modern is a production engine. Its coverage is still expanding across application types, which is why some types run on Classic today.

---

### **9. Is AI Step available on the Modern engine?**
**Ans:** AI Step is not currently available on the Modern engine. It is available on Classic. The rest of the authoring experience works the same on both engines. If your tests need AI Step today, use a Classic engine.

---

### **10. Can I use loop or conditional add-ons on the Modern engine?**
**Ans:** Custom add-ons for loop and conditional steps are supported on the Classic engine but are not currently available on Modern. If your tests rely on these add-ons, use a Classic engine.

---