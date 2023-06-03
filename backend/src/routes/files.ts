import { Router } from "express";
import { ApiPathEndpointsGeneral } from "./apiPaths";
import { HandlerFiles } from "../utils/files";
import { PhysicalDirectoryImages } from "../utils/enums";

const router = Router();
router.get(ApiPathEndpointsGeneral.DynamicImages, (req, res) => {
    const imageName: string = req.params.imageName;
    const imagePath: string = HandlerFiles.getPhysicImageUrl(PhysicalDirectoryImages.DynamicImages, imageName);
    res.sendFile(imagePath);
});
router.get(ApiPathEndpointsGeneral.StaticImages, (req, res) => {
    const imageName: string = req.params.imageName;
    const imagePath: string = HandlerFiles.getPhysicImageUrl(PhysicalDirectoryImages.StaticImages, imageName);
    res.sendFile(imagePath);
});

export default router;