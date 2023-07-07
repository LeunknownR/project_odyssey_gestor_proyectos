export class RelationCollaboratorChat {
    //#region Attributes
    readonly projectId: number;
    readonly role: string;
    readonly projectName: string;
    //#endregion
    constructor(record: any) {
        this.projectId = record["id_project"];
        this.role = record["id_project_role_relation"];
        this.projectName = record["id_project_name_relation"];
    }
}