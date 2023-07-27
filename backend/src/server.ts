import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import initEndpoints from "./routes/index";
import files from "./routes/files";
import { Application } from "express";
import http from "http";
import { Server as WebSocketServer } from "socket.io";
import DBConnection from "./db";
import WSServiceHandler from "./websockets";
import { initAppConfig } from "./config";
import deployFrontend from "./frontend";
import ExternalWSServiceHandler from "./websockets/utils/ExternalWSServiceHandler";

async function initServer() { 
    // Inicializando variables de entorno
    initAppConfig();
    dotenv.config();
    // Inicializando aplicación
    const app: Application = express();
    const server: http.Server = http.createServer(app);
    const io = new WebSocketServer(
        server, {
            cors: {
                origin: "*"
            }
        });
    // Conectando base de datos
    await DBConnection.connect();
    // Configurando puerto en el app
    app.set("port", process.env.PORT || 4000);
    // Limitando tamaño de cuerpo de peticiones
    app.use(express.json({
        limit: "5mb"
    }));
    // Configurando cors
    app.use(cors());
    // Desplegando frontend
    deployFrontend(app);
    // Configurando rutas de exposición de media
    app.use("/", files);
    // Inicializando servicios websockets
    const wsServiceHandler: WSServiceHandler = new WSServiceHandler(io);
    wsServiceHandler.config();
    wsServiceHandler.init();
    const externalWsServiceHandler: ExternalWSServiceHandler = new ExternalWSServiceHandler(wsServiceHandler);
    // Configurando endpoints
    app.use("/api", initEndpoints(externalWsServiceHandler));
    // Inicializar el server
    const PORT: number = app.get("port");
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
initServer();