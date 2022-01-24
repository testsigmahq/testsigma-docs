---
title: "Troubleshooting Agent Startup/Registration Errors"
metadesc: "Common Agent startup or registration issues and how to troubleshoot them."
order: 11.91
page_id: "Troubleshooting Agent Startup/Registration Errors"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Troubleshooting URLs and Port Numbers"
  url: "#troubleshooting-urls-and-port-numbers"
- type: link
  name: "Common causes of Agent startup, register and auto-update Errors"
  url: "#common-causes-of-agent-startup-register-and-auto-update-errors"
- type: link
  name: " "
  url: " "

---

---

If  the Agent is not starting, or is starting and terminating immediately, please check the Agent logs for the root cause. See [How to get Agent Logs](https://testsigma.com/docs/agent/troubleshooting/logs/) for the error. If you need some help understanding the error from the logs, please [contact Support](mailto:support@testsigma.com).

<br>
---
##**Troubleshooting URLs and Port Numbers**

Default HTTP Port - 8080<br>
Default HTTPS Port - 8443<br>
Once the Testsigma Agent is started, Testsigma Agent Web UI is accessible at 

Once the Testsigma Agent is started, Testsigma Agent Web UI is accessible at<br>
   http://localhost:8383/agent (HTTP) 
OR
   https://local.testsigmaagent.com:8484/agent/ (HTTPS)

<br>
---
##**Common causes of Agent startup, register and auto-update Errors**
Here’s how you can troubleshoot the Agent startup Error yourself:

**1. Port not available**

Check with your IT team to see if the ports 8080, 8383, 8443, and 8484 are free. They might be already in use by some other software running on those ports. Testsigma Agent needs these ports to be free to run successfully.

You may use the below commands in Terminal for Linux/Unix: **lsof -i :8080**<br>
Try the same command with the other port numbers given above.

For Windows, try the below command in Powershell: Get-Process -Id<br>
**(Get-NetTCPConnection -LocalPort 8080).OwningProcess**

Try the same command with the other port numbers given above.

If any of the ports are in use, check with your IT Team. Else, proceed to the next step.

<br>

**2. Unable to register**

Try accessing the below localhost URLs after starting the agent<br>
[http://localhost:8383/agent](http://localhost:8383/agent)<br>
[https://local.testsigmaagent.com:8484/agent](https://local.testsigmaagent.com:8484/agent)<br>

The reason behind doing so is to understand if the agent is accessible and has all permission from the system administrator.

If this is not accessible, it indicates that there is some hindrance in the system like firewall blocks or certain antivirus blocking the access. In such conditions, you may contact your IT  Team for help.

If the above pages are accessible, proceed to the next step.

<br>

**3. Certificate Errors**

This error on the Agent logs will also help you understand there is a firewall blockage from your network side:

---

javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed:  
sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested     	target
at java.base/sun.security.ssl.Alerts.getSSLException(Alerts.java:198)
at java.base/sun.security.ssl.SSLSocketImpl.fatal(SSLSocketImpl.java:196

---

**4. Permission Issues**

Sometimes while trying to register the Testsigma Agent, we might face errors due to our system's security settings. 

  **For Mac**

  This usually happens when your system's privacy settings don’t "Allow apps downloaded from App Store and Identified developers".

  Navigate to your privacy **settings - Apple menu > System Preferences > click Security & Privacy > click General.**

  Once you are in the General Tab, change the privacy settings to "Allow apps downloaded from App Store and Identified developers" after giving the system's credentials.


  **For Windows**

  Search for Allowed apps settings in the search box

  Once you are in the Allowed Apps, change the privacy settings to "Allow apps downloaded from App Store and Identified developers" after giving the system's credentials.

Try the agent registration process once after restarting the agent again. If the issue is still not resolved, proceed to the next step.

<br>

**5. Used Ports**

While registering an Agent, try changing the HTTP port to 8081 and HTTPS port to 8444. This will use the given ports to register the Agent and thereby allow the Agent to be registered successfully if the default ports 8080 and 8443 are already in use.

If the issues persist, please contact Testsigma support. While contacting the Testsigma Support team, please provide Agent logs files. See [How to get Agent Logs](https://testsigma.com/docs/agent/troubleshooting/logs/).

