---
title: "Generate API Key"
pagetitle: "Generating API Key: Steps to Access Testsigma Programmatically"
metadesc: "Learn how to generate your API key in Testsigma to access and control Testsigma programmatically. Follow these simple steps for smooth integration and automation."
noindex: false
order: 19.1
page_id: "Generate API Key"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Generate API Key"
  url: "#steps-to-generate-api-key"
---

---

You can access and control it programmatically once you generate the API key. Testsigma will authenticate the connection and integrate with any 3rd party tool (for CI/CD, bug reporting, and so on). This document will guide you through generating the necessary API keys.

---

## **Steps to Generate API Key**

Follow the below steps to generate an API key in Testsigma:

1. Navigate to **Settings** > **API Keys** in the left-side navbar.
![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/configuration/update_apikeys_1.png)

2. Click the **Generate new API Key** button in the top right corner of the screen on the **API Keys** page, and a **Generate API Key** pop-up overlay will appear.
![Generate API Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/configuration/update_apikeys_2.png)

3. In the **Generate API Key** dialog, enter a **Name** for your API key and define the number of parallel test executions. You can also use the toggle to restrict parallel execution for this key.
![Name](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/configuration/update_apikeys_3.png)

4. Select the desired validity period for the API key under **Expiration**.
![Expiration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/configuration/update_apikeys_4.png)

5. After entering a name and configuring parallel settings, click the **Generate Key** button. The API key will be automatically copied to your clipboard so you can easily use it in your applications or scripts. 
![Generate API Key](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/configuration/update_apikeys_5.png)

[[info | **NOTE**:]]
| Only users with **Admin** or **Super Admin** roles can generate API keys in Testsigma.

---