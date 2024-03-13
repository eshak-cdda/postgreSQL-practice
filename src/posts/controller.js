const pool = require("../../db");
// create post
const createPost = (req, res) => {
  const { text, user_id } = req.body;
  pool.query(
    "INSERT INTO posts (text, user_id) VALUES ($1, $2)",
    [text, user_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send({ message: "Post added sucsesfully" });
    }
  );
};
// get all posts
const getAllPosts = (req, res) => {
  pool.query("SELECT * FROM posts", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
// get post by id
const getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM posts WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
};
