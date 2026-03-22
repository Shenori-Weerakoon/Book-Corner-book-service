# 📚 Book Service – Online Bookstore Microservice

## 📖 Overview

The **Book Service** is a microservice responsible for managing book catalog data in the Online Bookstore system.
It provides REST APIs for creating, retrieving, updating, and deleting books, as well as managing stock levels.

This service is part of a **microservice-based architecture** where multiple services (User, Order, Notification) interact to form a complete system.

---

## 🚀 Features

- Add new books
- View all books
- View a specific book
- Update book details
- Delete books
- Decrease stock when an order is placed
- MongoDB database integration
- RESTful API design
- Ready for containerization and cloud deployment

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **DevOps:** GitHub, Docker, GitHub Actions
- **Security:** Environment variables (.env)

---

## 📁 Project Structure

```
src/
  config/
    db.js
  controllers/
    bookController.js
  models/
    Book.js
  routes/
    books.js
  app.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/book-service.git
cd book-service
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

---

### 4️⃣ Run the Application

```bash
node src/app.js
```

Server will start at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔹 Get all books

```
GET /books
```

---

### 🔹 Get book by ID

```
GET /books/:id
```

---

### 🔹 Add new book

```
POST /books
```

#### Request Body

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 14.99,
  "category": "Self-Help",
  "description": "A practical guide...",
  "imageUrl": "https://example.com/book.jpg",
  "stock": 8
}
```

---

### 🔹 Update book

```
PUT /books/:id
```

---

### 🔹 Delete book

```
DELETE /books/:id
```

---

### 🔹 Decrease stock (Inter-service communication)

```
PATCH /books/:id/decrease-stock
```

#### Request Body

```json
{
  "quantity": 2
}
```

---

### 🔹 Health Check

```
GET /health
```

---

## 🔗 Inter-Service Communication

This service integrates with the **Order Service**.

### Workflow:

1. User places an order via Order Service
2. Order Service calls Book Service:

```
PATCH /books/:id/decrease-stock
```

3. Book Service updates stock in MongoDB
4. Response returned to Order Service

This demonstrates **microservice-to-microservice communication using REST APIs**.

---

## 🔐 Security Practices

- Sensitive data stored in `.env`
- No hardcoded credentials
- Input validation implemented
- Proper error handling with HTTP status codes
- Ready for IAM and secure cloud deployment

---

## 🐳 Docker Support

### Build Image

```bash
docker build -t book-service .
```

### Run Container

```bash
docker run -p 3000:3000 book-corner-book-service
```

---

## ⚙️ CI/CD Pipeline

Implemented using **GitHub Actions**:

- Automatic build on push
- Docker image creation
- Image pushed to container registry

---

## 🧪 Testing

Test endpoints using:

- Postman
- Thunder Client
- Browser (for GET requests)

---

## 📊 Example Response

```json
[
  {
    "id": "661b0d6a9d12a4c3d5f12345",
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 14.99,
    "category": "Self-Help",
    "description": "A practical guide...",
    "imageUrl": "https://example.com/book.jpg",
    "stock": 8
  }
]
```

---

## 📌 Notes

- MongoDB automatically creates database and collections
- Book IDs are generated using MongoDB ObjectId
- Service is designed for cloud deployment (AWS / Azure / GCP)

---

## 👨‍💻 Author

Developed as part of **SE4010 – Current Trends in Software Engineering** assignment.

---
