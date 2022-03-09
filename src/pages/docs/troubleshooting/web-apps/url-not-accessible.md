---
title: "Unable to Access URL from Testsigma Servers?"
metadesc: " How to handle the launching of URLs from your test cases to your web applications and  Local devices."
noindex: false
order: 23.3
page_id: "Unable to Access URL from Testsigma Servers?"
warning: false
---

---

If your given website URL is somehow inaccessible, try the following before proceeding further:
 
1. If there is an issue in the URL, for example, HTTP instead of HTTPS or / instead of //, please verify your URL by running it on a browser. 
2. Copy & Paste the URL in the browser's address bar and verify that the site is accessible from your workstation.
3. Ensure the URL is written correctly in your test case.
4. Make note of any VPN connections that are required to run this application.


Before proceeding, see whether:
* Your application/website is currently under development.
* Your application/website is currently hosted on your personal machine?
* Your application/website is hosted on a company server that cannot be accessed by external users on the internet.
* Your application requires VPN access for a secure connection.

In the above scenarios, Testsigma's cloud servers will not be able to access the website/application and you will have to follow one of the options [listed here](https://testsigma.com/docs/runs/dry-runs-on-local-devices/) to automate testing for these applications.
 
Follow these steps to automate locally hosted applications:
1. If your application is deployed only on your local machine and is not publicly accessible, for example, http://localhost:8080 -> This is a locally hosted application. No one else can access it via the internet. [See how to run your tests on locally hosted applications](https://testsigma.com/docs/runs/test-plans-on-local-devices/).
2. If your application is behind a firewall, you still have an option to use tunneling mechanisms to connect your application to Testsigma. To do this, first, contact your IT team and then contact Testsigma Support. For more details on how to access local URLs via Testsigma, please contact Testsigma Support at [support@testsigma.com](mailto:support@testsigma.com) or the [Support channel on Testsigma Discord](https://discord.com/invite/SjYKkSTUq9).


What to do for chrome extension error “ Not able to record as third-party cookies are blocked by the browser” ?
Go to this URL in Chrome chrome://settings/cookies and select “Allow all cookies” or “Block third-party cookies incognito” , you should not see this error post this.

What to do for chrome extensions error ” Not able to access local files and urls”?
Please go to the Extensions icon in chrome -> Manage Extenstion->On the Testsigma Extension -> Click on “Details” -> Toggle on “Allow access to File URL’s”



