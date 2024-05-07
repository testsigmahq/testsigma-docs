---
title: "Why Accessibility IDs Over other Locators?"
page_title: "Accessibility IDs Over other Locators"
metadesc: "Learn why accessibility IDs are preferred over other Locators. This article discusses why Accessibility IDs are favored in mobile app development & testing"
noindex: false
order: 23.691
page_id: Why Accessibility IDs Over other Locators?
warning: false
---

---

**Accessibility IDs are favored in mobile app development and testing for several compelling reasons:**
- **Enhanced Test Execution Speed:** Accessibility IDs are faster than other locator strategies like XPath or OS Native mechanisms. ID locators require only a single pass through the app's source code to locate an element, whereas XPath may need to traverse the entire source tree.
- **Stable & Reliable Tests:** ID locators are unique identifiers within the app's UI. Since identifiers are unique, they eliminate any uncertainty in element location, leading to more stable and low-maintenance tests.
- **Broader App Accessibility:** Implementing accessibility IDs helps in testing and enhances the user experience for individuals with disabilities. In markets such as the US and UK, where accessibility is a key consideration, this can significantly expand an app's user base. 

### **Adding Accessibility IDs:**

- **Android:** Use the **contentDescription** property to define accessibility IDs.

- **iOS:** Use the **accessibilityIdentifier** to define accessibility IDs.

Here's an infographic which gives more info:

![INFO](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/acccidspre2.png)

---

### **References:**

[Android Developer - Accessibility](https://developer.android.com/guide/topics/ui/accessibility)

[Buildfire - App Accessibility Mobile Development](https://buildfire.com/app-accessibility-mobile-development/)

[Appium Pro - Pick Right Locator Strategy](https://appiumpro.com/editions/60-how-to-pick-the-right-locator-strategy)

---