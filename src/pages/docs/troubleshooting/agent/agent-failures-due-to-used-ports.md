---
title: "Agent Startup Failure Due to Used Ports"
page_title: "Testsigma Agent Startup Failures"
metadesc: "Know the possible reasons why Testsigma Agent failed to start beacuse of used ports and learn steps to fix the issue by following the troubleshooting steps"
noindex: false
order: 23.33
page_id: "Testsigma Agent Startup Failure Due to Used Ports"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve"
  url: "#steps-to-resolve"
---

---

While initiating the Testsigma Agent with the startup script, you might encounter errors related to the Apache Tomcat Server startup. These errors often occur due to conflicts in port.


Here's an error message that looks similar:

```
SEVERE [main] org.apache.coyote.AbstractProtocol.init Failed to initialize end point associated with ProtocolHandler
["http-nio-8080"]
java.net.BindException: Address already in use
```

This is the most common issue when one of your application is already running on the same port that is required by Apache Tomcat (ports 8080, 8005, 8009).

---

## **Steps to Resolve**

### **1. Change the port Testsigma Agent uses to avoid conflict with other Apps.**

- Shutdown the **Testsigma Agent** server by running the ***shutdown.sh*** (shutdown.bat for Windows) file.

- Navigate to the **Apache Tomcat** working directory. 

- Open the ***server.xml*** file and find the port numbers mentioned above.

- Replace those with unused ports. We would suggest replacing those values with 8081,8006, and 8010, respectively.

- Restart the PC/Mac to restart the Apache server processes or services that might be running in the background.

- Restart the **Testsigma Agent** and use the updated port number.

### **2. Kill the application that's using the ports (8080, 8005, 8009)**

- **For Windows:**
    - Open CMD with admin privileges (Run as Administrator).
    - Find the process that's using the required port. Use the below command to find the processes running on port 8080:<br>
      ```netstat -ano | findstr :8080```
    - Find the PID for the process and send a kill signal with the following command:<br>
      ```taskkill /PID <typeyourPIDhere> /F```
    - Repeat the same command in step 2 and confirm that the result is empty.
    - Repeat the same steps for other ports 8005 and 8009.

- **For Mac:**
    - Open Terminal
    - Find the process that's running on the required port. Use the below command to find the processes using the port 8080:<br>
      ```netstat -anop | grep :8080```
    - Find the PID for the process and send a process termination signal using **pkill**:<br>
      ```pkill <typeyourPIDhere>```
    - Repeat the same command in step 2 and confirm that the result is empty. If the process is still present, use the below command to force kill using **kill**. <br>
      ```kill -SIGKILL <typeyourPIDhere>```
    - Repeat the same steps for other ports, 8005 and 8009.

---