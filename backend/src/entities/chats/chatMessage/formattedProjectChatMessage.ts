import { CollaboratorProjectChatMessage } from "../entities";
import ProjectChatMessage from "./projectChatMessage";

export default class FormattedProjectChatMessages {
    //#region Attributes
    readonly messages: ProjectChatMessage[];
    readonly collaborators: CollaboratorProjectChatMessage[];
    //#endregion
    constructor(resultset: any[]) {
        this.messages = resultset
            .filter(record => record["id_project_chat_message"])
            .map(record => new ProjectChatMessage(record));
        this.collaborators = [];
        resultset.forEach(record => {
            const collaboratorId: number = record["id_collaborator_project"];
            if (this.collaborators.some(collaborator => collaborator.id === collaboratorId))
                return;
            this.collaborators.push({
                id: collaboratorId,
                firstName: record["collaborator_project_first_name"]
            });
        });
    }
}