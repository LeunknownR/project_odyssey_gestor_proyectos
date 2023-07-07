import { CollaboratorProjectChatMessage } from "../entities";
import ProjectChatMessage from "./projectChatMessage";

export default class FormattedProjectChatMessages {
    //#region Attributes
    readonly messages: ProjectChatMessage[];
    readonly collaborators: CollaboratorProjectChatMessage[];
    //#endregion
    constructor(resultset: any[]) {
        this.messages = resultset.map(record => new ProjectChatMessage(record));
        this.collaborators = resultset.map(record => ({
            id: record["id_collaborator_project"],
            firstName: record["collaborator_project_name"]
        }));
        // Se valida si todos los mensajes son Null
        if (this.messages.every(message => message.message === null))
            // Se asigna Null a Messages
            this.messages = null;
    }
}