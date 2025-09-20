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

Sample Output (JSON): 

json

{

  "success": true,
  
  "message": "Contact form submitted successfully",
  
  "data": {
  
    "_id": "650af2c72b0d3e00123abcd4",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "message": "Hello, I am interested in collaborating with you!",
    "createdAt": "2025-09-20T12:30:15.000Z"
    
  }
  
}

---

## Evaluation Criteria Mapping

| **Criteria**               | **Implementation in Project**                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------- |
| **Project Objective**      | Backend provides APIs for managing portfolio data and handling contact form submissions.       |
| **Technology Usage**       | Implemented using Node.js, Express.js, MongoDB, and Mongoose for scalable backend development. |
| **Project Structure**      | Organized into routes, models, and controllers for maintainability and scalability.            |
| **Functionality**          | APIs successfully handle CRUD operations for projects and contact messages.                    |
| **Error Handling**         | Centralized error-handling middleware ensures clean and consistent API responses.              |
| **Deployment Readiness**   | Configured with environment variables and tested on cloud platforms like Render/Heroku.        |
| **User Interaction**       | Provides RESTful APIs consumed by the frontend for dynamic content updates.                    |
| **Testing & Verification** | Verified APIs using Postman with sample input/output requests and responses.                   |
| **Documentation**          | README includes setup instructions, API usage, screenshots, and project explanation.           |

---

**#Team Contributions**

This project was a collaborative effort where each team member took ownership of key areas of the development lifecycle, from conception to deployment. The main responsibilities were distributed as follows:




****##Pragati Kumari (Project Lead & Lead Full-Stack Developer)****

As the project lead, Pragati spearheaded the technical direction and was responsible for the entire frontend development and the successful deployment of the full-stack application.

*Project Leadership & Architecture:* Led the project initiation, defined the technical architecture, and selected the MERN stack technologies.

*Lead Frontend Development:* Single-handedly designed and developed the entire frontend application using React. This included creating all components, implementing the UI/UX, styling, and adding light/dark mode theme functionalities.

*Full-Stack Deployment & DevOps:* Managed the complete end-to-end deployment pipeline, deploying the frontend to Vercel and the backend to Render.

*Critical Bug Resolution:* Systematically troubleshooted and resolved complex integration issues, including Cross-Origin Resource Sharing (CORS) policies, case-sensitivity bugs, and server-side deployment errors.

*Version Control & Documentation:* Established the final GitHub repositories and authored the comprehensive technical documentation, including setup guides, deployment links, and documenting project challenges.





****##Saroj Padhi (Lead Backend Developer)****

Saroj was responsible for building the entire server-side of the application, ensuring a robust and scalable backend to support the frontend's features.

*Backend Architecture:*  Architected and implemented the entire server-side application using Node.js and Express.js.

*Database Management:* Designed the MongoDB schema for the contact form and managed the complete database integration and connectivity.

*API Development:* Developed, tested, and secured all the API endpoints required for the frontend to interact with the database.





****##Dommaraju Jyothshna Sree (Project Contributor)****
Jyothshna played a key role in the initial phase of the project, helping to set up the foundational elements.

*Initial Setup & Scaffolding:* Contributed to the project's kickoff by creating the initial GitHub repository.

*Documentation:* Authored the first draft of the project's README file, which laid the groundwork for the final documentation.



## Author

*Name:*   PRAGATI KUMARI,
          SAROJ PADHI,
          DOMMARAJU JYOTHSHNA SREE.

*Date:* 20 september 2025



