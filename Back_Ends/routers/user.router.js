import express from "express";
import { addUser, deleteUser, getUser, getUsers, login, signUp, softDeleteUser, updateUser } from "../controllers/user.contollers";

const userRouter = express.Router();

userRouter.post("/add-user", addUser);
userRouter.get("/get-users", getUsers);
userRouter.get("/get-user/:user_id", getUser);
userRouter.put("/update-user/:user_id", updateUser);
userRouter.delete("/delete-user/:user_id", deleteUser);
userRouter.delete("/soft-delete/:user_id", softDeleteUser);

// Auth routes

userRouter.post("/sign-up", signUp);
userRouter.post("/login", login);

export default userRouter;
