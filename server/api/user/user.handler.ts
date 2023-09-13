import { Request, Response } from "express";

const getUserDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        res.status(200).json({msg: `User ID ${id} details.`});
    } catch (err) {
        console.error(err);
        res.status(500).json({Error: err});
    }
};

export default { getUserDetails }