---
title: "Access Locally Hosted Applications"
metadesc: "When Testsigma servers are unable to access your locally hosted applications, you need to whitelist Testsigma IP addresses or access through secure Tunnel/VPN"
noindex: false
order: 9.51
page_id: "Access Locally Hosted Applications"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Whitelisting Testsigma IP Addresses"
  url: "#whitelisting-testsigma-ip-addresses"
- type: link
  name: "Secure Tunnel/VPN"
  url: "#secure-tunnelvpn"
---

---


Testsigma’s access to applications deployed on your local machine/network is limited for security reasons. As a result, there may be times when Testsigma servers are unable to access your locally hosted applications. To prevent this, try one of the methods below.



---

## **Whitelisting Testsigma IP Addresses**

Whitelisting of Testsigma IP addresses is necessary to ensure that the Testsigma servers and lab environments can securely interact with your applications and systems for testing activities. It's a security practice to prevent unauthorized access, and only trusted and verified computers or networks can connect to and interact with the Testsigma environment. This article discusses the whitelisting of Testsigma IPs. 



### **Testsigma IP Addresses**

Login to https://app.testsigma.com and go to **Settings > Testsigma IP** info to see the IP range to whitelist.

![Testsigma IPs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ipwhitelisting.png)

- **Testsigma Server IP:** Whitelisting this IP will allow you to access the Testsigma server where the testing activities are hosted.
- **Testsigma Lab IPs:** Whitelisting these IP ranges will allow you to access Testsigma Labs, where test executions happen.



### **How to Whitelist Testsigma IPs?**

The whitelisting process involves adding Testsigma IP addresses to a list of allowed IPs in your organization's firewall or network security settings. This will ensure that traffic from these IPs will be allowed through the network's security barriers. 

Connect with your *Network Administrator* or *Infosec Team* to whitelist the necessary Testsigma IP addresses.

For more information, see [Guide to IP Whitelisting](https://www.linkedin.com/pulse/ip-whitelisting-definitive-guide-joshua-oyelalu-2knjf/).


---

## **Secure Tunnel/VPN**

Contact support **support@testsigma.com** to learn more about this. Our team will set up this for you.


---