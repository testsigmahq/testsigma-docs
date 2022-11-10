---
title: "Troubleshooting Agent startup and registration errors"
metadesc: "Common Agent startup or registration issues and how to troubleshoot them."
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


---

---

If  the Agent is not starting, or is starting and terminating immediately, see the Agent logs for details.  *For more information refer to, [fetching Agent logs](https://testsigma.com/docs/agent/troubleshooting/logs/)*. If you need some help understanding the error from the logs, reach out to [support](mailto:support@testsigma.com).<br>
The below sections discusses common errors and troubleshooting suggestions:
<br>

---

## **1. Port not available**

The ports required for Testsigma agent to run smoothly are 8080, 8383, 8443, and 8484.The default HTTP port is 8080 and default HTTPS port is 8443. If these ports are unavailable Testsigma automatically detects the next available ports.  You can manually check the availability of the ports using the below commands:

**Linux**<br>
Use the below command in terminal for Linux/Unix<br>
`lsof -i :8080`<br>
Try the same command with the other port numbers given above.

**Windows**<br>
For Windows, try the below command in Powershell:<br>
`Get-Process -Id`
<br>
`(Get-NetTCPConnection -LocalPort 8080).OwningProcess`
<br>Try the same command with the other port numbers given above.

If the default ports 8080 and 8443 are already in use, try changing the HTTP port to 8081 and HTTPS port to 8444 to register the Agent.
&nbspIf no ports are available,check with your IT team to see if they might be already in use by some other software.
<br>

## **2. Unable to register**

Once the Testsigma Agent is started, Testsigma Agent web UI is accessible at

- <http://localhost:8383/agent> (HTTP) OR
- <https://local.testsigmaagent.com:8484/agent/> (HTTPS).

Try accessing the above localhost URLs after starting the agent.

The reason behind doing so is to understand if the agent is accessible and has all permission from the system administrator.

If this is not accessible, it indicates that there is some hindrance in the system like firewall blocks or certain antivirus blocking the access. In such conditions, you may contact your IT  Team for help.

If the above pages are accessible, proceed to the next step.

<br>

## **3. Certificate errors**

This error on the Agent logs will also help you understand there is a firewall blockage from your network side:

```

javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed:  
sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested      target
at java.base/sun.security.ssl.Alerts.getSSLException(Alerts.java:198)
at java.base/sun.security.ssl.SSLSocketImpl.fatal(SSLSocketImpl.java:196

```

<br><br>

## **4. Permission issues**

Sometimes while trying to register the Testsigma Agent, we might face errors due to our system's security settings. This usually happens when your system's privacy settings do not *Allow apps downloaded from App Store and Identified developers*. Follow the below steps to troubleshoot the errors.

  **Mac**

  1. Navigate to your **Privacy settings** :<br> **Apple menu > System Preferences > click Security & Privacy > click General**.
  2. Under the **General** tab, change the privacy settings to *Allow apps downloaded from App Store and Identified developers* after giving the system's credentials.

  **Windows**

  1. Search for **Allowed apps** settings in the search box.
  2. Once you are in the **Allowed Apps**, change the privacy settings to **Allow apps downloaded from App Store and Identified developers** after giving the system's credentials.

Try the agent registration process once again after restarting the agent. 



<br>

##**5. Agent out of sync**

Follow the below steps to fix the issue.

1. Refresh the Testsigma app.
2. Restart the Agent.
3. If the Agent is not updated, update the Agent. *For more information, refer to [update Agents](https://testsigma.com/docs/agent/update-agent-manually/)*.

If the above troubleshooting steps does not resolve the issue, contact Testsigma support with the Agent logs files.

---

