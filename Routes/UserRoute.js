import express from "express";
import {
  UnfollowUser,
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/authMiddleWare.js";
const router = express.Router();

router.get("/", getAllUsers);
router
  .route("/:id")
  .get(getUser)
  .put(authMiddleWare, updateUser)
  .delete(authMiddleWare, deleteUser);
router.put("/:id/follow", authMiddleWare, followUser);
router.put("/:id/unfollow", authMiddleWare, UnfollowUser);

export default router;
