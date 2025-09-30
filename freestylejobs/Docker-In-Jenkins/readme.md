# Running Docker in Jenkins using Docker-outside-of-Docker (DooD)

This guide explains how to enable Docker commands inside a Jenkins container using the **Docker-outside-of-Docker (DooD)** method.

---

## Step 1: Run Jenkins container with Docker mapped

Start Jenkins with the following command:

```bash
docker run -d \
  --name jenkins \
  -p 8080:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /usr/bin/docker:/usr/bin/docker \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkins/jenkins:lts
````

### Explanation:

* **`-v jenkins_home:/var/jenkins_home`**
  Persists Jenkins data (jobs, plugins, configs).

* **`-v /usr/bin/docker:/usr/bin/docker`**
  Mounts the Docker CLI binary from the host into the Jenkins container, so the `docker` command exists inside.

* **`-v /var/run/docker.sock:/var/run/docker.sock`**
  Mounts the Docker socket file, which is how the Docker CLI communicates with the Docker daemon on the host.

---

## Step 2: Enter the Jenkins container

```bash
docker exec -it jenkins bash
```

Now you are inside the Jenkins container.

---

## Step 3: Fix permissions for `docker.sock`

By default, the socket file `/var/run/docker.sock` on the host is owned by `root:docker` with permissions `660`.
This means only `root` and members of the `docker` group can use it.

Inside Jenkins, the default user is not `root`, so you will see permission errors like:

```
Got permission denied while trying to connect to the Docker daemon socket
```

### Temporary fix (inside the container):

Change permissions of the socket:

```bash
chmod 666 /var/run/docker.sock
```

This makes the socket world-writable (any user can access Docker).
⚠️ This is insecure but fine for local testing.

---

## Step 4: Test Docker inside Jenkins container

Still inside the Jenkins container, run:

```bash
docker ps
```

You should see the containers running on the **host**, proving that Jenkins is using the host’s Docker.

---

## Notes

* This method is called **Docker-outside-of-Docker (DooD)**.
* It is simple and fast because Jenkins is directly using the host’s Docker.
* Security note: giving Jenkins access to `/var/run/docker.sock` means Jenkins can control the entire host. Use carefully in production.

---

