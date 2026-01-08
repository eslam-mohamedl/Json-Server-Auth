## JSON Server Auth Boilerplate 🚀

A ready-to-use project for running a Fake Auth API using 
json-server + json-server-auth

# 
## Features : 
- ✅ User registration 
- ✅ User login
- ✅ WT Access Token (expires in 1 hour)
- ✅ Access control management (Read / Write)
- ✅ Fully fake database using db.json
- ✅ Password encryption with bcrypt
- ✅ Quick setup, ideal for prototyping and learning
# 
## 🛠️ Installation & Running
1. Clone the repository
```sh
git clone <your-repo-link>
cd <your-repo-folder>
```
2. Install dependencies:
```sh
npm install
```
3. Start the server
```sh
npx json-server db.json -m ./node_modules/json-server-auth --port 3000

```
#
## 📌 Main Endpoints
## 1 - Request Register
- Method :  POST
- Endpoint :  /register 
- Body: 
```sh
{
  "name": "Eslam mohamed",
  "email": "eslam@mail.com",
  "password": "102030"
}
```
- Response Example
```sh
{
    "accessToken": "xxx.yyy.zzz",
    "user": {
        "email": "eslam@mail.com",
        "name": "Eslam mohamed",
        "id": 3
    }
}
```
## 2 - Request Login
- Method :  POST
- Endpoint :  /login 
- Body: 
```sh
{
   "email": "eslam@mail.com",
  "password": "102030"
}
```
- Response Example:
```sh
{
  "accessToken": "xxx.yyy.zzz",
  "user": {
    "id": 3,
    "email": "eslam@mail.com"
  }
}
```

## 📌 User Endpoints
## 1 - Request List Users
- Method :  GET
- Endpoint :  /users 
- Response :
```sh
[
  {
    "id": 1,
    "email": "example@gmail.com",
    "name": "ahmed mohamed"
  },
  {
    "id": 2,
    "email": "user@gmail.com",
    "name": "omar mohamed"
  }
]
```
##
## 2 - Request Get User
- Method :  GET
- Endpoint :  /users/1
- Response Example:
```sh
[
  {
    "id": 1,
    "email": "example@gmail.com",
    "name": "ahmed mohamed"
  }
]
```
##
## 3 - Request Create User
- Method :  POST
- Endpoint :  /users
- Body :
```sh
{
  "name": "elsayed ahmed",
  "email": "elsayed@mail.com",
  "password": "123456"
}
```
- Response Example : 
```sh
{
    "accessToken": "xxx.yyy.zzz",
    "user": {
        "email": "elsayed@mail.com",
        "name": "elsayed ahmed",
        "id": 3
    }
}
```
##
## 4 - Request Update User
- Method :  PATCH
- Endpoint :  /users/3
- Body :
```sh
{
  "name": "elsayed ahmed mohamed"
}
```
- Response Example :
```sh
{
    "email": "elsayed@mail.com",
    "password": "$2a$10$jlrCq8uPt74qjOTKe/j3u.Mthr3KZ9kqCwkKtUf8nCviofNfd/a4y",
    "name": "elsayed ahmed mohamed",
    "id": 3
}
```
##
## 5 - Request Delete User
- Method :  DELETE
- Endpoint :  /users/3
- Response Example
```sh
{}
```
##
# 🔑 Authentication Flow
- Passwords are encrypted using bcrypt.
- JWT tokens contain the user ID (sub) and email.
- Access tokens expire after 1 hour.
- You can protect any resource by adding a userId property.
- Supports role-based permissions like Unix file system:
- 4 → Read
- 2 → Write
- 0 → No access

##
# 💡 Notes

- db.json is the fake database.
- Add any additional resources like posts, messages, products.
- All resources with userId support ownership-based authorization.
- JWT tokens are required for protected routes.
- Easy to extend for new endpoints and resources.
- Ideal for front-end prototyping, testing, and learning JWT auth.
- Not recommended for production use.








