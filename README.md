# Flexyoga- A Modern Yoga Class Enrollment Platform 🧘‍♂️
🧘‍♂️ Simplify yoga class enrollment with FlexYoga! Intuitive design, which promotes higher conversion rates and resilient system architecture promoting consistent information exchange. Clear documentation included. Join us on the path to wellness! 🌟

![Current Version](https://img.shields.io/badge/version-v1.0-blue)
![Github Contributor](https://img.shields.io/badge/Github%20contributor?link=https%3A%2F%2Fgithub.com%2Faryan-139)
![GitHub stars](https://img.shields.io/github/stars/aryan-139/README-Template?style=social)
![GitHub forks](https://img.shields.io/github/forks/aryan-139/README-Template?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/aryanintech_?style=social)

## Table of Contents
- [Flexyoga- A Modern Yoga Class Enrollment Platform 🧘‍♂️](#flexyoga--a-modern-yoga-class-enrollment-platform---)
  * [Table of Contents](#table-of-contents)
  * [About the Project](#about-the-project)
  * [Getting Started](#getting-started)
    + [Prerequisites](#prerequisites)
    + [Installation](#installation)
  * [Usage](#usage)
    + [Frontend](#frontend)
    + [Backend](#backend)
  * [Backend API endpoints](#backend-api-endpoints)
    + [1. adding new participants](#1-adding-new-participants)
    + [2. getting all the existing participants](#2-getting-all-the-existing-participants)
    + [3. add a new batch](#3-add-a-new-batch)
    + [4. Delete all the entries from the participants collection](#4-delete-all-the-entries-from-the-participants-collection)
    + [4. getting all the existing batches](#4-getting-all-the-existing-batches)


## Backend API endpoints

### 1. adding new participants

- POST(http://localhost:8001/participants/add)
- Body:
```
{
  "participant_id": "1",
  "name": "John Doe",
  "age": 30,
  "gender": "Male",
  "phone": "1234567890",
  "enrollments": "A1"
}
```

### 2. getting all the existing participants

- GET(http://localhost:8001/participants/get)

### 3. add a new batch
- POST(http://localhost:8001/batches/add)
- Body:
```
{
    "batch_id": "A1",
    "start_time": "6:00 AM",
    "end_time": "7:00 AM"
}
```

### 4. Delete all the entries from the participants collection
- GET (http://localhost:8001/participants/delete)

### 4. getting all the existing batches

- GET(http://localhost:8001/batches/get)
- Payload:
```
[
    {
        "_id": "657f02c98000068924b98cd9",
        "batch_id": "A1",
        "start_time": "6:00 AM",
        "end_time": "7:00 AM",
        "__v": 0
    },
    .
    .
    .
]
```
