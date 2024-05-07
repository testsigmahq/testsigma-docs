---
title: "Fix Testsigma Agent Registration Failures"
page_title: "Fix Testsigma Agent Registration Failures"
metadesc: "Know the possible reasons why Testsigma agent registration fails due to privacy settings and learn steps to fix the issue by following the troubleshooting steps"
noindex: false
order: 23.35
page_id: "Fix Testsigma Agent Registration Failures"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Troubleshooting Steps for Privacy Settings"
  url: "#troubleshooting-steps-for-privacy-settings"
- type: link
  name: "Troubleshooting Steps for IP Conflicts"
  url: "#troubleshooting-steps-for-ip-conflicts"
---


---

Sometimes while trying to register the Testsigma Agent from the Agents section, we might face errors due to our system's privacy settings and IP conflicts. This article discusses troubleshooting steps for Testsigma Agent registration failures. 


---

## **Troubleshooting Steps for Privacy Settings**

### **Error:**
![Agent Fails](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/tsagentfails.png)

### **Solution:**
1. Navigate to **Privacy Settings** on your system. 

    - **For Mac:** Menu > System Preferences > Security & Privacy > General
  
    - **For Windows:** Search for **Allowed apps settings** in the search box.

2. Change the privacy settings to **Allow apps downloaded from App Store and Identifies developers** after giving the system's credentials.

![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/gsetapltsf.png)

---


## **Troubleshooting Steps for IP Conflicts**

### **Error:**

```
SEVERE [main] org.apache.catalina.core.StandardServer.await StandardServer.await: create[localhost:8005]: 
java.net.BindException: Cannot assign requested address: JVM_Bind
```

This usually happens when Apache Tomcat cannot assign the requested address for the socket. A common cause of this issue is IP Conflict due to inconsistency in the system's host file.

### **Solution:**

1. Backup the existing hosts file.

2. Open the hosts file using a text editor with admin privileges.

3. Check if there are multiple IP Addresses bound to the **localhost** i.e multiple lines with the text **localhost** in it. The following default entries are permissible and can be neglected.

```
127.0.0.1     localhost
::1    localhost
```

4. If there are additional lines containing the **localhost** part, please comment those lines by putting a '#' in the beginning of the lines and save the file.

5. Try starting the Testsigma Agent again. If the error is resolved, please contact your **System/Network Administrator** to confirm if the commented line is relevant. If not, you may remove the line or keep it commented.


---