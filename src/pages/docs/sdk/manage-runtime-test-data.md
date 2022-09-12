---
title: "Create/Update Runtime Data using Testsigma SDK"
order: 18.2
page_id: "Get/Update Runtime Data"
metadesc: "How to manipulate runtime data using Testsigma SDK and create a runtime property for an add-on."
noindex: false
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "RunTimeData on Addons"
  url: "#runtimedata-on-addons"
---

---

Testsigma SDK helps you perform specific actions in Addons, like updating runtime data, test data profile, element details etc.  When you download an Addon template project, the latest version of Testsigma SDK dependency is added to your project dependency by default.

You can also get the maven dependency from 

https://github.com/testsigmahq/testsigma-java-sdk#testsigma-sdk-dependency

Or you can generate using Testsigma Addon archetype

https://github.com/Testsigmahq/testsigma-addon-archetype#testsigma-maven-archetype-for-creating-add-on-project

In this document we will learn how to update runtime data using methods available in Testsigma SDK

---
## **Prerequisites**
1. [Create an Addon](https://testsigma.com/docs/addons/create/)

---
## **RunTimeData on Addons**
For fetching or setting runtime data property, we need to create an instance of RuntTimeData  class and annotate it with @RunTimeData as shown below.

```java
@RunTimeData
Private com.testsigma.sdk.RunTimeData runTimeData;
```

RunTimeData class exposes getters and setters for key and value which you can use to set or get runtime data.


Ex: Here we set a runtime property names tokenKey with a static value token_value.

```java
runTimeData = new com.testsigma.sdk.RunTimeData();
runTimeData.setKey(“tokenKey”);
runTimeData.setValue(“token_value”);
```

Below is the complete code snippet where we created an add-on that creates/updates a runtimeProperty.

```java
package com.testsigma.add-ons.pdf.web;

import com.testsigma.sdk.ApplicationType;
import com.testsigma.sdk.Result;
import com.testsigma.sdk.WebAction;
import com.testsigma.sdk.annotation.Action;
import com.testsigma.sdk.annotation.RunTimeData;
import com.testsigma.sdk.annotation.TestData;
import lombok.Data;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

@Data
@Action(actionText = "Read the content from pdf and store the text into a runtime-variable variable",
       description = "Extracts the text from the PDF and stores the extracted text into a run time variable",
       applicationType = ApplicationType.WEB)
public class ReadpdfContent extends WebAction {

   @TestData(reference = "variable")
   private com.testsigma.sdk.TestData testData;

   @RunTimeData
   private com.testsigma.sdk.RunTimeData runTimeData;

   @Override
   public Result execute() {
       //Your Awesome code starts here
       Result result = Result.SUCCESS;
       logger.info("Initiating execution");
       logger.debug("test-data: " + this.testData.getValue());
       URL url;
       BufferedInputStream fileParse;
       if (driver.getCurrentUrl().contains(".pdf")) {
           setSuccessMessage("pdf file detected");
           System.out.println("PDF detected");
       } else {
           setErrorMessage("Not a pdf file");
           System.out.println("PDF not detected");
           return Result.FAILED;
       }
       try {
           url = new URL(driver.getCurrentUrl());
           InputStream is = url.openStream();   //Converting url as input
           fileParse = new BufferedInputStream(is);   //reads data from file
           PDDocument doc = null;
           doc = PDDocument.load(fileParse); //loads the file as pdf
           String st=new PDFTextStripper().getText(doc);
           runTimeData = new com.testsigma.sdk.RunTimeData();
           runTimeData.setKey(testData.getValue().toString());
           runTimeData.setValue(st.trim());
           setSuccessMessage("The Stored content in PDF is : " + st.trim() + "and stored in the runtime variable :" + testData.getValue());
       } catch (IOException e) {
           e.printStackTrace();
           setErrorMessage("Cause of Exception:" + e.getCause().toString());
           return Result.FAILED;
       }
       return result;
   }
}
```


