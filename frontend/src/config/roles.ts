import { ModuleViewByUserRole } from "./types";

export enum DBRoles {
    GeneralAdmin = "GAD",
    Collaborator = "CLB"
}
export enum ViewModule {
    ProjectManager = "PROJECT_MANAGER",
    ProjectDetails = "PROJECT_DETAILS"
}
export const MODULE_VIEWS_BY_USER_ROLE: ModuleViewByUserRole = {
    [DBRoles.GeneralAdmin]: [
        ViewModule.ProjectManager,
    ],
    [DBRoles.Collaborator]: [
        ViewModule.ProjectManager,
        ViewModule.ProjectDetails
    ],
};
