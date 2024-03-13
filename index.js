const express = require("express");
const app = express();
const port = 5000;
const postRoutes = require("./src/posts/routes");
const usersRoutes = require("./src/users/routes");
const membersRoutes = require("./src/members/routes");
// ================== Middleware ==================
app.use(express.json());

// ================== ROOT API ==================
app.get("/", (request, response) => {
  response.json({ massage: "Node.js, Express, and Postgres API" });
});

// Posts routes
app.use("/posts", postRoutes);
// Users routes
app.use("/users", usersRoutes);
// Members routes
app.use("/members", membersRoutes);

// ================== Listen ==================
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
