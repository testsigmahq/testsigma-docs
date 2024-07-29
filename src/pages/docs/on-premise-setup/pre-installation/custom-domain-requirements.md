---
title: "Custom Domain Requirements"
order: 26.13
page_id: "On-premise setup prerequisites"
metadesc: "This detailed guide will help you understand the required services and url details for creating custom domains  | Know these details before configuring custom domains"
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Required Services and URL Details"
  url: "#required-services-and-url-details"
---

---

To set up custom domains, Testsigma requires URL details for the following services and the corresponding SSL certificates (.crt). This article discusses the requirements to generate custom domains.

---


## **Required Services and URL Details**

The URL details are required for the following services:
- **Identity Service:** id-testsigma.&lt;customer-test-domain&gt;
- **App Service:** app-testsigma.&lt;customer-test-domain&gt;
- **Kibbutz/addon Service:** kibbutz-testsigma.&lt;customer-test-domain&gt;
- **Visual Service:** visual-testsigma.&lt;customer-test-domain&gt;
- **Audit Service:** audit-testsigma.&lt;customer-test-domain&gt;
- **Mobile Recorder Service:** mobilerecorder-testsigma.&lt;customer-test-domain&gt;


### **For Example:**
If the **&lt;customer-test-domain&gt;** is **lowcode.com**, then the certificates will be required for the wildcard domain or the individual sub-domains as follows:
- id-testsigma.lowcode.com
- app-testsigma.lowcode.com
- kibbutz-testsigma.lowcode.com
- visual-testsigma.lowcode.com
- audit-testsigma.lowcode.com
- mobilerecorder-testsigma.lowcode.com


[[info | **NOTE**:]]
| Do not share the **SSL Certificates key (.key)** files with any parties of the Testsigma team, as Testsigma will not ask for these at any point.


---