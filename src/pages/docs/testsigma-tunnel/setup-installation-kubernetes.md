---
title: "Setup and Installation: Kubernetes (Helm)"
metadesc: "Install the Testsigma Tunnel on Kubernetes with the official Helm chart to test privately hosted applications, then configure, scale, and upgrade the deployment."
noindex: false
order: 35.7
page_id: "Testsigma Tunnel"
warning: false
contextual_links:
- type: section
  name: "Contents"
- type: link
  name: "Prerequisites"
  url: "#prerequisites"
- type: link
  name: "Where the Chart Is Published"
  url: "#where-the-chart-is-published"
- type: link
  name: "How the Tunnel Runs"
  url: "#how-the-tunnel-runs"
- type: link
  name: "Install the Tunnel"
  url: "#install-the-tunnel"
- type: link
  name: "Select Your Testsigma Region"
  url: "#select-your-testsigma-region"
- type: link
  name: "Verify the Installation"
  url: "#verify-the-installation"
- type: link
  name: "Configuration Reference"
  url: "#configuration-reference"
- type: link
  name: "Scale the Tunnel"
  url: "#scale-the-tunnel"
- type: link
  name: "Upgrade and Uninstall"
  url: "#upgrade-and-uninstall"
- type: link
  name: "Install Using Argo CD"
  url: "#install-using-argo-cd"
- type: link
  name: "Troubleshoot"
  url: "#troubleshoot"
---

---

The Testsigma Tunnel Client creates a secure connection between your Kubernetes cluster and the Testsigma platform. That connection lets you run automated tests against applications deployed in private networks or behind firewalls, without exposing those applications to the public internet.

This article discusses how to install the tunnel client with the official Helm chart, configure it, and manage it over time.

---

## **Prerequisites**

1. A Kubernetes cluster running **1.21 or later**.

2. **Helm 3.8 or later**, which is required for OCI chart support.

3. `kubectl` configured with access to the cluster.

4. An authentication key from **Settings > Tunnels** in the Testsigma application.

5. Outbound access from the cluster to your Testsigma address and to the registry that serves the chart and image. The tunnel accepts no inbound connections, so no ingress or firewall change is needed.

