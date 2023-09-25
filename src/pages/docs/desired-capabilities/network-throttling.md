---
title: "Network Throttling"
metadesc: "Network throttling is an intentional slowing down of internet speed. Learn how to enable and use Network Throttling feature in Testsigma"
noindex: false
order: 15.91
page_id: "Network Throttling"
search_keyword: "Network Throttling"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Available Network Conditions"
  url: "#available-network-conditions"
- type: link
  name: "Steps to Enable Network Throttling"
  url: "#steps-to-enable-network-throttling"
- type: link
  name: "Using Network Throttling Feature in Test Cases"
  url: "#using-network-throttling-feature-in-test-cases"
---

---

Network throttling is an intentional slowing down of internet speed. It is used to simulate user experience under low bandwidth conditions. It also helps you understand how the website loads and functions when accessed from different network environments, especially environments wherein poor network speed is experienced. This article discusses how to enable the network throttling feature in Testsigma.

---

## **Prerequisites**
- You should be familiar with [Testsigma Addons](https://testsigma.com/docs/addons/what-is-an-addon/).

---

## **Available Network Conditions**
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

---

## **Steps to Enable Network Throttling**
1. Click on **Addons** from Dashboard.
![Addons](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ntaddonbutton.png)

2. Select **Network Throttling** and click on **Install**.
![Network Throttling](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ntaddon.png)

Here's a quick GIF demonstrating how to install Network Throttling addon in Testsigma.
![Network Throttling Addon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ntaddonGIF.gif)

---

## **Using Network Throttling Feature in Test Cases**
1. Navigate to **Create Tests > Test Cases**.
![Test Case List Page](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/nttcs.png)

2. Create a test case or click on an existing test case for which you want to add **Network Throttling** feature.

3. You can add the **Network Throttling** feature in your test case by adding a new test step at the point where you wish to simulate the network conditions.

4. Click on **Step Above**.
![Test Step](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/stepabovent.png)

5. Create a step with the NLP, *Simulate network to upload_speed upload speed(kbps) download_speed download speed(kbps) latency_time latency(ms)*.
![NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/simulateNLP.png)

6. You have now added the network throttling feature to your test case. With network throttling, you can change your network profile to test the functionality of your test cases while exposed to different network environments.
![NLP Added](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/addedNLPnt.png)

Here's a quick GIF demonstrating how to use Network Throttling in Test Cases.
![Use Case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ntusecasegif.gif)

---