export enum StoredProcedures {
    GetUserPasswordByUsername = "CALL get_userpassword_by_username(?);",
    GetBasicUserInformation = "CALL get_basic_user_information(?);",
    // GetUserPasswordByUsername = "CALL sp_get_userpassword_by_username(?);",
    // GetBasicUserInformation = "CALL sp_get_basic_user_information(?);",
    GetProjectList = "CALL sp_get_list_projects(?);",
    CreateProject = "CALL sp_create_project(?, ?, ?, ?, ?, ?);"
}