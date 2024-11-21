---
title: "Setup and Installation: Mac"
metadesc: "Learn how to set up & use Testsigma Tunnel (Mac) for testing of locally hosted applications across real browsers, bypassing firewalls & proxy restrictions."
noindex: false
order: 32.3
page_id: "Testsigma Tunnel Setup: Mac"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps for Installation"
  url: "#steps-for-installation"
---

---

This article discusses setting up and installing Testsigma Tunnel on macOS. You can use command-line arguments to run the client or modify the '**args.yaml**' file for configuration.

---

> ## **Prerequisites**
> 
> - Ensure you have reviewed and have all the system requirements mentioned [here](https://testsigma.com/docs/testsigma-tunnel/key-components/).

---

## **Steps for Installation**

1. From the left navigation bar, go to **Settings > Testsigma Tunnel**. 

2. In the top right corner, click the **Download Icon** and download the file as per your machine architecture. 

3. Extract the contents of the ZIP file to a directory of your choice.

4. Navigate to the extracted folder and execute the ***TestsigmaConnect*** binary. You can provide arguments in two ways:

    **a. Using Command Line Arguments**
       - Copy API Key from **Settings > API Keys** 
       - Execute the following command: <br>
         ```./TestsigmaConnect --key <your-authentication-key>```

    **b. By Modifying ‘args.yaml’**
       - You can configure the authentication key and other parameters in the args.yaml file found in the same directory as the Testsigma Connect binary.  
       - Here’s a sample **args.yaml**:
         ```yaml
         key: "<your-authentication-key>"
         tunnel-name: ""
         connections: 10
         inactive-timeout: 300
         verbose: false
         ```
         
       - After making these changes, you can simply type ***./TestsigmaConnect*** to start the client.

5. Once the application is started, you will see a message like below:

   ```
    🚀 Testsigma Connect is now running... 🚀

    🔑 Use the following tunnel name for your automation testing:
   
    🌍 Tunnel Name: <your-tunnel-name>
   
    🛑 To stop the tunnel, press Ctrl+C.
   ```

---
