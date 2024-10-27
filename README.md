# Task Manager App for Students

A simple and functional task manager web application tailored for students to organize their daily, weekly, monthly, and yearly tasks. The application offers secure authentication, task storage, and easy management options.

## Features

- **User Authentication**: Signup and Login using secure authentication methods.
- **Task Categories**: Organize tasks into categories such as General, Daily, Weekly, Monthly, and Yearly.
- **Task Management**: Add, edit, delete, and expand tasks with support for descriptions and deadlines.
- **Persistent Storage**: Stores tasks in a database when a user is logged in, and in the browser's local storage if not logged in.
- **Responsive Design**: Accessible on both desktop and mobile devices.
- **Separate Full-Screen Pages for Each Task Category**: Allows users to manage tasks under each category with full-screen mode.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Technologies Used

- **Frontend**: React, Axios, TailwindCSS, React Router
- **Backend**: Node.js, Express, MongoDB (for data storage)
- **Authentication**: JSON Web Tokens (JWT)

## Project Structure

```
.
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── auth_db.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── public/
├── README.md
└── package.json
```

- `backend/`: Contains the server-side code, including controllers, routes, and database connection.
- `frontend/`: Contains the React application with components, pages, and routing logic.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/)

### Backend Setup

1. **Navigate to the Backend Folder**:
   ```bash
   cd backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env` file in the `backend` folder and add the following:

   ```plaintext
   PORT=5000
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to the Frontend Folder**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the React App**:
   ```bash
   npm start
   ```

4. Open `http://localhost:3000` to view the app in the browser.

## Usage

### Task Management

1. **Login** or **Sign Up** to begin managing tasks.
2. Choose a task category (General, Daily, Weekly, Monthly, Yearly) from the sidebar.
3. **Add** a task by entering the title, description, and deadline. Save the task.
4. **Edit** a task by clicking the edit icon next to it.
5. **Delete** a task by clicking the trash icon.
6. **Expand** or **collapse** tasks for more or less detail.

### Authentication

- After login, an authorization token is saved in the browser's `localStorage`.
- This token is used to verify the user's identity and to save or retrieve tasks from the database.

## API Endpoints

| Endpoint              | Method | Description                        |
|-----------------------|--------|------------------------------------|
| `/api/auth/signup`    | POST   | Create a new user account         |
| `/api/auth/login`     | POST   | Login and receive a token         |
| `/api/tasks`          | GET    | Retrieve tasks for the logged-in user |
| `/api/tasks`          | POST   | Add a new task for the logged-in user |
| `/api/tasks/:taskId`  | DELETE | Delete a task for the logged-in user |

## Contributing

1. Fork the project.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Create a new Pull Request.

## Visuals

All the visuals for the project are available in the [Visuals](Visuals) folder.

## License

This project is open-source and available under the [MIT License](LICENSE).
