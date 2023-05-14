import { CollaboratorUser, ProjectCollaborator, ProjectRole } from "./types";

export const collaboratorMapper = (record: any): CollaboratorUser => ({
    id: record["id"],
    name: record["name"],
    surname: record["surname"], 
    urlPhoto: record["url_photo"]
});
export const projectRoleMapper = (record: any): ProjectRole => ({
    id: record["project_role_id"],
    name: record["project_role_name"]
});
export const projectCollaboratorMapper = (record: any): ProjectCollaborator => ({
    id: record["id"],
    name: record["name"],
    surname: record["surname"],
    urlPhoto: record["url_photo"],
    projectRole: projectRoleMapper(record)
});