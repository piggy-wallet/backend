import { Router } from "express";
import userRouter from "./api/user/user.routes";
import authRouter from "./api/user/auth/auth.routes";
const router: Router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;