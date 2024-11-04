---
title: "Troubleshooting Agent Startup & Registration Errors"
metadesc: "Common Agent startup or registration issues and how to troubleshoot them. Learn how to resolve issue if the Agent stops working, or is starts and terminating immediately"
noindex: false
order: 11.91
page_id: "Troubleshooting Agent Startup/Registration Errors"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Port not available"
  url: "#1-port-not-available"
- type: link
  name: "Unable to register"
  url: "#2-unable-to-register"
- type: link
  name: "Certificate errors"
  url: "#3-certificate-errors "
- type: link
  name: "Permission issues"
  url: "#4-permission-issues"

- type: link
  name: "Agent out of sync"
  url: "#5-agent-out-of-sync"

- type: link
  name: "Server connection failed"
  url: "#6-server-connection-failed"

- type: link
  name: "Proxy Error"
  url: "#7-proxy-error"


---

---

If  the Agent is not starting, or is starting and terminating immediately, see the Agent logs for details.  *For more information refer to, [fetching Agent logs](https://testsigma.com/docs/agent/troubleshooting/logs/)*. If you need some help understanding the error from the logs, reach out to [support](mailto:support@testsigma.com).<br>
The below sections discusses common errors and troubleshooting suggestions:
<br>

---

## **1. Port not available**

By default, Testsigma automatically detects the available ports.  If you encounter the error *Port not available* you can manually check the availability of the ports 8383 and 8484 using the below commands:

**Linux**<br>
Use the below command in terminal for Linux/Unix<br>
`lsof -i :8383`<br>
Try the same command with port numbers 8484 as well.

**Windows**<br>
For Windows, try the below command in Powershell:<br>
`Get-Process -Id`
<br>
`(Get-NetTCPConnection -LocalPort 8383).OwningProcess`
<br>Try the same command with the  port numbers 8484.

<br>If no ports are available,try the below steps to free up the ports
<br>

### **Windows**

1. Open CMD with Admin privileges (Run as Administrator).
2. Find the process that's using the required port. Use the below command to find the processes running on port 8383:<br>`netstat -ano | findstr :8383` <br>
You will see the following output:![process id](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/troubleshooting/setup-issues/agent_process_id.png)<br>The last field with the five-digit number is the Process ID(PID).
3. Now that we have got the PID for the process, we can send a kill signal.<br>`taskkill /PID typeyourPIDhere /F`<br>![kill process id](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/troubleshooting/setup-issues/kill_process_id.png) Once the port is free Testsigma automatically detects the available port.

4. If the Testsigma agent does not start immediately repeat the same command in *Step 2* and confirm the result is empty.
5. Try the above steps for port 8484 as well.


### **Linux and macOS**



 1. Open Terminal.
 2. Find the process that's running on the required port. Use the below command to find the processes using the port 8080: <br>`netstat -anop | grep :8383`<br>You will see the following output:![process id](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/agent/troubleshooting/setup-issues/linux_process_id.png)
 3. The second last field with 4/5 digits is the Process ID(PID) and the name after the '/' is the process name.
 4. Now that we have got the PID for the process, we can send a process termination signal using **pkill**<br> `pkill typeyourPIDhere`
 5. Repeat the same command in *Step 2* and confirm the result is empty. If the process is still present, use the below command to force kill using kill<br>`kill -SIGKILL typeyourPIDhere`
 6. Repeat the same steps for other ports 8484 as well.


---

## **2. Unable to register**

Once the Testsigma Agent is started, Testsigma Agent web UI is accessible at

- ```http://localhost:8383/agent``` (HTTP) OR
- ```https://local.testsigmaagent.com:8484/agent/``` (HTTPS).

Try accessing the above localhost URLs after starting the agent.

The reason behind doing so is to understand if the agent is accessible and has all permission from the system administrator. If this is not accessible, it indicates that there is some hindrance in the system like firewall blocks or certain antivirus blocking the access. In such conditions, you may contact your IT  Team for help.

If the above pages are accessible, proceed to the next step.


But if ```https://local.testsigmaagent.com:8484/agent/``` is unreachable but ```http://127.0.0.1:8383/agent/``` is reachable, the following entry needs to be added to hosts file:

`127.0.0.1    local.testsigmaagent.com`

### **Windows**

In Windows, the hosts file is located at <kbd>C:\Windows\System32\Drivers\etc\hosts</kbd>.

- Right click on **Notepad** in the **Start** menu and select **Run as Administrator**. This is crucial to ensure you can make the required changes to the file. Now click **File > Open** and browse to <kbd>: c:\Windows\System32\Drivers\etc\hosts</kbd>.


### **macOS and Linux**

On macOS and Linux, the host file is located at <kbd>/etc/hosts</kbd>. You may need superuser privileges (sudo) to edit this file.

1. Open Terminal. 
2. Type sudo nano /etc/hosts
3. When you’re done adding the entry, use **Ctrl + O** (followed by Enter) to save the file and then **Ctrl + X** to exit.<br>



---

## **3. Certificate errors**

This error on the Agent logs will also help you understand there is a firewall blockage from your network side:

```

javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed:  
sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested      target
at java.base/sun.security.ssl.Alerts.getSSLException(Alerts.java:198)
at java.base/sun.security.ssl.SSLSocketImpl.fatal(SSLSocketImpl.java:196

```


---


## **4. Permission issues**

Sometimes while trying to register the Testsigma Agent, we might face errors due to our system's security settings. This usually happens when your system's privacy settings do not *Allow apps downloaded from App Store and Identified developers*. Follow the below steps to troubleshoot the errors.

  **Mac**

  1. Navigate to your **Privacy settings** :<br> **Apple menu > System Preferences > click Security & Privacy > click General**.
  2. Under the **General** tab, change the privacy settings to *Allow apps downloaded from App Store and Identified developers* after giving the system's credentials.

  **Windows**

  1. Search for **Allowed apps** settings in the search box.
  2. Once you are in the **Allowed Apps**, change the privacy settings to **Allow apps downloaded from App Store and Identified developers** after giving the system's credentials.

Try the agent registration process once again after restarting the agent. 



---


## **5. Agent out of sync**

Follow the below steps to fix the issue.

1. Refresh the Testsigma app.
2. Restart the Agent.
3. If the Agent is not updated, update the Agent. *For more information, refer to [update Agents](https://testsigma.com/docs/agent/update-agent-manually/)*.

If the above troubleshooting steps does not resolve the issue, contact Testsigma support at [support@testsigma.com](mailto:support@testsigma.com) with the Agent logs files. *For more information on how to fetch agent logs refer to, [agent logs](https://testsigma.com/docs/agent/troubleshooting/logs/)*.


--- 


## **6. Server connection failed**

This occurs because Testsigma Agent cannot reach our servers.It might be due to connection issue or proxy errors. Ensure <kbd>app.testsigma.com</kbd> is reachable.


---

## **7. Proxy Error**


If a proxy is configured for your network, whitelist the domains <kbd>app.testsigma.com </kbd>and <kbd>local.testsigmaagent.com</kbd>.
<br>
If proxy configuration is added in your operating system settings and whitelisting <kbd>app.testsigma.com </kbd>and <kbd>local.testsigmaagent.com </kbd>in the system proxy settings does not work,
add the following parameter in a configuration file in TestsigmaAgent installation directory.<br>

### **Windows**:


Add <kbd>wrapper.java.additional.9=-Djava.net.useSystemProxies=true</kbd> 
at the end of *Java Additional Parameters* section in <br>
`<INSTALLATION-FOLDER>/wrapper/conf/wrapper-script-custom.conf`

- If Agent is installed using **.exe** file, \<INSTALLATION-FOLDER> is by default at <kbd>C:\Testsigma\TestsigmaAgent</kbd>.<br>

- If Agent is extracted from ZIP file, \<INSTALLATION-FOLDER> is the folder into which ZIP is extracted.

### **macOS**


Add <kbd>wrapper.java.additional.9=-Djava.net.useSystemProxies=true<kbd> at the end of *Java Additional Parameters* section in `<INSTALLATION-FOLDER>/wrapper/conf/wrapper-custom.conf`


- If Agent is installed using DMG file, \<INSTALLATION-FOLDER> is by default at `/Applications/TestsigmaAgent.app/Contents/Resources/wrapper/conf`.
- If Agent is extracted from ZIP file, \<INSTALLATION-FOLDER> is the folder into which ZIP is extracted.


### **Linux**

Add <kbd>wrapper.java.additional.15=-Djava.net.useSystemProxies=true</kbd> at the end of Java Additional Parameters section in `<INSTALLATION-FOLDER>/wrapper/conf/wrapper-custom.conf`<br>

\<INSTALLATION-FOLDER> is the folder into which ZIP or bin is extracted.

---