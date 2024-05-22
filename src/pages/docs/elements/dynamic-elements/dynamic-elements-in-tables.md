---
title: "Locating Dynamic Elements in Tables"
metadesc: "Learn advanced Xpath expression for locating dynamic elements in tables | Copy Xpath for elements in Chrome DevTools & advanced scenarios for table elements"
noindex: false
order: 6.86
page_id: "Locating Dynamic Elements in Tables"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Copy XPath Using Chrome Developer Tools"
  url: "#copy-xpath-using-chrome-developer-tools"
- type: link
  name: "Dynamic XPath for HTML Table Elements"
  url: "#dynamic-xpath-for-html-table-elements"
---

---

This article discusses advanced Xpath expression for locating dynamic elements in tables using Google Chrome Developer Tools. 

---

## **Copy XPath Using Chrome Developer Tools**

1. Go to website and right click on the element that you want to fetch XPath for. Select **Inspect** from the drop down menu. This will open the **Elements** tab of **Chrome Developer Tools**. 

2. Right-click on the highlighted web element in the HTML code and celect the **Copy > Copy XPath** option from the drop-down menu. 

3. Use the copied X-path to locate the element.

   ![Copy Xpath](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/copy_xpath.gif)

---

## **Dynamic XPath for HTML Table Elements**

Let's take the example of the **Top Gainers** table on the [Rediff Money](https://money.rediff.com/gainers/bsc/daily/groupa) website.

![Ref Table](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/reddittopgainers.png)

Here's the HTML code for the first 5 rows of the above table:

```html
<table class="dataTable">
  <thead>
    <tr>
      <th>Company</th>
      <th>Group</th>
      <th>Prev Close (Rs)</th>
      <th>Current Price (Rs)</th>
      <th>% Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="//money.rediff.com/companies/jet-airways/16600015">Jet Airways</a></td>
      <td>A</td>
      <td>177.50</td>
      <td>197.10</td>
      <td><font class="green">+ 11.04</font></td>
    </tr>
    <tr>
      <td><a href="//money.rediff.com/companies/spicejet-ltd/16600005">Spicejet Ltd.</a></td>
      <td>A</td>
      <td>62.70</td>
      <td>68.25</td>
      <td><font class="green">+ 8.85</font></td>
    </tr>
    <tr>
      <td><a href="//money.rediff.com/companies/nlc-india-l/15110006">NLC India L</a></td>
      <td>A</td>
      <td>68.60</td>
      <td>73.25</td>
      <td><font class="green">+ 6.78</font></td>
    </tr>
    <tr>
      <td><a href="//money.rediff.com/companies/phoenix-mills/16490110">Phoenix Mills</a></td>
      <td>A</td>
      <td>520.35</td>
      <td>548.90</td>
      <td><font class="green">+ 5.49</font></td>
    </tr>
    <tr>
      <td><a href="//money.rediff.com/companies/interglobe-aviation/16690529">InterGlobe Aviation</a></td>
      <td>A</td>
      <td>777.60</td>
      <td>816.35</td>
      <td><font class="green">+ 4.98</font></td>
    </tr>
  </tbody>
</table>
```

Let's take the following example scenarios to find the XPaths for the dynamic table:


### **1. Fetch the name of the Company that comes first in the Top Gainers table**

Here, the HTML table consists of rows(**&lt;tr&gt;** element) and columns(**&lt;td&gt;** element). The name of the company falls in the first column **(td[1])** inside the first row **(tr[1])** in our table. Therefore, formulating the XPaths is fairly easy here.

**Xpath:** ```//table/tbody/tr[1]/td[1]/a```


### **2. Fetch the Prev Close value of company named NHPC**


In this case, we have the name of the company **NHPC**. So, let us start from there.

We know the company's name is the first column on each row (as in the previous example). And we already have the XPath to get the first column of the first row. We need to remove the first row constraint from that i.e., remove the [1] part as follows:

**Xpath:** ```//table//tr/td[1]/a```

This will give us the List of all company names.


Add the condition that is provided, i.e., we only need the element with the company name **NHPC**.

**Xpath:** ```//table//tr/td[1]/a[contains(text(),'NHPC')]```

We are using the contains() function here since the anchor tag (**&lt;a&gt;**) includes the text **NHPC** and some extra whitespaces.

Now, we need to backtrack to the row containing this element. We will use the 'ancestor' XPath axe to get to the row (**&lt;tr&gt;**) that is the ancestor on our current node.

**Xpath:** ```//table//tr/td[1]/a[contains(text(),'NHPC')]/ancestor::tr```

By inspecting the table, we know that **Prev Close (Rs)** is the third column in every row. We will get to that using the index/position function. The desired Xpath is as follows.

**Xpath:** ```//table//tr/td[1]/a[contains(text(),'NHPC')]/ancestor::tr/td[3]```

*For more information, refer to [HTML tables](https://www.w3schools.com/html/html_tables.asp).* 


---