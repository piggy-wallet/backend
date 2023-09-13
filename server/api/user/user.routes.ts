import { Router } from "express";
import userHandler from "./user.handler";

const userRouter: Router = Router()

userRouter.get('/:id', userHandler.getUserDetails);

export default userRouter;