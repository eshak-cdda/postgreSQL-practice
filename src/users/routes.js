const { Router } = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser,
} = require("./controller");

const routes = Router();

// creaete users
routes.post("/", createUser);
// get all users
routes.get("/", getAllUsers);
// update users info
routes.put("/:id", updateUser);
// get user by id
routes.get("/:id", getUserById);
// delete user by id
routes.delete("/:id", deleteUser);

module.exports = routes;
