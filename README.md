# Portfolio Backend

## Project Objective
This is the backend server for the Portfolio Web Application.
It provides RESTful APIs for handling user data, contact form submissions, and project details. Built with Node.js, Express.js, and MongoDB, it powers the frontend portfolio app with dynamic data.

The objective of the Portfolio Backend is to provide a secure and reliable server-side application that powers the portfolio website. It is designed to:

 . Store and manage portfolio data such as projects, skills, and user details.

 . Handle contact form submissions and store them in a database for easy access.

 . Expose a set of RESTful APIs to the frontend so content can be updated dynamically without modifying code.

 . Ensure scalability and maintainability through a clean structure with routes, models, and controllers.

 . Provide flexibility for deployment on cloud platforms like Render, Railway, or Heroku.
 
 ---

 ## Brief Description
 The backend exposes RESTful API endpoints that allow the frontend to dynamically fetch and display data, ensuring that updates to the portfolio can be made easily without changing the frontend code.It connects with a MongoDB database to store and manage portfolio information such as projects, skills, and contact messages.
 ---

 ## Links
 -** GitHub Repository:** https://github.com/kpragati03/portfolio-backend.git

 **Live Demo:**
 ---

 
**##Technologies Used**
Node.js & Express.js 
MongoDB & Mongoose
dotenv 
Nodemon 
Git & GitHub 
Render / Railway / Heroku (optional) 

**##How to Run Locally**

Clone the repository

Bash

git clone  https://github.com/kpragati03/portfolio-backend.git
cd portfolio-backend
Install Dependencies

Bash

npm install
Configure Environment Variables

env

PORT=5000
MONGO_URI=
Start the server

. For development (auto-restart with nodemon):

Bash

npm run dev

. For production:

Bash

npm start



**##Challenges Faced & Solutions**
*Challenge:* CORS (Cross-Origin Resource Sharing) Errors

*Solution:* Integrated the cors middleware in Express to allow requests from the frontend domain .

*Challenge:* Error Handling & Validation

*Solution:* Added centralized error-handling middleware in Express and used Mongoose validation to ensure data integrity.

*Challenge:* Project Structure & Scalability

*Solution:* Organized the codebase into routes, models, and controllers, making the backend modular, scalable, and easier to maintain.


## Screenshots

---

## Feature List
- User-Friendly APIs
- Project Management , Contact Form Handling, Environment Configuration 
- MongoDB Integration 
- Error Handling, CORS Support
- Scalable Project Structure , Hot Reload in Development 
- Deployment Ready

---

## Sample Input & Output 
Contact Form Submission

Endpoint: POST /api/contact
Sample Input (JSON):

json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "Hello, I am interested in collaborating with you!"
}



