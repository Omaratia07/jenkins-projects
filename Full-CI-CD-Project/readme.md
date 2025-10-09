
---

# **Full CI/CD Project — Spring Boot + Docker + Jenkins + AWS EC2**

## 🚀 **Project Overview**

This project demonstrates a complete **CI/CD pipeline** for a simple **Spring Boot web application** using **Jenkins**, **Docker**, and **AWS EC2**.
It automates testing, building, containerization, and deployment — providing hands-on experience with DevOps workflow automation.

---

## 🧩 **Project Objectives**

* Automate the build and test process using **Maven**.
* Package the application into a **Docker image** and push it to **Docker Hub**.
* Deploy the containerized app automatically on an **EC2 instance**.
* Demonstrate **continuous integration and continuous delivery (CI/CD)** in action.

---

## 🏗️ **Project Architecture**

*(Add your architecture diagram here)*


---

## 🌐 **Web Application Screenshot**


---

## ⚙️ **Tools & Technologies**

| Category         | Tools Used      |
| ---------------- | --------------- |
| CI/CD            | Jenkins         |
| Build Tool       | Maven           |
| Containerization | Docker          |
| Cloud Hosting    | AWS EC2         |
| Source Control   | GitHub          |
| Image Repository | Docker Hub      |
| OS               | Ubuntu (on EC2) |

---

## 🧱 **Pipeline Workflow Explanation**

### 1️⃣ **Test Stage — “test_app”**

* Jenkins pulls the latest source code from GitHub.
* It moves into the project directory and runs:

  ```bash
  mvn test
  ```
* Purpose: ensures all unit tests pass before proceeding to the build stage.

---

### 2️⃣ **Build Stage — “build_jar”**

* Compiles and packages the Spring Boot application into a JAR file using:

  ```bash
  mvn clean package
  ```
* Output is created in the `target/` directory (e.g. `demo-1.0.0.jar`).

---

### 3️⃣ **Docker Build Stage — “build_docker_image”**

* Jenkins builds a Docker image for the app using the **Dockerfile**.
* It uses Jenkins credentials to authenticate with Docker Hub.
* Commands executed:

  ```bash
  docker build -t <username>/myapp:<version> .
  docker login -u <username> --password-stdin
  ```
* Purpose: to create a portable image of the application.

---

### 4️⃣ **Push to DockerHub Stage — “push_to_dockerhub”**

* Pushes the newly built Docker image to your Docker Hub repository:

  ```bash
  docker push <username>/myapp:<version>
  ```
* This allows the EC2 instance to pull the image later for deployment.

---

### 5️⃣ **Deploy Stage — “DeployApp”**

* Jenkins connects remotely to your **EC2 instance** via **SSH** (using stored credentials).
* On the EC2 server, Jenkins executes:

  ```bash
  sudo docker pull <username>/myapp:<version>
  sudo docker run -d -p 8080:8080 --name myapp <username>/myapp:<version>
  ```
* The app becomes accessible via:

  ```
  http://<EC2_PUBLIC_IP>:8080
  ```

---

## 🖥️ **EC2 User Data Setup**

When creating the EC2 instance, the following commands were added to **User Data** to install and start Docker automatically:

```bash
#!/bin/bash
sudo apt update -y
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
docker --version
```

---

## 🔑 **Jenkins Credentials Used**

| ID                       | Purpose                          |
| ------------------------ | -------------------------------- |
| `docker-hub-credentials` | Docker Hub username & password   |
| `ec2-ssh`                | SSH private key for EC2 instance |

---

## 🧠 **Concepts Demonstrated**

* Continuous Integration (Automated testing & build)
* Continuous Delivery (Automated deployment to EC2)
* Docker image management and versioning
* Jenkins credentials management & SSH automation
* End-to-end deployment pipeline using real cloud infrastructure

---

## 📚 **Future Improvements**

* Add **automated rollback** in case deployment fails
* Integrate **Nginx reverse proxy**
* Configure **Blue-Green deployment**
* Add **Slack notifications** for Jenkins build results

---


