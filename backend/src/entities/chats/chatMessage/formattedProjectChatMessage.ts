import { CollaboratorProjectChatMessage } from "../entities";
import ProjectChatMessage from "./projectChatMessage";

export default class FormattedProjectChatMessages {
    //#region Attributes
    readonly messages: ProjectChatMessage[];
    readonly collaborators: CollaboratorProjectChatMessage[];
    //#endregion
    constructor(resultset: any[]) {
        this.messages = [];
        this.collaborators = [];
        resultset.forEach(record => {
            this.messages.push(new ProjectChatMessage(record));
            this.collaborators.push({
                id: record["collaborator_id"],
                firstName: record["collaborator_first_name"]
            });
        });
    }
}