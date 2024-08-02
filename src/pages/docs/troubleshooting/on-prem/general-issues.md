---
title: "Troubleshooting General Issues"
order: 23.72
page_id: "Troubleshooting Issues"
metadesc: "This article discusses how to troubleshoot some general issues with respect to On-prem setup. Quick troubleshooting solutions for some on-prem general issues"
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Issue with Docker Login"
  url: "#issue-with-docker-login"
- type: link
  name: "Docker-compose file is unsupported"
  url: "#docker-compose-file-is-unsupported"
- type: link
  name: "Issue with Import, Export, and Screenshots"
  url: "#issue-with-import-export-and-screenshots"
- type: link
  name: "Screenshots not appearing"
  url: "#screenshots-not-appearing"
- type: link
  name: "Not Able to Add New User"
  url: "#not-able-to-add-new-user"
- type: link
  name: "Manage Docker Containers and Images"
  url: "#manage-docker-containers-and-images"
- type: link
  name: "App Slowness"
  url: "#app-slowness"
---

---

This article explains general issues encountered while setting up and running docker on-premises. *For more information, refer to [on-prem setup](https://testsigma.com/docs/on-premise-setup/installation-process/setup/).*

---

## **Issue with Docker Login**
In terminal, login to docker hub using following details: <br>
**Login Command:** `docker login -u testsigmaonprem` <br>
**Access Token:** dckr\_pat\_CFLXvWlwUkrfIJj1d6lpeRPLh5o <br>

[[info | **NOTE**:]]
| a. If you see any issue, refer to the following link: https://docs.docker.com/desktop/get-started/#credentials-management-for-linux-users <br>
| b. Any issues with gpg password store, restart gpg-agent using below 2 commands:
|```
|gpgconf --kill gpg-agent 
|gpg-agent
|```

---

## **Docker-compose File is Unsupported**

While running docker-compose up if you see below error, issue is with the installed version of the docker-compose.

`Version in ./docker-compose.yml is unsupported`

**Steps to Resolve this Issue** <br>
Remove existing docker-compose and re-install specific versions. 

[[info | **References**:]]
|- https://docs.privacera.com/latest/platform/pm-ig/install_docker_and_docker_compose_azure_ubuntu/
|- https://stackoverflow.com/questions/42139982/version-in-docker-compose-yml-is-unsupported-you-might-be-seeing-this-error


[[info | **NOTE**:]]
|You can also get the specific URL from github docker-compose releases (https://github.com/docker/compose/releases).


---

## **Issue with Import, Export, and Screenshots**

If there is any issue with export, import, and screenshots, change the folder permissions inside the container. 

```
 docker ps #lists all the running containers with container IDs
docker exec -it <CONTAINER_ID> /bin/sh  #To go inside the running container
docker exec -u root -it <CONTAINER_ID> /bin/sh   #To go inside the running container as root user
chown -R tsuser:testsigma ts_app_server_data      #to change permissions(folder names will be different for different containers)
```

---

## **Screenshots not Appearing**

If screenshots are not appearing, possible reason could be due to insufficient permissions to ```ts_app_server_data``` folder inside docker container.


### **Steps to resolve:**

a. List all running docker containers, Command: ```sudo docker ps```

b. Enter inside **app-server-val*** container using below command. Make sure to copy the correct container-id. Below command is for the above output. Command: ```sudo docker -u root exec -it 11ac1998e5e1 /bin/sh```

c. Navigate to ```/opt/app cd /opt/app```

d. Execute command ```chown -R tsuser:testsigma ts_app_server_data```

e. Run the test cases and check if screenshots are coming up.


---

## **Issue with addon upload (Connection refused/unknown server)**

This error usually comes up when there’s an issue with the entries in the ```/etc/hosts```.

**Steps to Resolve the Issue**
- Try separating all testsigma server entries into individual lines (to avoid binary chars).
- Execute command ping on addon server, ex: ping **testing-addon.testsigmaprivate.com** and see if the name is resolved to an IP address and receiving data.
- If ping is not successful, work around the host entries. Try mapping **127.0.0.1 testsigma-addon.testsigmaprivate.com**. If it does not work, change the IP to static IP (try private IP and public IP if available). Make sure ping returns a valid response, then try addon upload. 

---

## **Not Able to Add New User**
This happens due to wrong IP mapping in **/etc/hosts** for **id-server** url. Change the mapping to fix this.

---

## **Manage Docker Containers and Images**

**Removing Containers**
```
docker rm $(docker ps -a -f status=exited -q)
docker rm <CONTAINER-ID>
```

**Removing Images**
```
docker rmi $(docker images -a -q)
docker rmi <ID>
```

---

## **App Slowness**
If you encounter any issue with MySQL connection drop or a slow down, add custom commands to MySQL docker-compose as shown below.

```
# MySQL server  
testsigma_mysql:
container_name: testsigma-mysql
image: testsigmainc/onprem:mysql-honeywell-india-v351_testing_1
platform: linux/x86_64
restart: always
volumes:
- ./data/db_data:/var/lib/mysql
environment:
MYSQL_ROOT_PASSWORD: root
command: --max_connections=1000 --max_allowed_packet=128M --sql_mode="STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION"
ports:
- "3307:3306"
networks:
- testsigma-network
healthcheck:
test: out=$$(mysqladmin ping -h localhost -P 3306 -u root --password=root 2>&1); echo $$out | grep 'mysqld is alive' || { echo $$out; exit 1; }
interval: 1s
retries: 120  
```

---