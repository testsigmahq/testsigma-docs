---
title: "Launch Copilot in the Same Window"
order: 11.3
page_id: "launch-copilot-in-the-same-window"
metadesc: "This article discusses in detail step-by-step guide on how to run tests in Copilot in the same window as well as new window in Testsigma application."
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to launch the Copilot in the same window"
  url: "#steps-to-launch-the-copilot-in-the-same-window"
---

<br>

Having a reliable and efficient debugging environment is important when it comes to debugging applications. This article provides a step-by-step guide on how to run tests using Copilot in the same window.
<br>

## **Steps to Launch the Copilot in the Same Window**
When you launch Copilot, there are two options: <br>
1. Run in the new window <br>
2. Run in the same window

If you want to launch the Copilot in the same window, you need to open chrome in remote debugging mode. 

To enable Chrome to open a port for remote debugging in the new chrome profile, we need to launch it with a custom flag.

**On Windows:**
1. Open the command prompt.
2. Run the command mentioned below:


```
start chrome.exe --remote-debugging-port=9222 --user-data-dir="C:\selenum\ChromeProfile"
```

**On macOS:**
1. Open Terminal.
2. Run the command mentioned below:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir="~/ChromeProfile"
```

By following these steps, you can launch Chrome with the remote DevTools protocol enabled on the specified port  and with a custom chrome profile specified by the ```--user-data-dir``` flag. This allows you to communicate with Chrome using ChromeDriver and perform automation tasks.

[[info | **NOTE**:]]
|* When you launch Chrome with remote debugging enabled, you need to launch it in a new profile.<br>
|* When you want to launch the Copilot in the new window, by default, it will be a new profile and doesn't need to be launched separately.

---