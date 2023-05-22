---
title: "Steps to install Docker on an Unix OS in Azure infrastructure"
order: 26.5
page_id: "Onprem Installation Steps"
metadesc: "This article discusses in detail a step-by-step guide to installing and verifying docker on a Unix-based OS within Azure infrastructure."
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to install Docker on an Unix OS in Azure infrastructure"
  url: "#steps-to-install-docker-on-an-unix-os-in-azure-infrastructure"
---

<br>

This article discusses a step-by-step guide to installing Docker on a Unix-based OS within Azure infrastructure. 

## **Steps to install Docker on an Unix OS in Azure infrastructure**

1. Connect to your Azure virtual machine.


2. Update the package manager with the following command.

```
sudo apt-get update
```

3. Run the following commands to install Docker.

```
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

4. Install Docker Compose

```
curl -L https://github.com/docker/compose/releases/download/<DOCKER\_COMPOSE\_VERSION>/docker-compose-$(uname -s)-$(uname -m) > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

5. Verify the Docker and docker-compose installation with the following command:

```
docker --version
docker-compose –version
```


6. Once docker setup is done, run the following command in the folder where our docker-compose.yml is present,

```
docker-compose up
```



In case if you see the following error,

[[info | **ERROR**:]]
|Version in "./docker-compose.yml" is unsupported. You might be seeing this error because you're using the wrong Compose file version. Either specify a supported version (e.g "2.2" or "3.3") and place your service definitions under theserviceskey, or omit theversionkey and place your service definitions at the root of the file to use version 1. For more on the Compose file format versions, see https://docs.docker.com/compose/compose-file/.

docker-compose installed is not compatible with the docker. You can try installing an older version of docker-compose. Usually, versions 1.1.0 or 1.27.4 are suitable for Unix on azure infra.


Refer to this page https://github.com/datahub-project/datahub/issues/2020 for available docker-compose versions.






