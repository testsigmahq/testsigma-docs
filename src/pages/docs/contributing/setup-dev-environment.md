---
title: "Testsigma Development Environment"
page_title: "Testsigma Development Environment"
metadesc: "How to setup Testsigma  Development Environment to contribute"
order: 22.1
page_id: "Testsigma Development Environment"
warning: false
---


## **Pre-Requirements:**
 - macOS / Linux
 - OpenJDK 11
 - Apache httpd
 - npm and nodejs(>= 12)
 - Intellij IDE Editor


---
## **Setup Instructions:**
 - Download source from github:
    `git clone https://github.com/TestsigmaInc/testsigma-os` 
 - Make sure the JAVA_HOME variables in the terminal are proper
 - Open IDE and create an empty project
 - Import agent-launcher, agent, automator, server and ui as separate modules.
 - Build the project
 - Create a folder -`mkdir $HOME/.testsigma_os”`
 - Download the android , appium and ios tools from the below urls based on os and store then in the above folder created. Make sure to replace os_name with either mac or linux based on your os:
   - http://android.testsigma.com/{os_name(mac/linux)}/android.zip
   - http://ios.testsigma.com/{os_name(mac/linux)}/ios.zip
   - http://appium.testsigma.com/{os_name(mac/linux)}/appium.zip
   - http://jre.testsigma.com/{os_name(mac/linux)}/jre.zip
 - Extract the downloaded files. If this is mac os x you need to give explicit permission  to remove the quarantine attribute. You can do this by running `sudo xattr -d -r com.apple.quarantine $HOME/.testsigma_os/`
 - After installing httpd you can use the following additional configuration in httpd as (testsigma.conf) and restart the httpd:
   - ```shell
        RewriteEngine On
        RewriteCond %{HTTP_HOST} "devos.testsigma.com"
        RewriteCond %{REQUEST_URI} "^/$"
        RewriteRule .* http://devos.testsigma.com/ui/ [L,R=301]

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
   - In httpd.conf file change the following:
     - Change the text from "Listen 8080" to "Listen 80"
     - uncomment the line "LoadModule proxy_ajp_module lib/httpd/modules/mod_proxy_ajp.so"
     - uncomment the line "LoadModule rewrite_module lib/httpd/modules/mod_rewrite.so"
     - uncomment the line "LoadModule proxy_module lib/httpd/modules/mod_proxy.so"
     - uncomment the line with "LoadModule proxy_http_module lib/httpd/modules/mod_proxy_http.so"
   - Create a new empty project in IDE
     ![Project on Intellij](https://docs.testsigma.com/images/setup-dev-environment/create-intelij-project.png)
   - Add Three services in IDE
     ![Services on Intellij](https://docs.testsigma.com/images/setup-dev-environment/services-tab.png)
   - UI using ui module imported
   - Server using server module imported
     - Add environment variables:
       - TESTSIGMA_SERVER_URL=http://devos.testsigma.com
       - TS_DATA_DIR= {replace it with a temp folder to store data}
         ![Spring Boot on Intellij](https://docs.testsigma.com/images/setup-dev-environment/spring-boot-config.png)
   - Agent using agent module
     - Add virtual machine arguments:
       - TS_DATA_DIR="/Users/{USER_HOME_DIR}/Library/Application Support/Testsigma/Agent"
       - TS_ROOT_DIR="/Users/{USER_HOME_DIR/.testsigma_os"
       - CLOUD_URL="http://devos.testsigma.com"
       ![VM Options on Intelliji](https://docs.testsigma.com/images/setup-dev-environment/vm-options.png)
     - Once the above services are added you can build and start the services one after another
        ![Service tabs](https://docs.testsigma.com/images/setup-dev-environment/services-tab.png)
     - Open hosts file and map 127.0.0.1 to devos.testsigma.com domain
       - For Mac / Linux you can edit /etc/hosts file and make an entry
         ![etc hosts](https://docs.testsigma.com/images/setup-dev-environment/etc-host-entries.png)
     - You can access the server at http://devos.testsigma.com/ui/


## **Join [Discord](https://discord.gg/CB5aFkngeG)**