# CRUD Application Project

This project consists of a CRUD (Create, Read, Update, Delete) application with a frontend and backend, along with a separate `UserTable` frontend to display registered users' information.

## Table of Contents

- [CRUD Application Project](#crud-application-project)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Usage](#usage)

## Features

- CRUD operations for managing data.
- User interface for CRUD operations.
- Separate `UserTable` frontend displaying registered users.

## Technologies Used

### Frontend
- React (in the CRUD app)
- HTML
- CSS
- JavaScript
- Bootstrap

### Backend
- Node.js
- Express
- MongoDB 

## Setup Instructions

### Prerequisites
- Node.js
- npm (Node package manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Navigate to the `client` folder and install dependencies using npm.
    ```cd client
    npm install
    ```


3. Navigate to the `server` folder and install dependencies using npm.
   ```
    cd ../server
    npm install
    ```
4. Environment Variables

Add the following environment variables to a `.env` file in the `../CRUD/server` directory.

- `DB` - MongoDB connection string 
- `PORT` - Port number for the server (e.g., `8080`)
- `JWTPRIVATEKEY` - Secret key for JSON Web Token (JWT) authentication 



### Running the Application

1. Start the backend server. It runs on port 8080.
    ```
    cd server
    npm start
    ```
2. Start the frontend client. It typically runs on port 3000.
    ```
    cd ../client
    npm start
    ```
3. Open the `UserTable/index.html` file in your browser to view user information.

## Usage

- **CRUD App (Frontend)**: Navigate to `http://localhost:3000` in your browser to interact with data operations.
- **UserTable**: Open the `UserTable/index.html` file to view registered users' information.

## Screenshots
![Sign Up](https://github.com/Simanta-076/MERN-Task/assets/82601089/fcaf825a-6105-42e0-a19f-e4045f41edb1)
![Login](https://github.com/Simanta-076/MERN-Task/assets/82601089/1224f24c-09f3-4d89-aef4-5d53cce4a9bb)


