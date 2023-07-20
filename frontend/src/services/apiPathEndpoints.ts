export enum ApiPathEndpoints {
    Login = "/authentication/login",
    CreateProject = "/general-admin/projects/create",
    DeleteProject = "/general-admin/projects/delete",
    GetProjectListByGeneralAdmin = "/general-admin/projects/all",
    UpdateProject = "/general-admin/projects/update",
    SearchCollaborator = "/general-admin/collaborators/search",
    GetProjectListForCollaborator = "/collaborator/projects/all",
    GetProjectDetails = "/collaborator/projects/details",
    UpdateEndDateProject = "/collaborator/projects/update-end-date",
    SearchCollaboratorMember = "/collaborator/projects/search-collaborator-member",
    AddProjectMembers = "/collaborator/projects/add-members",
    DeleteProjectMember = "/collaborator/projects/delete-member",
    GetProjectDetailsForPanel = "/collaborator/project-panel/details",
    SearchProjectTeamMembers = "/collaborator/project-tasks/team-members",
    SearchTaskPriorities = "/collaborator/project-tasks/priorities"
}
