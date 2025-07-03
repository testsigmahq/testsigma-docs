---
title: "Integrate Testsigma with Codemagic"
metadesc: "Integrate Testsigma with Codemagic for seamless test automation | Trigger Testsigma test runs from your CI/CD pipeline using a shell script in GitHub."
noindex: false
order: 12.26
page_id: "integrate-testsigma-with-codemagic"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Integrate Testsigma with Codemagic"
  url: "#steps-to-integrate-testsigma-with-codemagic"
---

---

To streamline your testing workflow, you can integrate Codemagic with Testsigma and automate test execution directly from your CI/CD pipeline. This article explains how to set up Codemagic to trigger Testsigma test execution using a shell script stored in your GitHub repository.

---

> ## **Prerequisites**
> 
> Ensure you have the following:
> 
>   - A **GitHub** repository
>   - A **Codemagic** trial account
>
---

## **Steps to Integrate Testsigma with Codemagic**

1. Navigate to [Codemagic](https://codemagic.io/start/) and sign up using your **GitHub** account. 

2. Click **Authorize Codemagic CI/CD**. 
<img src="https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_2.png" style="width: 400px;" />

3. On the **How will you be using Codemagic?** page, click the **Get Started** in the **Individual** option.
![codemagic 3](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_3.png)

4. On the **Welcome Onboard** page, under the **Connect Code** section, select **GitHub**.
![codemagic 4](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_4.png)

[[info | **NOTE**:]]
| If you face any trouble, click **Click here** and then click **Install and Authorize**. Your **GitHub** repositories will appear in Codemagic.

5. Select the required option from the drop-down and click **Select repository**.
![codemagic 5](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_5.png)

6. Enter the project path in the **Project path** field and click **Retry** to let **Codemagic** scan the repository again. Alternatively, click **Set Type Manually** to choose the project type yourself.
![codemagic 6](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_6.png)

7. After selecting the project type, click **Create Application** to continue.
![codemagic 7](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_7.png)

8. You will be taken to the following page:
![Codemagic 8](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_8.png)

9. In your **GitHub** repository, create a new file named **codemagic.yaml**.

10. Add the following content to the file:

    ```
 workflows:
   run-testsigma:
    name: Run Testsigma Shell Script
    scripts:
      - name: Trigger Testsigma
        script: |
          chmod +x ./magictrigger.sh
          ./magictrigger.sh
    ``` 
![codemagic 9](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_9.png)

11. Once you add the **codemagic.yaml** file to your **GitHub** repository, it will automatically appear on the **Codemagic** page.
![codemagic 10](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_10.png)

12. You can configure **environment variables** and **webhooks** in **Codemagic** if required.

13. Before starting the build, make sure you have a **GitHub** repository and create a **.sh** file with the required script. Please refer to [Testsigma Shell Script Integration](https://testsigma.com/docs/continuous-integration/shell-script/) for more details. 
![codemagic 11](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_11.png)

14. Return to the **Codemagic** and click **Start new build**.
![codemagic 12](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_12.png)

15. **Codemagic** will pick up your **codemagic.yaml** and begin execution. You can view the results and logs after opening the build.
![codemagic 13](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/faq/Codemagic_13.png)

---
