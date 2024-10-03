---
title: "Windows and IntelliJ Ultimate Edition"
page_title: "Testsigma Development Environment with windows and IntelliJ Ultimate Edition"
metadesc: "This article discusses how to setup Testsigma Development Environment with windows and IntelliJ Ultimate Edition | Learn how to contribute to Testsigma"
noindex: false
order: 22.3
page_id: "Testsigma Development Environment with macOS and IntelliJ Ultimate Edition"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Pre-Requisite"
  url: "#pre-requisites"
- type: link
  name: "Pre-Requisite Software and Service Installation"
  url: "#pre-requisite-software-and-service-installation"
- type: link
  name: "Setup Steps"
  url: "#setup-steps"
- type: link
  name: "Downloading Required Tools "
  url: "#downloading-required-tools "
- type: link
  name: "HTTPD config file changes"
  url: "#httpd-config-file-changes"
---

---

## **Pre-Requisite:**
- **OS:** Microsoft Windows
- **IDE:** Intellij IDE Editor - Ultimate Edition

<br>

## **Pre-Requisite Software and Service Installation** <br>

**OPEN JDK 11 or greater**<br>
Open JDK 11 can be installed from [Oracle](https://www.oracle.com/java/technologies/downloads/#java11-windows). Please make sure JDK 11 or above is taken into consideration as there are a few unsupported libraries below JDK 11 while setting up the dev environment.

**APACHE HTTPD**<br>

You can install the HTTPd service from this link - https://www.apachelounge.com/download/  and once you have unzipped it, you can navigate to **Apache 24 > bin** and see the httpd.exe file. 

Since we need to install HTTPd as a service, we need to open the command prompt and navigate to the bin folder inside Apache 24 folder and run this command ***httpd -k install***, this will run the httpd server as a service. 

**NPM and  NODE JS (>= 12)**<br>

To publish and install packages to and from the public npm registry or a private npm registry, you must install Node.js and the npm command line interface using either a Node version manager or a Node installer.

You can install the same from this link - [Downloading and installing Node.js and npm | npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

**MYSQL 5.7**<br>

You can set up download MySQL from this link - [MySQL :: Download MySQL Community Server (Archived Versions)](https://downloads.mysql.com/archives/community/) and set up by following this document - [MySQL 5.7: Installation Instructions (Windows) - GROK Knowledge Base](https://software.grok.lsu.edu/Article.aspx?articleid=18737)


## **Setup Steps**
- Download the source from GitHub: git clone https://github.com/Testsigmahq/testsigma and place it on your system. The downloaded source will have the below folders.
    - agent
   - agent-launcher
    - Automator
    - deploy
    - server
    - UI
- Now, open IntelliJ IDE and create a new JAVA project.
- The next step is to import the Automator, agent, agent launcher, server, and ui as individual modules in the project created.

**How to import modules in IntelliJ IDE:**
- Go to **File → Project structure**
- In the Project structure window, you can see modules under the project settings section.
- Click on the modules tab and click the + icon and select import module.
- Now select each folder i.e. Automator, agent, agent-launcher, server, ui, and import them.
- While importing modules (Automator, agent, agent-launcher, server), select the option **Import module from external module** and then choose **Maven** and click on **Create**.
![Maven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mavenw.png)
- Only while importing **ui** as a module, choose the option **Create module from existing sources** and click on **Next**.
    - The framework will be detected as **angular**
    - Click on **Create**
    ![Angular Framework](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/angular.png)

- **Build each module using the command mentioned, in the following order:**
    - **automator:** ***mvn clean install***
    - **agent:** ***mvn clean install***
    - **agent-launcher:** ***mvn clean install***
    - **server:** ***mvn clean install***
    - **ui:** ***npm install***

## **Downloading Required Tools**
1. Create a folder with the name **testsigma_os**.
2. Download the ANDROID, APPIUM, DRIVERS, and IOS tools from this [URL](https://github.com/testsigmahq/testsigma/releases) and store them in the above folder created. Make sure you extract the zip and place the contents in the folder created. 

Also, if you have already downloaded the Testsigma Agent, you can copy Android, Appium, drivers, and iOS and put the same on testsigma_os.

![Tools](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsos.png)

## **HTTPD config file changes**
1. Once the httpd service is installed, we need to navigate to **Apache 24 > conf > httpd.conf** and change the below details:
```
Change the text from "Listen 8080" to "Listen 80"
uncomment the line "LoadModule proxyajpmodule lib/httpd/modules/modproxyajp.so"
uncomment the line "LoadModule rewritemodule lib/httpd/modules/modrewrite.so"
uncomment the line "LoadModule proxymodule lib/httpd/modules/modproxy.so"
uncomment the line with "LoadModule proxyhttpmodule lib/httpd/modules/modproxyhttp.so"
```
2. Once these changes are done create a new file in the conf folder with the name **testsigma.conf** and add below details:
```
RewriteEngine On
RewriteCond %{HTTP_HOST} "devos.testsigma.com"
RewriteCond %{REQUEST_URI} "^/$"
#RewriteRule .* http://localhost:4202%{REQUEST_URI} [P]
RewriteRule .* https://devos.testsigma.com/ui/ [L,R=301]
RewriteCond %{HTTP_HOST} "devos.testsigma.com"
RewriteCond %{REQUEST_URI} "^/ui/"
RewriteRule .* http://localhost:4202%{REQUEST_URI} [P]
RewriteCond %{HTTP_HOST} "devos.testsigma.com"
RewriteCond %{REQUEST_URI} "^/ui"
RewriteRule .* http://localhost:4202%{REQUEST_URI} [P]
RewriteCond %{HTTP_HOST} "devos.testsigma.com"
RewriteCond %{REQUEST_URI} "^/assets/"
RewriteRule .* http://localhost:4202%{REQUEST_URI} [P]
RewriteCond %{HTTP_HOST} "devos.testsigma.com"
RewriteRule .* http://localhost:9090%{REQUEST_URI} [P]
```
Once these details are added, you can save it and restart the httpd service.

## **Setting up UI, Server, and Agent component as a service:**
Once the above configuration is done, we need to add UI, Server, and Agent as a service so that the entire application runs.

**Setting up UI component as service:** 
- Click on **Run** option in the IDE and then click on **Edit configuration**.
- Once you have clicked the **Edit configuration**, you can click on + icon in the top left corner and add the npm service.
![npm Service](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/npmservice.png)
- Enter the name of the UI component. 
- For **package.json:** select the **package.json** file present in the ui folder from the downloaded source.
- Select **run** for command and **start** for Scripts.
- Once the setup is done, you can click on **Ok** and your UI component is ready to run as a service.
![Ui Component as Service](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/uicomponent.png)

**Setting up Server Component as a service:**
- Go to **Run → Edit Configurations**.
- Select + Icon in the **Run/Debug Configurations** window.
- Select Sprint Boot as the configuration type.
- Enter the name as **Server**.
- Select Java 11 as the JDK version and **testsigma-agent** as the classpath.
- Enter **com.testsigma.agent.TestsigmaWebApplication** as the class to be compiled.
- If the Environment Variables field is not visible, Click the **Modify option** and select **Environment Variables**.
    - Enter the below values for **Environment Variables**
    ```
    -DTESTSIGMA_SERVER_URL=http://devos.testsigma.com;-DTSDATADIR=<Userdir>\testsigma\temp_labs
    ```
    - temp_labs is a temp folder to store data. So, you can create one and mention the path of the folder above.
    [[info | **NOTE**:]]
    |Note: Replace &lt;Userdir&gt; with your home directory name.

- Click **Ok**
- The server module is added as a service now.
![Server Module](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/servermodule.png)

**Setting up Agent component as service:** 
- Go to **Run → Edit Configurations**.
- Select **+ Icon** in the Run/Debug Configurations window.
- Select **Sprint Boot** as the configuration type.
- Enter the name as **agent**.
- Select **Java 11** as the JDK version and **testsigma-agent** as the classpath.
- Enter **com.testsigma.agent.TestsigmaAgent** as the class to be compiled.
- Add **VM options** from **Modify options** if it's not visible and add the **Virtual Machine agents** in the below format.
```
-DTS_DATA_DIR="<userdir>\\testsigma\\agent"
-DTS_ROOT_DIR="<userdir>\\.testsigma_os"
-DCLOUD_URL="http://devos.testsigma.com"
```
[[info | **NOTE**:]]
|Replace &lt;userdir&gt; with your custom directory path.
- Click **Ok**
- The agent module is added as a service now.
![Agent as a serive](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agentmasser.png)

**Running the application as a service:**<br>
Once the three components are set up as service, you can run them one by one as shown below:
![Application as service](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/appasservice.png)

**Mapping URL to Host:** <br>
The final step is to navigate to ```%WinDir%\System32\Drivers\Etc``` and add ```127.0.0.1       localhost devos.testsigma.com```
![Mapping URL](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/mappingurl.png)

Once this is done, you can save the host file and navigate to https://devos.testsigma.com/ui and see the below screen:
![Access Testsigma](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testsigma.png)

[[info | **NOTE**:]]
| For **Windows and IntelliJ Community Edition**, the pre-requisites remain the same. You can follow the steps provided in **macOS and IntelliJ Community Edition** for the setup.