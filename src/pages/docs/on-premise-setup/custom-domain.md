---
title: "Configure Custom Domains"
order: 26.7
page_id: "Configure Custom Domains"
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

Configuring custom domains for Docker setup ensures data security, builds user trust, improves SEO rankings, and presents a professional and branded image to your customers. In this article, we will discuss the steps to configure custom domains.

---

## **Steps to Configure Custom Domains**



1. By default, builds are generated with ***.testsigmaprivate.com** ssl certs embedded. If you want to use your own domain (**Ex:** automation.customdomain.com), you must procure certificates for ***.customdomain.com** or the following subdomains.
    - automation.customdomain.com
    - automation-id.customdomain.com
    - automation-addon.customdomain.com
    - automation-visual.customdomain.com


[[info | **NOTE**:]]
| Subdomains can be configurable, but the customer has to let us know the subdomains, so that we build docker images accordingly.


2. Create a new folder in the server where the docker instance is running and navigate to it.

```
mkdir  ssl_config
cd ssl_config
```

<br>

3. Create a sub-folder named certificates  under the ```ssl_config``` folder. Copy your certificate **(*.crt)** and key **(*.key)** files to the certificates folder.


4. Copy ***ssl.conf*** file from here ([ssl.conf](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/SSL.txt)) and place it under ***ssl_config*** folder, and change the replace the URLs, SSL certificate paths accordingly for all VirtualHost entries.




5. Example below shows a VirtualHost entry for **automation.customdomain.com**.
    - If your URL is **automation.example.com**. You need to replace all occurrences of **automation.customdomain.com** with **automation.example.com**.
    - Change the **SSLCertificateFile** and **SSLCertificateKeyFile** names (Do not change the directory structure, only file name has to be changed). The directory structure is referenced in *docker-compose.yml*.

```
<VirtualHost *:443>
    DocumentRoot "/usr/local/apache2/htdocs"
    ServerName automation.customdomain.com
    ServerAlias www.automation.customdomain.com
    ServerAdmin admin@testsigma.com
    SSLCertificateFile "/usr/local/apache2/ssl/<CRT_FILE>.crt"
    SSLCertificateKeyFile "/usr/local/apache2/ssl/<CERT>.key"
    
    RewriteEngine On

    # App server configuration

    RewriteCond %{HTTP_HOST} "automation.customdomain.com"
    RewriteCond %{REQUEST_URI} "^/$"
    RewriteRule .* https://automation.customdomain.com/ui/ [L,R=301]
```

<br>

6. In docker-compose.yml file, scroll to ***load_balancer*** entry and add the volumes for ***ssl.conf*** and certificates.


In the Below example, &lt;DIRECTORY\_PATH&gt; should be replaced with the ***ssl_config*** directory path.


```
# Global HTTPD Server
  testsigma_load_balancer:
    container_name: testsigma-load-balancer
    image: testsigmainc/onprem:load-balancer-<company>-india-v351_3
    ports:
      - "443:443"
    networks:
      - testsigma-network
    volumes:
      - ./data/ts_load_balancer_data:/opt/app/ts_load_balancer_data
      - <DIRECTORY_PATH>/ssl.conf:/usr/local/apache2/conf.d/ssl.conf
      - <DIRECTORY_PATH>/certs:/usr/local/apache2/ssl
```

<br>

7. Once all above changes are done, we can start the ```docker-compose```.

---