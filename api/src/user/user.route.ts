import express from 'express'
import {getAllUsers, postUser, getUser,putUser, deleteUser } from './user.controler'

export const userRouter = express.Router();

// middleware specific to this route
userRouter.use(express.json())


// route handlers
userRouter.get("/user", getAllUsers);

userRouter.post("/user/:id", postUser);

userRouter.get("/user/:id", getUser);

userRouter.put("/user/:id",putUser);

userRouter.delete("/user/:id", deleteUser);

