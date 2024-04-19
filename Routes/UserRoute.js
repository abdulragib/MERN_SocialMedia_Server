import express from "express";
import {
  UnfollowUser,
  deleteUser,
  followUser,
  getUser,
  updateUser,
} from "../Controllers/UserController.js";
const router = express.Router();

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.put("/:id/follow", followUser);
router.put("/:id/unfollow", UnfollowUser);

export default router;
