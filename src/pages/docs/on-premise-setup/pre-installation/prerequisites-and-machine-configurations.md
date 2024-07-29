---
title: "Prerequisites for On-Premise Installation"
order: 26.12
page_id: "On-premise setup prerequisites"
metadesc: "This detailed guide will help you understand the prerequisites for Testsigma On-premise setup  | Know these details before getting started with Testsigma on-premise setup"
noindex: false
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Detailed Specifications & Pre-Checks"
  url: "#detailed-specifications--pre-checks"
---

---

Testsigma recommends hardware, software, and server specifications for smooth installation. This article provides these specifications, necessary dependencies, and pre-checks for installing Testsigma on-premises.


---

## **Detailed Specifications & Pre-Checks**

<table>
  <tr>
    <th>Requirements</th>
    <th>Details</th>
  </tr>
  <tr>
    <td colspan="2"><strong>Machine Specifications:</strong></td>
  </tr>
  <tr>
    <td><b>CPU</b></td>
    <td>16 Core</td>
  </tr>
  <tr>
    <td><b>RAM</b></td>
    <td>64 GB & above</td>
  </tr>
  <tr>
    <td><b>Storage</b></td>
    <td><b>Option 1:</b> 512GB - 2TB single storage<br><b>Option 2:</b> 256GB + 1TB & above mounted disk<br><br><b>Note:</b> For both storage options, scheduled image backups are recommended.</td>
  </tr>
  <tr>
    <td colspan="2"><strong>Database Requirements:</strong></td>
  </tr>
  <tr>
    <td><b>CPU</b></td>
    <td>4 Core</td>
  </tr>
  <tr>
    <td><b>RAM</b></td>
    <td>32 GB</td>
  </tr>
  <tr>
    <td><b>RDBMS</b></td>
    <td>MySQL</td>
  </tr>
  <tr>
    <td><b>Version</b></td>
    <td>8.0.x</td>
  </tr>
  <tr>
    <td colspan="2"><strong>Note:</strong> Testsigma provides a MySQL Docker container. If you want a hosted MySQL, ensure it meets the above specifications.</td> 
  </tr>
  <tr>
    <td colspan="2"><strong>Machine Configuration:</strong></td>
  </tr>
  <tr>
    <td><b>OS</b></td>
    <td>Install Ubuntu at the root with a 256GB machine.</td>
  </tr>
  <tr>
    <td><b>Additional Storage</b></td>
    <td>Mount a 2TB (or above, based on usage) hard disk for storage.</td>
  </tr>
  <tr>
    <td><b>Software Installation</b></td>
    <td>All required software will be installed at the root, with storage configurations set to utilize the mounted disk.</td>
  </tr>
  <tr>
    <td><b>Mount Point</b></td>
    <td>Mount the external disk at /data.</td>
  </tr>
  <tr>
    <td><b>File System</b></td>
    <td>You can choose any file system available based on expertise and requirements.</td>
  </tr>
  <tr>
    <td><b>Hard Disk Performance</b></td>
    <td>Improved using RAID configuration (optional).</td>
  </tr>
  <tr>
    <td colspan="2"><strong>Backup Recommendations:</strong></td>
  </tr>
  <tr>
    <td><b>Frequency</b></td>
    <td>Backup every 24 hours.</td>
  </tr>
  <tr>
    <td><b>Retention</b></td>
    <td>Maintain backups for 1 week.</td>
  </tr>
  <tr>
    <td><b>Cleanup</b></td>
    <td>Periodically clean up old data to maintain disk health and space. Additional hardware may be required for longer data retention, which can be attached to the existing mount point using LVM.</td>
  </tr>
  <tr>
    <td colspan="2"><strong>Note:</strong> Recommendations are subject to adjustment based on customer requirements, and installation costs may vary based on these adjustments.</td> 
  </tr>
  <tr>
    <td colspan="2"><strong>Pre-Checks:</strong></td>
  </tr>
  <tr>
    <td><b>Internet Connection</b></td>
    <td>Ensure an active internet connection to the server machine.</td>
  </tr>
  <tr>
    <td><b>Firewall Configuration</b></td>
    <td>If a firewall is enabled, whitelist the following domains: <br>*.docker.com<br>*.amazon.com<br>*.amazonaws.com<br>*.maven.org<br><br>For using Testsigma's mail service, whitelist *.sendgrid.com.</td>
  </tr>
  <tr>
    <td><b>Unblock Ports<b></td>
    <td>Unblock the following ports if they are blocked: 3307, 7010, 8080, 8082, 8084, 9090, 9095, 9096, 9097, 4201, 4203, 4211, 4230. <br><br>Testsigma services use these ports for internal communication. <b>(Details Below)</b></td>
  </tr>
  <tr>
    <td colspan="2"><strong>Ports Required by Testsigma Micro-Services:</strong></td>
  </tr>
  <tr>
    <td><b>testsigma_mysql</b></td>
    <td>3307</td>
  </tr>
  <tr>
    <td><b>testsigma_id_server</b></td>
    <td>8084, 9095</td>
  </tr>
  <tr>
    <td><b>testsigma_id_server_ui</b></td>
    <td>4203</td>
  </tr>
  <tr>
    <td><b>testsigma_app_server</b></td>
    <td>8080, 9096</td>
  </tr>
  <tr>
    <td><b>testsigma_groot_ui</b></td>
    <td>4211</td>
  </tr>
  <tr>
    <td><b>testsigma_addon_server</b></td>
    <td>8082, 9097</td>
  </tr>
  <tr>
    <td><b>testsigma_addon_server_ui</b></td>
    <td>4201</td>
  </tr>
  <tr>
    <td><b>testsigma_audit_server</b></td>
    <td>9090</td>
  </tr>
  <tr>
    <td><b>testsigma_audit_ui</b></td>
    <td>4230</td>
  </tr>
  <tr>
    <td><b>testsigma_visual_testing_server</b></td>
    <td>7010</td>
  </tr>
   <tr>
    <td colspan="2"><strong>Additional Requirements:</strong></td>
  </tr>
  <tr>
    <td><b>Agent Operating System<b></td>
    <td>Depending on user preference, the agent can run on Linux, Windows, or Mac machines.</td>
  </tr>
  <tr>
    <td><b>Final Storage Location</b></td>
    <td>The final storage location for screenshots, apps, and other permanent files is the host server where Testsigma containers run.</td>
  </tr>
  <tr>
    <td><b>Temporary Files</b></td>
    <td>Temporary files like screenshots may need periodic cleaning depending on usage and disk space availability.</td>
  </tr>
  <tr>
    <td><b>Windows Machines</b></td>
    <td>The server operation does not require any Windows machines.</td>
  </tr>
  <tr>
    <td><b>Data Backups</b></td>
    <td>Customer IT teams must regularly perform data backups through regular disk or specific data folder backups.</td>
  </tr>
  <tr>
    <td><b>Hypervisor-based Installation</b></td>
    <td>Testsigma On-Prem Server is not a hypervisor-based installation.</td>
  </tr>
  <tr>
    <td><b>Domain Name Customization<b></td>
    <td><li>By default, the customer would be provided URLs ending with testsigmaprivate.com (like https://cx.testsigmaprivate.com).</li> <br> If the customer desires to have these pointed to their domain name (like cx.com), then we need the following:<br>
    <li> Inform Testsigma before the On-prem build is generated.</li>
    <li> Get the SSL certificates of the domain in interest and copy them to the server where installation would happen.</li></td>
  </tr>
  <tr>
    <td><b>Testsigma Recorder Installation</b></td>
    <td>For installing Testsigma Recorder on Chrome browsers:<br>
    <li> We need the ability to enable developer mode and install the Testsigma recorder in unpacked mode.</li></td>
  </tr>
  <tr>
    <td><b>SMTP Settings</b></td>
    <td>Customers need to produce their SMTP settings in case they desire to use their internal SMTP instead of Testsigma SMTP servers.</td>
  </tr>
</table>



---