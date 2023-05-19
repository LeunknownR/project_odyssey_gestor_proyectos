import { User } from "src/entities/user/types";
import { LocalStorage } from "./types";

export const userLocalStorage = new LocalStorage<User>("currentUser");
export const tokenLocalStorage = new LocalStorage<string>("token");