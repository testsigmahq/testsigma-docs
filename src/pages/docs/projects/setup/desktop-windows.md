---
title: "Setup Desktop Windows"
metadesc: "Setup desktop windows"
noindex: false
order: 2.52
page_id: "Setup desktop windows"
warning: false
---

---
Testsigma supports the test automation of your Windows desktop applications, that is, applications that run on desktop computers.
The below steps details about the configuration steps required to setup desktop automation testing using Testsigma. 
<ol>
<li>Create desktop application in Testsigma. <em>For more information refer to <a href="https://testsigma.com/docs/projects/applications/">creating an application</a></em></li>
<li>Install Testsigma local agent.<em> For more information refer to <a href="https://testsigma.com/docs/agent/setup-on-windows-mac-linux/">setup Testsigma local agent on Windows</a></em>.</li>
<li> To enable desktop application testing, you have to enable the <strong>Developer mode</strong> settings. To enable Developer mode navigate to <strong> Settings > Privacy and security > For developers</strong>. Click the toggle <strong>Developer mode</strong>.</li>
<li> To launch the desktop application download the WinApp Driver <a href="https://github.com/Microsoft/WinAppDriver/releases">WinAppDriver</a>.</li>
<li>After installing the WinAppDriver, navigate to the <strong>File Explorer</strong> on the desktop.</li>
<li>In the File Explorer, navigate to the below path
<kbd>C:\Program Files\Windows Application Driver</kbd</li>
<li>Double click on <kbd>WinAppDriver.exe</kbd> file.</li>
<li>To inspect desktop elements, you will have to install the Windows SDK. To install Windows SDK follow the below steps:
<ol type= "a">
<li><a href="https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/">Download Windows SDK.</a></li>
<li>Navigate to <strong>File Explorer</strong> on your desktop.</li>
<li>In the File Explorer, navigate to the below path <kbd>C:\Program Files (x86) \Windows Kits\10\bin\10.0.22621.0\x86 </kbd></li>
<li>Double click on the <kbd>inspect.exe</kbd> file to install Windows SDK.</li>
</ol>
</li>
</ol>


---