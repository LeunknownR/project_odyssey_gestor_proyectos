import { CollaboratorUser, ProjectCollaborator, ProjectRole } from "./types";

export const collaboratorUserMapper = (record: any): CollaboratorUser => ({
    id: record["id_collaborator"],
    name: record["user_name"],
    surname: record["user_surname"], 
    urlPhoto: record["url_photo"]
});
export const projectRoleMapper = (record: any): ProjectRole => ({
    id: record["id_project_role"],
    name: record["project_role_name"]
});
export const projectCollaboratorMapper = (record: any): ProjectCollaborator => ({
    id: record["id_collaborator"],
    name: record["user_name"],
    surname: record["user_surname"],
    urlPhoto: record["url_photo"],
    projectRole: projectRoleMapper(record)
});