const pool = require("../../db");
const { postQuery } = require("./quearys");
// create post
const createPost = (req, res) => {
  const { text, title, user_id } = req.body;
  pool.query(
    "INSERT INTO posts (text,title, user_id) VALUES ($1, $2, $3)",
    [text, title, user_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send({ message: "Post added sucsesfully" });
    }
  );
};
// update post by id
const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const { text, title } = req.body;
  pool.query(
    "UPDATE posts SET text = $1, title = $2 WHERE id = $3",
    [text, title, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send({ message: "Post updated sucsesfully" });
    }
  );
};

// get all posts
const getAllPosts = (req, res) => {
  pool.query(postQuery, (error, results) => {
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
// delete post by id
const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM posts WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send({ message: "Post deleted sucsesfully" });
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
