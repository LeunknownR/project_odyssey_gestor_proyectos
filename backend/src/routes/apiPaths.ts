export enum ApiPathEndpointGroups {
    Authentication = "/authentication",
    GeneralAdmin = "/general-admin",
    Collaborator = "/collaborator"
}
export enum ApiPathEndpointsGeneral {
    DynamicImages = "/images/:imageName",
    StaticImages = "/static-images/:imageName"
}
export enum ApiPathEndpointsAuthentication {
    Login = "/login"
}
export enum ApiPathEndpointsGeneralAdmin {
    // Proyectos
    GetProjectListByGeneralAdmin = "/projects/all/:projectName?",
    CreateProject = "/projects/create",
    DeleteProject = "/projects/delete",
    UpdateProject = "/projects/update",
    // Collaborators
    SearchCollaborator = "/projects/search-collaborator/:collaboratorName",
    GetCollaborators = "/collaborators",
    CreateCollaborator = "/collaborators/create",
    UpdateCollaborator = "/collaborators/update",
    DeleteCollaborator = "/collaborators/delete"
}
export enum ApiPathEndpointsCollaborator {
    // Proyectos
    GetProjectListForCollaborator = "/projects/all/:collaboratorId/:projectName?",
    GetProjectDetails = "/projects/details/:projectId",
    UpdateEndDateProject="/projects/update-end-date",
    SearchCollaboratorForProjectTeamMember = "/projects/search-collaborator-member/:projectId/:collaboratorName",
    AddProjectMembers = "/projects/add-members",
    DeleteProjectMember = "/projects/delete-member/:userId/:projectTeamMemberId",
    // Panel
    GetProjectPanelDetail="/project-panel/details/:projectId/:userId",
    // Tareas
    GetTaskPriorityList ="/project-tasks/priorities",
    SearchProjectTeamMember ="/project-tasks/team-members/:projectId/:collaboratorName",
    // Perfil
    UpdatePhoto = "/profile/update-photo",
    ChangePassword = "/profile/change-password"
}