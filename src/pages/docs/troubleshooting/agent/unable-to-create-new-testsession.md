---
title: "Unable to Create New Test Session"
metadesc: "Learn what to do if you cannot create a new test session due to an unexpected error. Follow these troubleshooting steps to continue your testing sessions."
noindex: false
order: 23.32
page_id: "Unable to create new test session due to unexpected error"
warning: false
---

---

In this article, we will take you through a series of troubleshooting steps to try and help you figure out the cause of the error *Unable to create a new test session due to unexpected failure - Error while creating driver*.

---

<h2><strong>Troubleshooting Steps</strong></h2>
<ol>
<li>Make sure the agent and device are in an active state.
<ul class="disc">
<li>To know if the Testsigma agent is running, navigate to <strong>Agents</strong>. Select <strong>Active agents</strong> from the drop-down. Check if your local agent is part of the list. If not, refer to <a href="https://testsigma.com/docs/agent/troubleshooting/setup-issues/">troubleshooting Testsigma agent issues</a>.</li>
<li>To know if the local device is active, navigate to <strong>Agents >Testsigma agent > Devices</strong>. Under devices, you can see the device connected to the Testsigma agent. If your device is unlisted, refer to following guides : <a href="https://testsigma.com/docs/agent/connect-android-local-devices/" >Android</a> and <a href="https://testsigma.com/docs/agent/connect-ios-local-devices/" >iOS</a></li>
</ul>
</li>
<li>Now execute the test case on the local device. <em>For more information, refer to <a href="https://testsigma.com/docs/runs/test-plans-on-local-devices/">executing test cases on local device</a></em>.</li>
<li>On the dry run page under App details sections, select Use path and provide the required details. Try running the test case.</li>
<li>If the issue persists, on the dry run page under App details sections, select Use details. Rerun the test case.</li>
<li>If the error continues, uninstall the app on the device and reinstall it.</li> 
<li>Rerun the test case.</li>
<li>After following the above steps, if you see the same error message reach out to Testsigma support with the test logs.</li>
</ol>

---