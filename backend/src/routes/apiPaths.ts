export enum ApiPathEndpointGroups {
    Authentication = "/authentication",
    GeneralAdmin = "/general-admin",
    Collaborator = "/collaborator"
};
export enum ApiPathEndpointsGeneral {
    Images = "/images/:imageName"
};
export enum ApiPathEndpointsAuthentication {
    Login = "/login"
};
export enum ApiPathEndpointsGeneralAdmin {
    GetProjectListByGeneralAdmin = "/projects/all/:projectName?",
    CreateProject = "/projects/create",
    DeleteProject = "/projects/delete",
    UpdateProject = "/projects/update",
    SearchCollaborator = "/projects/search-collaborator/:collaboratorName"
};
export enum ApiPathEndpointsCollaborator {
    GetProjectListForCollaborator = "/projects/all/:collaboratorId/:projectName?",
    GetProjectDetails = "/projects/details/:projectId",
    UpdateEndDateProject="/projects/update-end-date",
    SearchCollaboratorMember = "/projects/search-collaborator-member/:projectId/:collaboratorName",
    AddProjectMembers = "/projects/add-members",
    DeleteProjectMember = "/projects/delete-member/:userId/:projectHasCollaboratorId"
};