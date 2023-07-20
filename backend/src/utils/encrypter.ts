import bcrypt from "bcrypt";

export default abstract class Encrypter {
    static encryptPassword = async (password: string): Promise<string> => {
        // Añadimos el pepper a la contraseña
        password = password + process.env.ENCRYPTION_PEPPER;
        try {
            // Generamos una sal aleatoria
            const salt: string = await bcrypt.genSalt(12);
            // Usamos la sal para encriptar la contraseña
            const hash = await bcrypt.hash(password, salt);
            return hash;
        }
        catch (err) {
            throw new Error("Encryption error");
        }
    }
    static checkPassword = (plain: string, hashed: string): Promise<boolean>  => {
        return bcrypt.compare(plain, hashed);
    }
}