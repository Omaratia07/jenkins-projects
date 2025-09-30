````markdown
# Jenkins Freestyle Job with GitHub Integration

## 📌 Overview
In this project, I created a **Jenkins Freestyle Job** and connected it with a **GitHub repository** to automatically clone the code and run a script.

---

## 🛠️ Steps

### 1. Run Jenkins in Docker
I started Jenkins inside a Docker container with a volume to persist data:

```bash
docker run -d \
  --name jenkins \
  -p 8080:8080 \
  -p 50000:50000 \
  -v docker_volume:/var/jenkins_home \
  jenkins/jenkins:lts
````

* **8080:** Jenkins web UI
* **50000:** For agents
* **docker\_volume:** Stores Jenkins data (jobs, plugins, configs)

---

### 2. Jenkins Setup

* Open Jenkins in the browser: [http://localhost:8080](http://localhost:8080)
* Get the initial admin password from the container:

  ```bash
  docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
  ```
* Complete the setup wizard and create the first admin user.

---

### 3. Install Required Plugins

From **Manage Jenkins → Plugins**, I installed:

* **Git plugin** → to clone repositories from GitHub
* **NodeJS plugin** → in case Node.js is needed for jobs

---

### 4. Create a Freestyle Job

1. Go to **New Item**.
2. Select **Freestyle Project** and name it (e.g., `my-job`).
3. In **Source Code Management (SCM):**

   * Choose **Git**.
   * Add the repository URL:

     ```bash
     https://github.com/USERNAME/REPO.git
     ```
   * Set the branch (e.g., `*/main`).

---

### 5. Add Build Step (Run Script)

* Add a **Build Step → Execute shell**.
* Example script:

  ```bash
  chmod +x jenkinsproject.sh
  ./jenkinsproject.sh
  ```

---

### 6. Build the Job

* Click **Build Now**.
* Jenkins will:

  1. Clone the repository from GitHub.
  2. Execute the script `jenkinsproject.sh`.
  3. Show the results in **Console Output**.

---

## ✅ Result

* Jenkins is now connected to the GitHub repository.
* Each build fetches the latest code and runs the script automatically.
* This is the first step towards building a **CI/CD pipeline** with Jenkins.

