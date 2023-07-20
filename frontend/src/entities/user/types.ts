import { DBRoles } from "src/config/roles";

export type Role = {
    id: DBRoles;
    name: string;
};
export type Credentials = {
    username: string;
    password?: string;
};
export type User = {
    id: number;
    name: string;
    surname: string;
    username: string;
    urlPhoto: string | null;
    email: string;
};
export type SessionUser = User & {
    role: Role;
}
export type AuthData = {
    user: SessionUser;
    token: string;
};
