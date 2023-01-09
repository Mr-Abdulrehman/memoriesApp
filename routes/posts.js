import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const routes = express.Router();
routes.get("/", getPosts); //Getting
routes.post("/", auth, createPost); //Post
routes.patch("/:id", auth, updatePost); //Updating
routes.delete("/:id", auth, deletePost); // Delete post
routes.patch("/:id/likePost", auth, likePost);

export default routes;
