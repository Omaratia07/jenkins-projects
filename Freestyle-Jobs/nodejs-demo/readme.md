````markdown
# Node.js Demo with Jenkins Freestyle Job

## 📌 Requirements
- Jenkins running inside a Docker container  
- NodeJS Plugin installed in Jenkins  
- GitHub repository containing the Node.js project (this repo)  

---

## ⚙️ Setup Jenkins

1. **Run Jenkins in Docker**
   ```bash
   docker run -d \
     --name jenkins \
     -p 8080:8080 -p 50000:50000 \
     -v jenkins_home:/var/jenkins_home \
     jenkins/jenkins:lts
````

2. **Install NodeJS Plugin**

   * From Jenkins Dashboard → *Manage Jenkins → Plugin Manager → Available*
   * Search for **NodeJS Plugin** and install it
   * After restart → *Manage Jenkins → Tools* → Add new **NodeJS installation** (e.g., `node18`)

---

## 🛠️ Create a Freestyle Job

1. From Jenkins Dashboard → *New Item → Freestyle Project*
2. In **Source Code Management**:

   * Select **Git**
   * Add repo URL:

     ```
     https://github.com/Omaratia07/jenkins-projects
     ```
   * Select credentials if needed
3. In **Build Environment**:

   * ✅ Check *Provide Node & npm bin/ folder to PATH*
   * Select the NodeJS version you added (`node18`)
4. In **Build Steps → Execute Shell**, add:

   ```bash
   cd freestylejobs/nodejs-demo
   npm install
   npm test
   ```

---

## ▶️ Run the Job

* Click **Build Now** from Jenkins
* Jenkins will:

  1. Clone the GitHub repo
  2. Install Node.js dependencies (`npm install`)
  3. Run tests using **Jest** (`npm test`)

---

## ✅ Expected Output

* You should see:

  ```
  PASS test/index.test.js
    ✓ App status should be OK
  ```
* Build result = **SUCCESS**

```

