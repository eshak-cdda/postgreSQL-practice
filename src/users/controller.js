const pool = require("../../db");
// create users
const createUser = (req, res) => {
  const { full_name, age } = req.body;
  pool.query(
    "INSERT INTO users (full_name, age) VALUES ($1, $2)",
    [full_name, age],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send({ message: "User added sucsesfully" });
    }
  );
};
// get all users
const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
// update users info
const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { full_name, age } = req.body;
  pool.query(
    "UPDATE users SET full_name = $1, age = $2 WHERE id = $3",
    [full_name, age, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send({ message: "User updated sucsesfully" });
    }
  );
};
// get user by id
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
// delete user by id
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send({ message: "User deleted sucsesfully" });
  });
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser,
};
