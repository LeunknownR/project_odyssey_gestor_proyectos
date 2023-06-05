export enum StoredProcedures {
    GetUserPasswordByUsername = "CALL sp_get_userpassword_by_username(?);",
    GetBasicUserInformation = "CALL sp_get_basic_user_information(?);",
    GetProjectListForGeneralAdmin = "CALL sp_get_project_list_for_general_admin(?);",
    GetProjectListForCollaborator = "CALL sp_get_project_list_for_collaborator(?,?);",
    CreateProject = "CALL sp_create_project(?, ?, ?, ?, ?, ?);",
    SearchCollaborator = "CALL sp_search_collaborator_by_username(?);",
    UpdateProject = "CALL sp_update_project_by_project_id(?, ?, ?, ?, ?, ?);",
    DeleteProject = "CALL sp_delete_project_by_id_project(?, ?);",
    UpdateEndDateProjectByLeader = "CALL sp_update_end_date_leader(?, ?);",
    SearchCollaboratorForProjectMember = "CALL sp_search_collaborator_member(?, ?);",
    AddProjectMembers = "CALL sp_add_project_members(?, ?);",
    DeleteProjectMember = "CALL sp_delete_project_member(?, ?);",
    GetProjectDetails = "CALL sp_get_project_details_by_project_id(?);",
    GetProjectTaskBoard = "CALL sp_get_project_task_list(?);"
}