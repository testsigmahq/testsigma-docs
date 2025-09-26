---
title: "Command-Line Arguments & Usage Guide"
metadesc: "Customize the behavior of the Testsigma Agent by passing command-line arguments when starting it from the installation directory in Testsigma"
noindex: false
order: 11.4
page_id: "using-command-line-arguments"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Steps to Trigger Tests on Local Devices"
  url: "#steps-to-trigger-tests-on-local-devices"
---

---

You can customize the behavior of the Testsigma Agent by passing command-line arguments when starting it from the installation directory. These arguments let you configure registration, logging, memory usage, browsers, proxies, and other advanced settings. This article discusses the available arguments, their purpose, and how to use them.

---

## **Arguments and Usage Details**

### Argument: **`--TS_ACTIVATION_KEY`**

Use this argument to create an agent and activate it later. 

1. Create an agent and select **Activate Later**.

2. From the Agent Details page, copy the activation key.
   ```bash
   --TS_ACTIVATION_KEY=<KEY>
   ```

3. Open a terminal and run the following command from the agent installation directory:
   ```bash
   ./TestsigmaAgent --TS_ACTIVATION_KEY=<KEY>
   ```
4. The agent activates.

---

### Arguments: **`--TS_AUTO_REGISTRATION_KEY`** & **`--TS_AUTO_REGISTRATION_TITLE`**<br>

Use these arguments to automatically register an agent with a title.

1. From the **Dashboard**, go to **Settings > API Keys**.

2. Click **Create API Key**, and copy the generated key.

3. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./TestsigmaAgent --TS_AUTO_REGISTRATION_KEY=<KEY> --TS_AUTO_REGISTRATION_TITLE=<agent-title>
   ```

4. The agent registers and activates with the specified title.

---

### Arguments: **`--TS_AUTO_REGISTRATION_HTTPS_PORT`** & **`--TS_AUTO_REGISTRATION_HTTP_PORT`**

Use these arguments to specify the HTTPS and HTTP ports for auto-registering the agent.

1. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent \
   --TS_AUTO_REGISTRATION_KEY=<KEY> \
   --TS_AUTO_REGISTRATION_TITLE=<unique-agent-title> \
   --TS_AUTO_REGISTRATION_HTTPS_PORT=<port> \
   --TS_AUTO_REGISTRATION_HTTP_PORT=<port>
   ```

2. The agent registers using the specified ports.

---

### Argument: **`--TS_ADDITIONAL_JVM_ARGS`**
Use this argument to pass additional Java Virtual Machine arguments to the agent. This is useful for advanced tuning, debugging, or custom runtime configurations.

1. Identify the JVM arguments you want to pass.
   
   **Example**: 
   ```bash   
   -Dlogging.file.name=/var/log/testsigma/agent.log
   ```

2. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./TestsigmaAgent --TS_ADDITIONAL_JVM_ARGS="-Dlogging.file.name=/var/log/testsigma/agent.log"
   ```
3. The agent starts with the specified JVM arguments.

[[info | **NOTE**:]]
| - Wrap multiple JVM arguments in quotes. <br>
|   **Example**: 
|    ```bash
|    ./TestsigmaAgent --TS_ADDITIONAL_JVM_ARGS="-Dlogging.file.name=/var/log/testsigma/agent.log -Dlogging.level=debug"
|      ```
| - Use this option to add custom properties that are not covered by predefined agent arguments.

---

### Argument: **`--TS_AGENT_JAR_PATH`**

Use this argument to specify the file system path to the agent.jar file. This is useful when the JAR is maintained in a custom directory. 

1. Locate the `agent.jar` file on your system.

2. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./TestsigmaAgent --TS_AGENT_JAR_PATH=<path-to-jar-file>
   ```

3. The agent runs using the JAR from the specified path.

---

###  Arguments: **`--TS_CHROME_PATH`**, **`--TS_EDGE_PATH`**, & **`--TS_FIREFOX_PATH`**

Use these arguments to specify the file system path for a browser executable. This ensures that the agent runs tests on the specified browser version.

1. Install the required browser version on your system.

2. Identify the full path to the browser executable.

3. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_CHROME_PATH=<path-to-chrome> \
   --TS_EDGE_PATH=<path-to-edge> \
   --TS_FIREFOX_PATH=<path-to-firefox>
   --TS_IE_PATH=<path-to-internet-explorer>
   ```

4. The agent runs tests using the specified browser versions.

---

### Argument: **`--TS_DATA_DIR`**

Use this argument to specify the file system path where the agent stores its data.

1. Identify the directory where you want the agent to store its data.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_DATA_DIR=<path-to-data-directory>
   ```

