import { SessionUser } from "./User";

export type Role = {
    id: string; 
    name: string;
};
export type Credentials = {
    username: string;
    password?: string;
};
export type AuthData = {
    user: SessionUser;
    token: string;
};