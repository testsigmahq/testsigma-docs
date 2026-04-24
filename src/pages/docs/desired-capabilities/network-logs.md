---
title: "Network Logs"
page_title: "Network Logs: Analyse Application Network Activity"
metadesc: "Explore comprehensive network log features for insightful test execution analysis. Capture, analyse, and debug network interactions seamlessly."
noindex: false
order: 16.92
page_id: "network-log-management"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"  
- type: link
  name: "Enable Network Logs in Test Case"
  url: "#enable-network-logs-in-test-case"
- type: link
  name: "Enable Network Logs in Test Plan"
  url: "#enable-network-logs-in-test-plan"  
- type: link
  name: "Network Log Management"
  url: "#network-log-management"
---

---

Testsigma allows you to capture and analyse network traffic during test execution with its network log feature. Enabling the network log provides valuable insights into the interactions between your application and the server, helping you debug issues related to network requests and responses. <br>

This documentation will guide you on how to enable the network log in Test Case and Test Plan, access, view the status, and download network logs in the ad-hoc run page and the run test case page.

---

> #<p id="prerequisites">Prerequisites</p>
> 
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating projects](https://testsigma.com/docs/projects/overview/).
> 2. [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/).
> 3. [Documentation on creating test plans](https://testsigma.com/docs/test-plans/overview/).
> 4. [Documentation on creating Ad-Hoc runs](https://testsigma.com/docs/runs/adhoc-runs/).
> 5. [Documentation on creating test machines](https://testsigma.com/docs/test-plans/manage-test-machines/). 

[[info | Note:]]
| By default, Network Log is enabled for Web and Mobile Web applications, but for Android and iOS applications, you need to enable it manually.


---

## **Enable Network Logs in Test Case**

1. Click **Run** at the top-right corner of the Test Case details page.
![Run](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_1.1.png)

2. In the **Ad-hoc Run** overlay, select **BrowserStack** as **Test Lab**.
![BrowserStack](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_2.png)

3. Enable the **Network Log** toggle, and click **Run Now** to start test execution. 
![Enable Network Log in Test Case](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_3.png)

---

## **Enable Network Logs in Test Plan**

1. Navigate to the **Add Test Suites & Link Machine Profiles** tab on the **Create** or **Edit Test Plan** page.
![Edit Test Plan](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_4.png)

2. Click the **Test Machine Settings** icon, and the **Add** or **Edit test machine/device profile** overlay will appear.
![Test Machine Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_5.png)

3. In the **Add** or **Edit test machine/device profile** overlay, select **BrowserStack** as **Test Lab**.
![BrowserStack](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_6.png)

4. Enable the **Network Log** toggle, and click **Create/Update Profile**. 
![Network Logs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_7.png)

---

## **Network Log Management**

After completing the test execution on the Run Test Case Page, you should follow these steps to access and analyse the captured network logs:

1. Click the **Show Logs** button in the Run Results page. This opens the **Logs** page. 
![Logs](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_8.png)

2. The Logs page provides a centralized view where you can access **Appium**, **Device**, and **Network** logs helping you monitor different parts of test execution in one place.
![Network](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_9.png)

3. Click **Download log file** at the top-right corner of the **Logs** screen to retrieve the network log file in **HAR** format. You can then analyse the network logs offline. 
![Download log file](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/update_network_logs_10.png)

---
