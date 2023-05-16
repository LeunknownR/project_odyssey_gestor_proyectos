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
    GetProjectList = "/projects/:projectName",
    CreateProject = "/projects/create",
    DeleteProject = "/projects/delete",
    GetProjectListByGeneralAdmin = "/projects/:projectName",
    UpdateProject = "/projects/update",
    SearchCollaborator = "/projects/search-collaborator/:collaboratorName"
};
export enum ApiPathEndpointsCollaborator {
    GetProjectListForCollaborator = "/projects/:projectName",
    GetProjectDetails = "/projects/details/:projectId",
    UpdateEndDateProject="/projects/update-end-date",
    SearchCollaboratorMember = "/projects/search-collaborator-member/:projectId/:collaboratorName",
    AddProjectMembers = "/collaborator/projects/add-members"
};