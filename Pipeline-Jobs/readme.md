
---

# Jenkins CI/CD Pipeline for Java + Docker

## 📌 Overview

This project is a **CI/CD pipeline** built with **Jenkins** to demonstrate how to:

1. Build a Java application with **Maven**
2. Package the application inside a **Docker image**
3. Push the image to **Docker Hub** automatically

The whole process is automated through a `Jenkinsfile` (Pipeline as Code).

---

## ⚙️ Jenkins Pipeline Stages

### 🔹 Stage 1: Build JAR

* Jenkins navigates to the project directory.
* Runs `mvn package`.
* This generates a `.jar` file under the `target/` folder.
* This step ensures the Java app compiles successfully before moving forward.

---

### 🔹 Stage 2: Build Docker Image

* Jenkins uses the **Dockerfile** inside the project to build an image.
* The Dockerfile instructions:

  * Start from a base JDK image.
  * Copy the generated JAR file into the container.
  * Define how the application will run inside the container (`java -jar ...`).
* This stage ensures the application is containerized and ready for deployment anywhere.

---

### 🔹 Stage 3: Push to Docker Hub

* Jenkins logs in to Docker Hub using stored credentials (`docker-hub-credentials`).
* The Docker image is tagged (example: `omaralaa87/myapp:1.1`).
* Jenkins pushes the image to Docker Hub automatically.

---

## 🐳 Verifying the Result

After the pipeline finishes successfully:

1. Go to **[Docker Hub](https://hub.docker.com/)**.
2. Check your repository (`omaralaa87/myapp`).
3. Make sure the new image tag (e.g., `1.1`) is listed.
<img width="1858" height="1077" alt="Screenshot 2025-10-01 211823" src="https://github.com/user-attachments/assets/40519dbd-14c6-4f68-99b5-5d3e7643e026" />


---

## ✅ Summary

* **Jenkins** automates the entire process.
* **Maven** builds the Java application.
* **Docker** packages the app.
* **Docker Hub** stores the final image.

This ensures a smooth CI/CD flow from code → build → container → registry.

---


