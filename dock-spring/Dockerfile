# Start from an OpenJDK 21 base image
FROM openjdk:21-jdk-slim AS builder

# Install Maven using apt-get
RUN apt-get update && \
    apt-get install -y maven && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the pom.xml and download dependencies
COPY ./pom.xml ./pom.xml

RUN mvn dependency:go-offline -B

# Copy the source code and build the application
COPY ./src ./src

RUN mvn clean package -DskipTests

# Use OpenJDK 21 for the runtime image
FROM openjdk:21-jdk-slim

# Set working directory in the runtime container
WORKDIR /app

# Copy the built jar file from the builder stage
COPY --from=builder /app/target/*.jar /app/app.jar

# Expose the port your app will be listening on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
