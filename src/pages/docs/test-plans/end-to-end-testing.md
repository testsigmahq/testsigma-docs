---
title: "End-to-End Testing in Testsigma"
page_title: "End-to-End Testing in Testsigma"
metadesc: "This document discusses enabling & configuring end-to-end testing in Testsigma by creating a single test plan that includes test suites from multiple projects & applications"
noindex: false
order: 8.271
page_id: "end-to-end-testing"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Enable End-to-End Testing"
  url: "#enable-end-to-end-testing"
- type: link
  name: "Add Test Suites from Different Projects & Applications"
  url: "#add-test-suites-from-different-projects--applications"
---

---

End-to-end (E2E) testing validates a complete business workflow from start to finish, as experienced by an end user. In modern applications, a single workflow often spans multiple applications, runs across different platforms, and relies on several interconnected systems.

For example, a user may book a flight on a web application, cancel the booking using a mobile application, and then verify the refund status on the web. This workflow involves systems such as authentication services, booking engines, payment gateways, and notification services. End-to-end testing ensures that these systems work together correctly and that data remains consistent across the entire workflow.

This document discusses enabling and configuring end-to-end testing in Testsigma by creating a single test plan that includes test suites from multiple projects and applications.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have referred to:
> 
> 1. [Documentation on creating test plans](https://testsigma.com/docs/test-management/test-plans/overview/).
> 2. [Documentation on creating test suites](https://testsigma.com/docs/test-management/test-suites/overview/).
> 3. [Documentation on creating test machine](https://testsigma.com/docs/test-management/test-plans/manage-test-machines/).

---

## **Enable End-to-End Testing**

1. From the left navigation bar, go to **Test Plans** and click **Create Test Plan**.
   ![Test Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/E2E_Test_Plan_Navigation.png)

2. In the **Basic Details** tab, provide the following information and click **Continue**:
   - **Name (Required)**: Enter a title for the test plan.
   - **Description (Optional)**: Enable the Description toggle and briefly describe the purpose and scope of the test plan.
   - **Labels (Optional)**: Add labels to help organize and manage test plans.
   - **Test Plan Type (Required)**: Select **Custom Test Plan**.
   ![Basic Details](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Basic_Details_E2E_Test_Plan.png)

> End-to-end testing can be enabled only for **Custom Test Plans**.

3. In the **Add Test Suites & Link Machine Profiles** tab, click **Add Test Suites**.
   ![Test Suites & Machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/E2E_Testing_Add_Suites.png)

4. In the **Add Test Suites to Plan** dialog, enable the **End-to-End Testing** toggle.
   ![End-to-End Testing Toggle](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/End_to_End_Testing_Toggle.png)

---

## **Add Test Suites from Different Projects & Applications**

When end-to-end testing is enabled, you can add test suites from multiple projects and applications to a single test plan. You add test suites incrementally by selecting a project and application, adding the required suites, and then switching to another project or application to continue adding more suites.

1. In the **Add Test Suites to Plan** dialog, select the **Project**, **Application**, and **Version**.
   ![Select Project, Application & Version](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Project_App_Version_For_Suite.png)

2. From the **Available Test Suites** list, select the required test suites and add them to the plan.
   ![Select Suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Select_Suites_for_E2E_Test.png)

3. The selected test suites appear in the **Selected for Test Plan** section.
   ![Suites Selected Section](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Suites_Selected_for_E2E_Test.png)

4. Change the **Project**, **Application**, or **Version** to add test suites from a different source.

5. Repeat steps 1–3 until all required test suites from different projects and applications are added.

6. Click **Add to Plan**.
   ![Add all Suites to Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Add_Suites_to_Plan.png)

7. In the **Add Test Suites & Link Machine Profiles** tab, click **Test Machine** for a test suite.
   ![Link Machine Profiles](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Link_Machines_to_Suites_E2E.png)

8. In the **Select Test Machine Profiles** overlay, select the required test machines and click **Save Selections**.
   ![Save Selections](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Save_Machine_Selections_For_E2E_Test.png)

9.  Repeat the same for each test suite, selecting machine profiles based on the application type.

10. Click **Continue** to proceed with the remaining test plan configuration.
    ![Continue to Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Continue_to_Settings_for_E2E_Test.png)


---