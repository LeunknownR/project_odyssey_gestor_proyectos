import { DBRoles } from "src/config/roles";
import { RoleColorProps } from "../types";

export const ROLE_COLOR: RoleColorProps = {
    [DBRoles.GeneralAdmin]: "var(--orange-2)",
    [DBRoles.Collaborator]: "#C8E6C9"
}