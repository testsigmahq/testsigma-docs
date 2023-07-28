---
title: "Monday.com"
page_title: "monday.com"
metadesc: "Monday.com integration helps you in creating issues in Monday.com from the Testsigma. Learn how to integrate Testsigma with Monday.com for real-time bug reporting"
noindex: false
order: 16.38
page_id: "monday.com"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Integrating monday.com with Testsigma"
  url: "#integrating-mantis-with-testsigma"
- type: link
  name: "Creating a bug"
  url: "#creating-a-bug"
---

---
Testsigma monday.com integration helps you in creating issues in monday.com directly from the Testsigma app. With simple one-click integration, you can push annotated issues to monday.com while in the middle of a test session. The fields populated by you when marking as a bug through Testsigma are displayed as information on the monday.com ticket for a testing instance.<br>

The following article discusses how to establish Integration with monday.com from your Testsigma account. <br>

To integrate monday.com with Testsigma, you need the following information from your monday.com account.
* Account URL - Your organization’s monday.com account URL
* API Key - Find your monday.com API Token.<br>

## **Steps to integrate monday.com with Testsigma**
1. Navigate to **Settings > Plugins**.
![Navigate to Plugins](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/navigate_plugins.png)<br>
2. Click on the **Disabled** icon on the **monday.com** widget.
![Enable plugin](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/enable_monday_plugin.png)<br>
3. On the **monday.com Details** pop-up window, 
    - Enter the following details- 
        - Account URL 
        - API Key 
    ![Clink on create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/click_on_create.png)
    - Click on **Create**.

## **Creating a bug**
1. Navigate to **Test development > Run results > View reports**.
![View Reports](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/runresults_page_monday.comintegration.png)
2. Click on the test case you want to report the bug.
![Test case](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/testcase_resultpage.png)
3. Click on **Report Bug**.
![Click on Report bug](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/click_on_reportbug.png)
4. On the **Report Bug** dialog,
    - Choose **monday.com** and **Save** to create a new Issue.
    ![Report bug dialog](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/save_bugreport.png)
[[info | **NOTE**:]]
|Only the bug reporting tools that have been enabled via the plugins page will be displayed here.
    - Click on the **Link to Issue** to link to an existing issue on **monday.com**.
    ![Link to issue](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/linkissue_monday.com.png)
    - In the dropdown menu, select the issue you want to link to.
    ![Drop down menu](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/DD.png)
