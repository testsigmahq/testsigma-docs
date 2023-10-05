---
title: "Test Data - Parameter"
metadesc: "Use parameter test data input from your test data profile in Testsigma. Learn how to use parameter from you test data profile for Test Automation"
noindex: false
order: 5.113
page_id: "Test Data - Parameter"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "How to Use Parameters in a Test Case?"
  url: "#how-to-use-parameters-in-a-test-case?"
---

---

Parameters in Testsigma are variables used to customize test cases for different scenarios. They enhance flexibility by applying the same test logic for varied inputs. For example, while testing a login page, you can use parameters to provide different usernames and passwords.

![Illustration](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prmillustration.png)

---
## **How to Use Parameters in a Test Case?**
1. Create a **Test Data Profile**. See, [create test data profile](https://testsigma.com/docs/test-data/create-data-profiles/). Alternatively, you can also import a Test Data Profile. 

2. Create a **Test Case** and associate **Test Data Profile** from **Test Case Settings**. See [create test case](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#creating-a-test-case).
![Test Case Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prmtcs.png)

3. In your test steps, use *‘Enter ***test data*** in the ***element*** field’* NLP. 
![NLP](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prmnlp.png)

4. Click on **test data** and select **Parameter** from the drop-down.
![Dropdown](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prmprmdd.png)

5. On **Parameter** overlay, choose the parameter you want to use in your test case.  
![Overlay](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/prmoverlay.png)

[[info | **NOTE**:]]
| You can also associate test data profile with pre-existing test case from **Test Case Settings**.

---