---
title: "Setup and Installation: Docker"
metadesc: "Learn how to set up Testsigma Tunnel using Docker for testing of locally hosted applications across real browsers, bypassing firewalls & proxy restrictions."
noindex: false
order: 32.6
page_id: "Testsigma Tunnel"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Setup Testsigma Tunnel Using Docker"
  url: "#setup-testsigma-tunnel-using-docker"
---

---

Setting up Testsigma Tunnel with Docker ensures secure and reliable connections for your test automation. This article discusses installing Testsigma Tunnel using Docker. 

---

> ## **Prerequisites**
> 
> - Ensure you have reviewed and have all the system requirements mentioned [here](https://testsigma.com/docs/testsigma-tunnel/key-components/).

---

## **Setup Testsigma Tunnel Using Docker**
1. Create a **docker-compose.yml** file in your project directory with the following content:

   ```yaml
     services:
        testsigma-tunnel:
        image: testsigmainc/testsigma-tunnel:<arm64/amd64>-latest
        container_name: testsigma-tunnel
        environment:
             - KEY=<API_KEY>
             - TUNNEL_NAME=<NAME_OF_TUNNEL>
             - CONNECTIONS=<NUMBER>
             - INACTIVE_TIMEOUT=<NUMBER in seconds>
             - VERBOSE=true/false
   ```

2. Replace the placeholder values in the **docker-compose.yml** file:
   - **&lt;API\_KEY&gt;:** Your Testsigma authentication key.
   - **&lt;NAME\_OF\_TUNNEL&gt;:** The name of your tunnel.
   - **&lt;NUMBER&gt;:** The number of connections to establish.
   - **&lt;NUMBER in seconds&gt;:** The inactive timeout duration.
   - **true/false:** Set to ***true*** for verbose logging or ***false*** to disable it.

3. Run the following command to start the Testsigma Tunnel service: <br>
   ```docker compose up -d```

4. Once the service is running, logs will indicate that **Testsigma Tunnel** is active. Use the tunnel name for your automation tests.

5. To stop the service, use the following command: <br>
   ```docker compose down```

---