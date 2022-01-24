---
title: "Create Element Manually"
metadesc: "Dynamic Element locators and how to create Elements manually in Testsigma."
order: 6.24
page_id: "Create Element Manually"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Why Create Elements Manually"
  url: "#why-create-elements-manually"
- type: link
  name: "Creating Element Manually"
  url: "#creating-element-manually"
---

---
We assume you are familiar with Elements[(?)](https://testsigma.com/docs/elements/overview/) and how to create them using the Testsigma Chrome Recorder[(?)](https://testsigma.com/docs/test-step-recorder/install-chrome-extension/).<br>
If not, please refer: [Create an Element using Chrome Recorder](https://testsigma.com/docs/elements/web-apps/record-multiple-elements/).

If you are not familiar with XPaths or CSS Selectors, please use the Testsigma Chrome Recorder to get the Elements easily.

[[info | NOTE:]]
| This guide is intended for Advanced Users. Familiarity with Elements, XPath and CSS Selectors is recommended for this guide.

<br>
---
##**Why Create Elements Manually**

For dynamic websites such as E-commerce websites, the elements might be dynamic in nature i.e none of their attributes/properties remain constant across sessions. In such cases, there are chances for the Elements created using Testsigma Chrome Recorder to fail. In those specific cases, we might need to create some of the Elements manually.

<br>
---
##**Creating Element Manually**

Navigate to **Test Development > Elements** to get to the Elements page:

![Elements List](https://docs.testsigma.com/images/create-manually/elements-list.png)

Clicking on the Create button on the top right corner opens the Create Element page as shown below:

![Create Elements manually ](https://docs.testsigma.com/images/create-manually/element-create-manually.png)


Enter the details as mentioned below: <br>
&emsp;**Name:** Enter the name that is used for Element.<br>
&emsp;**Screen Name:** Screen Name will be helpful to group your Elements by each screen in your application. This helps you search Elements on each screen in your application.<br>
&emsp;**Identifier Type:** Select the suitable locator from a drop-down box: **ID, Name, XPath, CSS Selectors, link text, partial link text, class name, or tag name** <br>
&emsp;**Value:** Enter the value for the selected element type. To know more about creating different types of locators, refer to: [Different strategies for formulating Elements](https://testsigma.com/docs/elements/web-apps/creating-locators-manually-strategies/)

If you would like to know more about creating dynamic locators, refer: [Dynamic elements with Parameter Test Data](https://testsigma.com/docs/elements/dynamic-elements/with-parameter-test-data/)

After entering the values, click on the Create button to create the Element.

