```markdown
# Java Build Demo

This project demonstrates building a Java application using **Maven** in a **Jenkins Freestyle Job**. It focuses on compiling and packaging the application into a JAR file, without running it.

## Project Structure

```

freestylejobs/
└── java-build-demo/
├── pom.xml
└── src/
└── main/java/...

````

## Jenkins Setup

1. **Create a Freestyle Job**  
   - In Jenkins Dashboard → **New Item** → **Freestyle project** → enter a name → **OK**.

2. **Source Code Management**  
   - Select **Git** → enter the repository URL → add credentials if required.

3. **Build Step**  
   - Go to **Build** → **Add build step** → **Invoke top-level Maven targets**.  
   - **POM**: `freestylejobs/java-build-demo/pom.xml`  
   - **Goals**: `package`  
   > Note: `clean` is optional. Using `package` alone will build the project and generate the JAR.

4. **Build Output**  
   - After the job runs, the JAR file will be located in the target directory:  
     ```
     /workspace/java-maven-build/freestylejobs/java-build-demo/target/java-build-demo-1.0-SNAPSHOT.jar
     ```

5. **Verification**  
   - Check the Jenkins **Console Output** to ensure the build completed successfully.  
   - The JAR is ready for deployment or further steps, but this setup does **not** run it

