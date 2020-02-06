# MJS-Exchange-API

------
## Table of Content

- **MJS-Exchange-API**
  - [Base URL](#base-url--httplocalhost3000)
  - [Installation](#installation)
  - [Usage](#usage)
  - [List of Routes User](#list-of-routes-user)
  - [List of Errors](#list-of-errors)
  - **Endpoints**
    - [Login](#post-login)
    - [Register](#post-register)
    - [Change Password](#patch-change-password)
------

#### **Base URL :** `http://localhost:3000`

#### **Installation:**

Clone this API from repository and install npm, then on `server` directory install the neccessary npm package

```
$ git clone https://github.com/samuelzega/mjs-exchange.git
$ npm install
$ cd ../server && npm install
```

#### **Usage:**

Run script from packages by using the command below

```
$ npm run dev
```

Run code below on `client` directory to initiate `client` host

```
$ live-server --host=localhost
```

#### **List of Routes User:**

| **Route**        | **HTTP** | **Description**                                     |
| ---------------- | -------- | --------------------------------------------------- |
| /register        | POST     | Sign up new user                                    |
| /login           | POST     | Log in and get an access token based on credentials |
| /google/login    | POST     | Sign in with OAuth 2.0 Google                       |
| /change-password | PATCH    | Assign new password for user                        |

#### **List of Errors:**

| **Code** | **Name**              | **Description**                                |
| -------- | --------------------- | ---------------------------------------------- |
| 400      | Bad Request           | Incorrect form validation                      |
| 404      | Not Found             | Requested resource not found                   |
| 500      | Internal Server Error | Server currently unable to handle this request |



### **POST Login**

------

- **URL:** `/login`

- **Method:** `POST`

- **Description:** `Log in and get an access token based on credentials`

- **Request body:**

  ```javascript
  {
      "email": "email@domain.com", //required
      "password": "password" //required
  }
  ```

- **Success Response:**

  - **Status:** `200`

    ```javascript
    {
        "email": "email@domain.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QHRlc3QuaWQiLCJpYXQiOjE1ODEwMTUyMTl9.OQYDBjJ0VvAAm7fsXVqKZBg8ZFt4mEdM50wOBih4DlQ"
    }
    ```

- **Error Response:**

  - **Status:** `400`

    ```javascript
    {
        "errors": [
            "Incorrect Username or Password"
        ]
    }
    ```

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```

### **POST Register**

------

- **URL:** `/register`

- **Method:** `POST`

- **Description:** `Sign up new user`

- **Request body:**

  ```javascript
  {
      "name": "user", //required
      "email": "email@domain.com", //required
      "password": "password" //required
  }
  ```

- **Success Response:**

  - **Status:** `201`

    ```javascript
    {
        "name": "user",
        "email": "email@domain.com"
    }
    ```

- **Error Response:**

  - **Status:**`400`

    ```javascript
    {
        "errors": [
            "Email already exist"
        ]
    }
    ```

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```


### **PATCH Change Password**

------

- **URL:** `/change-password`

- **Method:** `PATCH`

- **Description:** `Assign new password for user`

- **Request body:**

  ```javascript
  {
      "email": "email@domain.com", //required
      "password": "password" //required
      "newPassword": 'newpassword' //required
  }
  ```

- **Success Response:**

  - **Status:** `200`

    ```javascript
    {
        "name": "test",
        "email": "test@test.id"
    }
    ```

- **Error Response:**

  - **Status:** `404`

    ```javascript
    {
        "errors": [
            "Incorrect Username or Password"
        ]
    }
    ```

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```

