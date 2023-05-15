import { v4 as generateUUID } from "uuid";
import fs from "fs/promises";

export abstract class HandlerFiles {
    private static getImagePath = (imageName: string): string => {
        return `/images/${imageName}`;
    }
    private static createUploadsDirectory = async (): Promise<void> => {
        await fs.mkdir("/public");
        await fs.mkdir("/public/uploads");
    }
    private static getPhysicImageUrlFromImagePath = (imagePath: string): string => {
        const fileName = imagePath.split("/images/")[1];
        return `${process.cwd()}/public/uploads/${fileName}`;
    }
    static getPhysicImageUrl = (imageName: string): string => {
        return `${process.cwd()}/public/uploads/${imageName}`;
    }
    static createImage = async (imageBase64: string): Promise<string> => {
        // Creando directorios si no existen
        await HandlerFiles.createUploadsDirectory();
        // Procesamos la imagen en formato base64
        const imageName = `${generateUUID()}.jpg`;
        // Convertimos la imagen a formato binario
        const buffer = Buffer.from(imageBase64, "base64");
        // Almacenando imagen
        await fs.writeFile(HandlerFiles.getPhysicImageUrl(imageName), buffer);
        // Recuperando url pública de la imagen
        return HandlerFiles.getImagePath(imageName);
    }
    static destroyImage = async (path: string): Promise<void> => {
        if (!path) return;
        await fs.unlink(HandlerFiles.getPhysicImageUrlFromImagePath(path));
    }
};