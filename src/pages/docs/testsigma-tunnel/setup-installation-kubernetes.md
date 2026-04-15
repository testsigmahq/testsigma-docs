---
title: "Setup and Installation: Kubernetes (Helm)"
metadesc: "Learn how to deploy Testsigma Tunnel on Kubernetes using Helm to test locally hosted applications, configure it securely, and manage the deployment over time."
noindex: false
order: 34.7
page_id: "Testsigma Tunnel"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "How the Tunnel Works"
  url: "#how-the-tunnel-works"
- type: link
  name: "Create the Helm Chart"
  url: "#create-the-helm-chart"
- type: link
  name: "Configure Your Values File"
  url: "#configure-your-values-file"
- type: link
  name: "Deploy the Chart"
  url: "#deploy-the-chart"
- type: link
  name: "Verify the Deployment"
  url: "#verify-the-deployment"
- type: link
  name: "Configuration Reference"
  url: "#configuration-reference"
- type: link
  name: "Manage Secrets"
  url: "#manage-secrets"
- type: link
  name: "Scale and Manage the Tunnel"
  url: "#scale-and-manage-the-tunnel"
- type: link
  name: "Update the Tunnel"
  url: "#update-the-tunnel"
- type: link
  name: "Advanced Configuration"
  url: "#advanced-configuration"
- type: link
  name: "Troubleshoot"
  url: "#troubleshoot"
---

---

The Testsigma Tunnel Client creates a secure connection between your Kubernetes cluster and the Testsigma platform. This connection lets you run automated tests against applications deployed in private networks or behind firewalls, without exposing those applications to the public internet.

This article discusses how to deploy the Testsigma Tunnel Client on Kubernetes using a Helm chart, configure it securely, and manage the deployment over time.

---

