import { User } from "src/entities/user/types";
import { LocalStorage } from "./helpers";

export const currentUserLocalStorage = new LocalStorage<User>("currentUser");
export const tokenLocalStorage = new LocalStorage<string>("token");