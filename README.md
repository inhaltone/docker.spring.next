# dock-spring + dock-next with Docker - Proof of Concept (POC)

## Overview

This repository demonstrates a **Proof of Concept (POC)** for integrating **dock-spring** (Spring Boot 3) with *
*dock-next** (Next.js) using **Docker**, and connecting it to a **PostgreSQL** database container. The goal of this POC
is to showcase how these technologies can be used together to create a full-stack web application with Dockerized
services for easy deployment and management.

## Technologies Used

- **dock-spring**: Spring Boot 3 for building backend services.
- **dock-next**: Next.js for building frontend applications with server-side rendering (SSR) and static site
  generation (SSG).
- **Docker**: Containerization platform used to package and run the backend, frontend, and database.
- **PostgreSQL**: Relational database used to store and manage data.
- **Java JDK 21**: The latest version of the Java Development Kit, used to build the **dock-spring** application.

## Features

- **dock-spring** API handling backend services with **Java JDK 21**.
- **dock-next** handling the frontend with server-side rendering.
- PostgreSQL container for storing application data.
- Docker Compose setup to manage all services (dock-spring, dock-next, PostgreSQL) in isolated containers.

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your machine.
- **Java JDK 21**: Make sure you have JDK 21 installed for local development, especially for building and running the *
  *dock-spring** application outside of Docker if needed.

### Clone the Repository

```bash
git clone <repo-url>
cd <repo-directory>

```

### Set Up Docker Containers

1. Ensure you have Docker and Docker Compose installed.
2. You need to **run PostgreSQL on your own**, either using Docker or locally, as it is not automatically provisioned in
   this repository. If using Docker, refer to the PostgreSQL configuration in the `docker-compose.yml` file.
3. Run the following command to start the services (dock-spring, dock-next, and PostgreSQL containers):

```bash
$ docker-compose up
```

### Kill docker container

```bash
$ docker-compose down
```

# PostgreSQL Docker Setup

This guide will walk you through the steps to pull the official PostgreSQL Docker image, create a PostgreSQL container, and set up a database.

## Prerequisites

- **Docker** installed on your system. If you don't have Docker, follow the instructions to [install Docker](https://docs.docker.com/get-docker/).

## Steps

### 1. **Pull the PostgreSQL Docker Image**

To get the latest PostgreSQL Docker image, run the following command:

```bash
$ docker pull postgres:latest
```

### 2. Create and Run a PostgreSQL Container
#### Communication port with the db is 5433 as you can see below

```bash
docker run --name <postgres-container-name> \
  -e POSTGRES_USER=<user> \
  -e POSTGRES_PASSWORD=<password> \
  -e POSTGRES_DB=<db_name> \
  -p 5433:5432 \
  -v /path/to/your/local/directory:/var/lib/postgresql/data \
  -d postgres:latest

```
#### Enter the default db name of postgres and the create a db

```bash
psql -h localhost -p 5433 -U <user> -d <db_name>
```

