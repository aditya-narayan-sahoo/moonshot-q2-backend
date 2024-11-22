<h1 align="center">Chart Backend  🚀</h1>
<div align="center">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="nodejs"/>
<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="jwt"/>
<img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb"/>
<img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express"/>
<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
<img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" alt="nodemon">
<img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel">
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 📍 [API Endpoints](#endpoints)
5. 🤸 [Local Setup](#setup)

### <a name="introduction">🤖 Introduction</a>

This backend application provides a robust and scalable API for user authentication, data visualization, and chart sharing. It is built with Node.js, Express, MongoDB, and Mongoose and is deployed on Vercel for serverless operation.
The frontend part can be found here : [Frontend Repository](https://github.com/aditya-narayan-sahoo/moonshot-q2-frontend).

### <a name="tech-stack">⚙️ Tech Stack</a>

- NodeJs
- Express
- Javascript

### <a name="features">🔋 Features</a>

👉 **User Authentication:**

- Users can register with their name, email, and password. Passwords are securely hashed using bcrypt.
- Authenticated users receive a JSON Web Token (JWT) for secure communication.
- For logout, the app invalidates the session by ending the client-side usage of the token.

👉 **JWT-Based Authentication:**

- Secure user sessions with tokens that expire after 1 hour.
- Middleware for protected routes to ensure only authenticated users can access them.

👉 **MongoDB Integration:**

- Utilizes MongoDB Atlas for a fully managed database.
- Schema-based data modeling with Mongoose.

👉 **Interactive Data Visualization:**
APIs to handle chart data, enabling interactive front-end visualizations.
Pagination and filtering support for efficient data handling.

👉 **Chart Sharing:**

- Generate sharable links for charts with specific filters and date ranges.
- Authentication required for accessing shared links to ensure data confidentiality.

👉 **Error Handling and Validation:**

- Centralized error-handling middleware for a better developer experience.
- Request validation to ensure data integrity.

👉 **CORS Configuration:**

- Configured to allow requests only from trusted origins.
- Prevents unauthorized access from unknown clients.

👉 **Developer-Friendly Structure:**

- Well-organized file structure with routes, controllers, models, and middleware.
- Easy-to-extend architecture for adding new features.

👉 **Scalability:**

- Serverless architecture deployed on Vercel ensures automatic scaling based on usage.
- Optimized MongoDB queries for performance.

### <a name="endpoints">📍 API Endpoints</a>

Authentication Endpoints:

- POST /api/auth/signup – Register a new user.
- POST /api/auth/login – Login for existing users.
- POST /api/auth/logout – Logout the user.

Data Endpoints

- GET /api/data – Fetch paginated data for visualization.
- GET /api/charts – Retrieve chart-specific data.

Chart Sharing Endpoints

- POST /api/charts/share – Generate a shareable URL for a chart.

### <a name="setup">🤸 Local Setup</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites:**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Clone the Repository:**

```
git clone https://github.com/aditya-narayan-sahoo/moonshot-q2-backend.git
```

**Change the Directory:**

```
cd moonshot-q2-backend
```

**Installation:**

Install the project dependencies using npm:

```
npm install
```

**Make a .env file in the root directory:**

```
MONGO_URI=your_databse_uri
JWT_SECRET=your_jwt_secret_key
```

**Running the Project**

```
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) in your browser to view the project preview.
