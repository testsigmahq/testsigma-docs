---
title: "On-Premise: Troubleshooting"
order: 26.33
page_id: "On-premise setup prerequisites"
metadesc: "This guide will help you resolve issues while installing on-premise setup | Troubleshooting guide for general & network issues while installing Testsigma's on-premise"
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "General Issues"
  url: "#general-issues"
- type: link
  name: "Network Issues"
  url: "#network-issues"
---

---

This article provides troubleshooting guide for general and network issues related to accessing the on-premise domains. Follow these steps to quickly identify and resolve issues.

---

## **General Issues**

### **1. Application Not Accessible**

   ![IP List](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/OnPrem_Trobleshooting_IPList.png)

**Host Configuration:**
- Open the **/etc/hosts** file on the server using a text editor.
- Add the **&lt;system-Ip-address&gt; &lt;domain&gt;** mapping pairs. <br>
   
   **For Example:**
   ```yaml
   192.168.0.1 dev.testsigmaprivate.com
   192.168.0.1 dev-id.testsigmaprivate.com
   192.168.0.1 dev-addon.testsigmaprivate.com
   192.168.0.1 dev-visualtesting.testsigmaprivate.com
   192.168.0.1 dev-audit.testsigmaprivate.com
   192.168.0.1 dev-mobilerecorder.testsigmaprivate.com

- Save the changes and close the editor.

---

### **2. Server Refused to Connect:**

   ![Server Refused to Connect](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/OnPrem_Troubleshooting_Server_Refused.png)

**a. Check if the Server is Running:**
- Connect to the server machine.
- Navigate to the Testsigma installation folder.
- Check the Testsigma server status by running:
   - ***docker ps -a***
- Ensure all containers are Up.
  ![Servers Up](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/OnPrem_ServersUp.png)

**b. If Any Container is Shown as "Exited"**
- Get the logs of that container and check the reason for failure.
- Restart the exited containers by running:
   - ***docker compose up -d***

If you're still facing the issue, contact **support@testsigma.com**.

---

### **3. Checking the Logs of the Containers:**

- Choose the container name as mentioned in the image below:
  ![Check Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Onprem_Testsigma_Server.png)

- Execute the following command to check and print all the server logs in the command line:
   - ***docker logs -f testsigma-app-server***

- Press **CTRL + C** to exit the log view.

---

### **4. Sharing the Logs with the Testsigma Team:**

- Choose the container name as mentioned in the image below:
  ![Check Logs](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Onprem_Testsigma_Server.png)

- Execute the following command to copy the logs from the container to the server by replacing **&lt;destination_location&gt;** with the desired directory path on the server:
   - ***docker cp testsigma-app-server:/opt/logs <destination_location>/***

- Pull the Logs from the Server Machine and send the logs to **support@testsigma.com** for further help.

---

## **Network Issues**

**1. Associated IP List**

**Retrieve the IP Address:**

- Use the dig command to find the IP address associated with the domain: <br><br>
  **For Example:** ```dig app-testsigma.de.youcompany.com```
  ![IP Address](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IPListOnprem.png)

- Alternatively, you use the **nslookup** command: <br><br>
  **For Example:** ```dig app-testsigma.de.youcompany.com```
  ![IP Address from NS Lookup](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/IPListNSLookUPOnprem.png)


---

**2. Check the Connection**
- Use the **nc -vz &lt;ip-address&gt; 443** command to check the connection to the retrieved IP address on port 443:<br><br>

  **For Example:** ```nc -vz 18.215.41.231 443``` <br><br>
  ![Check Connection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/OnpremConnection.png)

   This command will confirm if the connection to the specified IP address and port is successful.


**3. Curl Check**
- Use the curl command to check the HTTP response from the IP address:<br>

   ```
   curl -H "Host: http://app-testsigma.de.bosch.com" http://<ip-address>:<port>/
   ``` 
   <br>

    **For Example:** <br><br>
    ```curl -H "Host: http://app.testsigma.com" http://52.1.167.174:80/```

    ![CURL Check](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/OnpremCURLcheck.png)

---