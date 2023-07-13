import express, { Application } from "express";
import path from "path";
import { APP_CONFIG } from "./config";

/*
API: /api
IMÁGENES: /images
*/
const EXP_REG_FOR_EXCLUDING_EXCEPTIONS: RegExp =  /^(?!\/(api|static-images|images)).*$/;
const deployFrontend = (app: Application): void => {
    app.use(express.static(path.join(__dirname, APP_CONFIG.FRONTEND_DIR)));
    app.get(EXP_REG_FOR_EXCLUDING_EXCEPTIONS, (_, res) => {
        res.sendFile(path.join(__dirname, APP_CONFIG.FRONTEND_DIR, "index.html"));
    });
}

export default deployFrontend;