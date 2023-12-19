# Flexyoga- A Modern Yoga Class Enrollment Platform 🧘‍♂️
🧘‍♂️ Simplify yoga class enrollment with FlexYoga! Intuitive design, which promotes higher conversion rates and resilient system architecture promoting consistent information exchange. Clear documentation included. Join us on the path to wellness! 🌟

## Table of Contents
- [Flexyoga- A Modern Yoga Class Enrollment Platform 🧘‍♂️](#flexyoga--a-modern-yoga-class-enrollment-platform---)
  * [Table of Contents](#table-of-contents)
  * [About the Project](#about-the-project)
  * [Getting Started](#getting-started)
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
    [Gallery](#gallery)

## About the Project

Before writing a single-line of code, I spent a lot of time, **doing UI/ UX research, and performing extensive feasibility analysis**. After that pegged down the exact requirements and features that are must-haves and **created a Kanban Board** with all the features that must be implemented and started working on the project.

I have built this project using **React, Material UI, React-Router-Dom, Node, Express, MongoDB, and Mongoose**. Speaking broadly, I have taken design inspiration from [Halo Lab's Design on Dribble](https://dribbble.com/shots/14398439-Oyoga-Website) and I have modified the design accordingly.

During user onboarding, **attention has been paid to UX** by incorporating a progressive bar which helps the user to know how much of the process is completed.

I have used Material UI, as it helps in reducing the redundant design components and enables in quicker development. One short-coming is definitely the lack of customisability, but I have **tried to overcome that by using CSS-in-JS.** 

**Modularization, and resuability** of components have been given **higher weightage.** All validations are done on the frontend and only then the data is punched to the backend.

A basic **caching strategy** has been implemented, which helps in reducing the number of read and write operations to the database. 

**Client-Side Caching** using LocalStorage has been implemented which prevents an extra write before the payment confirmation is received using Web Hook(for now a mock function).

On the backend, using Mongoose, **the models have been defined** and the data is stored in MongoDB Atlas. The ER diagram can be seen in the documentation. 

The **routes have been seperated** from the entry file of index.js to have better readability and maintainability.

## Getting Started

### Installation
Clone the repository: `git clone https://github.com/aryan-139/flexyoga.git`

## Usage

### Frontend

### Prerequisites
- [Node.js](https://nodejs.org/)

### Installation
1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`

### Running the server
1. Navigate to the server directory: `cd client`
2. Run the server: `npm run start`
3. The app will be running on `http://localhost:3000/`

### Backend

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation
1. Navigate to the server directory: `cd server`
2. Install dependencies: `npm install`

### Running the server
1. Navigate to the server directory: `cd server`
2. Run the server: `npm run start`
3. The app will be running on `http://localhost:8001/`

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

## Gallery