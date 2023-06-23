---
title: "Network throttling"
metadesc: "Network throttling is an intentional slowing down of internet speed. Learn how to enable and use Network Throttling feature in Testsigma"
noindex: false
order: 15.91
page_id: "Network Throttling"
search_keyword: "Network Throttling"
warning: false
---

---
<p><em>Network throttling</em> is an intentional slowing down of internet speed. It is used to simulate user experience under low bandwidth conditions. This is useful from a testing perspective as developers and quality analysts get an understanding of how the website loads and functions when accessed from different network environments, especially environments wherein poor network speed is experienced.

This article demonstrates the method to enable the network throttling feature, with which testers can simulate poor network conditions while testing web applications using Testsigma.

The following profile options can be used to simulate various network conditions for your test:
</p>
<style>
   table {
  border-collapse: collapse;
  width: 100%;
  }
  }
 </style>
<table>
  <tr>
    <th style="background-color:#ADD8E6">Profile</th>
    <th style="background-color:#ADD8E6">Upload speed</th>
    <th style="background-color:#ADD8E6">Download speed</th>
    <th style="background-color:#ADD8E6">Latency</th>
  </tr>
  <tr>
    <td>Regular 2G</td>
    <td>6.25 kbps</td>
    <td>31.25 kbps</td>
    <td>300ms</td>
  </tr>
  <tr>
    <td>Good 2G</td>
    <td>18.75 kbps</td>
    <td>56.25 kbps</td>
    <td>150ms</td>
  </tr>
  <tr>
    <td>Regular 3G</td>
    <td>31.25 kbps</td>
    <td>93.75 kbps</td>
    <td>100ms</td>
  </tr>
  <tr>
    <td>Good 3G</td>
    <td>93.75 kbps</td>
    <td>192.00 kbps</td>
    <td>40ms</td>
</tr>
<tr>
    <td>Regular 4G(default)</td>
    <td>384.00 kbps</td>
    <td>512.00 kbps</td>
    <td>20ms</td>
</tr>
</table>
</body>
To enable network throttling:

<ol>
<li>Navigate to <strong>Add-ons</strong> on the left panel of the Testsigma UI.</li>
<li>Select the add-on <strong>Network Throttling</strong> from the available list and click <strong>Install</strong>.</li>

![Network throttling add-on](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/desired-capabilities/network-throttling/network-throttling-addons.png)

<li>Navigate to <strong>Test Development</strong> on the left panel of the UI.</li>
<li>Under Design & Development section, select <strong>Test Cases</strong>.</li>

<li>Click on the test case from the available list of test cases, to apply the network throttling feature. This will take you to the test steps page. Optionally, you can create a new test case.</li>
<li>The way to introduce the network throttling in your test case, is by adding a new test step at the point from which you wish to simulate the network conditions. On that account, on the test steps page, hover the mouse over the test step you want to add the new test step.</li>
<li>Click <strong>+Add Step</strong> to add a new step to the test case.</li>

![Add-network-throttling-step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/desired-capabilities/network-throttling/add-step-network-throttling.png)

<li>Click on the text field. It will give you a dropdown list of several options.</li>
<li>Select the option, simulate network to <var>upload_speed</var> <strong>upload speed(kbps)</strong> <var>download_speed</var>    <strong>download speed(kbps)</strong> <var>latency_time</var> <strong>latency(ms)</strong>.</li>

![Simulate-network-throttling-step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/desired-capabilities/network-throttling/simulate-network-throttling-step.png)

<li>Remove the parameters <var>upload_speed</var>, <var>download_speed</var>, and <var>latency_time</var> and enter the appropriate values. <em>For more information on the parameter values of different network profiles, refer to the table above.</em></li>
<li>Click <strong>Create</strong>.<br>
You have now added the network throttling feature to your test case. With network throttling, you can change your network profile to test the functionality of your test cases while exposed to different network environments.
</li>
</ol>

Testsigma support <em>Network throttling</em> to test your apps and websites under various network scenarios.For more information, reach out to us at [support@testsigma.com](mailto:support@testsigma.com) or through our [support channel on Testsigma Discord](https://discord.com/invite/SjYKkSTUq9).

---
