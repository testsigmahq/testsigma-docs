---
title: "Access Locally Hosted Applications - IP Whitelisting"
metadesc: "How to access the locally hosted applications."
order: 9.36
page_id: "Access Locally Hosted Applications - IP Whitelisting"
warning: false
---

---

Testsigma’s access to applications deployed on your local machine/network is limited for security reasons. As a result, there may be times when Testsigma servers are unable to access your locally hosted applications. To prevent this, try one of the methods below.

### IP Whitelisting 
In development/QA environments, it is common to keep your application hosted on servers with restricted Access from Unknown Sources.  One of the ways you can use Testsigma Labs to execute tests is by whitelisting Testsigma IP Addresses on your server. 

Testsigma Labs has reserved the following IP blocks for our services. Please whitelist these IP addresses to allow traffic in a restricted network setting.

Login to https://app.testsigma.com and go to Settings > About to see the IP range to whitelist

![about Testsigma](https://docs.testsigma.com/images/test-locally-hosted-applications/about-testsigma.png)