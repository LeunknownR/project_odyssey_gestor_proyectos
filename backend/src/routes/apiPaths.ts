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
    DeleteProject = "/projects/delete/:projectId"
};
export enum ApiPathEndpointsCollaborator {
};