> <p id="prerequisites">Prerequisites</p>
>
> Before you begin, ensure that you have:
> 1. Referred to the [documentation on key components](https://testsigma.com/docs/testsigma-tunnel/key-components/).
> 2. A Kubernetes cluster running version 1.19 or later.
> 3. Helm 3.x installed on your local machine.
> 4. kubectl configured with access to your cluster.
> 5. Kubernetes nodes labeled with the appropriate **pool-type** value (for example, **app** or **common**).

---

## **How the Tunnel Works**

When you deploy the Helm chart, it creates the following Kubernetes resources:

| Resource | Description |
|---|---|
| **StatefulSet** | Runs the tunnel client pods using an OrderedReady pod management policy. Pods start one at a time in sequence. |
| **ConfigMap** | Mounts the tunnel configuration file (args.yaml) into each container at startup. |
| **Service** | (Optional) Provides a headless service for StatefulSet DNS resolution, required when you deploy multiple replicas. |

The chart uses a StatefulSet with an **OrderedReady** pod management policy. This policy ensures that the first pod registers the tunnel with the Testsigma server before any additional pods start. Each subsequent pod then joins the already-registered tunnel session rather than attempting to create a new registration.

[[info | Note:]]
| If you use a standard Deployment instead of a StatefulSet, all replicas start simultaneously. This creates a race condition in which multiple pods attempt to register the same tunnel at the same time. The StatefulSet prevents this.

---

## **Create the Helm Chart**

Follow these steps to build the Helm chart directory from scratch. If you already have a chart, skip to **Configure Your Values File**.

### **Step 1: Create the Chart Directory Structure**

Run the following commands to create the required directories:

```bash
mkdir -p testsigma-tunnel/templates
cd testsigma-tunnel
```

When you finish creating all the files described in the following steps, your chart directory should have this structure:

```
testsigma-tunnel/
├── Chart.yaml
├── values.yaml
└── templates/
    ├── deployment.yaml
    ├── configmap.yaml
    └── service.yaml
```

### **Step 2: Create Chart.yaml**

Create a file named **Chart.yaml** in the **testsigma-tunnel/** directory with the following content:

```yaml
apiVersion: v2
name: testsigma-tunnel
description: Helm chart for Testsigma Tunnel Client
type: application
version: 0.1.0
appVersion: "0.1.0"
```

### **Step 3: Create the StatefulSet Template**

Create **templates/deployment.yaml**. This template defines the StatefulSet that runs the tunnel client pod and mounts the configuration file.

```yaml
{{- range $name, $deployment := .Values.Deployments }}
{{- if $deployment.enabled }}
---
kind: StatefulSet
apiVersion: apps/v1
metadata:
  name: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}-statefulset
  labels:
    app: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}
  namespace: {{ (index $.Values.Namespace $name).name }}
spec:
  serviceName: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}-headless
  replicas: {{ $deployment.replicas }}
  podManagementPolicy: OrderedReady
  selector:
    matchLabels:
      app: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}
  template:
    metadata:
      labels:
        app: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}
    spec:
      containers:
        - name: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}
          image: {{ $deployment.containers.image }}:{{ $deployment.containers.version }}
          imagePullPolicy: {{ $deployment.containers.imagePullPolicy }}
          volumeMounts:
            - name: config
              mountPath: /app/args.yaml
              subPath: args.yaml
              readOnly: true
      volumes:
        - name: config
          configMap:
            name: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}-config
      nodeSelector:
        pool-type: {{ $deployment.poolType }}
{{- end }}
{{- end }}
```

### **Step 4: Create the ConfigMap Template**

Create **templates/configmap.yaml**. This template generates a ConfigMap that contains your tunnel configuration and mounts it as a file inside the container.

```yaml
{{- range $name, $deployment := .Values.Deployments }}
{{- if $deployment.enabled }}
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}-config
  namespace: {{ (index $.Values.Namespace $name).name }}
  labels:
    app: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}
data:
  args.yaml: |
    key: {{ $deployment.config.key | quote }}
    tunnel-name: {{ $deployment.config.tunnelName | quote }}
    verbose: {{ $deployment.config.verbose }}
    {{- if $deployment.config.delegateSslValidation }}
    delegate-ssl-validation: {{ $deployment.config.delegateSslValidation }}
    {{- end }}
    {{- if $deployment.config.proxy }}
    proxy: {{ $deployment.config.proxy | quote }}
    {{- end }}
    {{- if $deployment.config.headerRules }}
    header-rules:
      {{- toYaml $deployment.config.headerRules | nindent 6 }}
    {{- end }}
{{- end }}
{{- end }}
```

### **Step 5: (Optional) Create the Headless Service Template**

If you need DNS resolution for StatefulSet pods, create **templates/service.yaml**. This file is required when you set **enabledStatefulSet: true** in your values file.

```yaml
{{- range $name, $deployment := .Values.Deployments }}
{{- if $deployment.enabled }}
{{- if $deployment.enabledStatefulSet }}
---
apiVersion: v1
kind: Service
metadata:
  name: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}-headless
  namespace: {{ (index $.Values.Namespace $name).name }}
  labels:
    app: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}
spec:
  clusterIP: None
  selector:
    app: {{ (index $.Values.Application $name).name }}-{{ $.Values.Environment.name }}
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
{{- end }}
{{- end }}
{{- end }}
```

---

## **Configure Your Values File**

Create a **values.yaml** file in the **testsigma-tunnel/** directory. Use the following example as a starting point, and replace the placeholder values with your own.

```yaml
Environment:
  name: production              # Environment name (production, staging, etc.)

Application:
  myTunnel:
    name: tunnel-client-mycompany   # Unique application name

Namespace:
  myTunnel:
    name: my-namespace              # Kubernetes namespace for this tunnel

Deployments:
  myTunnel:
    enabled: true
    replicas: 1
    poolType: app                   # Must match a node label: pool-type=<value>
    enabledStatefulSet: true        # Set to true to create the headless Service
    containers:
      image: testsigmainc/testsigma-tunnel
      version: amd64-latest
      imagePullPolicy: Always
    config:
      key: "<YOUR_TUNNEL_JWT_KEY>"  # JWT key from the Testsigma dashboard
      tunnelName: "my-tunnel"       # Name that appears in the Testsigma UI
      verbose: true                 # Enable verbose logging
      delegateSslValidation: false  # Set true to skip SSL certificate validation
      proxy: ""                     # HTTP proxy URL (leave empty if not required)
```

Replace the following placeholder values in your file:
- **\<YOUR\_TUNNEL\_JWT\_KEY\>**: Enter the JWT key from **Settings > Tunnels** in the Testsigma application.
- **tunnel-client-mycompany**: Enter a name that uniquely identifies this tunnel client in your cluster.
- **my-namespace**: Enter the Kubernetes namespace where you want to deploy the tunnel.
- **my-tunnel**: Enter the tunnel name that will appear in the Testsigma UI.

[[info | Note:]]
| Never store your JWT key in plain text in a values file that you commit to version control. See **Manage Secrets** for recommended alternatives.

---

## **Deploy the Chart**

1. Create the target namespace if it does not already exist: <br>
   ```bash
   kubectl create namespace my-namespace --dry-run=client -o yaml | kubectl apply -f -
   ```

2. Install the Helm chart from inside the **testsigma-tunnel/** directory: <br>
   ```bash
   helm install my-tunnel . -n my-namespace
   ```

---

## **Verify the Deployment**

Run the following commands to confirm that the tunnel deployed successfully.

1. Check the StatefulSet status: <br>
   ```bash
   kubectl get statefulset -n my-namespace
   ```

2. Check pod status: <br>
   ```bash
   kubectl get pods -n my-namespace
   ```

3. View tunnel client logs to confirm the tunnel registered with the Testsigma server: <br>
   ```bash
   kubectl logs -n my-namespace <pod-name> -f
   ```

In the logs, look for a message confirming that the tunnel registered successfully with the Testsigma server. If the tunnel does not appear in the Testsigma UI after a few minutes, see **Troubleshoot**.

---

## **Configuration Reference**

### **Top-level Keys**

| Key | Type | Required | Description |
|---|---|---|---|
| **Environment.name** | string | Yes | Environment identifier (for example, **production** or **staging**). Used in naming all Kubernetes resources. |

### **Deployment Keys (Deployments.\<name\>)**

| Key | Type | Required | Default | Description |
|---|---|---|---|---|
| **enabled** | boolean | Yes | — | Enables or disables this deployment. When **false**, all associated resources are removed. |
| **replicas** | integer | Yes | — | Number of tunnel client pods to run. |
| **poolType** | string | Yes | — | Node selector value for **pool-type**. Must match an existing node label. |
| **enabledStatefulSet** | boolean | No | false | When **true**, creates a headless Service for StatefulSet DNS resolution. |
| **containers.image** | string | Yes | — | Docker image name for the tunnel client. |
| **containers.version** | string | Yes | — | Docker image tag. |
| **containers.imagePullPolicy** | string | Yes | — | Image pull policy. Accepted values: **Always**, **IfNotPresent**, or **Never**. |
| **config.key** | string | Yes | — | JWT authentication key from the Testsigma dashboard. |
| **config.tunnelName** | string | Yes | — | Tunnel name visible in the Testsigma UI. |
| **config.verbose** | boolean | No | true | Enables verbose logging for the tunnel client. |
| **config.delegateSslValidation** | boolean | No | false | When **true**, the tunnel skips SSL certificate validation for upstream requests. |
| **config.proxy** | string | No | "" | HTTP proxy URL for outbound traffic. Leave empty if a proxy is not required. |
| **config.headerRules** | list | No | — | Automatic HTTP header injection rules. See **Inject HTTP Headers** for details. |

### **Application and Namespace Keys**

Each key that you define under **Deployments** must have a matching entry under both **Application** and **Namespace**. The keys must match exactly.

```yaml
Application:
  myTunnel:                        # Must match the Deployments key
    name: tunnel-client-mycompany

Namespace:
  myTunnel:                        # Must match the Deployments key
    name: my-namespace
```

---

## **Manage Secrets**

The **config.key** field contains a JWT authentication token. Treat this value as a secret and never commit it in plain text to version control.

### **Option 1: Pass the Key at Deploy Time**

Use the **--set** flag with `helm install` or `helm upgrade` to inject the JWT key without storing it in your values file:

```bash
helm install my-tunnel . -f my-values.yaml \
  --set 'Deployments.myTunnel.config.key=eyJhbGciOi...' \
  -n my-namespace
```

For deployments with multiple tunnels, pass each key separately:

```bash
helm install my-tunnel . -f my-values.yaml \
  --set 'Deployments.siteA.config.key=eyJhbGciOi...' \
  --set 'Deployments.siteB.config.key=eyJhbGciOi...' \
  -n my-namespace
```

### **Option 2: Use a Secrets Manager**

For GitOps workflows, use Sealed Secrets or External Secrets Operator to manage the JWT key:

1. Store the JWT key in your secrets backend (for example, AWS Secrets Manager or HashiCorp Vault).
2. Create an ExternalSecret resource that syncs the key into a Kubernetes Secret.
3. Reference the secret in your values file or inject it with **--set** in your CI/CD pipeline.

### **Option 3: Use CI/CD Pipeline Variables**

Store the JWT key as a pipeline secret and inject it during deployment. The following example shows a GitHub Actions workflow step:

```yaml
- name: Deploy tunnel
  run: |
    helm upgrade --install my-tunnel ./testsigma-tunnel \
      -f my-values.yaml \
      --set "Deployments.myTunnel.config.key=${{ secrets.TUNNEL_JWT_KEY }}" \
      -n my-namespace
```

### **Rotate a JWT Key**

When a JWT key expires or needs to be replaced:

1. Obtain a new key from **Settings > Tunnels** in the Testsigma application.
2. Update the key using your chosen secret management method.
3. Run `helm upgrade` to apply the updated ConfigMap.
4. The pods restart automatically and pick up the new configuration.

---

## **Scale and Manage the Tunnel**

### **Increase Replicas**

To handle more concurrent test traffic, increase the **replicas** value in your values file and apply the change:

```yaml
# In values.yaml
Deployments:
  myTunnel:
    replicas: 3   # Increase from 1 to 3 pods
```

```bash
helm upgrade my-tunnel . -f my-values.yaml -n my-namespace
```

### **Decrease Replicas**

To reduce the number of active pods, lower the **replicas** value in your values file and run `helm upgrade`. Alternatively, scale down directly with kubectl for a temporary change:

```bash
kubectl scale statefulset tunnel-client-mycompany-production-statefulset \
  --replicas=1 -n my-namespace
```

[[info | Note:]]
| Scaling with kubectl is temporary. The replica count reverts to the value in your values file the next time you run `helm upgrade`.

### **Stop the Tunnel Without Removing It**

To shut down the tunnel temporarily while keeping the Helm release and configuration intact, scale the StatefulSet to zero:

```bash
kubectl scale statefulset tunnel-client-mycompany-production-statefulset \
  --replicas=0 -n my-namespace
```

To make the change permanent through your values file, set `replicas: 0` and run `helm upgrade`.

### **Disable a Specific Tunnel**

When you manage multiple tunnels from a single values file, you can disable an individual tunnel by setting **enabled: false**. This removes all Kubernetes resources associated with that tunnel:

```yaml
Deployments:
  siteA:
    enabled: true    # Keep this tunnel running
  siteB:
    enabled: false   # Remove this tunnel's resources
```

```bash
helm upgrade my-tunnel . -f my-values.yaml -n my-namespace
```

### **Remove All Tunnel Resources**

To completely uninstall the Helm release and remove all associated Kubernetes resources: <br>
```bash
helm uninstall my-tunnel -n my-namespace
```

---

## **Update the Tunnel**

To upgrade the tunnel client image or update the configuration, you must scale down to zero replicas before running `helm upgrade`. This ensures the tunnel cleanly deregisters from the Testsigma server before the updated version starts.

[[info | Note:]]
| Do not run `helm upgrade` while pods are active. Doing so can cause tunnel registration conflicts between the existing and updated versions.

1. Scale down to zero pods: <br>
   ```bash
   kubectl scale statefulset tunnel-client-mycompany-production-statefulset \
     --replicas=0 -n my-namespace
   ```

2. Wait for all pods to terminate: <br>
   ```bash
   kubectl get pods -n my-namespace \
     -l app=tunnel-client-mycompany-production -w
   ```

3. Update your values file with the new image version or configuration changes:
   ```yaml
   Deployments:
     myTunnel:
       containers:
         version: amd64-1.2.0   # Updated version tag
   ```

4. Apply the upgrade: <br>
   ```bash
   helm upgrade my-tunnel . -n my-namespace
   ```

5. Scale back up to the desired number of replicas: <br>
   ```bash
   kubectl scale statefulset tunnel-client-mycompany-production-statefulset \
     --replicas=<desired-count> -n my-namespace
   ```

6. Verify the upgrade by checking pod status and logs:
   ```bash
   # Confirm pods are running with the new image
   kubectl get pods -n my-namespace -l app=tunnel-client-mycompany-production

   # Check logs to confirm successful registration
   kubectl logs -n my-namespace \
     tunnel-client-mycompany-production-statefulset-0 -f
   ```

---

## **Advanced Configuration**

### **Deploy Multiple Tunnels**

You can manage multiple tunnel clients from a single values file. Each tunnel requires its own key under **Deployments**, **Application**, and **Namespace**:

```yaml
Application:
  siteA:
    name: tunnel-client-site-a
  siteB:
    name: tunnel-client-site-b

Namespace:
  siteA:
    name: my-namespace
  siteB:
    name: my-namespace

Deployments:
  siteA:
    enabled: true
    replicas: 1
    poolType: app
    containers:
      image: testsigmainc/testsigma-tunnel
      version: amd64-latest
      imagePullPolicy: Always
    config:
      key: "<JWT_KEY_FOR_SITE_A>"
      tunnelName: "site-a-tunnel"
      verbose: true
  siteB:
    enabled: true
    replicas: 1
    poolType: app
    containers:
      image: testsigmainc/testsigma-tunnel
      version: amd64-latest
      imagePullPolicy: Always
    config:
      key: "<JWT_KEY_FOR_SITE_B>"
      tunnelName: "site-b-tunnel"
      verbose: true
```

### **Inject HTTP Headers**

Configure the tunnel to automatically inject HTTP headers into requests for specific hostnames. This is useful for adding authentication credentials or custom metadata to outbound requests.

```yaml
config:
  headerRules:
    # Inject a Basic Auth header for a specific host
    - hostname: "internal-app.example.com"
      headers:
        X-TS-BASIC-AUTH-HEADER: "Basic dXNlcm5hbWU6cGFzc3dvcmQ="

    # Inject custom headers for an API host
    - hostname: "api.example.com"
      headers:
        X-Custom-Auth: "my-token"
        X-Environment: "staging"
```

[[info | Note:]]
| Use **X-TS-BASIC-AUTH-HEADER** for URL-based Basic Authentication. This header works with both HTTP and HTTPS endpoints.

### **Route Traffic Through a Proxy**

If your cluster requires an outbound HTTP proxy, add the proxy URL to the **config** section of your values file:

```yaml
config:
  proxy: "http://proxy.internal.example.com:8080"
```

---

## **Troubleshoot**

| Symptom | Possible Cause | Resolution |
|---|---|---|
| Pod stuck in **Pending** | No nodes match the **pool-type** selector. | Run `kubectl get nodes --show-labels` and verify that at least one node has the expected **pool-type** label. |
| Pod in **CrashLoopBackOff** | Invalid JWT key or malformed tunnel configuration. | Run `kubectl logs <pod-name> -n my-namespace` to inspect the error output. Verify that **config.key** and **config.tunnelName** are correct. |
| Tunnel not visible in Testsigma UI | Incorrect **tunnelName** value or expired JWT key. | Confirm that **config.tunnelName** matches what you expect to see in the UI. Obtain a fresh JWT key from **Settings > Tunnels** if the key has expired. |
| Connection timeouts during testing | Network policy or proxy misconfiguration. | Verify that **config.proxy** is set correctly and that cluster network policies permit outbound connections to the Testsigma platform. |
| SSL errors during test execution | The upstream application uses a self-signed certificate. | Set **config.delegateSslValidation: true** in your values file and run `helm upgrade` to apply the change. |

If you cannot resolve the issue using the steps above, collect the full logs from the affected pod and contact Testsigma support.

```bash
kubectl describe statefulset tunnel-client-mycompany-production-statefulset \
  -n my-namespace

kubectl logs -n my-namespace \
  statefulset/tunnel-client-mycompany-production-statefulset -f
```

---
