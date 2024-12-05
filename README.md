# Basic CRUD with Express.js

## Overview

This project is designed to learn the fundamentals of creating a RESTful API using Express.js. You will implement basic Create, Read, Update, and Delete (CRUD) operations, which are essential for building web applications.

## Table of Contents

- [Basic CRUD with Express.js](#basic-crud-with-expressjs)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)

## Technologies Used

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - NoSQL database (optional)
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool (optional)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/basic-crud-express.git
   ```

2. Navigate to the project directory:
   ```bash
   cd basic-crud-express
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## API Endpoints

| Method | Endpoint       | Description            |
| ------ | -------------- | ---------------------- |
| GET    | `/user`        | Get list of user       |
| POST   | `/user`        | Create a new user      |
| GET    | `/user/id/:id` | Get user details by ID |
| DELETE | `/user/id/:id` | Delete user by ID      |
| PUT    | `/user/id/:id` | Update user by ID      |
