---
title: "Why does Test Execution Fail with the Error No Route to Host?"
metadesc: "Fix the “No route to host” error in Testsigma. Learn why firewall or network restrictions block browser driver downloads during test execution."
order: 24.34
page_id: "why-does-test-execution-fail-with-the-error-no-route-to-host-?"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Resolve the Error"
  url: "#steps-to-resolve-the-error"
---

---

When starting a test execution, the process fails with the error message: “No route to host”

![Error](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Error.png)

This issue occurs because Testsigma attempts to download the required browser driver files, but the firewall or network restrictions block the downloads.

---

## **Steps to Resolve the Error**

To fix this issue, ensure the following URLs are whitelisted in your network/firewall settings:

1. https://msedgedriver.microsoft.com/ 
2. https://github.com/mozilla/geckodriver/releases/download/
3. https://storage.googleapis.com/chrome-for-testing-public/
4. https://googlechromelabs.github.io/

Once these URLs are whitelisted, Testsigma will be able to download the driver files required for test execution.

---