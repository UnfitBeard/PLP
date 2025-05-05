# Task Management API

A simple RESTful API built with **Express.js** and **MySQL** for managing tasks.

## Features

- Create a new task
- Retrieve a task by ID

## Technologies Used

- Node.js
- Express.js
- MySQL (via a connection pool)
- ES Modules

---

## Endpoints

### `POST /tasks`

**Description:** Create a new task.

**Request Body (JSON):**
```json
{
  "title": "Task title",
  "description": "Task description",
  "user_id": 1
}
```
**Response**
```json
{
  "task_id": 42
}
```

### `GET /tasks/:task_id`

Description: Retrieve a task by its task_id.

**Response (Success):**
```json
{
  "task_id": 42,
  "title": "Task title",
  "description": "Task description",
  "user_id": 1
}
```

**Response (Not Found)**
```json
{
  "message": "Task not found"
}
```

### Setup Instructions
**1.CloneRepo**
```bash
git clone https://github.com/your-username/task-api.git
cd task-api
```
**2.Install dependencies**
```bash
npm install
```

**DB Setup**
```sql
    CREATE TABLE tasks (
  task_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  user_id INT
);
```

**Configure DB Connection**
```js
    // databaseconn.js
import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "yourdatabase",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;

```

**Start the Server**
```bash
node index.js
```