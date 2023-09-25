---
title: "Bypass the Missing SSL Certificate Error?"
page_title: "Bypass the missing SSL certificate error"
metadesc: "How to bypass the missing SSL certificate error while automating browser tests using Testsigma"
noindex: false
order: 9.83
page_id: "How to bypass the missing SSL certificate error?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Applying Desired Capabilities"
  url: "#applying-desired-capabilities"
- type: link
  name: "Bypassing Manually"
  url: "#bypassing-manually"  
---

---

During the active development of a website, the dev environment might not always have an SSL certificate. It is okay to ignore this error and bypass the issue temporarily during test execution since the application is not used in production and the application data is not relevant.

---

## **Prerequisites**
- You should be familiar with the usage of Desired Capabilities in Testsigma. For more information, refer to [desired capabilities](https://testsigma.com/docs/desired-capabilities/overview/).

---

## **Applying Desired Capabilities**
In this case, we can use Desired Capabilities to bypass certificate errors. Here are the few desired capabilities for the specific browsers to overcome certificate errors:

|Browser|Capability Name(Key)|Format|Value|
|:-----|:-------|:-------|:-------|
|**Google Chrome**|**acceptInsecureCerts**|**Boolean**|**True**|
|**Mozilla Firefox**|**accept_untrusted_certs**|**Boolean**|**True**|
|**IE and Safari**|**capabilityType.ACCEPT_SSL_CERTS**|**Boolean**|**True**|

The image below shows how to add desired capabilities for the Chrome browser in a Test Plan Run in Testsigma.
![Bypass SSL Capability](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dcbypass.png)

---

## **Bypassing Manually**
1. Navigate to the SSL issue website and click on **Advanced**. 
![Not Private Error](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ssl1.png)
   
3. Click on **Proceed to < website-url > (unsafe)** link
![Not Private Error Advanced](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ssl2.png)

You will be directed to the original website.

---
