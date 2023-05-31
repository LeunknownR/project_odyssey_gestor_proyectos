import { ModuleViewByUserRole } from "./types";

export enum DBRoles {
    GeneralAdmin = "GAD",
    Collaborator = "CLB"
}
export enum DBProjectRoles {
    ProjectLeader = "PLD",
    ProjectMember = "PMB"
}
export enum ViewModule {
    ProjectManager = "PROJECT_MANAGER",
    ProjectDetails = "PROJECT_DETAILS",
    TaskManager = "TASK_MANAGER",
    Settings = "SETTINGS"
}
export const MODULE_VIEWS_BY_USER_ROLE: ModuleViewByUserRole = {
    [DBRoles.GeneralAdmin]: [
        ViewModule.ProjectManager,
        ViewModule.Settings
    ],
    [DBRoles.Collaborator]: [
        ViewModule.ProjectManager,
        ViewModule.ProjectDetails,
        ViewModule.TaskManager,
        ViewModule.Settings
    ]
};
