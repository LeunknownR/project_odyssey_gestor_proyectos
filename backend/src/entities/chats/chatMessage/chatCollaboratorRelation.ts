export class RelationCollaboratorChat {
    //#region Attributes
    readonly role: string;
    readonly projectName: string;
    //#endregion
    constructor(record: any) {
        this.role = record["collaborator_project_role"];
        this.projectName = record["project_name"];
    }
}