[[info | Note:]]
| Also refer to the [documentation on key components](https://testsigma.com/docs/testsigma-tunnel/key-components/) for background on how the tunnel fits into a test run.

---

## **Where the Chart Is Published**

The same chart is available from two registries. Both are public and need no credentials.

| Registry | Chart location | Container image |
|---|---|---|
| Azure Container Registry | `oci://testsigmaregistry.azurecr.io/charts/testsigma-tunnel` | Mirrored into the same registry |
| GitHub Container Registry | `oci://ghcr.io/testsigmainc/charts/testsigma-tunnel` | Pulled from Docker Hub |

Choose based on what your cluster is allowed to reach:

- Use **Azure Container Registry** with `global.imageRegistry` when egress is restricted, because the chart and the image then come from one host.
- Use **GitHub Container Registry** when your cluster can already reach Docker Hub. The image is not mirrored there, so `global.imageRegistry` does not apply.

The examples in this article use Azure Container Registry. To use GitHub Container Registry instead, swap the chart address and drop the `global.imageRegistry` flag.

---

## **How the Tunnel Runs**

The chart creates the following resources:

| Resource | Description |
|---|---|
| **StatefulSet** | Runs the tunnel client pods, one at a time, using the OrderedReady pod management policy. |
| **Secret** | Holds the authentication key, unless you supply your own. |
| **Service** | A headless Service that gives the StatefulSet stable pod identities. It routes no traffic. |

All replicas share a single tunnel name. The first pod registers the tunnel with Testsigma and the rest join that registration, which is why they start in sequence rather than together. Starting them simultaneously would have several pods racing to register the same name.

The client keeps nothing that has to survive a restart. Its mTLS certificates are fetched again during registration each time it starts, so there is no persistent volume to manage.

[[info | Note:]]
| The pod runs as a non-root user from a distroless image and needs no elevated privileges, so it satisfies the `restricted` Pod Security Standard as shipped.

---

## **Install the Tunnel**

1. In the Testsigma application, navigate to **Settings > Tunnels** and copy the authentication key.

2. Create a namespace and store the key in a secret. Write the key to a temporary file rather than passing it on the command line, so it does not end up in your shell history or in the process list:
   ```bash
   kubectl create namespace testsigma

   umask 077 && cat > tunnel-key.txt    # paste the key, then press Ctrl+D

   kubectl -n testsigma create secret generic testsigma-tunnel-auth \
     --from-file=KEY=./tunnel-key.txt

   rm tunnel-key.txt
   ```

   If you manage secrets with a tool such as External Secrets Operator or Sealed Secrets, create `testsigma-tunnel-auth` through that instead.

3. Install the chart:
   ```bash
   helm install ts-tunnel oci://testsigmaregistry.azurecr.io/charts/testsigma-tunnel \
     --version 0.1.0 -n testsigma \
     --set global.imageRegistry=testsigmaregistry.azurecr.io \
     --set tunnel.auth.existingSecret=testsigma-tunnel-auth \
     --set tunnel.tunnelName=my-tunnel
   ```

4. Wait for the pod to become ready:
   ```bash
   kubectl -n testsigma rollout status statefulset/ts-tunnel-testsigma-tunnel
   ```

5. The tunnel appears under **Settings > Tunnels** in the Testsigma application once it registers.

To install the same chart from GitHub Container Registry, use this in place of step 3:

```bash
helm install ts-tunnel oci://ghcr.io/testsigmainc/charts/testsigma-tunnel \
  --version 0.1.0 -n testsigma \
  --set tunnel.auth.existingSecret=testsigma-tunnel-auth \
  --set tunnel.tunnelName=my-tunnel
```

[[info | Note:]]
| Set `tunnel.tunnelName` to something recognisable. Left empty, the client generates a random name at startup and it changes every time the pod restarts, which makes the tunnel hard to identify in the Testsigma UI.

---

## **Select Your Testsigma Region**

The image is built against a fixed Testsigma address, so the three regional builds are different images rather than copies. Set `tunnel.region` to match the address you sign in to:

| Sign-in address | `tunnel.region` |
|---|---|
| app.testsigma.com | `us` (default) |
| app-eu.testsigma.com | `eu` |
| app-in.testsigma.com | `in` |

Add the flag to the install command:

```bash
--set tunnel.region=eu
```

If the tunnel is already installed, apply it with an upgrade:

```bash
helm upgrade ts-tunnel oci://testsigmaregistry.azurecr.io/charts/testsigma-tunnel \
  --version 0.1.0 -n testsigma --reuse-values \
  --set tunnel.region=eu
```

If the region does not match your account, the pod starts but cannot register, because it contacts the wrong Testsigma address.

---

## **Verify the Installation**

Confirm the cluster can reach Testsigma, which is the one thing the tunnel cannot work without:

```bash
helm test ts-tunnel -n testsigma
```

Then check the client registered:

```bash
kubectl -n testsigma logs ts-tunnel-testsigma-tunnel-0 -f
```

Look for a message confirming the tunnel registered. Finally, confirm it is listed under **Settings > Tunnels** in the Testsigma application and run a test through it.

[[info | Note:]]
| The chart defines no liveness or readiness probe. The client listens on no port, and the image contains no shell, so there is nothing to probe. If the process exits, the container is restarted automatically.

---

## **Configuration Reference**

Pass these with `--set`, or collect them in a values file and use `-f values.yaml`. To see every available setting:

```bash
helm show values oci://testsigmaregistry.azurecr.io/charts/testsigma-tunnel --version 0.1.0
```

| Setting | Default | Description |
|---|---|---|
| `tunnel.region` | `us` | Testsigma region: `us`, `eu`, or `in` |
| `tunnel.auth.existingSecret` | | Secret holding the authentication key |
| `tunnel.auth.key` | `""` | The key inline, for a quick trial instead of a secret |
| `tunnel.tunnelName` | `""` | Name shown in Testsigma. Empty means randomly generated |
| `tunnel.replicaCount` | `1` | Replicas sharing one tunnel. `0` stops it without uninstalling |
| `tunnel.verbose` | `false` | Debug logging |
| `tunnel.delegateSslValidation` | `false` | Accept certificates from an SSL inspection appliance |
| `tunnel.image.tag` | `latest` | Pin to a release such as `2.1.0` for a fixed baseline |
| `tunnel.resources` | 500m and 256Mi to 2 CPU and 1Gi | |
| `tunnel.extraArgs` | `[]` | Extra command-line flags, which outrank the settings above |
| `global.imageRegistry` | `""` | Pull the chart's images from one registry |
| `proxy.enabled` | `false` | Set with `proxy.url` |
| `networkPolicy.enabled` | `false` | Restricts egress to DNS and 443. Add rules for your own applications first |
| `imagePullSecrets` | `[]` | For registries that require authentication |

### **Route Traffic Through a Proxy**

If the cluster reaches the internet through a proxy, the client uses it for both registration and the tunnel itself:

```bash
--set proxy.enabled=true \
--set proxy.url=http://proxy.internal.example.com:8080
```

### **Accept an SSL Inspection Certificate**

If your network re-signs TLS connections with its own certificate authority:

```bash
--set tunnel.delegateSslValidation=true
```

---

## **Scale the Tunnel**

Raise `tunnel.replicaCount` to handle more concurrent test traffic. Pods start one at a time, the first registers the tunnel, and the rest join it:

```bash
kubectl -n testsigma scale statefulset/ts-tunnel-testsigma-tunnel --replicas=3
```

To make the change permanent, set it through Helm:

```bash
helm upgrade ts-tunnel oci://testsigmaregistry.azurecr.io/charts/testsigma-tunnel \
  --version 0.1.0 -n testsigma --reuse-values \
  --set tunnel.replicaCount=3
```

To stop the tunnel without uninstalling, scale to zero:

```bash
kubectl -n testsigma scale statefulset/ts-tunnel-testsigma-tunnel --replicas=0
```

[[info | Note:]]
| Scaling with kubectl is temporary. The replica count reverts to the Helm value on the next `helm upgrade`.

---

## **Upgrade and Uninstall**

The client deregisters the tunnel by name when it shuts down. With a single replica that is harmless, because the replacement pod registers again. With more than one replica it matters: replacing the first pod deregisters the tunnel that all of them share.

**With one replica**, upgrade directly:

```bash
helm upgrade ts-tunnel oci://testsigmaregistry.azurecr.io/charts/testsigma-tunnel \
  --version <NEW_VERSION> -n testsigma --reuse-values
```

**With more than one replica**, scale to zero first:

```bash
kubectl -n testsigma scale statefulset/ts-tunnel-testsigma-tunnel --replicas=0

kubectl -n testsigma get pods -l app.kubernetes.io/name=testsigma-tunnel -w   # wait for all to terminate

helm upgrade ts-tunnel oci://testsigmaregistry.azurecr.io/charts/testsigma-tunnel \
  --version <NEW_VERSION> -n testsigma --reuse-values

kubectl -n testsigma scale statefulset/ts-tunnel-testsigma-tunnel --replicas=3
```

To remove the release:

```bash
helm uninstall ts-tunnel -n testsigma
```

Nothing is left behind, since the chart creates no persistent volume.

### **Rotate an Authentication Key**

1. Obtain a new key from **Settings > Tunnels**.
2. Update the secret:
   ```bash
   kubectl -n testsigma create secret generic testsigma-tunnel-auth \
     --from-file=KEY=./tunnel-key.txt --dry-run=client -o yaml | kubectl apply -f -
   ```
3. Restart the tunnel so it picks up the new key:
   ```bash
   kubectl -n testsigma rollout restart statefulset/ts-tunnel-testsigma-tunnel
   ```

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

2. Create the key secret in the destination namespace, as shown in [Install the Tunnel](#install-the-tunnel).

3. Create the application:
   ```yaml
   apiVersion: argoproj.io/v1alpha1
   kind: Application
   metadata:
     name: testsigma-tunnel
     namespace: argocd
   spec:
     project: default
     source:
       repoURL: testsigmaregistry.azurecr.io/charts
       chart: testsigma-tunnel
       targetRevision: 0.1.0
       helm:
         releaseName: ts-tunnel
         values: |
           tests:
             enabled: false
           global:
             imageRegistry: testsigmaregistry.azurecr.io
           tunnel:
             region: us
             tunnelName: my-tunnel
             auth:
               existingSecret: testsigma-tunnel-auth
     destination:
       server: https://kubernetes.default.svc
       namespace: testsigma
     syncPolicy:
       syncOptions:
         - CreateNamespace=true
   ```

4. Sync the application. `CreateNamespace=true` changes how a sync behaves, it does not start one, so a newly created application stays **OutOfSync** until you trigger it. In the UI, open the application and select **SYNC**, or from the CLI:
   ```bash
   argocd app sync testsigma-tunnel
   ```

> **Points to note:**
> - `repoURL` holds the registry path only. The chart name belongs in `chart`, and there is no `oci://` prefix.
> - `targetRevision` is the chart version, not the tunnel client version.
> - Argo CD does not run Helm test hooks, so set `tests.enabled` to `false` and verify manually.
> - Manage the release with whichever tool installed it. `helm upgrade` and `helm uninstall` do not apply to an application deployed by Argo CD.

---

## **Troubleshoot**

| Symptom | Cause and resolution |
|---|---|
| Pod stays `Pending` | No node has enough free CPU or memory. Run `kubectl -n testsigma describe pod <pod>`. |
| `ImagePullBackOff` | Confirm `tunnel.region`, and remove `global.imageRegistry` to pull from Docker Hub. If you pinned a per-architecture tag such as `amd64-latest`, the pod fails on nodes of any other architecture; use `latest` or a version instead. |
| `CreateContainerConfigError` | The secret named in `tunnel.auth.existingSecret` does not exist in that namespace. |
| Pod restarts repeatedly | Usually an invalid or expired key. Check `kubectl -n testsigma logs <pod>` and obtain a fresh key from **Settings > Tunnels**. |
| Pod runs but no tunnel appears in Testsigma | Usually the wrong `tunnel.region`, or a key issued for a different region. Check the logs. |
| `helm test` fails | The cluster cannot reach your Testsigma address. Check egress rules, and set `proxy.enabled` with `proxy.url` if a proxy is required. |
| Connection timeouts during a test | The tunnel reached Testsigma but cannot reach your application. If `networkPolicy.enabled` is on, add egress rules for the application through `networkPolicy.extraEgress`. |
| SSL errors during a test | The application uses a certificate the client does not trust, or an inspection appliance re-signs traffic. Set `tunnel.delegateSslValidation=true`. |

If the issue persists, collect the pod details and logs and contact Testsigma support:

```bash
kubectl -n testsigma describe statefulset ts-tunnel-testsigma-tunnel
kubectl -n testsigma logs ts-tunnel-testsigma-tunnel-0 --tail=200
```

---
