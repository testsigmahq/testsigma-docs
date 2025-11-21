---
title: "Command-Line Arguments & Usage Guide"
metadesc: "Customize the behavior of the Testsigma Agent by passing command-line arguments when starting it from the installation directory in Testsigma"
noindex: false
order: 11.6
page_id: "using-command-line-arguments"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Frequently Used Arguments"
  url: "#frequently-used-arguments"
- type: link
  name: "Other Arguments"
  url: "#other-arguments"
---

---

You can customize the behavior of the Testsigma Agent by passing command-line arguments when starting it from the installation directory. These arguments let you configure registration, logging, memory usage, browsers, proxies, and other advanced settings. This article discusses the available arguments, their purpose, and how to use them.

[[info | **NOTE**:]]
| Pass these arguments only the first time you start the agent. For subsequent launches, start the agent by double-clicking the executable in the Agent folder.

---

## **Frequently Used Arguments**

### Argument: **`--TS_AUTO_DETECT_PROXY`**

Enables the Agent to automatically detect and use a network proxy, including proxies configured via PAC files.

**Steps:**

1. Confirm your network requires a proxy to access the internet or https://app.testsigma.com/.

2. Open a terminal from the Agent installation directory.

3. Run the following command:
   ```bash
   ./start.sh --TS_AUTO_DETECT_PROXY=true
   ```

4. The Agent automatically detects and uses the proxy settings.

> **Other instances:**
> - Useful in environments with multiple proxies where the active one needs to be selected dynamically.
> - Ideal for users switching between office and home networks without reconfiguring the Agent.

---

### Argument: **`--TS_DELEGATE_SSL_VALIDATION`**

Delegates SSL validation to SSL inspection tools instead of Java, bypassing SSL certificate validation errors.

**Steps:**

1. Identify SSL errors during Agent startup (e.g., PKIX exception).

2. Open a terminal from the Agent installation directory.

3. Run the following command:
   ```bash
   ./start.sh --TS_DELEGATE_SSL_VALIDATION=true
   ```

4. The Agent delegates SSL validation and starts successfully.

> **Other instances:**
> - Useful when SSL inspection tools like Zscaler, Blue Coat, or corporate firewalls interfere with Java SSL validation.
> - Helps in test or sandbox environments where adding certificates to the trust store is not practical.

---

### Argument: **`--TS_TRUST_STORE_TYPE`**

Configures the trust store the Agent should use for SSL certificates.

**Supported Values**
   - **JKS**: Java KeyStore (default).
   - **PKCS12**: Public Key Cryptography Standard #12.
   - **WINDOWS-ROOT**: Uses the Windows system certificate store.

<br>

**Steps:**
1. Verify SSL inspection tools require certificates from Windows root store (Windows only).

2. Open a terminal from the Agent installation directory.

3. Run the following command:
   ```bash
   ./start.sh --TS_TRUST_STORE_TYPE=WINDOWS-ROOT
   ```

4. The Agent uses the Windows certificate store for SSL connections.

> **Other instances:**
> - Use **jsse** explicitly if you want the default Java trust store instead of Windows root.
> - Useful when testing in environments with custom certificates installed only in Windows certificate store.

---

### Argument: **`--TS_USE_SYSTEM_PROXY`**

Makes the Agent follow system-defined proxy settings automatically.

**Steps:**

1. Confirm system proxy settings are configured.

2. Open a terminal from the Agent installation directory.

3. Run the following command:
   ```bash
   ./start.sh --TS_USE_SYSTEM_PROXY=true
   ```

4. The Agent uses the system proxy to connect to the internet.

> **Other instances:**
> - Useful for corporate networks where proxy settings are centrally managed via system policies.
> - Works when combined with **AUTO\_DETECT\_PROXY** to fallback to system proxy if auto-detection fails.


---

## **Other Arguments**

### Argument: **`--TS_ACTIVATION_KEY`**

Use this argument to create an agent and activate it later. 

**Steps:**

1. Create an agent and select **Activate Later**.

2. From the Agent Details page, copy the activation key.
   ```bash
   --TS_ACTIVATION_KEY=<KEY>
   ```

3. Open a terminal and run the following command from the agent installation directory:
   ```bash
   ./start.sh --TS_ACTIVATION_KEY=<KEY>
   ```
4. The agent activates.

---

### Arguments: **`--TS_AUTO_REGISTRATION_KEY`** & **`--TS_AUTO_REGISTRATION_TITLE`**<br>

Use these arguments to automatically register an agent with a title.

**Steps:**

1. From the **Dashboard**, go to **Settings > API Keys**.

2. Click **Create API Key**, and copy the generated key.

3. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./start.sh --TS_AUTO_REGISTRATION_KEY=<KEY> --TS_AUTO_REGISTRATION_TITLE=<agent-title>
   ```

4. The agent registers and activates with the specified title.

---

### Arguments: **`--TS_AUTO_REGISTRATION_HTTPS_PORT`** & **`--TS_AUTO_REGISTRATION_HTTP_PORT`**

Use these arguments to specify the HTTPS and HTTP ports for auto-registering the agent.

**Steps:**

1. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh \
   --TS_AUTO_REGISTRATION_KEY=<KEY> \
   --TS_AUTO_REGISTRATION_TITLE=<unique-agent-title> \
   --TS_AUTO_REGISTRATION_HTTPS_PORT=<port> \
   --TS_AUTO_REGISTRATION_HTTP_PORT=<port>
   ```

2. The agent registers using the specified ports.

---

### Argument: **`--TS_ADDITIONAL_JVM_ARGS`**

Use this argument to pass additional Java Virtual Machine arguments to the agent. This is useful for advanced tuning, debugging, or custom runtime configurations.

