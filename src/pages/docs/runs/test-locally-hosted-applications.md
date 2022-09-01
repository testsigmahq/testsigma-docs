---
title: "Access Locally Hosted Applications"
metadesc: "How to access the locally hosted applications."
noindex: false
order: 9.51
page_id: "Access Locally Hosted Applications"
warning: false
---

---


Testsigma’s access to applications deployed on your local machine/network is limited for security reasons. As a result, there may be times when Testsigma servers are unable to access your locally hosted applications. To prevent this, try one of the methods below.

---
##IP Whitelisting
In development/QA environments, it is common to keep your application hosted on servers with restricted Access from Unknown Sources.  One of the ways you can use Testsigma Labs to execute tests is by whitelisting Testsigma IP Addresses on your server.

Testsigma Labs has reserved the following IP blocks for our services. Please whitelist these IP addresses to allow traffic in a restricted network setting.

Login to https://app.testsigma.com and go to Settings > About to see the IP range to whitelist

![about Testsigma](https://docs.testsigma.com/images/test-locally-hosted-applications/about-testsigma.png)

---
##Hybrid Execution

Hybrid Executions are local executions that use your local machines to run the tests instead of devices available on the cloud. To perform this, you need to install the 'Testsigma Agent'. 

The Testsigma Agent connects the Testsigma server to your local machine. Learn more about [Testsigma Agent](https://testsigma.com/docs/agent/overview/).


---
##Secure Tunnel/VPN

Contact support **[(support@testsigma.com)](mailto:support@testsigma.com)** to learn more about this. Our team will set up this for you.
