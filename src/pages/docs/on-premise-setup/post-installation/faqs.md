---
title: "On-Premise: FAQs"
order: 26.32
page_id: "On-premise setup FAQs"
metadesc: "Learn what are the frequently asked questions if you're opting for Testsigma on-premise installation | FAQs about Testsigma on-premise specifications and installation "
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Software, Hardware, and other Requirements"
  url: "#software-hardware-and-other-requirements"
---

---

**1. Why are so many ports required for Testsigma, and what are they used for?** <br>
**Ans:** Testsigma uses multiple ports to support different micro-services running as Docker containers. Each port is dedicated to a specific micro-service that handles different aspects of the Testsigma application. Refer to the ports list and service used in the port below:
- 3306: Used by MySQL (though Testsigma uses port 3307 internally)
- 7010: Used by Visual Testing Server
- 8080: Used by App Server
- 8082: Used by Addon Server
- 8084: Used by ID Server
- 9090: Used by Audit Server
- 9095: Used by ID Server
- 9096: Used by App Server
- 9097: Used by Addon Server
- 4200: Not listed in Testsigma documentation
- 4201: Used by Addon Server UI
- 4203: Used by ID Server UI
- 4210: Not listed in Testsigma documentation
- 4211: Used by Groot UI
- 4220: Not listed in Testsigma documentation
- 4230: Used by Audit UI

---

**2. What are the system requirements and recommendations for installing Testsigma?** <br>
**Ans:** <br>
**1. Operating System Recommendations:**
- **Preferred OS:** Ubuntu or RHEL 9.x

[[info | **NOTE**:]]
| If not using Ubuntu, RHEL 9.x is recommended. RHEL 8 is also supported. Refer to the [Docker installation guide](https://docs.docker.com/engine/install/rhel/) for RHEL for detailed instructions.

**2. Machine Specifications:**
- CPU: 16 Core
- RAM: 64 GB or more
- Storage:
    - Option 1: 512GB - 2TB Single Storage
    - Option 2: 256GB for OS + 1TB or larger mounted disk

[[info | **NOTE**:]]
| Scheduled image backups are recommended for both storage options.

**3. Database Specifications:**
- **CPU**: 4 Core
- **RAM**: 32 GB
- **RDBS**: MySQL
- **Version**: 8.0.x

Note: Testsigma provides a MySQL Docker container. If opting for a hosted MySQL, ensure it meets the above specifications.

- **Additional Notes**:
    - For accurate storage & memory needs, consult with the vendor to confirm the memory and number of vCPUs.


For more information, refer to [Prerequisites & Machine Configurations](https://testsigma.com/docs/on-premise-setup/pre-installation/prerequisites-and-machine-configurations/).

---