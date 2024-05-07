---
title: "Restarting docker"
metadesc: "This article helps you understand why you're unable to start or access the application. The following command will help you restart the docker and troubleshoot the issue"
noindex: false
order: 23.71
page_id: "Restart docker when you're unable to access the app"
warning: false
---

<br>

If the application is not starting or you are unable to access the application, run the following command on the server:

```
docker update --restart unless-stopped $(docker ps -q)
```

With this command, you ensure that all running Docker containers will automatically restart if they are explicitly stopped.




