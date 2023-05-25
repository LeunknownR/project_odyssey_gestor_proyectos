import { CollaboratorUser, ProjectCollaborator, ProjectRole } from "./types";

export const collaboratorUserMapper = (record: any): CollaboratorUser => ({
    id: record["id_collaborator"],
    name: record["name"],
    surname: record["surname"], 
    urlPhoto: record["url_photo"],
    email: record["email"]
});
export const collaboratorMemberMapper = (record: any): CollaboratorUser => ({
    id: record["id_collaborator"],
    name: record["name"],
    surname: record["surname"], 
    urlPhoto: record["url_photo"],
    email: record["email"]
});
export const projectRoleMapper = (record: any): ProjectRole => ({
    id: record["id_project_role"],
    name: record["project_role_name"]
});
export const projectCollaboratorMapper = (record: any): ProjectCollaborator => ({
    id: record["id_collaborator"],
    name: record["collaborator_name"],
    surname: record["collaborator_surname"],
    urlPhoto: record["collaborator_url_photo"],
    projectRole: projectRoleMapper(record)
});