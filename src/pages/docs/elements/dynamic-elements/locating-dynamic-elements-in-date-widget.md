---
title: "Locating Dynamic Elements in Date Widget"
metadesc: "Learn how to automate modern web pages with much dynamic content | Learn advanced Xpath expression for locating dynamic elements in date widgets"
noindex: false
order: 6.84
page_id: "Locating Dynamic Elements in Date Widget"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Fetch Today's Date"
  url: "#fetch-todays-date"
- type: link
  name: "Fetch Tomorrow's Date"
  url: "#fetch-tomorrows-date"
- type: link
  name: "Fetch 'Today + 7 days' Date"
  url: "#fetch-today--7-days-date"
---

---

While automating modern web pages with much dynamic content, learning to use Advanced XPath expressions is important. This article discusses advanced Xpath expression for locating dynamic elements in date widgets. 

Let us take the following scenarios where we need to find the XPaths for the dynamic date elements:
1. Fetch Today's date in the date widget.
2. Fetch Tomorrow's date in the date widget.
3. Fetch the 'Today + n days' date in the date widget.

---

## **Fetch Today's Date**

In most cases, there will be a distinct class name for today's date html element. This will be different for different date libraries, but a pattern exists. We need to find this pattern to get the XPath for today.

In this case, we have JqueryUI's date picker, where you can see that the class name consists of **highlight**. So, we can write XPath for today as:

```//td/a[@class='ui-state-default ui-state-highlight']```

![Date Picker - Today](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dpckrtdy.png)

![Date Picker](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dtpkcls.png)

---

## **Fetch Tomorrow's Date**

Based on the above example, we have XPath for today. For the next day, i.e., tomorrow, it would be the following 'td' element as shown below:

```//td/a[@class='ui-state-default ui-state-highlight']/following::td[1]```

![Date Picker - Tomorrow](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/dtpkrtomo.png)

---

## **Fetch 'Today + 7 days' Date**

Based on the above example, we have XPath for today and tomorrow. For the 7th day, i.e., seven days from today, it would be the following **td** element with **postion=7** as shown below:

```//td/a[@class='ui-state-default ui-state-highlight']/following::td[7]```


---