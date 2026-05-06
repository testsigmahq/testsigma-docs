---
title: "Use Mock Servers in Test Executions"
metadesc: "Learn how to configure mock servers for dry runs, test plan executions, and local executions in Testsigma."
noindex: false
order: 9.92
page_id: "use-mock-servers"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Configure Mock Server in Dry Runs"
  url: "#configure-mock-server-in-dry-runs"
- type: link
  name: "Configure Mock Server in Test Plans"
  url: "#configure-mock-server-in-test-plans"
- type: link
  name: "Add Mock Rules"
  url: "#add-mock-rules"
---

---

Use configured mock servers during test executions to return simulated API responses instead of calling actual backend services. Mock servers are supported in dry runs, test plan executions, and local executions. This article discusses configuring mock servers for test executions in Testsigma.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that:
> - You have configured mock servers
> - You know how to execute tests

---

## **Configure Mock Server in Dry Runs**

1. From the left navigation bar, go to **Create Tests > Test Cases**.

2. Expand a feature and scenario, then open or create a test case.

3. Click **Run** in the **Action Panel**.

4. In the **Ad-Hoc Run** overlay:
   - Configure **Test Lab**, **Machine**, and **Environment** as required
   - Expand **Additional Settings** and select a mock server from the **Mock Server** dropdown
     ![Select Mock Server](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Mock_Servers_in_AdHoc_Runs.png)

5. Click **Run Now**.

   [[info | **NOTE**:]]
   | During execution, you can open the configured endpoint in the **Mock Server** application to review API calls in real time.

6. After execution is complete, go to the results page and click **More Details**.
   ![More Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/More_Details_on_Run_Results.png)

7. In the **More Details** overlay, go to **Machine Details** and select the mock server used.
   ![More Details Overlay](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Mock_Server_Results.png)

8. Review the mocked rules in the **Mock Server History** section.
   ![Mock Server History](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Mock_Server_History.png)

---

## **Configure Mock Server in Test Plans**

1. From the left navigation bar, go to **Test Plans**.

2. Open or create a test plan.

3. Go to **Test Plan Settings**.
   ![Test Plan Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Mock_Server_in_Test_Plan_Settings.png)

4. In **Additional Settings**:
   - Select a mock server from the **Mock Server** dropdown
   - Click **Update** or **Create**
     ![Select Mock Server](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Mock_Server_for_Test_Plans.png)

5. Click **Run Now**.

6. After execution is complete, go to the test case results page and click **More Details**.
   ![More Details](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/More_Detail_Test_Plan_Results.png)

7. In the **More Details** overlay, go to **Machine Details** and select the mock server used.
   ![Mock Server Used](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Mock_Server_History_link.png)

8. Review the mocked rules in the **Mock Server History** section.

---

## **Add Mock Rules**

1. After execution, go to the test case results page and click **More Details**.

2. In the **More Details** overlay, go to **Machine Details** and select the mock server used.

3. In the **API Results** table, click **Create Rule** in the **Action** column for the API call you want to mock.
   ![Create Rule](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Create_Mock_Rule_from_Results.png)

4. In the **Mock Rules** dialog, update the rule details and click **Save**.
   ![Update Mock Rules](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Update_Mock_Rules.png)

5. On the next execution, the mock server returns the configured responses for matching API calls.
   ![Rerun after Mock Rule Update](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Updated_Result_After_Adding_Mock_Rule.png)

> To learn how to define request matching and configure responses, see [Mock Rules and API Routes](https://app.mockserver-us.testsigma.com/docs/beeceptor-features/).

---
