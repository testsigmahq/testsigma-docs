---
title: "Testsigma Setup using Bundled Package"
page_title: "Testsigma Community Edition Setup using Bundled Package"
meta_desc: "How to setup Testsigma  Community Edition with Bundled Package"
order: 1.4
page_id: "Testsigma Setup using Bundled Package"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-requisites"
  url: "#pre-requisites"
- type: link
  name: "Step1: Download the Package"
  url: "#step1-download-the-package"
- type: link
  name: "Step2: Run Services"
  url: "#step2-run-services"
- type: link
  name: "Update to new Version"
  url: "#update-to-new-version"
- type: link
  name: "Troubleshooting"
  url: "#troubleshooting"
- type: link
  name: "Next Steps"
  url: "#next-steps"
---


---
##**Pre-requisites**

Create a folder called testsigma where you would like to install Testsigma. 

**cd** cmd into this installation folder(testsigma)

---
##**Step1: Download the Package**

Download the Testsigma zip into the installation folder(testsigma) from https://github.com/testsigmahq/testsigma/releases/latest/

You will find the following files in this location, download the appropriate one based on your OS.<br>
Testsigma-Windows-{latest-version}.zip<br>
Testsigma-Mac-{latest-version}.zip<br>
Testsigma-Linux-{latest-version}.zip<br>

Once the file is downloaded, extract it to the directory you wish and follow the steps below: <br>
We need 4 components for the Testsigma community server to work:<br>
    &nbsp; - Mysql (not bundled)<br>
    &nbsp; - Nginx (not bundled)<br>
    &nbsp; - Testsigma Server (bundled)<br>
    &nbsp; - Testsigma Agent (bundled)<br>

### **MySQL:**

#### **Install MySQL**

 1. Download and install MySQL from https://dev.mysql.com/downloads/mysql/

 2. Set the MySQL password for the root user as root. You can choose to set a different password, but while starting the testsigma API server you will need to set this as an environment variable (MYSQL\_PASSWORD\). 

#### **Connect with Existing MYSQL**

You can also connect with an external/existing MYSQL server instance. <br>
Set the following environment variables to connect with the existing MYSQL Instance <br>
MYSQL\_HOST\_NAME = <mysql\_host\_name> where mysql\_host\_name is your database url<br>
MYSQL\_PORT = < port\_number> where mysql is running<br>
MYSQL\_DB\_NAME = <db\_name> where you want to save data<br>
MYSQL\_USER = < username><br>
MYSQL\_PASSWORD = < password><br>

### **Nginx**

Since we have UI components and API server separately we need a single application to route the requests between them. Nginx is the one that facilitates this. Nginx listens to 443 ports for HTTPS connections and forwards them to the API server, so make sure this port is not occupied by another service.

### **Testsigma Server**

Testsigma follows API first approach, all APIs are served from this service. This service contains all APIs and business logic to support the Testsigma UI and all other backend processes. Testsigma Server is a Spring Boot application that runs on port 9090 by default. Make sure that 9090 is free. If you want to change the port follow the steps below.  <br>
   
  &nbsp;- Before changing the ports, stop Nginx, Testsigma Server and Testsigma Agent.<br>
  &nbsp;- Navigate to the Nginx folder from the downloaded Testsigma zip and open nginx.conf. In the text http://localhost:9090 replace the port you would like to use and save it.<br>

  &nbsp;- Before starting the Testsigma server set the environment variable TESTSIGMA\_SERVER\_PORT to the port you want<br>
  &nbsp;- Before starting the Testsigma agent, set the environment variable LOCAL\_SERVER\_URL to http://localhost:<port> here you can replace <port> with the port you would like to use.<br>
   

### **Testsigma Agent**

Testsigma Agent is a microservice that processes test case data and runs tests on browsers and mobile devices. The Testsigma agent runs on ports 9393 (HTTP) and 9494 (HTTPS) by default. If you want to change these ports, follow the steps below: <br>
   &nbsp; - Before changing the ports, stop Nginx, Testsigma Server, and Testsigma Agent.<br>
   &nbsp; - Before starting the Testsigma server you need to set the environment variable LOCAL\_AGENT\_URL= https://localhost:<http\_port>, here you can replace the <http\_port> with the port you want to use for the agent.<br>
   &nbsp; - Before starting the Testsigma agent you need to set the environment variables TESTSIGMA\_AGENT\_HTTP\_PORT for HTTP port and TESTSIGMA\_AGENT\_HTTPS\_PORT for HTTPS port.<br>

