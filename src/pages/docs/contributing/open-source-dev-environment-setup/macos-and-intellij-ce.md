---
title: "macOS and IntelliJ Community Edition"
page_title: "Testsigma Development Environment with macOS and IntelliJ Community Edition"
metadesc: "This article discusses how to setup Testsigma Development Environment with macOS and IntelliJ Community Edition | Learn how to setup Testsigma Development Environment"
noindex: false
order: 22.1
page_id: "Testsigma Development Environment with macOS and IntelliJ Community Edition"
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
  name: "Java JDK"
  url: "#java-jdk"
- type: link
  name: "Node js"
  url: "#node-js"
- type: link
  name: "Apache httpd"
  url: "#apache-httpd"
- type: link
  name: "MYSQL"
  url: "#mysql"
- type: link
  name: "Angular CLI"
  url: "#angular-cli"
- type: link
  name: "Setup"
  url: "#setup"
---

---

## **Pre-Requisites**
- **OS:** macOS / Linux
- **IDE:** IntelliJ IDE Editor - Community Edition

<br>

## **Pre-Requisite Software and Service Installation**
- Open JDK 11
- Apache httpd
- npm and nodejs (>= 12)
- mysql5.7
- angular CLI 12

<br>

## **Java JDK**
- Download the Java JDK 11 from the following link, 
    - [Download the Latest Java LTS Free](https://www.oracle.com/java/technologies/downloads/#java11)
- Once it is installed, you can type the ***java -version*** in the terminal to confirm if the Java installation is successful.
- Set env path in zshrc profile.
    - Open the terminal and type ***vi ~/.zshrc***
    - Enter the below to set the path and save it.
    - ***Export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home***

<br>

## **Node js**
- Down the node from the following link:
    - [Download Node.js](https://nodejs.org/en/download) 
- Once it is installed, you can type ***node -v*** in the terminal to confirm if the node installation is successful.

<br>

## **Apache httpd**
- Install apache httpd via Homebrew. 
- Make sure Xcode is installed on your mac (install it via AppStore or https://developer.apple.com/downloads)
- To Install brew, open your terminal and type in:
```
/usr/bin/ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)
```

- Next, to install apache httpd, type in:
```
brew install httpd
```

- To start the httpd service, type in:
```
sudo brew services start httpd 
```

<br>

## **MySQL**
- Install MySQL via Homebrew as well.
- To install:
```
brew install mysql@5.7
```
- After installation, set the path in the bash profile. 
    - In the terminal type, ***vi ~/.zshrc***
    - Paste ***export PATH="/opt/homebrew/opt/mysql@5.7/bin:$PATH"***
- Start the mysql server using:
```
brew services start mysql@5.7
```
- The default username and password for the MySQL connection is “root”. You can connect to MySQL using:
```
mysql -u root -p
```
- A prompt to enter the password will be shown. You can type in “root” again.

<br>

## **Angular CLI**
- Install angular CLI using the following command from the terminal.
```
sudo npm install -g @angular/cli@12
```

- Once the installation is complete, confirm the installation by checking the version using the below command:
```
ng --version
```

<br>

## **Setup**
- Download the source from GitHub: git clone https://github.com/Testsigmahq/testsigma and place it on your system. The downloaded source will have the below folders.
    - agent
    - agent-launcher
    - automator
    - deploy
    - server
    - ui
- Now, open IntelliJ IDE and create a new JAVA project. 
- The next step is to import the automator, agent, agent launcher and server as individual modules in the project created.
- ## **How to import modules in IntelliJ IDE:**
- Go to **File → Project structure**.
- In the Project structure window, you can see modules under the project settings section.
- Click on the modules tab and click the **+ icon** and select import module.
![Import Module](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/importmodule.png)
- Now select each folder i.e. automator, agent, agent-launcher, and server, and import them. 
- Select the option **Import module from external module** and then choose **Maven** and click on **create**.
![Maven](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/maven.png)
- Build each module using the command mentioned, in the following order:
    - **automator:** ***mvn clean install***
    - **agent:** ***mvn clean install***
    - **agent-launcher:** ***mvn clean install***
    - **server:** ***mvn clean install***

- **Building ui module:**
    - Open terminal 
    - Go to the **ui** folder location in the terminal and give the below command:
    ```
    npm install
    ```
- Downloading required tools:
    - Create a folder **testsigma_os** in the home directory. This can be done by running the below command from the terminal:
    ```
    mkdir $HOME/.testsigma_os
    ```
    - Download the Android, Appium, JRE, and iOS tools from this [URL](https://github.com/testsigmahq/testsigma/releases) and store them in the above folder created. Make sure you extract the zip and place the contents in the folder created.
    - For mac Os you need to give explicit permission to remove the quarantine attribute. You can do this by running,
    ```
    sudo xattr -d -r com.apple.quarantine $HOME/.testsigma_os/
    ```
    - Also, if you have already downloaded the Testsigma Agent, you can copy Android, Appium, drivers, and iOS and put the same on testsigma_os.

- **HTTPD Config Changes:**
- From the finder window on Mac, press **command+shift+g** and mention the path ***opt/homebrew/etc/httpd***
- Create a new file called **testsigma-os.conf**. Enter the below contents in it and save the file.
    ```
    RewriteEngine On
    
    RewriteCond %{HTTP_HOST} "devos.testsigma.com"
    RewriteCond %{REQUEST_URI} "^/ui/"
    RewriteRule .* http://localhost:4202%{REQUEST_URI} [P]
    #ProxyPassReverse .* "http://devos.testsigma.com/ui"
    
    RewriteCond %{HTTP_HOST} "devos.testsigma.com
    RewriteCond %{REQUEST_URI} "^/assets/"
    RewriteRule .* http://localhost:4202%{REQUEST_URI} [P]
    #ProxyPassReverse .* "http://devos.testsigma.com/assets"
    
    RewriteCond %{HTTP_HOST} "devos.testsigma.com"
    RewriteRule .* http://localhost:9090%{REQUEST_URI} [P]
    #ProxyPassReverse .* "http://devos.testsigma.com/"
    
    RewriteCond %{HTTP_HOST} "devos.testsigma.com"
    RewriteCond %{REQUEST_URI} "^/ui"
    RewriteRule .* http://localhost:4202%{REQUEST_URI} [P]
    #ProxyPassReverse .* "http://devos.testsigma.com/ui"
    ```

    - Open “httpd.conf” present in the same path and add the below content at the bottom of the file and save it.
    ```
    Include /opt/homebrew/etc/httpd/testsigma-os.conf
    ```
    - Restart the httpd services using the following command from the terminal.
    ```
    brew services restart httpd
    ```

## **Setting up UI, Server, and Agent component as a service:**
- **Setting up server component as a service:**
    - Go to **Run → Edit Configurations**.
    - Select + Icon in the Run/Debug Configurations window.
    - Select **Application** as the configuration type.
    - Enter the name as **server**.
    - Select Java 11 as the JDK version and **testsigma-agent** as the classpath.
    - Enter **com.testsigma.agent.TestsigmaWebApplication** as the class to be compiled.
    - If the Environment Variables field is not visible, Click the **Modify option** and select **Environment Variables**
        - Enter the below values for **Environment Variables**.
        ```
        TESTSIGMA_SERVER_URL=http://devos.testsigma.com;TS_DATA_DIR=/Users/{USERHOMEDIR}/Documents/server-os-data
        ``` 
        - **TS\_DATA\_DIR** is a temp folder to store data. so, you can create one and mention the path of the folder above.
        [[info | **NOTE**:]]
        |Replace **{USERHOMEDIR}** with your home directory name.

    - Click **Ok**
    - The server module is added as a service now.
    - Reference:
    ![Server](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/server.png)

- **Setting up agent component as a service:**
    - Go to **Run → Edit Configurations**.
    - Select **+ Icon** in the Run/Debug Configurations window.
    - Select Sprint Boot as the configuration type.
    - Enter the name as **agent**.
    - Select Java 11 as the JDK version and **testsigma-agent** as the classpath
    - Enter ***com.testsigma.agent.TestsigmaAgent*** as the class to be compiled.
    - Add **VM options** from Modify options if it's not visible and add the Virtual Machine agents in the below format.
        ```
        -DTS_DATA_DIR="/Users/{USERHOMEDIR}/Library/Application Support/Testsigma/Agent"
        -DTS_ROOT_DIR="/Users/{USERHOMEDIR}/.testsigma_mac"
        -DCLOUD_URL="http://devos.testsigma.com/"
        ```
        [[info | **NOTE**:]]
        |Replace **{USERHOMEDIR}** with your home directory name
   - Click **Ok**
   - The agent module is added as a service now.
   - Reference:
   ![Agent Module as a Service](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/agentmoduleasservice.png)

- **Start the services:**
    - **ui**
        - Open the terminal
        - Go to the **ui** folder location and give the below command:
            ```
            npm start
            ```
    - Server and agent can be started from the services tab in IntelliJ.

- **Map localhost to devos.testsigma.com:** 
    - From the finder window on Mac, press **command+shift+g** and mention the path ***private/etc/hosts***”
    - Open the host's file and add an entry as below:
        ```
        127.0.0.1       devos.testsigma.com
        ```

- **You can now access the server at https://devos.testsigma.com/ui/**
![Access Server](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testsigma.png)