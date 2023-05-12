import { Router } from "express";
import { ApiPathEndpointsGeneral } from "./apiPaths";
import { HandlerFiles } from "../utils/files";

const router = Router();
router.get(ApiPathEndpointsGeneral.Images, (req, res) => {
    const imageName: string = req.params.imageName;
    const imagePath: string = HandlerFiles.getPhysicImageUrl(imageName);
    res.sendFile(imagePath);
});

export default router;