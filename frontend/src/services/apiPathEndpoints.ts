export enum ApiPathEndpoints {
    Login = "/authentication/login",
    GetProjectList = "/general-admin/projects/:projectName",
    CreateProject = "/general-admin/projects/create",
    DeleteProject = "/general-admin/projects/delete",
    GetProjectListByGeneralAdmin = "/general-admin/projects/a",
    UpdateProject = "/general-admin/projects/update",
    SearchCollaborator = "/general-admin/projects/search-collaborator/:collaboratorName",
    GetProjectListForCollaborator = "/collaborator/projects/:projectName/:collaboratorId",
    GetProjectDetails = "/collaborator/projects/details/:projectId",
    UpdateEndDateProject="/collaborator/projects/update-end-date",
    SearchCollaboratorMember = "/collaborator/projects/search-collaborator-member/:projectId/:collaboratorName",
    AddProjectMembers = "/collaborator/projects/add-members",
    DeleteProjectMember = "/collaborator/projects/delete-member"
}