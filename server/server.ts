import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";
import { encrpt, decrpt } from "./api/user/user.utils";

const app: Application = express();

//MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//HEALTH
app.get('/', (req: Request, res: Response) => res.status(200).json({msg: `Hello World`}));

/* //encrypt test
app.get('/encrypt/:message', (req: Request, res: Response) => {
    const { message } = req.params;
    const encrypt = encrpt(message);
    res.status(200).json({ encrypt });
});

//decrypt test
app.get('/decrypt/:message', (req: Request, res: Response) => {
    const { message } = req.params;
    const decrypt = decrpt(message);
    res.status(200).json({ decrypt });
}); */


//ROUTER
app.use(router);

export default app;

