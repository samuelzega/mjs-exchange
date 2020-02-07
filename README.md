# MJS-Exchange-API

------
## Table of Content

- **MJS-Exchange-API**
  - [Base URL](#base-url--httplocalhost3000)
  - [Installation](#installation)
  - [Usage](#usage)
  - [List of Routes User](#list-of-routes-user)
  - [List of Errors](#list-of-errors)
  - **User Endpoints**
    - [Login](#post-login)
    - [Register](#post-register)
    - [Change Password](#patch-change-password)
  - **Stock Endpoint**
    - [Most Active](#get-most-active)
    - [Most Gainer](#get-most-gainer)
    - [Top Currencies](#get-top-currencies)
    - [Search](#get-search)
    - [Stock Profile](#get-stock-profile)
    - [Trending News](#get-trending-news)
    - [Stock News](#get-news)
    - [Add Favorites](#post-add-favorites)

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

#### **List of User Routes:**

| **Route**        | **HTTP** | **Description**                                     |
| ---------------- | -------- | --------------------------------------------------- |
| /register        | POST     | Sign up new user                                    |
| /login           | POST     | Log in and get an access token based on credentials |
| /google/login    | POST     | Sign in with OAuth 2.0 Google                       |
| /change-password | PATCH    | Assign new password for user                        |

### **List of Stock Routes:**

| **Route**             | **HTTP** | **Description**                                            |
| --------------------- | -------- | ---------------------------------------------------------- |
| /mostactive           | GET      | Retrieve highest trading volume list of stocks             |
| /mostgainer           | GET      | Retrieve top gaining stocks                                |
| /topcurrencies        | GET      | Retrieve top currencies list                               |
| /search               | GET      | Filter stocks profile based on query                       |
| /profile/:id          | GET      | Fetch details of stocks company                            |
| /trendingnews         | GET      | Retrieve current trending news                             |
| /news                 | GET      | Fetch specified news from stock code                       |
| /add/favorites        | POST     | Add chosen stock code to user favorites collection         |
| /list/favorites       | GET      | Retrieve all favorites collection from user                |
| /list/favorites/:id   | GET      | Filter specified stock code from user favorites collection |
| /delete/favorites/:id | DELETE   | Remove specified stock code from user favorites collection |

#### **List of Errors:**

| **Code** | **Name**              | **Description**                                |
| -------- | --------------------- | ---------------------------------------------- |
| 400      | Bad Request           | Incorrect form validation                      |
| 403      | Forbidden             | User not authorized to access                  |
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

### **GET Most Active**

------

- **URL:** `/mostactive`

- **Method:** `GET`

- **Description:** `Retrieve highest trading volume list of stocks`

- **Success Response:**

  - **Status:** `200`

    ```javascript
    [
        {
            "ticker": "ARTO.PA",
            "changes": 80,
            "price": "4100",
            "changesPercentage": "(+1.99%)",
            "companyName": "La Societe Industrielle et Financiere de l'Artois"
        },
        {
            "ticker": "ALECR.PA",
            "changes": 50,
            "price": "6250",
            "changesPercentage": "(+0.81%)",
            "companyName": "Eurofins-Cerep SA"
        },
    ]
    ```

- **Error Response:**
  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```

### **GET Most Gainer**

------

- **URL:** `/mostgainer`

- **Method:** `GET`

- **Description:** `Retrieve top gaining stocks`

- **Success Response:**

  - **Status:** `200`

    ```javascript
    [
        {
            "ticker": "ARTO.PA",
            "changes": 80,
            "price": "4100",
            "changesPercentage": "(+1.99%)",
            "companyName": "La Societe Industrielle et Financiere de l'Artois"
        },
        {
            "ticker": "ALECR.PA",
            "changes": 50,
            "price": "6250",
            "changesPercentage": "(+0.81%)",
            "companyName": "Eurofins-Cerep SA"
        },
    ]
    ```

- **Error Response:**

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```

### **GET Top Currencies**

------

- **URL:** `/topcurrencies`

- **Method:** `GET`

- **Description:** `Retrieve top currencies list`

- **Success Response:**

  - **Status:** `200`

    ```javascript
    [
        {
            "from": "USD",
            "to": "EUR",
            "value": 0.91
        },
        {
            "from": "USD",
            "to": "GBP",
            "value": 0.77
        }
    ]
    ```

- **Error Response:**

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```

### **GET Search**

------

- **URL:** `/search`

- **Method:** `GET`

- **Description:** `Filter stocks profile based on query entered with multiple results`

- **Request Query:** `query`. Example query entered: `query=EA`

- **Success Response:**

  - **Status:** `200`

    ```javascript
    [
        {
            "symbol": "HTA",
            "name": "Healthcare Trust of America, Inc.",
            "currency": "USD",
            "stockExchange": "NYSE",
            "exchangeShortName": "NYSE"
        },
        {
            "symbol": "FR",
            "name": "First Industrial Realty Trust, Inc.",
            "currency": "USD",
            "stockExchange": "NYSE",
            "exchangeShortName": "NYSE"
        },
    ]
    ```

- **Error Response:**

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```

### **GET Stock Profile**

------

- **URL:** `/profile/:id`

- **Method:** `GET`

- **Description:** `Fetch details of stocks company`

- **Request Query:** `id`. Id contains stock code, example: `id=NVDA`

- **Success Response:**

  - **Status:** `200`

    ```javascript
    {
        "symbol": "NVDA",
        "profile": {
            "price": 254.245,
            "beta": "2.037942",
            "volAvg": "7969769",
            "mktCap": "1.63222995E11",
            "lastDiv": "0.64",
            "range": "132.6-259.5",
            "changes": 3.485,
            "changesPercentage": "(+1.39%)",
            "companyName": "NVIDIA Corporation",
            "exchange": "Nasdaq Global Select",
            "industry": "Semiconductors",
            "website": "http://www.nvidia.com",
            "description": "NVIDIA Corp is a developer of semiconductor equipment. It caters to areas like gaming, professional visualization, datacenter and automobiles.",
            "ceo": "Jen-Hsun Huang",
            "sector": "Technology",
            "image": "https://financialmodelingprep.com/images-New-jpg/NVDA.jpg"
        }
    }
    ```

- **Error Response:**

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```

### **GET Trending News**

------

- **URL:** `/trendingnews`

- **Method:** `GET`

- **Description:** `Retrieve current trending news`

- **Success Response:**

  - **Status:** `200`

    ```javascript
    {
        "status": "ok",
        "totalResults": 70,
        "articles": [
            {
                "source": {
                    "id": "financial-times",
                    "name": "Financial Times"
                },
                "author": null,
                "title": "Elon Musk pits an army of Tesla fans against Wall Street - Financial Times",
                "description": "The electric car maker’s chief stokes retail investors’ ardour and levitates share price",
                "url": "https://www.ft.com/content/1b72bd58-494f-11ea-aee2-9ddbdc86190d",
                "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F59f60fda-48ff-11ea-aeb3-955839e06441?source=next-opengraph&fit=scale-down&width=900",
                "publishedAt": "2020-02-07T05:00:51Z",
                "content": "On Sunday, the day before Tesla’s stock would rocket to a new high, Elon Musk, the company’s chief executive, announced an event at his house for computer programmers on Twitter and invited Vivien Hantusch, a student in Germany, to attend.\r\nMs Hantusch, who s… [+5622 chars]"
            },
            {
                "source": {
                    "id": "usa-today",
                    "name": "USA Today"
                },
                "author": "Kelly Tyko",
                "title": "Macy's is closing 125 stores with the first locations closing soon: Is your location on the map? - USA TODAY",
                "description": "The liquidation sale at the first Macy's stores set to close in early 2020 is underway but which stores will be next to shutter is still unknown.",
                "url": "https://www.usatoday.com/story/money/2020/02/06/macys-store-closures-2020-map/4681959002/?utm_source=google&utm_medium=amp&utm_campaign=speakable",
                "urlToImage": "https://www.gannett-cdn.com/presto/2020/02/07/USAT/2fda74c6-b55c-4a67-8fd7-802800762d23-MACYS.jpg?crop=2870,1614,x1,y5&width=1600&height=800&fit=bounds",
                "publishedAt": "2020-02-07T03:42:55Z",
                "content": "The job cuts and store closures come as Macy's sales continued to slide during the critical holiday season.\r\nUSA TODAY\r\nIs your Macy's store on the chopping block?\r\nUSA TODAY has pinpointed the locations of the first stores that will close in the coming weeks… [+3722 chars]"
            },
    }
    ```

- **Error Response:**

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```

### **GET News**

------

- **URL:** `/news`

- **Method:** `GET`

- **Description:** `Fetch specified news to filter from stock code`

- **Request Query:** `tickers`. tickers contains stock code, example: `tickers=ATVI`

- **Success Response:**

  - **Status:** `200`

    ```javascript
    {
        "meta_data": {
            "api_name": "stock_news_v2",
            "num_total_data_points": 5,
            "credit_cost": 500,
            "start_date": "yesterday",
            "end_date": "yesterday",
            "start_minute": "00:00:00",
            "end_minute": "23:59:59"
        },
        "result_data": {
            "ATVI": [
                {
                    "sentiment": 0,
                    "ticker": "ATVI",
                    "author": "",
                    "event_location": null,
                    "event_person": [
                        "Bobby Kotick"
                    ],
                    "description": "SANTA MONICA, Calif.--(BUSINESS WIRE)--Activision Blizzard, Inc. (Nasdaq: ATVI) today announced fourth-quarter and full year 2019 results. “Our fourth quarter results exceeded our prior outlook for both revenue and earnings per share,” said Bobby Kotick, Chie…",
                    "event_organization": [
                        "Nasdaq"
                    ],
                    "source": "Businesswire.com",
                    "published": "2020-02-06T21:13:08Z",
                    "title": "Activision Blizzard Announces Fourth-Quarter and 2019 Financial Results",
                    "url": "https://www.businesswire.com/news/home/20200206005933/en/Activision-Blizzard-Announces-FourGETth-Quarter-2019-Financial-Results",
                    "event_sector": [
                        "Technology"
                    ],
                    "event_genre": [
                        "Product Release",
                        "Earnings"
                    ]
                },
    }
    ```

- **Error Response:**

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```

### **POST Add Favorites**

------

- **URL:** `/add/favorites`

- **Method:** `POST`

- **Description:** `Fetch details of stocks company`

- **Request body:**

  ```javascript
  {
      "stock_code": "FB", //required
      "stock_name": "Facebook, Inc. Common Stock", //required
      "stock_industry": "Computer Software", //required
      "stock_ceo": "Mark Zuckerberg"
  }
  ```

- **Success Response:**

  - **Status:** `200`

    ```javascript
    {
        "stock_code": "FB", //required
        "stock_name": "Facebook, Inc. Common Stock", //required
        "stock_industry": "Computer Software", //required
        "stock_ceo": "Mark Zuckerberg",
        "UserId": "1"
    }
    ```

- **Error Response:**

  - **Status:** `500`

    ```javascript
    {
        "errors": "Server currently unable to handle this request"
    }
    ```