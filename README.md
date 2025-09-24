## JSON Server Auth Boilerplate 🚀

A ready-to-use project for running a Fake Auth API using 
json-server + json-server-auth

# 
## Features: 
✅ User registration 
✅ User login
✅ WT Access Token (expires in 1 hour)
✅ Access control management (Read / Write)
✅ Fully fake database using db.json
✅ Password encryption with bcrypt
✅ Quick setup, ideal for prototyping and learning
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
- `POST /register` - Register
## Body: 
```sh
{
  "email": "test@mail.com",
  "password": "123456"
}
```
- `POST /login` - Login
## Body: 
```sh
{
   "email": "test@mail.com",
  "password": "123456"
}
```
- Response Example
```sh
{
  "accessToken": "xxx.yyy.zzz",
  "user": {
    "id": 1,
    "email": "test@mail.com"
  }
}
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








