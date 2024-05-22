---
title: "Troubleshoot Deployment Errors (Testsigma CE)"
page_title: "Guide to Troubleshoot Deployment Errors in Testsigma CE Docker"
metadesc: "This detailed guide will help you troubleshoot deployment errors in Testsigma CE Docker | Troubleshooting issues while setting up Testsigma CE using Docker."
noindex: false
order: 23.21
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
- type: link
  name: "Checking logs"
  url: "#checking-logs"

---

---

You may run into the following issues while setting up Testsigma CE using Docker:

---

## **Ports Unavailable**

If ports 9090 & 443 are not open, we recommend that you kill all processes on these ports and start again. If the processes on these ports cannot be stopped, you can run Testsigma on another port:

* In the file docker-compose.yml , change the ports for the Nginx container to a custom port.
* Run `docker-compose up -d`

<br>

To kill a previous version of Testsigma running on these ports, run the following:<br>
* `sudo su`
* `docker container kill $(docker ps -q)`

<br>

---

## **Unable to access Testsigma**

* You may need to wait for up to 3 minutes before accessing the application to allow Nginx to start.
* Try accessing the https://local.testsigmaos.com/ui after 3 minutes.

<br>

---

## **Unable to start Docker Desktop [ Windows ]**

If the docker instance is failing to start due to issues related to wsl, try executing the following command to install wsl or follow this [link](https://docs.docker.com/desktop/windows/wsl/) for other options.

```wsl --install -d ubuntu```

---

## **Checking Logs**

If you notice any issues and would like to help us with the debugging by sharing the logs, please use the below command to copy the logs folder to Downloads folder of users home directory and share it with us to investigate.

### Mac/Linix:
  1. Run the command 
     ```
     docker cp `docker ps | grep -i "testsigmahq/server" | awk '{print $1}'`:/opt/app/logs <destination_folder>
     ```
     In this command you can replace the <destination_folder> with the path of the folder where you want to copy.
  3. The above commands assumes that there is only one container running for "testsigma/server" image. If there any old containers running, please remove those before executing those commands.
  4. zip the copied logs folder and share it with us.

### Windows:
  1. Use `docker ps` to list the runnign containers and copy the container ID of the image "testsigmahq/server"
  2. Then run the command `docker cp <container_id>:/opt/app/logs <destination_folder>`. In this command you can replace the <container_id> with the container id copied from step1 and <destination_folder> with the path of the folder where you want to copy.
  3. Zip the copied logs folder and share it with us.

---