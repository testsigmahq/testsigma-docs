---
title: "Converting TSR Files to TSRx"
page_title: "Converting TSR Files to TSRx"
metadesc: "To automate windows advanced applications, you need to have objects captured in TSRx format. This article discusses how to convert TSR files to TSRx using ORAppModelConverter"
noindex: false
order: 31.4
page_id: "Converting TSR Files to TSRx"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Steps to Convert TSR Files to TSRx"
  url: "#steps-to-convert-tsr-files-to-tsrx"
---

---

As discussed earlier, Testsigma only allows TSRx file for import!

Once you have a TSR file captured from UFT One, you must convert it to TSRx file using the **OR2AppModelConverter.exe** utility. This article quickly discusses converting TSR files to TSRx files. 

ℹ️ For more information, refer to [object model](https://admhelp.microfocus.com/uft/en/23.4-24.2/UFT_Help/Content/User_Guide/z_Ch_TestObjModel.htm) and [object spy](https://admhelp.microfocus.com/uft/en/23.4-24.2/UFT_Help/Content/User_Guide/Spy.htm). 

---

## **Steps to Convert TSR Files to TSRx**

1. Go to the folder containing the **TSR** files.

2. Launch the **Command Prompt** from the same folder.

3. Enter the full path to the **OR2AppModelConverter.exe** utility in the **Command Prompt** window.

4. Input the **TSR** file name you wish to convert to **TSRx** format. Confirm the file name, append 'x', and press **Enter**.

5. This will process the conversion, and the file will be saved within the same folder in **TSRx**.


📌 *For more information on converting TSR to TSRx, see [UFT Help Centre](https://admhelp.microfocus.com/uftdev/en/2021-24.2/HelpCenter/Content/HowTo/UFT_AM_Converter.htm).*


Here's a quick GIF demonstrating how to convert a TSR files to TSRx.

![TSR to TSRx](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/TSR-TSRXWorkflow.gif)

---