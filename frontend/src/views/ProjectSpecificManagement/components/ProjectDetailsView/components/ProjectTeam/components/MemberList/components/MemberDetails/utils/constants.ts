import { DBProjectRoles } from "src/config/roles";
import { ProjectRoleVisual } from "../types";

export const PROJECT_ROLE: Record<DBProjectRoles, ProjectRoleVisual> = {
    [DBProjectRoles.ProjectLeader]: {
        name: "Líder de proyecto",
        className: "leader",
    },
    [DBProjectRoles.ProjectMember]: {
        name: "Miembro",
        className: "member",
    },
};
