import { v4 as generateUUID } from "uuid";
import fs from "fs/promises";
import { PhysicalDirectoryImages } from "./enums";

export abstract class HandlerFiles {
    private static createUploadsDirectory = async (): Promise<void> => {
        try {
            await fs.mkdir(`${process.cwd()}/public`);
            await fs.mkdir(`${process.cwd()}/public/uploads`);
        }
        catch (err) {}
    }
    private static getPhysicImageUrlFromImagePath = (directory: PhysicalDirectoryImages, fileName: string): string => {
        return `${process.cwd()}/public/${directory}/${fileName}`;
    }
    static getPhysicImageUrl = (directory: PhysicalDirectoryImages, imageName: string): string => {
        return `${process.cwd()}/public/${directory}/${imageName}`;
    }
    static createImage = async (imageBase64: string): Promise<string> => {
        // Creando directorios si no existen
        await HandlerFiles.createUploadsDirectory();
        // Procesamos la imagen en formato base64
        const imageName: string = `${generateUUID()}.jpg`;
        // Convertimos la imagen a formato binario
        const buffer = Buffer.from(imageBase64, "base64");
        // Almacenando imagen
        await fs.writeFile(HandlerFiles.getPhysicImageUrl(PhysicalDirectoryImages.DynamicImages, imageName), buffer);
        // Recuperando url pública de la imagen
        return imageName;
    }
    static destroyImage = async (path: string): Promise<void> => {
        await fs.unlink(HandlerFiles.getPhysicImageUrlFromImagePath(PhysicalDirectoryImages.DynamicImages, path));
    }
    static async imageExists(urlPhotoDestroy: string): Promise<boolean> {
        const imagePath = HandlerFiles.getPhysicImageUrlFromImagePath(PhysicalDirectoryImages.DynamicImages, urlPhotoDestroy);
        try {
            const stats = await fs.stat(imagePath);
            return stats.isFile();  // Verifica si la ruta es un archivo
        } catch {
            return false; // Si hay un error, asume que el archivo no existe
        }
    }
};