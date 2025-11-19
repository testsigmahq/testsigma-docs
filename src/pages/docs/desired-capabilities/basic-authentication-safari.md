---
title: "Automating Basic Authentication in Safari"
page_title: "Automating Basic Authentication in Safari"
metadesc: "Safari restricts automated basic authentication login by blocking credentials in the URL format. This article discusses bypassing this limitation in Testsigma."
noindex: false
order: 15.99
page_id: "Basic Authentication in Safari"
search_keyword: ""
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Generate the Authorization Header"
  url: "#generate-the-authorization-header"
- type: link
  name: "Adding the Capability"
  url: "#adding-the-capability"
---

---

Safari restricts automated Basic Authentication login by blocking credentials in the URL format, which is a challenge in automation testing. In Testsigma, you can bypass this limitation using an encoded Authorization header in the desired capabilities. This article discusses generating the necessary authorization token and configuring capabilities.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 1. [Documentation on creating test cases](https://testsigma.com/docs/test-cases/manage/add-edit-delete/#create-test-case).
> 2. [Documentation on performing Ad-Hoc runs](https://testsigma.com/docs/runs/adhoc-runs/).
> 3. [Documentation on managing desired capabilities](https://testsigma.com/docs/desired-capabilities/overview/) in Testsigma.

---

## **Generate the Authorization Header**

1. Navigate to <a href="https://www.debugbear.com/basic-auth-header-generator" rel="nofollow">Basic Auth Header Generator</a>. 

2. Enter your **username** and **password** to generate the **Authorization Header**.

   ![Auth Header](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Header_Generator.png)

---

## **Adding the Capability**

1. On the **Test Case Details** page, click **Run**.
   ![Run](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Run_Now_BA.png)

2. In the **Ad-Hoc Run** overlay,

   - Select available **macOS**, **Version**, **Browser**, and **Resolution**.
     ![Machine, Ver, Browser & Resol](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Machine_OS_BA.png)

   - Enter **testsigma.customHeaders** in the **Key** field, select **String** as **Data type**, and set the **Value** as per the generated **Authorization Header**. 
     ![Desired Capabilities](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Desired_Capabilities_BA.png)

       > **Value Format:** ```{ "Authorization": "Basic <token>" }```

3. Click **Run Now** to execute the test case.
   ![Execute Test](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Execute_Test_BA.png)

4. After execution completes, refer to the screenshot captured at the test step level.
   ![Screenshot of Execution](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/Screenshot_Run_BA.png)


[[info | **NOTE**:]]
| This capability is available only for the Safari browser.

---