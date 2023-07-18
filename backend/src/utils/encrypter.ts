import bcrypt from "bcrypt";

export default abstract class Encrypter {
    static encryptPassword = async (password: string): Promise<string | null> => {
        if (!password) return null;
        // Añadimos el pepper a la contraseña
        password = password + process.env.ENCRYPTION_PEPPER;
        // Generamos una sal aleatoria
        const salt = await bcrypt.genSalt(12);
        // Usamos la sal para encriptar la contraseña
        const hash = await bcrypt.hash(password, salt);
        // Devolvemos el hash encriptado
        return hash;
    }
    static checkPassword = (plain: string, hashed: string): Promise<boolean>  => {
        return bcrypt.compare(plain, hashed);
    }
}