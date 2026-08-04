---
title: "Introduction: Testsigma Terminal"
pagetitle: "Testsigma Terminal for Live Editing"
metadesc: "Learn how to debug test cases on local devices using Testsigma Terminal, which enables local Copilot sessions. With Testsigma Terminal, you have complete control over test case execution and debugging."
noindex: false
order: 10.11
page_id: "Testsigma Terminal for Debugging"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "System Requirements"
  url: "#system-requirements"
- type: link
  name: "Getting Started"
  url: "#getting-started"
- type: link
  name: "Getting Help"
  url: "#getting-help"
---

---

Testsigma Terminal provides complete control over test case execution and debugging, allowing you to inspect and modify test steps immediately without requiring a re-run on failure. You can run, repeat, pause (including pause on failure), move forward or backward, edit or add steps, and modify step properties. With real-time adjustments and full control over every step, the debugger ensures precise execution and improves test reliability.

---

## **System Requirements**

Ensure the following requirements are met before installing Testsigma Terminal.

### **1. Hardware and OS Requirements**
   - **Operating system**: Windows 10/11 (64-bit), macOS 12 or later, or Linux (64-bit).
   - **Chip/architecture**: Apple Silicon (M1/M2/M3) or Intel for Mac; x64 for Windows and Linux.
   - **Memory**: 8 GB minimum, 16 GB recommended if the machine also runs IDEs or other resource-heavy applications.
   - **Free disk space**: 20–30 GB (the Terminal downloads the Agent, Chrome for Testing, browser drivers, and Recorder at runtime).
   - **Processor**: Dual-core or higher.
   - The user account has rights to install a desktop application and load a browser extension.

[[info | NOTE:]]
| Each concurrent Terminal/Agent instance on the same machine — such as multiple RDP sessions on one server — consumes its own memory, CPU, and disk, so multiply the requirements above by the number of concurrent instances. On 8 GB Apple Silicon machines, the Terminal can feel sluggish if other heavy applications are open — 16 GB is recommended in that case.

### **2. Local Ports Required**
   The Agent uses the following default local ports. Ports are reconfigurable from **Terminal > Settings > Ports** if a default is already in use.

   | Port | Used for |
   | --- | --- |
   | 8383 | Agent HTTP (loopback) |
   | 8484 | Agent HTTPS |
   | 8585 | Agent control channel |
   | 18329 | Debugger component (only if installed) |

[[info | NOTE:]]
| Each concurrent Terminal/Agent instance needs its own set of these ports. Assign a distinct port block per instance from **Terminal > Settings > Ports** when running multiple instances on the same server.

### **3. Network Allowlist**
   - The domains ***.testsigma.com** and **local.testsigmaagent.com** are allowed through the firewall, proxy, and web filtering.
   - Outbound ports 443 and 80 are open to the Testsigma cloud and asset hosts.
   - The outbound ephemeral port range 10000–65535 isn't blocked (used for live test sessions and device communication).
   - The machine can resolve **local.testsigmaagent.com** to 127.0.0.1.

### **4. Proxy and Certificate Requirements**
   - If traffic goes through a corporate proxy, the no-proxy/bypass list includes **local.testsigmaagent.com**, **localhost**, and **127.0.0.1**. This traffic must stay on the local machine and never route through the proxy.
   - Self-signed or internal corporate SSL certificates used on the test environment are trusted by the machine running the Terminal.
   - If SSL inspection is active (for example, Zscaler, Netskope, Cisco Umbrella, Forcepoint, Blue Coat, Palo Alto, or Fortinet), the Testsigma domains are excluded from inspection, or the inspection root CA (full chain) is added to the Terminal's trust store.

### **5. Endpoint Security and Application Control**
   - Endpoint protection or EDR tools (such as CrowdStrike, SentinelOne, Microsoft Defender ATP, or Carbon Black) allow the Testsigma agent path and its child processes (Node.js, Java, ADB, browser drivers) to run from the user profile (**.testsigma**).
   - Application allow-listing tools (AppLocker, WDAC) allow the agent to run from the user profile, since it doesn't run from **Program Files**.
   - The machine can download and run **.exe**, **.zip**, and **.crx** (extension) files without them being blocked or quarantined.

### **6. Browser Requirements**
   - Browser policy allows installing and enabling extensions, since the Recorder loads as a browser extension.
   - If "load unpacked extensions" is disabled by policy (common for Edge), IT has allowed the Recorder extension ID.

### **7. Connectivity for Non-Public Applications**
   - For an application that isn't publicly reachable, Testsigma Tunnel is set up. IP whitelisting can't reach a locally hosted application, so Tunnel is the only option in that case.
   - IT allows downloading and running the Testsigma Tunnel application.
   - The Tunnel process isn't blocked by antivirus or endpoint security.
   - Outbound connectivity to the Testsigma environment is confirmed.
   - If a proxy is in use, proxy configuration is applied to the Tunnel itself (see Section 4).
   - The Tunnel is added to the execution capabilities after setup, otherwise the run goes to the cloud lab without it.

### **8. Mobile Testing (if applicable)**
   - **Android**: To run test cases on a local physical device or emulator, ADB (Android Debug Bridge) is available on the machine.
   - **iOS**: To run test cases on a local device, a supervision profile may be required.
   - **Cloud devices only**: No local installation is needed if testing exclusively on cloud devices.

### **9. Installation Size**
   - **Download Size**: ~850 MB
   - **Extracted Size**: ~1.5 GB
   - **Download Location**: The ZIP file is automatically deleted after successful extraction.

---

## **Getting Started**

   - **Installing Testsigma Terminal**
   
   - **Editing a Test Case Using Copilot**
   
   - **FAQs on Testsigma Terminal**
   
   - **Troubleshooting Guide for Testsigma Terminal**

---

## **Getting Help**

   - For inquiries or help, reach out to Testsigma support at **support@testsigma.com**.

---