---
title: "Setting Up Testsigma Agent on Kubernetes"
metadesc: "Install the Testsigma Agent on a Kubernetes cluster using the official Helm chart. Chrome runs alongside the agent by default, with Firefox and Edge available as options."
noindex: false
order: 12.35
page_id: "setting-up-testsigma-agent-on-kubernetes"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Where the Chart Is Published"
  url: "#where-the-chart-is-published"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Install the Agent"
  url: "#install-the-agent"
- type: link
  name: "Register a New Agent Automatically"
  url: "#register-a-new-agent-automatically"
- type: link
  name: "Select Your Testsigma Region"
  url: "#select-your-testsigma-region"
- type: link
  name: "Enable Additional Browsers"
  url: "#enable-additional-browsers"
- type: link
  name: "Install Using Argo CD"
  url: "#install-using-argo-cd"
- type: link
  name: "Verify the Installation"
  url: "#verify-the-installation"
- type: link
  name: "Configuration Reference"
  url: "#configuration-reference"
- type: link
  name: "Upgrade and Uninstall"
  url: "#upgrade-and-uninstall"
- type: link
  name: "Troubleshooting"
  url: "#troubleshooting"
---

---

If you already run Kubernetes, you can deploy the **Testsigma Agent** as a Helm release instead of installing it on a machine. The chart runs the agent together with the Selenium browsers it drives, so a single install gives you a working local execution environment. This article discusses how to install, configure, and verify that release.

