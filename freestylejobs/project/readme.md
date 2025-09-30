

![WhatsApp Image 2025-09-30 at 10 00 30 PM](https://github.com/user-attachments/assets/daa8e740-a944-4c22-ab1c-5620d21506a8)


```markdown
# Java Maven + Docker + Jenkins Project

## 📌 Overview
This project demonstrates a **Java Maven application** that is built and containerized using **Docker**, with automation done through a **Jenkins Freestyle Job**.

The pipeline consists of:
1. **Clone source code** from GitHub.
2. **Build the application** using Maven.
3. **Package the JAR file** into a Docker image.
4. **Push the Docker image** to Docker Hub.

---

## 🗂️ Project Structure
```


freestylejobs/project/

│── src/                 # Java source code

│── pom.xml              # Maven configuration file

│── Dockerfile           # Docker build instructions

│── README.md            # Project documentation

````

---

## ⚙️ Requirements
- **Java 17** (via Docker base image)
- **Maven** (for building the JAR)
- **Docker** (to build and push images)
- **Jenkins** (for automation)

---

## 🚀 How It Works

### 1. Build the Application
Maven is used to build the JAR file:
```bash
mvn clean package
````

This generates the JAR under:

```
target/java-build-demo-1.0-SNAPSHOT.jar
```

### 2. Dockerfile

```dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/java-build-demo-1.0-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### 3. Jenkins Freestyle Job

* **Source Code Management:** GitHub repository.
* **Build Step 1:** Invoke Maven → `clean package`.
* **Build Step 2:** Execute Shell:

  ```bash
  docker build -t <dockerhub-username>/java-maven-app:latest .
  docker login -u <dockerhub-username> -p <dockerhub-password>
  docker push <dockerhub-username>/java-maven-app:latest
  ```

---

## 📦 Docker Run

Once the image is pushed to Docker Hub, run the container:

```bash
docker pull <dockerhub-username>/java-maven-app:latest
docker run -d -p 8080:8080 <dockerhub-username>/java-maven-app:latest
```

---

## ✅ Benefits

* Automates **build and deployment** process.
* Ensures **continuous integration** using Jenkins.
* Provides a **Dockerized Java application** ready to run anywhere.

---

## 🔗 Repository

[GitHub Repo](https://github.com/Omaratia07/jenkins-projects)

---

## 🔍 Verification

To make sure everything worked correctly, check your **Docker Hub repository** and confirm that the image was pushed successfully.

![WhatsApp Image 2025-09-30 at 10 23 27 PM](https://github.com/user-attachments/assets/16c2ceb3-c874-4bad-9b38-a7c7c5badb28)


```

```

