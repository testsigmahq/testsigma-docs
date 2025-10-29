---
title: "How do I Configure Proxy Settings for the Testsigma Agent?"
metadesc: "Step-by-step guide to setting up proxy support in the Testsigma Agent. Fix connectivity issues behind corporate networks and inspection tools."
noindex: false
order: 11.97
page_id: "configure-proxy-settings-testsigma-agent"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Configure nonProxyHosts"
  url: "#steps-to-configure-nonproxyhosts"
- type: link
  name: "Additional Proxy Properties Support"
  url: "#additional-proxy-properties-support"
---

---

In some environments, the Local Agent must connect through a proxy for most URLs but bypass the proxy for specific internal or trusted domains (for example: testsigma.com, AWS endpoints, internal company apps, etc.). In such cases, you can configure hostname/domain patterns in the nonProxyHosts property. 

Any URL that matches the **nonProxyHosts** patterns will connect directly, while all other traffic will use the proxy.

---

## **Steps to Configure nonProxyHosts**

1. Open the **TestsigmaAgent** installation directory.

2. Navigate to **agent_data** and open **args.yml** file.

3. Add or update the following properties with approved domains:
   
```bash
http.nonProxyHosts: "localhost|127.0.0.1|*.testsigma.com|*.amazonaws.com|<internal-domain-1>|<internal-domain-2>"
https.nonProxyHosts: "localhost|127.0.0.1|*.testsigma.com|*.amazonaws.com|<internal-domain-1>|<internal-domain-2>"
```

<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Proxy_Setting_for_Agent.png" alt="Proxy Settings for Agent" style="width: 700px;" />

         
[[info | **NOTE**:]]
| You can add multiple domains separated by **|** (pipe).

4. Save the file and restart the Local Agent.

---

## **Additional Proxy Properties Support**

The following Java system properties are supported for configuring proxy settings for Agents and Cloud executions:

| Property Name             | Description                                      |
|--------------------------|--------------------------------------------------|
| http.proxyHost           | Host address of the HTTP proxy server            |
| http.proxyPort           | Port number of the HTTP proxy server             |
| http.proxyUser           | Username for HTTP proxy authentication           |
| http.proxyPassword       | Password for HTTP proxy authentication           |
| https.proxyHost          | Host address of the HTTPS proxy server           |
| https.proxyPort          | Port number of the HTTPS proxy server            |
| https.proxyUser          | Username for HTTPS proxy authentication          |
| https.proxyPassword      | Password for HTTPS proxy authentication          |
| http.nonProxyHosts       | Hosts that bypass the HTTP proxy                 |
| https.nonProxyHosts      | Hosts that bypass the HTTPS proxy                |
| java.net.useSystemProxies| Enables OS-configured proxy settings             |

### **Example Configuration:**

```bash
http.proxyHost: 'proxy.example.com'
http.proxyPort: '8080'
http.proxyUser: 'username'
http.proxyPassword: 'password'

https.proxyHost: 'proxy.example.com'
https.proxyPort: '8080'
https.proxyUser: 'username'
https.proxyPassword: 'password'

http.nonProxyHosts: 'localhost|127.0.0.1|*.example.com'
https.nonProxyHosts: 'localhost|127.0.0.1|*.example.com'

java.net.useSystemProxies: true
```

[[info | **NOTE**:]]
| Replace **example.com** with your internal domain if specific proxies must be bypassed.


---