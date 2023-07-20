import { SessionUser } from "src/entities/user/types";
import { LocalStorage } from "./helpers";

export const currentUserLocalStorage = new LocalStorage<SessionUser>("currentUser");
export const getUserId = () => {
    return currentUserLocalStorage.get().id;
}
export const tokenLocalStorage = new LocalStorage<string>("token");
