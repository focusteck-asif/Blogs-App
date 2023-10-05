
# API Documentation-Blogs App

This is a basic blogs app, where user can login, and after authentication and authorization, user can get acces to protected routes with his privilages to add, view, and delete blogs. User can also add, view and delete comments on blogs. There is also role based privilages for admin and user. All these frontend functionality is being done in React, Backend in Node Express Js with Database in Postgresql.

## Tech Stack
Server Language: Node version v20.5.0                               
Framework: Express.js  
Backend: Postgresql 15.4  
Frontend: React Js 18.2.0
## Installation

Install my-project with npm

```bash
npx create-react-app tech-blogs
cd tech-blogs
npm install react-router-dom
npm install axios 
npm install bcrypt
npm install cors
npm install db-migrate-pg
npm install dotenv
npm install express
npm install express-validator
npm install formik
npm install http-proxy-middleware
npm install jsonwebtoken
npm install jwt-decode
npm install pg
npm install sequelize
npm install sequelize-cli
npm install yup

```

## API Reference

###  User API
#### User Sign Up

```http
 POST localhost:3001/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `signup` | `string` | **Required**. returns token to user |

#### User Login

```http
 POST localhost:3001/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `login`      | `string` | **Required**. returns token to user |

### Token API
#### Verify Token

```http
 GET localhost:3001/verify-token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `verify-token`      | `string` | **Required**. returns user data |

### Blogs API
#### GET Blogs

```http
 GET localhost:3001/blogs
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `blogs`      | `string` | **Required**. returns all blogs data|

#### GET Blog By ID

```http
 GET localhost:3001/blogs/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `blogs/:id`      | `string` | **Required**. returns a specific blog |

#### DELETE Blog

```http
 Delete localhost:3001/blogs/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `blogs/:id`      | `string` | **Required**. delte the blog |

#### Create Blog

```http
 POST localhost:3001/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `create`      | `string` | **Required**. returns new blog |


### Comments API
#### POST Comments

```http
 POST localhost:3001//blogs/:blogId/comments
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/blogs/:blogId/comments`      | `string` | **Required**. returns new comment |

#### GET Comments

```http
 GET localhost:3001//blogs/:blogId/comments
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/blogs/:blogId/comments`      | `string` | **Required**. returns all comments |

#### DELETE Comments

```http
 DELETE localhost:3001/comments/:commentId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `/comments/:commentId`      | `string` | **Required**. returns new comment |

## Features
- User Management: The System allows to create user accouts with some information like valid name, email and password. A registered user can login with his provided credentials, to get access to protected routes upon authentication and authorization.

- User Authentication with JWT Tokens: The system allows a secure user authentication upon login with JSON Web Token (JWT) to allow access to protected routes. This is being done with token verification.

- Blogs Management: To Authenticated users, system allows to manage blogs. User can add new blogs, view blogs and also can delte his blogs as well as can comment on all blogs.

- User-Blog Association: There is also associations between user and blogs. As a user can have many blogs, and every blog have a user. This will enhance the functionality of personalized blogs management.

- Comments Management: The system also allows comment management, user can view, add and delete his comments. There is also associations between user, blogs and comments.

- Role Based Privilages: There are also roles based privilages for better management of blogs and comments, admin can erform all operations on all blogs, whereas a user can comment, and view every blog, but can delete only his own blogs and comments.

- Password Encryption: To enhance the system security, it stores users passwords in an encrypted format. It will make difficult to compromise system security.

- Auth Context: The whole App on frontend is wrapped in a context provider, which makes authentication and authorization more scalable and easy to maintain.








## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_PORT`

`SECRET_KEY`


## Running Tests

- Backend: To run backend first, run the following commands
```bash
  cd server

  // now run the following command

  node server.js
```
-Frontend-: For frontend, run the following command
``` bash  
npm start
```


