---
title: "Deployment Errors Troubleshooting Guide for Testsigma CE Docker"
page_title: "Guide to Troubleshoot Deployment Errors in Testsigma CE Docker"
metadesc: " How to troubleshoot common deployment issues in Testsigma CE setup using Docker."
order: 23.1
page_id: "Deployment Errors Troubleshooting Guide for Testsigma CE Docker"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Ports Unavailable"
  url: "#ports-unavailable"
- type: link
  name: "Unable to access Testsigma"
  url: "#unable-to-access-testsigma"
- type: link
  name: "Unable to start Docker Desktop"
  url: "#unable-to-start-docker-desktop--windows-"

---
---
You may run into the following issues while setting up Testsigma CE using Docker:

## **Ports Unavailable**

If ports 9090 & 443 are not open, we recommend that you kill all processes on these ports and start again. If the processes on these ports cannot be stopped, you can run Testsigma on another port:

* In the file docker-compose.yml , change the ports for the Nginx container to a custom port.
* Run docker-compose up -d

<br>

To kill a previous version of Testsigma running on these ports, run the following:<br>
* sudo su
* docker container kill $(docker ps -q)

<br>

## **Unable to access Testsigma**

* You may need to wait for up to 3 minutes before accessing the application to allow Nginx to start.
* Try accessing the https://local.testsigmaos.com/ui after 3 minutes.

<br>

## **Unable to start Docker Desktop [ Windows ]**

If the docker instance is failing to start due to issues related to wsl, try executing the following command to install wsl or follow this [link](https://docs.docker.com/desktop/windows/wsl/) for other options.

wsl --install -d ubuntu
