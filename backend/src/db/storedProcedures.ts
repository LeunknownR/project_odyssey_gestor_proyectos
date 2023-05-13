export enum StoredProcedures {
    GetUserPasswordByUsername = "CALL sp_get_userpassword_by_username(?);",
    GetBasicUserInformation = "CALL sp_get_basic_user_information(?);",
    GetProjectList = "CALL sp_get_list_projects(?);",
    SearchCollaborators= "sp_search_collaborator_by_username(?);",
    CreateProject = "CALL sp_create_project(?, ?, ?, ?, ?, ?);",
    UpdateProject = "sp_update_project_by_project_id(?,?,?,?,?,?);",
    GetProjectListByCollaborator ="sp_get_project_list_by_collaborator_name(?);",
    UpdateEndDateProjectByLeader = "sp_update_end_date_leader(?,?);",
}
