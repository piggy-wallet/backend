import { Router } from "express";
import userRouter from "./api/user/user.routes";
import authRouter from "./api/user/auth/auth.routes";
import { authMid } from "./middlewares/auth.middleware";
const router: Router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);

router.get('/piggys', authMid, (req, res) => {
    res.status(200).json({msg: 'Piggys'});
})

export default router;