---
title: "Users & Role Management"
metadesc: "How to manage users and roles in Testsigma."
noindex: false
order: 3.2
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
  name: "Assign Roles to Users From Project Settings"
  url: "#assign-roles-to-users-from-project-settings"
- type: link
  name: "Deleting Users From a Project"
  url: "#deleting-users-from-a-project"  
---

---

When a user is added in Testsigma, they can be assigned various roles. This document covers how to add users and assign them different roles and accesses within Testsigma.

---

## **Roles in Testsigma**
Below are the four roles that can be assigned to a project member in Testsigma:

1. **Super Administrator:** A user in a ‘Super Administrator’ role will have complete control over the Testsigma project but will be restricted from viewing Account or Billing-related information.

2. **Test Manager:** A user in the role of ‘Test Manager’ will be able to manage multiple projects - including assigning users to the projects, adding applications, versions in each project.

3. **Test Lead:** A user in the role of ‘Test Lead’ will be able to manage everything in the assigned project - including adding applications, versions in that project.

4. **Automation Engineer/Developer:** A user in the role of ‘Automation Engineer/Developer’ can write, view, update test cases, and everything required to write test cases like test data profiles, Elements, custom functions, etc.

5. **Account Administrator:** A user in the role of ‘Account Administrator’ has all the rights as a Super Administrator. In addition, they will also have access to billing-related information for that particular account.



---

## **Edit Users to Assign New Roles**
1. Navigate to **Settings > Users**.
![Settings](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/urmnavsets.png)

2. Hover over the user and click on kebab menu. 
![Kebab Menu](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/urmkm.png)

3. Click on **Edit user role**.
![Edit User](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/nuroleurm.png)

4. On **Edit User Role / Assign Projects** prompt, select roles and click on **Update**. 
![Edit User Roles](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/roleurm.png)

---

## **Assign Roles to Users from Project Settings**

1. Navigate to **Project > Project Settings**, click on **Project Members**. 
![Project Members](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/urmpmem.png)


2. Click on **Invite**.
![Invite](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/urminvite.png)


3. On **Invite new member** prompt, enter **Email** and select the **Role** you want to assign. 
![Email & Role](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/urmear.png)

4. Click on **Update**. 
![New User](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/urmud.png)


[[info | **NOTE**:]]
| You can only add users as **Test Manager**, **Test Lead**, and **Automation Engineer/Developer**. To assign **Super Admin** roles, refer to [Assign Projects](https://testsigma.com/docs/collaboration/assign-projects/).

The invited user should receive an invitation email. They will need to join via the link sent in the email. Once they have joined they should be able to work on the project according to the role assigned to them.



---

## **Deleting Users From a Project**


If you're the super administrator of the project, you can delete users. 

1. Navigate to **Project > Project Settings**, click on **Project Members**. 
![Project Members](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/autpmemm.png)


2. Hover over the user you want to delete and click on **Delete**. 
![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/autpcodelete.png)


3. On **Delete member**, enter **DELETE** and click on **Delete**.
![Delete](https://s3.amazonaws.com/static-docs.testsigma.com/new_images/projects/applications/autpdlprompt.png)


Alternatively, you can also delete user from global settings by navigating to **Settings > Users**.



---
