export class RelationCollaboratorChat {
    //#region Attributes
    readonly role: string;
    readonly projectName: string;
    //#endregion
    constructor(record: any) {
        this.role = record["id_project_role_relation"];
        this.projectName = record["id_project_name_relation"];
    }
}