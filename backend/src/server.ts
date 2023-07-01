import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import endpointRouter from "./routes/index";
import files from "./routes/files"; 
import { Application } from "express";
import http from "http";
import { Server as WebSocketServer } from "socket.io";
import DBConnection from "./db";
import IOServiceHandler from "./websockets";

async function initServer() {
    // Inicializando variables de entorno
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
    // Configurando endpoints
    app.use("/", files);
    app.use("/api", endpointRouter);
    // Inicializando servicios websockets
    const ioServiceHandler: IOServiceHandler = new IOServiceHandler(io);
    ioServiceHandler.config();
    ioServiceHandler.init();
    // Inicializar el server
    const PORT: number = app.get("port");
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
initServer();