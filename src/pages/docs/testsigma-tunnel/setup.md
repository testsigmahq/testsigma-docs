---
title: "Testsigma Tunnel"
metadesc: "Learn how to set up & use Testsigma Tunnel for testing of locally hosted applications across real browsers, bypassing firewalls & proxy restrictions."
noindex: false
order: 31.1
page_id: "Testsigma Tunnel"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Key Components"
  url: "#key-components"
- type: link
  name: "System Requirements"
  url: "#system-requirements"
- type: link
  name: "Setup and Installation"
  url: "#setup-and-installation"
- type: link
  name: "Using Testsigma Tunnel"
  url: "#using-testsigma-tunnel"
---

---

Testsigma Tunnel allows you to securely test private server URLs or locally hosted web applications on real browsers and devices through Testsigma. Testsigma's tunnel binary can bypass the restrictions caused by corporate firewalls and proxy settings, ensuring a secure connection without IP whitelisting or public internet access.

Testsigma Tunnel establishes a secure connection between your system and Testsigma cloud servers using protocols like Web Socket, HTTPS, and SSH. This allows testing of locally hosted websites or web applications across multiple OS, browsers, and screen resolutions available on Testsigma. This article discusses key components, system requirements, and steps to execute Testsigma Tunnel for client connection. 

---

## **Key Components**

There are five key components in the Testsigma Tunnel architecture:

![Tunnel Architecture](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Tunnel_Architecture.png)

**1. Testsigma Tunnel Client**
- The Testsigma Tunnel Client is a distributed binary that must be installed on the machine where you have access to locally hosted websites or applications.
- The tunnel application uses the provided key to authenticate with the Authentication Server when started.

**2. Authentication Server**
- The Authentication Server processes authentication requests from the Testsigma Tunnel Client.
- After successful authentication, it assigns a Tunnel Connect Server for testing.

**3. Testsigma Tunnel Server**
- The Testsigma Tunnel Server is a virtual machine (VM) or container running in the Testsigma data centers.
- It includes an HTTP/TCP proxy, which forwards requests from REST API executors or automation test case executors.
- The server hosts a TCP server that the Testsigma Tunnel Client uses to establish a tunnel.

**4. REST API Client/Browser (Automation Environment)**
- The REST API client or browser running automation uses the Testsigma Tunnel Server as a proxy to forward all requests to the Testsigma Tunnel Client.

**5. Remote Address**
- The remote address refers to the server URL, which could be localhost, a privately hosted site, or public websites.
- The Testsigma Tunnel Client establishes a bidirectional tunnel between the Testsigma application and the remote address.

---

## **System Requirements**

To use Testsigma Tunnel, your system must meet the following requirements:

**1. Operating System Requirements**
- **Windows:** XP or later
- **macOS:** 10.10 or later
- **Linux:** Ubuntu 12.04 or later

**2. Hardware Requirements**
- **CPU:** x64 architecture, ARM (32-bit and 64-bit) supported
- **RAM:** 2 GB or more recommended
- **Disk Space:** 100 MB free space for installation (500MB free space recommended)

**3. Network Requirements:**
- Ensure that you have a stable internet connection for tunnel communication.

**4. Firewall/Proxy Requirements:**
- Ensure that no firewall or security system restricts the Testsigma Tunnel Client's outbound network traffic.


---


## **Setup and Installation**

### **For Mac**

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

 
[[info | **NOTE**:]]
| - These steps apply to both Windows and Linux.

### **Using Docker**
1. Create a docker-compose.yml file in your project directory with the following content:

   ```yaml
     services:
        testsigma-tunnel:
        image: testsigmainc/testsigma-tunnel:<arm64/amd64>-latest
        container_name: testsigma-tunnel
        environment:
             - KEY=<API_KEY>
             - TUNNEL_NAME=<NAME_OF_TUNNEL>
             - CONNECTIONS=<NUMBER>
             - INACTIVE_TIMEOUT=<NUMBER in seconds>
             - VERBOSE=true/false
   ```

2. Replace the placeholder values in the docker-compose.yml file:
   - **&lt;API\_KEY&gt;:** Your Testsigma authentication key.
   - **&lt;NAME\_OF\_TUNNEL&gt;:** The name of your tunnel.
   - **&lt;NUMBER&gt;:** The number of connections to establish.
   - **&lt;NUMBER in seconds&gt;:** The inactive timeout duration.
   - **true/false:** Set to ***true*** for verbose logging or ***false*** to disable it.

3. Run the following command to start the Testsigma Tunnel service: <br>
   ```docker compose up -d```

4. Once the service is running, logs will indicate that **Testsigma Tunnel** is active. Use the tunnel name for your automation tests.

5. To stop the service, use the following command: <br>
   ```docker compose down```

---

## **Using Testsigma Tunnel** 

To use Testsigma Tunnel in your tests, you need to pass the tunnel name as a capability. Follow the steps below:

### **For Test Automation:**

1. In the test case details page, click **Run** on the top right corner. 

2. In the **Ad-Hoc Run** overlay, select **Test Lab**, **Test Machine**, and click **Desired Capabilities**.

3. Enter the following:
   
   |**Key**|**Data Type**|**Value**|
   |---|---|---|
   |**testsigmaLab.&lt;tunnelName&gt;**|String|&lt;tunnelName&gt;|

   ![Tunnel DC](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Tunnel_DC.png)


### **For Live Testing REST API:**

1. Open the **REST API** Step.

2. Go to **Settings**.

3. Enter the **Testsigma Tunnel Name** in the **Tunnel Name** field.

![Using Tunnel in API](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Testsigma_Tunnel_API.png)


[[info | **NOTE**:]]
| If the REST API test is saved with the tunnel name, it will be used for automation unless overridden by the **testsigmaLab.tunnelName** capability in the run form.


---