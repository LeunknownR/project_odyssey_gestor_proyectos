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
    GetProjectListByGeneralAdmin = "/projects/:projectName",
    CreateProject = "/projects/create",
    UpdateProject = "/projects/update",
    SearchCollaborator = "/projects/search-collaborator/:collaboratorName"
};
export enum ApiPathEndpointsCollaborator {
    GetProjectListForCollaborator = "/projects/:projectName",
    UpdateEndDateProject="/projects/update-end-date",
    SearchCollaboratorMember = "/projects/search-collaborator-member/:projectId/:collaboratorName",
    AddCollaboratorsInProject = "/collaborator/projects/add-members",
};