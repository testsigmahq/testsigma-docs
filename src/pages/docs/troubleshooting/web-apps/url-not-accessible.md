---
title: "Unable to Access URL from Testsigma Servers?"
metadesc: "Learn the procedure to access URLs from Testsigma Servers. This guide covers the steps for accessing the URL if the given URL is somehow inaccessible."
noindex: false
order: 23.3
page_id: "Unable to Access URL from Testsigma Servers?"
warning: false
---

---

If your given website URL is somehow inaccessible, try the following before proceeding further:
 
1. If there is an issue in the URL, for example, HTTP instead of HTTPS or / instead of //, please verify your URL by running it on a browser. 
2. Copy & Paste the URL in the browser's address bar(open browser in incognito mode) and verify that the site is accessible from your workstation.
3. Ensure the URL is written correctly in your test case.
4. Make note of any VPN connections that are required to run this application.


Before proceeding, see whether:
* Your application/website is currently under development.
* Your application/website is currently hosted on your personal machine?
* Your application/website is hosted on a company server that cannot be accessed by external users on the internet.
* Your application requires VPN access for a secure connection.

In the above scenarios, Testsigma's cloud servers will not be able to access the website/application and you will have to follow one of the options [listed here](https://testsigma.com/docs/runs/test-locally-hosted-applications/) to automate testing for these applications.
 
Follow these steps to automate locally hosted applications:
1. If your application is deployed only on your local machine and is not publicly accessible, for example, http://localhost:8080 -> This is a locally hosted application. No one else can access it via the internet.  See how to run your tests on locally hosted applications. [Dry Runs on Local Devices](https://testsigma.com/docs/runs/dry-runs-on-local-devices/), [Test Plans on Local Devices](https://testsigma.com/docs/runs/test-plans-on-local-devices/).
2. If your application is behind a firewall, you still have an option to use tunneling mechanisms to connect your application to Testsigma. [Refer this document to learn more about other options](https://testsigma.com/docs/runs/test-locally-hosted-applications/). To do this, first, contact your IT team and then contact Testsigma Support. For more details on how to access local URLs via Testsigma, please contact Testsigma Support at [support@testsigma.com](mailto:support@testsigma.com) or the [Support channel on Testsigma Discord](https://discord.com/invite/SjYKkSTUq9).


If you are not able to access URL's from using the extension, you may have one of the below issues 

**What to do for chrome extension error “ Not able to record as third-party cookies are blocked by the browser” ?**

Go to this URL in Chrome chrome://settings/cookies and select “Allow all cookies” or “Block third-party cookies incognito” , you should not see this error post this.
[![Watch the video] <iframe src="https://docs.testsigma.com/videos/url-not-accesible/Allow_cookies_or_Block_thirdparty_cookies.mp4" width="300" height="200"></iframe>

**What to do for chrome extensions error ” Not able to access local files and urls”?**

Please go to the following Extensions icon in chrome -> Manage Extenstion->On the Testsigma Extension -> Click on “Details” -> Toggle on “Allow access to File URL’s”
[![Watch the video]
<iframe src="https://docs.testsigma.com/videos/url-not-accesible/Local_File_access.mp4" width="300" height="200"></iframe>




