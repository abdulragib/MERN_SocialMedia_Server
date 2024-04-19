import PostModel from "../Models/postModel.js";

import mongoose from "mongoose";

//create new post
export const createPost = async (req, res) => {
  const newPost = await PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json("Post created!");
  } catch (error) {
    res.status(500).json(error);
  }
};

