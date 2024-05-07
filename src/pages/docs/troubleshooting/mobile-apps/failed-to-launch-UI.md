---
title: "Mobile app keeps stopping after successful launch"
metadesc: "Know why your mobile app keeps stopping after a successful launch. Learn effective troubleshooting methods to fix the issue if your mobile app keeps stopping."
noindex: false
order: 23.64
page_id: "Mobile app keeps stopping after successful launch "
warning: false
---
<br>

<p>
In some instances, an app may force close or stop responding frequently while executing test cases on the cloud platforms as shown in the screenshot below:</p>
<img style="border: #D3D3D3 1px outset; width:300px;height:500px;" src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/troubleshooting/mobile-apps/failed-to-launch-UI/app_failure_message_2.png" alt="Application keeps stopping">
This may be due to the presence of security controls and capabilities in the application like: 
<ul>
<li>No spoofing of network logs</li>
<li>No spoofing of camera</li>
</ul>
</p>

But while executing test cases, Testsigma enables these capabilities by default. <br>


Refer to the below table to know more about the capabilities and its functions.
<style>
   table {
  border-collapse: collapse;
  width: 100%;
  }
 </style>
<table>
  <tr>
    <th style="background-color:#ADD8E6">Capability</th>
    <th style="background-color:#ADD8E6">Function</th>
  </tr>
  <tr>
    <td><kbd>testsigma.cameraImageInjection</kbd></td>
    <td>Enabled to collect and view network logs for your test session</td>
</td>
  </tr>
  <tr>
    <td><kbd>testsigma.networkLogs</kbd></td>
    <td>Enabled to allow testsigma to spoof camera usage and inject images for scanning or uploading via the camera application.</td>
  </tr>

  <tr>
    <td><kbd>testsigma.allowTouchIdEnroll</kbd></td>
    <td>Enabled to allow the interception of biometric input, allowing the test to simulate Touch ID interactions</td>
  </tr>
  <tr>
    <td><kbd>testsigma.resigningEnabled</kbd></td>
    <td>Enabled to allow you to sign your app using your own provisioning profile.</td>
  </tr>
</table>
</body> 
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
|If you choose to disable the capability <kbd>testsigma.cameraImageInjection</kbd>, you will not be able to use the NLP for image injection. *For more information, refer to [Image injection](https://testsigma.com/docs/test-cases/image-injection/)*.


If the issue persists, contact our [support](mailto:support@testsigma.com) team.

