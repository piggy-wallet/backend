import { Router } from "express";
import userRouter from "./api/user/user.routes";

const router: Router = Router();

router.use('/users', userRouter)

export default router;