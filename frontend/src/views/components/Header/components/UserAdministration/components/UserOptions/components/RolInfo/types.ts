import { Role } from "src/entities/user/types";

export type RolInfoProps = {
    role: Role;
}
export type RoleColorProps = {
    [role: string]: string;
}