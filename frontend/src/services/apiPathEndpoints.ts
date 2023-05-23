export enum ApiPathEndpoints {
    Login = "/authentication/login",
    GetProjectList = "/general-admin/projects",
    CreateProject = "/general-admin/projects/create",
    DeleteProject = "/general-admin/projects/delete",
    GetProjectListByGeneralAdmin = "/general-admin/projects",
    UpdateProject = "/general-admin/projects/update",
    SearchCollaborator = "/general-admin/projects/search-collaborator",
    GetProjectListForCollaborator = "/collaborator/projects",
    GetProjectDetails = "/collaborator/projects/details",
    UpdateEndDateProject = "/collaborator/projects/update-end-date",
    SearchCollaboratorMember = "/collaborator/projects/search-collaborator-member",
    AddProjectMembers = "/collaborator/projects/add-members",
    DeleteProjectMember = "/collaborator/projects/delete-member"
}