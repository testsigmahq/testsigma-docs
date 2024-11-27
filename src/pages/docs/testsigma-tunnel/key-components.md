---
title: "Key Components & System Requirements"
metadesc: "Ensure seamless connection of Testsigma tunnel by understanding these key components and system requirements for testing locally hosted applications."
noindex: false
order: 32.2
page_id: "Testsigma Tunnel: Key Components"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Key Components"
  url: "#key-components"
- type: link
  name: "System Requirements"
  url: "#system-requirements"
---
---

Before establishing a Testsigma Tunnel connection, understand the key components of Testsigma Tunnel Architecture and the system requirements to setup correctly. This helps ensure a seamless and secure connection for testing locally hosted applications.

---

## **Key Components**

There are five key components in the Testsigma Tunnel architecture:

![Tunnel Architecture](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TS_Tunnel_Arch.png)

**1. Testsigma Tunnel Client**
- The Testsigma Tunnel Client is a distributed binary that must be installed on the machine where you have access to locally hosted websites or applications.
- The tunnel application uses the provided key to authenticate with the Authentication Server when started.

**2. Authentication Server**
- The Authentication Server processes authentication requests from the Testsigma Tunnel Client.
- After successful authentication, it assigns a Tunnel Connect Server for testing.

**3. Testsigma Tunnel Server**
- The Testsigma Tunnel Server is a virtual machine (VM) or container running in the Testsigma data centers.
- It includes an HTTP/TCP proxy, which forwards requests from REST API executors or automation test case executors.
- The server hosts a TCP server that the Testsigma Tunnel Client uses to establish a tunnel.

**4. REST API Client/Browser (Automation Environment)**
- The REST API client or browser running automation uses the Testsigma Tunnel Server as a proxy to forward all requests to the Testsigma Tunnel Client.

**5. Remote Address**
- The remote address refers to the server URL, which could be localhost, a privately hosted site, or public websites.
- The Testsigma Tunnel Client establishes a bidirectional tunnel between the Testsigma application and the remote address.


---


## **System Requirements**

To use Testsigma Tunnel, your system must meet the following requirements:

**1. Operating System Requirements**

- **Windows:** XP or later

- **macOS:** 10.10 or later

- **Linux:** Ubuntu 12.04 or later

**2. Hardware Requirements**

- **CPU:** x64 architecture, ARM (32-bit and 64-bit) supported

- **RAM:** 2 GB or more recommended

- **Disk Space:** 100 MB free space for installation (500MB free space recommended)

**3. Network Requirements:**

- Ensure that you have a stable internet connection for tunnel communication.

**4. Firewall/Proxy Requirements:**

- Ensure that no firewall or security system restricts the Testsigma Tunnel Client's outbound network traffic.

---