---
title: "Dry Runs on Local Devices"
metadesc: "How to perform dry runs on local devices in Testsigma."
noindex: false
canonical: "https://testsigma.com/docs/runs/dry-runs-on-local-devices/"
order: 9.31
page_id: "Dry Runs on Local Devices"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Steps to follow"
  url: "#steps-to-follow"
---

---


Local device testing can be used for testing applications which are not accessible publicly i.e they are restricted to the local network.

As we already know, a Test Case can be run either as a Dry Run or as a part of a Test Plan. In this document, we discuss how to run a Test Case as a Dry Run on your local device.

&emsp;

---
##**Steps to follow:**
There are four steps to performing a dry run on a local device.

### Step 1 :Download the Agent
Navigate to the Agents page, click on Download, choose your Operating System. This will trigger the download of the Agents zip file which is about 500 MB in size.

Once it is downloaded, unzip it and save it to an accessible location.

![gif demonstrating download of an agent for local device execution ](https://docs.testsigma.com/images/dry-runs-on-local-devices/downloadaget.gif)


### Step 2 drop-down: Start the Agent
Navigate inside the unzipped folder and start the Agent by running the start.bat file for windows or start.sh file for Mac / Linux. To start the Agent, use your command prompt or terminal and type the name of the bat file / sh file.

This will start the agent.

![gif demonstrating start of an agent for local device execution](https://docs.testsigma.com/images/dry-runs-on-local-devices/agentstart.gif)


### Step 3 : Add the Agent

Navigate to the Agents page, click on Add Agent.

This will automatically add the Agent that you started in step 2. 

Change the name as required and save it.

![gif demonstrating the addition of a new agent in Testsigma](https://docs.testsigma.com/images/dry-runs-on-local-devices/addagent.gif)



### Step 4: Dry Run - Local Device

1. Navigate inside the test case, click on Run.
   
2. When selecting the test lab, choose Local Device.
   
3. From the drop down, choose the Agent that you just added
   
4. Choose the browser
   
5. Make necessary changes in Advanced options and click Run Now


![gif demonstrating initiating a dry run on a local device](https://docs.testsigma.com/images/dry-runs-on-local-devices/gif-dry-run-on-local-devie.gif)
