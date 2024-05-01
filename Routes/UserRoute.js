import express from "express";
import {
  UnfollowUser,
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../Controllers/UserController.js";
const router = express.Router();

router.get('/',getAllUsers)
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", UnfollowUser);

export default router;
