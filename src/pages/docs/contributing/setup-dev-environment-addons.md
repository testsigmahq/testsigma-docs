---
title: "Testsigma Development Environment (Addons)"
page_title: "Testsigma Development Environment"
metadesc: "How to setup Testsigma  Development Environment to contribute"
noindex: false
order: 22.4
page_id: "Testsigma Development Environment"
warning: false
---

---

## Prerequisites

 - macOS / Linux /Windows
   
  - JDK 11
   
  - Intellij IDE Editor (https://www.jetbrains.com/idea/download)
   
   - Create an Add-on in Testsigma application which will download a
   sample Java project for add-on. Visit [Create a Testsigma
   Add-on](https://testsigma.com/docs/addons/create/) for more details.
   -   JAVA_HOME variable is set to JAVA 11

## Setup Instructions:

 1. Open IDE and create an empty project

 ![Creating a new empty project in IntelliJ IDE](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-new-project.png)
	
2. Enter Project name and location to save the project
![Giving name for new IntelliJ project](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-project-details.png)

 3. Set Project SDK to Java 11
 
![Selecting project SDK in IntelliJ project settings](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-project-sdk.png)

 3. Import the downloaded Testsigma Add-on bundle as Maven/Gradle module

![Importing a new module within existing IntelliJ project](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-import-module.png)


![Selecting the addon folder to import the addon from](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-addon-folder.png)
 
![Importing module as a Maven project](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-meven-import.png)

![Selecting module settings in IntelliJ module settings](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-module-settings.png)

![Selecting module SDK in IntelliJ module settings](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-module-sdk.png)

![Project Explorer view in IntelliJ for an Addon](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-project-explorer.png)

4. Add your own test Actions, zip and upload to Testsigma Add-ons

## Contributors

Please join [here](https://discord.gg/CB5aFkngeG) 