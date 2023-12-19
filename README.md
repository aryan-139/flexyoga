# Flexyoga- A Modern Yoga Class Enrollment Platform 🧘‍♂️
🧘‍♂️ Simplify yoga class enrollment with FlexYoga! Intuitive design, which promotes higher conversion rates and resilient system architecture promoting consistent information exchange. Clear documentation included. Join us on the path to wellness! 🌟

## Table of Contents
- [Flexyoga- A Modern Yoga Class Enrollment Platform 🧘‍♂️](#flexyoga--a-modern-yoga-class-enrollment-platform---)
  * [Table of Contents](#table-of-contents)
  * [About the Project](#about-the-project)
  * [Getting Started](#getting-started)
    + [Installation](#installation)
    + [Prerequisites](#prerequisites)
    + [Installation](#installation-1)
    + [Running the servers](#running-the-servers)
  * [Backend API endpoints](#backend-api-endpoints)
    + [1. adding new participants](#1-adding-new-participants)
    + [2. getting all the existing participants](#2-getting-all-the-existing-participants)
    + [3. add a new batch](#3-add-a-new-batch)
    + [4. Delete all the entries from the participants collection](#4-delete-all-the-entries-from-the-participants-collection)
    + [4. getting all the existing batches](#4-getting-all-the-existing-batches)
    + [5. Payment Confirmation Endpoint](#5-payment-confirmation-endpoint)
  * [Gallery](#gallery)
    + [Desktop View](#desktop-view)
    + [Mobile View](#mobile-view)
  * [Future Scope](#future-scope)

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

### Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation
1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Navigate to the server directory: `cd server`
4. Install dependencies: `npm install`

### Running the servers
1. Navigate to the client directory: `cd client`
2. Run the server: `npm run start`
3. The app will be running on `http://localhost:3000/`
4. Open another terminal
5. Navigate to the server directory: `cd server`
6. Run the server: `npm run dev`
7. The server will be running on `http://localhost:80`


## Backend API endpoints

### 1. adding new participants

- POST(http://localhost:80/participants/add)
- Body:
```
{
  "participant_id": "16483927333",
  "name": "John Doe",
  "email": "test@john.com",
  "age": 30,
  "gender": "Male",
  "phone": "1234567890",
  "enrollments": "A1"
}
```

### 2. getting all the existing participants

- GET(http://localhost:80/participants/get)

### 3. add a new batch
- POST(http://localhost:80/batches/add)
- Body:
```
{
    "batch_id": "A1",
    "start_time": "6:00 AM",
    "end_time": "7:00 AM"
}
```

### 4. Delete all the entries from the participants collection
- GET (http://localhost:80/participants/delete)

### 4. getting all the existing batches

- GET(http://localhost:80/batches/get)
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

### 5. Payment Confirmation Endpoint

- POST(http://localhost:80/payment/confirm)
- Body: from the payment gateway's webhook

- Payload:
```
{
    "success": true,
    "paymentId": 848719,
    "paymentDate": "2023-12-19T21:51:25.907Z",
    "paymentStatus": "success",
    "paymentAmount": 500,
    "paymentMethod": "stripe"
}
```

## Gallery

### Desktop View

- Home Page- inspiration from [Halo Lab's Design on Dribble](https://dribbble.com/shots/14398439-Oyoga-Website)

![Home Page](https://github.com/aryan-139/flexyoga/blob/main/client/src/assets/home.png)

- User Onboarding- progress bar for better UX
![Form](https://github.com/aryan-139/flexyoga/blob/8d8d352c6953ced24aa126a57e1bbedf5000fcba/client/src/assets/form.png)

- Payment Page- Stripe Payment Link Integration, QR code for UPI payments, and a mock payment confirmation function
![Payment Page](https://github.com/aryan-139/flexyoga/blob/8d8d352c6953ced24aa126a57e1bbedf5000fcba/client/src/assets/payment.png)

- Payment Confirmation- Mock Payment Confirmation Function with important details, which assigns value based on random number generation
![Payment Confirmation](https://github.com/aryan-139/flexyoga/blob/8d8d352c6953ced24aa126a57e1bbedf5000fcba/client/src/assets/confirmation.png)

- Downloadable Receipt- Downloadable Receipt with all the details, for manual confirmation in case of discrepancies
![Receipt](https://github.com/aryan-139/flexyoga/blob/8d8d352c6953ced24aa126a57e1bbedf5000fcba/client/src/assets/receipt.png)

### Mobile View

- Home Page, User Onboarding, Payment Page 

![Mobile View](https://github.com/aryan-139/flexyoga/blob/main/client/src/assets/mobile%20first.png)

- Payment Confirmation, Downloadable Receipt
![Mobile View](https://github.com/aryan-139/flexyoga/blob/main/client/src/assets/mobile%20second.png)


## Future Scope

- Implementing an API limit to prevent DDOS attacks since we have mock function for now 
- Implementing a CI/CD workflow on Azure
- Containerizing the application using Docker
- Adding an Instructor Dashboard
- Implementing a proper authentication system 

## Ideation Phase 

- Wireframing 
![Wireframe](https://github.com/aryan-139/flexyoga/blob/main/client/src/assets/wireframe1.png)

- ER Diagram
![ER Diagram](https://github.com/aryan-139/flexyoga/blob/main/client/src/assets/wireframe2.png)

