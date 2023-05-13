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
    UpdateProject = "/projects/update",
    SearchCollaborator = "/projects/search-collaborator/:collaboratorName"
};
export enum ApiPathEndpointsCollaborator {
    GetProjectList = "/projects/:projectName",
};