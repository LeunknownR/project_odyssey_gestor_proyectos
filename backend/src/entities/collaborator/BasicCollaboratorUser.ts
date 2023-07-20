import CollaboratorUserBase from "./CollaboratorUserBase";

export default class BasicCollaboratorUser implements CollaboratorUserBase {
	readonly id: number;
    readonly name: string;
    readonly surname: string;
    readonly urlPhoto: string;
    readonly email: string;
    constructor(record: any) {
        this.id = record["id_collaborator"];
        this.name = record["name"];
        this.surname = record["surname"];
        this.urlPhoto = record["url_photo"];
        this.email = record["email"];
    }
}