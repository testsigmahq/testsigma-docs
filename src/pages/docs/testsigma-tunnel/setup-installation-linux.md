---
title: "Setup and Installation: Linux"
metadesc: "Learn how to set up & use Testsigma Tunnel (Linux) for testing of locally hosted applications across real browsers, bypassing firewalls & proxy restrictions."
noindex: false
order: 32.5
page_id: "Testsigma Tunnel"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps for Installation: Linux"
  url: "#steps-for-installation-linux"
- type: link
  name: "Installing Tunnel as a Service on Linux"
  url: "#installing-tunnel-as-a-service-on-linux"
- type: link
  name: "Steps for Debian Installation"
  url: "#steps-for-debian-installation"
- type: link
  name: "Steps for RPM Installation"
  url: "#steps-for-rpm-installation"
---

---

This article discusses setting up and installing Testsigma Tunnel on a Linux system, including Debian and RPM based distributions. You can either install the client manually or use it as a service for continuous operation.

---

> ## **Prerequisites**
> 
> - Ensure you have reviewed and have all the system requirements mentioned [here](https://testsigma.com/docs/testsigma-tunnel/key-components/).

---
## **Steps for Installation: Linux**

1. From the left navigation bar, go to **Settings > Testsigma Tunnel**. 

2. In the top right corner, click the **Download Icon** and download the file as per your machine architecture. 

3. Extract the contents of the ZIP file to a directory of your choice.

4. Navigate to the extracted folder and execute the ***TestsigmaConnect*** binary. You can provide arguments in two ways:

    **a. Using Command Line Arguments**
       - Copy API Key from **Settings > API Keys** 
       - Execute the following command: <br>
         ```testsigma-connect --key <your-authentication-key>```

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

## **Installing Tunnel as a Service on Linux**

You can run Testsigma Tunnel as a service on your Linux system using either RPM or DEB installations. This allows it to run in the background and start automatically on system boot. 

## **Steps for Debian Installation**

1. From the left navigation bar, go to **Settings > Testsigma Tunnel**.

2. In the top right corner, click the **Download Icon** and download the DEB file as per your machine architecture. 

3. Install Testsigma Tunnel using the DEB package: <br>
   ```sudo apt install ./testsigma-connect-<version>.deb```

4. Create or edit the **args.yaml** file located at **/etc/testsigma-connect/args.yaml** to set your authentication key and other parameters. Here’s a sample file:
   ```yaml
   key: "<your-authentication-key>"
   tunnel-name: ""
   connections: 10
   inactive-timeout: 300
   verbose: false

5. **Enable the Testsigma Connect** service to start on boot: <br>
   ```sudo systemctl enable testsigma-connect```

6. **Start the Testsigma Connect** service: <br>
   ```sudo systemctl start testsigma-connect```

### **Debian Uninstallation**

1. **Disable the Testsigma Connect** service to prevent it from starting on boot: <br>
   ```sudo systemctl disable testsigma-connect.service```

2. **Stop the Testsigma Connect** service if it is currently running: <br>
   ```sudo systemctl stop testsigma-connect.service```

3. **Uninstall Testsigma Connect** using the APT package manager: <br>
   ```sudo apt remove -y testsigma-connect```

4. If the service file **/etc/systemd/system/testsigma-connect.service** still exists, remove it: <br>
   ```sudo rm /etc/systemd/system/testsigma-connect.service```

5. **Reload the systemd daemon** to apply changes: <br>
   ```sudo systemctl daemon-reload```

---


## **Steps for RPM Installation**

1. From the left navigation bar, go to **Settings > Testsigma Tunnel**.

2. In the top right corner, click the **Download Icon** and download the RPM file as per your machine architecture. 

3. Install Testsigma Tunnel using the RPM package: <br>
   ```sudo rpm -ivh testsigma-connect-<version>.rpm```

4. Create or edit the **args.yaml** file located at **/etc/testsigma-connect/args.yaml** to set your authentication key and other parameters. Here’s a sample file:
   ```yaml
   key: "<your-authentication-key>"
   tunnel-name: ""
   connections: 10
   inactive-timeout: 300
   verbose: false

5. **Enable the Testsigma Connect** service to start on boot: <br>
   ```sudo systemctl enable testsigma-connect.service```

6. **Start the Testsigma Connect** service: <br>
   ```sudo systemctl start testsigma-connect.service```


### **RPM Uninstallation**

1. **Disable the Testsigma Connect service** to prevent it from starting on boot: <br>
   ```sudo systemctl disable testsigma-connect.service```

2. **Stop the Testsigma Connect service** if it is currently running: <br>
   ```sudo systemctl stop testsigma-connect.service```

3. **Uninstall Testsigma Connect** using the RPM package manager: <br>
   ```sudo rpm -e testsigma-connect```

4. If the service file **/etc/systemd/system/testsigma-connect.service** still exists, remove it: <br>
   ```sudo rm /etc/systemd/system/testsigma-connect.service```

5. **Reload the systemd daemon** to apply changes: <br>
   ```sudo systemctl daemon-reload```

---