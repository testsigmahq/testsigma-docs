---
title: "Testsigma Docker Setup"
page_title: "Testsigma Community Edition Docker Setup"
metadesc: "Learn how to set up Testsigma Server and MySQL as docker containers using Docker Compose | Easiest way to set up Testsigma on your local machines"
noindex: false
order: 33.3
page_id: "Testsigma Docker Setup"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Setting up Testsigma Community Edition with Docker"
  url: "#setting-up-testsigma-community-edition-with-docker"
- type: link
  name: "Verifying the installation"
  url: "#verifying-the-installation"
- type: link
  name: "Connecting to External MySQL"
  url: "#connecting-to-external-mysql"
- type: link
  name: "Update to new Version(Testsigma Server)"
  url: "#update-to-new-versiontestsigma-server"
- type: link
  name: "Update to new Version(Testsigma Agent)"
  url: "#update-to-new-versiontestsigma-agent"
- type: link
  name: "Troubleshooting"
  url: "#troubleshooting"
- type: link
  name: "Next Steps"
  url: "#next-steps"
---

---

This guide will help you setup [Testsigma Server](https://github.com/testsigmahq/testsigma) and MySQL as docker containers using **Docker Compose**. This is the easiest way to set up Testsigma on your local machines.

---

> ## **Prerequisites**
> 
>  Before you begin, ensure you have installed [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/).

---

## **Setting up Testsigma Community Edition with Docker**

Create a folder called **Testsigma** where you would like to install Testsigma and store the logs and runtime data.

**cd** cmd into this installation folder (Testsigma)

---

## **Step 1: Download docker-compose.yml file**

Download docker-compose.yml file into the Testsigma installation folder from [here](https://github.com/testsigmahq/testsigma/tree/dev/deploy/docker). Download the appropriate file based on your OS.


[[info | NOTE:]]
| - If you are using Apple M1 machines then you should replace the testsigmahq/server image version in docker-compose.yml with the M1 docker image tag. For example if the version is v1.0.0 then you should add "-m1" and make it v1.0.0-m1. So the final image name looks like this "testsigmahq/server:v1.0.0-m1"

---

## **Step 2: Run Testsigma Server**

The following command will run Testsigma along with a MySQL database to store data.

```
$ docker-compose up -d 
```
<br><br>
Check if the containers are running using the following commands


```
$docker ps

CONTAINER ID        IMAGE                   …       STATUS            PORTS                                     Names    			                                              
580db1ec9ad1        testsigmahq/server:m1   …       ….	              443->443/tcp, 9090->9090/tcp, 9090/tcp    testsigma\_server 
318c46259b15        mysql:5.7               …       ….	              33060/tcp, 55581->3306/tcp                testsigma\_mysql
```

You should see a message: “Testsigma is Running!” once the container is ready.


Your Testsigma server should be up and running now. Testsigma server will be accessible at https://local.testsigmaos.com/ui

---

## **Verifying the installation**

By default folders db\_data, ts\_data will be created in the installation folder to store the application data and MySQL data. If you want to change this folder path you can open **docker-compose.yml** and change the db\_data volume path under mysql service and ts\_data path under testsigma_server.

---

## **Connecting to External MySQL**

If you want to connect to an external/existing MySQL database, add the below environment variables 
 
MYSQL\_HOST\_NAME = < mysql \_host\_name> where mysql\_host\_name is your database url<br>
MYSQL\_PORT = < port\_number> where mysql is running<br>
MYSQL\_DB\_NAME = < db\_name> where you want to save data<br>
MYSQL\_USER = < username><br>
MYSQL\_PASSWORD = < password><br>

---

## **Step 3: Install and configure Testsigma Agent**

When we run the Testsigma server using Docker it runs in a separate container(child process), where it cannot access the applications installed in the host machine. But in order to automate Web and Mobile Apps the Testsigma Server (running in docker) has to access Browsers and Mobile Devices connected to the host machine. 

To achieve this we use Testsigma Agent that connects the Testsigma Server with the host machine to access the browsers and mobile devices connected. 

### **Download and Install Testsigma Agent**

Login to https://local.testsigmaos.com/ui and follow the steps mentioned here([Setup: Windows, Mac, Linux](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/)) to Install and configure the the Agent
 
---

## **Update to new Version(Testsigma Server)**

  1. Stop the Docker images/container with name Testsigma in Docker Desktop, alternatively you can use the below commands to kill the processes<br>
       &nbsp;a. `sudo su`<br>
       &nbsp;b. `docker container kill $(docker ps -q)`
  2. Download the latest version of docker-compose.yml file into the Testsigma installation folder from [here](https://github.com/testsigmahq/testsigma/tree/dev/deploy/docker). 
  3. Run 
  `
  $ docker-compose up -d 
  `
  4. Verify the status by running `$docker ps` command
  5. Now login to check the updated version of Testsigma Server here  https://local.testsigmaos.com/ui

---

## **Update to new Version(Testsigma Agent)**

  1. Stop the running agent by executing the stop.sh
  2. Delete the TestsigmaAgent folder 
  3. Login to https://local.testsigmaos.com/ui
  4. Go to Agents menu to download the latest version of Testsigma Agent
  5. Now start the Agent by executing start.sh

[[info | NOTE:]]
|- If you are facing any issues after updating Testsigma Agent refer to [Agent - Startup and Registration Errors](https://testsigma.com/docs/agent/troubleshooting/setup-issues/) .
|- If you are still facing the issue, delete the [agent manually](https://testsigma.com/docs/agent/force-delete/) and install again.

---

## **Troubleshooting**

- If you encounter any errors during this process, check out our guide on [debugging deployment errors](https://testsigma.com/docs/troubleshooting/setup/server-docker-deployment-errors/) and for [logs](https://testsigma.com/docs/troubleshooting/setup/server-docker-deployment-errors/#checking-logs)
- If you are still facing any issue, please reach out to [support@testsigma.com](mailto:support@testsigma.com) or join our [Discord Server](https://discord.com/invite/5caWS7R6QX) to speak to the Testsigma team directly!

---

## **Next Steps**

1. [Get Started with Automating Web Applications](https://testsigma.com/tutorials/getting-started/automate-web-applications/)
2. [Get Started with Automating Mobile Web Applications](https://testsigma.com/tutorials/getting-started/automate-mobile-web-applications/)
3. [Get Started with Automating Android Apps](https://testsigma.com/tutorials/getting-started/automate-android-applications/)
4. [Get Started with Automating iOS Apps](https://testsigma.com/tutorials/getting-started/automate-ios-applications/)
5. [How to automate tests for Android Apps using local devices](https://testsigma.com/tutorials/test-cases/mobile-apps/build-tests-using-local-android-devices/)
6. [How to automate tests for iOS Apps using local devices](https://testsigma.com/tutorials/test-cases/mobile-apps/build-tests-using-local-ios-devices/)

---
