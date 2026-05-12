# 🧳 Bookie

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-frontend-purple?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-typed-blue?logo=typescript)
![Express](https://img.shields.io/badge/Express-backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-database-green?logo=mongodb)

## 📖 Overview

Bookie is a full-stack accommodation booking application inspired by the original OpenClassrooms project "Reservia".

The project originally started as a frontend-only school project before being completely redesigned into a more realistic full-stack architecture.

The frontend was rebuilt with React and connected to a custom Express REST API. The backend exposes accommodations and activities data stored in MongoDB and organized through routes, services, and models.

The project focuses on:

* Frontend / backend communication
* REST API architecture
* Component organization
* Data structuring
* Separation of concerns
* Full-stack application design

---

## 🧰 Tech Stack

### Frontend

* React
* Vite
* TypeScript
* React Router
* Axios
* CSS3

### Backend

* Node.js
* Express
* TypeScript
* MongoDB
* Mongoose
* Docker

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd Bookie-main
```

---

## ⚙️ Backend Setup

Move into the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
yarn
```

Start the backend server:

```bash
yarn dev
```

The backend runs on:

```bash
http://localhost:3000
```

---

## 💻 Frontend Setup

Move into the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

The frontend runs on:

```bash
http://localhost:5173
```

---

## 🔐 Environment Variables

### Backend `.env`

```bash
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/Bookie
```

---

### Frontend `.env`

```bash
VITE_BASE_URL=http://localhost:3000/api
```

---

## 🐳 MongoDB with Docker

The project includes a Docker Compose configuration to run MongoDB locally.

Start the database with:

```bash
docker-compose up -d
```

MongoDB will run on:

```bash
mongodb://localhost:27017
```

Persistent Docker volumes are configured to preserve data between container restarts.

---

## 🏗️ Project Structure

```bash
Bookie-main/
│
├── backend/
│   ├── src/
│   │   ├── data/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.ts
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
        ├── components/
│   │   ├── models/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.tsx
│   │   ├──main.tsx
│   │   └── vite-env.d.ts
│   │
│   └── package.json
│
└── prettier.config.js
```

### Structure Overview

#### Backend

* data/ – Legacy mock data from the initial frontend version
* models/ – Mongoose schemas and TypeScript models
* routes/ – Express API routes
* services/ – Database and business logic
* app.ts – Backend entry point

#### Frontend

* components/ – Reusable UI components
* models/ – Shared TypeScript models
* pages/ – Application pages
* services/ – API communication layer
* App.tsx – Routing configuration
* main.tsx – Frontend entry point

---

## 🔗 Application Features

Users can:

* Browse accommodations
* Browse activities
* Access detailed pages
* Retrieve data from a backend API

Routing is handled with React Router for smooth page navigation.

---

## 📡 API Architecture

The frontend communicates with the backend through Axios.

The overall data flow follows this structure:

```text
Frontend Component
        ↓
Service Layer (Axios)
        ↓
Express API
        ↓
JSON data files
```

This architecture helps keep responsibilities clearly separated and improves maintainability.

---

## 🎨 Frontend Architecture

The frontend was structured around reusable components and page-based routing.

Main UI sections include:

* Header
* Navigation bar
* Filters
* Popular section
* Accommodations section
* Activities section
* Footer

The application follows a modular structure to simplify feature evolution and maintenance.

---

## ⚡ Backend Responsibilities

The backend is responsible for:

* Exposing REST API endpoints
* Serving accommodations data
* Serving activities data
* Managing MongoDB communication
* Structuring routes and services cleanly
* Exposing REST API endpoints used by the frontend

The backend centralizes data access and separates application logic from the frontend.

---

## 📈 Possible Next Steps

* Add authentication
* Add search and filtering
* Add loading and error states
* Add admin management features
* Deploy frontend and backend
* Add testing

---

## 📝 Notes

This project was originally based on the OpenClassrooms "Reservia" frontend project before being redesigned into a full-stack application.

The goal of the refactor was to practice:

* Backend architecture
* REST API development
* MongoDB integration
* Docker usage
* Frontend / backend communication
* Data organization and separation
* Scalable project structure

The project was primarily built as a learning project focused on modern full-stack web development practices.
