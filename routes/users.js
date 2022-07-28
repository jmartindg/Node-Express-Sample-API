import express from "express";

import { getUsers, createUser, getSingleUser, removeUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// Get all users
router.get("/", getUsers);

// Create a new user
router.post("/", createUser);

// Get a single user by id
router.get("/:id", getSingleUser);

// Remove a user by id
router.delete("/:id", removeUser);

// Update a user by id
router.patch("/:id", updateUser);

export default router;
