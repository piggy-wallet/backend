import { Router } from "express";
import userHandler from "./user.handler";

const userRouter: Router = Router()

userRouter.route('/:id').get(userHandler.getUserDetails);

export default userRouter;