This is the Kubernetes equivalent of the Docker Compose setup described in [Setting Up Testsigma Agent Locally](https://testsigma.com/docs/agent/setup-on-windows-mac-linux/). Use that page instead if you are installing on a single machine.

---

> ## **What the Chart Deploys**
> A single pod containing:
> 1. The **Testsigma Agent**
> 2. One or more **Selenium browsers**, running as sidecars
>
> Plus a **PersistentVolumeClaim** that keeps the agent registered across restarts.

The agent and the browsers share a pod on purpose. They exchange files through a shared directory during upload and download steps, and the agent reaches each browser on `localhost`. Splitting them apart breaks file upload steps.

---

## **Where the Chart Is Published**

The same chart is available from two registries. Both are public and need no credentials.

| Registry | Chart location | Container images |
|---|---|---|
| Azure Container Registry | `oci://testsigmaregistry.azurecr.io/charts/testsigma-agent` | Mirrored into the same registry |
| GitHub Container Registry | `oci://ghcr.io/testsigmainc/charts/testsigma-agent` | Pulled from Docker Hub |

Choose based on what your cluster is allowed to reach:

- Use **Azure Container Registry** with `global.imageRegistry` when egress is restricted, because the chart and every image then come from one host.
- Use **GitHub Container Registry** when your cluster can already reach Docker Hub. The images are not mirrored there, so `global.imageRegistry` does not apply and the agent and browser images are pulled from Docker Hub.

The examples in this article use Azure Container Registry. To use GitHub Container Registry instead, swap the chart address and drop the `global.imageRegistry` flag.

---

## **Prerequisites**

1. A Kubernetes cluster running **1.23 or later**. Version **1.29 or later** is recommended, so the browsers can start as native sidecars.

2. **Helm 3.8 or later**, which is required for OCI chart support.

3. A **default StorageClass**, or the name of one you want to use. Check with:
   ```bash
   kubectl get storageclass
   ```

4. A node with enough free capacity for the whole pod, agent and browsers together. With the default Chrome-only setup the pod requests **1 CPU and 3Gi**; with Firefox and Edge also enabled it requests **2 CPU and 5Gi**. The pod is scheduled as a unit, so it must fit on a single node.

5. Outbound access from the cluster to your Testsigma instance and to the registry that serves the chart and images.

[[info | **NOTE**:]]
| The agent image runs as root. If the target namespace enforces the `restricted` Pod Security Standard, the pod is rejected. Use the `baseline` standard for that namespace.

---

## **Install the Agent**

1. In the Testsigma application, navigate to **Agents** and create an agent using the **Activate Later** option. Select the agent, open the **Config** tab, and copy the **Activation Key**.

2. Create a namespace and store the activation key in a secret. Write the key
   to a temporary file rather than passing it on the command line, so it does
   not end up in your shell history or in the process list:
   ```bash
   kubectl create namespace testsigma

   umask 077 && cat > activation-key.txt   # paste the key, then press Ctrl+D

   kubectl -n testsigma create secret generic testsigma-agent-auth \
     --from-file=TS_ACTIVATION_KEY=./activation-key.txt

   rm activation-key.txt
   ```

   If you manage secrets with a tool such as External Secrets Operator or
   Sealed Secrets, create `testsigma-agent-auth` through that instead.

3. Install the chart:
   ```bash
   helm install ts-agent oci://testsigmaregistry.azurecr.io/charts/testsigma-agent \
     --version 0.2.0 -n testsigma \
     --set global.imageRegistry=testsigmaregistry.azurecr.io \
     --set agent.auth.existingSecret=testsigma-agent-auth
   ```

4. Wait for the pod to become ready:
   ```bash
   kubectl -n testsigma rollout status statefulset/ts-agent-testsigma-agent
   ```

5. The agent appears under **Agents** in the Testsigma application once it registers.

[[info | **NOTE**:]]
| `global.imageRegistry` makes the agent, the browsers, and the verification pod all pull from one registry, so that is the only host your cluster needs to reach. Omit it to pull the images from Docker Hub instead.

To install the same chart from GitHub Container Registry, use this instead of step 3:

```bash
helm install ts-agent oci://ghcr.io/testsigmainc/charts/testsigma-agent \
  --version 0.2.0 -n testsigma \
  --set agent.auth.existingSecret=testsigma-agent-auth
```

The remaining steps are identical. Every `--set` flag shown in this article applies to both registries, apart from `global.imageRegistry`.

The first start takes a few minutes. The browser images are over 1 GB each, and the browsers must pass their readiness checks before the agent container starts.

---

## **Register a New Agent Automatically**

Instead of creating the agent in the application first, the agent can register itself on startup. This suits environments where agents are created and destroyed frequently.

1. Obtain an **API Key** from the Testsigma application.

2. Create the namespace and store the key in a secret, keeping it off the
   command line for the same reason as above:
   ```bash
   kubectl create namespace testsigma

   umask 077 && cat > api-key.txt          # paste the key, then press Ctrl+D

   kubectl -n testsigma create secret generic testsigma-agent-auth \
     --from-file=TS_AUTO_REGISTRATION_KEY=./api-key.txt

   rm api-key.txt
   ```

3. Install with auto registration enabled:
   ```bash
   helm install ts-agent oci://testsigmaregistry.azurecr.io/charts/testsigma-agent \
     --version 0.2.0 -n testsigma \
     --set global.imageRegistry=testsigmaregistry.azurecr.io \
     --set agent.auth.mode=autoRegistration \
     --set agent.auth.existingSecret=testsigma-agent-auth
   ```

Each agent registers under its own pod name, so you can run several at once by
adding `--set agent.replicaCount=3` to the install command above.

To choose the name shown in the application, set `agent.auth.autoRegistration.title`.

[[info | **NOTE**:]]
| An activation key is bound to one agent record, so `agent.replicaCount` must stay at `1` in that mode. Use auto registration to run more than one agent.

---

## **Select Your Testsigma Region**

The agent image is built against a specific Testsigma region, so the three builds are not interchangeable. Set `agent.region` to match the address you sign in to:

| Sign-in address | `agent.region` |
|---|---|
| app.testsigma.com | `us` (default) |
| app-eu.testsigma.com | `eu` |
| app-in.testsigma.com | `in` |

Add the flag to the install command:

```bash
--set agent.region=eu
```

If the agent is already installed, apply it with an upgrade:

```bash
helm upgrade ts-agent oci://testsigmaregistry.azurecr.io/charts/testsigma-agent \
  --version 0.2.0 -n testsigma --reuse-values \
  --set agent.region=eu
```

If the region does not match your account, the agent starts but cannot register, because it contacts the wrong Testsigma address.

---

## **Enable Additional Browsers**

Chrome is enabled by default. Firefox and Edge are available and disabled.

To enable them during the initial install, use this in place of step 3:

```bash
helm install ts-agent oci://testsigmaregistry.azurecr.io/charts/testsigma-agent \
  --version 0.2.0 -n testsigma \
  --set global.imageRegistry=testsigmaregistry.azurecr.io \
  --set agent.auth.existingSecret=testsigma-agent-auth \
  --set browsers.firefox.enabled=true \
  --set browsers.edge.enabled=true
```

To add them to an existing release:

```bash
helm upgrade ts-agent oci://testsigmaregistry.azurecr.io/charts/testsigma-agent \
  --version 0.2.0 -n testsigma --reuse-values \
  --set browsers.firefox.enabled=true \
  --set browsers.edge.enabled=true
```

The pod is recreated, so the agent goes offline briefly and returns with the
extra browsers registered.

Each browser you enable is reported to Testsigma as available on that agent, and adds **0.5 CPU and 1Gi** to the pod's requests. Enable only the browsers you plan to use.

[[info | **NOTE**:]]
| Edge is published for `amd64` only. On a cluster with `arm64` nodes, keep the pod on `amd64` with `--set nodeSelector."kubernetes\.io/arch"=amd64`.

---

## **Install Using Argo CD**

Argo CD does not detect OCI registries automatically, so register the repository first.

1. Navigate to **Settings > Repositories > CONNECT REPO > VIA HTTPS** and enter:

   | Field | Value |
   |---|---|
   | Type | `helm` |
   | Name | `testsigma-charts` |
   | Repository URL | `testsigmaregistry.azurecr.io/charts`, or `ghcr.io/testsigmainc/charts` |
   | Enable OCI | Selected |
   | Username and Password | Leave empty |

2. Create the credential secret in the destination namespace, as shown in [Install the Agent](#install-the-agent).

3. Create the application:
   ```yaml
   apiVersion: argoproj.io/v1alpha1
   kind: Application
   metadata:
     name: testsigma-agent
     namespace: argocd
   spec:
     project: default
     source:
       repoURL: testsigmaregistry.azurecr.io/charts
       chart: testsigma-agent
       targetRevision: 0.2.0
       helm:
         releaseName: ts-agent
         values: |
           tests:
             enabled: false
           global:
             imageRegistry: testsigmaregistry.azurecr.io
           agent:
             region: us
             auth:
               mode: activationKey
               existingSecret: testsigma-agent-auth
     destination:
       server: https://kubernetes.default.svc
       namespace: testsigma
     syncPolicy:
       syncOptions:
         - CreateNamespace=true
   ```

4. Sync the application. `CreateNamespace=true` changes how a sync behaves, it
   does not start one, so a newly created application stays **OutOfSync** until
   you trigger it. In the UI, open the application and select **SYNC**, or from
   the CLI:
   ```bash
   argocd app sync testsigma-agent
   ```

   To have Argo CD deploy and self-heal without manual syncs, add this to the
   application instead:
   ```yaml
     syncPolicy:
       automated:
         prune: true
         selfHeal: true
       syncOptions:
         - CreateNamespace=true
   ```

> **Points to note:**
> - `repoURL` holds the registry path only. The chart name belongs in `chart`, and there is no `oci://` prefix.
> - `targetRevision` is the chart version, not the agent version.
> - Argo CD does not run Helm test hooks, so set `tests.enabled` to `false` and verify manually.
> - To use GitHub Container Registry, set `repoURL` to `ghcr.io/testsigmainc/charts` and remove the `global.imageRegistry` value.

---

## **Verify the Installation**

If you installed with Helm, run the bundled checks, which confirm the agent and every enabled browser are responding:

```bash
helm test ts-agent -n testsigma
```

Argo CD does not run Helm test hooks, so on an Argo CD install check the application state instead, then use the direct checks below:

```bash
argocd app get testsigma-agent
```

**Synced** and **Healthy** means the chart is applied and the pod is ready.

To inspect the agent directly, on either kind of install:

```bash
kubectl -n testsigma logs ts-agent-testsigma-agent-0 -c agent

kubectl -n testsigma exec ts-agent-testsigma-agent-0 -c agent -- \
  curl -sf http://127.0.0.1:8383/agent/health
```

Finally, confirm the agent is listed under **Agents** in the Testsigma application and run a test against it.

---

## **Configuration Reference**

Pass these with `--set`, or collect them in a values file and use `-f values.yaml`. To see every available setting:

```bash
helm show values oci://testsigmaregistry.azurecr.io/charts/testsigma-agent --version 0.2.0
```

| Setting | Default | Description |
|---|---|---|
| `agent.region` | `us` | Testsigma region: `us`, `eu`, or `in` |
| `agent.auth.mode` | `activationKey` | `activationKey` or `autoRegistration` |
| `agent.auth.existingSecret` | | Secret holding the activation or API key |
| `agent.replicaCount` | `1` | Above 1 requires `autoRegistration` |
| `agent.resources` | 2Gi and 500m CPU | Agent requests. The JVM heap is derived from the memory limit |
| `agent.persistence.enabled` | `true` | Keeps the agent registered across restarts |
| `agent.persistence.size` | `10Gi` | Volume size |
| `agent.persistence.storageClass` | | Leave empty to use the cluster default |
| `browsers.chrome.enabled` | `true` | |
| `browsers.firefox.enabled` | `false` | |
| `browsers.edge.enabled` | `false` | |
| `global.imageRegistry` | | Pull every image from one registry |
| `proxy.enabled` | `false` | Set with `proxy.httpProxy` and `proxy.noProxy` |
| `caBundle.existingConfigMap` | | Mounts a corporate CA certificate |
| `imagePullSecrets` | `[]` | For registries that require authentication |

[[info | **NOTE**:]]
| Keep `agent.persistence.enabled` set to `true`. The agent stores its registration on that volume, so disabling it makes every restart create a new agent and leave the previous record unused in your account.

---

## **Upgrade and Uninstall**

Manage the release with whichever tool installed it. Helm commands do not apply to an application deployed by Argo CD, and editing an Argo CD application by hand is reverted on the next sync.

**Installed with Helm**

To move to a newer chart version:

```bash
helm upgrade ts-agent oci://testsigmaregistry.azurecr.io/charts/testsigma-agent \
  --version <NEW_VERSION> -n testsigma --reuse-values
```

To remove the release:

```bash
helm uninstall ts-agent -n testsigma
```

**Installed with Argo CD**

Change `targetRevision` in the application to the new chart version, then sync. To remove it, delete the application:

```bash
argocd app set testsigma-agent --revision <NEW_VERSION>
argocd app sync testsigma-agent

argocd app delete testsigma-agent
```

The volume is kept so the agent can be reinstalled with the same registration. Delete it separately if you do not need it:

```bash
kubectl -n testsigma delete pvc data-ts-agent-testsigma-agent-0
```

---

## **Troubleshooting**

| Symptom | Cause and resolution |
|---|---|
| Pod stays `Pending` | No node has enough free CPU or memory, or the volume cannot be provisioned. Run `kubectl -n testsigma describe pod <pod>` and `kubectl -n testsigma get pvc`. |
| `ImagePullBackOff` | The image is not available at the configured registry. Confirm `agent.region`, and remove `global.imageRegistry` to pull from Docker Hub. |
| `CreateContainerConfigError` | The secret named in `agent.auth.existingSecret` does not exist in that namespace. |
| Pod runs but no agent appears in Testsigma | Usually the wrong `agent.region`, or an activation key from a different region. Check the agent logs. |
| Pod rejected on creation | The namespace enforces the `restricted` Pod Security Standard. The agent image requires `baseline`. |
| Browser crashes mid test | The browser needs more shared memory. Raise `browsers.chrome.shmSize` and its memory limit together. |

For issues with agent startup or registration itself, see [Agent - Startup and Registration Errors](https://testsigma.com/docs/agent/troubleshooting/setup-issues/).

---
