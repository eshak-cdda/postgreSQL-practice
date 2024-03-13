const { Router } = require("express");
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("./controller");

const routes = Router();

// creaete post
routes.post("/", createPost);
// update post by id
routes.put("/:id", updatePost);
// get posts
routes.get("/", getAllPosts);
// get post by id
routes.get("/:id", getPostById);
// delete post by id
routes.delete("/:id", deletePost);
module.exports = routes;
