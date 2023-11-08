---
title: "Cross Browser Testing"
page_title: "Cross Browser Testing : Test Plan"
metadesc: "Test the functionality of your web application in Testsigma across all platforms. Test your application on multiple browsers and versions easily."
noindex: false
order: 8.26
page_id: "Test Plan: Cross Browser Testing"
warning: false
contextual_links:
- type: section
  name: "Contents" 
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Create Cross Browser Testing"
  url: "#steps-to-create-cross-browser-testing"

---


---


Cross browser testing is a type of non-functional testing that ensures the functionality of applications across different browser-OS combinations and devices. It ensures that the application works as expected on well-known web browsers like Firefox, Chrome, Edge, Safari, and various OS, such as Windows, macOS, Linux, iOS, and Android. 


Cross browser testing also evaluates the performance of applications on different devices, such as smartphones, tablets, desktops, and laptops, produced by different manufacturers. This testing approach ensures that your application provides an optimal user experience, regardless of the user's choice of browser, OS, or device. With cross browser testing, you can identify and address compatibility issues, which enhances the usability of your application for a wider audience.


---


## **Prerequisites**

- You should know [how to create a test suite](https://testsigma.com/docs/test-management/test-suites/overview/#creating-a-test-suite).

- You should know [how to create a test plan](https://testsigma.com/docs/test-management/test-plans/overview/#steps-to-create-a-test-plan).


---

## **Steps to Create Cross Browser Testing**

1. Navigate to **Test Plans** and click on **Create Test Plan**.

![Test Plans](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cbtestnavtp.png)


2. On the **Create Test Plan** page, select Cross browser testing from **Test Plan Type**.

![Test Plan Type](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cbtesttptype.png)


3. Click on **Add Test Suites & Link Machine Profiles**.

![Link Machines](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/ditelmachines.png)


4. Click on **Add Test Suites**.

![Add Test Suites](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/diteaddts.png)


5. Select test suites and click on **Add to Plan**.

![Add to Plan](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cbtesttms.png)


6. Click on **Test Machine** to add test machines to run the test suite. 

![Test Machine](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cbtesttmachine.png)


7. On **Select test machine profiles** overlay, select test machines and click on **Save selections**.

![Test Machine Selection](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cbtesttmsaveselect.png)

[[info | **NOTE**:]]
| On test plan execution, all the selected test suites run on all selected test machines in parallel or sequentially, depending on your selection. 

8. Go to **Test Plan Settings** and click on **Create**.

![Create](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/cbtestcreate.png)

<br>

Here’s a quick GIF demonstrating how to create cross browser testing in Testsigma.


![Cross Browser Testing](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/crossbrowsertesting.gif)


---