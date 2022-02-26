---
title: "Users & Role Management"
metadesc: "How to manage users and roles in Testsigma."
noindex: false
order: 3.1
page_id: "Users & Role Management"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Roles in Testsigma"
  url: "#roles-in-testsigma"
- type: link
  name: "Edit Users to Assign New Roles"
  url: "#edit-users-to-assign-new-roles"
- type: link
  name: "Assign Roles to Users"
  url: "#assign-roles-to-users"  
---

---
When a user is added in Testsigma, they can be assigned various roles. This document covers how to add users and assign them different roles and accesses within Testsigma.

&emsp;

---
##**Roles in Testsigma**
Below are the four roles that can be assigned to a project member in Testsigma:

1.**Super Administrator**
A user in a ‘Super Administrator’ role will have complete control over the Testsigma project but will be restricted from viewing Account or Billing-related information.

2.**Test Manager**
A user in the role of ‘Test Manager’ will be able to manage multiple projects - including assigning users to the projects, adding applications, versions in each project.

3.**Test Lead**
A user in the role of ‘Test Lead’ will be able to manage everything in the assigned project - including adding applications, versions in that project.

4.**Automation Engineer/Developer**
A user in the role of ‘Automation Engineer/Developer’ can write, view, update test cases, and everything required to write test cases like test data profiles, Elements, custom functions, etc.

5.**Account Administrator** 
A user in the role of ‘Account Administrator’ has all the rights as a Super Administrator. In addition, they will also have access to billing-related information for that particular account.

&emsp;

---
##**Edit Users to Assign New Roles**

1.Go to ‘Settings > Users’, you should see a page like this:

![Users page in Testsigma](https://docs.testsigma.com/images/users-roles/users-page-testsigma.png)

2.Click on the user that you want to edit. You can also search for the user from the search field on the top. 

3.On the User details page, click on the ‘edit’ button on the top right corner.

![Edit Button on the User Details page in Testsigma](https://docs.testsigma.com/images/users-roles/edit-button-user-details-page-testsigma.png)

1.A form should appear like the one shown below:

![Update User Details form in Testsigma](https://docs.testsigma.com/images/users-roles/update-user-details-form-testsigma.png)

From here, you can fill up the required fields, and change the user role as needed.

2.Once all the required changes are made, click on the ‘Update’ button

&emsp;

---
##**Assign Roles to Users**

1.To assign a project with a particular role to an existing user, refer to [assigning projects](https://testsigma.com/docs/collaboration/assign-projects/)

2.To create a new user and then assign them to one or multiple projects, refer to [Inviting team members](https://testsigma.com/docs/collaboration/invite-team-members/)


&emsp;

### Steps to follow

1.Select the project that you want to add users with different roles to. 

2.Go to Project settings>Project Members

3.Click on the ‘Invite’ button on the top right corner.

4.On the ‘Add New Member to Project’ form that opens, add all the required information. You will be able to select the required role from the ‘role’ dropdown field.

![Add New Member to Project form in Testsigma](https://docs.testsigma.com/images/users-roles/add-new-member-to-project-form-testsigma.png)

5.Once all the required fields are filled, click on the ‘Invite’ button on the form.

[[info | Note:]]
|This form only allows adding users in ‘Test Manager’, ‘Test Lead’, and ‘Automation Engineer/Developer’ Roles. To read about creating users with Super admin roles, go to the section [“Assign Projects”](https://testsigma.com/docs/collaboration/assign-projects/).


The invited user should receive an invitation email. They will need to join via the link sent in the email. Once they have joined they should be able to work on the project according to the role assigned to them.



