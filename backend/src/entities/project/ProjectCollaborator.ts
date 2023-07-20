import { UserBase } from "../user/UserBase";
import { ProjectRole } from "../collaborator/entities";

export default class ProjectCollaborator implements UserBase {
    readonly id: number;
    readonly name: string;
	readonly surname: string;
	readonly urlPhoto: string | null;
	readonly email: string;
	readonly projectTeamMemberId: number;
    readonly projectRole: ProjectRole;
    constructor(record: any) {
        this.id = record["id_collaborator"];
        this.name = record["collaborator_name"];
        this.surname = record["collaborator_surname"];
        this.urlPhoto = record["collaborator_url_photo"];
        this.email = record["collaborator_email"];
        this.projectTeamMemberId = record["id_project_team_member"];
        this.projectRole = {
            id: record["id_project_role"],
            name: record["project_role_name"]
        };
    }
};