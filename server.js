// server.js
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(cors());
app.use(middlewares);

// json-server-auth middleware
app.use(auth);

// router بعد ال auth
app.use(router);

const PORT = 3007;
app.listen(PORT, () => {
  console.log(`🚀 JSON Server Auth running at http://localhost:${PORT}`);
});
