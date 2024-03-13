const { Router } = require("express");
const { getAllPosts, getPostById, createPost } = require("./controller");

const routes = Router();

// creaete post
routes.post("/", createPost);
// get posts
routes.get("/", getAllPosts);
// get post by id
routes.get("/:id", getPostById);
module.exports = routes;
