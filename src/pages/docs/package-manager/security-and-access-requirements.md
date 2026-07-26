---
title: "Package Manager Security & Access Requirements"
page_title: "Package Manager Security and Access Requirements | Testsigma"
metadesc: "Review the proxy behavior, OS-level permissions, folder access, browser access, and external packages that Testsigma's Package Manager touches, for IT and security review."
noindex: false
order: 21.1
page_id: "package-manager-security-and-access-requirements"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Proxy-Related Behavior"
  url: "#proxy-related-behavior"
- type: link
  name: "Browser-Level Access"
  url: "#browser-level-access"
- type: link
  name: "Downloads and External Services"
  url: "#downloads-and-external-services"
- type: link
  name: "Related Articles"
  url: "#related-articles"
---

---

Review the proxy behavior, OS-level permissions, folder access, browser access, and external packages that Package Manager touches. This lets your IT or security team approve the mechanism once, instead of auditing every release. Package Manager is a visibility page inside Testsigma application that lists every downloadable package, no terminal installation is required to browse it.

---

## **Proxy-Related Behavior**

Package Manager fetches browser drivers at execution time through a passthrough proxy to the original publisher's website. Testsigma does not download, store, or serve the driver binaries. The proxy only relays the request to the publisher's URL.


> <p id="prerequisites">Additional Info:</p>
> Driver binaries are signed by their original publishers (for example, Microsoft). On Windows, verify a driver's signature by right-clicking the downloaded file and selecting Properties.

[[info | NOTE:]]
| The passthrough proxy itself is not signed by Testsigma. Verify trust using the driver binary's own publisher signature rather than the proxy connection.

---

## **Browser-Level Access**

Package Manager's browser-related package is the accessibility extension (CRX), which is Windows-specific and applies only to certain customers.

[[info | NOTE:]]
| Additional detail on the exact permissions needed to auto-create a browser profile and install the accessibility extension CRX is coming soon.

> <p id="prerequisites">Additional Info:</p>
> The Recorder and Copilot browser extension is not distributed through Package Manager. It's installed separately through the Chrome/Edge web store and browser profile modes. 

---

## **Downloads and External Services**

Package Manager exposes the following packages for manual download:

| **Package** | **Versions shown** | **Notes** |
| :-- | :-- | :-- |
| Terminal | Latest only | |
| Agent | Latest only | Core unblocker for audited customers |
| Browser drivers | All available versions | Fetched via passthrough proxy from the publisher's site; Testsigma doesn't host the binaries |
| Chrome for Testing | Latest only | Required only when using Chrome driver |
| playwright-webkit | Latest only | |
| winappdriver | Latest only | Windows-specific |
| wintestautomation | Latest only | Windows-specific |
| Accessibility extension (CRX) | Latest only | Windows-specific; applies to certain customers only |

[[info | NOTE:]]
| This list reflects the packages currently planned for Package Manager and may not be complete. Check back here for the finalized list before whitelisting domains.

---