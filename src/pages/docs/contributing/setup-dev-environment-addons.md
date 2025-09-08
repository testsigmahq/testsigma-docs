---
title: "Testsigma Development Environment (Addons)"
page_title: "Testsigma Development Environment"
metadesc: "How to setup Testsigma  Development Environment to contribute"
noindex: false
order: 22.4
page_id: "Testsigma Development Environment"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisite"
  url: "#prerequisites"
- type: link
  name: "Setup Instructions"
  url: "#setup-instruction"
- type: link
  name: "Contributors"
  url: "#contributors"
---


---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. macOS / Linux /Windows
> 2. JDK 11
> 3. Intellij IDE Editor (https://www.jetbrains.com/idea/download)
> 4. Create an Add-on in Testsigma application which will download a sample Java project for add-on. For more information on creating an add-on, refer to the [documentation on creating an Add-on](https://testsigma.com/docs/addons/create/). 
> 5. JAVA_HOME variable is set to JAVA 11

## Setup Instructions:

 1. Open IDE and create an empty project

 ![Creating a new empty project in IntelliJ IDE](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-new-project.png)
	
2. Enter Project name and location to save the project
![Giving name for new IntelliJ project](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-project-details.png)

 3. Set Project SDK to Java 11
 
![Selecting project SDK in IntelliJ project settings](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-project-sdk.png)

 3. Import the downloaded Testsigma Add-on bundle as Maven/Gradle module

![Documentation on importing a new module within existing IntelliJ project](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-import-module.png)


![Documentation on selecting the addon folder to import the addon from](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-addon-folder.png)
 
![Documentation on importing module as a Maven project](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-meven-import.png)

![Documentation on selecting module settings in IntelliJ module settings](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-module-settings.png)

![Documentation on selecting module SDK in IntelliJ module settings](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-module-sdk.png)

![Documentation on project xxplorer view in IntelliJ for an Addon](https://docs.testsigma.com/images/setup-dev-environment-addons/intellij-project-explorer.png)

4. Add your own test Actions, zip and upload to Testsigma Add-ons

## Contributors

Please join [here](https://discord.gg/CB5aFkngeG) 