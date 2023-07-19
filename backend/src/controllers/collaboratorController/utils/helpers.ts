import Encrypter from "../../../utils/encrypter";

export const isCorrectPassword = (password: string, currentPasswordHashed: string): Promise<boolean> => {
    return Encrypter.checkPassword(password + process.env.ENCRYPTION_PEPPER, currentPasswordHashed);
}