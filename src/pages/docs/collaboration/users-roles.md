---
title: "Users & Role Management"
metadesc: "Testsigma has multuple roles that can be assigned to a project member | Learn how to manage users and assign them roles for better collaboration within the team in Testsigma application"
noindex: false
order: 3.2
page_id: "user-role-management"
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
  name: "Assign Roles to Users From Project Settings"
  url: "#assign-roles-to-users-from-project-settings"
- type: link
  name: "Delete Users From a Project"
  url: "#delete-users-from-a-project" 
- type: link
  name: "Invite a Read Only User"
  url: "#invite-a-read-only-user" 

---

---

When a user is added in Testsigma, they can be assigned various roles. This document covers how to add users and assign them different roles and accesses within Testsigma.

---

## **Roles in Testsigma**
Below are the six roles that can be assigned to a project member in Testsigma:

1. **Super Administrator:** A user in a ‘Super Administrator’ role will have complete control over the Testsigma project but will be restricted from viewing Account or Billing-related information.

2. **Test Manager:** A user in the role of ‘Test Manager’ will be able to manage multiple projects - including assigning users to the projects, adding applications, versions in each project.

3. **Test Lead:** A user in the role of ‘Test Lead’ will be able to manage everything in the assigned project - including adding applications, versions in that project.

4. **Automation Engineer/Developer:** A user in the role of ‘Automation Engineer/Developer’ can write, view, update test cases, and everything required to write test cases like test data profiles, Elements, custom functions, etc.

5. **Account Administrator:** A user in the role of ‘Account Administrator’ has all the rights as a Super Administrator. In addition, they will also have access to billing-related information for that particular account.

6. **Read Only:** A user in the role of 'Read Only' will be able to view the contents of your project without making any modifications.

---

## **Edit Users to Assign New Roles**

1. Navigate to **Settings > Users**.
   ![Settings](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Edit_users_to_assign_new_rules_1.1.png)

2. Hover over the user and click the kebab menu. 
   ![Kebab Menu](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Edit_users_to_assign_new_roles_2.1.png)

3. Click **Edit User Role**.
   ![Edit User](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Edit_users_to_assign_new_rules_3.png)

4. On **Edit User Role / Assign Projects** prompt, select roles and click **Update**. 
   ![Edit User Roles](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Edit_users_to_assign_new_rules_4.2.png)

---

## **Assign Roles to Users from Project Settings**

1. Navigate to **Project > Project Settings**, click on **Project Members**. 
   ![Project Members](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Assign_Roles_to_Users_from_Project_Settings_1.1.png)

2. Click **Invite**.
   ![Invite](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Assign_Roles_to_Users_from_Project_Settings_2.4.png)

3. On **Invite New Member** dialog, enter **Email** and select the **Role** you want to assign. 
   ![Email & Role](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Assign_Roles_to_Users_from_Project_Settings_3.png)

4. Click **Invite**. 
   ![New User](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Assign_Roles_to_Users_from_Project_Settings_4.1.png)


[[info | **NOTE**:]]
| You can only add users as **Test Manager**, **Test Lead**, and **Automation Engineer/Developer**. To assign **Super Admin** roles, refer to the [documentation on assigning projects](https://testsigma.com/docs/collaboration/assign-projects/).

The invited user should receive an invitation email. They will need to join via the link sent in the email. Once they have joined they should be able to work on the project according to the role assigned to them.

---

## **Delete Users From a Project**


If you're the super administrator of the project, you can delete users. 

1. Navigate to **Project > Project Settings**, click **Project Members**. 
   ![Project Members](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Deleteing_Users_from_a_Project_1.1.png)

2. Hover over the user you want to delete and click **Delete**. 
   ![Delete](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Deleting_Users_From_a_Project_2.png)

3. On **Delete Member** dialog, enter **DELETE** and click **Delete**.
   ![Delete](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/Deleting_Users_From_a_Project_3.1.png)


Alternatively, you can also delete user from global settings by navigating to **Settings > Users**.

---

## **Invite a Read Only User**

1. From the left navigation bar, go to **Settings > Users**.
   ![Users](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/read_only_user_1.png)

2. On the **Users** details page, click **Add new user** in the top-right corner of the screen.
   ![Add new User](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/read_only_user_2.png)

3. In the **Add New User** dialog, enter the email address of the user in the **Email** field.
   ![Email](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/read_only_user_3.png)

4. Select the **Read Only** checkbox to assign Read Only access to the user.
   ![Read Only](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/read_only_user_4.png)

5. Click **Send Invite**.
   ![Send Invite](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/read_only_user_5.png)

A confirmation message **Invite sent successfully** appears, and the invited user is listed under the **Users** page with the status **Invited**. The user will receive an email invitation to join the workspace with Read Only access.

[[info | **NOTE**:]]
| Until the invited user accepts the invitation, their status remains Invited. You can click **Resend Invite** next to the user's name if needed.
| ![Resend Invite](https://s3.amazonaws.com/website-static-docs.testsigma.com/new_images/projects/Updated_Doc_Images/read_only_user_6.png)