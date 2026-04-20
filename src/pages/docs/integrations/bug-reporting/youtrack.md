---
title: "Youtrack Bug Reporting Integration"
page_title: "Youtrack Bug Reporting Integration in Testsigma"
metadesc: "How to integrate Testsigma with Youtrack for real-time bug reporting during Test Runs | Push bugs directly from Testsigma to your YouTrack's project"
noindex: false
order: 16.35
page_id: "youtrack-bug-reporting-integration"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create API Token in Youtrack"
  url: "#steps-to-create-api-token-in-youtrack"
- type: link
  name: "Integrating YouTrack with Testsigma"
  url: "#integrating-youtrack-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---

---

You can integrate Testsigma with YouTrack to push bugs directly to YouTrack's project. You can also capture screenshots, annotate bugs, and share them with your team. In this document, we will discuss how to integrate Youtrack with Testsigma and also how to create the first bug from Testsigma which can flow into Youtrack.

---
> <p id="prerequisites">Prerequisites</p>
> 
> To integrate Youtrack with Testsigma, you need the following:
>    - **Account URL:** Your organization’s Youtrack Account URL.
>    - **API Key:** API Token from Youtrack. 

---

## **Steps to Create API Token in Youtrack**
1. Navigate to **Youtrack Profile**.
![Youtrack Profile](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ytprofile.png)

2. Go to **Account Security** and click on **New Token**.
![New Token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ytnewtoken.png)

3. On **New Permanent Token**, enter **Name**, **Scope** and click on **Create**.
![Permanent Token](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ytpermnewtoken.png)

4. Click on **Copy Token**. 
![Copy Tocken](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Copytkenyt.png)

Now you’re ready to integrate Youtrack with Testsigma. 

---
## **Integrating Youtrack with Testsigma**

1. Navigate to **Settings > Integrations**.
![Integrations](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_youtrack_1.png)

2. Enable toggle on **Youtrack** widget.
![Youtrack Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_youtrack_2.png)

3. On **Youtrack Details** prompt, enter **Organization URL**, **Access Key** and click **Save & Enable**.
![Youtrack Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_youtrack_3.png)

---

## **Creating a Bug**

1. Navigate to **Run Results > Test Case Result**, where you want to add a bug.
![Run Results](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_youtrack_4.png)

2. Click on **Report Bug**.
![Report Bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_youtrack_5.png)

3. In the **Report** overlay, click on the **Youtrack** icon.
![Youtrack Icon](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_youtrack_6.png)

4. In the **Report** overlay, review the details and click **Report Bug**.
![Create New Issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_youtrack_7.png)

[[info | **NOTE**:]]
| If you want to link to an existing issue on **Youtrack**, click the **Link to Issue** tab, search for an existing issue in the search field and click on **Link To Ticket** to add a link to an existing Issue.
|![Link to New Issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/integrations/update_youtrack_8.png)

---