---
title: "How to bypass the missing SSL certificate error?"
page_title: "Bypass the missing SSL certificate error"
metadesc: "How to bypass the missing SSL certificate error while automating browser tests using Testsigma"
order: 9.83
page_id: "How to bypass the missing SSL certificate error?"
warning: false
---

---
During the active development of a website, the dev environment might not always have an SSL certificate. It is okay to ignore this error and bypass the issue temporarily during Test Execution since the Application is not used in Production and the Application data is not relevant.

We assume that you are already familiar with the usage of Desired Capabilities in Testsigma. If not, see [Desired Capabilities - Overview](https://testsigma.com/docs/desired-capabilities/overview/)
Bypassing an SSL certificate can be done in two ways in Testsigma:

1. Applying Desired Capabilities
 
2. Bypassing manually
   
&emsp;

### 1. Applying Desired Capabilities
In this case, we can use Desired Capabilities to bypass certificate errors. Here are the few desired capabilities for the specific browsers to overcome certificate errors:

|Browser|Capability Name(Key)|Format|Value|
|:-----|:-------|:-------|:-------|
|**Google Chrome**|**acceptInsecureCerts**|**Boolean**|**True**|
|**Mozilla Firefox**|**accept_untrusted_certs**|**Boolean**|**True**|
|**IE and Safari**|**capabilityType.ACCEPT_SSL_CERTS**|**Boolean**|**True**|

The image below shows how to add desired capabilities for the Chrome browser in a Test Plan Run in Testsigma.

![Test Plan Desired Bypass SSL Capability](https://docs.testsigma.com/images/configure-bypass-ssl/create-test-plan-bypass-ssl-desired-caps.png)

&emsp;

### 2. Bypassing Manually
We can also bypass the certificate error by doing the below steps:

1. Navigate to the SSL Issue Website.

![Google Chrome Connection not private Error](https://docs.testsigma.com/images/configure-bypass-ssl/google-chrome-connection-notprivate-error-page.png)

2. On the error page, click on the **Advanced** button
   
3. Click on **Proceed to < website-url > (unsafe)** link

![Google Chrome Connection not private Error Advanced](https://docs.testsigma.com/images/configure-bypass-ssl/google-chrome-connection-notprivate-error-advanced-page.png)

By clicking on “Proceed to self-signed.badssl.com (unsafe)” you will be directed to the original website.

If the first method(desired capabilities) don’t work, we can automate the above steps using Testsigma to bypass the SSL Error page.