**Steps:**

1. Identify the JVM arguments you want to pass.
   
   **Example**: 
   ```bash   
   -Dlogging.file.name=/var/log/testsigma/agent.log
   ```

2. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./start.sh --TS_ADDITIONAL_JVM_ARGS="-Dlogging.file.name=/var/log/testsigma/agent.log"
   ```
3. The agent starts with the specified JVM arguments.

[[info | **NOTE**:]]
| - Wrap multiple JVM arguments in quotes. <br>
|   **Example**: 
|    ```bash
|    ./start.sh --TS_ADDITIONAL_JVM_ARGS="-Dlogging.file.name=/var/log/testsigma/agent.log -Dlogging.level=debug"
|      ```
| - Use this option to add custom properties that are not covered by predefined agent arguments.

---

### Argument: **`--TS_AGENT_JAR_PATH`**

Use this argument to specify the file system path to the agent.jar file. This is useful when the JAR is maintained in a custom directory. 

**Steps:**

1. Locate the `agent.jar` file on your system.

2. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./start.sh --TS_AGENT_JAR_PATH=<path-to-jar-file>
   ```

3. The agent runs using the JAR from the specified path.

---

###  Arguments: **`--TS_CHROME_PATH`**, **`--TS_EDGE_PATH`**, & **`--TS_FIREFOX_PATH`**

Use these arguments to specify the file system path for a browser executable. This ensures that the agent runs tests on the specified browser version.

**Steps:**

1. Install the required browser version on your system.

2. Identify the full path to the browser executable.

3. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh --TS_CHROME_PATH=<path-to-chrome> \
   --TS_EDGE_PATH=<path-to-edge> \
   --TS_FIREFOX_PATH=<path-to-firefox>
   --TS_IE_PATH=<path-to-internet-explorer>
   ```

4. The agent runs tests using the specified browser versions.

---

### Argument: **`--TS_DATA_DIR`**

**Steps:**

Use this argument to specify the file system path where the agent stores its data.

1. Identify the directory where you want the agent to store its data.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh --TS_DATA_DIR=<path-to-data-directory>
   ```

3. The agent stores all data in the specified directory.

---

### Argument: **`--TS_ENABLE_GC_LOG`**

Use this argument to enable garbage collection logging which helps in diagnosing memory usage issues and performance.

**Steps:**

1. Decide whether to enable GC logging.
   - **To enable**: true
   - **To disable**: false (default)

2. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./start.sh --TS_ENABLE_GC_LOG=true
   ```

3. The agent starts with GC logging enabled.

---

### Argument: **`--TS_ENABLE_HEAP_DUMP`**

Use this argument to enable heap dump generation if the agent process crashes.

**Steps:**

1. Decide whether to enable heap dump generation.
   **To enable**: true
   **To disable**: false (default)

2. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./start.sh --TS_ENABLE_HEAP_DUMP=true
   ```

3. If the agent process crashes, a heap dump file is created in the agent’s working directory.

---

### Argument: **`--TS_IS_HEADLESS`**

Use this argument to run the agent in headless mode. In headless mode, the browsers controlled by the agent run without a visible user interface.

**Steps:**

1. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh --TS_IS_HEADLESS=true
   ```

2. The agent starts in headless mode & executes all tests without opening browser windows.

---

### Argument: **`--TS_IS_MOBILE_DISABLED`**

Use this argument to disable all mobile testing capabilities on the agent. Disabling mobile support reduces resource consumption and helps tests run faster.

**Steps:**

1. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh --TS_IS_MOBILE_DISABLED=true
   ```

2. The agent starts with mobile testing disabled.

---

### Argument: **`--TS_JAVA_HOME`**

Use this argument to specify the system path to the Java Runtime Environment that the agent should use.

**Steps:**

1. Identify the system path of the required Java installation.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh --TS_JAVA_HOME=<path-to-java>
   ```

3. The agent starts using the specified Java runtime.

---

### Argument: **`--TS_LOGGING_LEVEL`**

Use this argument to specify the logging level for the agent. The logging level controls the amount of detail written to the agent logs.

**Supported Values**
   - **DEBUG**: Detailed diagnostic information for troubleshooting.
   - **INFO**: General operational messages (default).
   - **WARN**: Warnings about potential issues.
   - **ERROR**: Error messages only.

**Steps**

1. Decide the logging level you want to set.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh --TS_LOGGING_LEVEL=DEBUG
   ```

3. The agent starts with the specified logging level.

---

### Arguments: **`--TS_MAX_MEMORY`** & **`--TS_MIN_MEMORY`**

Use these arguments to configure Java heap memory allocation for the agent.

**Steps:**

1. Decide the memory values you want to allocate.
   - Use **m** to specify megabytes (for example, 1024m).
   - Use **g** to specify gigabytes (for example, 4g).

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh --TS_MIN_MEMORY=1024m --TS_MAX_MEMORY=4096m
   ```
3. The agent starts with the specified memory settings.

---

### Argument: **`--TS_NON_PROXY_HOSTS`**

Use this argument to specify a comma-separated list of hosts that should bypass proxy settings.

**Steps:**

1. Identify the hosts that should bypass the proxy.

   **Example**: `localhost`, `127.0.0.1`, `my-internal-server`.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh --TS_NON_PROXY_HOSTS="localhost,127.0.0.1,my-internal-server"
   ```

3. The agent connects directly to the specified hosts.

---

### Argument: **`--TS_ROOT_DIR`**

Use this argument to specify the file system path where the agent is installed.

**Steps:**

1. Identify the directory where the agent is installed or should be installed.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./start.sh --TS_ROOT_DIR=<path-to-directory>
   ```

3. The agent starts using the specified root directory.

---