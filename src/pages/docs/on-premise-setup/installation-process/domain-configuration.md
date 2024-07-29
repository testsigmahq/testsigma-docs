---
title: "Custom Domain Configuration"
order: 26.22
page_id: "Custom Domain Configuration"
metadesc: "This article discusses how to configure custom domains for Docker setup. Custom domains ensures data security, builds user trust, improves SEO, and presents a professional image"
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Configure Custom Domains"
  url: "#steps-to-configure-custom-domains"
---

---


Configuring custom domains for Docker setup ensures data security, builds user trust, improves SEO rankings, and presents a professional and branded image to your customers. If you have the custom domain requirements ready, follow the steps in this article to configure custom domains. 

---


## **Steps to Configure Custom Domains** 

1. Request the Docker image with the new domain names from Testgigma using GitHub Actions.

2. Replace the HTTPS certificate in the **testsigma-load-balancer** container. For this, store the public key and private key files on the host machine and specify them as volumes in the **docker-compose file**.

   **For Example:**

   ```yaml
   version: '3.9'
   services:
     testsigma_load_balancer:
       container_name: testsigma-load-balancer
       image: testsigmainc/onprem:load-balancer-<CustomDomain>-trial-v120
       ports:
         - "443:443"
       networks:
         - testsigma-network
       volumes:
         - ./data/ts_load_balancer_data:/opt/app/ts_load_balancer_data
         - /path/to/new/server.crt:/usr/local/apache2/ssl/server.crt
         - /path/to/new/server.key:/usr/local/apache2/ssl/server.key


<br>

- Here, replace ***/path/to/new/server.crt*** with the path to the new ***server.crt*** file on your host machine, and replace ***/path/to/new/server.key*** with the path to the new ***server.key*** file on your host machine.

- When you run ***docker-compose up***, the ***server.crt*** and ***server.key*** files in the container will be replaced with the new files from the host machine.



---