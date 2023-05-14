import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import endpointRouter from "./routes/index";
import files from "./routes/files";
import { Application } from "express";
import DBConnection from "./db";

async function initServer() {
    // Inicializando variables de entorno
    dotenv.config();
    // Inicializando aplicación
    const app: Application = express();
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
    // Inicializar el server
    const PORT: number = app.get("port");
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
initServer();