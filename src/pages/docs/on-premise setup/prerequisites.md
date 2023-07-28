---
title: "On-premise setup prerequisites"
order: 26.1
page_id: "On-premise setup prerequisites"
metadesc: "This detailed guide will help you understand the prerequisites for Testsigma On-premise setup  | Know these details before installing Testsigma On-premise setup"
noindex: false
search_keyword: ""
warning: false
---

<br>

This article outlines the essential steps and requirements for a successful on-premise setup. Understanding these prerequisites before installing the software is important to ensure a smooth installation process. So, follow the recommendations and requirements given in this document to avoid any issues during the installation process.

## **Software, Hardware, and other Requirements**
|**Requirements**|**Details**|
|---|---|
|**Server Configuration**|<li> OS: Ubuntu(22.04 LTS) or higher<br> <li> CPU: 24 core<br> <li> RAM: 64 GB<br> <li> DISK: 1 TB - 2 TB (Depending on usage)|
|**Software Requirements**|<li> Internet connectivity on server<br> <li>Docker installation capability on server<br> <li>Root privileges on server<br> <li>Permissions to install/Start the following libraries/executables on customer employee machines:<br>   - Java/JVM<br>      - Appium <br>    - ADB from android<br>    - Ability to run xcrun on mac os machines<br>    - Ability to run xattr on mac os machines| 
|**Network Requirements**|Allow incoming connections from outside to server <br> *.sengrid.com <br> *.messagebird.com <br> *.twilio.com|
|**Database Requirements**|<li>MySQL database would be installed by default.<br> <li> The user must use only MySQL version 5.7<br> <li> If the customer is going to use a MySQL installation, then we need to install the following commands to setup DB: <br> <br>*CREATE DATABASE IF NOT EXISTS tstmp;* <br>*CREATE DATABASE IF NOT EXISTS identity;* <br> *CREATE DATABASE IF NOT EXISTS master;* <br> *CREATE DATABASE IF NOT EXISTS tenant1;* <br> *CREATE DATABASE IF NOT EXISTS kibbutz;* <br> <br>*SET session sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';* <br> <br> *SET global sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';*<br> <br> <li>For cloud databases like AWS RDS if the setting of sql_mode is not allowed the provider-specific option can be used like AWS RDS parameter groups. <br> <li> For external databases we would be encouraged to have disk space of 512GB - 1TB depending on customer usage.|
|**Backup information**|Customers would be responsible for taking backup of the Database.|
|**SMTP Requirements**|Customers need to produce their SMTP settings in case they desire to use their internal SMTP instead of Testsigma SMTP servers.|
|**Additional Requirements**|<li> Depending on user preference, the agent can run on Linux, Windows, or Mac machines.<br> <li> The final storage location for screenshots, apps, and other permanent files is the host server where Testsigma containers run.<br> <li> Temporary files like screenshots may need periodic cleaning depending on usage and disk space availability.<br> <li> The server operation does not require any Windows machines.<br> <li> Customer IT teams must regularly perform data backups through regular disk or specific data folder backups.<br> <li> Testsigma On-Prem Server is not a hypervisor-based installation.<br> <li> By default, the customer would be provided URLs ending with testsigmaprivate.com (like https://cutomername.testsigmaprivate.com)<br> <li> If the customer desires to have these pointed to their domain name (like customername.com), then we need the following:<br> - Inform Testsigma before the Onprem build is generated.<br> - Get the SSL certificates of the domain in interest and copy them to the server where installation would happen.<br> <li>For installing Testsigma Recorder on chrome browsers,<br> - We need the ability to enable developer mode.<br> - We need the ability to install the Testsigma recorder in unpacked mode.|

[[info | **NOTE**:]]
|Admin access is necessary for On-Prem installation.
