---
title: "Why Mobile App Keeps Stopping After Successful Launch?"
metadesc: "Know why your mobile app keeps stopping after a successful launch. Learn effective troubleshooting methods to fix the issue if your mobile app keeps stopping."
noindex: false
order: 23.64
page_id: "mobile-app-keeps-stopping-after-successful-launch"
warning: false
---
<br>

<p>
In some instances, an app may force close or stop responding frequently while executing test cases on the cloud platforms as shown in the screenshot below:</p>
<img style="border: #D3D3D3 1px outset; width:300px;height:500px;" src="https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/body> 
<br>

To disable the above capabilities, set the following values to false under the desired capabilities section. <em>For more information, refer to <a href="https://testsigma.com/docs/desired-capabilities/overview/">adding desired capabilities</a></em>.

<style>
   table {
  border-collapse: collapse;
  width: 100%;
  }
 </style>
<table>
  <tr>
    <th style="background-color:#ADD8E6">Key</th>
    <th style="background-color:#ADD8E6">Data Type</th>
    <th style="background-color:#ADD8E6">Value</th>
  </tr>
  <tr>
    <td><kbd>testsigma.cameraImageInjection</kbd></td>
    <td>boolean</td>
    <td><kbd>false</kbd>
</td>
  </tr>
  <tr>
    <td><kbd>testsigma.networkLogs</kbd></td>
    <td>boolean</td>
    <td><kbd>false</kbd></td>
  </tr>

  <tr>
    <td><kbd>testsigma.allowTouchIdEnroll</kbd></td>
    <td>boolean</td>
    <td><kbd>false</kbd></td>
  </tr>
  <tr>
    <td><kbd>testsigma.resigningEnabled</kbd></td>
    <td>boolean</td>
    <td><kbd>false</kbd></td>
  </tr>
</table>
</body>

[[info | NOTE:]]
|If you choose to disable the capability <kbd>testsigma.cameraImageInjection</kbd>, you will not be able to use the NLP for image injection. *For more information, refer to the [documentation on using image injection](https://testsigma.com/docs/test-cases/image-injection/)*.


If the issue persists, contact our [support](mailto:support@testsigma.com) team.

