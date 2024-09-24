---
title: "On-Premise Installation Steps"
order: 26.21
page_id: "On-premise setup"
metadesc: "Learn how to setup Testsigma On-premise using docker compose file | Steps to Deploy Docker Compose File for Testsigma's on-prem setup"
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Deploy Docker Compose File"
  url: "#steps-to-deploy-docker-compose-file"
- type: link
  name: "Accessing Application"
  url: "#accessing-application"
- type: link
  name: "To Stop and Remove the Containers"
  url: "#to-stop-and-remove-the-containers"
- type: link
  name: "Containers Defined in the Docker Compose File"
  url: "#containers-defined-in-the-docker-compose-file"

---

---

You'll receive ***docker-compose.yml*** files based on your requested configuration from Testsigma that specifies the configuration for a multi-container app that contains a MySQL server, a global HTTPD server, a Faktory worker service, and several UI services for various components of the application.

---

## **Steps to Deploy Docker Compose File**

1. Install **Docker** and **Docker Compose** on your system.

2. Open the **Terminal** and navigate to the directory where the **docker-compose.yml** file is located.

3. Run the command ***docker-compose up***  to start the containers defined in the **docker-compose.yml** file given by Testsigma. This will start all the services in the background and keep them running even if you close the terminal window.


---

## **Accessing Application**

Along with the given docker-compose files you will receive a list of URLs for accessing the application.

**Example:** <br>
- **<company\_name>-addon.testsigmaprivate.com** 
- **<company\_name>-addon.testsigmaprivate.com** 
- **<company\_name>-testsigmaprivate.com**
- **<company\_name>-visualtesting.testsigmaprivate.com**

You will have to add the mapping in the ‘hosts’ file.

Once the application is up and running, you can access it using the IP address of your on-premise server and the port number specified in your docker-compose file.

> For Example, the sample **docker-compose.yml** file mentions that the web service is accessible on port 80. You can access it by navigating to **http://&lt;server-ip&gt;80** in your web browser.

---


## **To Stop and Remove the Containers**
To stop and remove the containers, you can run the command ***docker-compose down***.  This command will stop and remove all the containers and networks created by the **docker-compose.yml** file.

---


## **Containers Defined in the Docker Compose File**

- The MySQL server is named **testsigma\_mysql** and uses the image, **testsigmainc/onprem:mysql-&lt;companyName&gt;-trial-&lt;Version&gt;**. It has a volume mounted to persist data. (Users can also  set up their own mysql server and map it in the docker-compose file. For more information on connecting to external/existing MySQL database, refer to [connecting to external MySQL.](https://testsigma.com/docs/open-source-docs/docker/#connecting-to-external-mysql))
- The Faktory worker service is named as testsigma_worker and it uses the image,  **testsigmainc/onprem:worker-&lt;companyName&gt;-trial-&lt;Version&gt;**.
- The global HTTPD server is named **testsigma\_load\_balancer** and uses the **testsigmainc/onprem:load-balancer-&lt;companyName&gt;-trial-&lt;Version&gt;** image. It has few environment variables specified for the various components of the application it serves. It will also have a volume mounted to persist data.

- **By default the environment variables are specified as below:**

    ```
TS_APP_SERVER_PROTOCOL: https
      TS_APP_SERVER_HOST: testsigma-app-server
      TS_APP_SERVER_PORT: 8080
      TS_APP_SERVER_UI_PROTOCOL: http
      TS_APP_SERVER_UI_HOST: testsigma-app-server-ui
      TS_APP_SERVER_UI_PORT: 80
      TS_ID_SERVER_PROTOCOL: https
      TS_ID_SERVER_HOST: testsigma-id-server
      TS_ID_SERVER_PORT: 8084
      TS_ID_SERVER_UI_PROTOCOL: http
      TS_ID_SERVER_UI_HOST: testsigma-id-server-ui
      TS_ID_SERVER_UI_PORT: 80
      TS_MOBILE_INSPECTION_UI_PROTOCOL: http
      TS_MOBILE_INSPECTION_UI_HOST: testsigma-mobile-inspection-ui
      TS_MOBILE_INSPECTION_UI_PORT: 80
      TS_ADDON_SERVER_PROTOCOL: https
      TS_ADDON_SERVER_HOST: testsigma-addon-server
      TS_ADDON_SERVER_PORT: 8082
      TS_ADDON_SERVER_UI_PROTOCOL: http
      TS_ADDON_SERVER_UI_HOST: testsigma-addon-server-ui
      TS_ADDON_SERVER_UI_PORT: 80
   ```

- **The UI services include:** 
    - **testsigma\_id\_server\_ui** for the Identity Server UI, which uses the **testsigmainc/onprem:id-server-ui-&lt;companyName&gt;-trial-&lt;Version&gt;** image.
    - **testsigma\_app\_server\_ui** for the WebApp Server UI, which uses the **testsigmainc/onprem:app-server-ui-&lt;companyName&gt;-trial-&lt;Version&gt;** image.
    - **testsigma\_mobile\_inspection\_ui** for the Groot Server UI, which uses the **testsigmainc/onprem:mobile-inspection-ui-&lt;companyName&gt;-trial-&lt;Version&gt;** image. It has an environment variable defined for a driver action host.
    - **testsigma\_addon\_server\_ui** for the Kibbutz UI, which uses the **testsigmainc/onprem:addon-server-ui-&lt;companyName&gt;-trial-&lt;Version&gt;** image.

- The Visual Testing Server server is named **testsigma\_visual\_testing\_server**. This container is pre-configured with the required software and settings for capturing and comparing screenshots during automated test execution.
- The WebApp server is named **testsigma\_app\_server\_ui**. The container is pre-configured with the necessary software and settings for hosting web applications and capturing screenshots.

[[info | **NOTE**:]]
| All services will connect to a custom network named ***testsigma-network***. Each service will have a health check specified with different intervals, timeouts, and retries, depending on the service.

---
