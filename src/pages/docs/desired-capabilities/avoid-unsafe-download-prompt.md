---
title: "Bypass Unsafe Download Prompt in Chrome"
metadesc: "Learn how to bypass the unsafe download warning prompt by setting a desired capability while downloading a file in your test using Testsigma application"
noindex: false
order: 15.5
page_id: "Bypass unsafe download prompt in Chrome"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Adding the Capability"
  url: "#adding-the-capability"
---

---

Sometimes, Chrome flags your downloads as unsafe on the basis of the file name checksum (sha256 hash) or the Download URL. In most cases, this might provide some additional security. However, there are some scenarios when these prompts appear for files whose security you are confident about, or your own files when you are testing. 

While automating Test Cases with such flagged downloads, we can't generally handle the Unsafe download prompt using Selenium or similar Automation Frameworks. The reason for this is that the Browser prompts are above the scope of the webpage and WebDriver can handle only Web page Automation out-of-the-box and a restrictive list of Browser alerts.

However, there is a workaround for this issue and that is to enable the Safe Browsing option using CLI arguments for Chrome. Testsigma lets you add this argument to your Tests using Desired Capabilities in Execution Configuration. Let us see how it's done.

You should already know how to add Desired Capabilities to your Tests. See [Desired Capabilities - Overview.](https://testsigma.com/docs/desired-capabilities/overview/)

---
## **Adding the Capability**

|Name|Data Type|Value|
|---|---|---|
|goog:chromeOptions|String|{ "prefs" : { "safebrowsing.enabled" : "true" } }|

Just add the above Desired Capability in your Execution that contains the Test Step for clicking on the Download link. The browser warning will be silenced for the Test Session.


---