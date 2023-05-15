import Encrypter from "../../utils/encrypter";

export const isCorrectPassword = (password: string, currentPasswordHashed: string): Promise<boolean> => {
    return Encrypter.checkPassword(password, currentPasswordHashed);
}