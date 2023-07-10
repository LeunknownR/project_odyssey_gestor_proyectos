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
    Projects = "PROJECTS",
    Chat = "CHAT",
    Settings = "SETTINGS"
}
export const MODULE_VIEWS_BY_USER_ROLE: ModuleViewByUserRole = {
    [DBRoles.GeneralAdmin]: [
        ViewModule.Projects,
        ViewModule.Settings
    ],
    [DBRoles.Collaborator]: [
        ViewModule.Projects,
        ViewModule.Chat,
        ViewModule.Settings
    ]
};