---
##**Step2: Run Services**
### **Windows**
#### **Starting Nginx:**<br>
   &nbsp; - Open a command prompt<br>
   &nbsp; - Navigate to the extracted folder<br>
   &nbsp; - Run start\_nginx.bat to start Nginx<br>
   &nbsp; - If you want to stop nginx at any point   in time then, run the  start\_nginx.bat script <br>

#### **Starting API Server:**<br>
   &nbsp; - Open a command prompt<br>
   &nbsp; - Navigate to the extracted folder<br>
   &nbsp; - Navigate to the TestsigmaServer folder<br>
   &nbsp; - Run start.bat file to start the Testsigma API server<br>
   &nbsp; - You can run stop.bat if you want to stop the API server at any point in time<br>

#### **Starting Local Agent:**<br>
   &nbsp; - Open a command prompt<br>
   &nbsp; - Navigate to the extracted folder<br>
   &nbsp; - Navigate to the TestsigmaAgent folder<br>
   &nbsp; - Run start.bat file to start the Testsigma Agent<br>
   &nbsp; - You can run stop.bat if you want to stop the agent at any point in time<br>

### **Mac / Linux:**
#### **Starting Nginx:**<br>
   &nbsp; - Open a command prompt<br>
   &nbsp; - Navigate to the extracted folder<br>
   &nbsp; - Run start\_nginx.sh file to start the Nginx<br>
   &nbsp; - You can run stop\_nginx.sh if you want to stop the nginx at any point in time<br>

#### **Starting API Server:**<br>
   &nbsp; - Open a command prompt<br>
   &nbsp; - Navigate to the extracted folder<br>
   &nbsp; - Navigate to the TestsigmaServer folder<br>
   &nbsp; - Run start.sh file to start the Testsigma API server<br>
   &nbsp; - You can run stop.sh if you want to stop the API server at any point in time<br>


#### **Starting Local Agent:**<br>
   &nbsp; - Open a command prompt<br>
   &nbsp; - Navigate to the extracted folder<br>
   &nbsp; - Navigate to the TestsigmaAgent folder<br>
   &nbsp; - Run start.sh file to start the Testsigma API agent<br>
   &nbsp; - You can run stop.sh if you want to stop the agent at any point in time<br>

Your Testsigma server should be up and running now. Testsigma server will be accessible at https://local.testsigmaos.com/ui

---
##**Update to new Version**

 1. Stop Nginx, TestsigmaServer, TestsigmaAgent
 2. Delete the Testsigma Installation folder 
 3. Download the latest version from here https://github.com/testsigmahq/testsigma/releases/latest/
 4. Repeat the steps explained in “Step2: Run Services” section
 5. Now login to check the updated version of Testsigma Server here  https://local.testsigmaos.com/ui

---
##**Troubleshooting**

 If you encounter any errors during this process, check out our guide on [debugging deployment errors](https://testsigma.com/docs/troubleshooting/setup/server-docker-deployment-errors/). If you are still facing any issue, please reach out to [support@testsigma.com](mailto:support@testsigma.com) or join our [Discord Server](https://discord.com/invite/5caWS7R6QX) to speak to the Testsigma team directly!

---
##**Next Steps**

1. [Get Started with Automating Web Applications](https://testsigma.com/tutorials/getting-started/automate-web-applications/)
2. [Get Started with Automating Mobile Web Applications](https://testsigma.com/tutorials/getting-started/automate-mobile-web-applications/)
3. [Get Started with Automating Android Apps](https://testsigma.com/tutorials/getting-started/automate-android-applications/)
4. [Get Started with Automating iOS Apps](https://testsigma.com/tutorials/getting-started/automate-ios-applications/)
5. [How to automate tests for Android Apps using local devices](https://testsigma.com/tutorials/test-cases/android-apps/build-tests-using-local-devices/)
6. [How to automate tests for iOS Apps using local devices](https://testsigma.com/tutorials/test-cases/ios-apps/build-tests-using-local-devices/)
