import CollaboratorUserBase from "../collaborator/CollaboratorUserBase";

export default class ProjectLeader implements CollaboratorUserBase {
    readonly id: number;
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly urlPhoto: string;
    constructor(record: any) {
        this.id = record["id_collaborator"];
        this.name = record["collaborator_name"];
        this.surname = record["collaborator_surname"];
        this.email = record["collaborator_email"];
        this.urlPhoto = record["collaborator_url_photo"];
    }
}