3. The agent stores all data in the specified directory.

---

### Argument: **`--TS_ENABLE_GC_LOG`**

Use this argument to enable garbage collection logging which helps in diagnosing memory usage issues and performance.

1. Decide whether to enable GC logging.
   - **To enable**: true
   - **To disable**: false (default)

2. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./TestsigmaAgent --TS_ENABLE_GC_LOG=true
   ```

3. The agent starts with GC logging enabled.

---

### Argument: **`--TS_ENABLE_HEAP_DUMP`**

Use this argument to enable heap dump generation if the agent process crashes.

1. Decide whether to enable heap dump generation.
   **To enable**: true
   **To disable**: false (default)

2. Open a terminal and run the following command from the agent installation directory:
   
   ```bash
   ./TestsigmaAgent --TS_ENABLE_HEAP_DUMP=true
   ```

3. If the agent process crashes, a heap dump file is created in the agent’s working directory.

---

### Argument: **`--TS_DELEGATE_SSL_VALIDATION`**

Use this argument to delegate SSL certificate validation to the operating system.

1. Decide whether to enable or disable system-level SSL validation.
   - **To enable**: true
   - **To disable**: false (default)

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_DELEGATE_SSL_VALIDATION=true
   ```

3. The agent starts using the system certificate store for SSL validation.

---

### Argument: **`--TS_IS_HEADLESS`**

Use this argument to run the agent in headless mode. In headless mode, the browsers controlled by the agent run without a visible user interface.

1. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_IS_HEADLESS=true
   ```

2. The agent starts in headless mode & executes all tests without opening browser windows.

---

### Argument: **`--TS_IS_MOBILE_DISABLED`**

Use this argument to disable all mobile testing capabilities on the agent. Disabling mobile support reduces resource consumption and helps tests run faster.

1. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_IS_MOBILE_DISABLED=true
   ```

2. The agent starts with mobile testing disabled.

---

### Argument: **`--TS_JAVA_HOME`**

Use this argument to specify the system path to the Java Runtime Environment that the agent should use.

1. Identify the system path of the required Java installation.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_JAVA_HOME=<path-to-java>
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
   ./TestsigmaAgent --TS_LOGGING_LEVEL=DEBUG
   ```

3. The agent starts with the specified logging level.

---

### Arguments: **`--TS_MAX_MEMORY`** & **`--TS_MIN_MEMORY`**

Use these arguments to configure Java heap memory allocation for the agent.

1. Decide the memory values you want to allocate.
   - Use **m** to specify megabytes (for example, 1024m).
   - Use **g** to specify gigabytes (for example, 4g).

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_MIN_MEMORY=1024m --TS_MAX_MEMORY=4096m
   ```
3. The agent starts with the specified memory settings.

---

### Argument: **`--TS_NON_PROXY_HOSTS`**

Use this argument to specify a comma-separated list of hosts that should bypass proxy settings.

1. Identify the hosts that should bypass the proxy.

   **Example**: `localhost`, `127.0.0.1`, `my-internal-server`.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_NON_PROXY_HOSTS="localhost,127.0.0.1,my-internal-server"
   ```

3. The agent connects directly to the specified hosts.

---

### Argument: **`--TS_ROOT_DIR`**

Use this argument to specify the file system path where the agent is installed.

1. Identify the directory where the agent is installed or should be installed.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_ROOT_DIR=<path-to-directory>
   ```

3. The agent starts using the specified root directory.

---

### Argument: **`--TS_USE_SYSTEM_PROXY`**

Use this argument to configure the agent to use the system proxy settings for all network calls.

1. Ensure your system proxy settings are correctly configured.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_USE_SYSTEM_PROXY=true
   ```

3. The agent starts using the system-configured proxy settings.

---

### Argument: **`--TS_TRUST_STORE_TYPE`**

Use this argument to specify the type of trust store for SSL certificate validation.

**Supported Values**
   - **JKS**: Java KeyStore (default).
   - **PKCS12**: Public Key Cryptography Standard #12.
   - **WINDOWS-ROOT**: Uses the Windows system certificate store.

**Steps**

1. Decide which trust store type your environment requires.

2. Open a terminal and run the following command from the agent installation directory:

   ```bash
   ./TestsigmaAgent --TS_TRUST_STORE_TYPE=WINDOWS-ROOT
   ```

3. The agent starts using the specified trust store type.

---