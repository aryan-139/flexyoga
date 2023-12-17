# Flexyoga- A Modern Yoga Class Enrollment Platform 🧘‍♂️
🧘‍♂️ Simplify yoga class enrollment! This cloud-native app supports monthly sign-ups, batch flexibility, and optimized performance. Dockerized for easy deployment. Clear documentation included. Join us on the path to wellness! 🌟

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
  "phone": "123-456-7890",
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
